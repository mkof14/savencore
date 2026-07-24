import Link from "next/link";

import type { Locale } from "@/config/locales";
import { knowledgeDomainMapSteps } from "@/content/home/knowledge-explorer";
import { localizePath } from "@/navigation/locale-path";

type DomainMapProps = {
  locale: Locale;
};

/**
 * Complete architecture map — dependencies without paragraph prose.
 */
export function DomainMap({ locale }: DomainMapProps) {
  return (
    <section className="kx-domain-map" aria-labelledby="domain-map-heading">
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">Domain map</p>
          <h2 id="domain-map-heading" className="kx-section-header__title">
            Architecture dependencies
          </h2>
        </header>

        <ol className="kx-domain-map__board" aria-label="Domain dependency map">
          {knowledgeDomainMapSteps.map((step, index) => (
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
              {index < knowledgeDomainMapSteps.length - 1 ? (
                <div className="kx-domain-map__bridge" aria-hidden="true">
                  <span className="kx-domain-map__arrow">↓</span>
                  <span className="kx-domain-map__verb">
                    {knowledgeDomainMapSteps[index + 1]?.dependency}
                  </span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <ul className="kx-domain-map__deps" aria-label="Cross-domain constraints">
          <li>
            <span className="kx-domain-map__dep-mark" aria-hidden="true" />
            Trust governs Technology, Systems and Applications
          </li>
          <li>
            <span className="kx-domain-map__dep-mark" aria-hidden="true" />
            Research informs Technology and Systems
          </li>
          <li>
            <span className="kx-domain-map__dep-mark" aria-hidden="true" />
            Applications operate after Systems coordination
          </li>
        </ul>
      </div>
    </section>
  );
}
