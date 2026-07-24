import Link from "next/link";

import type { Locale } from "@/config/locales";
import { researchTrustHomeContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type ResearchTrustOverviewProps = {
  locale: Locale;
};

export function ResearchTrustOverview({ locale }: ResearchTrustOverviewProps) {
  const content = researchTrustHomeContent;

  return (
    <section
      className="home-region home-research-trust"
      aria-labelledby="research-trust-heading"
    >
      <div className="home__inner">
        <p className="home-region__label">{content.label}</p>
        <h2 id="research-trust-heading" className="home-region__heading">
          {content.heading}
        </h2>

        <ul className="home-research-trust__columns">
          {content.columns.map((column) => (
            <li key={column.id} className="home-research-trust__column">
              <h3 className="home-research-trust__title">{column.title}</h3>
              <p className="home-research-trust__text">{column.description}</p>
              <Link
                href={localizePath(locale, column.href)}
                className="home-text-link"
              >
                {column.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
