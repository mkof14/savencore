import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getLegalDraftBanner } from "@/content/legal/types";
import { getNavEntryLabel } from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { legalNavChildren } from "@/navigation/site-navigation";

import "./legal.css";

type LegalIndexPageProps = {
  locale: Locale;
};

/** Structural Legal hub — lists published draft destinations (D-0181). */
export function LegalIndexPage({ locale }: LegalIndexPageProps) {
  const ui = getUi(locale);

  return (
    <article className="legal-page page page--legal">
      <header className="legal-page__masthead">
        <div className="page-shell__inner">
          <p className="legal-page__eyebrow">{ui.footer.legal}</p>
          <h1 className="legal-page__title">{ui.legal.indexTitle}</h1>
          <p className="legal-page__summary">{ui.legal.indexLead}</p>
          <p className="legal-page__banner" role="status">
            {getLegalDraftBanner(locale)}
          </p>
        </div>
      </header>

      <div className="page-shell__inner legal-page__body legal-page__body--index">
        <nav className="legal-page__index" aria-label={ui.legal.related}>
          <ul className="legal-page__index-list">
            {legalNavChildren.map((item) => (
              <li key={item.id}>
                <Link
                  href={localizePath(locale, item.href)}
                  className="legal-page__index-link"
                >
                  {getNavEntryLabel(locale, `footer-${item.id}`, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
