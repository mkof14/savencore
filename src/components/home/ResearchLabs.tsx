import Link from "next/link";

import type { Locale } from "@/config/locales";
import { researchLabsContent } from "@/content/home/en";
import { localizePath } from "@/navigation/locale-path";

type ResearchLabsProps = {
  locale: Locale;
};

export function ResearchLabs({ locale }: ResearchLabsProps) {
  const content = researchLabsContent;

  return (
    <section
      className="home-section home-research-labs"
      aria-labelledby="research-labs-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="research-labs-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <div className="home-research-labs__layers">
          {content.layers.map((layer) => (
            <article
              key={layer.id}
              className={`home-research-labs__layer home-research-labs__layer--${layer.id}`}
            >
              <h3 className="home-research-labs__title">{layer.title}</h3>
              <p className="home-research-labs__text">{layer.description}</p>
              <Link
                href={localizePath(locale, layer.href)}
                className="home-research-labs__link"
              >
                {layer.linkLabel}
              </Link>
            </article>
          ))}
        </div>

        <p className="home-research-labs__relationship">
          {content.relationship}
        </p>
      </div>
    </section>
  );
}
