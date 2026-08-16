import Link from "next/link";

import type { Locale } from "@/config/locales";
import type { BusinessPageContent } from "@/content/business/page-en";
import type { BusinessSectionId } from "@/content/business/sections";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

type BusinessSectionBodyProps = {
  locale: Locale;
  content: BusinessPageContent;
  sectionId: BusinessSectionId;
};

function path(locale: Locale, href: string) {
  return localizePath(locale, href as PublishedRoute);
}

/** One Business topic block inside the continuous Business page (D-0290). */
export function BusinessSectionBody({
  locale,
  content,
  sectionId,
}: BusinessSectionBodyProps) {
  switch (sectionId) {
    case "market-context":
      return <MarketContextSection content={content} />;
    case "human-data":
      return <HumanDataSection content={content} />;
    case "saven-physical-systems":
      return <SystemsSection content={content} />;
    case "where-value-is-created":
      return <ValueSection content={content} />;
    case "applications":
      return <ApplicationsSection locale={locale} content={content} />;
    case "why-the-timing-matters":
      return <TimingSection content={content} />;
    case "what-we-know-today":
      return <TodaySection content={content} />;
    default: {
      const _exhaustive: never = sectionId;
      return _exhaustive;
    }
  }
}

function MarketContextSection({ content }: { content: BusinessPageContent }) {
  const section = content.marketContext;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <div className="biz-page__evidence" role="group" aria-label={section.heading}>
        <div className="biz-page__evidence-item">
          <p className="biz-page__evidence-label">{section.fromLabel}</p>
          <p className="biz-page__evidence-value">{section.fromValue}</p>
        </div>
        <div className="biz-page__evidence-item">
          <p className="biz-page__evidence-label">{section.toLabel}</p>
          <p className="biz-page__evidence-value">{section.toValue}</p>
        </div>
        <div className="biz-page__evidence-item biz-page__evidence-item--cagr">
          <p className="biz-page__evidence-label">{section.cagrLabel}</p>
          <p className="biz-page__evidence-value">{section.cagrValue}</p>
        </div>
      </div>
      <p className="biz-page__source-mark">{section.sourceMarker}</p>
      <div className="biz-page__prose">
        {section.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
      <p className="biz-page__disclaimer">{section.disclaimer}</p>
      {section.northAmerica ? (
        <div className="biz-page__share biz-page__share--compact">
          <p className="biz-page__share-label">{section.northAmerica.label}</p>
          <p className="biz-page__share-value">{section.northAmerica.value}</p>
        </div>
      ) : null}
      <p className="biz-page__chip-label">{section.changesHeading}</p>
      <ul className="biz-page__chips">
        {section.changes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className="biz-page__point-grid biz-page__point-grid--three">
        {section.points.map((point) => (
          <li key={point.id} className="biz-page__point">
            <h3 className="biz-page__point-title">{point.title}</h3>
            <p className="biz-page__point-text">{point.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HumanDataSection({ content }: { content: BusinessPageContent }) {
  const section = content.humanData;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <p className="biz-page__soft-lead">{section.lead}</p>
      <div className="biz-page__two-col">
        <div>
          <p className="biz-page__chip-label">{section.historicLabel}</p>
          <ul className="biz-page__chips">
            {section.historic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="biz-page__chip-label">{section.connectedLabel}</p>
          <ul className="biz-page__chips">
            {section.connected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="biz-page__machine-lines">
        {section.continuityLines.map((line, index) => (
          <li
            key={line}
            className={
              index === section.continuityLines.length - 1
                ? "biz-page__machine-lines-item biz-page__machine-lines-item--focus"
                : "biz-page__machine-lines-item"
            }
          >
            {line}
          </li>
        ))}
      </ul>
      <p className="biz-page__prose-single">{section.closing}</p>
    </section>
  );
}

function SystemsSection({ content }: { content: BusinessPageContent }) {
  const section = content.systems;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <div className="biz-page__prose">
        {section.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
      <ol className="biz-page__chain" aria-label={section.heading}>
        {section.chain.map((step, index) => (
          <li key={step.id} className="biz-page__chain-item">
            <p className="biz-page__chain-step">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="biz-page__chain-card">
              <p className="biz-page__chain-label">{step.label}</p>
              {step.note ? (
                <p className="biz-page__chain-note">{step.note}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      <p className="biz-page__whisper">{section.chainNote}</p>
      <div className="biz-page__subpanel">
        <h3 className="biz-page__subsection-title">{section.hardware.heading}</h3>
        <div className="biz-page__prose">
          {section.hardware.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <p className="biz-page__chip-label">{section.hardware.dependsLabel}</p>
        <ul className="biz-page__chips">
          {section.hardware.depends.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="biz-page__whisper">{section.hardware.closing}</p>
      </div>
    </section>
  );
}

function ValueSection({ content }: { content: BusinessPageContent }) {
  const section = content.value;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>

      <div className="biz-page__flow" role="group" aria-label={section.flow.heading}>
        <h3 className="biz-page__subsection-title">{section.flow.heading}</h3>
        <ol className="biz-page__flow-stages">
          {section.flow.stages.map((stage, index) => (
            <li
              key={stage.id}
              className={
                stage.id === "saven"
                  ? "biz-page__flow-stage biz-page__flow-stage--saven"
                  : "biz-page__flow-stage"
              }
            >
              {index > 0 ? (
                <span className="biz-page__flow-arrow" aria-hidden="true">
                  <span className="biz-page__flow-arrow-v">↓</span>
                  <span className="biz-page__flow-arrow-h">→</span>
                </span>
              ) : null}
              <div className="biz-page__flow-card">
                <div className="biz-page__flow-card-meta">
                  <p className="biz-page__flow-eyebrow">{stage.eyebrow}</p>
                  <span className="biz-page__flow-step" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="biz-page__flow-title">{stage.title}</p>
                <p className="biz-page__flow-provides">{stage.providesLabel}</p>
                <ul className="biz-page__flow-items">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="biz-page__flow-relations">
          <p className="biz-page__flow-relations-heading">
            {section.flow.relationsHeading}
          </p>
          <ul className="biz-page__flow-relation-list">
            {section.flow.relations.map((relation) => (
              <li key={relation.id} className="biz-page__flow-relation">
                <div className="biz-page__flow-relation-path">
                  <span className="biz-page__flow-relation-from">{relation.from}</span>
                  <span className="biz-page__flow-relation-arrow" aria-hidden="true">
                    →
                  </span>
                  <span className="biz-page__flow-relation-to">{relation.to}</span>
                </div>
                <span className="biz-page__flow-relation-activity">
                  {relation.activity}
                </span>
              </li>
            ))}
          </ul>
          <p className="biz-page__flow-note">{section.flow.note}</p>
        </div>
      </div>

      <h3 className="biz-page__subsection-title">{section.layersHeading}</h3>
      <ol className="biz-page__when-grid">
        {section.layers.map((layer, index) => (
          <li key={layer.id} className="biz-page__when">
            <span className="biz-page__when-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="biz-page__when-title">{layer.title}</h4>
            <ul className="biz-page__when-list">
              {layer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="biz-page__subsection-title">{section.groupsHeading}</h3>
      <ul className="biz-page__point-grid">
        {section.groups.map((group) => (
          <li key={group.id} className="biz-page__point">
            <h4 className="biz-page__point-title">{group.title}</h4>
            <p className="biz-page__point-text">{group.text}</p>
          </li>
        ))}
      </ul>

      <div className="biz-page__subpanel">
        <h3 className="biz-page__subsection-title">{section.machine.heading}</h3>
        <ul className="biz-page__machine-lines">
          {section.machine.lines.map((line, index) => (
            <li
              key={line}
              className={
                index === section.machine.lines.length - 1
                  ? "biz-page__machine-lines-item biz-page__machine-lines-item--focus"
                  : "biz-page__machine-lines-item"
              }
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="biz-page__prose-single">{section.machine.paragraph}</p>
      </div>

      <p className="biz-page__whisper">{section.structuresNote}</p>
    </section>
  );
}

function ApplicationsSection({
  locale,
  content,
}: {
  locale: Locale;
  content: BusinessPageContent;
}) {
  const section = content.applications;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <div className="biz-page__app-grid">
        <article className="biz-page__app-card">
          <h3 className="biz-page__subsection-title">{section.rehab.heading}</h3>
          <div className="biz-page__prose">
            {section.rehab.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </article>
        <article className="biz-page__app-card">
          <h3 className="biz-page__subsection-title">{section.home.heading}</h3>
          <div className="biz-page__prose">
            {section.home.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ul className="biz-page__chips">
            {section.home.examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="biz-page__app-card">
          <h3 className="biz-page__subsection-title">{section.beyond.heading}</h3>
          <ul className="biz-page__chips">
            {section.beyond.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="biz-page__explore-inline">
        <Link
          href={path(locale, section.exploreHref)}
          className="biz-page__explore-link"
        >
          {section.exploreLabel}
        </Link>
      </p>
    </section>
  );
}

function TimingSection({ content }: { content: BusinessPageContent }) {
  const section = content.timing;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <ul className="biz-page__point-grid">
        {section.points.map((point) => (
          <li key={point.id} className="biz-page__point">
            <h3 className="biz-page__point-title">{point.title}</h3>
            <p className="biz-page__point-text">{point.text}</p>
          </li>
        ))}
      </ul>
      <p className="biz-page__soft-lead biz-page__soft-lead--inline">
        {section.closing}
      </p>
    </section>
  );
}

function TodaySection({ content }: { content: BusinessPageContent }) {
  const section = content.today;
  return (
    <section id={section.id} className="biz-page__section" aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`} className="biz-page__section-title biz-page__section-title--leaf">
        {section.heading}
      </h2>
      <div className="biz-page__prose">
        {section.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
