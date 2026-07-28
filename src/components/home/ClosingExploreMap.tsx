"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { Locale } from "@/config/locales";
import type { ClosingExplorePillar } from "@/content/home/physical-world/types";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

/**
 * Percentage hotspots aligned to the five pillar icons on
 * `public/home/saven-closing-bg.webp` (1024×682 art).
 */
const HOTSPOTS: Record<
  ClosingExplorePillar["id"],
  { left: number; top: number; width: number; height: number }
> = {
  support: { left: 10.5, top: 54.5, width: 15.5, height: 20 },
  action: { left: 26.5, top: 54.5, width: 15.5, height: 20 },
  verification: { left: 42.2, top: 54.5, width: 15.5, height: 20 },
  environment: { left: 58, top: 54.5, width: 15.5, height: 20 },
  network: { left: 73.8, top: 54.5, width: 15.5, height: 20 },
};

type ClosingExploreMapProps = {
  locale: Locale;
  exploreLabel: string;
  exploreHint: string;
  goDeeper: string;
  pillars: readonly ClosingExplorePillar[];
};

export function ClosingExploreMap({
  locale,
  exploreLabel,
  exploreHint,
  goDeeper,
  pillars,
}: ClosingExploreMapProps) {
  const panelId = useId();
  const [activeId, setActiveId] = useState<ClosingExplorePillar["id"] | null>(
    null,
  );

  const active = pillars.find((p) => p.id === activeId) ?? null;

  return (
    <div className="pw-explore">
      <p className="pw-explore__label">{exploreLabel}</p>
      <p className="pw-explore__hint" id={`${panelId}-hint`}>
        {exploreHint}
      </p>

      <ul
        className="pw-explore__hotspots"
        aria-label={exploreLabel}
        aria-describedby={`${panelId}-hint`}
      >
        {pillars.map((pillar) => {
          const box = HOTSPOTS[pillar.id];
          const href = localizePath(locale, pillar.href as PublishedRoute);
          const isActive = activeId === pillar.id;

          return (
            <li key={pillar.id} className="pw-explore__hotspot-item">
              <Link
                href={href}
                className={`pw-explore__hotspot${isActive ? " is-active" : ""}`}
                style={{
                  left: `${box.left}%`,
                  top: `${box.top}%`,
                  width: `${box.width}%`,
                  height: `${box.height}%`,
                }}
                aria-describedby={isActive ? panelId : undefined}
                onFocus={() => setActiveId(pillar.id)}
                onBlur={() =>
                  setActiveId((current) =>
                    current === pillar.id ? null : current,
                  )
                }
                onMouseEnter={() => setActiveId(pillar.id)}
                onMouseLeave={() =>
                  setActiveId((current) =>
                    current === pillar.id ? null : current,
                  )
                }
              >
                <span className="visually-hidden">
                  {pillar.label}: {pillar.meaning} {goDeeper} — {pillar.cta}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        id={panelId}
        className={`pw-explore__panel${active ? " is-visible" : ""}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {active ? (
          <>
            <p className="pw-explore__panel-label">{active.label}</p>
            <p className="pw-explore__panel-meaning">{active.meaning}</p>
            <Link
              href={localizePath(locale, active.href as PublishedRoute)}
              className="pw-explore__panel-cta"
            >
              {goDeeper}
              <span aria-hidden="true"> · </span>
              {active.cta}
              <span aria-hidden="true"> →</span>
            </Link>
          </>
        ) : (
          <p className="pw-explore__panel-idle">{exploreHint}</p>
        )}
      </div>

      <nav className="pw-explore__rail" aria-label={exploreLabel}>
        <ul className="pw-explore__rail-list">
          {pillars.map((pillar) => (
            <li key={`rail-${pillar.id}`}>
              <Link
                href={localizePath(locale, pillar.href as PublishedRoute)}
                className={`pw-explore__rail-link${activeId === pillar.id ? " is-active" : ""}`}
                onFocus={() => setActiveId(pillar.id)}
                onBlur={() =>
                  setActiveId((current) =>
                    current === pillar.id ? null : current,
                  )
                }
                onMouseEnter={() => setActiveId(pillar.id)}
                onMouseLeave={() =>
                  setActiveId((current) =>
                    current === pillar.id ? null : current,
                  )
                }
              >
                {pillar.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
