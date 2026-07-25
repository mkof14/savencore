import {
  ConceptGrid,
  DefinitionPanel,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  RelationshipFlow,
  ScopePanel,
  SignalDiagram,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
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
      <KnowledgeHero
        locale={locale}
        domain="technology"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
        visualization={<SignalDiagram variant="data-infrastructure" />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"technology"}
        input={{
          knowledgeId: "data-infrastructure",
          href: "/technology/data-infrastructure/",
          title: content.label,
          domain: "Technology",
          entityId: "data-infrastructure",
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="technology"
        currentHref="/technology/data-infrastructure/"
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <DefinitionPanel
          term="Data Infrastructure"
          definition="How authorized information is organized and made available to other systems."
          coordinate="DI"
        />

        <ConceptGrid
          locale={locale}
          heading="Connected foundations"
          identity="blueprint"
          items={[
            {
              id: "human-data",
              title: "Human Data",
              responsibility: "Information about a person from different sources.",
              relationship: "Source information for infrastructure",
              href: "/technology/human-data/",
              role: "foundation",
              classification: "TEC-01",
            },
            {
              id: "hdm",
              title: "Human Data Model",
              responsibility:
                "Structured representation that organizes Human Data and preserves context.",
              relationship: "Schema supported by infrastructure",
              href: "/technology/human-data-model/",
              role: "foundation",
              classification: "TEC-02",
            },
            {
              id: "ke",
              title: "Knowledge Engine",
              responsibility:
                "Organizes knowledge and preserves context for other components.",
              relationship: "Consumes available authorized information",
              href: "/systems/knowledge-engine/",
              role: "system",
              classification: "SYS-01",
            },
          ]}
        />

        <RelationshipFlow
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

        <ScopePanel locale={locale}
          id="current-development-scope"
          variant="current-scope"
          title={content.scopeHeading}
        >
          {content.scope.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ScopePanel>

        <ScopePanel locale={locale} variant="engineering-note" title="Scope">
          <p>{content.developmentNote}</p>
        </ScopePanel>

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
      </KnowledgeObjectFrame>
    </article>
  );
}
