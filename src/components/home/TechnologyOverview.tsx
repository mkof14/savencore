import Link from "next/link";

import type { Locale } from "@/config/locales";
import { technologyOverviewContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type TechnologyOverviewProps = {
  locale: Locale;
};

export function TechnologyOverview({ locale }: TechnologyOverviewProps) {
  const content = technologyOverviewContent;

  return (
    <section
      className="home-section home-technology"
      aria-labelledby="technology-overview-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="technology-overview-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ul className="home-technology__list">
          {content.areas.map((area, index) => (
            <li key={area.id} className="home-technology__item">
              <span className="home-technology__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="home-technology__body">
                <h3 className="home-technology__title">{area.title}</h3>
                <p className="home-technology__text">{area.description}</p>
                <Link
                  href={localizePath(locale, area.href)}
                  className="home-technology__link"
                >
                  {content.linkLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
