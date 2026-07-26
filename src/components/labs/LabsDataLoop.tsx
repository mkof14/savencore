"use client";

import { useEffect, useId, useState } from "react";

import type { LabsDataLoopLabels } from "@/content/labs/data-loop";

import "./labs-data-loop.css";

type LabsDataLoopProps = {
  labels: LabsDataLoopLabels;
};

/**
 * Animated SAVEN data/action loop for Labs overview (D-0166).
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
  const gradId = `ldl-grad-${uid}`;
  const pathIngress = `ldl-p-in-${uid}`;
  const pathOut = `ldl-p-out-${uid}`;
  const pathReturn = `ldl-p-ret-${uid}`;
  const pathAscent = `ldl-p-up-${uid}`;

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
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#152033" stopOpacity="0.06" />
              <stop offset="45%" stopColor="#1e3a5f" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#d4a84b" stopOpacity="0.07" />
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
          </defs>

          <rect
            className="ldl__canvas"
            x="0"
            y="0"
            width="960"
            height="520"
            fill={`url(#${gradId})`}
          />

          {/* Soft atmosphere bands */}
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--a"
            cx="480"
            cy="240"
            rx="210"
            ry="120"
          />
          <ellipse
            className="ldl__atmosphere ldl__atmosphere--b"
            cx="780"
            cy="250"
            rx="150"
            ry="130"
          />

          {/* Paths (visible) */}
          <use href={`#${pathIngress}`} className="ldl__path ldl__path--ingress" />
          <use href={`#${pathOut}`} className="ldl__path ldl__path--out" />
          <use href={`#${pathReturn}`} className="ldl__path ldl__path--return" />
          <use href={`#${pathAscent}`} className="ldl__path ldl__path--ascent" />

          {/* Fan paths from SAVEN to physical cluster */}
          <path
            className="ldl__path ldl__path--fan"
            d="M 560 235 C 640 235, 700 250, 760 265"
            fill="none"
          />
          <path
            className="ldl__path ldl__path--fan"
            d="M 560 250 C 640 290, 700 325, 750 350"
            fill="none"
          />

          {/* BioMath Core — upstream */}
          <g className="ldl__node ldl__node--biomath" transform="translate(480 58)">
            <rect className="ldl__node-plate" x="-92" y="-24" width="184" height="48" />
            <text className="ldl__node-label" textAnchor="middle" y="5">
              {labels.bioMathCore}
            </text>
          </g>

          {/* Human Data Model */}
          <g className="ldl__node ldl__node--hdm" transform="translate(130 240)">
            <rect className="ldl__node-plate" x="-100" y="-32" width="200" height="64" />
            <text className="ldl__node-label" textAnchor="middle" y="5">
              {labels.humanDataModel}
            </text>
          </g>

          {/* SAVEN core */}
          <g className="ldl__node ldl__node--saven" transform="translate(480 235)">
            <rect
              className="ldl__node-plate ldl__node-plate--saven"
              x="-88"
              y="-52"
              width="176"
              height="104"
            />
            <circle className="ldl__saven-ring" r="42" />
            <circle className="ldl__saven-core" r="26" />
            <text className="ldl__node-label ldl__node-label--saven" textAnchor="middle" y="5">
              {labels.saven}
            </text>
            <text className="ldl__node-sub" textAnchor="middle" y="70">
              {labels.analysis}
            </text>
          </g>

          {/* Physical layer cluster */}
          <g className="ldl__cluster" transform="translate(780 250)">
            <rect className="ldl__cluster-plate" x="-130" y="-130" width="260" height="260" />
            <text className="ldl__cluster-title" textAnchor="middle" y="-105">
              {labels.physicalLayer}
            </text>

            <g className="ldl__device" transform="translate(0 -55)">
              <rect className="ldl__device-plate" x="-78" y="-22" width="156" height="44" />
              <circle className="ldl__device-dot" cx="-58" cy="0" r="5" />
              <text className="ldl__device-label" textAnchor="start" x="-42" y="5">
                {labels.robots}
              </text>
            </g>
            <g className="ldl__device" transform="translate(0 8)">
              <rect className="ldl__device-plate" x="-78" y="-22" width="156" height="44" />
              <circle className="ldl__device-dot" cx="-58" cy="0" r="5" />
              <text className="ldl__device-label" textAnchor="start" x="-42" y="5">
                {labels.manipulators}
              </text>
            </g>
            <g className="ldl__device" transform="translate(0 71)">
              <rect className="ldl__device-plate" x="-78" y="-22" width="156" height="44" />
              <circle className="ldl__device-dot" cx="-58" cy="0" r="5" />
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
              <circle className="ldl__particle ldl__particle--a" r="3.5">
                <animateMotion dur="5.2s" repeatCount="indefinite" begin="0s">
                  <mpath href={`#${pathIngress}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--b" r="2.8">
                <animateMotion dur="5.2s" repeatCount="indefinite" begin="1.6s">
                  <mpath href={`#${pathIngress}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--c" r="3.2">
                <animateMotion dur="6s" repeatCount="indefinite" begin="0.4s">
                  <mpath href={`#${pathOut}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--d" r="2.6">
                <animateMotion dur="6s" repeatCount="indefinite" begin="2.2s">
                  <mpath href={`#${pathOut}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--e" r="3">
                <animateMotion dur="5.6s" repeatCount="indefinite" begin="0.8s">
                  <mpath href={`#${pathReturn}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--f" r="2.4">
                <animateMotion dur="5.6s" repeatCount="indefinite" begin="3s">
                  <mpath href={`#${pathReturn}`} />
                </animateMotion>
              </circle>
              <circle className="ldl__particle ldl__particle--ascent" r="2.8">
                <animateMotion
                  dur="10s"
                  repeatCount="indefinite"
                  begin="2s"
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
