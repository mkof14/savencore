import {
  ArchitectureOverview,
  DocumentMetadata,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
  RelatedTopicsBlock,
} from "@/components/engineering";
import { DomainFlowDiagram } from "@/components/knowledge/DomainFlowDiagram";
import { SystemsCategoryList } from "@/components/knowledge/SystemsCategoryList";
import { SystemsOverviewMap } from "@/components/knowledge/SystemsOverviewMap";
import { PageContextNav } from "@/components/pages/PageContextNav";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import { getEntityById } from "@/content/knowledge/entity-registry";
import type { SystemsPageContent } from "@/content/pages/en/systems";

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
 * Systems domain landing page — visual overview plus architecture reading path.
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
          <div id="systems-overview">
            <ArchitectureOverview
              heading={content.overviewHeading}
              paragraphs={content.overview}
            />
          </div>

          <section
            className="eng-block eng-block--lede"
            aria-labelledby="systems-domain-chain-heading"
          >
            <h2
              id="systems-domain-chain-heading"
              className="eng-block__heading"
            >
              Domain chain
            </h2>
            <p className="eng-block__body">
              Systems sit between Technology foundations and Applications
              contexts.
            </p>
            <DomainFlowDiagram
              id="systems-domain-chain"
              title="Technology to Applications"
              description="Technology feeds Systems. Systems connect to Applications."
              nodes={[
                { id: "technology", label: "Technology" },
                { id: "systems", label: "Systems" },
                { id: "applications", label: "Applications" },
              ]}
            />
          </section>

          <SystemsOverviewMap locale={locale} heading="System map" />

          <section
            className="eng-block"
            aria-labelledby="systems-working-chain-heading"
          >
            <h2
              id="systems-working-chain-heading"
              className="eng-block__heading"
            >
              Working relationships
            </h2>
            <p className="eng-block__body">
              Shared context feeds assistance. Safety and communication constrain
              clinical and physical pathways.
            </p>
            <DomainFlowDiagram
              id="systems-working-chain"
              title="How systems connect"
              description="Knowledge Engine to AI Decision Support to Safety Layer, then Clinical Interfaces and Robotics Layer."
              kind="flow"
              nodes={[
                { id: "ke", label: "Knowledge Engine" },
                { id: "ads", label: "AI Decision Support" },
                { id: "safety", label: "Safety Layer" },
                { id: "clinical", label: "Clinical Interfaces" },
                { id: "robotics", label: "Robotics Layer" },
              ]}
            />
          </section>

          <ProseSection
            id="what-a-system-means"
            heading={content.meaningHeading}
            paragraphs={content.meaning}
          />

          <ProseSection
            id="systems-and-technology"
            heading={content.technologyHeading}
            paragraphs={content.technology}
          />

          <ProseSection
            id="systems-and-applications"
            heading={content.applicationsHeading}
            paragraphs={content.applications}
          />

          <ProseSection
            id="systems-together"
            heading={content.togetherHeading}
            paragraphs={content.together}
          />

          <ProseSection
            id="where-to-continue"
            heading={content.continueHeading}
            paragraphs={content.continue}
          />

          <SystemsCategoryList
            locale={locale}
            heading={content.categoriesHeading}
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

          {futureItems.length > 0 ? (
            <div id="future-expansion">
              <FutureExpansionBlock
                heading={content.futureHeading}
                introduction={content.futureIntro}
                items={futureItems}
              />
            </div>
          ) : null}

          <div id="related-domains">
            <RelatedTopicsBlock
              locale={locale}
              heading={content.relatedDomainsHeading}
              links={content.relatedDomainLinks}
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
