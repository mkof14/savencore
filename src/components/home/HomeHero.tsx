import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type HomeHeroProps = {
  locale: Locale;
};

/** Home hero — brand, short explanation, and architecture chain. */
export function HomeHero({ locale }: HomeHeroProps) {
  const content = getHomeContent(locale).hero;
  const chain = getHomeContent(locale).architectureChain;
  const ui = getUi(locale);

  return (
    <section className="kx-hero" aria-labelledby="home-hero-heading">
      <div className="home__inner kx-hero__frame">
        <div className="kx-hero__copy">
          <p className="kx-hero__brand">{content.brand}</p>
          <h1 id="home-hero-heading" className="kx-hero__sentence">
            {content.sentence}
          </h1>
          <p className="kx-hero__explanation">{content.explanation}</p>
          <p className="kx-hero__status">
            <span className="kx-hero__status-mark" aria-hidden="true" />
            <span className="kx-hero__status-label">
              {ui.home.developmentStatus}
            </span>
            <span className="kx-hero__status-text">{content.status}</span>
          </p>
        </div>

        <figure className="kx-hero__diagram">
          <figcaption className="kx-hero__diagram-caption">
            <span className="kx-hero__diagram-kicker">
              {ui.home.understand}
            </span>
            <span className="kx-hero__diagram-text">
              {ui.home.architectureOverviewText}
            </span>
          </figcaption>
          <ol
            className="kx-arch-chain"
            aria-label={ui.home.architectureOverview}
          >
            {chain.map((node, index) => (
              <li key={node.id} className="kx-arch-chain__item">
                {node.href ? (
                  <Link
                    href={localizePath(locale, node.href)}
                    className="kx-arch-chain__node kx-arch-chain__node--link"
                  >
                    <span className="kx-arch-chain__dot" aria-hidden="true" />
                    <span className="kx-arch-chain__label">{node.label}</span>
                  </Link>
                ) : (
                  <div className="kx-arch-chain__node">
                    <span className="kx-arch-chain__dot" aria-hidden="true" />
                    <span className="kx-arch-chain__label">{node.label}</span>
                  </div>
                )}
                {index < chain.length - 1 ? (
                  <span className="kx-arch-chain__path" aria-hidden="true">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
