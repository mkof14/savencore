import {
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
        visualization={<SignalDiagram variant="human-data" />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"technology"}
        input={{
          knowledgeId: "human-data",
          href: "/technology/human-data/",
          title: content.label,
          domain: "Technology",
          entityId: "human-data",
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="technology"
        currentHref="/technology/human-data/"
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <DefinitionPanel
          term="Human Data"
          definition="Information about a person from different sources."
          coordinate="HD"
        />

        <div id="executive-summary">
          <EngineeringSummary
            heading={content.executiveSummaryHeading}
            paragraphs={content.executiveSummary}
          />
        </div>

        <ConceptGrid
          locale={locale}
          heading="Continue in this path"
          identity="blueprint"
          items={[
            {
              id: "hdm",
              title: "Human Data Model",
              responsibility:
                "Structured representation that organizes Human Data and preserves context and relationships.",
              relationship: "Organizes Human Data signals",
              href: "/technology/human-data-model/",
              role: "foundation",
              classification: "TEC-02",
            },
            {
              id: "data-infra",
              title: "Data Infrastructure",
              responsibility:
                "How authorized information is organized and made available to other systems.",
              relationship: "Makes authorized data available",
              href: "/technology/data-infrastructure/",
              role: "foundation",
              classification: "TEC-03",
            },
            {
              id: "ke",
              title: "Knowledge Engine",
              responsibility:
                "Organizes knowledge and preserves context for other components.",
              relationship: "Consumes structured human information",
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
      </KnowledgeObjectFrame>
    </article>
  );
}
