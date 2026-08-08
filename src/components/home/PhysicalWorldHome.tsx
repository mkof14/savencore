import dynamic from "next/dynamic";
import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import { HOME_CLARITY_V1_ENABLED } from "@/config/home-clarity";
import type { Locale } from "@/config/locales";
import { getPhysicalWorldHomeContent } from "@/content/home/physical-world/get-physical-world-content";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import { HeroParticleStage } from "./HeroParticleStage";
import { HomeClarityPack } from "./HomeClarityPack";
import { HomeYoutubeFeature } from "./HomeYoutubeFeature";
import "./physical-world-home.css";

const LivingDomains = dynamic(
  () => import("./LivingDomains").then((mod) => mod.LivingDomains),
  { ssr: true },
);

const ClosingExploreMap = dynamic(
  () => import("./ClosingExploreMap").then((mod) => mod.ClosingExploreMap),
  { ssr: true },
);

type PhysicalWorldHomeProps = {
  locale: Locale;
};

/** Care scene → published Applications routes only (D-0208). */
const LIVING_SRC: Record<
  string,
  {
    webp: string;
    jpg: string;
    href: PublishedRoute;
    linkNavId: string;
    linkFallbackLabel: string;
  }
> = {
  "hospital-care": {
    webp: "/home/care/hospital-care.webp",
    jpg: "/home/care/hospital-care.jpg",
    href: "/applications/healthcare/",
    linkNavId: "applications-healthcare",
    linkFallbackLabel: "Healthcare",
  },
  "home-care": {
    webp: "/home/care/home-care.webp",
    jpg: "/home/care/home-care.jpg",
    href: "/applications/home/",
    linkNavId: "applications-home",
    linkFallbackLabel: "Home Application",
  },
  "children-family": {
    webp: "/home/care/children-family.webp",
    jpg: "/home/care/children-family.jpg",
    href: "/applications/home/",
    linkNavId: "applications-home",
    linkFallbackLabel: "Home Application",
  },
  emergency: {
    webp: "/home/care/emergency.webp",
    jpg: "/home/care/emergency.jpg",
    href: "/applications/emergency/",
    linkNavId: "applications-emergency",
    linkFallbackLabel: "Emergency",
  },
  surgical: {
    webp: "/home/care/surgical.webp",
    jpg: "/home/care/surgical.jpg",
    href: "/applications/hospitals/",
    linkNavId: "applications-hospitals",
    linkFallbackLabel: "Hospitals",
  },
  "rural-remote": {
    webp: "/home/care/rural-remote.webp",
    jpg: "/home/care/rural-remote.jpg",
    href: "/applications/healthcare/",
    linkNavId: "applications-healthcare",
    linkFallbackLabel: "Healthcare",
  },
  "mental-health": {
    webp: "/home/care/mental-health.webp",
    jpg: "/home/care/mental-health.jpg",
    href: "/applications/healthcare/",
    linkNavId: "applications-healthcare",
    linkFallbackLabel: "Healthcare",
  },
  "disaster-relief": {
    webp: "/home/care/disaster-relief.webp",
    jpg: "/home/care/disaster-relief.jpg",
    href: "/applications/emergency/",
    linkNavId: "applications-emergency",
    linkFallbackLabel: "Emergency",
  },
};

/**
 * Homepage — particle morph stage first (D-0255), then brand copy,
 * optional clarity pack (D-0219), care living carousel, then closing meaning band.
 */
export function PhysicalWorldHome({ locale }: PhysicalWorldHomeProps) {
  const c = getPhysicalWorldHomeContent(locale);
  const ui = getUi(locale);
  const livingScenes = c.living.scenes.map((scene) => {
    const media = LIVING_SRC[scene.id];
    if (!media) {
      return {
        ...scene,
        webp: "",
        jpg: "",
      };
    }
    return {
      ...scene,
      webp: media.webp,
      jpg: media.jpg,
      href: media.href,
      linkNavId: media.linkNavId,
      linkFallbackLabel: media.linkFallbackLabel,
    };
  });

  const showClarity = HOME_CLARITY_V1_ENABLED && Boolean(c.clarity);

  return (
    <article className="pw-home">
      {/* LCP hint for particle stage poster (reduced-motion / pre-WebGL) */}
      <link
        rel="preload"
        as="image"
        href="/home/particle-hero/poster.webp"
        type="image/webp"
      />
      <HeroParticleStage ariaLabel={ui.home.particleHeroLabel} />
      <header className="pw-hero pw-hero--after-particles">
        <div className="pw-hero__copy">
          <div className="pw-hero__grain" aria-hidden="true" />
          <div className="pw-home__inner pw-hero__frame">
            <p className="pw-hero__brand">
              <BrandName variant="title" />
            </p>
            <h1 className="pw-hero__title">{c.heroLine}</h1>
            <p className="pw-hero__breath">{c.oneBreath}</p>
            <ul className="pw-hero__builds" aria-label={c.buildsLabel}>
              {c.builds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pw-hero__tagline">{c.tagline}</p>
            <p className="pw-hero__cue">{c.cue}</p>
          </div>
        </div>
      </header>

      {showClarity && c.clarity ? (
        <HomeClarityPack
          locale={locale}
          clarity={c.clarity}
          pillars={c.closing.map}
          slot="post-hero"
        />
      ) : null}

      {/* Full-bleed living→closing: one background plane, no letterboxed light strip */}
      <div className="pw-living-block">
        <LivingDomains
          locale={locale}
          className="pw-domains--primary"
          titleId="pw-living-title"
          railLabel={c.living.railLabel}
          headline={c.living.headline}
          support={c.living.support}
          scenes={livingScenes}
          {...(showClarity && c.living.whyLabel && c.living.whyLine
            ? { whyLabel: c.living.whyLabel, whyLine: c.living.whyLine }
            : {})}
        />
        <div className="pw-home__inner pw-domains__deepen-row">
          <p className="pw-domains__deepen">
            <Link href={localizePath(locale, c.living.deepenHref)}>
              {c.living.deepenLabel}
              <span aria-hidden="true"> →</span>
            </Link>
          </p>
        </div>
      </div>

      {showClarity && c.clarity ? (
        <HomeClarityPack
          locale={locale}
          clarity={c.clarity}
          pillars={c.closing.map}
          slot="post-living"
        />
      ) : null}

      {c.flagships ? (
        <section className="pw-flagships" aria-labelledby="pw-flagships-title">
          <div className="pw-home__inner pw-flagships__inner">
            <div className="pw-flagships__intro">
              <h2 id="pw-flagships-title" className="pw-flagships__title">
                {c.flagships.headline}
              </h2>
              <p className="pw-flagships__support">{c.flagships.support}</p>
            </div>
            <div className="pw-flagships__table-wrap">
              <table className="pw-flagships__table">
                <thead>
                  <tr>
                    <th scope="col">{c.flagships.columns.workstream}</th>
                    <th scope="col">{c.flagships.columns.status}</th>
                    <th scope="col">{c.flagships.columns.note}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.flagships.items.map((item) => (
                    <tr key={item.href}>
                      <th scope="row">
                        <Link
                          href={localizePath(locale, item.href)}
                          className="pw-flagships__row-link"
                        >
                          {item.label}
                          <span aria-hidden="true"> →</span>
                        </Link>
                      </th>
                      <td>
                        <span className="pw-flagships__status">{item.status}</span>
                      </td>
                      <td>{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pw-closing" aria-labelledby="pw-closing-title">
        {/* Soft section transition above the framed artboard (D-0249) */}
        <div className="pw-closing__fade-top" aria-hidden="true" />
        {/* Same shell + frame width as HomeYoutubeFeature below (D-0249) */}
        <div className="pw-home__inner pw-closing__shell">
          <div className="pw-closing__stage">
            <picture className="pw-closing__picture">
              <source srcSet="/home/saven-closing-bg.webp" type="image/webp" />
              <img
                className="pw-closing__bg"
                src="/home/saven-closing-bg.jpg"
                alt=""
                width={1024}
                height={682}
                decoding="async"
                loading="lazy"
              />
            </picture>
            <ClosingExploreMap
              locale={locale}
              exploreLabel={c.closing.exploreLabel}
              exploreHint={c.closing.exploreHint}
              goDeeper={c.closing.goDeeper}
              pillars={c.closing.map}
              wordmarkLabel={c.closing.wordmarkLabel}
              corners={c.closing.corners}
            />
          </div>
        </div>
        {/* Page blend into YouTube band / footer — outside the framed stage */}
        <div className="pw-closing__fade-bottom" aria-hidden="true" />
        <div className="pw-closing__copy visually-hidden">
          <h2 id="pw-closing-title">{c.closing.heading}</h2>
          <p>{c.closing.pillars}</p>
          <p>{c.closing.tagline}</p>
          <p>{c.closing.alt}</p>
        </div>
      </section>

      {/* Strong YouTube band after Explore map, before SiteFooter (D-0245) */}
      <HomeYoutubeFeature locale={locale} />
    </article>
  );
}
