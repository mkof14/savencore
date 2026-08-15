import Image from "next/image";
import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import { BusinessSectionBody } from "@/components/business/BusinessSectionBody";
import { BusinessSectionNav } from "@/components/business/BusinessSectionNav";
import type { Locale } from "@/config/locales";
import type { BusinessPageContent } from "@/content/business/page-en";
import {
  BUSINESS_SECTION_IDS,
  businessSectionPath,
  type BusinessSectionId,
} from "@/content/business/sections";
import { BUSINESS_SECTION_VISUALS } from "@/content/business/visuals";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./business-page.css";

type BusinessShellProps = {
  locale: Locale;
  content: BusinessPageContent;
  /** null = hub overview */
  sectionId: BusinessSectionId | null;
};

function path(locale: Locale, href: string) {
  return localizePath(locale, href as PublishedRoute);
}

function sectionIndex(id: BusinessSectionId): string {
  const i = BUSINESS_SECTION_IDS.indexOf(id);
  return String(i + 1).padStart(2, "0");
}

/**
 * Business shell — living hub / section grammar (D-0287–D-0289).
 * Visual atmosphere + approved domain imagery; calm Link navigation.
 */
export function BusinessPage({ locale, content, sectionId }: BusinessShellProps) {
  const titleId = "business-page-title";
  const isHub = sectionId === null;
  const activeNav = isHub
    ? null
    : content.nav.find((item) => item.id === sectionId) ?? null;
  const pageTitle = isHub
    ? content.hero.title
    : (activeNav?.label ?? content.hero.title);
  const visual = sectionId ? BUSINESS_SECTION_VISUALS[sectionId] : null;

  const sectionPos = sectionId
    ? BUSINESS_SECTION_IDS.indexOf(sectionId)
    : -1;
  const prevId =
    sectionPos > 0 ? BUSINESS_SECTION_IDS[sectionPos - 1] : null;
  const nextId =
    sectionPos >= 0 && sectionPos < BUSINESS_SECTION_IDS.length - 1
      ? BUSINESS_SECTION_IDS[sectionPos + 1]
      : null;
  const prevLabel = prevId
    ? content.nav.find((n) => n.id === prevId)?.label
    : null;
  const nextLabel = nextId
    ? content.nav.find((n) => n.id === nextId)?.label
    : null;

  return (
    <article
      className={
        isHub
          ? "biz-page"
          : `biz-page biz-page--section biz-page--accent-${visual?.accent ?? "gold"}`
      }
      aria-labelledby={titleId}
    >
      <header
        className={
          isHub
            ? "biz-page__hero"
            : "biz-page__hero biz-page__hero--compact"
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
              {!isHub && sectionId ? (
                <p className="biz-page__section-mark" aria-hidden="true">
                  {sectionIndex(sectionId)}
                </p>
              ) : null}
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
                src={
                  visual?.image ?? "/domain/company/scene-long-horizon.webp"
                }
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
            <section className="biz-page__section biz-page__section--hub" aria-labelledby="biz-hub">
              <div className="biz-page__hub-head">
                <h2 id="biz-hub" className="biz-page__section-title">
                  {content.hub.heading}
                </h2>
                <p className="biz-page__hub-lede">{content.hub.lede}</p>
              </div>
              <ul className="biz-page__hub-grid">
                {content.nav.map((item, index) => {
                  const cardVisual = BUSINESS_SECTION_VISUALS[item.id];
                  return (
                    <li key={item.id}>
                      <Link
                        href={path(locale, businessSectionPath(item.id))}
                        className={`biz-page__hub-card biz-page__hub-card--${cardVisual.accent}`}
                      >
                        <span className="biz-page__hub-card-media" aria-hidden="true">
                          <Image
                            src={cardVisual.image}
                            alt=""
                            fill
                            sizes="(max-width: 720px) 100vw, 18rem"
                            className="biz-page__hub-card-image"
                            quality={75}
                          />
                          <span className="biz-page__hub-card-shade" />
                          <span className="biz-page__hub-card-index">
                            {String(index + 1).padStart(2, "0")}
                          </span>
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
            <>
              <BusinessSectionBody
                locale={locale}
                content={content}
                sectionId={sectionId}
              />
              <nav className="biz-page__pager" aria-label={content.navLabel}>
                {prevId && prevLabel ? (
                  <Link
                    href={path(locale, businessSectionPath(prevId))}
                    className="biz-page__pager-link biz-page__pager-link--prev"
                  >
                    <span className="biz-page__pager-dir" aria-hidden="true">
                      ←
                    </span>
                    <span className="biz-page__pager-title">{prevLabel}</span>
                  </Link>
                ) : (
                  <Link
                    href={path(locale, "/business/")}
                    className="biz-page__pager-link biz-page__pager-link--prev"
                  >
                    <span className="biz-page__pager-dir" aria-hidden="true">
                      ←
                    </span>
                    <span className="biz-page__pager-title">{content.backLabel}</span>
                  </Link>
                )}
                {nextId && nextLabel ? (
                  <Link
                    href={path(locale, businessSectionPath(nextId))}
                    className="biz-page__pager-link biz-page__pager-link--next"
                  >
                    <span className="biz-page__pager-title">{nextLabel}</span>
                    <span className="biz-page__pager-dir" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ) : (
                  <span className="biz-page__pager-spacer" aria-hidden="true" />
                )}
              </nav>
            </>
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
    </article>
  );
}
