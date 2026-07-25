import {
  ArchitectureOverview,
  ConceptGrid,
  DefinitionPanel,
  EngineeringDiagram,
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
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import {
  HUMAN_DATA_MODEL_ENTITY_ID,
  type HumanDataModelPageContent,
} from "@/content/pages/en/human-data-model";

const MODEL_RELATION_GROUPS: readonly EntityRelationGroupId[] = [
  "depends-on",
  "used-by",
  "related-technologies",
  "related-research",
  "related-applications",
];

type HumanDataModelPageProps = {
  locale: Locale;
  content: HumanDataModelPageContent;
};

/**
 * Flagship Human Data Model knowledge page — Phase 3.2.
 * Section order is fixed by the phase specification.
 */
export function HumanDataModelPage({
  locale,
  content,
}: HumanDataModelPageProps) {
  const titleId = "page-title";
  const entity = getEntityById(HUMAN_DATA_MODEL_ENTITY_ID);

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${HUMAN_DATA_MODEL_ENTITY_ID}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article className="page page--human-data-model" aria-labelledby={titleId}>
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
        visualization={<SignalDiagram variant="human-data-model" />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"technology"}
        input={{
          knowledgeId: "human-data-model",
          href: "/technology/human-data-model/",
          title: content.label,
          domain: "Technology",
          entityId: "human-data-model",
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="technology"
        currentHref="/technology/human-data-model/"
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <DefinitionPanel
          term="Human Data Model"
          definition="The structured representation that organizes Human Data and preserves context and relationships."
          coordinate="HDM"
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
              relationship: "Source signals for the model",
              href: "/technology/human-data/",
              role: "foundation",
              classification: "TEC-01",
            },
            {
              id: "data-infra",
              title: "Data Infrastructure",
              responsibility:
                "How authorized information is organized and made available.",
              relationship: "Supports model availability",
              href: "/technology/data-infrastructure/",
              role: "foundation",
              classification: "TEC-03",
            },
            {
              id: "ke",
              title: "Knowledge Engine",
              responsibility:
                "Organizes knowledge and preserves context for other components.",
              relationship: "Uses structured relationships",
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
              id: "human-data",
              label: "Human Data",
              href: "/technology/human-data/",
              relation: "structured as",
            },
            {
              id: "hdm",
              label: "Human Data Model",
              href: "/technology/human-data-model/",
              relation: "used by",
            },
            {
              id: "ads",
              label: "AI Decision Support",
              href: "/systems/ai-decision-support/",
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
          aria-labelledby="hdm-purpose-heading"
        >
          <h2 id="hdm-purpose-heading" className="eng-block__heading">
            {content.purposeHeading}
          </h2>
          {content.purpose.map((paragraph) => (
            <p key={paragraph} className="eng-block__body">
              {paragraph}
            </p>
          ))}
        </section>

        <div id="core-principles">
          <KeyPrinciples
            heading={content.principlesHeading}
            principles={content.principles}
          />
        </div>

        <div id="architecture-overview" className="hdm-architecture">
          <ArchitectureOverview
            heading={content.architectureHeading}
            paragraphs={[content.architectureIntro]}
          />
          <EngineeringDiagram diagram={content.architectureDiagram} />
        </div>

        <section
          id="data-categories"
          className="eng-block"
          aria-labelledby="hdm-categories-heading"
        >
          <h2 id="hdm-categories-heading" className="eng-block__heading">
            {content.categoriesHeading}
          </h2>
          <p className="eng-block__body">{content.categoriesIntro}</p>
          <ul className="hdm-categories">
            {content.categories.map((category) => (
              <li key={category.id} className="hdm-categories__item">
                <h3 className="hdm-categories__title">{category.title}</h3>
                <p className="hdm-categories__role">{category.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="model-relationships"
          className="eng-block"
          aria-labelledby="hdm-relationships-heading"
        >
          <h2 id="hdm-relationships-heading" className="eng-block__heading">
            {content.relationshipsHeading}
          </h2>
          <p className="eng-block__body">{content.relationshipsIntro}</p>
          <EntityRelationshipIndex
            locale={locale}
            entityId={HUMAN_DATA_MODEL_ENTITY_ID}
            heading={null}
            groupHeadingLevel={3}
            includeGroups={MODEL_RELATION_GROUPS}
            className="hdm-relationships-index"
          />
        </section>

        <section
          id="privacy-and-trust"
          className="eng-block"
          aria-labelledby="hdm-privacy-heading"
        >
          <h2 id="hdm-privacy-heading" className="eng-block__heading">
            {content.privacyHeading}
          </h2>
          {content.privacy.map((paragraph) => (
            <p key={paragraph} className="eng-block__body">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          id="engineering-considerations"
          className="eng-block"
          aria-labelledby="hdm-engineering-heading"
        >
          <h2 id="hdm-engineering-heading" className="eng-block__heading">
            {content.engineeringHeading}
          </h2>
          <ul className="eng-principles">
            {content.engineering.map((item) => (
              <li key={item} className="eng-principles__item">
                <p className="eng-principles__text">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <ScopePanel
          id="current-development-scope"
          variant="current-scope"
          title={content.scopeHeading}
        >
          {content.scope.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ScopePanel>

        <ScopePanel variant="engineering-note" title="Development status">
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
            entityId={HUMAN_DATA_MODEL_ENTITY_ID}
            heading={content.relatedSystemsHeading}
            includeGroups={["related-systems"]}
          />
        </div>

        <div id="related-research">
          <EntityRelationshipIndex
            locale={locale}
            entityId={HUMAN_DATA_MODEL_ENTITY_ID}
            heading={content.relatedResearchHeading}
            includeGroups={["related-research"]}
          />
        </div>

        <div id="related-applications">
          <EntityRelationshipIndex
            locale={locale}
            entityId={HUMAN_DATA_MODEL_ENTITY_ID}
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
