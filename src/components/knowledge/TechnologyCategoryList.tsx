import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import {
  getEntitiesByDomain,
  getEntityRelationsSummary,
} from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";

const CATEGORY_RELATION_GROUPS: readonly EntityRelationGroupId[] = [
  "related-systems",
  "related-research",
  "related-applications",
  "related-technologies",
];

type TechnologyCategoryListProps = {
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

/**
 * Registry-driven Technology category blocks.
 * Uses getEntitiesByDomain("technology") — no hard-coded entity list.
 * Empty relation groups and empty Related topics are not rendered.
 */
export function TechnologyCategoryList({
  locale,
  heading = "Technology Categories",
}: TechnologyCategoryListProps) {
  const entities = getEntitiesByDomain("technology");
  const headingId = "technology-categories-heading";

  return (
    <section
      id="technology-categories"
      className="eng-block technology-category-list"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      <ul className="technology-category-list__list">
        {entities.map((entity) => {
          const titleId = `technology-category-${entity.id}-title`;
          const showRelations = hasVisibleRelationGroups(entity.id);
          const showFutureTopics = entity.futureTopics.length > 0;

          return (
            <li key={entity.id} className="technology-category-list__item">
              <article
                id={entity.slug}
                className="technology-category"
                aria-labelledby={titleId}
              >
                <header className="technology-category__header">
                  <h3 id={titleId} className="technology-category__title">
                    {entity.title}
                  </h3>
                  <p className="technology-category__status">
                    <span className="eng-type-label">Status</span>{" "}
                    <span className="eng-type-metadata">
                      {getEntityStatusLabel(entity.status)}
                    </span>
                  </p>
                </header>
                <p className="technology-category__summary">{entity.summary}</p>

                {showRelations ? (
                  <EntityRelationshipIndex
                    locale={locale}
                    entityId={entity.id}
                    heading={null}
                    groupHeadingLevel={4}
                    includeGroups={CATEGORY_RELATION_GROUPS}
                    className="technology-category__relations"
                  />
                ) : null}

                {showFutureTopics ? (
                  <div className="technology-category__future">
                    <h4 className="eng-type-h3">Related topics</h4>
                    <ul className="eng-future technology-category__future-list">
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
