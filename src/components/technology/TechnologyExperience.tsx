import Link from "next/link";

import { KnowledgeObjectFrame } from "@/components/knowledge-object";
import type { Locale } from "@/config/locales";
import {
  getEntitiesByDomain,
  getEntityById,
} from "@/content/knowledge/entity-registry";
import type { TechnologyPageContent } from "@/content/pages/en/technology";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { technologyNavChildren } from "@/navigation/site-navigation";

import "./technology-experience.css";

type TechnologyExperienceProps = {
  locale: Locale;
  content: TechnologyPageContent;
};

const FOUNDATION_LAYERS = [
  {
    id: "human-data",
    href: "/technology/human-data/",
    level: "L1",
    role: "Signals",
    className: "tech-x-strata__layer--l1",
  },
  {
    id: "human-data-model",
    href: "/technology/human-data-model/",
    level: "L2",
    role: "Schema",
    className: "tech-x-strata__layer--l2",
  },
  {
    id: "data-infrastructure",
    href: "/technology/data-infrastructure/",
    level: "L3",
    role: "Availability",
    className: "tech-x-strata__layer--l3",
  },
] as const;

/**
 * Technology domain — cross-section experience.
 * Designed as a product surface, not a documentation template.
 */
export function TechnologyExperience({
  locale,
  content,
}: TechnologyExperienceProps) {
  const titleId = "page-title";
  const ui = getUi(locale);

  const disciplines = technologyNavChildren
    .filter((item) => item.href !== "/technology/")
    .map((item, index) => {
      const entityId = item.id.replace(/^technology-/, "");
      const entity = getEntityById(entityId);
      return {
        id: item.id,
        href: item.href,
        title: item.label,
        note: entity?.summary ?? item.label,
        code: `TEC-${String(index + 1).padStart(2, "0")}`,
      };
    });

  const foundationNames = Object.fromEntries(
    FOUNDATION_LAYERS.map((layer) => {
      const entity = getEntityById(layer.id);
      return [layer.id, entity?.title ?? layer.id] as const;
    }),
  );

  const idea =
    content.overview[0] ??
    "Shared technical disciplines must be defined before systems can assist people under clear limits.";

  return (
    <article className="tech-x" aria-labelledby={titleId}>
      <header className="tech-x-hero">
        <div className="tech-x__inner tech-x-hero__topline">
          <p className="tech-x-hero__domain">{content.label}</p>
          <p className="tech-x-hero__scope">
            {ui.scope["current-scope"]} · {content.metadata.status}
          </p>
        </div>

        <div className="tech-x__inner tech-x-hero__statement">
          <h1 id={titleId} className="tech-x-hero__title">
            {content.title}
          </h1>
          <p className="tech-x-hero__lede">{content.introduction}</p>
        </div>

        <figure className="tech-x-strata">
          <figcaption className="tech-x-strata__caption">
            <strong>Foundation cross-section</strong>
            <span>What must exist before Systems.</span>
          </figcaption>
          <ol className="tech-x-strata__stack">
            {FOUNDATION_LAYERS.map((layer) => (
              <li key={layer.id}>
                <Link
                  href={localizePath(locale, layer.href)}
                  className={`tech-x-strata__layer ${layer.className}`}
                >
                  <span className="tech-x-strata__index">{layer.level}</span>
                  <span className="tech-x-strata__name">
                    {foundationNames[layer.id]}
                  </span>
                  <span className="tech-x-strata__role">{layer.role}</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link
            href={localizePath(locale, "/systems/")}
            className="tech-x-strata__outlet"
          >
            <span className="tech-x-strata__outlet-mark">Into Systems</span>
            <span aria-hidden="true">→</span>
          </Link>
        </figure>
      </header>

      <section className="tech-x-idea" aria-labelledby="tech-idea-heading">
        <div className="tech-x__inner">
          <p className="tech-x-idea__kicker" id="tech-idea-heading">
            Why Technology exists
          </p>
          <p className="tech-x-idea__text">{idea}</p>
          {content.overview[1] ? (
            <p className="tech-x-idea__support">{content.overview[1]}</p>
          ) : null}
        </div>
      </section>

      <section
        className="tech-x-gallery"
        aria-labelledby="tech-gallery-heading"
        id="technology-categories"
      >
        <div className="tech-x__inner">
          <header className="tech-x-gallery__header">
            <p className="tech-x-gallery__kicker">Disciplines</p>
            <h2 id="tech-gallery-heading" className="tech-x-gallery__title">
              {content.categoriesHeading}
            </h2>
          </header>
          <ul className="tech-x-gallery__rail">
            {disciplines.map((item) => (
              <li key={item.id}>
                <Link
                  href={localizePath(locale, item.href)}
                  className="tech-x-gallery__item"
                >
                  <span className="tech-x-gallery__code">{item.code}</span>
                  <div>
                    <h3 className="tech-x-gallery__name">{item.title}</h3>
                    <p className="tech-x-gallery__note">{item.note}</p>
                  </div>
                  <span className="tech-x-gallery__go">
                    {ui.common.openArrow} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="tech-x-principles"
        aria-labelledby="engineering-principles-heading"
        id="engineering-principles"
      >
        <div className="tech-x__inner">
          <h2
            id="engineering-principles-heading"
            className="tech-x-principles__title"
          >
            {content.principlesHeading}
          </h2>
          <ol className="tech-x-principles__list">
            {content.principles.map((principle, index) => (
              <li key={principle.id} className="tech-x-principles__item">
                <span className="tech-x-principles__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="tech-x-principles__name">{principle.title}</h3>
                  <p className="tech-x-principles__text">{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tech-x-next" aria-labelledby="tech-next-heading">
        <div className="tech-x__inner">
          <p className="tech-x-next__kicker">Continue</p>
          <h2 id="tech-next-heading" className="tech-x-next__title">
            Foundations become coordination.
          </h2>
          <p className="tech-x-next__text">
            When the technical layers are clear, Systems can organize them —
            still under Trust limits.
          </p>
          <div className="tech-x-next__actions">
            <Link
              href={localizePath(locale, "/technology/human-data/")}
              className="tech-x-next__link tech-x-next__link--primary"
            >
              Begin with Human Data <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={localizePath(locale, "/systems/")}
              className="tech-x-next__link"
            >
              Open Systems <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="tech-x-dossier">
        <KnowledgeObjectFrame
          locale={locale}
          domain="technology"
          input={{
            knowledgeId: "page-technology",
            href: "/technology/",
            title: content.label,
            domain: "Technology",
            metadata: content.metadata,
            currentScope: content.developmentNote,
          }}
        >
          <section
            id="current-development-scope"
            aria-labelledby="tech-scope-heading"
          >
            <h2 id="tech-scope-heading">{content.scopeHeading}</h2>
            {content.scope.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
          <section id="future-expansion" aria-labelledby="tech-future-heading">
            <h2 id="tech-future-heading">{content.futureHeading}</h2>
            <p>{content.futureIntro}</p>
            <ul>
              {getEntitiesByDomain("technology").flatMap((entity) =>
                entity.futureTopics.map((topic, index) => (
                  <li key={`${entity.id}-future-${index}`}>
                    <strong>{entity.title}</strong> — {topic}
                  </li>
                )),
              )}
            </ul>
          </section>
          <section id="reference-links" aria-labelledby="tech-ref-heading">
            <h2 id="tech-ref-heading">{content.referenceHeading}</h2>
            <ul>
              {content.referenceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={localizePath(locale, link.href)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </KnowledgeObjectFrame>
      </div>
    </article>
  );
}
