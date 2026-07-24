import {
  DocumentMetadata,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  ReferenceLinks,
} from "@/components/engineering";
import { DomainFlowDiagram } from "@/components/knowledge/DomainFlowDiagram";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { PageContextNav } from "@/components/pages/PageContextNav";
import { PageMasthead } from "@/components/pages/PageMasthead";
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
 * Shared Systems leaf-page template — Core Architecture Sprint.
 * Empty optional prose and empty relation groups are not rendered.
 */
export function SystemDisciplinePage({
  locale,
  content,
}: SystemDisciplinePageProps) {
  const titleId = "page-title";
  const entity = getEntityById(content.entityId);

  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${content.entityId}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  const currentHref =
    ENTITY_PAGE_HREFS[content.entityId] ?? "/systems/";
  const showContextChain = content.entityId === "knowledge-engine";

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
      <div className="page-shell__inner page-system-discipline-metadata">
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
        currentHref={currentHref}
      />

      <PageSectionNav items={content.sectionNav} />

      <div className="page-body">
        <div className="page-shell__inner">
          <div id="executive-summary" className="eng-block--lede">
            <EngineeringSummary
              heading={content.executiveSummaryHeading}
              paragraphs={content.executiveSummary}
            />
          </div>

          {showContextChain ? (
            <section
              className="eng-block"
              aria-labelledby="system-context-chain-heading"
            >
              <h2
                id="system-context-chain-heading"
                className="eng-block__heading"
              >
                Context chain
              </h2>
              <DomainFlowDiagram
                id="knowledge-engine-context-chain"
                title="Human Data to Knowledge Engine"
                description="Human Data feeds the Human Data Model. The Knowledge Engine organizes shared context for other systems."
                nodes={[
                  { id: "human-data", label: "Human Data" },
                  { id: "hdm", label: "Human Data Model" },
                  { id: "ke", label: "Knowledge Engine" },
                ]}
              />
            </section>
          ) : null}

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

          <ProseSection
            id="human-oversight"
            heading={content.humanOversightHeading}
            paragraphs={content.humanOversight}
          />

          <div className="eng-block--scope">
            <ProseSection
              id="current-development-scope"
              heading={content.scopeHeading}
              paragraphs={content.scope}
            />
          </div>

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
    </article>
  );
}
