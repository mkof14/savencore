import {
  DefinitionPanel,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  ScopePanel,
  SignalDiagram,
  type SignalDiagramVariant,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import { getEntityById } from "@/content/knowledge/entity-registry";
import type { TechnologyDisciplinePageContent } from "@/content/pages/en/technology-discipline-types";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";

const RELATIONSHIP_GROUPS: readonly EntityRelationGroupId[] = [
  "depends-on",
  "used-by",
  "related-technologies",
  "trust-and-safety",
];

const DIAGRAM_BY_ENTITY: Record<string, SignalDiagramVariant> = {
  interoperability: "interoperability",
  privacy: "privacy",
  security: "security",
  "artificial-intelligence": "artificial-intelligence",
  automation: "automation",
  robotics: "robotics",
};

const DEFINITION_BY_ENTITY: Record<
  string,
  { term: string; definition: string; coordinate: string }
> = {
  interoperability: {
    term: "Interoperability",
    definition:
      "How SAVEN Core systems exchange information with authorized external environments under permission and safety limits.",
    coordinate: "IOP",
  },
  privacy: {
    term: "Privacy",
    definition:
      "Engineering foundations that limit what information may be used, why it may be used and who may access it.",
    coordinate: "PRV",
  },
  security: {
    term: "Security",
    definition:
      "Engineering foundations that protect systems, interfaces and authorized data pathways from misuse.",
    coordinate: "SEC",
  },
  "artificial-intelligence": {
    term: "Artificial Intelligence",
    definition:
      "Models and rules intended to assist judgment under permissions, uncertainty handling and human oversight.",
    coordinate: "AI",
  },
  automation: {
    term: "Automation",
    definition:
      "Controlled system behavior for tasks that can be delegated safely inside reviewable limits.",
    coordinate: "AUT",
  },
  robotics: {
    term: "Robotics",
    definition:
      "Engineering discipline for devices and interfaces that act in the physical world under governance.",
    coordinate: "ROB",
  },
};

type TechnologyDisciplinePageProps = {
  locale: Locale;
  content: TechnologyDisciplinePageContent;
};

/**
 * Shared Technology discipline leaf-page template — Visual System v1.
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

  const currentHref = ENTITY_PAGE_HREFS[content.entityId] ?? "/technology/";
  const diagram =
    DIAGRAM_BY_ENTITY[content.entityId] ?? "technology-overview";
  const definition = DEFINITION_BY_ENTITY[content.entityId] ?? {
    term: content.label,
    definition: content.introduction,
    coordinate: "TEC",
  };

  return (
    <article
      className="page page--technology-discipline"
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
        visualization={<SignalDiagram variant={diagram} />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"technology"}
        input={{
          knowledgeId: content.entityId,
          href: currentHref,
          title: content.label,
          domain: "Technology",
          entityId: content.entityId,
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="technology"
        currentHref={currentHref}
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <DefinitionPanel
          term={definition.term}
          definition={definition.definition}
          coordinate={definition.coordinate}
        />

        <div id="executive-summary" className="eng-block--lede">
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

        <ScopePanel locale={locale}
          id="current-development-scope"
          variant="current-scope"
          title={content.scopeHeading}
        >
          {content.scope.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ScopePanel>

        <ScopePanel locale={locale} variant="engineering-note" title="Development status">
          <p>{content.developmentNote}</p>
        </ScopePanel>

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
      </KnowledgeObjectFrame>
    </article>
  );
}
