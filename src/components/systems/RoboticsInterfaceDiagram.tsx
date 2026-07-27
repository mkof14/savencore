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
  /** Cropped WebP from approved domain / hero assets (architecture concepts). */
  imageSrc: string;
}> = [
  {
    key: "manipulators",
    angle: -90,
    radius: 198,
    imageSrc: "/domain/systems/diagram/node-manipulators.webp",
  },
  {
    key: "mobileRobots",
    angle: -18,
    radius: 198,
    imageSrc: "/domain/systems/diagram/node-mobile-robots.webp",
  },
  {
    key: "trolleyRobots",
    angle: 54,
    radius: 198,
    imageSrc: "/domain/systems/diagram/node-trolley-robots.webp",
  },
  {
    key: "assistiveForms",
    angle: 126,
    radius: 198,
    imageSrc: "/domain/systems/diagram/node-assistive-forms.webp",
  },
  {
    key: "sensors",
    angle: 198,
    radius: 198,
    imageSrc: "/domain/systems/diagram/node-sensors.webp",
  },
];

/** Approved brand mark — same asset as email / OG / header lockup. */
const SAVEN_MARK_SRC = "/brand/saven-logo-mark.webp";
/** Native cropped mark ratio (479×647). */
const SAVEN_MARK_ASPECT = 479 / 647;

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
 * Animated SAVEN Robotics Interface hub diagram (D-0189 / D-0190 / D-0191).
 * Center SAVEN brand mark · interface ring · photoreal device node thumbs.
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
  const thumbClip = `rid-thumb-clip-${uid}`;
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

  const markH = 36;
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
          {labels.title}
        </h2>
        <p className="rid__lede">{labels.lede}</p>
      </header>

      <p id={descId} className="visually-hidden">
        {a11yDescription}
      </p>

      <div className="rid__stage" role="img" aria-labelledby={titleId} aria-describedby={descId}>
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

            <clipPath id={thumbClip}>
              <circle cx="0" cy="0" r="20" />
            </clipPath>

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
            <circle className="rid__ring-orbit rid__ring-orbit--halo" r="128" />
            <circle className="rid__ring-orbit rid__ring-orbit--outer" r="118" />
            <circle
              className="rid__ring-orbit rid__ring-orbit--main"
              r="102"
              stroke={`url(#${ringGrad})`}
            />
            <circle className="rid__ring-orbit rid__ring-orbit--inner" r="86" />
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

          {/* SAVEN center — brand mark + wordmark */}
          <g transform={`translate(${CX} ${CY})`}>
            <g className="rid__node rid__node--saven">
              <rect
                className="rid__node-plate rid__node-plate--saven"
                x="-78"
                y="-50"
                width="156"
                height="100"
                fill={`url(#${savenGrad})`}
              />
              <rect className="rid__saven-frame" x="-78" y="-50" width="156" height="100" />
              <path className="rid__saven-corner" d="M -78 -40 L -78 -50 L -68 -50" fill="none" />
              <path className="rid__saven-corner" d="M 78 -40 L 78 -50 L 68 -50" fill="none" />
              <path className="rid__saven-corner" d="M -78 40 L -78 50 L -68 50" fill="none" />
              <path className="rid__saven-corner" d="M 78 40 L 78 50 L 68 50" fill="none" />
              <circle className="rid__saven-ring rid__saven-ring--halo" r="40" />
              <circle className="rid__saven-ring rid__saven-ring--outer" r="34" />
              <circle className="rid__saven-ring" r="26" />
              <image
                className="rid__saven-mark"
                href={SAVEN_MARK_SRC}
                x={-markW / 2}
                y={-markH / 2 - 8}
                width={markW}
                height={markH}
                preserveAspectRatio="xMidYMid meet"
              >
                <title>SAVEN Core</title>
              </image>
              <text className="rid__node-label rid__node-label--saven" textAnchor="middle" y="38">
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
                    x="-82"
                    y="-32"
                    width="164"
                    height="64"
                    fill={`url(#${deviceGrads[device.key]})`}
                  />
                  <rect
                    className={`rid__device-accent-bar rid__device-accent-bar--${device.key}`}
                    x="-82"
                    y="-32"
                    width="5"
                    height="64"
                  />
                  <g className="rid__device-thumb" transform="translate(-48 0)">
                    <circle
                      className={`rid__device-thumb-halo rid__device-thumb-halo--${device.key}`}
                      r="23"
                    />
                    <circle
                      className={`rid__device-thumb-ring rid__device-thumb-ring--${device.key}`}
                      r="21.2"
                    />
                    <image
                      className="rid__device-thumb-img"
                      href={device.imageSrc}
                      x="-20"
                      y="-20"
                      width="40"
                      height="40"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#${thumbClip})`}
                    >
                      <title>{deviceLabels[device.key]}</title>
                    </image>
                  </g>
                  <text className="rid__device-label" textAnchor="start" x="-20" y="5">
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
