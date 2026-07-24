import Link from "next/link";

import type { Locale } from "@/config/locales";
import { systemsOverviewContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type SystemsOverviewProps = {
  locale: Locale;
};

export function SystemsOverview({ locale }: SystemsOverviewProps) {
  const content = systemsOverviewContent;

  return (
    <section
      className="home-section home-systems"
      aria-labelledby="systems-overview-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="systems-overview-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ol className="home-systems__list">
          {content.systems.map((system, index) => (
            <li key={system.id} className="home-systems__item">
              <div className="home-systems__meta">
                <span className="home-systems__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="home-systems__role">{system.role}</p>
              </div>
              <div className="home-systems__body">
                <h3 className="home-systems__title">{system.title}</h3>
                <p className="home-systems__text">{system.description}</p>
                <Link
                  href={localizePath(locale, system.href)}
                  className="home-systems__link"
                >
                  {content.linkLabel}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
