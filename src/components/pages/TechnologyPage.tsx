import {
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
import {
  getEntitiesByDomain,
  getEntityById,
} from "@/content/knowledge/entity-registry";
import type { TechnologyPageContent } from "@/content/pages/en/technology";
import { technologyNavChildren } from "@/navigation/site-navigation";

const TECH_ROLES: Record<
  string,
  { role: "foundation" | "system"; relationship: string; classification: string }
> = {
  "technology-human-data": {
    role: "foundation",
    relationship: "Human-information signal intake",
    classification: "TEC-01",
  },
  "technology-human-data-model": {
    role: "foundation",
    relationship: "Structured representation and relationships",
    classification: "TEC-02",
  },
  "technology-data-infrastructure": {
    role: "foundation",
    relationship: "Authorized availability layer",
    classification: "TEC-03",
  },
  "technology-interoperability": {
    role: "foundation",
    relationship: "Exchange and connection foundations",
    classification: "TEC-04",
  },
  "technology-privacy": {
    role: "foundation",
    relationship: "Privacy controls for human information",
    classification: "TEC-05",
  },
  "technology-security": {
    role: "foundation",
    relationship: "Security controls for protected systems",
    classification: "TEC-06",
  },
  "technology-artificial-intelligence": {
    role: "foundation",
    relationship: "Analytical capability foundation",
    classification: "TEC-07",
  },
};

type TechnologyPageProps = {
  locale: Locale;
  content: TechnologyPageContent;
};

/**
 * Technology domain entrance — foundation grid composition.
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

  const technologyCards = technologyNavChildren
    .filter((item) => item.href !== "/technology/")
    .map((item, index) => {
      const entityId = item.id.replace(/^technology-/, "");
      const entity = getEntityById(entityId);
      const roleMeta = TECH_ROLES[item.id] ?? {
        role: "foundation" as const,
        relationship: "Technology foundation discipline",
        classification: `TEC-${String(index + 1).padStart(2, "0")}`,
      };
      return {
        id: item.id,
        title: item.label,
        responsibility: entity?.summary ?? item.label,
        relationship: roleMeta.relationship,
        href: item.href,
        role: roleMeta.role,
        classification: roleMeta.classification,
      };
    });

  return (
    <article className="page page--technology" aria-labelledby={titleId}>
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
        visualization={<SignalDiagram variant="technology-overview" />}
      />

      <div className="page-body">
        <div className="page-shell__inner">
          <DefinitionPanel
            term="Technology"
            definition="Technical capabilities and engineering foundations used to build SAVEN Core systems."
            coordinate="TEC"
          />

          <EngineeringAnnotation
            coordinate="LAY"
            label="Foundation sequence"
            text="Human Data → Human Data Model → Data Infrastructure → Systems"
          />

          <section
            id="technology-overview"
            className="eng-block"
            aria-labelledby="technology-domain-map-heading"
          >
            <h2
              id="technology-domain-map-heading"
              className="eng-block__heading"
            >
              Domain map
            </h2>
            <p className="eng-block__body">
              How Technology connects into Systems and Applications.
            </p>
            <RelationshipFlow
              locale={locale}
              heading="Reading path"
              description="Foundations organize before Systems assist people."
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
                  relation: "enables",
                },
                {
                  id: "ads",
                  label: "AI Decision Support",
                  href: "/systems/ai-decision-support/",
                },
              ]}
            />
          </section>

          <div id="technology-categories">
            <ConceptGrid
              locale={locale}
              heading="Technology disciplines"
              identity="blueprint"
              items={technologyCards}
            />
          </div>

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

          <ScopePanel variant="engineering-note" title="Development status">
            <p>{content.developmentNote}</p>
          </ScopePanel>

          <div id="future-expansion">
            <FutureExpansionBlock
              heading={content.futureHeading}
              introduction={content.futureIntro}
              items={futureItems}
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

      <KnowledgePageNavigation
        locale={locale}
        domain="technology"
        currentHref="/technology/"
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
