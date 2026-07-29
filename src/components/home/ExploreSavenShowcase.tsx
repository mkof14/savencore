"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";

import type { Locale } from "@/config/locales";
import type { ClosingExplorePillar } from "@/content/home/physical-world/types";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

const PILLAR_LETTERS: Record<ClosingExplorePillar["id"], string> = {
  support: "S",
  action: "A",
  verification: "V",
  environment: "E",
  network: "N",
};

const PILLAR_VISUALS: Record<
  ClosingExplorePillar["id"],
  { src: string; accent: string }
> = {
  support: {
    src: "/home/explore-saven/letter-s.webp",
    accent: "amber",
  },
  action: {
    src: "/home/explore-saven/letter-a.webp",
    accent: "gold",
  },
  verification: {
    src: "/home/explore-saven/letter-v.webp",
    accent: "cyan",
  },
  environment: {
    src: "/home/explore-saven/letter-e.webp",
    accent: "blue",
  },
  network: {
    src: "/home/explore-saven/letter-n.webp",
    accent: "fiber",
  },
};

type ExploreSavenShowcaseProps = {
  locale: Locale;
  heading: string;
  support: string;
  pillars: readonly ClosingExplorePillar[];
};

/**
 * Clarity Explore SAVEN — cinematic letter panels (D-0225).
 * Gated by parent HomeClarityPack / HOME_CLARITY_V1.
 * Contained glow only inside this dark band.
 */
export function ExploreSavenShowcase({
  locale,
  heading,
  support,
  pillars,
}: ExploreSavenShowcaseProps) {
  const baseId = useId();
  const tabRefs = useRef<
    Partial<Record<ClosingExplorePillar["id"], HTMLButtonElement | null>>
  >({});
  const [activeId, setActiveId] = useState<ClosingExplorePillar["id"]>(
    pillars[0]?.id ?? "support",
  );

  const active = pillars.find((p) => p.id === activeId) ?? pillars[0];
  if (!active) return null;

  const visual = PILLAR_VISUALS[active.id];
  const letter = PILLAR_LETTERS[active.id];
  const href = localizePath(locale, active.href as PublishedRoute);
  const panelId = `${baseId}-panel`;
  const order = pillars.map((p) => p.id);

  const selectPillar = (
    id: ClosingExplorePillar["id"],
    focus = false,
  ) => {
    setActiveId(id);
    if (focus) {
      requestAnimationFrame(() => tabRefs.current[id]?.focus());
    }
  };

  return (
    <section
      className="pw-explore-saven"
      aria-labelledby={`${baseId}-title`}
    >
      <div className="pw-home__inner pw-explore-saven__inner">
        <header className="pw-explore-saven__header">
          <div className="pw-explore-saven__title-row">
            <Image
              src="/brand/saven-logo-mark.webp"
              alt=""
              width={48}
              height={65}
              className="pw-explore-saven__logo"
              draggable={false}
            />
            <h2 id={`${baseId}-title`} className="pw-explore-saven__title">
              {heading}
            </h2>
          </div>
          <p className="pw-explore-saven__support">{support}</p>
        </header>

        <div
          className="pw-explore-saven__tabs"
          role="tablist"
          aria-label={heading}
        >
          {pillars.map((pillar) => {
            const selected = pillar.id === active.id;
            const tabLetter = PILLAR_LETTERS[pillar.id];
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                id={`${baseId}-tab-${pillar.id}`}
                ref={(node) => {
                  tabRefs.current[pillar.id] = node;
                }}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                className={`pw-explore-saven__tab pw-explore-saven__tab--${PILLAR_VISUALS[pillar.id].accent}${selected ? " is-active" : ""}`}
                onClick={() => selectPillar(pillar.id)}
                onKeyDown={(event) => {
                  const index = order.indexOf(pillar.id);
                  if (index < 0) return;
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    const next = order[(index + 1) % order.length];
                    if (next) selectPillar(next, true);
                  } else if (
                    event.key === "ArrowLeft" ||
                    event.key === "ArrowUp"
                  ) {
                    event.preventDefault();
                    const prev =
                      order[(index - 1 + order.length) % order.length];
                    if (prev) selectPillar(prev, true);
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    const first = order[0];
                    if (first) selectPillar(first, true);
                  } else if (event.key === "End") {
                    event.preventDefault();
                    const last = order[order.length - 1];
                    if (last) selectPillar(last, true);
                  }
                }}
              >
                <span className="pw-explore-saven__tab-letter" aria-hidden="true">
                  {tabLetter}
                </span>
                <span className="pw-explore-saven__tab-label">{pillar.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active.id}`}
          className={`pw-explore-saven__panel pw-explore-saven__panel--${visual.accent}`}
        >
          <div className="pw-explore-saven__visual">
            <Image
              src={visual.src}
              alt=""
              width={960}
              height={960}
              className="pw-explore-saven__letter-img"
              sizes="(max-width: 900px) 88vw, 42vw"
              priority={active.id === "support"}
              draggable={false}
            />
            <span className="pw-explore-saven__glow" aria-hidden="true" />
          </div>

          <div className="pw-explore-saven__copy">
            <p className="pw-explore-saven__pillar-title">
              <span className="pw-explore-saven__pillar-letter" aria-hidden="true">
                {letter}
              </span>
              <span className="pw-explore-saven__pillar-name">{active.label}</span>
            </p>
            <p className="pw-explore-saven__body">{active.meaning}</p>
            <Link href={href} className="pw-explore-saven__cta">
              {active.cta}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
