"use client";

import { useEffect, useId, useState } from "react";

import type { LabsDataLoopLabels } from "@/content/labs/data-loop";

import "./labs-data-loop.css";

type LabsDataLoopProps = {
  labels: LabsDataLoopLabels;
};

/**
 * Animated SAVEN data/action loop for Labs overview (D-0166 / D-0167).
 * Crisp SVG composition + CSS motion; static under prefers-reduced-motion.
 */
export function LabsDataLoop({ labels }: LabsDataLoopProps) {
  const uid = useId().replace(/:/g, "");
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const titleId = `ldl-title-${uid}`;
  const fieldGrad = `ldl-field-${uid}`;
  const savenGrad = `ldl-saven-${uid}`;
  const savenCoreGrad = `ldl-saven-core-${uid}`;
  const clusterGrad = `ldl-cluster-${uid}`;
  const hdmGrad = `ldl-hdm-${uid}`;
  const bioGrad = `ldl-bio-${uid}`;
  const pathSheen = `ldl-sheen-${uid}`;
  const pathIngress = `ldl-p-in-${uid}`;
  const pathOut = `ldl-p-out-${uid}`;
  const pathReturn = `ldl-p-ret-${uid}`;
  const pathAscent = `ldl-p-up-${uid}`;
  const pathFanA = `ldl-p-fan-a-${uid}`;
  const pathFanB = `ldl-p-fan-b-${uid}`;

  return (
    <section
      className={`ldl${motion ? " ldl--motion" : " ldl--static"}`}
      aria-labelledby={titleId}
    >
      <header className="ldl__header">
        <h2 id={titleId} className="ldl__title">
          {labels.title}
        </h2>
        <p className="ldl__lede">{labels.lede}</p>
      </header>

      <div className="ldl__stage" role="img" aria-label={labels.title}>
        <svg
          className="ldl__svg"
          viewBox="0 0 960 500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={fieldGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1628" />
              <stop offset="38%" stopColor="#13233a" />
              <stop offset="72%" stopColor="#1a2f4a" />
              <stop offset="100%" stopColor="#1e2a1f" />
            </linearGradient>
            <radialGradient id={savenGrad} cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#2a4060" />
              <stop offset="55%" stopColor="#252830" />
              <stop offset="100%" stopColor="#1c1f26" />
            </radialGradient>
            <radialGradient id={savenCoreGrad} cx="42%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#3a4a62" />
              <stop offset="55%" stopColor="#252830" />
              <stop offset="100%" stopColor="#1c1f26" />
            </radialGradient>
            <radialGradient id={`${savenCoreGrad}-gold`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c878" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={clusterGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a2d44" />
              <stop offset="50%" stopColor="#252830" />
              <stop offset="100%" stopColor="#1f2a22" />
            </linearGradient>
            <linearGradient id={hdmGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3a40" />
              <stop offset="100%" stopColor="#0f2a32" />
            </linearGradient>
            <linearGradient id={bioGrad} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3048" />
              <stop offset="100%" stopColor="#243852" />
            </linearGradient>
            <linearGradient id={pathSheen} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5b8db8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#d4a84b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7eb8c9" stopOpacity="0.4" />
            </linearGradient>

            <path
              id={pathIngress}
              d="M 210 240 C 280 236, 340 234, 400 235"
              fill="none"
            />
            <path
              id={pathOut}
              d="M 560 220 C 620 195, 680 165, 740 145"
              fill="none"
            />
            <path
              id={pathReturn}
              d="M 740 345 C 660 325, 600 290, 560 255"
              fill="none"
            />
            <path
              id={pathAscent}
              d="M 480 180 C 480 150, 480 120, 480 90"
              fill="none"
            />
            <path
              id={pathFanA}
              d="M 560 235 C 640 235, 700 250, 760 265"
              fill="none"
            />
            <path
              id={pathFanB}
              d="M 560 250 C 640 290, 700 325, 750 350"
              fill="none"
            />
          </defs>

          <rect
            className="ldl__canvas"
            x="0"
            y="0"
            width="960"
            height="500"
            fill={`url(#${fieldGrad})`}
          />

          {/* Layered atmosphere */}
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--a"
            cx="480"
            cy="235"
            rx="230"
            ry="140"
          />
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--b"
            cx="780"
            cy="250"
            rx="165"
            ry="145"
          />
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--c"
            cx="140"
            cy="240"
            rx="120"
            ry="90"
          />
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--gold"
            cx="480"
            cy="235"
            rx="90"
            ry="70"
          />

          {/* Soft path underlays for depth */}
          <use href={`#${pathIngress}`} className="ldl__path-glow ldl__path-glow--ingress" />
          <use href={`#${pathOut}`} className="ldl__path-glow ldl__path-glow--out" />
          <use href={`#${pathReturn}`} className="ldl__path-glow ldl__path-glow--return" />
          <use href={`#${pathAscent}`} className="ldl__path-glow ldl__path-glow--ascent" />
          <use href={`#${pathFanA}`} className="ldl__path-glow ldl__path-glow--out" />
          <use href={`#${pathFanB}`} className="ldl__path-glow ldl__path-glow--out" />

          {/* Paths (visible) */}
          <use href={`#${pathIngress}`} className="ldl__path ldl__path--ingress" />
          <use href={`#${pathOut}`} className="ldl__path ldl__path--out" />
          <use href={`#${pathReturn}`} className="ldl__path ldl__path--return" />
          <use href={`#${pathAscent}`} className="ldl__path ldl__path--ascent" />
          <use href={`#${pathFanA}`} className="ldl__path ldl__path--fan" />
          <use href={`#${pathFanB}`} className="ldl__path ldl__path--fan" />

          {/* Flow pulse overlays */}
          <use
            href={`#${pathIngress}`}
            className="ldl__path-pulse ldl__path-pulse--ingress"
            stroke={`url(#${pathSheen})`}
          />
          <use
            href={`#${pathOut}`}
            className="ldl__path-pulse ldl__path-pulse--out"
            stroke={`url(#${pathSheen})`}
          />

          {/* BioMath Core — upstream */}
          <g className="ldl__node ldl__node--biomath" transform="translate(480 58)">
            <rect
              className="ldl__node-plate"
              x="-92"
              y="-24"
              width="184"
              height="48"
              fill={`url(#${bioGrad})`}
            />
            <rect
              className="ldl__node-accent"
              x="-92"
              y="-24"
              width="4"
              height="48"
            />
            <text className="ldl__node-label ldl__node-label--lite" textAnchor="middle" y="5">
              {labels.bioMathCore}
            </text>
          </g>

          {/* Human Data Model */}
          <g className="ldl__node ldl__node--hdm" transform="translate(130 240)">
            <rect
              className="ldl__node-plate"
              x="-100"
              y="-36"
              width="200"
              height="72"
              fill={`url(#${hdmGrad})`}
            />
            <rect
              className="ldl__node-accent ldl__node-accent--warm"
              x="-100"
              y="-36"
              width="4"
              height="72"
            />
            {/* Warm human-data mark */}
            <g className="ldl__icon ldl__icon--hdm" transform="translate(-72 0)">
              <circle cx="0" cy="-8" r="6.5" className="ldl__icon-fill ldl__icon-fill--warm" />
              <path
                className="ldl__icon-stroke ldl__icon-stroke--warm"
                d="M -11 12 C -11 2, 11 2, 11 12"
                fill="none"
              />
            </g>
            <text className="ldl__node-label ldl__node-label--lite" textAnchor="middle" x="12" y="5">
              {labels.humanDataModel}
            </text>
          </g>

          {/* SAVEN core */}
          <g className="ldl__node ldl__node--saven" transform="translate(480 235)">
            <rect
              className="ldl__node-plate ldl__node-plate--saven"
              x="-92"
              y="-56"
              width="184"
              height="112"
              fill={`url(#${savenGrad})`}
            />
            <rect
              className="ldl__saven-frame"
              x="-92"
              y="-56"
              width="184"
              height="112"
            />
            <circle className="ldl__saven-ring ldl__saven-ring--outer" r="48" />
            <circle className="ldl__saven-ring" r="38" />
            <circle
              className="ldl__saven-core"
              r="24"
              fill={`url(#${savenCoreGrad})`}
            />
            <circle
              className="ldl__saven-core-glow"
              r="24"
              fill={`url(#${savenCoreGrad}-gold)`}
            />
            <circle className="ldl__saven-core-shine" cx="-6" cy="-7" r="5" />
            <text className="ldl__node-label ldl__node-label--saven" textAnchor="middle" y="5">
              {labels.saven}
            </text>
            <text className="ldl__node-sub" textAnchor="middle" y="74">
              {labels.analysis}
            </text>
          </g>

          {/* Physical layer cluster */}
          <g className="ldl__cluster" transform="translate(780 250)">
            <rect
              className="ldl__cluster-plate"
              x="-130"
              y="-130"
              width="260"
              height="260"
              fill={`url(#${clusterGrad})`}
            />
            <rect className="ldl__cluster-frame" x="-130" y="-130" width="260" height="260" />
            <text className="ldl__cluster-title" textAnchor="middle" y="-105">
              {labels.physicalLayer}
            </text>

            <g className="ldl__device" transform="translate(0 -55)">
              <rect className="ldl__device-plate" x="-90" y="-24" width="180" height="48" />
              <g className="ldl__icon" transform="translate(-68 0)">
                {/* Robot torso silhouette */}
                <rect className="ldl__icon-fill" x="-7" y="-4" width="14" height="16" rx="1" />
                <rect className="ldl__icon-fill" x="-5" y="-14" width="10" height="9" rx="1" />
                <circle className="ldl__icon-fill ldl__icon-fill--gold" cx="-2" cy="-10" r="1.6" />
                <circle className="ldl__icon-fill ldl__icon-fill--gold" cx="2" cy="-10" r="1.6" />
                <line className="ldl__icon-stroke" x1="-10" y1="0" x2="-7" y2="4" />
                <line className="ldl__icon-stroke" x1="10" y1="0" x2="7" y2="4" />
              </g>
              <text className="ldl__device-label" textAnchor="start" x="-42" y="5">
                {labels.robots}
              </text>
            </g>
            <g className="ldl__device" transform="translate(0 8)">
              <rect className="ldl__device-plate" x="-90" y="-24" width="180" height="48" />
              <g className="ldl__icon" transform="translate(-68 0)">
                {/* Manipulator arm */}
                <circle className="ldl__icon-fill" cx="-8" cy="8" r="3.5" />
                <line className="ldl__icon-stroke ldl__icon-stroke--thick" x1="-8" y1="8" x2="0" y2="-2" />
                <line className="ldl__icon-stroke ldl__icon-stroke--thick" x1="0" y1="-2" x2="9" y2="-8" />
                <circle className="ldl__icon-fill ldl__icon-fill--gold" cx="0" cy="-2" r="2.2" />
                <path
                  className="ldl__icon-stroke"
                  d="M 7 -10 L 11 -6 M 11 -10 L 7 -6"
                  fill="none"
                />
              </g>
              <text className="ldl__device-label" textAnchor="start" x="-42" y="5">
                {labels.manipulators}
              </text>
            </g>
            <g className="ldl__device" transform="translate(0 71)">
              <rect className="ldl__device-plate" x="-90" y="-24" width="180" height="48" />
              <g className="ldl__icon" transform="translate(-68 0)">
                {/* Sensor / radar arcs */}
                <circle className="ldl__icon-fill ldl__icon-fill--gold" cx="0" cy="4" r="3" />
                <path
                  className="ldl__icon-stroke ldl__icon-stroke--blue"
                  d="M -10 -2 A 12 12 0 0 1 10 -2"
                  fill="none"
                />
                <path
                  className="ldl__icon-stroke ldl__icon-stroke--blue"
                  d="M -6 -8 A 8 8 0 0 1 6 -8"
                  fill="none"
                />
              </g>
              <text className="ldl__device-label" textAnchor="start" x="-42" y="5">
                {labels.sensors}
              </text>
            </g>
          </g>

          {/* Path cue labels */}
          <text className="ldl__cue" x="300" y="218">
            {labels.ingress}
          </text>
          <text className="ldl__cue" x="640" y="155">
            {labels.outbound}
          </text>
          <text className="ldl__cue ldl__cue--return" x="620" y="330">
            {labels.returnFlow}
          </text>
          <text className="ldl__cue ldl__cue--ascent" x="498" y="125">
            {labels.ascent}
          </text>

          {/* Particles — only when motion allowed */}
          {motion ? (
            <g className="ldl__particles">
              <circle className="ldl__particle ldl__particle--a" r="4">
                <animateMotion dur="4.6s" repeatCount="indefinite" begin="0s">
                  <mpath href={`#${pathIngress}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--b" r="3">
                <animateMotion dur="4.6s" repeatCount="indefinite" begin="1.1s">
                  <mpath href={`#${pathIngress}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--warm" r="2.4">
                <animateMotion dur="4.6s" repeatCount="indefinite" begin="2.4s">
                  <mpath href={`#${pathIngress}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--c" r="3.6">
                <animateMotion dur="5.2s" repeatCount="indefinite" begin="0.3s">
                  <mpath href={`#${pathOut}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--d" r="2.8">
                <animateMotion dur="5.2s" repeatCount="indefinite" begin="1.8s">
                  <mpath href={`#${pathOut}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--gold" r="2.5">
                <animateMotion dur="5.4s" repeatCount="indefinite" begin="0.6s">
                  <mpath href={`#${pathFanA}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--gold" r="2.2">
                <animateMotion dur="5.8s" repeatCount="indefinite" begin="2s">
                  <mpath href={`#${pathFanB}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--e" r="3.4">
                <animateMotion dur="5s" repeatCount="indefinite" begin="0.7s">
                  <mpath href={`#${pathReturn}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--f" r="2.6">
                <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s">
                  <mpath href={`#${pathReturn}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--ascent" r="3">
                <animateMotion
                  dur="9s"
                  repeatCount="indefinite"
                  begin="1.5s"
                  keyTimes="0;0.35;0.55;1"
                  keyPoints="0;0;1;1"
                  calcMode="linear"
                >
                  <mpath href={`#${pathAscent}`} />
                </animateMotion>
              </circle>
            </g>
          ) : null}
        </svg>
      </div>

      <p className="ldl__note">{labels.note}</p>
    </section>
  );
}
