import dynamic from "next/dynamic";
import Link from "next/link";

import { BrandName } from "@/components/brand/BrandName";
import type { Locale } from "@/config/locales";
import { getPhysicalWorldHomeContent } from "@/content/home/physical-world/get-physical-world-content";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./physical-world-home.css";

const HeroLivingMedia = dynamic(
  () => import("./HeroLivingMedia").then((mod) => mod.HeroLivingMedia),
  { ssr: true },
);

const LivingDomains = dynamic(
  () => import("./LivingDomains").then((mod) => mod.LivingDomains),
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
 * Homepage — first seconds: what SAVEN is (living photoreal hero),
 * then one care-focused living carousel, then blended closing meaning band.
 */
export function PhysicalWorldHome({ locale }: PhysicalWorldHomeProps) {
  const c = getPhysicalWorldHomeContent(locale);
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

  return (
    <article className="pw-home">
      {/* LCP hint for the dominant hero collage panel */}
      <link
        rel="preload"
        as="image"
        href="/home/hero-collage/01-manipulator.webp"
        type="image/webp"
      />
      <header className="pw-hero">
        <div className="pw-hero__copy">
          <div className="pw-hero__scrim" aria-hidden="true" />
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
        <HeroLivingMedia />
      </header>

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
        {/* Soft top overlay only — never crops the graphic */}
        <div className="pw-closing__fade-top" aria-hidden="true" />
        <picture className="pw-closing__picture">
          <source srcSet="/home/saven-closing-bg.webp" type="image/webp" />
          <img
            className="pw-closing__bg"
            src="/home/saven-closing-bg.jpg"
            alt={c.closing.alt}
            width={1280}
            height={853}
            decoding="async"
            loading="lazy"
          />
        </picture>
        {/* Footer blend after the banner so tagline stays fully visible */}
        <div className="pw-closing__fade-bottom" aria-hidden="true" />
        <div className="pw-closing__copy visually-hidden">
          <h2 id="pw-closing-title">{c.closing.heading}</h2>
          <p>{c.closing.pillars}</p>
          <p>{c.closing.tagline}</p>
        </div>
      </section>
    </article>
  );
}
