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
          {content.architectureSections.map((section) => (
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
        <PageRelatedLinks locale={locale} links={content.relatedLinks} />
      ) : null}
    </article>
  );
}
