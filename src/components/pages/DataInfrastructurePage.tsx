import {
  ArchitectureStack,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringCardGrid,
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
  DATA_INFRASTRUCTURE_ENTITY_ID,
  type DataInfrastructurePageContent,
} from "@/content/pages/en/data-infrastructure";

type DataInfrastructurePageProps = {
  locale: Locale;
  content: DataInfrastructurePageContent;
};

/**
 * Data Infrastructure knowledge page — Content Wave 1.2.
 * New page composition only; does not modify existing page templates.
 */
export function DataInfrastructurePage({
  locale,
  content,
}: DataInfrastructurePageProps) {
  const titleId = "page-title";
  const entity = getEntityById(DATA_INFRASTRUCTURE_ENTITY_ID);

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${DATA_INFRASTRUCTURE_ENTITY_ID}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article
      className="page page--data-infrastructure"
      aria-labelledby={titleId}
    >
      <div className="page-shell__inner page-data-infrastructure-metadata">
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
        currentHref="/technology/data-infrastructure/"
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div className="engineering-hero">
            <div className="engineering-hero__primary">
              <DefinitionPanel
                term="Data Infrastructure"
                definition="How authorized information is organized and made available to other systems."
              />
            </div>
            <div className="engineering-hero__diagram">
              <ArchitectureStack
                id="data-infrastructure-position"
                title="Where this fits"
                description="Data Infrastructure supports Human Data Model and Knowledge Engine pathways."
                identity="blueprint"
                nodes={[
                  { id: "human-data", label: "Human Data" },
                  { id: "hdm", label: "Human Data Model" },
                  {
                    id: "data-infra",
                    label: "Data Infrastructure",
                    current: true,
                  },
                  { id: "ke", label: "Knowledge Engine" },
                ]}
              />
            </div>
          </div>

          <EngineeringCardGrid
            locale={locale}
            heading="Connected foundations"
            identity="blueprint"
            items={[
              {
                id: "human-data",
                title: "Human Data",
                summary: "Information about a person from different sources.",
                href: "/technology/human-data/",
              },
              {
                id: "hdm",
                title: "Human Data Model",
                summary:
                  "Structured representation that organizes Human Data and preserves context.",
                href: "/technology/human-data-model/",
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
                id: "hdm",
                label: "Human Data Model",
                href: "/technology/human-data-model/",
                relation: "supported by",
              },
              {
                id: "data-infra",
                label: "Data Infrastructure",
                href: "/technology/data-infrastructure/",
                relation: "feeds",
              },
              {
                id: "ke",
                label: "Knowledge Engine",
                href: "/systems/knowledge-engine/",
              },
            ]}
          />

          <div id="executive-summary">
            <EngineeringSummary
              heading={content.executiveSummaryHeading}
              paragraphs={content.executiveSummary}
            />
          </div>

          <section
            id="purpose"
            className="eng-block"
            aria-labelledby="data-infra-purpose-heading"
          >
            <h2 id="data-infra-purpose-heading" className="eng-block__heading">
              {content.purposeHeading}
            </h2>
            {content.purpose.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="what-data-infrastructure-means"
            className="eng-block"
            aria-labelledby="data-infra-meaning-heading"
          >
            <h2 id="data-infra-meaning-heading" className="eng-block__heading">
              {content.meaningHeading}
            </h2>
            {content.meaning.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="core-responsibilities"
            className="eng-block"
            aria-labelledby="data-infra-responsibilities-heading"
          >
            <h2
              id="data-infra-responsibilities-heading"
              className="eng-block__heading"
            >
              {content.responsibilitiesHeading}
            </h2>
            <p className="eng-block__body">{content.responsibilitiesIntro}</p>
            <ul className="eng-principles">
              {content.responsibilities.map((item) => (
                <li key={item.id} className="eng-principles__item">
                  <h3 className="eng-principles__title">{item.title}</h3>
                  <p className="eng-principles__text">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="information-organization"
            className="eng-block"
            aria-labelledby="data-infra-organization-heading"
          >
            <h2
              id="data-infra-organization-heading"
              className="eng-block__heading"
            >
              {content.organizationHeading}
            </h2>
            {content.organization.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="relationship-to-human-data"
            className="eng-block"
            aria-labelledby="data-infra-human-data-heading"
          >
            <h2
              id="data-infra-human-data-heading"
              className="eng-block__heading"
            >
              {content.humanDataHeading}
            </h2>
            {content.humanData.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="relationship-to-human-data-model"
            className="eng-block"
            aria-labelledby="data-infra-hdm-heading"
          >
            <h2 id="data-infra-hdm-heading" className="eng-block__heading">
              {content.humanDataModelHeading}
            </h2>
            {content.humanDataModel.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="relationship-to-knowledge-engine"
            className="eng-block"
            aria-labelledby="data-infra-knowledge-engine-heading"
          >
            <h2
              id="data-infra-knowledge-engine-heading"
              className="eng-block__heading"
            >
              {content.knowledgeEngineHeading}
            </h2>
            {content.knowledgeEngine.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
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
            aria-labelledby="data-infra-scope-heading"
          >
            <h2 id="data-infra-scope-heading" className="eng-block__heading">
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
              entityId={DATA_INFRASTRUCTURE_ENTITY_ID}
              heading={content.relatedSystemsHeading}
              includeGroups={["related-systems"]}
            />
          </div>

          <div id="related-research">
            <EntityRelationshipIndex
              locale={locale}
              entityId={DATA_INFRASTRUCTURE_ENTITY_ID}
              heading={content.relatedResearchHeading}
              includeGroups={["related-research"]}
            />
          </div>

          <div id="related-applications">
            <EntityRelationshipIndex
              locale={locale}
              entityId={DATA_INFRASTRUCTURE_ENTITY_ID}
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
