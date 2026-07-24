import Link from "next/link";

import type { Locale } from "@/config/locales";
import { homeHeroContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type HomeHeroProps = {
  locale: Locale;
};

export function HomeHero({ locale }: HomeHeroProps) {
  const content = homeHeroContent;

  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home__inner home-hero__grid">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">{content.eyebrow}</p>
          <h1 id="home-hero-heading" className="home-hero__heading">
            {content.heading}
          </h1>
          <p className="home-hero__supporting">{content.supporting}</p>
          <p className="home-hero__status">{content.statusLine}</p>
          <div className="home-hero__actions">
            <Link
              href={localizePath(locale, content.primaryLink.href)}
              className="home-action"
            >
              {content.primaryLink.label}
            </Link>
            <Link
              href={localizePath(locale, content.secondaryLink.href)}
              className="home-action home-action--secondary"
            >
              {content.secondaryLink.label}
            </Link>
          </div>
        </div>

        <div
          className="home-hero__field"
          aria-hidden="true"
        >
          <span className="home-hero__field-line home-hero__field-line--h1" />
          <span className="home-hero__field-line home-hero__field-line--h2" />
          <span className="home-hero__field-line home-hero__field-line--v1" />
          <span className="home-hero__field-line home-hero__field-line--v2" />
          <span className="home-hero__field-block home-hero__field-block--a" />
          <span className="home-hero__field-block home-hero__field-block--b" />
          <div className="home-hero__field-meta">
            <span>SYS / FIELD</span>
            <span>COORD 01.24</span>
            <span>REF HUMAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
