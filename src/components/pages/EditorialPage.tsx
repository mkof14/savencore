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
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="page-editorial-section__text">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {content.principles && content.principles.length > 0 ? (
            <section
              className="page-principles"
              aria-labelledby="page-principles-heading"
            >
              <h2 id="page-principles-heading" className="page-principles__heading">
                Principles
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
        <PageRelatedLinks locale={locale} links={content.relatedLinks} />
      ) : null}
    </article>
  );
}
