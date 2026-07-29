import Link from "next/link";

import { ExploreSavenShowcase } from "@/components/home/ExploreSavenShowcase";
import {
  HOME_CLARITY_V1_ENABLED,
  HOME_CLARITY_V2_ENABLED,
} from "@/config/home-clarity";
import type { Locale } from "@/config/locales";
import type {
  ClosingExplorePillar,
  HomeClarityContent,
} from "@/content/home/physical-world/types";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

type HomeClarityPackProps = {
  locale: Locale;
  clarity: HomeClarityContent;
  pillars: readonly ClosingExplorePillar[];
  /** post-hero: definition + chain + compact explore + audience; post-living: boundaries. */
  slot: "post-hero" | "post-living";
};

/**
 * Reversible homepage clarity blocks (D-0219 / denser D-0220 / visual D-0221).
 * Explore SAVEN uses cinematic letter panels (D-0225 / D-0226).
 * Gated by `HOME_CLARITY_V1_ENABLED` — returns null when the flag is off.
 * V2 adds navy/gold/off-white card grammar while keeping support copy visible.
 */
export function HomeClarityPack({
  locale,
  clarity,
  pillars,
  slot,
}: HomeClarityPackProps) {
  if (!HOME_CLARITY_V1_ENABLED) return null;

  const dense = HOME_CLARITY_V2_ENABLED;
  const earlyClass = [
    "pw-clarity",
    "pw-clarity--early",
    dense ? "pw-clarity--v2" : "",
    "pw-clarity--visual",
  ]
    .filter(Boolean)
    .join(" ");

  if (slot === "post-living") {
    return (
      <section
        className={`pw-clarity pw-clarity--not pw-clarity--visual${dense ? " pw-clarity--v2" : ""}`}
        aria-labelledby="pw-clarity-not-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <h2 id="pw-clarity-not-title" className="pw-clarity__title">
            {clarity.not.heading}
          </h2>
          <ul className="pw-clarity__not-list">
            {clarity.not.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <div className={earlyClass}>
      <section
        className="pw-clarity__block pw-clarity__definition"
        aria-labelledby="pw-clarity-def-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <div className="pw-clarity__panel pw-clarity__panel--definition">
            <p className="pw-clarity__eyebrow" aria-hidden="true">
              SAVEN
            </p>
            <h2 id="pw-clarity-def-title" className="pw-clarity__title">
              {clarity.definition.heading}
            </h2>
            <p className="pw-clarity__body">{clarity.definition.body}</p>
          </div>
        </div>
      </section>

      <section
        className="pw-clarity__block pw-clarity__chain"
        aria-labelledby="pw-clarity-chain-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <h2 id="pw-clarity-chain-title" className="pw-clarity__title">
            {clarity.chain.heading}
          </h2>
          <ol className="pw-clarity__chain-list" aria-label={clarity.chain.ariaLabel}>
            {clarity.chain.steps.map((step, index) => (
              <li key={step.href} className="pw-clarity__chain-item">
                {index > 0 ? (
                  <span className="pw-clarity__chain-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <Link
                  href={localizePath(locale, step.href as PublishedRoute)}
                  className="pw-clarity__chain-link"
                >
                  <span className="pw-clarity__chain-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pw-clarity__chain-label">{step.label}</span>
                  <span className="pw-clarity__chain-cta">
                    {step.cta}
                    <span aria-hidden="true"> →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ExploreSavenShowcase
        locale={locale}
        heading={clarity.exploreStrip.heading}
        support={clarity.exploreStrip.support}
        pillars={pillars}
      />

      <section
        className="pw-clarity__block pw-clarity__audience"
        aria-labelledby="pw-clarity-audience-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <h2 id="pw-clarity-audience-title" className="pw-clarity__title">
            {clarity.audience.heading}
          </h2>
          <p className="pw-clarity__support">{clarity.audience.support}</p>
          <ul className="pw-clarity__paths">
            {clarity.audience.paths.map((path) => (
              <li key={path.id} className="pw-clarity__path">
                <p className="pw-clarity__path-label">{path.label}</p>
                <p className="pw-clarity__path-desc">{path.description}</p>
                <ul className="pw-clarity__path-links">
                  {path.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizePath(locale, link.href as PublishedRoute)}
                        className="pw-clarity__path-link"
                      >
                        {link.label}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
