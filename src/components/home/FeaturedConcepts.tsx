import Link from "next/link";

import "@/components/knowledge-object/knowledge-object.css";
import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type FeaturedConceptsProps = {
  locale: Locale;
};

/** Featured concepts — clear entry cards. */
export function FeaturedConcepts({ locale }: FeaturedConceptsProps) {
  const concepts = getHomeContent(locale).featuredConcepts;
  const ui = getUi(locale);

  return (
    <section
      className="kx-featured"
      aria-labelledby="featured-concepts-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">
            {ui.home.featuredConcepts}
          </p>
          <h2
            id="featured-concepts-heading"
            className="kx-section-header__title"
          >
            {ui.home.startWithCore}
          </h2>
        </header>

        <ul className="kx-featured__grid">
          {concepts.map((concept, index) => (
            <li key={concept.id} className="kx-concept-card">
              <article className="kx-concept-card__inner">
                <p className="kx-concept-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="kx-concept-card__role">{concept.role}</p>
                <h3 className="kx-concept-card__title">{concept.title}</h3>
                <p className="ko-ref">
                  <span>{ui.home.knowledgeId}</span>
                  <span className="ko-ref__id">{concept.knowledgeId}</span>
                </p>
                <p className="kx-concept-card__note">{concept.note}</p>
                <Link
                  href={localizePath(locale, concept.href)}
                  className="kx-concept-card__action"
                >
                  {ui.common.openArrow} <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
