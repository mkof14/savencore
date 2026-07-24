import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type RelationshipFlowStep = {
  id: string;
  label: string;
  href?: string;
  /** Verb describing relation to the next step */
  relation?: string;
};

type RelationshipFlowProps = {
  locale: Locale;
  heading: string;
  description?: string;
  steps: readonly RelationshipFlowStep[];
  className?: string;
};

/**
 * Controlled signal / relationship flow with nodes and path verbs.
 */
export function RelationshipFlow({
  locale,
  heading,
  description,
  steps,
  className,
}: RelationshipFlowProps) {
  const headingId = `relationship-flow-${heading.toLowerCase().replace(/\s+/g, "-")}`;

  if (steps.length === 0) {
    return null;
  }

  return (
    <section
      className={["relationship-flow", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="relationship-flow__heading">
        {heading}
      </h2>
      {description ? (
        <p className="relationship-flow__description">{description}</p>
      ) : null}
      <ol className="relationship-flow__list">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.id} className="relationship-flow__step">
              <div className="relationship-flow__node">
                <span className="relationship-flow__dot" aria-hidden="true" />
                {step.href ? (
                  <Link
                    href={localizePath(locale, step.href)}
                    className="relationship-flow__link"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <span className="relationship-flow__label">{step.label}</span>
                )}
              </div>
              {!isLast ? (
                <div className="relationship-flow__bridge" aria-hidden="true">
                  <span className="relationship-flow__line" />
                  {step.relation ? (
                    <span className="relationship-flow__verb">
                      {step.relation}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
