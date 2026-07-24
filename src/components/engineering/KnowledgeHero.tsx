import type { ReactNode } from "react";

import { DomainPositionMap } from "@/components/engineering/DomainPositionMap";
import type { Locale } from "@/config/locales";

export type KnowledgeHeroDomain =
  | "technology"
  | "systems"
  | "applications"
  | "trust"
  | "research";

type KnowledgeHeroProps = {
  locale: Locale;
  domain: KnowledgeHeroDomain;
  label: string;
  title: string;
  titleId: string;
  explanation: string;
  status?: string;
  visualization: ReactNode;
  className?: string;
};

/**
 * First-viewport knowledge hero: domain, title, explanation, status +
 * page-specific system visualization.
 */
export function KnowledgeHero({
  locale,
  domain,
  label,
  title,
  titleId,
  explanation,
  status,
  visualization,
  className,
}: KnowledgeHeroProps) {
  return (
    <header
      className={[
        "knowledge-hero",
        `knowledge-hero--${domain}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="page-shell__inner knowledge-hero__frame">
        <div className="knowledge-hero__copy">
          <DomainPositionMap current={domain} locale={locale} />
          <p className="knowledge-hero__domain">
            {domain === "technology"
              ? "Technology"
              : domain === "systems"
                ? "Systems"
                : domain === "applications"
                  ? "Applications"
                  : domain === "trust"
                    ? "Trust"
                    : "Research"}
          </p>
          <p className="knowledge-hero__label">{label}</p>
          <h1 id={titleId} className="knowledge-hero__title">
            {title}
          </h1>
          <p className="knowledge-hero__explanation">{explanation}</p>
          {status ? (
            <p className="knowledge-hero__status">
              <span className="knowledge-hero__status-mark" aria-hidden="true" />
              <span className="knowledge-hero__status-label">Current scope</span>
              <span className="knowledge-hero__status-text">{status}</span>
            </p>
          ) : null}
        </div>
        <div className="knowledge-hero__visual">{visualization}</div>
      </div>
    </header>
  );
}
