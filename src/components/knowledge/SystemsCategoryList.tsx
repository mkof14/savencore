import Link from "next/link";

import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import {
  getEntityById,
  getEntityRelationsSummary,
} from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";
import { localizePath } from "@/navigation/locale-path";
import { systemsNavChildren } from "@/navigation/site-navigation";

const CATEGORY_RELATION_GROUPS: readonly EntityRelationGroupId[] = [
  "depends-on",
  "related-systems",
  "related-technologies",
  "related-applications",
];

/** Published Systems leaves only — excludes Human Data Model (Technology route). */
const PUBLISHED_SYSTEM_ENTITY_IDS = [
  "knowledge-engine",
  "ai-decision-support",
  "safety-layer",
  "communication-layer",
  "clinical-interfaces",
  "robotics-layer",
  "drone-systems",
] as const;

type SystemsCategoryListProps = {
  locale: Locale;
  heading?: string;
};

function hasVisibleRelationGroups(entityId: string): boolean {
  const summary = getEntityRelationsSummary(entityId);
  if (!summary) {
    return false;
  }
  return summary.groups.some((group) =>
    CATEGORY_RELATION_GROUPS.includes(group.id),
  );
}

function hrefForEntity(entityId: string): string | undefined {
  return systemsNavChildren.find((item) => item.id === `systems-${entityId}`)
    ?.href;
}

/**
 * Registry-driven Systems category blocks for published system pages only.
 * Empty relation groups and empty Related topics are not rendered.
 */
export function SystemsCategoryList({
  locale,
  heading = "Published Systems",
}: SystemsCategoryListProps) {
  const headingId = "systems-categories-heading";

  return (
    <section
      id="systems-categories"
      className="eng-block systems-category-list"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      <ul className="systems-category-list__list">
        {PUBLISHED_SYSTEM_ENTITY_IDS.map((entityId) => {
          const entity = getEntityById(entityId);
          const href = hrefForEntity(entityId);
          if (!entity || !href) {
            return null;
          }

          const titleId = `systems-category-${entity.id}-title`;
          const showRelations = hasVisibleRelationGroups(entity.id);
          const showFutureTopics = entity.futureTopics.length > 0;

          return (
            <li key={entity.id} className="systems-category-list__item">
              <article
                id={entity.slug}
                className="systems-category"
                aria-labelledby={titleId}
              >
                <header className="systems-category__header">
                  <h3 id={titleId} className="systems-category__title">
                    <Link
                      href={localizePath(locale, href)}
                      className="systems-category__link"
                    >
                      {entity.title}
                    </Link>
                  </h3>
                  <p className="systems-category__status">
                    <span className="eng-type-label">Status</span>{" "}
                    <span className="eng-type-metadata">
                      {getEntityStatusLabel(entity.status)}
                    </span>
                  </p>
                </header>
                <p className="systems-category__summary">{entity.summary}</p>

                {showRelations ? (
                  <EntityRelationshipIndex
                    locale={locale}
                    entityId={entity.id}
                    heading={null}
                    groupHeadingLevel={4}
                    includeGroups={CATEGORY_RELATION_GROUPS}
                    className="systems-category__relations"
                  />
                ) : null}

                {showFutureTopics ? (
                  <div className="systems-category__future">
                    <h4 className="eng-type-h3">Related topics</h4>
                    <ul className="eng-future systems-category__future-list">
                      {entity.futureTopics.map((topic) => (
                        <li key={topic} className="eng-future__item">
                          <p className="eng-future__note">{topic}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
