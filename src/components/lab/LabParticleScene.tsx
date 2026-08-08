"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lab particle story (D-0265) — WebGL2 morph:
 *   UNDERSTAND (system / waves) → ASSIST (robot arm) → CARE (humanoid) → loop
 *
 * COUNT=650000, stride 28. Canvas = images only (ASSIST HUD masked in bake).
 * Captions live outside the canvas on the preview page.
 * Assets under `/lab/particle/`. Cache-bust `?v=d0265`.
 * Not used on the public home (D-0261).
 */

const COUNT = 650_000;
const STRIDE = 28;
const FLOATS_PER = STRIDE / 4;
const LOOP_S = 20;
const INTRO_S = 1.1;
const ASSET_VER = "d0265";
const ASSET_BASE = "/lab/particle";
const POSTER = `${ASSET_BASE}/poster.webp?v=${ASSET_VER}`;

const TARGETS = ["UNDERSTAND", "ASSIST", "CARE"] as const;
type MorphKey = (typeof TARGETS)[number];

const FILE: Record<MorphKey, string> = {
  UNDERSTAND: "understand",
  ASSIST: "assist",
  CARE: "care",
};

const VS = `#version 300 es
precision highp float;
layout(location=0)in vec2 p0;layout(location=1)in vec3 c0;layout(location=2)in float s0;layout(location=3)in float seed;
layout(location=4)in vec2 p1;layout(location=5)in vec3 c1;layout(location=6)in float s1;
uniform float m,time,dpr,wave,light,scatter;uniform vec2 asp;out vec3 col;
float ez(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
void main(){
 float lm=ez((m-seed*.028)/.972);vec2 p=mix(p0,p1,lm);float arc=sin(3.14159*lm);
 p+=vec2(sin(time*.28+seed*107.),cos(time*.24+seed*83.))*(.000018+fract(seed*23.)*.000048);
 // Continuous wave flow — stronger on holds for living energy streams
 float q1=sin(p.x*26.-time*1.35+seed*.5),q2=sin(p.x*14.-time*.78+seed*1.1);
 p.y+=(q1*.0042+q2*.0022)*wave;p.x+=cos(p.y*18.-time*.88+seed*.8)*.0018*wave;
 p+=vec2(sin(seed*211.+time*.1)*.0032,cos(seed*167.+time*.085)*.0022)*arc;
 vec2 rnd=vec2(fract(seed*47.13),fract(seed*91.77));
 p=mix(p, rnd, clamp(scatter,0.,1.));
 gl_Position=vec4((p.x*2.-1.)*asp.x,-(p.y*2.-1.)*asp.y,0,1);
 // Small sharp points
 float psz=mix(s0,s1,lm)*dpr*(1.05+.03*sin(time*.55+seed*53.));
 gl_PointSize=clamp(psz,.9,2.65*dpr);
 col=mix(c0,c1,lm)*light*(1.-scatter*.5);
}`;

const FS = `#version 300 es
precision highp float;in vec3 col;out vec4 o;
void main(){
 float d=length(gl_PointCoord-.5);
 float a=smoothstep(.48,.002,d)+smoothstep(.5,.03,d)*.08;
 if(a<.001)discard;
 o=vec4(col*(1.32+a*.28),a);
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

type LabParticleSceneProps = {
  ariaLabel: string;
};

export function LabParticleScene({ ariaLabel }: LabParticleSceneProps) {
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
          drawCount = active.UNDERSTAND.length / FLOATS_PER;
          lastPair = "";
        };

        setMode("webgl");

        const start = performance.now();
        let frameSamples = 0;
        let frameTimeSum = 0;
        let lastN = start;
        let adapted = false;

        /**
         * ~20s story loop:
         * intro → Understanding → Assistance → Care → Understanding
         * Short holds, continuous motion on holds.
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
          gl.clearColor(0.008, 0.028, 0.065, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);

          const holdW = 0.52;
          const morphW = 0.7;
          const holdL = 2.12;
          const morphL = 1.98;

          if (e < INTRO_S) {
            const u = smoothstep(0, INTRO_S, e);
            draw(
              "UNDERSTAND",
              "UNDERSTAND",
              0,
              t,
              0.5 + 0.2 * u,
              0.6 + 1.4 * u,
              1 - u,
            );
          } else if (e < 3.6) {
            draw("UNDERSTAND", "UNDERSTAND", 0, t, holdW, holdL);
          } else if (e < 7.0) {
            draw(
              "UNDERSTAND",
              "ASSIST",
              smoothstep(3.6, 7.0, e),
              t,
              morphW,
              morphL,
            );
          } else if (e < 9.0) {
            draw("ASSIST", "ASSIST", 0, t, holdW * 0.9, holdL);
          } else if (e < 12.6) {
            draw(
              "ASSIST",
              "CARE",
              smoothstep(9.0, 12.6, e),
              t,
              morphW,
              morphL,
            );
          } else if (e < 14.8) {
            draw("CARE", "CARE", 0, t, holdW * 0.85, holdL);
          } else {
            draw(
              "CARE",
              "UNDERSTAND",
              smoothstep(14.8, LOOP_S, e),
              t,
              morphW,
              morphL,
            );
          }

          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      } catch (err) {
        console.warn(
          "[LabParticleScene] WebGL/bin load failed; poster fallback",
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
      className="lab-particle-stage"
      role="img"
      aria-label={ariaLabel}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative LCP / reduced-motion */}
      <img
        className={`lab-particle-stage__poster${mode === "webgl" ? " is-faded" : ""}`}
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
          className={`lab-particle-stage__canvas${mode === "webgl" ? " is-live" : ""}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default LabParticleScene;
