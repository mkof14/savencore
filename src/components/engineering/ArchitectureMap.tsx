import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type ArchitectureMapProps = {
  locale: Locale;
  heading?: string;
  description?: string;
  className?: string;
};

type MapNode = {
  id: string;
  label: string;
  role: string;
  href: string;
  zone: "context" | "support" | "control" | "connect" | "interface" | "physical" | "aerial";
};

const NODES: readonly MapNode[] = [
  {
    id: "knowledge-engine",
    label: "Knowledge Engine",
    role: "Provides context",
    href: "/systems/knowledge-engine/",
    zone: "context",
  },
  {
    id: "ai-decision-support",
    label: "AI Decision Support",
    role: "Supports review",
    href: "/systems/ai-decision-support/",
    zone: "support",
  },
  {
    id: "safety-layer",
    label: "Safety Layer",
    role: "Governs multiple systems",
    href: "/systems/safety-layer/",
    zone: "control",
  },
  {
    id: "communication-layer",
    label: "Communication Layer",
    role: "Connects components",
    href: "/systems/communication-layer/",
    zone: "connect",
  },
  {
    id: "clinical-interfaces",
    label: "Clinical Interfaces",
    role: "Controlled workflows",
    href: "/systems/clinical-interfaces/",
    zone: "interface",
  },
  {
    id: "robotics-layer",
    label: "Robotics Layer",
    role: "Digital → physical action",
    href: "/systems/robotics-layer/",
    zone: "physical",
  },
  {
    id: "drone-systems",
    label: "Drone Systems",
    role: "Specialized aerial system",
    href: "/systems/drone-systems/",
    zone: "aerial",
  },
];

/**
 * Systems Overview architecture map — roles, boundaries, and relationships.
 * Accessible HTML/CSS structure; stacks on mobile without clipping.
 */
export function ArchitectureMap({
  locale,
  heading = "Systems architecture map",
  description = "How SAVEN Core systems relate by role and boundary — not a simple list.",
  className,
}: ArchitectureMapProps) {
  const headingId = "architecture-map-heading";
  const byId = Object.fromEntries(NODES.map((node) => [node.id, node]));

  return (
    <section
      className={["architecture-map", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <div className="architecture-map__header">
        <p className="architecture-map__kicker">System relationships</p>
        <h2 id={headingId} className="architecture-map__heading">
          {heading}
        </h2>
        <p className="architecture-map__description">{description}</p>
      </div>

      <div
        className="architecture-map__board"
        role="group"
        aria-label="Architecture relationship board"
      >
        <div className="architecture-map__rail architecture-map__rail--measure" aria-hidden="true">
          <span>CTX</span>
          <span>CTL</span>
          <span>ACT</span>
        </div>

        <div className="architecture-map__zone architecture-map__zone--context">
          <p className="architecture-map__zone-label">Context</p>
          <MapCard locale={locale} node={byId["knowledge-engine"]!} />
          <p className="architecture-map__edge">
            <span className="architecture-map__edge-verb">provides context to</span>
          </p>
          <MapCard locale={locale} node={byId["ai-decision-support"]!} />
        </div>

        <div className="architecture-map__zone architecture-map__zone--control">
          <p className="architecture-map__zone-label">Control boundary</p>
          <MapCard locale={locale} node={byId["safety-layer"]!} emphasis />
          <p className="architecture-map__note">
            Safety Layer governs Knowledge Engine, AI Decision Support,
            Communication Layer, and physical pathways.
          </p>
        </div>

        <div className="architecture-map__zone architecture-map__zone--connect">
          <p className="architecture-map__zone-label">Connection</p>
          <MapCard locale={locale} node={byId["communication-layer"]!} />
          <p className="architecture-map__edge">
            <span className="architecture-map__edge-verb">reaches interfaces and action</span>
          </p>
        </div>

        <div className="architecture-map__zone architecture-map__zone--endpoints">
          <p className="architecture-map__zone-label">Interfaces and action</p>
          <div className="architecture-map__endpoint-grid">
            <MapCard locale={locale} node={byId["clinical-interfaces"]!} />
            <MapCard locale={locale} node={byId["robotics-layer"]!} />
            <MapCard locale={locale} node={byId["drone-systems"]!} />
          </div>
        </div>
      </div>

      <ul className="architecture-map__legend">
        <li>
          <span className="architecture-map__legend-mark architecture-map__legend-mark--context" />
          Context systems organize knowledge
        </li>
        <li>
          <span className="architecture-map__legend-mark architecture-map__legend-mark--control" />
          Control systems set limits and oversight
        </li>
        <li>
          <span className="architecture-map__legend-mark architecture-map__legend-mark--action" />
          Action systems connect to people and physical environments
        </li>
      </ul>
    </section>
  );
}

function MapCard({
  locale,
  node,
  emphasis,
}: {
  locale: Locale;
  node: MapNode;
  emphasis?: boolean;
}) {
  return (
    <article
      className={[
        "architecture-map__card",
        `architecture-map__card--${node.zone}`,
        emphasis ? "is-emphasis" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="architecture-map__card-id" aria-hidden="true">
        {node.id}
      </p>
      <h3 className="architecture-map__card-title">
        <Link
          href={localizePath(locale, node.href)}
          className="architecture-map__card-link"
        >
          {node.label}
        </Link>
      </h3>
      <p className="architecture-map__card-role">{node.role}</p>
    </article>
  );
}
