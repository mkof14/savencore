import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type DomainPosition =
  | "technology"
  | "systems"
  | "applications"
  | "trust"
  | "research";

type DomainPositionMapProps = {
  current: DomainPosition;
  locale?: Locale;
  className?: string;
};

const ARCHITECTURE_STEPS = [
  { id: "technology" as const, label: "Technology", href: "/technology/" },
  { id: "systems" as const, label: "Systems", href: "/systems/" },
  { id: "applications" as const, label: "Applications", href: "/applications/" },
];

const TRUST_STEPS = [
  { id: "principles", label: "Principles", href: "/trust/" },
  { id: "controls", label: "Controls", href: "/trust/privacy/" },
  { id: "accountability", label: "Accountability", href: "/trust/limitations/" },
];

/**
 * Compact domain rail for architecture or trust position.
 */
export function DomainPositionMap({
  current,
  locale = "en",
  className,
}: DomainPositionMapProps) {
  if (current === "research") {
    return null;
  }

  if (current === "trust") {
    return (
      <nav
        className={["domain-position-map", className].filter(Boolean).join(" ")}
        aria-label="Trust position"
      >
        <ol className="domain-position-map__list">
          {TRUST_STEPS.map((step, index) => (
            <li key={step.id} className="domain-position-map__item">
              {index > 0 ? (
                <span className="domain-position-map__connector" aria-hidden="true">
                  →
                </span>
              ) : null}
              <Link
                href={localizePath(locale, step.href)}
                className="domain-position-map__link"
              >
                <span className="domain-position-map__dot" aria-hidden="true" />
                {step.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav
      className={["domain-position-map", className].filter(Boolean).join(" ")}
      aria-label="Architecture domain position"
    >
      <ol className="domain-position-map__list">
        {ARCHITECTURE_STEPS.map((step, index) => {
          const isCurrent = step.id === current;
          return (
            <li
              key={step.id}
              className={[
                "domain-position-map__item",
                isCurrent ? "is-current" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {index > 0 ? (
                <span className="domain-position-map__connector" aria-hidden="true">
                  →
                </span>
              ) : null}
              {isCurrent ? (
                <span className="domain-position-map__label" aria-current="true">
                  <span className="domain-position-map__dot" aria-hidden="true" />
                  {step.label}
                </span>
              ) : (
                <Link
                  href={localizePath(locale, step.href)}
                  className="domain-position-map__link"
                >
                  <span className="domain-position-map__dot" aria-hidden="true" />
                  {step.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
