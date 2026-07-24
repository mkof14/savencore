import {
  ArchitectureStack,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringCardGrid,
  EngineeringDiagram,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
  RelationshipChain,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { PageContextNav } from "@/components/pages/PageContextNav";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import { getEntityById } from "@/content/knowledge/entity-registry";
import {
  HUMAN_DATA_ENTITY_ID,
  type HumanDataPageContent,
} from "@/content/pages/en/human-data";

type HumanDataPageProps = {
  locale: Locale;
  content: HumanDataPageContent;
};

/**
 * Human Data knowledge page — Content Wave 1.1.
 * New page composition only; does not modify existing page templates.
 */
export function HumanDataPage({ locale, content }: HumanDataPageProps) {
  const titleId = "page-title";
  const entity = getEntityById(HUMAN_DATA_ENTITY_ID);

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${HUMAN_DATA_ENTITY_ID}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article className="page page--human-data" aria-labelledby={titleId}>
      <div className="page-shell__inner page-human-data-metadata">
        <DocumentMetadata metadata={content.metadata} />
      </div>

      <PageMasthead
        domain="technology"
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

      <PageContextNav
        locale={locale}
        domain="technology"
        currentHref="/technology/human-data/"
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div className="engineering-hero">
            <div className="engineering-hero__primary">
              <DefinitionPanel
                term="Human Data"
                definition="Information about a person from different sources."
              />
            </div>
            <div className="engineering-hero__diagram">
              <ArchitectureStack
                id="human-data-position"
                title="Where this fits"
                description="Human Data feeds the Human Data Model, then Knowledge Engine and AI Decision Support."
                identity="blueprint"
                nodes={[
                  { id: "human-data", label: "Human Data", current: true },
                  { id: "hdm", label: "Human Data Model" },
                  { id: "ke", label: "Knowledge Engine" },
                  { id: "ads", label: "AI Decision Support" },
                ]}
              />
            </div>
          </div>

          <div id="executive-summary">
            <EngineeringSummary
              heading={content.executiveSummaryHeading}
              paragraphs={content.executiveSummary}
            />
          </div>

          <EngineeringCardGrid
            locale={locale}
            heading="Continue in this path"
            identity="blueprint"
            items={[
              {
                id: "hdm",
                title: "Human Data Model",
                summary:
                  "Structured representation that organizes Human Data and preserves context and relationships.",
                href: "/technology/human-data-model/",
              },
              {
                id: "data-infra",
                title: "Data Infrastructure",
                summary:
                  "How authorized information is organized and made available to other systems.",
                href: "/technology/data-infrastructure/",
              },
              {
                id: "ke",
                title: "Knowledge Engine",
                summary:
                  "Organizes knowledge and preserves context for other components.",
                href: "/systems/knowledge-engine/",
              },
            ]}
          />

          <RelationshipChain
            locale={locale}
            heading="Architecture relationships"
            steps={[
              {
                id: "human-data",
                label: "Human Data",
                href: "/technology/human-data/",
                relation: "organized by",
              },
              {
                id: "hdm",
                label: "Human Data Model",
                href: "/technology/human-data-model/",
                relation: "feeds",
              },
              {
                id: "ke",
                label: "Knowledge Engine",
                href: "/systems/knowledge-engine/",
              },
            ]}
          />

          <section
            id="purpose"
            className="eng-block"
            aria-labelledby="human-data-purpose-heading"
          >
            <h2 id="human-data-purpose-heading" className="eng-block__heading">
              {content.purposeHeading}
            </h2>
            {content.purpose.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="what-human-data-means"
            className="eng-block"
            aria-labelledby="human-data-meaning-heading"
          >
            <h2 id="human-data-meaning-heading" className="eng-block__heading">
              {content.meaningHeading}
            </h2>
            {content.meaning.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="human-data-categories"
            className="eng-block"
            aria-labelledby="human-data-categories-heading"
          >
            <h2
              id="human-data-categories-heading"
              className="eng-block__heading"
            >
              {content.categoriesHeading}
            </h2>
            <p className="eng-block__body">{content.categoriesIntro}</p>
            <ul className="hdm-categories">
              {content.categories.map((category) => (
                <li key={category.id} className="hdm-categories__item">
                  <h3 className="hdm-categories__title">{category.title}</h3>
                  <p className="hdm-categories__role">{category.purpose}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="relationship-to-human-data-model"
            className="eng-block"
            aria-labelledby="human-data-model-relation-heading"
          >
            <h2
              id="human-data-model-relation-heading"
              className="eng-block__heading"
            >
              {content.modelRelationHeading}
            </h2>
            <p className="eng-block__body">{content.modelRelationIntro}</p>
            <EngineeringDiagram diagram={content.modelRelationDiagram} />
            {content.modelRelation.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="relationship-to-other-technologies"
            className="eng-block"
            aria-labelledby="human-data-tech-relations-heading"
          >
            <h2
              id="human-data-tech-relations-heading"
              className="eng-block__heading"
            >
              {content.technologyRelationsHeading}
            </h2>
            <p className="eng-block__body">
              {content.technologyRelationsIntro}
            </p>
            <ul className="eng-principles">
              {content.technologyRelations.map((item) => (
                <li key={item.id} className="eng-principles__item">
                  <h3 className="eng-principles__title">{item.title}</h3>
                  <p className="eng-principles__text">{item.text}</p>
                </li>
              ))}
            </ul>
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
            aria-labelledby="human-data-scope-heading"
          >
            <h2 id="human-data-scope-heading" className="eng-block__heading">
              {content.scopeHeading}
            </h2>
            {content.scope.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <div id="future-topics">
            <FutureExpansionBlock
              heading={content.futureHeading}
              introduction={content.futureIntro}
              items={futureItems}
            />
          </div>

          <div id="related-systems">
            <EntityRelationshipIndex
              locale={locale}
              entityId={HUMAN_DATA_ENTITY_ID}
              heading={content.relatedSystemsHeading}
              includeGroups={["related-systems"]}
            />
          </div>

          <div id="related-research">
            <EntityRelationshipIndex
              locale={locale}
              entityId={HUMAN_DATA_ENTITY_ID}
              heading={content.relatedResearchHeading}
              includeGroups={["related-research"]}
            />
          </div>

          <div id="related-applications">
            <EntityRelationshipIndex
              locale={locale}
              entityId={HUMAN_DATA_ENTITY_ID}
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
