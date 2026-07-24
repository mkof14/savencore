import { ArchitectureDiagram } from "@/components/pages/ArchitectureDiagram";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageRelatedLinks } from "@/components/pages/PageRelatedLinks";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { TechnicalPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";

type TechnicalPageProps = {
  locale: Locale;
  content: TechnicalPageContent;
};

export function TechnicalPage({ locale, content }: TechnicalPageProps) {
  const titleId = "page-title";
  const hierarchyDiagram = content.diagrams?.find((d) => d.kind === "hierarchy");
  const otherDiagrams =
    content.diagrams?.filter((d) => d.kind !== "hierarchy") ?? [];

  return (
    <article className="page page--technical" aria-labelledby={titleId}>
      <PageMasthead
        label={content.label}
        title={content.title}
        titleId={titleId}
        introduction={content.introduction}
        {...(content.status ? { status: content.status } : {})}
      />

      {content.developmentNote ? (
        <div className="page-dev-note">
          <div className="page-shell__inner">
            <p className="page-dev-note__text">{content.developmentNote}</p>
          </div>
        </div>
      ) : null}

      {content.sectionNav ? (
        <PageSectionNav items={content.sectionNav} />
      ) : null}

      <div className="page-body">
        <div className="page-shell__inner">
          {hierarchyDiagram ? (
            <div id="foundation-hierarchy" className="page-diagram-slot">
              <ArchitectureDiagram diagram={hierarchyDiagram} />
            </div>
          ) : null}

          {content.layers?.map((layer) => (
            <section
              key={layer.id}
              id={layer.id}
              className="page-layer"
              aria-labelledby={`${layer.id}-heading`}
            >
              <h2 id={`${layer.id}-heading`} className="page-layer__title">
                {layer.title}
              </h2>
              <ul className="page-layer__fields">
                {layer.fields.map((field) => (
                  <li key={field.id} className="page-layer__field">
                    <h3 className="page-layer__field-heading">{field.title}</h3>
                    <p className="page-layer__field-text">{field.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {otherDiagrams.map((diagram) => (
            <ArchitectureDiagram key={diagram.id} diagram={diagram} />
          ))}

          {content.architectureSections?.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="page-tech-section"
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className="page-tech-section__title"
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="page-tech-section__text">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {content.indexedItems && content.indexedItems.length > 0 ? (
            <section
              id="indexed-items"
              className="page-index"
              aria-labelledby="page-index-heading"
            >
              <h2 id="page-index-heading" className="page-index__heading">
                {content.indexedItemsHeading ?? "Structure"}
              </h2>
              <ol className="page-index__list">
                {content.indexedItems.map((item, index) => (
                  <li key={item.id} className="page-index__item">
                    <span className="page-index__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="page-index__body">
                      <h3 className="page-index__title">{item.title}</h3>
                      {item.role ? (
                        <p className="page-index__role">{item.role}</p>
                      ) : null}
                      <p className="page-index__text">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </div>
      </div>

      {content.relatedLinks ? (
        <PageRelatedLinks
          locale={locale}
          links={content.relatedLinks}
          heading={content.relatedLinksHeading ?? "Related Pages"}
        />
      ) : null}
    </article>
  );
}
