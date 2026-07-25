import { KnowledgeHero, SignalDiagram } from "@/components/engineering";
import { EntityRelationshipIndex } from "@/components/knowledge/EntityRelationshipIndex";
import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import { PageRelatedLinks } from "@/components/pages/PageRelatedLinks";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { ResearchPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";

type ResearchPageProps = {
  locale: Locale;
  content: ResearchPageContent;
  /** Canonical entity id for the compact relationship block. */
  relationsEntityId?: string;
};

export function ResearchPage({
  locale,
  content,
  relationsEntityId,
}: ResearchPageProps) {
  const titleId = "page-title";

  return (
    <article className="page page--research" aria-labelledby={titleId}>
      <KnowledgeHero
        locale={locale}
        domain="research"
        label={content.label}
        title={content.title}
        titleId={titleId}
        explanation={content.introduction}
        {...(content.status ? { status: content.status } : {})}
        visualization={<SignalDiagram variant="research-overview" />}
      />

      {content.sectionNav ? (
        <PageSectionNav items={content.sectionNav} />
      ) : null}

      <KnowledgeObjectFrame
        locale={locale}
        input={{
          knowledgeId: "page-research",
          href: "/research/",
          title: content.label,
          domain: "Research",
          entityId: "research-areas",
          metadata: {
            category: "Research",
            documentType: "Research",
            status: "Research",
            relatedDomain: "Technology, Systems",
          },
          ...(content.status ? { currentScope: content.status } : {}),
        }}
        between={
          content.relatedLinks ? (
            <PageRelatedLinks locale={locale} links={content.relatedLinks} />
          ) : null
        }
      >
        {content.filterLabels && content.filterLabels.length > 0 ? (
          <div className="page-filters" aria-label="Research categories">
            <p className="page-filters__label">Categories</p>
            <ul className="page-filters__list">
              {content.filterLabels.map((filterLabel) => (
                <li key={filterLabel} className="page-filters__item">
                  <span className="page-filters__chip">{filterLabel}</span>
                </li>
              ))}
            </ul>
            <p className="page-filters__note">
              Category filters are structural placeholders and are not
              interactive in this phase.
            </p>
          </div>
        ) : null}

        <section
          id="research-areas"
          className="page-research-areas"
          aria-labelledby="research-areas-heading"
        >
          <h2 id="research-areas-heading" className="page-research-areas__heading">
            Research sections
          </h2>
          <ul className="page-research-areas__list">
            {content.areas.map((area) => (
              <li key={area.id} className="page-research-areas__item">
                <h3 className="page-research-areas__title">{area.title}</h3>
                <p className="page-research-areas__text">{area.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        {relationsEntityId ? (
          <div id="research-relations" className="page-research-relations">
            <EntityRelationshipIndex
              locale={locale}
              entityId={relationsEntityId}
              heading="Related domains"
            />
          </div>
        ) : null}

        {content.entries && content.entries.length > 0 ? (
          <section
            id="research-entries"
            className="page-research-entries"
            aria-labelledby="research-entries-heading"
          >
            <h2
              id="research-entries-heading"
              className="page-research-entries__heading"
            >
              {content.entriesHeading ?? "Documents"}
            </h2>
            <ul className="page-research-entries__list">
              {content.entries.map((entry) => (
                <li key={entry.id} className="page-research-entries__item">
                  <h3 className="page-research-entries__title">{entry.title}</h3>
                  {entry.meta ? (
                    <p className="page-research-entries__meta">{entry.meta}</p>
                  ) : null}
                  <p className="page-research-entries__text">{entry.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </KnowledgeObjectFrame>
    </article>
  );
}
