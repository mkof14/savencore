import Link from "next/link";

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
 * Reversible homepage clarity blocks (D-0219 / denser D-0220 via HOME_CLARITY_V2).
 * Gated by `HOME_CLARITY_V1_ENABLED` — returns null when the flag is off.
 */
export function HomeClarityPack({
  locale,
  clarity,
  pillars,
  slot,
}: HomeClarityPackProps) {
  if (!HOME_CLARITY_V1_ENABLED) return null;

  const dense = HOME_CLARITY_V2_ENABLED;
  const earlyClass = dense
    ? "pw-clarity pw-clarity--early pw-clarity--v2"
    : "pw-clarity pw-clarity--early";

  if (slot === "post-living") {
    return (
      <section
        className={`pw-clarity pw-clarity--not${dense ? " pw-clarity--v2" : ""}`}
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
          <h2 id="pw-clarity-def-title" className="pw-clarity__title">
            {clarity.definition.heading}
          </h2>
          <p className="pw-clarity__body">{clarity.definition.body}</p>
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

      {/* V2: keep a single dense pillar row; full Explore remains in the closing band. */}
      <section
        className={`pw-clarity__block pw-clarity__explore${dense ? " pw-clarity__explore--dense" : ""}`}
        aria-labelledby="pw-clarity-explore-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <h2 id="pw-clarity-explore-title" className="pw-clarity__title">
            {clarity.exploreStrip.heading}
          </h2>
          {!dense ? (
            <p className="pw-clarity__support">{clarity.exploreStrip.support}</p>
          ) : null}
          <ul className="pw-clarity__pillars" aria-label={clarity.exploreStrip.heading}>
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <Link
                  href={localizePath(locale, pillar.href as PublishedRoute)}
                  className="pw-clarity__pillar"
                  title={pillar.meaning}
                >
                  <span className="pw-clarity__pillar-label">{pillar.label}</span>
                  {!dense ? (
                    <span className="pw-clarity__pillar-cta">
                      {pillar.cta}
                      <span aria-hidden="true"> →</span>
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="pw-clarity__block pw-clarity__audience"
        aria-labelledby="pw-clarity-audience-title"
      >
        <div className="pw-home__inner pw-clarity__inner">
          <h2 id="pw-clarity-audience-title" className="pw-clarity__title">
            {clarity.audience.heading}
          </h2>
          {!dense ? (
            <p className="pw-clarity__support">{clarity.audience.support}</p>
          ) : null}
          <ul className="pw-clarity__paths">
            {clarity.audience.paths.map((path) => (
              <li key={path.id} className="pw-clarity__path">
                <p className="pw-clarity__path-label">{path.label}</p>
                {!dense ? (
                  <p className="pw-clarity__path-desc">{path.description}</p>
                ) : null}
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
