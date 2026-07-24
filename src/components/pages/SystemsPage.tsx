import {
  ArchitectureMap,
  ConceptGrid,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringAnnotation,
  FutureExpansionBlock,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  RelationshipFlow,
  ScopePanel,
  SignalDiagram,
} from "@/components/engineering";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import { getEntityById } from "@/content/knowledge/entity-registry";
import type { SystemsPageContent } from "@/content/pages/en/systems";
import { systemsNavChildren } from "@/navigation/site-navigation";

const SYSTEM_ENTITY_IDS = [
  "knowledge-engine",
  "ai-decision-support",
  "safety-layer",
  "communication-layer",
  "clinical-interfaces",
  "robotics-layer",
  "drone-systems",
] as const;

const SYSTEM_ROLES = {
  "knowledge-engine": {
    role: "system" as const,
    relationship: "Provides context to other systems",
    classification: "SYS-01",
  },
  "ai-decision-support": {
    role: "system" as const,
    relationship: "Supports human review with analysis",
    classification: "SYS-02",
  },
  "safety-layer": {
    role: "control" as const,
    relationship: "Governs limits across multiple systems",
    classification: "CTL-01",
  },
  "communication-layer": {
    role: "interface" as const,
    relationship: "Connects components under controlled exchange",
    classification: "IFC-01",
  },
  "clinical-interfaces": {
    role: "interface" as const,
    relationship: "Connects controlled workflows to people",
    classification: "IFC-02",
  },
  "robotics-layer": {
    role: "endpoint" as const,
    relationship: "Connects digital systems to physical action",
    classification: "ACT-01",
  },
  "drone-systems": {
    role: "endpoint" as const,
    relationship: "Specialized aerial operating system",
    classification: "ACT-02",
  },
};

type SystemsPageProps = {
  locale: Locale;
  content: SystemsPageContent;
};

/**
 * Systems domain landing — architecture visualization first.
 */
export function SystemsPage({ locale, content }: SystemsPageProps) {
  const titleId = "page-title";

  const futureItems = SYSTEM_ENTITY_IDS.flatMap((entityId) => {
    const entity = getEntityById(entityId);
    if (!entity) {
      return [];
    }
    return entity.futureTopics.map((topic, index) => ({
      id: `${entity.id}-future-${index}`,
      label: entity.title,
      note: topic,
    }));
  });

  const systemCards = SYSTEM_ENTITY_IDS.flatMap((entityId) => {
    const entity = getEntityById(entityId);
    const href = systemsNavChildren.find(
      (item) => item.id === `systems-${entityId}`,
    )?.href;
    const roleMeta = SYSTEM_ROLES[entityId];
    if (!entity || !href) {
      return [];
    }
    return [
      {
        id: entity.id,
        title: entity.title,
        responsibility: entity.summary,
        relationship: roleMeta.relationship,
        href,
        role: roleMeta.role,
        classification: roleMeta.classification,
      },
    ];
  });

  return (
    <article className="page page--systems" aria-labelledby={titleId}>
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
        visualization={<SignalDiagram variant="systems-overview" />}
      />

      <div className="page-body">
        <div className="page-shell__inner">
          <DefinitionPanel
            term="System"
            definition="A coordinated engineering component that performs a specific role inside SAVEN Core."
            coordinate="SYS"
          />

          <EngineeringAnnotation
            coordinate="ARC"
            label="Reading order"
            text="HUMAN SIGNALS → STRUCTURED KNOWLEDGE → CONTROLLED ACTION"
          />

          <div id="systems-overview">
            <ArchitectureMap locale={locale} />
          </div>

          <div id="systems-categories">
            <ConceptGrid
              locale={locale}
              heading="Published systems"
              identity="architecture"
              items={systemCards}
            />
          </div>

          <RelationshipFlow
            locale={locale}
            heading="Working relationships"
            description="Shared context feeds assistance under safety and communication limits."
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
                relation: "reaches",
              },
              {
                id: "clinical",
                label: "Clinical Interfaces",
                href: "/systems/clinical-interfaces/",
              },
            ]}
          />

          <section
            id="systems-and-technology"
            className="eng-block"
            aria-labelledby="systems-chain-heading"
          >
            <h2 id="systems-chain-heading" className="eng-block__heading">
              {content.technologyHeading}
            </h2>
            {content.technology.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

          <section
            id="systems-and-applications"
            className="eng-block"
            aria-labelledby="systems-applications-heading"
          >
            <h2 id="systems-applications-heading" className="eng-block__heading">
              {content.applicationsHeading}
            </h2>
            {content.applications.map((paragraph) => (
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

          <ScopePanel
            id="current-development-scope"
            variant="current-scope"
            title={content.scopeHeading}
          >
            {content.scope.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScopePanel>

          <ScopePanel
            variant="engineering-note"
            title="Development status"
          >
            <p>{content.developmentNote}</p>
          </ScopePanel>

          {futureItems.length > 0 ? (
            <div id="future-expansion">
              <FutureExpansionBlock
                heading={content.futureHeading}
                introduction={content.futureIntro}
                items={futureItems}
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
        currentHref="/systems/"
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
