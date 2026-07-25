import Link from "next/link";

import "@/components/knowledge-object/knowledge-object.css";
import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getCatalogEntryByHref } from "@/content/knowledge-objects";
import { getNavEntryLabel } from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type KnowledgeExplorerProps = {
  locale: Locale;
};

/** Central home topic explorer. */
export function KnowledgeExplorer({ locale }: KnowledgeExplorerProps) {
  const domains = getHomeContent(locale).explorerDomains;
  const ui = getUi(locale);

  return (
    <section
      className="kx-explorer"
      aria-labelledby="knowledge-explorer-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">{ui.home.knowledgeExplorer}</p>
          <h2
            id="knowledge-explorer-heading"
            className="kx-section-header__title"
          >
            {ui.home.majorDomains}
          </h2>
        </header>

        <ul className="kx-explorer__grid">
          {domains.map((domain, index) => {
            const knowledge = getCatalogEntryByHref(domain.href);
            return (
              <li
                key={domain.id}
                className={`kx-domain-card kx-domain-card--${domain.id}`}
              >
                <article className="kx-domain-card__inner">
                  <p className="kx-domain-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="kx-domain-card__title">{domain.title}</h3>
                  {knowledge ? (
                    <p className="ko-ref">
                      <span>{ui.home.knowledgeId}</span>
                      <span className="ko-ref__id">
                        {knowledge.knowledgeId}
                      </span>
                    </p>
                  ) : null}
                  <p className="kx-domain-card__purpose">{domain.purpose}</p>
                  <div className="kx-domain-card__pages">
                    <p className="kx-domain-card__pages-label">
                      {ui.home.publishedPages}
                    </p>
                    <ul className="kx-domain-card__page-list">
                      {domain.pageIds.map((pageId) => (
                        <li key={pageId}>
                          {getNavEntryLabel(locale, pageId, pageId)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="kx-domain-card__relationship">
                    <span className="kx-domain-card__relationship-label">
                      {ui.home.relationships}
                    </span>
                    {domain.relationships}
                  </p>
                  <Link
                    href={localizePath(locale, domain.href)}
                    className="kx-domain-card__action"
                  >
                    {ui.common.openArrow}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
