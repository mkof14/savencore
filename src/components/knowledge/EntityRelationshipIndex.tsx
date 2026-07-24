import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getEntityRelationsSummary } from "@/content/knowledge/entity-registry";
import { localizePath } from "@/navigation/locale-path";

type EntityRelationshipIndexProps = {
  locale: Locale;
  entityId: string;
  heading?: string;
};

/** Localize a path while preserving an optional hash fragment. */
function localizeHref(locale: Locale, href: string): string {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return localizePath(locale, href);
  }
  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);
  return `${localizePath(locale, path)}${hash}`;
}

/**
 * Reusable relationship presentation adapter for future knowledge pages.
 * Uses Engineering Design System block styles. Does not render empty groups.
 */
export function EntityRelationshipIndex({
  locale,
  entityId,
  heading = "Relationships",
}: EntityRelationshipIndexProps) {
  const summary = getEntityRelationsSummary(entityId);

  if (!summary || summary.groups.length === 0) {
    return null;
  }

  const headingId = `entity-relations-${entityId}`;

  return (
    <section
      className="eng-block entity-relationship-index"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      <div className="entity-relationship-index__groups">
        {summary.groups.map((group) => {
          const groupHeadingId = `${headingId}-${group.id}`;
          return (
            <section
              key={group.id}
              className="entity-relationship-index__group"
              aria-labelledby={groupHeadingId}
            >
              <h3 id={groupHeadingId} className="eng-type-h3">
                {group.heading}
              </h3>
              <ul className="eng-link-list">
                {group.items.map((item) => (
                  <li key={`${group.id}-${item.id}`}>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="eng-text-link"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
