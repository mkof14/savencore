import {
  ConceptGrid,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  RelationshipFlow,
  ScopePanel,
  SignalDiagram,
  type SignalDiagramVariant,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import {
  getEntityById,
  getEntityRelationsSummary,
} from "@/content/knowledge/entity-registry";
import type { SystemDisciplinePageContent } from "@/content/pages/en/system-discipline-types";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";

const SYSTEM_RELATION_GROUPS: readonly EntityRelationGroupId[] = [
  "depends-on",
  "used-by",
  "trust-and-safety",
];

const HERO_BY_ENTITY: Partial<
  Record<
    string,
    {
      variant: SignalDiagramVariant;
      term: string;
      definition: string;
      coordinate: string;
    }
  >
> = {
  "knowledge-engine": {
    variant: "knowledge-engine",
    term: "Knowledge Engine",
    definition:
      "Organizes knowledge and preserves context for other components. It does not make decisions.",
    coordinate: "KE",
  },
  "ai-decision-support": {
    variant: "ai-decision-support",
    term: "AI Decision Support",
    definition:
      "Analyzes available information to support people. It does not replace people.",
    coordinate: "ADS",
  },
  "safety-layer": {
    variant: "safety-layer",
    term: "Safety Layer",
    definition:
      "Applies validation, limits, human review, and escalation across systems.",
    coordinate: "SAFE",
  },
  "communication-layer": {
    variant: "communication-layer",
    term: "Communication Layer",
    definition:
      "Connects components through controlled exchange. It does not invent content or decide outcomes.",
    coordinate: "COM",
  },
  "clinical-interfaces": {
    variant: "clinical-interfaces",
    term: "Clinical Interfaces",
    definition:
      "Connects authorized clinical workflows to governed system pathways under human authority.",
    coordinate: "CLI",
  },
  "robotics-layer": {
    variant: "robotics-layer",
    term: "Robotics Layer",
    definition:
      "Connects digital systems to physical action only inside approved limits.",
    coordinate: "ROB",
  },
  "drone-systems": {
    variant: "drone-systems",
    term: "Drone Systems",
    definition:
      "Specialized aerial operating pathway under communication and safety limits.",
    coordinate: "DRN",
  },
};

function hasRelationGroups(
  entityId: string,
  groups: readonly EntityRelationGroupId[],
): boolean {
  const summary = getEntityRelationsSummary(entityId);
  if (!summary) {
    return false;
  }
  return summary.groups.some((group) => groups.includes(group.id));
}

type SystemDisciplinePageProps = {
  locale: Locale;
  content: SystemDisciplinePageContent;
};

function ProseSection({
  id,
  heading,
  paragraphs,
}: {
  id: string;
  heading: string;
  paragraphs: readonly string[];
}) {
  if (paragraphs.length === 0) {
    return null;
  }
  const headingId = `${id}-heading`;
  return (
    <section id={id} className="eng-block" aria-labelledby={headingId}>
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="eng-block__body">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

/**
 * Shared Systems leaf-page template — visual system + core architecture body.
 */
export function SystemDisciplinePage({
  locale,
  content,
}: SystemDisciplinePageProps) {
  const titleId = "page-title";
  const entity = getEntityById(content.entityId);
  const hero = HERO_BY_ENTITY[content.entityId];

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${content.entityId}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  const currentHref = ENTITY_PAGE_HREFS[content.entityId] ?? "/systems/";

  const showRelationships = hasRelationGroups(
    content.entityId,
    SYSTEM_RELATION_GROUPS,
  );
  const showRelatedTechnology = hasRelationGroups(content.entityId, [
    "related-technologies",
  ]);
  const showRelatedSystems = hasRelationGroups(content.entityId, [
    "related-systems",
  ]);
  const showRelatedApplications = hasRelationGroups(content.entityId, [
    "related-applications",
  ]);

  return (
    <article className="page page--system-discipline" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="systems"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
        visualization={
          hero ? (
            <SignalDiagram variant={hero.variant} />
          ) : (
            <SignalDiagram variant="systems-overview" />
          )
        }
      />

      <div className="page-body">
        <div className="page-shell__inner">
          {hero ? (
            <>
              <DefinitionPanel
                term={hero.term}
                definition={hero.definition}
                coordinate={hero.coordinate}
              />

              {content.entityId === "knowledge-engine" ? (
                <>
                  <ConceptGrid
                    locale={locale}
                    heading="Connected systems"
                    identity="architecture"
                    items={[
                      {
                        id: "ads",
                        title: "AI Decision Support",
                        responsibility:
                          "Analyzes available information to support people. Does not replace people.",
                        relationship: "Consumes knowledge context",
                        href: "/systems/ai-decision-support/",
                        role: "system",
                        classification: "SYS-02",
                      },
                      {
                        id: "safety",
                        title: "Safety Layer",
                        responsibility:
                          "Applies validation, limits, human review and escalation.",
                        relationship: "Governs knowledge pathways",
                        href: "/systems/safety-layer/",
                        role: "control",
                        classification: "CTL-01",
                      },
                      {
                        id: "hdm",
                        title: "Human Data Model",
                        responsibility:
                          "Structured representation that organizes Human Data.",
                        relationship: "Foundation for structured knowledge",
                        href: "/technology/human-data-model/",
                        role: "foundation",
                        classification: "TEC-02",
                      },
                    ]}
                  />

                  <RelationshipFlow
                    locale={locale}
                    heading="Architecture relationships"
                    steps={[
                      {
                        id: "ke",
                        label: "Knowledge Engine",
                        href: "/systems/knowledge-engine/",
                        relation: "powers",
                      },
                      {
                        id: "ads",
                        label: "AI Decision Support",
                        href: "/systems/ai-decision-support/",
                        relation: "protected by",
                      },
                      {
                        id: "safety",
                        label: "Safety Layer",
                        href: "/systems/safety-layer/",
                        relation: "communicates through",
                      },
                      {
                        id: "comms",
                        label: "Communication Layer",
                        href: "/systems/communication-layer/",
                      },
                    ]}
                  />
                </>
              ) : null}

              {content.entityId === "ai-decision-support" ? (
                <RelationshipFlow
                  locale={locale}
                  heading="Review path"
                  description="Knowledge and signals support analysis that stops at human review."
                  steps={[
                    {
                      id: "ke",
                      label: "Knowledge Engine",
                      href: "/systems/knowledge-engine/",
                      relation: "feeds",
                    },
                    {
                      id: "ads",
                      label: "AI Decision Support",
                      href: "/systems/ai-decision-support/",
                      relation: "stops at",
                    },
                    {
                      id: "human",
                      label: "Human review",
                    },
                  ]}
                />
              ) : null}

              {content.entityId === "safety-layer" ? (
                <RelationshipFlow
                  locale={locale}
                  heading="Control path"
                  description="Checks, limits, escalation, and oversight govern system action."
                  steps={[
                    {
                      id: "checks",
                      label: "Checks",
                      relation: "then",
                    },
                    {
                      id: "limits",
                      label: "Limits",
                      relation: "then",
                    },
                    {
                      id: "escalation",
                      label: "Escalation",
                      relation: "to",
                    },
                    {
                      id: "oversight",
                      label: "Human oversight",
                    },
                  ]}
                />
              ) : null}
            </>
          ) : null}

          <div id="executive-summary">
            <EngineeringSummary
              heading={content.executiveSummaryHeading}
              paragraphs={content.executiveSummary}
            />
          </div>

          <ProseSection
            id="why-it-matters"
            heading={content.whyItMattersHeading}
            paragraphs={content.whyItMatters}
          />

          <ProseSection
            id="purpose"
            heading={content.purposeHeading}
            paragraphs={content.purpose}
          />

          <ProseSection
            id="architecture-role"
            heading={content.architectureRoleHeading}
            paragraphs={content.architectureRole}
          />

          {content.inputs.length > 0 ? (
            <section
              id="inputs"
              className="eng-block"
              aria-labelledby="system-inputs-heading"
            >
              <h2 id="system-inputs-heading" className="eng-block__heading">
                {content.inputsHeading}
              </h2>
              <ul className="eng-principles">
                {content.inputs.map((item) => (
                  <li key={item} className="eng-principles__item">
                    <p className="eng-principles__text">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {content.outputs.length > 0 ? (
            <section
              id="outputs"
              className="eng-block"
              aria-labelledby="system-outputs-heading"
            >
              <h2 id="system-outputs-heading" className="eng-block__heading">
                {content.outputsHeading}
              </h2>
              <ul className="eng-principles">
                {content.outputs.map((item) => (
                  <li key={item} className="eng-principles__item">
                    <p className="eng-principles__text">{item}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {showRelationships ? (
            <section
              id="relationships"
              className="eng-block"
              aria-labelledby="system-relationships-heading"
            >
              <h2
                id="system-relationships-heading"
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
                includeGroups={SYSTEM_RELATION_GROUPS}
                className="system-discipline-relationships-index"
              />
            </section>
          ) : null}

          <div id="engineering-principles">
            <KeyPrinciples
              heading={content.principlesHeading}
              principles={content.principles}
            />
          </div>

          {content.humanOversight.length > 0 ? (
            <ScopePanel
              id="human-oversight"
              variant="human-oversight"
              title={content.humanOversightHeading}
            >
              {content.humanOversight.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </ScopePanel>
          ) : null}

          {content.entityId === "safety-layer" &&
          content.humanOversight.length > 0 ? (
            <ScopePanel variant="safety-boundary" title="Safety boundary">
              <p>{content.humanOversight[0]}</p>
            </ScopePanel>
          ) : null}

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

          {futureItems.length > 0 ? (
            <div id="future-topics">
              <FutureExpansionBlock
                heading={content.futureHeading}
                introduction={content.futureIntro}
                items={futureItems}
              />
            </div>
          ) : null}

          {showRelatedTechnology ? (
            <div id="related-technology">
              <EntityRelationshipIndex
                locale={locale}
                entityId={content.entityId}
                heading={content.relatedTechnologyHeading}
                includeGroups={["related-technologies"]}
              />
            </div>
          ) : null}

          {showRelatedSystems ? (
            <div id="related-systems">
              <EntityRelationshipIndex
                locale={locale}
                entityId={content.entityId}
                heading={content.relatedSystemsHeading}
                includeGroups={["related-systems"]}
              />
            </div>
          ) : null}

          {showRelatedApplications ? (
            <div id="related-applications">
              <EntityRelationshipIndex
                locale={locale}
                entityId={content.entityId}
                heading={content.relatedApplicationsHeading}
                includeGroups={["related-applications"]}
              />
            </div>
          ) : null}

          <div id="reference-links">
            <ReferenceLinks
              locale={locale}
              heading={content.referenceHeading}
              links={content.referenceLinks}
            />
          </div>
        </div>
      </div>

      <KnowledgePageNavigation
        locale={locale}
        domain="systems"
        currentHref={currentHref}
      />

      <div className="page-supporting">
        <div className="page-shell__inner">
          <DocumentMetadata metadata={content.metadata} />
          <PageSectionNav items={content.sectionNav} />
        </div>
      </div>
    </article>
  );
}
