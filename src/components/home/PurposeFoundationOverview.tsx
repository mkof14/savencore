import Link from "next/link";

import type { Locale } from "@/config/locales";
import { purposeFoundationHomeContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type PurposeFoundationOverviewProps = {
  locale: Locale;
};

export function PurposeFoundationOverview({
  locale,
}: PurposeFoundationOverviewProps) {
  const content = purposeFoundationHomeContent;

  return (
    <section
      className="home-region home-purpose-foundation"
      aria-labelledby="purpose-foundation-heading"
    >
      <div className="home__inner home-purpose-foundation__grid">
        <div className="home-purpose-foundation__editorial">
          <p className="home-region__label">{content.label}</p>
          <h2 id="purpose-foundation-heading" className="home-region__heading">
            {content.heading}
          </h2>
          <p className="home-region__body">{content.purpose}</p>
          <Link
            href={localizePath(locale, content.purposeLink.href)}
            className="home-text-link"
          >
            {content.purposeLink.label}
          </Link>
        </div>

        <div className="home-purpose-foundation__foundation">
          <ol className="home-purpose-foundation__stages">
            {content.stages.map((stage, index) => (
              <li key={stage.id} className="home-purpose-foundation__stage">
                <span
                  className="home-purpose-foundation__index"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="home-purpose-foundation__stage-title">
                    {stage.title}
                  </h3>
                  <p className="home-purpose-foundation__stage-role">
                    {stage.role}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href={localizePath(locale, content.foundationLink.href)}
            className="home-text-link"
          >
            {content.foundationLink.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
