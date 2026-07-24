import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export type DomainPosition = "technology" | "systems" | "applications";

type DomainPositionMapProps = {
  current: DomainPosition | "research";
  locale?: Locale;
  className?: string;
};

const STEPS: readonly {
  id: DomainPosition;
  label: string;
  href: string;
}[] = [
  { id: "technology", label: "Technology", href: "/technology/" },
  { id: "systems", label: "Systems", href: "/systems/" },
  { id: "applications", label: "Applications", href: "/applications/" },
];

/**
 * Compact domain rail: Technology → Systems → Applications.
 * Shows the reader’s current architecture position.
 */
export function DomainPositionMap({
  current,
  locale = "en",
  className,
}: DomainPositionMapProps) {
  const active: DomainPosition | null =
    current === "research" ? null : current;

  return (
    <nav
      className={["domain-position-map", className].filter(Boolean).join(" ")}
      aria-label="Architecture domain position"
    >
      <ol className="domain-position-map__list">
        {STEPS.map((step, index) => {
          const isCurrent = step.id === active;
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
                <span
                  className="domain-position-map__label"
                  aria-current="true"
                >
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
