import Image from "next/image";
import Link from "next/link";

import { BioMathCoreCategoryIcon } from "@/components/foundation/BioMathCoreCategoryIcon";
import type { Locale } from "@/config/locales";
import type { BioMathCorePageContent } from "@/content/pages/en/biomath-core";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./biomath-core-page.css";

type BioMathCorePageProps = {
  locale: Locale;
  content: BioMathCorePageContent;
};

/**
 * BioMath Core leaf — logo + sphere hero, foundation sequence,
 * reports→actions callout, and site-native health category grid (D-0228).
 */
export function BioMathCorePage({ locale, content }: BioMathCorePageProps) {
  const titleId = "bmc-page-title";

  return (
    <article className="bmc-page" aria-labelledby={titleId}>
      <header className="bmc-page__hero">
        <div className="bmc-page__hero-glow" aria-hidden="true" />
        <div className="bmc-page__hero-inner">
          <div className="bmc-page__hero-copy">
            <p className="bmc-page__label">{content.label}</p>
            <p className="bmc-page__status">{content.status}</p>
            <div className="bmc-page__logo-wrap">
              <Image
                src="/brand/biomath-core-logo.png"
                alt={content.hero.logoAlt}
                width={480}
                height={160}
                priority
                className="bmc-page__logo"
              />
            </div>
            <h1 id={titleId} className="bmc-page__title">
              {content.title}
            </h1>
            <p className="bmc-page__lede">{content.lede}</p>
          </div>
          <div className="bmc-page__hero-visual">
            <Image
              src="/domain/foundation/biomath-core-sphere.png"
              alt={content.hero.visualAlt}
              width={480}
              height={480}
              priority
              className="bmc-page__sphere"
            />
          </div>
        </div>
      </header>

      <div className="bmc-page__body">
        <section
          className="bmc-page__section bmc-page__sequence"
          aria-labelledby="bmc-sequence-title"
        >
          <h2 id="bmc-sequence-title" className="bmc-page__section-title">
            {content.sequence.heading}
          </h2>
          <p className="bmc-page__section-support">{content.sequence.support}</p>
          <ol className="bmc-page__sequence-list">
            {content.sequence.steps.map((step, index) => (
              <li
                key={step.id}
                className={
                  step.emphasis
                    ? "bmc-page__sequence-item bmc-page__sequence-item--emphasis"
                    : "bmc-page__sequence-item"
                }
              >
                {index > 0 ? (
                  <span className="bmc-page__sequence-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <span className="bmc-page__sequence-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="bmc-page__section"
          aria-labelledby="bmc-role-title"
        >
          <h2 id="bmc-role-title" className="bmc-page__section-title">
            {content.role.heading}
          </h2>
          {content.role.paragraphs.map((paragraph) => (
            <p key={paragraph} className="bmc-page__paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          className="bmc-page__section"
          aria-labelledby="bmc-hdm-title"
        >
          <h2 id="bmc-hdm-title" className="bmc-page__section-title">
            {content.humanData.heading}
          </h2>
          {content.humanData.paragraphs.map((paragraph) => (
            <p key={paragraph} className="bmc-page__paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          className="bmc-page__section bmc-page__callout"
          aria-labelledby="bmc-reports-title"
        >
          <p className="bmc-page__callout-eyebrow">{content.reportsCallout.eyebrow}</p>
          <h2 id="bmc-reports-title" className="bmc-page__section-title">
            {content.reportsCallout.title}
          </h2>
          <p className="bmc-page__paragraph">{content.reportsCallout.body}</p>
          <p className="bmc-page__callout-scope">
            {content.reportsCallout.scopeLine}
          </p>
        </section>

        <section
          className="bmc-page__section bmc-page__categories"
          aria-labelledby="bmc-categories-title"
        >
          <div className="bmc-page__categories-intro">
            <h2 id="bmc-categories-title" className="bmc-page__section-title">
              {content.categories.heading}
            </h2>
            <p className="bmc-page__section-support">{content.categories.subtitle}</p>
          </div>
          <ul className="bmc-page__category-grid">
            {content.categories.cards.map((card) => (
              <li key={card.id} className={`bmc-page__category-card bmc-page__category-card--${card.id}`}>
                <span className="bmc-page__category-label">{card.label}</span>
                <span className="bmc-page__category-icon" aria-hidden="true">
                  <BioMathCoreCategoryIcon id={card.id} />
                </span>
              </li>
            ))}
          </ul>
          <p className="bmc-page__categories-disclaimer">
            {content.categories.disclaimer}
          </p>
        </section>

        <section
          className="bmc-page__section bmc-page__paths"
          aria-labelledby="bmc-paths-title"
        >
          <h2 id="bmc-paths-title" className="bmc-page__section-title">
            {content.paths.heading}
          </h2>
          <p className="bmc-page__section-support">{content.paths.support}</p>
          <ul className="bmc-page__path-list">
            {content.paths.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(locale, link.href as PublishedRoute)}
                  className="bmc-page__path-link"
                >
                  <span className="bmc-page__path-label">{link.label}</span>
                  {link.note ? (
                    <span className="bmc-page__path-note">{link.note}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="bmc-page__note">{content.note}</p>
      </div>
    </article>
  );
}
