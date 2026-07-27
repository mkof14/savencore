"use client";

import { useEffect, useId, useState } from "react";

import type { RoboticsInterfaceDiagramLabels } from "@/content/systems/robotics-interface-diagram";

import "./robotics-interface-diagram.css";

type RoboticsInterfaceDiagramProps = {
  labels: RoboticsInterfaceDiagramLabels;
};

type DeviceKey =
  | "manipulators"
  | "mobileRobots"
  | "trolleyRobots"
  | "assistiveForms"
  | "sensors";

const DEVICES: ReadonlyArray<{
  key: DeviceKey;
  /** Angle in degrees; 0 = right, -90 = top */
  angle: number;
  radius: number;
}> = [
  { key: "manipulators", angle: -90, radius: 198 },
  { key: "mobileRobots", angle: -18, radius: 198 },
  { key: "trolleyRobots", angle: 54, radius: 198 },
  { key: "assistiveForms", angle: 126, radius: 198 },
  { key: "sensors", angle: 198, radius: 198 },
];

const CX = 480;
const CY = 268;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

function DeviceIcon({ kind }: { kind: DeviceKey }) {
  switch (kind) {
    case "manipulators":
      return (
        <g className="rid__icon">
          <circle className="rid__icon-fill" cx="-8" cy="8" r="3.5" />
          <line
            className="rid__icon-stroke rid__icon-stroke--thick"
            x1="-8"
            y1="8"
            x2="0"
            y2="-2"
          />
          <line
            className="rid__icon-stroke rid__icon-stroke--thick"
            x1="0"
            y1="-2"
            x2="9"
            y2="-8"
          />
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="0" cy="-2" r="2.2" />
          <path
            className="rid__icon-stroke"
            d="M 7 -10 L 11 -6 M 11 -10 L 7 -6"
            fill="none"
          />
        </g>
      );
    case "mobileRobots":
      return (
        <g className="rid__icon">
          <rect className="rid__icon-fill" x="-10" y="-6" width="20" height="12" rx="1" />
          <rect className="rid__icon-fill" x="-6" y="-14" width="12" height="8" rx="1" />
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="-4" cy="-10" r="1.5" />
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="4" cy="-10" r="1.5" />
          <circle className="rid__icon-stroke" cx="-7" cy="10" r="3.2" fill="none" />
          <circle className="rid__icon-stroke" cx="7" cy="10" r="3.2" fill="none" />
        </g>
      );
    case "trolleyRobots":
      return (
        <g className="rid__icon">
          <rect className="rid__icon-fill" x="-11" y="-10" width="22" height="14" rx="1" />
          <line className="rid__icon-stroke rid__icon-stroke--thick" x1="-4" y1="-10" x2="-4" y2="-16" />
          <line className="rid__icon-stroke rid__icon-stroke--thick" x1="-4" y1="-16" x2="6" y2="-16" />
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="-7" cy="8" r="3" />
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="7" cy="8" r="3" />
        </g>
      );
    case "assistiveForms":
      return (
        <g className="rid__icon">
          <circle className="rid__icon-fill rid__icon-fill--warm" cx="0" cy="-10" r="4.5" />
          <path
            className="rid__icon-stroke rid__icon-stroke--warm"
            d="M -8 2 C -8 -6, 8 -6, 8 2"
            fill="none"
          />
          <path
            className="rid__icon-stroke"
            d="M -10 12 L -6 4 M 10 12 L 6 4"
            fill="none"
          />
          <line className="rid__icon-stroke rid__icon-stroke--gold" x1="-12" y1="0" x2="-8" y2="2" />
          <line className="rid__icon-stroke rid__icon-stroke--gold" x1="12" y1="0" x2="8" y2="2" />
        </g>
      );
    case "sensors":
      return (
        <g className="rid__icon">
          <circle className="rid__icon-fill rid__icon-fill--gold" cx="0" cy="4" r="3" />
          <path
            className="rid__icon-stroke rid__icon-stroke--blue"
            d="M -10 -2 A 12 12 0 0 1 10 -2"
            fill="none"
          />
          <path
            className="rid__icon-stroke rid__icon-stroke--blue"
            d="M -6 -8 A 8 8 0 0 1 6 -8"
            fill="none"
          />
        </g>
      );
  }
}

/**
 * Animated SAVEN Robotics Interface hub diagram (D-0189).
 * Center SAVEN · interface ring · outer device nodes with link pulses.
 * Static under prefers-reduced-motion.
 */
export function RoboticsInterfaceDiagram({
  labels,
}: RoboticsInterfaceDiagramProps) {
  const uid = useId().replace(/:/g, "");
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const titleId = `rid-title-${uid}`;
  const fieldGrad = `rid-field-${uid}`;
  const savenGrad = `rid-saven-${uid}`;
  const savenCoreGrad = `rid-saven-core-${uid}`;
  const deviceGrad = `rid-device-${uid}`;
  const pathSheen = `rid-sheen-${uid}`;
  const ringGrad = `rid-ring-${uid}`;

  const deviceLabels: Record<DeviceKey, string> = {
    manipulators: labels.manipulators,
    mobileRobots: labels.mobileRobots,
    trolleyRobots: labels.trolleyRobots,
    assistiveForms: labels.assistiveForms,
    sensors: labels.sensors,
  };

  const pathIds = DEVICES.map((_, i) => `rid-p-${uid}-${i}`);

  return (
    <section
      className={`rid${motion ? " rid--motion" : " rid--static"}`}
      aria-labelledby={titleId}
    >
      <header className="rid__header">
        <h2 id={titleId} className="rid__title">
          {labels.title}
        </h2>
        <p className="rid__lede">{labels.lede}</p>
      </header>

      <div className="rid__stage" role="img" aria-label={labels.title}>
        <svg
          className="rid__svg"
          viewBox="0 0 960 540"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={fieldGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c1628" />
              <stop offset="40%" stopColor="#13233a" />
              <stop offset="75%" stopColor="#1a2f4a" />
              <stop offset="100%" stopColor="#1e2a1f" />
            </linearGradient>
            <radialGradient id={savenGrad} cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#2a4060" />
              <stop offset="55%" stopColor="#152033" />
              <stop offset="100%" stopColor="#0b1220" />
            </radialGradient>
            <radialGradient id={savenCoreGrad} cx="42%" cy="38%" r="65%">
              <stop offset="0%" stopColor="#3a4a62" />
              <stop offset="55%" stopColor="#152033" />
              <stop offset="100%" stopColor="#0b1220" />
            </radialGradient>
            <radialGradient id={`${savenCoreGrad}-gold`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c878" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={deviceGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a2d44" />
              <stop offset="100%" stopColor="#152033" />
            </linearGradient>
            <linearGradient id={pathSheen} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5b8db8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#d4a84b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7eb8c9" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id={ringGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a84b" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#5b8db8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#d4a84b" stopOpacity="0.55" />
            </linearGradient>

            {DEVICES.map((device, index) => {
              const outer = polar(device.angle, device.radius - 52);
              const inner = polar(device.angle, 78);
              return (
                <path
                  key={pathIds[index]}
                  id={pathIds[index]}
                  d={`M ${outer.x.toFixed(1)} ${outer.y.toFixed(1)} L ${inner.x.toFixed(1)} ${inner.y.toFixed(1)}`}
                  fill="none"
                />
              );
            })}
          </defs>

          <rect
            className="rid__canvas"
            x="0"
            y="0"
            width="960"
            height="540"
            fill={`url(#${fieldGrad})`}
          />

          <ellipse
            className="rid__atmosphere rid__atmosphere--a"
            cx={CX}
            cy={CY}
            rx="250"
            ry="210"
          />
          <ellipse
            className="rid__atmosphere rid__atmosphere--gold"
            cx={CX}
            cy={CY}
            rx="110"
            ry="95"
          />

          {/* Soft path underlays */}
          {pathIds.map((id) => (
            <use key={`${id}-glow`} href={`#${id}`} className="rid__path-glow" />
          ))}

          {/* Visible links */}
          {pathIds.map((id) => (
            <use key={`${id}-path`} href={`#${id}`} className="rid__path" />
          ))}

          {/* Pulse overlays */}
          {pathIds.map((id, index) => (
            <use
              key={`${id}-pulse`}
              href={`#${id}`}
              className={`rid__path-pulse rid__path-pulse--${index}`}
              stroke={`url(#${pathSheen})`}
            />
          ))}

          {/* Interface ring */}
          <g className="rid__ring" transform={`translate(${CX} ${CY})`}>
            <circle className="rid__ring-orbit rid__ring-orbit--outer" r="118" />
            <circle
              className="rid__ring-orbit"
              r="102"
              stroke={`url(#${ringGrad})`}
            />
            <circle className="rid__ring-orbit rid__ring-orbit--inner" r="86" />
            <text className="rid__ring-label" textAnchor="middle" y="-108">
              {labels.interfaceRing}
            </text>
          </g>

          {/* SAVEN center */}
          <g className="rid__node rid__node--saven" transform={`translate(${CX} ${CY})`}>
            <rect
              className="rid__node-plate rid__node-plate--saven"
              x="-72"
              y="-42"
              width="144"
              height="84"
              fill={`url(#${savenGrad})`}
            />
            <rect className="rid__saven-frame" x="-72" y="-42" width="144" height="84" />
            <circle className="rid__saven-ring rid__saven-ring--outer" r="36" />
            <circle className="rid__saven-ring" r="28" />
            <circle
              className="rid__saven-core"
              r="18"
              fill={`url(#${savenCoreGrad})`}
            />
            <circle
              className="rid__saven-core-glow"
              r="18"
              fill={`url(#${savenCoreGrad}-gold)`}
            />
            <circle className="rid__saven-core-shine" cx="-5" cy="-5" r="3.5" />
            <text className="rid__node-label rid__node-label--saven" textAnchor="middle" y="5">
              {labels.saven}
            </text>
          </g>

          {/* Outer devices */}
          {DEVICES.map((device, index) => {
            const pos = polar(device.angle, device.radius);
            return (
              <g
                key={device.key}
                className={`rid__device rid__device--${index}`}
                transform={`translate(${pos.x.toFixed(1)} ${pos.y.toFixed(1)})`}
              >
                <rect
                  className="rid__device-plate"
                  x="-78"
                  y="-28"
                  width="156"
                  height="56"
                  fill={`url(#${deviceGrad})`}
                />
                <g transform="translate(-54 0)">
                  <DeviceIcon kind={device.key} />
                </g>
                <text className="rid__device-label" textAnchor="start" x="-32" y="5">
                  {deviceLabels[device.key]}
                </text>
              </g>
            );
          })}

          <text className="rid__cue" x={CX} y="508" textAnchor="middle">
            {labels.cue}
          </text>

          {motion
            ? pathIds.map((id, index) => (
                <g key={`${id}-particles`} className="rid__particles">
                  <circle
                    className={`rid__particle rid__particle--${index % 2 === 0 ? "gold" : "blue"}`}
                    r={index % 2 === 0 ? 3.2 : 2.6}
                  >
                    <animateMotion
                      dur={`${4.4 + index * 0.35}s`}
                      repeatCount="indefinite"
                      begin={`${index * 0.55}s`}
                    >
                      <mpath href={`#${id}`} />
                    </animateMotion>
                  </circle>
                </g>
              ))
            : null}
        </svg>
      </div>

      <p className="rid__note">{labels.note}</p>
    </section>
  );
}
