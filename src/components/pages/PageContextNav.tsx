import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getDomainSequenceContext,
  type KnowledgeDomainId,
} from "@/navigation/domain-sequences";
import { localizePath } from "@/navigation/locale-path";

type PageContextNavProps = {
  locale: Locale;
  domain: KnowledgeDomainId;
  currentHref: string;
};

/**
 * Domain location + previous / next / related pages.
 * Uses the same published nav children as the header.
 */
export function PageContextNav({
  locale,
  domain,
  currentHref,
}: PageContextNavProps) {
  const context = getDomainSequenceContext(domain, currentHref);
  if (!context) {
    return null;
  }

  const related = context.siblings.slice(0, 4);

  return (
    <nav className="page-context-nav" aria-label="Page location">
      <div className="page-shell__inner page-context-nav__inner">
        <p className="page-context-nav__location">
          <span className="page-context-nav__eyebrow">Location</span>
          <span className="page-context-nav__trail">
            <Link
              href={localizePath(locale, context.domainHref)}
              className="page-context-nav__trail-link"
            >
              {context.domainLabel}
            </Link>
            <span className="page-context-nav__sep" aria-hidden="true">
              /
            </span>
            <span className="page-context-nav__current" aria-current="page">
              {context.current.label}
            </span>
          </span>
        </p>

        <ul className="page-context-nav__steps">
          <li className="page-context-nav__step">
            <span className="page-context-nav__step-label">Previous</span>
            {context.previous ? (
              <Link
                href={localizePath(locale, context.previous.href)}
                className="page-context-nav__step-link"
              >
                {context.previous.label}
              </Link>
            ) : (
              <span className="page-context-nav__step-empty">Start of domain</span>
            )}
          </li>
          <li className="page-context-nav__step">
            <span className="page-context-nav__step-label">Next</span>
            {context.next ? (
              <Link
                href={localizePath(locale, context.next.href)}
                className="page-context-nav__step-link"
              >
                {context.next.label}
              </Link>
            ) : (
              <span className="page-context-nav__step-empty">End of domain</span>
            )}
          </li>
        </ul>

        {related.length > 0 ? (
          <div className="page-context-nav__related">
            <p className="page-context-nav__step-label">Related pages</p>
            <ul className="page-context-nav__related-list">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={localizePath(locale, item.href)}
                    className="page-context-nav__related-link"
                  >
                    {item.label}
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
