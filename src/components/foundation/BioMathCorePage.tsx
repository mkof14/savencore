import Image from "next/image";
import Link from "next/link";

import { BioMathCoreCategoryIcon } from "@/components/foundation/BioMathCoreCategoryIcon";
import {
  BlackBoxVisual,
  DualRolesVisual,
  EngineVisual,
  EnvironmentsVisual,
  FormulaVisual,
  LayerStackVisual,
  LivingModelVisual,
  OutputVisual,
  SecondOpinionVisual,
} from "@/components/foundation/BioMathCoreVisuals";
import type { Locale } from "@/config/locales";
import type { BioMathCorePageContent } from "@/content/pages/en/biomath-core";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

import "./biomath-core-page.css";

type BioMathCorePageProps = {
  locale: Locale;
  content: BioMathCorePageContent;
};

/**
 * BioMath Core leaf — site-native themeable capability components (D-0228–D-0233).
 */
export function BioMathCorePage({ locale, content }: BioMathCorePageProps) {
  const titleId = "bmc-page-title";

  return (
    <article className="bmc-page" aria-labelledby={titleId}>
      <header className="bmc-page__hero">
        <div className="bmc-page__hero-glow" aria-hidden="true" />
        <div className="bmc-page__hero-inner">
          <div className="bmc-page__hero-copy">
            <p className="bmc-page__label">{content.label}</p>
            <p className="bmc-page__status">{content.status}</p>
            <div className="bmc-page__logo-wrap">
              <Image
                src="/brand/biomath-core-logo.webp"
                alt={content.hero.logoAlt}
                width={96}
                height={100}
                priority
                className="bmc-page__logo"
              />
            </div>
            <h1 id={titleId} className="bmc-page__title">
              {content.title}
            </h1>
            <p className="bmc-page__lede">{content.lede}</p>
          </div>
          <div className="bmc-page__hero-visual">
            <Image
              src="/domain/foundation/biomath-core-sphere.png"
              alt={content.hero.visualAlt}
              width={480}
              height={480}
              priority
              className="bmc-page__sphere"
            />
          </div>
        </div>
      </header>

      <div className="bmc-page__body">
        <section
          className="bmc-page__section bmc-page__living"
          aria-labelledby="bmc-living-title"
        >
          <h2 id="bmc-living-title" className="bmc-page__section-title">
            {content.livingModel.heading}
          </h2>
          <p className="bmc-page__section-support">{content.livingModel.support}</p>
          <LivingModelVisual
            visualLabel={content.livingModel.visualLabel}
            badgeOne={content.livingModel.badgeOne}
            badgeHuman={content.livingModel.badgeHuman}
            points={content.livingModel.points}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__stack"
          aria-labelledby="bmc-stack-title"
        >
          <h2 id="bmc-stack-title" className="bmc-page__section-title">
            {content.layerStack.heading}
          </h2>
          <p className="bmc-page__section-support">{content.layerStack.support}</p>
          <LayerStackVisual
            layers={content.layerStack.layers}
            calloutEyebrow={content.layerStack.calloutEyebrow}
            callout={content.layerStack.callout}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__dual"
          aria-labelledby="bmc-dual-title"
        >
          <h2 id="bmc-dual-title" className="bmc-page__section-title">
            {content.dualRoles.heading}
          </h2>
          <p className="bmc-page__section-support">{content.dualRoles.support}</p>
          <DualRolesVisual
            biomath={content.dualRoles.biomath}
            saven={content.dualRoles.saven}
            banner={content.dualRoles.banner}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__engine"
          aria-labelledby="bmc-engine-title"
        >
          <h2 id="bmc-engine-title" className="bmc-page__section-title">
            {content.engine.heading}
          </h2>
          <p className="bmc-page__section-support">{content.engine.support}</p>
          <EngineVisual phases={content.engine.phases} />
        </section>

        <section
          className="bmc-page__section bmc-page__opinion"
          aria-labelledby="bmc-opinion-title"
        >
          <h2 id="bmc-opinion-title" className="bmc-page__section-title">
            {content.secondOpinion.heading}
          </h2>
          <p className="bmc-page__section-support">{content.secondOpinion.support}</p>
          <SecondOpinionVisual
            signalLabel={content.secondOpinion.signalLabel}
            resultLabel={content.secondOpinion.resultLabel}
            lanes={content.secondOpinion.lanes}
            dualModelHeading={content.secondOpinion.dualModelHeading}
            dualModelSteps={content.secondOpinion.dualModelSteps}
            insight={content.secondOpinion.insight}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__blackbox"
          aria-labelledby="bmc-blackbox-title"
        >
          <h2 id="bmc-blackbox-title" className="bmc-page__section-title">
            {content.blackBox.heading}
          </h2>
          <p className="bmc-page__section-support">{content.blackBox.support}</p>
          <BlackBoxVisual sides={content.blackBox.sides} />
        </section>

        <section
          className="bmc-page__section bmc-page__output"
          aria-labelledby="bmc-output-title"
        >
          <h2 id="bmc-output-title" className="bmc-page__section-title">
            {content.output.heading}
          </h2>
          <p className="bmc-page__section-support">{content.output.support}</p>
          <OutputVisual
            pillars={content.output.pillars}
            footer={content.output.footer}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__formula"
          aria-labelledby="bmc-formula-title"
        >
          <h2 id="bmc-formula-title" className="bmc-page__section-title">
            {content.formula.heading}
          </h2>
          <p className="bmc-page__section-support">{content.formula.support}</p>
          <FormulaVisual
            parts={content.formula.parts}
            equals={content.formula.equals}
            equalsDetail={content.formula.equalsDetail}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__envs"
          aria-labelledby="bmc-envs-title"
        >
          <h2 id="bmc-envs-title" className="bmc-page__section-title">
            {content.environments.heading}
          </h2>
          <p className="bmc-page__section-support">{content.environments.support}</p>
          <EnvironmentsVisual
            cards={content.environments.cards}
            footer={content.environments.footer}
          />
        </section>

        <section
          className="bmc-page__section bmc-page__sequence"
          aria-labelledby="bmc-sequence-title"
        >
          <h2 id="bmc-sequence-title" className="bmc-page__section-title">
            {content.sequence.heading}
          </h2>
          <p className="bmc-page__section-support">{content.sequence.support}</p>
          <ol className="bmc-page__sequence-list">
            {content.sequence.steps.map((step, index) => (
              <li
                key={step.id}
                className={
                  step.emphasis
                    ? "bmc-page__sequence-item bmc-page__sequence-item--emphasis"
                    : "bmc-page__sequence-item"
                }
              >
                {index > 0 ? (
                  <span className="bmc-page__sequence-arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <span className="bmc-page__sequence-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="bmc-page__section bmc-page__callout"
          aria-labelledby="bmc-reports-title"
        >
          <p className="bmc-page__callout-eyebrow">{content.reportsCallout.eyebrow}</p>
          <h2 id="bmc-reports-title" className="bmc-page__section-title">
            {content.reportsCallout.title}
          </h2>
          <p className="bmc-page__paragraph">{content.reportsCallout.body}</p>
          <p className="bmc-page__callout-scope">
            {content.reportsCallout.scopeLine}
          </p>
        </section>

        <section
          className="bmc-page__section bmc-page__catalog"
          aria-labelledby="bmc-catalog-title"
        >
          <h2 id="bmc-catalog-title" className="bmc-page__section-title">
            {content.catalog.heading}
          </h2>
          <p className="bmc-page__section-support">{content.catalog.support}</p>
        </section>

        <section
          className="bmc-page__section bmc-page__categories"
          aria-labelledby="bmc-categories-title"
          data-bmc-categories="css-cards"
        >
          <div className="bmc-page__categories-intro">
            <h2 id="bmc-categories-title" className="bmc-page__section-title">
              {content.categories.heading}
            </h2>
            <p className="bmc-page__section-support">{content.categories.subtitle}</p>
          </div>
          <ul className="bmc-page__category-grid">
            {content.categories.cards.map((card) => (
              <li
                key={card.id}
                className={`bmc-page__category-card bmc-page__category-card--${card.id}`}
              >
                <div className="bmc-page__category-top">
                  <span className="bmc-page__category-icon" aria-hidden="true">
                    <BioMathCoreCategoryIcon id={card.id} />
                  </span>
                  <span className="bmc-page__category-count">
                    {card.serviceCount}
                  </span>
                </div>
                <span className="bmc-page__category-label">{card.label}</span>
                <span className="bmc-page__category-blurb">{card.blurb}</span>
              </li>
            ))}
          </ul>
          <p className="bmc-page__categories-disclaimer">
            {content.categories.disclaimer}
          </p>
        </section>

        <section
          className="bmc-page__section bmc-page__paths"
          aria-labelledby="bmc-paths-title"
        >
          <h2 id="bmc-paths-title" className="bmc-page__section-title">
            {content.paths.heading}
          </h2>
          <p className="bmc-page__section-support">{content.paths.support}</p>
          <ul className="bmc-page__path-list">
            {content.paths.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={localizePath(locale, link.href as PublishedRoute)}
                  className="bmc-page__path-link"
                >
                  <span className="bmc-page__path-label">{link.label}</span>
                  {link.note ? (
                    <span className="bmc-page__path-note">{link.note}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="bmc-page__note">{content.note}</p>
      </div>
    </article>
  );
}
