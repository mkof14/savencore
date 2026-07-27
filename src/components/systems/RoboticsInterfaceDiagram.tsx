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

/** Orbit bead angles on the interface ring (degrees). */
const RING_BEADS = [-75, -15, 45, 105, 165] as const;

const CX = 480;
const CY = 268;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

/**
 * Illustrated device silhouettes — architecture concept icons, not product SKUs.
 * Rounded forms are illustration-only; node plates stay square-cornered.
 */
function DeviceIcon({ kind }: { kind: DeviceKey }) {
  switch (kind) {
    case "manipulators":
      return (
        <g className="rid__icon rid__icon--manipulators">
          {/* Base pedestal */}
          <rect className="rid__icon-body" x="-11" y="6" width="22" height="8" rx="1.5" />
          <rect className="rid__icon-accent" x="-7" y="2" width="14" height="5" rx="1" />
          {/* Shoulder + arm segments */}
          <circle className="rid__icon-joint" cx="-2" cy="0" r="3.2" />
          <g className="rid__icon-arm">
            <line
              className="rid__icon-limb rid__icon-limb--thick"
              x1="-2"
              y1="0"
              x2="4"
              y2="-10"
            />
            <circle className="rid__icon-joint rid__icon-joint--mid" cx="4" cy="-10" r="2.4" />
            <line
              className="rid__icon-limb rid__icon-limb--thick"
              x1="4"
              y1="-10"
              x2="12"
              y2="-16"
            />
            {/* Gripper */}
            <path
              className="rid__icon-grip"
              d="M 10 -18 L 14 -14 M 14 -18 L 10 -14"
              fill="none"
            />
          </g>
          <circle className="rid__icon-dot" cx="-6" cy="9" r="1.4" />
          <circle className="rid__icon-dot" cx="6" cy="9" r="1.4" />
        </g>
      );
    case "mobileRobots":
      return (
        <g className="rid__icon rid__icon--mobile">
          {/* Chassis */}
          <rect className="rid__icon-body" x="-13" y="-5" width="26" height="12" rx="2" />
          {/* Sensor dome / mast */}
          <rect className="rid__icon-accent" x="-6" y="-14" width="12" height="9" rx="2" />
          <circle className="rid__icon-lens" cx="-3" cy="-10" r="1.8" />
          <circle className="rid__icon-lens rid__icon-lens--alt" cx="4" cy="-10" r="1.8" />
          {/* Drive wheels */}
          <g className="rid__icon-wheel rid__icon-wheel--l">
            <circle className="rid__icon-wheel-rim" cx="-8" cy="10" r="4" />
            <circle className="rid__icon-wheel-hub" cx="-8" cy="10" r="1.6" />
            <line className="rid__icon-spoke" x1="-8" y1="6.5" x2="-8" y2="13.5" />
            <line className="rid__icon-spoke" x1="-11.5" y1="10" x2="-4.5" y2="10" />
          </g>
          <g className="rid__icon-wheel rid__icon-wheel--r">
            <circle className="rid__icon-wheel-rim" cx="8" cy="10" r="4" />
            <circle className="rid__icon-wheel-hub" cx="8" cy="10" r="1.6" />
            <line className="rid__icon-spoke" x1="8" y1="6.5" x2="8" y2="13.5" />
            <line className="rid__icon-spoke" x1="4.5" y1="10" x2="11.5" y2="10" />
          </g>
        </g>
      );
    case "trolleyRobots":
      return (
        <g className="rid__icon rid__icon--trolley">
          {/* Cargo tray */}
          <rect className="rid__icon-body" x="-13" y="-8" width="26" height="13" rx="1.5" />
          <line className="rid__icon-divider" x1="-9" y1="-2" x2="9" y2="-2" />
          <rect className="rid__icon-accent" x="-9" y="-6" width="8" height="5" rx="0.8" />
          <rect className="rid__icon-cargo" x="1" y="-6" width="8" height="5" rx="0.8" />
          {/* Handle */}
          <path
            className="rid__icon-limb rid__icon-limb--thick"
            d="M -5 -8 L -5 -15 L 8 -15"
            fill="none"
          />
          <circle className="rid__icon-dot" cx="8" cy="-15" r="1.5" />
          {/* Casters */}
          <circle className="rid__icon-wheel-rim" cx="-8" cy="9" r="3.4" />
          <circle className="rid__icon-wheel-hub" cx="-8" cy="9" r="1.3" />
          <circle className="rid__icon-wheel-rim" cx="8" cy="9" r="3.4" />
          <circle className="rid__icon-wheel-hub" cx="8" cy="9" r="1.3" />
        </g>
      );
    case "assistiveForms":
      return (
        <g className="rid__icon rid__icon--assist">
          {/* Care-assist silhouette: head + torso + supportive arms */}
          <circle className="rid__icon-head" cx="0" cy="-11" r="5" />
          <circle className="rid__icon-lens" cx="-1.5" cy="-12" r="1.1" />
          <circle className="rid__icon-lens rid__icon-lens--alt" cx="1.8" cy="-12" r="1.1" />
          <path
            className="rid__icon-body-path"
            d="M -9 4 C -9 -5, 9 -5, 9 4 L 7 12 L -7 12 Z"
          />
          {/* Supportive arms */}
          <path
            className="rid__icon-limb rid__icon-limb--warm"
            d="M -9 0 C -14 -2, -15 6, -11 8"
            fill="none"
          />
          <path
            className="rid__icon-limb rid__icon-limb--warm"
            d="M 9 0 C 14 -2, 15 6, 11 8"
            fill="none"
          />
          <circle className="rid__icon-dot rid__icon-dot--warm" cx="-11" cy="8" r="1.6" />
          <circle className="rid__icon-dot rid__icon-dot--warm" cx="11" cy="8" r="1.6" />
          <rect className="rid__icon-accent" x="-4" y="1" width="8" height="3" rx="1" />
        </g>
      );
    case "sensors":
      return (
        <g className="rid__icon rid__icon--sensors">
          {/* Array mast */}
          <rect className="rid__icon-body" x="-3" y="-2" width="6" height="14" rx="1" />
          <rect className="rid__icon-accent" x="-8" y="10" width="16" height="4" rx="1" />
          {/* Sensor head */}
          <circle className="rid__icon-lens rid__icon-lens--core" cx="0" cy="-6" r="4.5" />
          <circle className="rid__icon-joint" cx="0" cy="-6" r="2" />
          {/* Perception arcs */}
          <path
            className="rid__icon-arc rid__icon-arc--a"
            d="M -12 -2 A 13 13 0 0 1 12 -2"
            fill="none"
          />
          <path
            className="rid__icon-arc rid__icon-arc--b"
            d="M -8 -8 A 9 9 0 0 1 8 -8"
            fill="none"
          />
          <path
            className="rid__icon-arc rid__icon-arc--c"
            d="M -4 -12 A 5 5 0 0 1 4 -12"
            fill="none"
          />
        </g>
      );
  }
}

/**
 * Animated SAVEN Robotics Interface hub diagram (D-0189 / D-0190).
 * Center SAVEN · interface ring · outer device nodes with link traffic.
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
  const pathSheen = `rid-sheen-${uid}`;
  const ringGrad = `rid-ring-${uid}`;
  const deviceGrads = {
    manipulators: `rid-dev-manip-${uid}`,
    mobileRobots: `rid-dev-mobile-${uid}`,
    trolleyRobots: `rid-dev-trolley-${uid}`,
    assistiveForms: `rid-dev-assist-${uid}`,
    sensors: `rid-dev-sensor-${uid}`,
  } as const;

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
              <stop offset="0%" stopColor="#091220" />
              <stop offset="35%" stopColor="#12233a" />
              <stop offset="70%" stopColor="#1a3050" />
              <stop offset="100%" stopColor="#1a2e28" />
            </linearGradient>
            <radialGradient id={savenGrad} cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="#3a5578" />
              <stop offset="45%" stopColor="#1a2a44" />
              <stop offset="100%" stopColor="#0a1220" />
            </radialGradient>
            <radialGradient id={savenCoreGrad} cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#4a6288" />
              <stop offset="50%" stopColor="#1a2a44" />
              <stop offset="100%" stopColor="#0a1220" />
            </radialGradient>
            <radialGradient id={`${savenCoreGrad}-gold`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e8c878" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={pathSheen} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5b8db8" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#d4a84b" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#5ec4b8" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#7eb8c9" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id={ringGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a84b" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#5b8db8" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#5ec4b8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#d4a84b" stopOpacity="0.75" />
            </linearGradient>

            {/* Per-device plate fills */}
            <linearGradient id={deviceGrads.manipulators} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a3420" />
              <stop offset="100%" stopColor="#1a2418" />
            </linearGradient>
            <linearGradient id={deviceGrads.mobileRobots} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a2d4a" />
              <stop offset="100%" stopColor="#122033" />
            </linearGradient>
            <linearGradient id={deviceGrads.trolleyRobots} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3538" />
              <stop offset="100%" stopColor="#14282c" />
            </linearGradient>
            <linearGradient id={deviceGrads.assistiveForms} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e2820" />
              <stop offset="100%" stopColor="#221c18" />
            </linearGradient>
            <linearGradient id={deviceGrads.sensors} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3048" />
              <stop offset="100%" stopColor="#152438" />
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

          {/* Soft field atmosphere */}
          <ellipse
            className="rid__atmosphere rid__atmosphere--a"
            cx={CX}
            cy={CY}
            rx="265"
            ry="220"
          />
          <ellipse
            className="rid__atmosphere rid__atmosphere--teal"
            cx={CX + 40}
            cy={CY + 20}
            rx="160"
            ry="140"
          />
          <ellipse
            className="rid__atmosphere rid__atmosphere--gold"
            cx={CX}
            cy={CY}
            rx="120"
            ry="100"
          />

          {/* Soft path underlays — per-device tint */}
          {DEVICES.map((device, index) => (
            <use
              key={`${pathIds[index]}-glow`}
              href={`#${pathIds[index]}`}
              className={`rid__path-glow rid__path-glow--${device.key}`}
            />
          ))}

          {/* Visible links */}
          {DEVICES.map((device, index) => (
            <use
              key={`${pathIds[index]}-path`}
              href={`#${pathIds[index]}`}
              className={`rid__path rid__path--${device.key}`}
            />
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

          {/* Interface ring — more visible */}
          <g className="rid__ring" transform={`translate(${CX} ${CY})`}>
            <circle className="rid__ring-orbit rid__ring-orbit--halo" r="128" />
            <circle className="rid__ring-orbit rid__ring-orbit--outer" r="118" />
            <circle
              className="rid__ring-orbit rid__ring-orbit--main"
              r="102"
              stroke={`url(#${ringGrad})`}
            />
            <circle className="rid__ring-orbit rid__ring-orbit--inner" r="86" />
            {/* Orbit beads */}
            {RING_BEADS.map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const bx = Math.cos(rad) * 102;
              const by = Math.sin(rad) * 102;
              return (
                <circle
                  key={`bead-${i}`}
                  className={`rid__ring-bead rid__ring-bead--${i}`}
                  cx={bx}
                  cy={by}
                  r={i % 2 === 0 ? 3.2 : 2.4}
                />
              );
            })}
            <text className="rid__ring-label" textAnchor="middle" y="-124">
              {labels.interfaceRing}
            </text>
          </g>

          {/* SAVEN center — stronger treatment */}
          <g transform={`translate(${CX} ${CY})`}>
            <g className="rid__node rid__node--saven">
              <rect
                className="rid__node-plate rid__node-plate--saven"
                x="-78"
                y="-46"
                width="156"
                height="92"
                fill={`url(#${savenGrad})`}
              />
              <rect className="rid__saven-frame" x="-78" y="-46" width="156" height="92" />
              {/* Corner marks */}
              <path className="rid__saven-corner" d="M -78 -36 L -78 -46 L -68 -46" fill="none" />
              <path className="rid__saven-corner" d="M 78 -36 L 78 -46 L 68 -46" fill="none" />
              <path className="rid__saven-corner" d="M -78 36 L -78 46 L -68 46" fill="none" />
              <path className="rid__saven-corner" d="M 78 36 L 78 46 L 68 46" fill="none" />
              <circle className="rid__saven-ring rid__saven-ring--halo" r="40" />
              <circle className="rid__saven-ring rid__saven-ring--outer" r="34" />
              <circle className="rid__saven-ring" r="26" />
              <circle
                className="rid__saven-core"
                r="17"
                fill={`url(#${savenCoreGrad})`}
              />
              <circle
                className="rid__saven-core-glow"
                r="17"
                fill={`url(#${savenCoreGrad}-gold)`}
              />
              <circle className="rid__saven-core-shine" cx="-5" cy="-5" r="3.8" />
              <text className="rid__node-label rid__node-label--saven" textAnchor="middle" y="6">
                {labels.saven}
              </text>
            </g>
          </g>

          {/* Outer devices */}
          {DEVICES.map((device, index) => {
            const pos = polar(device.angle, device.radius);
            return (
              <g
                key={device.key}
                transform={`translate(${pos.x.toFixed(1)} ${pos.y.toFixed(1)})`}
              >
                <g
                  className={`rid__device rid__device--${device.key} rid__device--${index}`}
                >
                  <rect
                    className={`rid__device-plate rid__device-plate--${device.key}`}
                    x="-82"
                    y="-30"
                    width="164"
                    height="60"
                    fill={`url(#${deviceGrads[device.key]})`}
                  />
                  <rect
                    className={`rid__device-accent-bar rid__device-accent-bar--${device.key}`}
                    x="-82"
                    y="-30"
                    width="5"
                    height="60"
                  />
                  <g className="rid__device-icon" transform="translate(-52 0)">
                    <DeviceIcon kind={device.key} />
                  </g>
                  <text className="rid__device-label" textAnchor="start" x="-28" y="5">
                    {deviceLabels[device.key]}
                  </text>
                </g>
              </g>
            );
          })}

          <text className="rid__cue" x={CX} y="508" textAnchor="middle">
            {labels.cue}
          </text>

          {motion
            ? pathIds.flatMap((id, index) => {
                const device = DEVICES[index]!;
                return [
                  <g key={`${id}-out`} className="rid__particles">
                    <circle
                      className={`rid__particle rid__particle--${device.key} rid__particle--out`}
                      r={3.4}
                    >
                      <animateMotion
                        dur={`${3.8 + index * 0.28}s`}
                        repeatCount="indefinite"
                        begin={`${index * 0.4}s`}
                      >
                        <mpath href={`#${id}`} />
                      </animateMotion>
                    </circle>
                  </g>,
                  <g key={`${id}-in`} className="rid__particles">
                    <circle
                      className={`rid__particle rid__particle--${device.key} rid__particle--in`}
                      r={2.4}
                    >
                      <animateMotion
                        dur={`${4.6 + index * 0.3}s`}
                        repeatCount="indefinite"
                        begin={`${1.1 + index * 0.45}s`}
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                      >
                        <mpath href={`#${id}`} />
                      </animateMotion>
                    </circle>
                  </g>,
                ];
              })
            : null}
        </svg>
      </div>

      <p className="rid__note">{labels.note}</p>
    </section>
  );
}
