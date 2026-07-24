import Link from "next/link";

import type { Locale } from "@/config/locales";
import { technologySystemsHomeContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type TechnologySystemsDirectoryProps = {
  locale: Locale;
};

export function TechnologySystemsDirectory({
  locale,
}: TechnologySystemsDirectoryProps) {
  const content = technologySystemsHomeContent;

  return (
    <section
      className="home-region home-tech-systems"
      aria-labelledby="technology-systems-heading"
    >
      <div className="home__inner">
        <p className="home-region__label">{content.label}</p>
        <h2 id="technology-systems-heading" className="home-region__heading">
          {content.heading}
        </h2>

        <div className="home-tech-systems__directories">
          <div className="home-tech-systems__column">
            <div className="home-tech-systems__column-head">
              <h3 className="home-tech-systems__column-title">
                {content.technology.title}
              </h3>
              <Link
                href={localizePath(locale, content.technology.href)}
                className="home-text-link"
              >
                {content.technology.linkLabel}
              </Link>
            </div>
            <ol className="home-tech-systems__list">
              {content.technology.items.map((item, index) => (
                <li key={item.id} className="home-tech-systems__row">
                  <span className="home-tech-systems__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-tech-systems__name">{item.title}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="home-tech-systems__column">
            <div className="home-tech-systems__column-head">
              <h3 className="home-tech-systems__column-title">
                {content.systems.title}
              </h3>
              <Link
                href={localizePath(locale, content.systems.href)}
                className="home-text-link"
              >
                {content.systems.linkLabel}
              </Link>
            </div>
            <ol className="home-tech-systems__list">
              {content.systems.items.map((item, index) => (
                <li key={item.id} className="home-tech-systems__row">
                  <span className="home-tech-systems__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="home-tech-systems__entry">
                    <span className="home-tech-systems__name">{item.title}</span>
                    <span className="home-tech-systems__role">{item.role}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
