import {
  DocumentMetadata,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import { getEntityById } from "@/content/knowledge/entity-registry";
import type { TechnologyDisciplinePageContent } from "@/content/pages/en/technology-discipline-types";

const RELATIONSHIP_GROUPS: readonly EntityRelationGroupId[] = [
  "depends-on",
  "used-by",
  "related-technologies",
  "trust-and-safety",
];

type TechnologyDisciplinePageProps = {
  locale: Locale;
  content: TechnologyDisciplinePageContent;
};

/**
 * Shared Technology discipline leaf-page template.
 * Content Sprint — remaining Technology domain pages.
 */
export function TechnologyDisciplinePage({
  locale,
  content,
}: TechnologyDisciplinePageProps) {
  const titleId = "page-title";
  const entity = getEntityById(content.entityId);

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${content.entityId}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article
      className="page page--technology-discipline"
      aria-labelledby={titleId}
    >
      <div className="page-shell__inner page-technology-discipline-metadata">
        <DocumentMetadata metadata={content.metadata} />
      </div>

      <PageMasthead
        label={content.label}
        title={content.title}
        titleId={titleId}
        introduction={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
      />

      <div className="page-dev-note">
        <div className="page-shell__inner">
          <p className="page-dev-note__text">{content.developmentNote}</p>
        </div>
      </div>

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div id="executive-summary">
            <EngineeringSummary
              heading={content.executiveSummaryHeading}
              paragraphs={content.executiveSummary}
            />
          </div>

          <section
            id="why-it-matters"
            className="eng-block"
            aria-labelledby="tech-discipline-why-heading"
          >
            <h2
              id="tech-discipline-why-heading"
              className="eng-block__heading"
            >
              {content.whyItMattersHeading}
            </h2>
            {content.whyItMatters.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="purpose"
            className="eng-block"
            aria-labelledby="tech-discipline-purpose-heading"
          >
            <h2
              id="tech-discipline-purpose-heading"
              className="eng-block__heading"
            >
              {content.purposeHeading}
            </h2>
            {content.purpose.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="core-concepts"
            className="eng-block"
            aria-labelledby="tech-discipline-concepts-heading"
          >
            <h2
              id="tech-discipline-concepts-heading"
              className="eng-block__heading"
            >
              {content.coreConceptsHeading}
            </h2>
            <p className="eng-block__body">{content.coreConceptsIntro}</p>
            <ul className="eng-principles">
              {content.coreConcepts.map((concept) => (
                <li key={concept.id} className="eng-principles__item">
                  <h3 className="eng-principles__title">{concept.title}</h3>
                  <p className="eng-principles__text">{concept.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="relationships"
            className="eng-block"
            aria-labelledby="tech-discipline-relationships-heading"
          >
            <h2
              id="tech-discipline-relationships-heading"
              className="eng-block__heading"
            >
              {content.relationshipsHeading}
            </h2>
            <p className="eng-block__body">{content.relationshipsIntro}</p>
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={null}
              groupHeadingLevel={3}
              includeGroups={RELATIONSHIP_GROUPS}
              className="tech-discipline-relationships-index"
            />
          </section>

          <div id="engineering-principles">
            <KeyPrinciples
              heading={content.principlesHeading}
              principles={content.principles}
            />
          </div>

          <section
            id="current-development-scope"
            className="eng-block"
            aria-labelledby="tech-discipline-scope-heading"
          >
            <h2
              id="tech-discipline-scope-heading"
              className="eng-block__heading"
            >
              {content.scopeHeading}
            </h2>
            {content.scope.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          {futureItems.length > 0 ? (
            <div id="future-topics">
              <FutureExpansionBlock
                heading={content.futureHeading}
                introduction={content.futureIntro}
                items={futureItems}
              />
            </div>
          ) : null}

          <div id="related-systems">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedSystemsHeading}
              includeGroups={["related-systems"]}
            />
          </div>

          <div id="related-research">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedResearchHeading}
              includeGroups={["related-research"]}
            />
          </div>

          <div id="related-applications">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedApplicationsHeading}
              includeGroups={["related-applications"]}
            />
          </div>

          <div id="reference-links">
            <ReferenceLinks
              locale={locale}
              heading={content.referenceHeading}
              links={content.referenceLinks}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
