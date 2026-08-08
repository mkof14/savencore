"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Home particle hero (D-0258) — WebGL2 morph from owner-approved HTML engine.
 *
 * COUNT=650000, stride 28 (p.xy, c.rgb, size, seed).
 * Scenes restored from `/343434.html` professional buffers:
 *   HUMAN → INTERFACE → ROBOT → WATER → HUMAN
 *
 * D-0256/D-0257 collage rebakes removed — those looked like the low-res
 * storyboard sheet. Poster = single frame rendered from HUMAN buffer.
 *
 * A-level polish on top of the HTML engine: brighter light, continuous
 * shimmer on holds, shorter ~24s loop, intro converge, cache-bust.
 */

const COUNT = 650_000;
const STRIDE = 28;
const FLOATS_PER = STRIDE / 4;
const LOOP_S = 24;
const INTRO_S = 1.2;
const ASSET_VER = "d0258";
const ASSET_BASE = "/home/particle-hero";
const POSTER = `${ASSET_BASE}/poster.webp?v=${ASSET_VER}`;

const TARGETS = ["HUMAN", "INTERFACE", "ROBOT", "WATER"] as const;
type MorphKey = (typeof TARGETS)[number];

const FILE: Record<MorphKey, string> = {
  HUMAN: "human",
  INTERFACE: "interface",
  ROBOT: "robot",
  WATER: "water",
};

/**
 * Vertex/fragment aligned with owner HTML reference, plus:
 * - `scatter` uniform for intro converge
 * - slightly brighter fragment bloom
 * - hold shimmer stays active (wave not frozen to ~0)
 */
const VS = `#version 300 es
precision highp float;
layout(location=0)in vec2 p0;layout(location=1)in vec3 c0;layout(location=2)in float s0;layout(location=3)in float seed;
layout(location=4)in vec2 p1;layout(location=5)in vec3 c1;layout(location=6)in float s1;
uniform float m,time,dpr,wave,light,scatter;uniform vec2 asp;out vec3 col;
float ez(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
void main(){
 float lm=ez((m-seed*.028)/.972);vec2 p=mix(p0,p1,lm);float arc=sin(3.14159*lm);
 p+=vec2(sin(time*.24+seed*107.),cos(time*.21+seed*83.))*(.000022+fract(seed*23.)*.000060);
 float q1=sin(p.x*22.-time*.92+seed*.5),q2=sin(p.x*13.-time*.54+seed*1.1);
 p.y+=(q1*.0037+q2*.0019)*wave;p.x+=cos(p.y*16.-time*.62+seed*.8)*.00135*wave;
 p+=vec2(sin(seed*211.+time*.085)*.0038,cos(seed*167.+time*.07)*.0025)*arc;
 // Intro converge from scatter
 vec2 rnd=vec2(fract(seed*47.13),fract(seed*91.77));
 p=mix(p, rnd, clamp(scatter,0.,1.));
 gl_Position=vec4((p.x*2.-1.)*asp.x,-(p.y*2.-1.)*asp.y,0,1);
 // Match HTML point sizing (professional buffers already encode small s0/s1)
 float psz=mix(s0,s1,lm)*dpr*(1.02+.028*sin(time*.48+seed*53.));
 gl_PointSize=clamp(psz,1.,2.85*dpr);
 col=mix(c0,c1,lm)*light*(1.-scatter*.5);
}`;

const FS = `#version 300 es
precision highp float;in vec3 col;out vec4 o;
void main(){
 float d=length(gl_PointCoord-.5);
 float a=smoothstep(.49,.004,d)+smoothstep(.5,.032,d)*.055;
 if(a<.001)discard;
 o=vec4(col*(1.2+a*.2),a);
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
    if (ab.byteLength !== COUNT * STRIDE) {
      throw new Error(`Unexpected buffer size for ${url}: ${ab.byteLength}`);
    }
    return new Float32Array(ab);
  }
  const stream = res.body.pipeThrough(new DecompressionStream("gzip"));
  const ab = await new Response(stream).arrayBuffer();
  if (ab.byteLength !== COUNT * STRIDE) {
    throw new Error(
      `Unexpected buffer size for ${url}: ${ab.byteLength} (expected ${COUNT * STRIDE})`,
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
          for (const k of TARGETS) next[k] = subsample(buffers[k], every);
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
         * Snappy ~24s loop (HTML was 46s with long holds).
         * intro → HUMAN → INTERFACE → ROBOT → WATER → HUMAN
         * Holds keep wave/shimmer (not frozen).
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
          gl.clearColor(0.01, 0.037, 0.08, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);

          const holdW = 0.32;
          const morphW = 0.52;
          // Brighter than HTML baseline (~1.3–1.38) for first-look wow on site chrome
          const holdL = 1.85;
          const morphL = 1.72;

          if (e < INTRO_S) {
            const u = smoothstep(0, INTRO_S, e);
            draw(
              "HUMAN",
              "HUMAN",
              0,
              t,
              0.4 + 0.15 * u,
              0.5 + 1.1 * u,
              1 - u,
            );
          } else if (e < 2.4) {
            draw("HUMAN", "HUMAN", 0, t, holdW, holdL);
          } else if (e < 6.0) {
            draw(
              "HUMAN",
              "INTERFACE",
              smoothstep(2.4, 6.0, e),
              t,
              morphW,
              morphL,
            );
          } else if (e < 7.2) {
            draw("INTERFACE", "INTERFACE", 0, t, holdW, 1.92);
          } else if (e < 11.0) {
            draw(
              "INTERFACE",
              "ROBOT",
              smoothstep(7.2, 11.0, e),
              t,
              morphW,
              morphL,
            );
          } else if (e < 12.3) {
            draw("ROBOT", "ROBOT", 0, t, holdW * 0.85, holdL);
          } else if (e < 16.5) {
            draw(
              "ROBOT",
              "WATER",
              smoothstep(12.3, 16.5, e),
              t,
              morphW * 0.9,
              morphL,
            );
          } else if (e < 17.8) {
            draw("WATER", "WATER", 0, t, holdW * 0.75, holdL);
          } else {
            draw(
              "WATER",
              "HUMAN",
              smoothstep(17.8, LOOP_S, e),
              t,
              morphW * 0.85,
              morphL,
            );
          }

          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      } catch (err) {
        console.warn(
          "[HeroParticleScene] WebGL/bin load failed; poster fallback",
          err,
        );
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
