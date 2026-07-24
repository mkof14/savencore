import {
  ArchitectureOverview,
  ArchitectureStack,
  DefinitionPanel,
  DocumentMetadata,
  EngineeringCardGrid,
  EngineeringDiagram,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
  RelationshipChain,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { PageContextNav } from "@/components/pages/PageContextNav";
import { PageMasthead } from "@/components/pages/PageMasthead";
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
      <div className="page-shell__inner page-hdm-metadata">
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
        currentHref="/technology/human-data-model/"
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div className="engineering-hero">
            <div className="engineering-hero__primary">
              <DefinitionPanel
                term="Human Data Model"
                definition="The structured representation that organizes Human Data and preserves context and relationships."
              />
            </div>
            <div className="engineering-hero__diagram">
              <ArchitectureStack
                id="hdm-position"
                title="Where this fits"
                description="Human Data Model sits between Human Data and later systems."
                identity="blueprint"
                nodes={[
                  { id: "human-data", label: "Human Data" },
                  {
                    id: "hdm",
                    label: "Human Data Model",
                    current: true,
                  },
                  { id: "ke", label: "Knowledge Engine" },
                  { id: "ads", label: "AI Decision Support" },
                ]}
              />
            </div>
          </div>

          <EngineeringCardGrid
            locale={locale}
            heading="Connected foundations"
            identity="blueprint"
            items={[
              {
                id: "human-data",
                title: "Human Data",
                summary: "Information about a person from different sources.",
                href: "/technology/human-data/",
              },
              {
                id: "data-infra",
                title: "Data Infrastructure",
                summary:
                  "How authorized information is organized and made available.",
                href: "/technology/data-infrastructure/",
              },
              {
                id: "ke",
                title: "Knowledge Engine",
                summary:
                  "Organizes knowledge and preserves context for other components.",
                href: "/systems/knowledge-engine/",
              },
            ]}
          />

          <RelationshipChain
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

          <section
            id="current-development-scope"
            className="eng-block"
            aria-labelledby="hdm-scope-heading"
          >
            <h2 id="hdm-scope-heading" className="eng-block__heading">
              {content.scopeHeading}
            </h2>
            {content.scope.map((paragraph) => (
              <p key={paragraph} className="eng-block__body">
                {paragraph}
              </p>
            ))}
          </section>

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
        </div>
      </div>
    </article>
  );
}
