import { ArchitectureDiagram } from "@/components/pages/ArchitectureDiagram";
import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageRelatedLinks } from "@/components/pages/PageRelatedLinks";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { EditorialPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";

type EditorialPageProps = {
  locale: Locale;
  content: EditorialPageContent;
};

export function EditorialPage({ locale, content }: EditorialPageProps) {
  const titleId = "page-title";

  return (
    <article className="page page--editorial" aria-labelledby={titleId}>
      <PageMasthead
        label={content.label}
        title={content.title}
        titleId={titleId}
        introduction={content.introduction}
        {...(content.status ? { status: content.status } : {})}
      />

      {content.sectionNav ? (
        <PageSectionNav items={content.sectionNav} />
      ) : null}

      <div className="page-body">
        <div className="page-shell__inner page-body__editorial">
          {content.diagrams?.map((diagram) => (
            <ArchitectureDiagram key={diagram.id} diagram={diagram} />
          ))}

          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="page-editorial-section"
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className="page-editorial-section__title"
              >
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="page-editorial-section__text">
                  {paragraph}
                </p>
              ))}
              {section.subsections && section.subsections.length > 0 ? (
                <ul className="page-editorial-subsections">
                  {section.subsections.map((subsection) => (
                    <li
                      key={subsection.id}
                      id={subsection.id}
                      className="page-editorial-subsection"
                    >
                      <h3 className="page-editorial-subsection__title">
                        {subsection.title}
                      </h3>
                      {subsection.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="page-editorial-subsection__text"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {content.principles && content.principles.length > 0 ? (
            <section
              id="principles"
              className="page-principles"
              aria-labelledby="page-principles-heading"
            >
              <h2
                id="page-principles-heading"
                className="page-principles__heading"
              >
                {content.principlesHeading ?? "Principles"}
              </h2>
              <ul className="page-principles__list">
                {content.principles.map((principle) => (
                  <li key={principle.id} className="page-principles__item">
                    <h3 className="page-principles__title">{principle.title}</h3>
                    <p className="page-principles__text">{principle.text}</p>
                  </li>
                ))}
              </ul>
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
