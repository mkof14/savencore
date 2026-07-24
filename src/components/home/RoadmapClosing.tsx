import Link from "next/link";

import type { Locale } from "@/config/locales";
import { roadmapClosingContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type RoadmapClosingProps = {
  locale: Locale;
};

export function RoadmapClosing({ locale }: RoadmapClosingProps) {
  const content = roadmapClosingContent;

  return (
    <section
      className="home-section home-roadmap"
      aria-labelledby="roadmap-closing-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="roadmap-closing-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ul className="home-roadmap__categories">
          {content.categories.map((category) => (
            <li key={category.id} className="home-roadmap__category">
              <h3 className="home-roadmap__category-title">{category.title}</h3>
              <p className="home-roadmap__category-text">
                {category.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="home-roadmap__close">
          <p className="home-roadmap__statement">{content.closingStatement}</p>
          <Link
            href={localizePath(locale, content.primaryLink.href)}
            className="home-roadmap__link"
          >
            {content.primaryLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
