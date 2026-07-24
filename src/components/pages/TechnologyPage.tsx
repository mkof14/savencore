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
import {
  getEntitiesByDomain,
  getEntityById,
} from "@/content/knowledge/entity-registry";
import { getEntityStatusLabel } from "@/content/knowledge/status-labels";
import type { TechnologyPageContent } from "@/content/pages/en/technology";
import { technologyNavChildren } from "@/navigation/site-navigation";

type TechnologyPageProps = {
  locale: Locale;
  content: TechnologyPageContent;
};

/**
 * Technology domain entrance — engineering knowledge experience.
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
    .map((item) => {
      const entityId = item.id.replace(/^technology-/, "");
      const entity = getEntityById(entityId);
      return {
        id: item.id,
        title: item.label,
        summary: entity?.summary ?? item.label,
        href: item.href,
        ...(entity
          ? { meta: getEntityStatusLabel(entity.status) }
          : {}),
      };
    });

  return (
    <article className="page page--technology" aria-labelledby={titleId}>
      <div className="page-shell__inner page-technology-metadata">
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
        currentHref="/technology/"
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div className="engineering-hero">
            <div className="engineering-hero__primary">
              <DefinitionPanel
                term="Technology"
                definition="Technical capabilities and engineering foundations used to build SAVEN Core systems."
              />
            </div>
            <div className="engineering-hero__diagram">
              <ArchitectureStack
                id="technology-platform-overview"
                title="Architecture overview"
                description="Technology foundations feed Systems. Systems connect to Applications."
                identity="blueprint"
                nodes={[
                  { id: "technology", label: "Technology", current: true },
                  { id: "systems", label: "Systems" },
                  { id: "applications", label: "Applications" },
                ]}
              />
            </div>
          </div>

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
            <ArchitectureStack
              id="technology-domain-map"
              title="Reading path"
              description="Human Data through Data Infrastructure into Knowledge Engine and AI Decision Support, then Applications."
              identity="blueprint"
              nodes={[
                { id: "human-data", label: "Human Data" },
                { id: "hdm", label: "Human Data Model" },
                { id: "data-infra", label: "Data Infrastructure" },
                { id: "ke", label: "Knowledge Engine" },
                { id: "ads", label: "AI Decision Support" },
                { id: "applications", label: "Applications" },
              ]}
            />
          </section>

          <div id="technology-categories">
            <EngineeringCardGrid
              locale={locale}
              heading="Technology disciplines"
              identity="blueprint"
              items={technologyCards}
            />
          </div>

          <RelationshipChain
            locale={locale}
            heading="Platform relationships"
            description="Technology organizes foundations before Systems assist people."
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
    </article>
  );
}
