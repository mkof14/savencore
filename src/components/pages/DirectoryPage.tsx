import Link from "next/link";

import { PageMasthead } from "@/components/pages/PageMasthead";
import { PageRelatedLinks } from "@/components/pages/PageRelatedLinks";
import { PageSectionNav } from "@/components/pages/PageSectionNav";
import type { DirectoryPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type DirectoryPageProps = {
  locale: Locale;
  content: DirectoryPageContent;
};

export function DirectoryPage({ locale, content }: DirectoryPageProps) {
  const titleId = "page-title";

  return (
    <article className="page page--directory" aria-labelledby={titleId}>
      <PageMasthead
        label={content.label}
        title={content.title}
        titleId={titleId}
        introduction={content.introduction}
        {...(content.status ? { status: content.status } : {})}
      />

      {content.accessNote ? (
        <div className="page-access-note">
          <div className="page-shell__inner">
            <p className="page-access-note__text">{content.accessNote}</p>
          </div>
        </div>
      ) : null}

      {content.sectionNav ? (
        <PageSectionNav items={content.sectionNav} />
      ) : null}

      <div className="page-body">
        <div className="page-shell__inner">
          <div id="directory-entries" className="page-directory">
            <ul className="page-directory__list">
              {content.entries.map((entry) => (
                <li key={entry.id} className="page-directory__item">
                  <h2 className="page-directory__title">{entry.title}</h2>
                  <p className="page-directory__text">{entry.description}</p>
                  <Link
                    href={localizePath(locale, entry.href)}
                    className="page-directory__link"
                  >
                    {entry.linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {content.groups && content.groups.length > 0 ? (
            <section
              id="directory-groups"
              className="page-directory-groups"
              aria-labelledby="directory-groups-heading"
            >
              <h2
                id="directory-groups-heading"
                className="page-directory-groups__heading"
              >
                Related paths
              </h2>
              <div className="page-directory-groups__grid">
                {content.groups.map((group) => (
                  <div key={group.id} className="page-directory-groups__group">
                    <h3 className="page-directory-groups__title">
                      {group.title}
                    </h3>
                    <ul className="page-directory-groups__links">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={localizePath(locale, link.href)}
                            className="page-directory__link"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
