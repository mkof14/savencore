import Link from "next/link";

import type { Locale } from "@/config/locales";
import { companyOverviewContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type CompanyOverviewProps = {
  locale: Locale;
};

export function CompanyOverview({ locale }: CompanyOverviewProps) {
  const content = companyOverviewContent;

  return (
    <section
      className="home-section home-company"
      aria-labelledby="company-overview-heading"
    >
      <div className="home__inner home-company__layout">
        <div className="home-company__editorial">
          <p className="home-section__label">{content.label}</p>
          <h2 id="company-overview-heading" className="home-section__heading">
            {content.heading}
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="home-section__body">
              {paragraph}
            </p>
          ))}
          <div className="home-company__actions">
            <Link
              href={localizePath(locale, content.primaryLink.href)}
              className="home-action"
            >
              {content.primaryLink.label}
            </Link>
            <Link
              href={localizePath(locale, content.secondaryLink.href)}
              className="home-action home-action--secondary"
            >
              {content.secondaryLink.label}
            </Link>
          </div>
        </div>

        <ul className="home-company__principles">
          {content.principles.map((principle, index) => (
            <li key={principle.id} className="home-company__principle">
              <span className="home-company__principle-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="home-company__principle-title">
                {principle.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
