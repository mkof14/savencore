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
import type { TrustDisciplinePageContent } from "@/content/pages/en/trust-discipline-types";
import { ENTITY_PAGE_HREFS } from "@/navigation/entity-page-paths";

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
  content: TrustDisciplinePageContent;
};

export function TrustDisciplinePage({ locale, content }: Props) {
  const titleId = "page-title";
  const entity = getEntityById(content.entityId);
  const currentHref = ENTITY_PAGE_HREFS[content.entityId] ?? "/trust/";
  const futureItems =
    entity?.futureTopics.map((topic, index) => ({
      id: `${content.entityId}-future-${index}`,
      label: entity.title,
      note: topic,
    })) ?? [];

  return (
    <article className="page page--trust-discipline" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="trust"
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
        domain={"trust"}
        input={{
          knowledgeId: content.entityId,
          href: currentHref,
          title: content.label,
          domain: "Trust",
          entityId: content.entityId,
          metadata: content.metadata,
          currentScope: content.developmentNote,
        }}
        between={
          <KnowledgePageNavigation
        locale={locale}
        domain="trust"
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
          id="principle"
          heading={content.principleHeading}
          paragraphs={content.principle}
        />
        <ProseSection
          id="why-it-matters"
          heading={content.whyItMattersHeading}
          paragraphs={content.whyItMatters}
        />
        <ProseSection
          id="responsibilities"
          heading={content.responsibilitiesHeading}
          paragraphs={content.responsibilities}
        />

        {content.boundaries.length > 0 ? (
          <ScopePanel
            id="boundaries"
            variant="safety-boundary"
            title={content.boundariesHeading}
          >
            {content.boundaries.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ScopePanel>
        ) : null}

        <ProseSection
          id="controls"
          heading={content.controlsHeading}
          paragraphs={content.controls}
        />

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

        {content.limitations.length > 0 ? (
          <ScopePanel
            id="limitations"
            variant="limitation"
            title={content.limitationsHeading}
          >
            {content.limitations.map((paragraph) => (
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
