"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Home particle hero (D-0255 / D-0256 / D-0257) — WebGL2 morph stage.
 * COUNT=650000, stride 28 bytes (7 floats), ~24.5s snappy loop:
 * intro → HUMAN → LOGO → TOUCH → WATER → RETURN → HUMAN.
 *
 * D-0257: each scene is a true 16:9 cinematic frame cropped from the
 * owner 5-panel sheet (sheet is bake source only — never the hero image).
 * Assets: /home/particle-hero/*.bin.gz — client DecompressionStream.
 * prefers-reduced-motion → single-frame poster (no WebGL thrash).
 *
 * Performance: desktop full COUNT + DPR≤2.5; mobile tries full COUNT,
 * then may lower DPR or subsample (½) if sustained frame time is high.
 */

const COUNT = 650_000;
const STRIDE = 28;
const FLOATS_PER = STRIDE / 4;
const LOOP_S = 24.5;
const INTRO_S = 1.25;
/** Bust long-cache static headers when bins/poster change (D-0257). */
const ASSET_VER = "d0257";
const ASSET_BASE = "/home/particle-hero";
const POSTER = `${ASSET_BASE}/poster.webp?v=${ASSET_VER}`;

const TARGETS = ["HUMAN", "LOGO", "TOUCH", "WATER", "RETURN"] as const;
type MorphKey = (typeof TARGETS)[number];

const FILE: Record<MorphKey, string> = {
  HUMAN: "human",
  LOGO: "logo",
  TOUCH: "touch",
  WATER: "water",
  RETURN: "return",
};

/** Brighter, sharper points + scatter uniform for intro converge. */
const VS = `#version 300 es
precision highp float;
layout(location=0)in vec2 p0;layout(location=1)in vec3 c0;layout(location=2)in float s0;layout(location=3)in float seed;
layout(location=4)in vec2 p1;layout(location=5)in vec3 c1;layout(location=6)in float s1;
uniform float m,time,dpr,wave,light,scatter;uniform vec2 asp;out vec3 col;
float ez(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
void main(){
 float lm=ez((m-seed*.022)/.978);vec2 p=mix(p0,p1,lm);float arc=sin(3.14159*lm);
 // Ambient shimmer (active on holds too)
 p+=vec2(sin(time*.32+seed*107.),cos(time*.28+seed*83.))*(.000035+fract(seed*23.)*.000085);
 float q1=sin(p.x*20.-time*1.05+seed*.5),q2=sin(p.x*12.-time*.62+seed*1.1);
 p.y+=(q1*.0042+q2*.0022)*wave;p.x+=cos(p.y*15.-time*.72+seed*.8)*.00155*wave;
 p+=vec2(sin(seed*211.+time*.11)*.0042,cos(seed*167.+time*.09)*.0028)*arc;
 // Intro: converge from scatter
 vec2 rnd=vec2(fract(seed*47.13),fract(seed*91.77));
 p=mix(p, rnd, clamp(scatter,0.,1.));
 gl_Position=vec4((p.x*2.-1.)*asp.x,-(p.y*2.-1.)*asp.y,0,1);
 float psz=mix(s0,s1,lm)*dpr*(0.78+.018*sin(time*.55+seed*53.));
 gl_PointSize=clamp(psz,0.85,1.72*dpr);
 col=mix(c0,c1,lm)*light*(1.-scatter*.55);
}`;

const FS = `#version 300 es
precision highp float;in vec3 col;out vec4 o;
void main(){
 float d=length(gl_PointCoord-.5);
 float core=smoothstep(.42,.0,d);
 float halo=smoothstep(.5,.08,d)*.085;
 float a=core+halo;
 if(a<.002)discard;
 vec3 c=col*(1.18+core*.28);
 o=vec4(c,a);
}`;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isCoarseMobile(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(max-width: 900px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

async function loadBinGz(url: string): Promise<Float32Array> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  if (!res.body || typeof DecompressionStream === "undefined") {
    const ab = await res.arrayBuffer();
    return new Float32Array(ab);
  }
  const stream = res.body.pipeThrough(new DecompressionStream("gzip"));
  const ab = await new Response(stream).arrayBuffer();
  const expected = COUNT * STRIDE;
  if (ab.byteLength !== expected) {
    throw new Error(
      `Unexpected buffer size for ${url}: ${ab.byteLength} (expected ${expected})`,
    );
  }
  return new Float32Array(ab);
}

function subsample(src: Float32Array, keepEvery: number): Float32Array {
  if (keepEvery <= 1) return src;
  const n = src.length / FLOATS_PER;
  const outN = Math.floor(n / keepEvery);
  const out = new Float32Array(outN * FLOATS_PER);
  for (let i = 0, j = 0; i < n; i += keepEvery, j++) {
    out.set(
      src.subarray(i * FLOATS_PER, (i + 1) * FLOATS_PER),
      j * FLOATS_PER,
    );
  }
  return out;
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) throw new Error("createShader failed");
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(sh) || "shader compile error";
    gl.deleteShader(sh);
    throw new Error(info);
  }
  return sh;
}

type HeroParticleSceneProps = {
  ariaLabel: string;
};

export function HeroParticleScene({ ariaLabel }: HeroParticleSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<"loading" | "webgl" | "poster">(() =>
    prefersReducedMotion() ? "poster" : "loading",
  );

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let cancelled = false;
    let raf = 0;
    let gl: WebGL2RenderingContext | null = null;
    let resizeObs: ResizeObserver | null = null;
    let mediaReduced: MediaQueryList | null = null;

    const onReduced = () => {
      if (prefersReducedMotion()) {
        cancelled = true;
        if (raf) cancelAnimationFrame(raf);
        setMode("poster");
      }
    };

    mediaReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaReduced.addEventListener("change", onReduced);

    (async () => {
      try {
        const loaded = await Promise.all(
          TARGETS.map((k) =>
            loadBinGz(`${ASSET_BASE}/${FILE[k]}.bin.gz?v=${ASSET_VER}`),
          ),
        );
        if (cancelled) return;
        const buffers = {} as Record<MorphKey, Float32Array>;
        for (let i = 0; i < TARGETS.length; i++) {
          const key = TARGETS[i];
          const buf = loaded[i];
          if (!key || !buf) throw new Error("buffer load incomplete");
          buffers[key] = buf;
        }

        gl = canvas.getContext("webgl2", {
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          desynchronized: true,
        });
        if (!gl) {
          setMode("poster");
          return;
        }

        const vs = compile(gl, gl.VERTEX_SHADER, VS);
        const fs = compile(gl, gl.FRAGMENT_SHADER, FS);
        const program = gl.createProgram();
        if (!program) throw new Error("createProgram failed");
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(program) || "link failed");
        }
        gl.useProgram(program);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

        const ba = gl.createBuffer();
        const bb = gl.createBuffer();
        if (!ba || !bb) throw new Error("createBuffer failed");

        let active: Record<MorphKey, Float32Array> = buffers;
        let drawCount = COUNT;
        let keepEvery = 1;
        let lastPair = "";
        let dprCap = Math.min(window.devicePixelRatio || 1, 2.5);
        if (isCoarseMobile()) dprCap = Math.min(dprCap, 2);

        const um = gl.getUniformLocation(program, "m");
        const ut = gl.getUniformLocation(program, "time");
        const ud = gl.getUniformLocation(program, "dpr");
        const uw = gl.getUniformLocation(program, "wave");
        const ul = gl.getUniformLocation(program, "light");
        const us = gl.getUniformLocation(program, "scatter");
        const ua = gl.getUniformLocation(program, "asp");

        const pair = (A: MorphKey, B: MorphKey) => {
          if (!gl) return;
          const key = `${A}|${B}|${keepEvery}`;
          if (key === lastPair) return;
          lastPair = key;
          gl.bindBuffer(gl.ARRAY_BUFFER, ba);
          gl.bufferData(gl.ARRAY_BUFFER, active[A], gl.STATIC_DRAW);
          for (let i = 0; i < 4; i++) gl.enableVertexAttribArray(i);
          gl.vertexAttribPointer(0, 2, gl.FLOAT, false, STRIDE, 0);
          gl.vertexAttribPointer(1, 3, gl.FLOAT, false, STRIDE, 8);
          gl.vertexAttribPointer(2, 1, gl.FLOAT, false, STRIDE, 20);
          gl.vertexAttribPointer(3, 1, gl.FLOAT, false, STRIDE, 24);
          gl.bindBuffer(gl.ARRAY_BUFFER, bb);
          gl.bufferData(gl.ARRAY_BUFFER, active[B], gl.STATIC_DRAW);
          for (let i = 4; i < 7; i++) gl.enableVertexAttribArray(i);
          gl.vertexAttribPointer(4, 2, gl.FLOAT, false, STRIDE, 0);
          gl.vertexAttribPointer(5, 3, gl.FLOAT, false, STRIDE, 8);
          gl.vertexAttribPointer(6, 1, gl.FLOAT, false, STRIDE, 20);
        };

        const resize = () => {
          if (!gl || !canvas || !wrap) return;
          const d = Math.min(window.devicePixelRatio || 1, dprCap);
          const w = Math.max(1, wrap.clientWidth);
          const h = Math.max(1, wrap.clientHeight);
          canvas.width = Math.floor(w * d);
          canvas.height = Math.floor(h * d);
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.uniform1f(ud, d);
          const r = w / h;
          const target = 16 / 9;
          let ax = 1;
          let ay = 1;
          if (r > target) ax = target / r;
          else ay = r / target;
          gl.uniform2f(ua, ax, ay);
        };

        resizeObs = new ResizeObserver(resize);
        resizeObs.observe(wrap);
        resize();

        const draw = (
          A: MorphKey,
          B: MorphKey,
          m: number,
          t: number,
          w: number,
          l: number,
          scatter = 0,
        ) => {
          if (!gl) return;
          pair(A, B);
          gl.uniform1f(um, m);
          gl.uniform1f(ut, t);
          gl.uniform1f(uw, w);
          gl.uniform1f(ul, l);
          gl.uniform1f(us, scatter);
          gl.drawArrays(gl.POINTS, 0, drawCount);
        };

        const applySubsample = (every: number) => {
          if (every === keepEvery || !gl) return;
          keepEvery = every;
          const next = {} as Record<MorphKey, Float32Array>;
          for (const k of TARGETS) {
            next[k] = subsample(buffers[k], every);
          }
          active = next;
          drawCount = active.HUMAN.length / FLOATS_PER;
          lastPair = "";
        };

        setMode("webgl");

        const start = performance.now();
        let frameSamples = 0;
        let frameTimeSum = 0;
        let lastN = start;
        let adapted = false;

        /**
         * Snappy timeline (~24.5s) — short holds with continuous wave:
         * 0–1.25 intro converge → HUMAN
         * HUMAN hold → morph LOGO → hold → TOUCH → hold → WATER → hold → RETURN → morph HUMAN
         */
        const frame = (n: number) => {
          if (cancelled || !gl) return;
          const dt = n - lastN;
          lastN = n;
          if (dt > 0 && dt < 100) {
            frameSamples += 1;
            frameTimeSum += dt;
          }
          if (!adapted && frameSamples >= 90) {
            const avg = frameTimeSum / frameSamples;
            if (avg > 36) {
              adapted = true;
              if (dprCap > 1.5) {
                dprCap = 1.25;
                resize();
              } else if (keepEvery === 1) {
                applySubsample(2);
              }
            } else {
              adapted = true;
            }
          }

          const e = ((n - start) / 1000) % LOOP_S;
          const t = n / 1000;
          gl.clearColor(0.012, 0.042, 0.095, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);

          // Hold wave stays lively (not frozen)
          const holdWave = 0.38;
          const morphWave = 0.58;
          const holdLight = 1.72;
          const morphLight = 1.68;

          if (e < INTRO_S) {
            const u = smoothstep(0, INTRO_S, e);
            const scatter = 1 - u;
            draw("HUMAN", "HUMAN", 0, t, 0.45 + 0.2 * u, 0.55 + 1.2 * u, scatter);
          } else if (e < 2.35) {
            draw("HUMAN", "HUMAN", 0, t, holdWave, holdLight);
          } else if (e < 5.6) {
            draw(
              "HUMAN",
              "LOGO",
              smoothstep(2.35, 5.6, e),
              t,
              morphWave,
              morphLight,
            );
          } else if (e < 6.7) {
            draw("LOGO", "LOGO", 0, t, holdWave, 1.78);
          } else if (e < 10.0) {
            draw(
              "LOGO",
              "TOUCH",
              smoothstep(6.7, 10.0, e),
              t,
              morphWave,
              morphLight,
            );
          } else if (e < 11.15) {
            draw("TOUCH", "TOUCH", 0, t, holdWave, holdLight);
          } else if (e < 14.5) {
            draw(
              "TOUCH",
              "WATER",
              smoothstep(11.15, 14.5, e),
              t,
              morphWave,
              morphLight,
            );
          } else if (e < 15.65) {
            draw("WATER", "WATER", 0, t, holdWave * 0.95, holdLight);
          } else if (e < 19.0) {
            draw(
              "WATER",
              "RETURN",
              smoothstep(15.65, 19.0, e),
              t,
              morphWave,
              morphLight,
            );
          } else if (e < 20.15) {
            draw("RETURN", "RETURN", 0, t, holdWave, holdLight);
          } else {
            draw(
              "RETURN",
              "HUMAN",
              smoothstep(20.15, LOOP_S, e),
              t,
              morphWave * 0.9,
              morphLight,
            );
          }

          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      } catch (err) {
        console.warn("[HeroParticleScene] WebGL/bin load failed; poster fallback", err);
        if (!cancelled) setMode("poster");
      }
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      mediaReduced?.removeEventListener("change", onReduced);
      resizeObs?.disconnect();
      if (gl) {
        const lose = gl.getExtension("WEBGL_lose_context");
        lose?.loseContext();
      }
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pw-particle-hero"
      role="img"
      aria-label={ariaLabel}
    >
      {/* Single-frame poster only (never the 5-panel sheet). Covers load gap. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative LCP / reduced-motion */}
      <img
        className={`pw-particle-hero__poster${mode === "webgl" ? " is-faded" : ""}`}
        src={POSTER}
        alt=""
        width={1600}
        height={900}
        decoding="async"
        fetchPriority="high"
        aria-hidden="true"
      />
      {mode !== "poster" && (
        <canvas
          ref={canvasRef}
          className={`pw-particle-hero__canvas${mode === "webgl" ? " is-live" : ""}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default HeroParticleScene;
