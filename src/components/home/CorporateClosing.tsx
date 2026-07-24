import Link from "next/link";

import type { Locale } from "@/config/locales";
import { corporateClosingHomeContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type CorporateClosingProps = {
  locale: Locale;
};

export function CorporateClosing({ locale }: CorporateClosingProps) {
  const content = corporateClosingHomeContent;

  return (
    <section
      className="home-region home-closing"
      aria-labelledby="corporate-closing-heading"
    >
      <div className="home__inner">
        <p className="home-region__label">{content.label}</p>
        <h2 id="corporate-closing-heading" className="home-region__heading">
          {content.heading}
        </h2>

        <ul className="home-closing__columns">
          {content.columns.map((column) => (
            <li key={column.id} className="home-closing__column">
              <h3 className="home-closing__title">{column.title}</h3>
              <p className="home-closing__text">{column.text}</p>
              <ul className="home-closing__links">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localizePath(locale, link.href)}
                      className="home-text-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="home-closing__statement">{content.closingStatement}</p>
      </div>
    </section>
  );
}
