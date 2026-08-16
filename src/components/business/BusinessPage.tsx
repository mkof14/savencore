import Image from "next/image";
import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import { BusinessSectionBody } from "@/components/business/BusinessSectionBody";
import { BusinessSectionNav } from "@/components/business/BusinessSectionNav";
import type { Locale } from "@/config/locales";
import type { BusinessPageContent } from "@/content/business/page-en";
import {
  businessSectionPath,
  type BusinessSectionId,
} from "@/content/business/sections";
import { BUSINESS_SECTION_VISUALS } from "@/content/business/visuals";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./business-page.css";

type BusinessPageProps = {
  locale: Locale;
  content: BusinessPageContent;
  /** null = Business hub */
  sectionId: BusinessSectionId | null;
};

function path(locale: Locale, href: string) {
  return localizePath(locale, href as PublishedRoute);
}

/**
 * Business hub + section leaves (D-0291).
 * Short pages with visual heroes — not one long reading scroll.
 */
export function BusinessPage({ locale, content, sectionId }: BusinessPageProps) {
  const titleId = "business-page-title";
  const isHub = sectionId === null;
  const activeNav = isHub
    ? null
    : content.nav.find((item) => item.id === sectionId) ?? null;
  const pageTitle = isHub
    ? content.hero.title
    : (activeNav?.label ?? content.hero.title);
  const visual = sectionId
    ? BUSINESS_SECTION_VISUALS[sectionId]
    : {
        image: "/domain/company/scene-long-horizon.webp",
        accent: "gold" as const,
      };

  return (
    <article
      className={
        isHub
          ? "biz-page"
          : `biz-page biz-page--section biz-page--accent-${visual.accent}`
      }
      aria-labelledby={titleId}
    >
      <header
        className={
          isHub ? "biz-page__hero" : "biz-page__hero biz-page__hero--compact"
        }
      >
        <div className="biz-page__hero-atmosphere" aria-hidden="true" />
        <div className="biz-page__hero-grid" aria-hidden="true" />
        <div className="biz-page__hero-inner">
          <div className="biz-page__hero-copy">
            {!isHub ? (
              <p className="biz-page__back biz-page__back--hero">
                <Link
                  href={path(locale, "/business/")}
                  className="biz-page__back-link"
                >
                  <span className="biz-page__back-arrow" aria-hidden="true">
                    ←
                  </span>
                  {content.backLabel}
                </Link>
              </p>
            ) : null}
            <div className="biz-page__hero-meta">
              <p className="biz-page__label">{content.label}</p>
              <p className="biz-page__status">{content.status}</p>
            </div>
            <p className="biz-page__brand">
              <BrandName variant="title" className="biz-page__brand-name" />
            </p>
            <h1 id={titleId} className="biz-page__title">
              {pageTitle}
            </h1>
            {isHub ? (
              <p className="biz-page__lede">{content.hero.lede}</p>
            ) : null}
          </div>
          <div className="biz-page__hero-visual">
            <div className="biz-page__hero-frame">
              <span className="biz-page__corner biz-page__corner--tl" aria-hidden="true" />
              <span className="biz-page__corner biz-page__corner--tr" aria-hidden="true" />
              <span className="biz-page__corner biz-page__corner--bl" aria-hidden="true" />
              <span className="biz-page__corner biz-page__corner--br" aria-hidden="true" />
              <Image
                src={visual.image}
                alt=""
                width={960}
                height={720}
                priority
                className="biz-page__hero-image"
                sizes="(max-width: 860px) 92vw, 28rem"
                quality={80}
              />
              <div className="biz-page__hero-scrim" aria-hidden="true" />
            </div>
          </div>
        </div>
      </header>

      <div className="biz-page__shell">
        <div className="biz-page__layout">
          <BusinessSectionNav
            locale={locale}
            navLabel={content.navLabel}
            mobileNavLabel={content.mobileNavLabel}
            items={content.nav}
            activeId={sectionId}
          />

          <div className="biz-page__main">
            {isHub ? (
              <section
                className="biz-page__section biz-page__section--hub"
                aria-label={content.navLabel}
              >
                <ul className="biz-page__hub-grid">
                  {content.nav.map((item) => {
                    const cardVisual = BUSINESS_SECTION_VISUALS[item.id];
                    return (
                      <li key={item.id}>
                        <Link
                          href={path(locale, businessSectionPath(item.id))}
                          className={`biz-page__hub-card biz-page__hub-card--${cardVisual.accent}`}
                        >
                          <span
                            className="biz-page__hub-card-media"
                            aria-hidden="true"
                          >
                            <Image
                              src={cardVisual.image}
                              alt=""
                              fill
                              sizes="(max-width: 720px) 100vw, 18rem"
                              className="biz-page__hub-card-image"
                              quality={75}
                            />
                            <span className="biz-page__hub-card-shade" />
                          </span>
                          <span className="biz-page__hub-card-body">
                            <span className="biz-page__hub-card-title">
                              {item.label}
                            </span>
                            <span className="biz-page__hub-card-action">
                              {content.hub.openLabel}
                              <span aria-hidden="true"> →</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : (
              <BusinessSectionBody
                locale={locale}
                content={content}
                sectionId={sectionId}
              />
            )}

            <aside className="biz-page__sources" aria-labelledby="biz-sources">
              <h2 id="biz-sources" className="biz-page__sources-title">
                {content.sources.heading}
              </h2>
              <ul className="biz-page__sources-list">
                {content.sources.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>

            <nav className="biz-page__explore" aria-labelledby="biz-explore">
              <h2 id="biz-explore" className="biz-page__explore-heading">
                {content.explore.heading}
              </h2>
              <ul className="biz-page__explore-list">
                {content.explore.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={path(locale, link.href)}
                      className="biz-page__explore-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}
