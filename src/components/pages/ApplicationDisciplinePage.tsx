import {
  DefinitionPanel,
  EngineeringSummary,
  FutureExpansionBlock,
  KeyPrinciples,
  KnowledgeHero,
  ReferenceLinks,
  ScopePanel,
  SignalDiagram,
} from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import { KnowledgePageNavigation } from "@/components/pages/KnowledgePageNavigation";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { Locale } from "@/config/locales";
import type { EntityRelationGroupId } from "@/content/knowledge/entity-types";
import {
  getEntityById,
  getEntityRelationsSummary,
} from "@/content/knowledge/entity-registry";
import type { ApplicationDisciplinePageContent } from "@/content/pages/en/application-discipline-types";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";

const TRUST_GROUPS: readonly EntityRelationGroupId[] = ["trust-and-safety"];

function hasGroups(
  entityId: string,
  groups: readonly EntityRelationGroupId[],
): boolean {
  const summary = getEntityRelationsSummary(entityId);
  if (!summary) return false;
  return summary.groups.some((group) => groups.includes(group.id));
}

function ProseSection({
  id,
  heading,
  paragraphs,
}: {
  id: string;
  heading: string;
  paragraphs: readonly string[];
}) {
  if (paragraphs.length === 0) return null;
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

type Props = {
  locale: Locale;
  content: ApplicationDisciplinePageContent;
};

export function ApplicationDisciplinePage({ locale, content }: Props) {
  const titleId = "page-title";
  const entity = getEntityById(content.entityId);
  const currentHref =
    ENTITY_PAGE_HREFS[content.entityId] ?? "/applications/";
  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${content.entityId}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article className="page page--application-discipline" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="applications"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.metadata.status
          ? { status: content.metadata.status }
          : {})}
        visualization={<SignalDiagram variant={content.diagramVariant} />}
      />

      <KnowledgeObjectFrame
        locale={locale}
        domain={"applications"}
        input={{
          knowledgeId: content.entityId,
          href: currentHref,
          title: content.label,
          domain: "Applications",
          entityId: content.entityId,
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="applications"
        currentHref={currentHref}
          />
        }
        supporting={<PageSectionNav items={content.sectionNav} />}
      >
        <DefinitionPanel
          term={content.definitionTerm}
          definition={content.definition}
          coordinate={content.definitionCoordinate}
        />

        <div id="executive-summary">
          <EngineeringSummary
            heading={content.executiveSummaryHeading}
            paragraphs={content.executiveSummary}
          />
        </div>

        <ProseSection
          id="operating-context"
          heading={content.operatingContextHeading}
          paragraphs={content.operatingContext}
        />
        <ProseSection
          id="why-it-matters"
          heading={content.whyItMattersHeading}
          paragraphs={content.whyItMatters}
        />
        <ProseSection
          id="saven-core-role"
          heading={content.savenRoleHeading}
          paragraphs={content.savenRole}
        />
        <ProseSection
          id="information-flow"
          heading={content.informationFlowHeading}
          paragraphs={content.informationFlow}
        />
        <ProseSection
          id="human-role"
          heading={content.humanRoleHeading}
          paragraphs={content.humanRole}
        />

        {content.safetyTrust.length > 0 ? (
          <ScopePanel
            id="safety-and-trust"
            variant="safety-boundary"
            title={content.safetyTrustHeading}
          >
            {content.safetyTrust.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScopePanel>
        ) : null}

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

        {futureItems.length > 0 ? (
          <div id="future-topics">
            <FutureExpansionBlock
              heading={content.futureHeading}
              introduction={content.futureIntro}
              items={futureItems}
            />
          </div>
        ) : null}

        {hasGroups(content.entityId, ["related-technologies"]) ? (
          <div id="related-technology">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedTechnologyHeading}
              includeGroups={["related-technologies"]}
            />
          </div>
        ) : null}

        {hasGroups(content.entityId, ["related-systems"]) ? (
          <div id="related-systems">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedSystemsHeading}
              includeGroups={["related-systems"]}
            />
          </div>
        ) : null}

        {hasGroups(content.entityId, TRUST_GROUPS) ? (
          <div id="related-trust">
            <EntityRelationshipIndex
              locale={locale}
              entityId={content.entityId}
              heading={content.relatedTrustHeading}
              includeGroups={TRUST_GROUPS}
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
      </KnowledgeObjectFrame>
    </article>
  );
}
