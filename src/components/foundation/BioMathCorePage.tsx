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
  SequenceVisual,
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
 * BioMath Core leaf — owner-grade illustration panels in themeable chrome (D-0228–D-0243).
 */
export function BioMathCorePage({ locale, content }: BioMathCorePageProps) {
  const titleId = "bmc-page-title";

  return (
    <article className="bmc-page" aria-labelledby={titleId}>
      <header className="bmc-page__hero">
        <div className="bmc-page__hero-grid" aria-hidden="true" />
        <div className="bmc-page__hero-glow" aria-hidden="true" />
        <div className="bmc-page__hero-inner">
          <div className="bmc-page__hero-copy">
            <div className="bmc-page__hero-meta">
              <p className="bmc-page__label">{content.label}</p>
              <p className="bmc-page__status">{content.status}</p>
            </div>
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
            <div className="bmc-page__hero-frame" aria-hidden="true">
              <span className="bmc-page__hero-corner bmc-page__hero-corner--tl" />
              <span className="bmc-page__hero-corner bmc-page__hero-corner--tr" />
              <span className="bmc-page__hero-corner bmc-page__hero-corner--bl" />
              <span className="bmc-page__hero-corner bmc-page__hero-corner--br" />
            </div>
            <Image
              src="/domain/foundation/biomath-core/diagrams/bmc-hero-ambient.webp"
              alt={content.hero.visualAlt}
              width={960}
              height={535}
              priority
              className="bmc-page__hero-ambient"
              sizes="(max-width: 720px) 88vw, 28rem"
              quality={80}
            />
          </div>
        </div>
      </header>

      <div className="bmc-page__body">
        <nav className="bmc-page__toc" aria-label={content.toc.label}>
          <p className="bmc-page__toc-label">{content.toc.label}</p>
          <ol className="bmc-page__toc-list">
            {content.toc.items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="bmc-page__toc-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section
          id="bmc-living"
          className="bmc-page__section bmc-page__living"
          aria-labelledby="bmc-living-title"
        >
          <h2 id="bmc-living-title" className="bmc-page__section-title">
            {content.livingModel.heading}
          </h2>
          <p className="bmc-page__section-support">{content.livingModel.support}</p>
          <LivingModelVisual
            visualLabel={content.livingModel.visualLabel}
            caption={content.livingModel.caption}
            points={content.livingModel.points}
          />
        </section>

        <section
          id="bmc-stack"
          className="bmc-page__section bmc-page__stack"
          aria-labelledby="bmc-stack-title"
        >
          <h2 id="bmc-stack-title" className="bmc-page__section-title">
            {content.layerStack.heading}
          </h2>
          <p className="bmc-page__section-support">{content.layerStack.support}</p>
          <LayerStackVisual
            visualLabel={content.layerStack.visualLabel}
            caption={content.layerStack.caption}
            layers={content.layerStack.layers}
            calloutEyebrow={content.layerStack.calloutEyebrow}
            callout={content.layerStack.callout}
          />
        </section>

        <section
          id="bmc-dual"
          className="bmc-page__section bmc-page__dual"
          aria-labelledby="bmc-dual-title"
        >
          <h2 id="bmc-dual-title" className="bmc-page__section-title">
            {content.dualRoles.heading}
          </h2>
          <p className="bmc-page__section-support">{content.dualRoles.support}</p>
          <DualRolesVisual
            visualLabel={content.dualRoles.visualLabel}
            caption={content.dualRoles.caption}
            biomath={content.dualRoles.biomath}
            saven={content.dualRoles.saven}
            banner={content.dualRoles.banner}
          />
        </section>

        <section
          id="bmc-engine"
          className="bmc-page__section bmc-page__engine"
          aria-labelledby="bmc-engine-title"
        >
          <h2 id="bmc-engine-title" className="bmc-page__section-title">
            {content.engine.heading}
          </h2>
          <p className="bmc-page__section-support">{content.engine.support}</p>
          <EngineVisual
            visualLabel={content.engine.visualLabel}
            caption={content.engine.caption}
            phases={content.engine.phases}
          />
        </section>

        <section
          id="bmc-opinion"
          className="bmc-page__section bmc-page__opinion"
          aria-labelledby="bmc-opinion-title"
        >
          <h2 id="bmc-opinion-title" className="bmc-page__section-title">
            {content.secondOpinion.heading}
          </h2>
          <p className="bmc-page__section-support">{content.secondOpinion.support}</p>
          <SecondOpinionVisual
            visualLabel={content.secondOpinion.visualLabel}
            caption={content.secondOpinion.caption}
            signalLabel={content.secondOpinion.signalLabel}
            resultLabel={content.secondOpinion.resultLabel}
            lanes={content.secondOpinion.lanes}
            insight={content.secondOpinion.insight}
          />
        </section>

        <section
          id="bmc-blackbox"
          className="bmc-page__section bmc-page__blackbox"
          aria-labelledby="bmc-blackbox-title"
        >
          <h2 id="bmc-blackbox-title" className="bmc-page__section-title">
            {content.blackBox.heading}
          </h2>
          <p className="bmc-page__section-support">{content.blackBox.support}</p>
          <div className="bmc-page__blackbox-layout">
            <BlackBoxVisual
              visualLabel={content.blackBox.visualLabel}
              caption={content.blackBox.caption}
              sides={content.blackBox.sides}
            />
            <div className="bmc-page__blackbox-prose">
              <h3 className="bmc-page__blackbox-storage-title">
                {content.blackBox.storageHeading}
              </h3>
              <p className="bmc-page__paragraph">{content.blackBox.storageIntro}</p>
              <p className="bmc-page__paragraph">{content.blackBox.storageBody}</p>
              <p className="bmc-page__blackbox-principles-eyebrow">
                {content.blackBox.principlesEyebrow}
              </p>
              <ul className="bmc-page__blackbox-principles">
                {content.blackBox.principles.map((principle) => (
                  <li
                    key={principle.id}
                    className={`bmc-page__blackbox-principle bmc-page__blackbox-principle--${principle.id}`}
                  >
                    <strong className="bmc-page__blackbox-principle-label">
                      {principle.label}
                    </strong>
                    <span className="bmc-page__blackbox-principle-body">
                      {principle.body}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bmc-page__blackbox-policies">
                <p className="bmc-page__blackbox-policies-intro">
                  {content.blackBox.policyLinks.intro}
                </p>
                <ul className="bmc-page__blackbox-policy-list">
                  {content.blackBox.policyLinks.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={localizePath(locale, link.href as PublishedRoute)}
                        className="bmc-page__blackbox-policy-link"
                      >
                        <span className="bmc-page__blackbox-policy-label">
                          {link.label}
                        </span>
                        {link.note ? (
                          <span className="bmc-page__blackbox-policy-note">
                            {link.note}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="bmc-what-is-not"
          className="bmc-page__section bmc-page__what-not"
          aria-labelledby="bmc-what-is-not-title"
        >
          <h2 id="bmc-what-is-not-title" className="bmc-page__section-title">
            {content.whatIsNot.heading}
          </h2>
          <p className="bmc-page__section-support">{content.whatIsNot.support}</p>
          <ul className="bmc-page__what-not-list">
            {content.whatIsNot.points.map((point) => (
              <li key={point} className="bmc-page__what-not-item">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="bmc-output"
          className="bmc-page__section bmc-page__output"
          aria-labelledby="bmc-output-title"
        >
          <h2 id="bmc-output-title" className="bmc-page__section-title">
            {content.output.heading}
          </h2>
          <p className="bmc-page__section-support">{content.output.support}</p>
          <OutputVisual
            visualLabel={content.output.visualLabel}
            caption={content.output.caption}
            pillars={content.output.pillars}
            footer={content.output.footer}
          />
        </section>

        <section
          id="bmc-formula"
          className="bmc-page__section bmc-page__formula"
          aria-labelledby="bmc-formula-title"
        >
          <h2 id="bmc-formula-title" className="bmc-page__section-title">
            {content.formula.heading}
          </h2>
          <p className="bmc-page__section-support">{content.formula.support}</p>
          <FormulaVisual
            visualLabel={content.formula.visualLabel}
            caption={content.formula.caption}
            parts={content.formula.parts}
            equals={content.formula.equals}
            equalsDetail={content.formula.equalsDetail}
          />
        </section>

        <section
          id="bmc-envs"
          className="bmc-page__section bmc-page__envs"
          aria-labelledby="bmc-envs-title"
        >
          <h2 id="bmc-envs-title" className="bmc-page__section-title">
            {content.environments.heading}
          </h2>
          <p className="bmc-page__section-support">{content.environments.support}</p>
          <EnvironmentsVisual
            visualLabel={content.environments.visualLabel}
            caption={content.environments.caption}
            cards={content.environments.cards}
            footer={content.environments.footer}
          />
        </section>

        <section
          id="bmc-sequence"
          className="bmc-page__section bmc-page__sequence"
          aria-labelledby="bmc-sequence-title"
        >
          <h2 id="bmc-sequence-title" className="bmc-page__section-title">
            {content.sequence.heading}
          </h2>
          <p className="bmc-page__section-support">{content.sequence.support}</p>
          <SequenceVisual
            visualLabel={content.sequence.visualLabel}
            steps={content.sequence.steps}
          />
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
          id="bmc-categories"
          className="bmc-page__section bmc-page__categories"
          aria-labelledby="bmc-categories-title"
          data-bmc-categories="artboard-panels"
        >
          <div className="bmc-page__categories-intro">
            <h2 id="bmc-categories-title" className="bmc-page__section-title">
              {content.categories.heading}
            </h2>
            <p className="bmc-page__section-support">{content.categories.subtitle}</p>
          </div>
          <div className="bmc-page__category-artboard" data-bmc-artboard="categories">
            <div className="bmc-page__category-artboard-grid" aria-hidden="true" />
            <ul className="bmc-page__category-grid">
              {content.categories.cards.map((card) => (
                <li
                  key={card.id}
                  className={`bmc-page__category-card bmc-page__category-card--${card.id}`}
                >
                  <span className="bmc-page__category-corners" aria-hidden="true">
                    <span className="bmc-page__category-corner bmc-page__category-corner--tl" />
                    <span className="bmc-page__category-corner bmc-page__category-corner--tr" />
                    <span className="bmc-page__category-corner bmc-page__category-corner--bl" />
                    <span className="bmc-page__category-corner bmc-page__category-corner--br" />
                  </span>
                  <span className="bmc-page__category-mark" aria-hidden="true">
                    <span className="bmc-page__category-icon">
                      <BioMathCoreCategoryIcon id={card.id} />
                    </span>
                  </span>
                  <span className="bmc-page__category-label">{card.label}</span>
                  <span className="bmc-page__category-blurb">{card.blurb}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="bmc-page__categories-disclaimer">
            {content.categories.disclaimer}
          </p>
        </section>

        <section
          id="bmc-paths"
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
