"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Home particle hero (D-0255) — WebGL2 morph engine from owner-approved reference.
 * COUNT=650000, stride 28 bytes (7 floats), 46s loop:
 * HUMAN → INTERFACE → ROBOT → WATER → HUMAN.
 *
 * Assets: gzipped Float32 buffers under /home/particle-hero/*.bin.gz
 * (decompressed client-side). prefers-reduced-motion → static poster.
 *
 * Performance: desktop prefers full COUNT + DPR≤2.5. Mobile tries full COUNT
 * first; if sustained frame time is high, lowers DPR then subsamples (½).
 */

const COUNT = 650_000;
const STRIDE = 28; // bytes
const FLOATS_PER = STRIDE / 4; // 7
const LOOP_S = 46;
const ASSET_BASE = "/home/particle-hero";
const POSTER = `${ASSET_BASE}/poster.webp`;

const TARGETS = ["HUMAN", "INTERFACE", "ROBOT", "WATER"] as const;
type MorphKey = (typeof TARGETS)[number];

const VS = `#version 300 es
precision highp float;
layout(location=0)in vec2 p0;layout(location=1)in vec3 c0;layout(location=2)in float s0;layout(location=3)in float seed;
layout(location=4)in vec2 p1;layout(location=5)in vec3 c1;layout(location=6)in float s1;
uniform float m,time,dpr,wave,light;uniform vec2 asp;out vec3 col;
float ez(float x){x=clamp(x,0.,1.);return x*x*(3.-2.*x);}
void main(){
 float lm=ez((m-seed*.028)/.972);vec2 p=mix(p0,p1,lm);float arc=sin(3.14159*lm);
 p+=vec2(sin(time*.24+seed*107.),cos(time*.21+seed*83.))*(.000022+fract(seed*23.)*.000060);
 float q1=sin(p.x*22.-time*.92+seed*.5),q2=sin(p.x*13.-time*.54+seed*1.1);
 p.y+=(q1*.0037+q2*.0019)*wave;p.x+=cos(p.y*16.-time*.62+seed*.8)*.00135*wave;
 p+=vec2(sin(seed*211.+time*.085)*.0038,cos(seed*167.+time*.07)*.0025)*arc;
 gl_Position=vec4((p.x*2.-1.)*asp.x,-(p.y*2.-1.)*asp.y,0,1);
 gl_PointSize=clamp(mix(s0,s1,lm)*dpr*(1.02+.028*sin(time*.48+seed*53.)),1.,2.85*dpr);
 col=mix(c0,c1,lm)*light;
}`;

const FS = `#version 300 es
precision highp float;in vec3 col;out vec4 o;
void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.49,.004,d)+smoothstep(.5,.032,d)*.042;if(a<.001)discard;o=vec4(col*(1.+a*.11),a);}`;

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
    // Fallback: try raw ArrayBuffer (if host already decoded) — unlikely for .gz.
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
  /** Localized accessible name for the decorative stage */
  ariaLabel: string;
};

export function HeroParticleScene({ ariaLabel }: HeroParticleSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  // Client-only component (dynamic ssr:false) — safe to read matchMedia on init.
  const [mode, setMode] = useState<"loading" | "webgl" | "poster">(() =>
    prefersReducedMotion() ? "poster" : "loading",
  );

  useEffect(() => {
    // Initial state already poster when reduced-motion; avoid sync setState here.
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
        const [human, iface, robot, water] = await Promise.all(
          TARGETS.map((k) =>
            loadBinGz(`${ASSET_BASE}/${k.toLowerCase()}.bin.gz`),
          ),
        );
        if (cancelled || !human || !iface || !robot || !water) return;

        const buffers: Record<MorphKey, Float32Array> = {
          HUMAN: human,
          INTERFACE: iface,
          ROBOT: robot,
          WATER: water,
        };

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
        const ua = gl.getUniformLocation(program, "asp");

        const pair = (A: MorphKey, B: MorphKey) => {
          if (!gl) return;
          const key = A + B + keepEvery;
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
        ) => {
          if (!gl) return;
          pair(A, B);
          gl.uniform1f(um, m);
          gl.uniform1f(ut, t);
          gl.uniform1f(uw, w);
          gl.uniform1f(ul, l);
          gl.drawArrays(gl.POINTS, 0, drawCount);
        };

        const applySubsample = (every: number) => {
          if (every === keepEvery || !gl) return;
          keepEvery = every;
          active = {
            HUMAN: subsample(buffers.HUMAN, every),
            INTERFACE: subsample(buffers.INTERFACE, every),
            ROBOT: subsample(buffers.ROBOT, every),
            WATER: subsample(buffers.WATER, every),
          };
          drawCount = active.HUMAN.length / FLOATS_PER;
          lastPair = "";
        };

        setMode("webgl");

        const start = performance.now();
        let frameSamples = 0;
        let frameTimeSum = 0;
        let lastN = start;
        let adapted = false;

        const frame = (n: number) => {
          if (cancelled || !gl) return;
          const dt = n - lastN;
          lastN = n;
          if (dt > 0 && dt < 100) {
            frameSamples += 1;
            frameTimeSum += dt;
          }
          // After ~90 frames, if sustained > ~36ms (~28fps), adapt once.
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

          if (e < 6.5) draw("HUMAN", "INTERFACE", smoothstep(0.2, 6.5, e), t, 0.52, 1.34);
          else if (e < 8.5) draw("INTERFACE", "INTERFACE", 0, t, 0.2, 1.38);
          else if (e < 16.5)
            draw("INTERFACE", "ROBOT", smoothstep(8.5, 16.5, e), t, 0.46, 1.34);
          else if (e < 21.5) draw("ROBOT", "ROBOT", 0, t, 0.1, 1.31);
          else if (e < 31.5)
            draw("ROBOT", "WATER", smoothstep(21.5, 31.5, e), t, 0.38, 1.31);
          else if (e < 38.5) draw("WATER", "WATER", 0, t, 0.08, 1.3);
          else draw("WATER", "HUMAN", smoothstep(38.5, 46, e), t, 0.34, 1.27);

          raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      } catch {
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
      {(mode === "poster" || mode === "loading") && (
        // eslint-disable-next-line @next/next/no-img-element -- decorative LCP poster / reduced-motion
        <img
          className="pw-particle-hero__poster"
          src={POSTER}
          alt=""
          width={1280}
          height={720}
          decoding="async"
          fetchPriority={mode === "loading" ? "high" : "auto"}
          aria-hidden="true"
        />
      )}
      <canvas
        ref={canvasRef}
        className="pw-particle-hero__canvas"
        aria-hidden="true"
        style={{
          opacity: mode === "webgl" ? 1 : 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default HeroParticleScene;
