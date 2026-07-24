import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type RelationshipChainStep = {
  id: string;
  label: string;
  href?: string;
  /** Relation verb shown above the connector to the next step. */
  relation?: string;
};

type RelationshipChainProps = {
  locale: Locale;
  heading: string;
  description?: string;
  steps: readonly RelationshipChainStep[];
};

/**
 * Architecture relationship chain — verbs between nodes, not a link list.
 */
export function RelationshipChain({
  locale,
  heading,
  description,
  steps,
}: RelationshipChainProps) {
  const headingId = `relationship-chain-${heading.toLowerCase().replace(/\s+/g, "-")}`;

  if (steps.length === 0) {
    return null;
  }

  return (
    <section
      className="relationship-chain"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="relationship-chain__heading">
        {heading}
      </h2>
      {description ? (
        <p className="relationship-chain__description">{description}</p>
      ) : null}
      <ol className="relationship-chain__list">
        {steps.map((step, index) => {
          const next = steps[index + 1];
          return (
            <li key={step.id} className="relationship-chain__step">
              <div className="relationship-chain__node">
                {step.href ? (
                  <Link
                    href={localizePath(locale, step.href)}
                    className="relationship-chain__link"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <span className="relationship-chain__label">{step.label}</span>
                )}
              </div>
              {next && step.relation ? (
                <div className="relationship-chain__bridge" aria-hidden="true">
                  <span className="relationship-chain__verb">{step.relation}</span>
                  <span className="relationship-chain__arrow">↓</span>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
