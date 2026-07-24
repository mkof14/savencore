import Link from "next/link";

import type { Locale } from "@/config/locales";
import { knowledgeExplorerDomains } from "@/content/home/knowledge-explorer";
import { localizePath } from "@/navigation/locale-path";

type KnowledgeExplorerProps = {
  locale: Locale;
};

/**
 * Central home Knowledge Explorer — domain cards with published pages.
 */
export function KnowledgeExplorer({ locale }: KnowledgeExplorerProps) {
  return (
    <section
      className="kx-explorer"
      aria-labelledby="knowledge-explorer-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">Knowledge Explorer</p>
          <h2 id="knowledge-explorer-heading" className="kx-section-header__title">
            Major domains
          </h2>
        </header>

        <ul className="kx-explorer__grid">
          {knowledgeExplorerDomains.map((domain, index) => (
            <li key={domain.id} className={`kx-domain-card kx-domain-card--${domain.id}`}>
              <article className="kx-domain-card__inner">
                <p className="kx-domain-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="kx-domain-card__title">{domain.title}</h3>
                <p className="kx-domain-card__purpose">{domain.purpose}</p>
                <div className="kx-domain-card__pages">
                  <p className="kx-domain-card__pages-label">Published pages</p>
                  <ul className="kx-domain-card__page-list">
                    {domain.pages.map((page) => (
                      <li key={page}>{page}</li>
                    ))}
                  </ul>
                </div>
                <p className="kx-domain-card__relationship">
                  <span className="kx-domain-card__relationship-label">
                    Relationships
                  </span>
                  {domain.relationships}
                </p>
                <Link
                  href={localizePath(locale, domain.href)}
                  className="kx-domain-card__action"
                >
                  Open <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
