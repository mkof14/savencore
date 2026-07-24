import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
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

/**
 * Registry-driven Technology category blocks.
 * Uses getEntitiesByDomain("technology") — no hard-coded entity list.
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

                <EntityRelationshipIndex
                  locale={locale}
                  entityId={entity.id}
                  heading={null}
                  groupHeadingLevel={4}
                  includeGroups={CATEGORY_RELATION_GROUPS}
                  className="technology-category__relations"
                />

                {entity.futureTopics.length > 0 ? (
                  <div className="technology-category__future">
                    <h4 className="eng-type-h3">Future Topics</h4>
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
