import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getLegalDraftBanner,
  getLegalLastUpdatedLabel,
} from "@/content/legal/types";
import type { LegalPageContent } from "@/content/legal/types";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { legalNavChildren } from "@/navigation/site-navigation";

import "./legal.css";

type LegalDraftPageProps = {
  locale: Locale;
  content: LegalPageContent;
};

function legalNavEntryKey(href: string): string | undefined {
  const match = href.match(/^\/legal\/([^/]+)\/?$/);
  if (!match) return undefined;
  return `footer-legal-${match[1]}`;
}

export function LegalDraftPage({ locale, content }: LegalDraftPageProps) {
  const ui = getUi(locale);

  return (
    <article className="legal-page page page--legal">
      <header className="legal-page__masthead">
        <div className="page-shell__inner">
          <p className="legal-page__eyebrow">{ui.footer.legal}</p>
          <h1 className="legal-page__title">{content.title}</h1>
          <p className="legal-page__summary">{content.summary}</p>
          <p className="legal-page__meta">
            <span>{ui.legal.lastUpdated}</span>
            <span aria-hidden="true"> · </span>
            <span>{getLegalLastUpdatedLabel(locale)}</span>
          </p>
          <p className="legal-page__banner" role="status">
            {getLegalDraftBanner(locale)}
          </p>
        </div>
      </header>

      <div className="page-shell__inner legal-page__body">
        <div className="legal-page__content">
          {content.sections.map((section) => (
            <section key={section.title} className="legal-page__section">
              <h2 className="legal-page__section-title">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="legal-page__p">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside className="legal-page__aside" aria-label={ui.footer.legal}>
          <p className="legal-page__aside-title">{ui.legal.related}</p>
          <ul className="legal-page__aside-list">
            {legalNavChildren.map((item) => {
              const href = localizePath(locale, item.href);
              const current = item.href === `/legal/${content.slug}/`;
              const entryKey = legalNavEntryKey(item.href);
              const label =
                (entryKey &&
                  ui.navEntries[entryKey as keyof typeof ui.navEntries]) ||
                item.label;

              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    className="legal-page__aside-link"
                    aria-current={current ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </article>
  );
}
