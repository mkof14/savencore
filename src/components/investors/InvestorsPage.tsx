import Image from "next/image";
import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import type { Locale } from "@/config/locales";
import type { InvestorsPageContent } from "@/content/investors/page-en";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./investors-page.css";

type InvestorsPageProps = {
  locale: Locale;
  content: InvestorsPageContent;
};

function path(locale: Locale, href: string) {
  return localizePath(locale, href as PublishedRoute);
}

/**
 * Dedicated Investors brochure — capital / trust / clarity (D-0246).
 * Site theme tokens; no neon clone; D-0062 claim rules.
 */
export function InvestorsPage({ locale, content }: InvestorsPageProps) {
  const titleId = "investors-page-title";

  return (
    <article className="inv-page" aria-labelledby={titleId}>
      <header className="inv-page__hero">
        <div className="inv-page__hero-atmosphere" aria-hidden="true" />
        <div className="inv-page__hero-grid" aria-hidden="true" />
        <div className="inv-page__hero-inner">
          <div className="inv-page__hero-copy">
            <div className="inv-page__hero-meta">
              <p className="inv-page__label">{content.label}</p>
              <p className="inv-page__status">{content.status}</p>
            </div>
            <p className="inv-page__brand">
              <BrandName variant="title" className="inv-page__brand-name" />
            </p>
            <h1 id={titleId} className="inv-page__title">
              {content.hero.title}
            </h1>
            <p className="inv-page__lede">{content.hero.lede}</p>
            <p className="inv-page__support">{content.hero.support}</p>
            <div className="inv-page__hero-actions">
              <Link
                className="inv-page__btn inv-page__btn--primary"
                href={path(locale, content.hero.primaryCta.href)}
              >
                {content.hero.primaryCta.label}
              </Link>
              <Link
                className="inv-page__btn inv-page__btn--ghost"
                href={path(locale, content.hero.secondaryCta.href)}
              >
                {content.hero.secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="inv-page__hero-visual">
            <div className="inv-page__hero-frame" aria-hidden="true">
              <span className="inv-page__corner inv-page__corner--tl" />
              <span className="inv-page__corner inv-page__corner--tr" />
              <span className="inv-page__corner inv-page__corner--bl" />
              <span className="inv-page__corner inv-page__corner--br" />
            </div>
            <Image
              src="/domain/company/investors.webp"
              alt=""
              width={960}
              height={640}
              priority
              className="inv-page__hero-image"
              sizes="(max-width: 860px) 92vw, 28rem"
              quality={80}
            />
          </div>
        </div>
      </header>

      <div className="inv-page__body">
        <section
          className="inv-page__section"
          aria-labelledby="inv-thesis-title"
        >
          <h2 id="inv-thesis-title" className="inv-page__section-title">
            {content.thesis.heading}
          </h2>
          <div className="inv-page__prose">
            {content.thesis.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
          <ul className="inv-page__point-grid">
            {content.thesis.points.map((point) => (
              <li key={point.id} className="inv-page__point">
                <h3 className="inv-page__point-title">{point.title}</h3>
                <p className="inv-page__point-text">{point.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="inv-page__section inv-page__section--field"
          aria-labelledby="inv-sequence-title"
        >
          <h2 id="inv-sequence-title" className="inv-page__section-title">
            {content.sequence.heading}
          </h2>
          <p className="inv-page__section-support">{content.sequence.support}</p>
          <ol className="inv-page__sequence">
            {content.sequence.steps.map((step, index) => (
              <li key={step.id} className="inv-page__sequence-step">
                <span className="inv-page__sequence-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="inv-page__sequence-title">{step.title}</h3>
                  <p className="inv-page__sequence-text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="inv-page__section"
          aria-labelledby="inv-building-title"
        >
          <h2 id="inv-building-title" className="inv-page__section-title">
            {content.building.heading}
          </h2>
          <p className="inv-page__section-support">{content.building.support}</p>
          <ul className="inv-page__card-grid">
            {content.building.items.map((item) => {
              const inner = (
                <>
                  <div className="inv-page__card-meta">
                    {item.status ? (
                      <span className="inv-page__chip">{item.status}</span>
                    ) : null}
                  </div>
                  <h3 className="inv-page__card-title">{item.title}</h3>
                  <p className="inv-page__card-text">{item.text}</p>
                </>
              );
              return (
                <li key={item.id} className="inv-page__card">
                  {item.href ? (
                    <Link
                      className="inv-page__card-link"
                      href={path(locale, item.href)}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="inv-page__card-static">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="inv-page__section"
          aria-labelledby="inv-capital-title"
        >
          <h2 id="inv-capital-title" className="inv-page__section-title">
            {content.capital.heading}
          </h2>
          <p className="inv-page__section-support">{content.capital.support}</p>
          <ul className="inv-page__point-grid inv-page__point-grid--two">
            {content.capital.categories.map((cat) => (
              <li key={cat.id} className="inv-page__point">
                <h3 className="inv-page__point-title">{cat.title}</h3>
                <p className="inv-page__point-text">{cat.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="inv-page__section inv-page__section--field"
          aria-labelledby="inv-engage-title"
        >
          <h2 id="inv-engage-title" className="inv-page__section-title">
            {content.engage.heading}
          </h2>
          <p className="inv-page__section-support">{content.engage.support}</p>
          <ul className="inv-page__card-grid inv-page__card-grid--four">
            {content.engage.audiences.map((aud) => (
              <li key={aud.id} className="inv-page__card inv-page__card--quiet">
                <div className="inv-page__card-static">
                  <h3 className="inv-page__card-title">{aud.title}</h3>
                  <p className="inv-page__card-text">{aud.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="inv-page__section"
          aria-labelledby="inv-why-title"
        >
          <h2 id="inv-why-title" className="inv-page__section-title">
            {content.whyNow.heading}
          </h2>
          <p className="inv-page__section-support">{content.whyNow.support}</p>
          <ul className="inv-page__point-grid">
            {content.whyNow.items.map((item) => (
              <li key={item.id} className="inv-page__point">
                <h3 className="inv-page__point-title">{item.title}</h3>
                <p className="inv-page__point-text">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="inv-page__section inv-page__section--risk"
          aria-labelledby="inv-risk-title"
        >
          <h2 id="inv-risk-title" className="inv-page__section-title">
            {content.risk.heading}
          </h2>
          <div className="inv-page__prose">
            {content.risk.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </section>

        <section
          className="inv-page__cta"
          aria-labelledby="inv-cta-title"
        >
          <h2 id="inv-cta-title" className="inv-page__cta-title">
            {content.cta.heading}
          </h2>
          <p className="inv-page__cta-support">{content.cta.support}</p>
          <div className="inv-page__hero-actions">
            <Link
              className="inv-page__btn inv-page__btn--primary"
              href={path(locale, content.cta.primaryCta.href)}
            >
              {content.cta.primaryCta.label}
            </Link>
            <Link
              className="inv-page__btn inv-page__btn--ghost"
              href={path(locale, content.cta.secondaryCta.href)}
            >
              {content.cta.secondaryCta.label}
            </Link>
          </div>
        </section>

        <nav
          className="inv-page__explore"
          aria-labelledby="inv-explore-title"
        >
          <h2 id="inv-explore-title" className="inv-page__explore-title">
            {content.explore.heading}
          </h2>
          <ul className="inv-page__explore-list">
            {content.explore.links.map((link) => (
              <li key={link.href}>
                <Link
                  className="inv-page__explore-link"
                  href={path(locale, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </article>
  );
}
