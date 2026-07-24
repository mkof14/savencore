import Link from "next/link";

import { DomainPositionMap } from "@/components/engineering/DomainPositionMap";
import type { Locale } from "@/config/locales";
import {
  getDomainSequenceContext,
  type KnowledgeDomainId,
} from "@/navigation/domain-sequences";
import { localizePath } from "@/navigation/locale-path";

type KnowledgePageNavigationProps = {
  locale: Locale;
  domain: KnowledgeDomainId;
  currentHref: string;
  className?: string;
};

/**
 * Compact knowledge navigation: domain rail, prev/next panels, relationship cards.
 * Intended for supporting positions — not before the first content viewport.
 */
export function KnowledgePageNavigation({
  locale,
  domain,
  currentHref,
  className,
}: KnowledgePageNavigationProps) {
  const context = getDomainSequenceContext(domain, currentHref);
  if (!context) {
    return null;
  }

  const related = context.siblings
    .filter((item) => item.href !== currentHref)
    .slice(0, 4);

  const domainPosition =
    domain === "technology" || domain === "systems" ? domain : "technology";

  return (
    <nav
      className={["knowledge-page-nav", className].filter(Boolean).join(" ")}
      aria-label="Knowledge page navigation"
    >
      <div className="page-shell__inner knowledge-page-nav__inner">
        <DomainPositionMap current={domainPosition} locale={locale} />

        <p className="knowledge-page-nav__location">
          <span className="knowledge-page-nav__eyebrow">Location</span>
          <span className="knowledge-page-nav__trail">
            <Link
              href={localizePath(locale, context.domainHref)}
              className="knowledge-page-nav__trail-link"
            >
              {context.domainLabel}
            </Link>
            <span className="knowledge-page-nav__sep" aria-hidden="true">
              /
            </span>
            <span className="knowledge-page-nav__current" aria-current="page">
              {context.current.label}
            </span>
          </span>
        </p>

        <ul className="knowledge-page-nav__pager">
          <li className="knowledge-page-nav__pager-item">
            <span className="knowledge-page-nav__pager-label">Previous</span>
            {context.previous ? (
              <Link
                href={localizePath(locale, context.previous.href)}
                className="knowledge-page-nav__pager-link"
              >
                <span className="knowledge-page-nav__pager-dir" aria-hidden="true">
                  ←
                </span>
                {context.previous.label}
              </Link>
            ) : (
              <span className="knowledge-page-nav__pager-empty">
                Start of domain
              </span>
            )}
          </li>
          <li className="knowledge-page-nav__pager-item knowledge-page-nav__pager-item--next">
            <span className="knowledge-page-nav__pager-label">Next</span>
            {context.next ? (
              <Link
                href={localizePath(locale, context.next.href)}
                className="knowledge-page-nav__pager-link"
              >
                {context.next.label}
                <span className="knowledge-page-nav__pager-dir" aria-hidden="true">
                  →
                </span>
              </Link>
            ) : (
              <span className="knowledge-page-nav__pager-empty">End of domain</span>
            )}
          </li>
        </ul>

        {related.length > 0 ? (
          <div className="knowledge-page-nav__related">
            <p className="knowledge-page-nav__eyebrow">Related knowledge</p>
            <ul className="knowledge-page-nav__related-list">
              {related.map((item) => (
                <li key={item.id} className="knowledge-page-nav__related-item">
                  <Link
                    href={localizePath(locale, item.href)}
                    className="knowledge-page-nav__related-card"
                  >
                    <span className="knowledge-page-nav__related-mark" aria-hidden="true" />
                    <span className="knowledge-page-nav__related-label">
                      {item.label}
                    </span>
                    <span className="knowledge-page-nav__related-action" aria-hidden="true">
                      Open →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
