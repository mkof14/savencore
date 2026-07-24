import Link from "next/link";

import type { Locale } from "@/config/locales";
import { applicationDirectoryHomeContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type ApplicationDirectoryProps = {
  locale: Locale;
};

export function ApplicationDirectory({ locale }: ApplicationDirectoryProps) {
  const content = applicationDirectoryHomeContent;

  return (
    <section
      className="home-region home-applications"
      aria-labelledby="applications-heading"
    >
      <div className="home__inner">
        <div className="home-applications__header">
          <div>
            <p className="home-region__label">{content.label}</p>
            <h2 id="applications-heading" className="home-region__heading">
              {content.heading}
            </h2>
          </div>
          <Link
            href={localizePath(locale, content.sectionLink.href)}
            className="home-text-link"
          >
            {content.sectionLink.label}
          </Link>
        </div>

        <ul className="home-applications__list">
          {content.items.map((item) => (
            <li key={item.id} className="home-applications__item">
              <h3 className="home-applications__title">{item.title}</h3>
              <p className="home-applications__text">{item.text}</p>
              <Link
                href={localizePath(locale, item.href)}
                className="home-text-link"
              >
                {item.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
