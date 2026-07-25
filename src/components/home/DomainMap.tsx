import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type DomainMapProps = {
  locale: Locale;
};

/** Topic map — connections without long prose. */
export function DomainMap({ locale }: DomainMapProps) {
  const content = getHomeContent(locale);
  const ui = getUi(locale);

  return (
    <section className="kx-domain-map" aria-labelledby="domain-map-heading">
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">{ui.home.discover}</p>
          <h2 id="domain-map-heading" className="kx-section-header__title">
            {ui.home.architectureDependencies}
          </h2>
        </header>

        <ol className="kx-domain-map__board" aria-label={ui.home.domainMap}>
          {content.domainMapSteps.map((step, index) => (
            <li key={step.id} className="kx-domain-map__step">
              <Link
                href={localizePath(locale, step.href)}
                className="kx-domain-map__node"
              >
                <span className="kx-domain-map__coord" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="kx-domain-map__label">{step.label}</span>
              </Link>
              {index < content.domainMapSteps.length - 1 ? (
                <div className="kx-domain-map__bridge" aria-hidden="true">
                  <span className="kx-domain-map__arrow">↓</span>
                  <span className="kx-domain-map__verb">
                    {content.domainMapSteps[index + 1]?.dependency}
                  </span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <ul
          className="kx-domain-map__deps"
          aria-label={ui.home.architectureDependencies}
        >
          {content.domainMapConstraints.map((item) => (
            <li key={item}>
              <span className="kx-domain-map__dep-mark" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
