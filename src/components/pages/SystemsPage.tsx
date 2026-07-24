import {
  ArchitectureStack,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringCardGrid,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
  RelationshipChain,
} from "@/components/engineering";
import { PageContextNav } from "@/components/pages/PageContextNav";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import { getEntityById } from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";
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

type SystemsPageProps = {
  locale: Locale;
  content: SystemsPageContent;
};

/**
 * Systems domain landing — architecture map first, then detail.
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
    if (!entity || !href) {
      return [];
    }
    return [
      {
        id: entity.id,
        title: entity.title,
        summary: entity.summary,
        href,
        meta: getEntityStatusLabel(entity.status),
      },
    ];
  });

  return (
    <article className="page page--systems" aria-labelledby={titleId}>
      <div className="page-shell__inner page-systems-metadata">
        <DocumentMetadata metadata={content.metadata} />
      </div>

      <PageMasthead
        domain="systems"
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
        domain="systems"
        currentHref="/systems/"
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div className="engineering-hero engineering-hero--architecture">
            <div className="engineering-hero__primary">
              <DefinitionPanel
                term="System"
                definition="A coordinated engineering component that performs a specific role inside SAVEN Core."
              />
            </div>
            <div className="engineering-hero__diagram">
              <ArchitectureStack
                id="systems-platform-overview"
                title="Architecture overview"
                description="Technology foundations feed Systems. Systems connect to Applications."
                identity="architecture"
                nodes={[
                  { id: "technology", label: "Technology" },
                  { id: "systems", label: "Systems", current: true },
                  { id: "applications", label: "Applications" },
                ]}
              />
            </div>
          </div>

          <section
            id="systems-overview"
            className="eng-block"
            aria-labelledby="systems-map-heading"
          >
            <h2 id="systems-map-heading" className="eng-block__heading">
              System map
            </h2>
            <p className="eng-block__body">
              How SAVEN Core systems relate as architecture.
            </p>
            <ArchitectureStack
              id="systems-architecture-map"
              title="Systems architecture"
              description="Knowledge Engine through Drone Systems in architecture order."
              identity="architecture"
              nodes={[
                { id: "ke", label: "Knowledge Engine" },
                { id: "ads", label: "AI Decision Support" },
                { id: "safety", label: "Safety Layer" },
                { id: "comms", label: "Communication Layer" },
                { id: "clinical", label: "Clinical Interfaces" },
                { id: "robotics", label: "Robotics Layer" },
                { id: "drones", label: "Drone Systems" },
              ]}
            />
          </section>

          <div id="systems-categories">
            <EngineeringCardGrid
              locale={locale}
              heading="Published systems"
              identity="architecture"
              items={systemCards}
            />
          </div>

          <RelationshipChain
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

          <section
            id="current-development-scope"
            className="eng-block eng-block--scope"
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
    </article>
  );
}
