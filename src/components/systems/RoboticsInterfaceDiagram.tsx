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
  { key: "manipulators", angle: -90, radius: 268 },
  { key: "mobileRobots", angle: -18, radius: 268 },
  { key: "trolleyRobots", angle: 54, radius: 268 },
  { key: "assistiveForms", angle: 126, radius: 268 },
  { key: "sensors", angle: 198, radius: 268 },
];

/** Approved brand mark — same asset as email / OG / header lockup. */
const SAVEN_MARK_SRC = "/brand/saven-logo-mark.webp";
/** Native cropped mark ratio (479×647). */
const SAVEN_MARK_ASPECT = 479 / 647;

/** Orbit bead angles on the interface ring (degrees). */
const RING_BEADS = [-75, -15, 45, 105, 165] as const;

const CX = 550;
const CY = 355;
const VB_W = 1100;
const VB_H = 720;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

/**
 * Large, high-contrast SVG device illustrations (D-0193).
 * Bold shapes — readable at diagram scale; no photo thumbnails.
 */
function DeviceIllustration({ kind }: { kind: DeviceKey }) {
  switch (kind) {
    case "manipulators":
      return (
        <g className="rid__illust rid__illust--manipulators">
          <rect className="rid__illust-fill" x="-18" y="14" width="36" height="12" />
          <rect className="rid__illust-accent" x="-12" y="6" width="24" height="9" />
          <circle className="rid__illust-joint" cx="-4" cy="2" r="5.5" />
          <g className="rid__illust-arm">
            <line className="rid__illust-limb" x1="-4" y1="2" x2="6" y2="-14" />
            <circle className="rid__illust-joint rid__illust-joint--mid" cx="6" cy="-14" r="4.2" />
            <line className="rid__illust-limb" x1="6" y1="-14" x2="18" y2="-24" />
            <path
              className="rid__illust-grip"
              d="M 14 -28 L 22 -20 M 22 -28 L 14 -20"
              fill="none"
            />
          </g>
          <circle className="rid__illust-dot" cx="-10" cy="20" r="2.2" />
          <circle className="rid__illust-dot" cx="10" cy="20" r="2.2" />
        </g>
      );
    case "mobileRobots":
      return (
        <g className="rid__illust rid__illust--mobile">
          <rect className="rid__illust-fill" x="-22" y="-4" width="44" height="18" />
          <rect className="rid__illust-accent" x="-12" y="-20" width="24" height="16" />
          <circle className="rid__illust-lens" cx="-5" cy="-12" r="3.2" />
          <circle className="rid__illust-lens rid__illust-lens--alt" cx="6" cy="-12" r="3.2" />
          <g className="rid__illust-wheel">
            <circle className="rid__illust-wheel-rim" cx="-12" cy="18" r="7" />
            <circle className="rid__illust-wheel-hub" cx="-12" cy="18" r="2.6" />
            <line className="rid__illust-spoke" x1="-12" y1="12" x2="-12" y2="24" />
            <line className="rid__illust-spoke" x1="-18" y1="18" x2="-6" y2="18" />
          </g>
          <g className="rid__illust-wheel">
            <circle className="rid__illust-wheel-rim" cx="12" cy="18" r="7" />
            <circle className="rid__illust-wheel-hub" cx="12" cy="18" r="2.6" />
            <line className="rid__illust-spoke" x1="12" y1="12" x2="12" y2="24" />
            <line className="rid__illust-spoke" x1="6" y1="18" x2="18" y2="18" />
          </g>
        </g>
      );
    case "trolleyRobots":
      return (
        <g className="rid__illust rid__illust--trolley">
          <rect className="rid__illust-fill" x="-22" y="-10" width="44" height="22" />
          <line className="rid__illust-divider" x1="-16" y1="0" x2="16" y2="0" />
          <rect className="rid__illust-accent" x="-16" y="-7" width="14" height="8" />
          <rect className="rid__illust-cargo" x="2" y="-7" width="14" height="8" />
          <path
            className="rid__illust-limb"
            d="M -8 -10 L -8 -24 L 14 -24"
            fill="none"
          />
          <circle className="rid__illust-dot" cx="14" cy="-24" r="2.6" />
          <circle className="rid__illust-wheel-rim" cx="-12" cy="16" r="6" />
          <circle className="rid__illust-wheel-hub" cx="-12" cy="16" r="2.2" />
          <circle className="rid__illust-wheel-rim" cx="12" cy="16" r="6" />
          <circle className="rid__illust-wheel-hub" cx="12" cy="16" r="2.2" />
        </g>
      );
    case "assistiveForms":
      return (
        <g className="rid__illust rid__illust--assist">
          <circle className="rid__illust-head" cx="0" cy="-18" r="9" />
          <rect className="rid__illust-visor" x="-7" y="-21" width="14" height="5" />
          <circle className="rid__illust-lens" cx="-3" cy="-18.5" r="1.8" />
          <circle className="rid__illust-lens rid__illust-lens--alt" cx="3.5" cy="-18.5" r="1.8" />
          <path
            className="rid__illust-torso"
            d="M -15 8 C -15 -8, 15 -8, 15 8 L 12 22 L -12 22 Z"
          />
          <path
            className="rid__illust-limb rid__illust-limb--warm"
            d="M -15 0 C -24 -4, -26 10, -18 14"
            fill="none"
          />
          <path
            className="rid__illust-limb rid__illust-limb--warm"
            d="M 15 0 C 24 -4, 26 10, 18 14"
            fill="none"
          />
          <circle className="rid__illust-dot rid__illust-dot--warm" cx="-18" cy="14" r="2.8" />
          <circle className="rid__illust-dot rid__illust-dot--warm" cx="18" cy="14" r="2.8" />
          <rect className="rid__illust-accent" x="-7" y="2" width="14" height="5" />
        </g>
      );
    case "sensors":
      return (
        <g className="rid__illust rid__illust--sensors">
          <rect className="rid__illust-fill" x="-5" y="0" width="10" height="22" />
          <rect className="rid__illust-accent" x="-14" y="20" width="28" height="7" />
          <circle className="rid__illust-lens rid__illust-lens--core" cx="0" cy="-10" r="8" />
          <circle className="rid__illust-joint" cx="0" cy="-10" r="3.5" />
          <path
            className="rid__illust-arc rid__illust-arc--a"
            d="M -20 -2 A 22 22 0 0 1 20 -2"
            fill="none"
          />
          <path
            className="rid__illust-arc rid__illust-arc--b"
            d="M -14 -12 A 15 15 0 0 1 14 -12"
            fill="none"
          />
          <path
            className="rid__illust-arc rid__illust-arc--c"
            d="M -8 -18 A 9 9 0 0 1 8 -18"
            fill="none"
          />
        </g>
      );
  }
}

/**
 * Animated SAVEN Robotics Interface hub diagram (D-0189–D-0193).
 * Center SAVEN brand mark · interface ring · large illustrated device nodes.
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
  const descId = `rid-desc-${uid}`;
  const fieldGrad = `rid-field-${uid}`;
  const savenGrad = `rid-saven-${uid}`;
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

  const markH = 52;
  const markW = Math.round(markH * SAVEN_MARK_ASPECT);

  const a11yDescription = [
    labels.lede,
    `${labels.saven} brand mark at center.`,
    `Device classes: ${Object.values(deviceLabels).join(", ")}.`,
    labels.note,
  ].join(" ");

  return (
    <section
      className={`rid${motion ? " rid--motion" : " rid--static"}`}
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      <header className="rid__header">
        <h2 id={titleId} className="rid__title">
          {labels.interfaceRing}
        </h2>
        <p className="rid__subtitle">{labels.title}</p>
        <p className="rid__lede">{labels.lede}</p>
      </header>

      <p id={descId} className="visually-hidden">
        {a11yDescription}
      </p>

      <div className="rid__stage" role="img" aria-labelledby={titleId} aria-describedby={descId}>
        <svg
          className="rid__svg"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={fieldGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08101c" />
              <stop offset="32%" stopColor="#12233a" />
              <stop offset="68%" stopColor="#1a3050" />
              <stop offset="100%" stopColor="#162a28" />
            </linearGradient>
            <radialGradient id={savenGrad} cx="38%" cy="32%" r="72%">
              <stop offset="0%" stopColor="#45648a" />
              <stop offset="45%" stopColor="#1a2a44" />
              <stop offset="100%" stopColor="#0a1220" />
            </radialGradient>
            <linearGradient id={pathSheen} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5b8db8" stopOpacity="0.25" />
              <stop offset="35%" stopColor="#d4a84b" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#5ec4b8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7eb8c9" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id={ringGrad} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a84b" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#5b8db8" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#5ec4b8" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#d4a84b" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id={deviceGrads.manipulators} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#314028" />
              <stop offset="100%" stopColor="#1a2418" />
            </linearGradient>
            <linearGradient id={deviceGrads.mobileRobots} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3454" />
              <stop offset="100%" stopColor="#122033" />
            </linearGradient>
            <linearGradient id={deviceGrads.trolleyRobots} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e4044" />
              <stop offset="100%" stopColor="#14282c" />
            </linearGradient>
            <linearGradient id={deviceGrads.assistiveForms} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#383028" />
              <stop offset="100%" stopColor="#221c18" />
            </linearGradient>
            <linearGradient id={deviceGrads.sensors} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3850" />
              <stop offset="100%" stopColor="#152438" />
            </linearGradient>

            {DEVICES.map((device, index) => {
              const outer = polar(device.angle, device.radius - 78);
              const inner = polar(device.angle, 98);
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
            width={VB_W}
            height={VB_H}
            fill={`url(#${fieldGrad})`}
          />

          <ellipse
            className="rid__atmosphere rid__atmosphere--a"
            cx={CX}
            cy={CY}
            rx="320"
            ry="270"
          />
          <ellipse
            className="rid__atmosphere rid__atmosphere--teal"
            cx={CX + 48}
            cy={CY + 24}
            rx="190"
            ry="165"
          />
          <ellipse
            className="rid__atmosphere rid__atmosphere--gold"
            cx={CX}
            cy={CY}
            rx="140"
            ry="118"
          />

          {DEVICES.map((device, index) => (
            <use
              key={`${pathIds[index]}-glow`}
              href={`#${pathIds[index]}`}
              className={`rid__path-glow rid__path-glow--${device.key}`}
            />
          ))}

          {DEVICES.map((device, index) => (
            <use
              key={`${pathIds[index]}-path`}
              href={`#${pathIds[index]}`}
              className={`rid__path rid__path--${device.key}`}
            />
          ))}

          {pathIds.map((id, index) => (
            <use
              key={`${id}-pulse`}
              href={`#${id}`}
              className={`rid__path-pulse rid__path-pulse--${index}`}
              stroke={`url(#${pathSheen})`}
            />
          ))}

          <g className="rid__ring" transform={`translate(${CX} ${CY})`}>
            <circle className="rid__ring-orbit rid__ring-orbit--halo" r="148" />
            <circle className="rid__ring-orbit rid__ring-orbit--outer" r="136" />
            <circle
              className="rid__ring-orbit rid__ring-orbit--main"
              r="118"
              stroke={`url(#${ringGrad})`}
            />
            <circle className="rid__ring-orbit rid__ring-orbit--inner" r="98" />
            {RING_BEADS.map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const bx = Math.cos(rad) * 118;
              const by = Math.sin(rad) * 118;
              return (
                <circle
                  key={`bead-${i}`}
                  className={`rid__ring-bead rid__ring-bead--${i}`}
                  cx={bx}
                  cy={by}
                  r={i % 2 === 0 ? 4 : 3}
                />
              );
            })}
            <text className="rid__ring-label" textAnchor="middle" y="-142">
              {labels.interfaceRing}
            </text>
          </g>

          {/* SAVEN center — brand mark + wordmark */}
          <g transform={`translate(${CX} ${CY})`}>
            <g className="rid__node rid__node--saven">
              <rect
                className="rid__node-plate rid__node-plate--saven"
                x="-96"
                y="-64"
                width="192"
                height="128"
                fill={`url(#${savenGrad})`}
              />
              <rect className="rid__saven-frame" x="-96" y="-64" width="192" height="128" />
              <path className="rid__saven-corner" d="M -96 -50 L -96 -64 L -80 -64" fill="none" />
              <path className="rid__saven-corner" d="M 96 -50 L 96 -64 L 80 -64" fill="none" />
              <path className="rid__saven-corner" d="M -96 50 L -96 64 L -80 64" fill="none" />
              <path className="rid__saven-corner" d="M 96 50 L 96 64 L 80 64" fill="none" />
              <circle className="rid__saven-ring rid__saven-ring--halo" r="52" />
              <circle className="rid__saven-ring rid__saven-ring--outer" r="44" />
              <circle className="rid__saven-ring" r="34" />
              <image
                className="rid__saven-mark"
                href={SAVEN_MARK_SRC}
                x={-markW / 2}
                y={-markH / 2 - 10}
                width={markW}
                height={markH}
                preserveAspectRatio="xMidYMid meet"
              >
                <title>SAVEN Core</title>
              </image>
              <text className="rid__node-label rid__node-label--saven" textAnchor="middle" y="48">
                {labels.saven}
              </text>
            </g>
          </g>

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
                    x="-78"
                    y="-78"
                    width="156"
                    height="156"
                    fill={`url(#${deviceGrads[device.key]})`}
                  />
                  <rect
                    className={`rid__device-accent-bar rid__device-accent-bar--${device.key}`}
                    x="-78"
                    y="-78"
                    width="7"
                    height="156"
                  />
                  <circle
                    className={`rid__device-badge rid__device-badge--${device.key}`}
                    r="48"
                    cy="-14"
                  />
                  <g transform="translate(0 -14) scale(1.55)">
                    <DeviceIllustration kind={device.key} />
                  </g>
                  <text
                    className={`rid__device-label rid__device-label--${device.key}`}
                    textAnchor="middle"
                    y="58"
                  >
                    {deviceLabels[device.key]}
                  </text>
                </g>
              </g>
            );
          })}

          <text className="rid__cue" x={CX} y="688" textAnchor="middle">
            {labels.cue}
          </text>

          {motion
            ? pathIds.flatMap((id, index) => {
                const device = DEVICES[index]!;
                return [
                  <g key={`${id}-out`} className="rid__particles">
                    <circle
                      className={`rid__particle rid__particle--${device.key} rid__particle--out`}
                      r={4}
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
                      r={2.8}
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
