import {
  ArchitectureOverview,
  DocumentMetadata,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
  RelatedTopicsBlock,
} from "@/components/engineering";
import { TechnologyCategoryList } from "@/components/knowledge/TechnologyCategoryList";
import { TechnologyRelationshipMatrix } from "@/components/knowledge/TechnologyRelationshipMatrix";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import { getEntitiesByDomain } from "@/content/knowledge/entity-registry";
import type { TechnologyPageContent } from "@/content/pages/en/technology";

type TechnologyPageProps = {
  locale: Locale;
  content: TechnologyPageContent;
};

/**
 * Technology knowledge domain index — Phase 3.1 reference implementation.
 * Section order is fixed by the phase specification.
 */
export function TechnologyPage({ locale, content }: TechnologyPageProps) {
  const titleId = "page-title";

  const futureItems = getEntitiesByDomain("technology").flatMap((entity) =>
    entity.futureTopics.map((topic, index) => ({
      id: `${entity.id}-future-${index}`,
      label: entity.title,
      note: topic,
    })),
  );

  return (
    <article className="page page--technology" aria-labelledby={titleId}>
      <div className="page-shell__inner page-technology-metadata">
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
          <div id="technology-overview">
            <ArchitectureOverview
              heading={content.overviewHeading}
              paragraphs={content.overview}
            />
          </div>

          <TechnologyCategoryList
            locale={locale}
            heading={content.categoriesHeading}
          />

          <TechnologyRelationshipMatrix
            heading={content.relationshipsHeading}
            introduction={content.relationshipsIntro}
          />

          <div id="engineering-principles">
            <KeyPrinciples
              heading={content.principlesHeading}
              principles={content.principles}
            />
          </div>

          <section
            id="current-development-scope"
            className="eng-block"
            aria-labelledby="current-development-scope-heading"
          >
            <h2
              id="current-development-scope-heading"
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

          <div id="future-expansion">
            <FutureExpansionBlock
              heading={content.futureHeading}
              introduction={content.futureIntro}
              items={futureItems}
            />
          </div>

          <div id="related-domains">
            <RelatedTopicsBlock
              locale={locale}
              heading={content.relatedDomainsHeading}
              links={content.relatedDomainLinks}
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
