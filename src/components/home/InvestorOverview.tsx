import Link from "next/link";

import type { Locale } from "@/config/locales";
import { investorOverviewContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type InvestorOverviewProps = {
  locale: Locale;
};

export function InvestorOverview({ locale }: InvestorOverviewProps) {
  const content = investorOverviewContent;

  return (
    <section
      className="home-section home-investors"
      aria-labelledby="investor-overview-heading"
    >
      <div className="home__inner">
        <div className="home-investors__panel">
          <p className="home-section__label">{content.label}</p>
          <h2 id="investor-overview-heading" className="home-section__heading">
            {content.heading}
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="home-section__body">
              {paragraph}
            </p>
          ))}
          <div className="home-investors__actions">
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
      </div>
    </section>
  );
}
