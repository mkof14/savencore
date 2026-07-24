import Link from "next/link";

import type { Locale } from "@/config/locales";
import { applicationContextsContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type ApplicationContextsProps = {
  locale: Locale;
};

export function ApplicationContexts({ locale }: ApplicationContextsProps) {
  const content = applicationContextsContent;

  return (
    <section
      className="home-section home-contexts"
      aria-labelledby="application-contexts-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="application-contexts-heading" className="home-section__heading">
          {content.heading}
        </h2>

        <ul className="home-contexts__list">
          {content.items.map((item) => (
            <li key={item.id} className="home-contexts__item">
              <h3 className="home-contexts__title">{item.title}</h3>
              <p className="home-contexts__text">{item.text}</p>
              <Link
                href={localizePath(locale, item.href)}
                className="home-contexts__link"
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
