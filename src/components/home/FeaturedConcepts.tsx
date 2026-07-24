import Link from "next/link";

import type { Locale } from "@/config/locales";
import { featuredConcepts } from "@/content/home/knowledge-explorer";
import { localizePath } from "@/navigation/locale-path";

type FeaturedConceptsProps = {
  locale: Locale;
};

/**
 * Featured engineering concepts — visual entry cards.
 */
export function FeaturedConcepts({ locale }: FeaturedConceptsProps) {
  return (
    <section
      className="kx-featured"
      aria-labelledby="featured-concepts-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">Featured concepts</p>
          <h2 id="featured-concepts-heading" className="kx-section-header__title">
            Start with core architecture
          </h2>
        </header>

        <ul className="kx-featured__grid">
          {featuredConcepts.map((concept, index) => (
            <li key={concept.id} className="kx-concept-card">
              <article className="kx-concept-card__inner">
                <p className="kx-concept-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="kx-concept-card__role">{concept.role}</p>
                <h3 className="kx-concept-card__title">{concept.title}</h3>
                <p className="kx-concept-card__note">{concept.note}</p>
                <Link
                  href={localizePath(locale, concept.href)}
                  className="kx-concept-card__action"
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
