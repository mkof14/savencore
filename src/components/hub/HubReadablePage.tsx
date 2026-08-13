import Image from "next/image";
import Link from "next/link";

import { HubStoryIcon } from "@/components/hub/HubStoryIcon";
import { LabsDataLoop } from "@/components/labs/LabsDataLoop";
import { PartnerFormula } from "@/components/partners/PartnerFormula";
import { RoboticsInterfaceDiagram } from "@/components/systems/RoboticsInterfaceDiagram";
import type { Locale } from "@/config/locales";
import { SITE_FALCON_MARK_PATH } from "@/config/site";
import type { HubPageContent } from "@/content/hub/types";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

import "./layer1-hub.css";

type HubReadablePageProps = {
  locale: Locale;
  content: HubPageContent;
};

/** Shared Layer-1 / domain visual shell — masthead, editorial cues, clear paths (D-0165). */
export function HubReadablePage({ locale, content }: HubReadablePageProps) {
  const ui = getUi(locale);
  const titleId = "hub-page-title";
  const theme = content.visual?.theme ?? "default";
  const hasVisualPaths = Boolean(
    content.paths?.links.some((link) => link.image),
  );
  const hasCollapsedSections = Boolean(
    content.sections?.some((section) => section.collapsed),
  );
  const hasIconHighlights = Boolean(
    content.highlights?.some((item) => item.icon),
  );
  const hasRichScenes = Boolean(
    content.scenes && content.scenes.length >= 4,
  );

  return (
    <article
      className={`hub-page hub-page--${theme}${
        content.visual?.mastheadCollage?.length ? " hub-page--collage" : ""
      }`}
      aria-labelledby={titleId}
    >
      <header className="hub-page__masthead">
        {content.visual ? (
          <div className="hub-page__masthead-media" aria-hidden="true">
            {content.visual.mastheadCollage &&
            content.visual.mastheadCollage.length > 0 ? (
              <div className="hub-page__masthead-collage">
                {content.visual.mastheadCollage.map((src, index) => (
                  <div key={src} className="hub-page__masthead-tile">
                    <Image
                      src={src}
                      alt=""
                      fill
                      priority={index === 0}
                      sizes="50vw"
                      className="hub-page__masthead-collage-image"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Image
                src={content.visual.mastheadImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="hub-page__masthead-image"
              />
            )}
            <div className="hub-page__masthead-scrim" />
            <div className="hub-page__masthead-grain" />
          </div>
        ) : (
          <div className="hub-page__masthead-field" aria-hidden="true" />
        )}

        {/* Approved brand falcon mark — quiet domain seal (D-0179); not a hero replacement */}
        <div className="hub-page__falcon" aria-hidden="true">
          <Image
            src={SITE_FALCON_MARK_PATH}
            alt=""
            width={72}
            height={97}
            className="hub-page__falcon-mark"
            draggable={false}
          />
        </div>

        <div className="hub-page__masthead-copy hub-page__inner">
          <p className="hub-page__label">{content.label}</p>
          {content.status ? (
            <p className="hub-page__status">{content.status}</p>
          ) : null}
          <h1 id={titleId} className="hub-page__title">
            {content.title}
          </h1>
          <p className="hub-page__lede">{content.lede}</p>
        </div>
      </header>

      <div className="hub-page__inner hub-page__body-wrap">
        {/* Architecture diagrams sit early — first scroll attention (D-0167 / D-0189) */}
        {content.diagram?.kind === "labs-data-loop" ? (
          <LabsDataLoop labels={content.diagram.labels} />
        ) : null}
        {content.diagram?.kind === "robotics-interface" ? (
          <RoboticsInterfaceDiagram labels={content.diagram.labels} />
        ) : null}
        {content.diagram?.kind === "partner-formula" ? (
          <PartnerFormula labels={content.diagram.labels} />
        ) : null}

        {content.highlights && content.highlights.length > 0 ? (
          <section
            className="hub-page__story"
            aria-label={ui.hub.explore}
          >
            <div
              className={
                hasIconHighlights
                  ? "hub-page__story-band hub-page__story-band--icons"
                  : "hub-page__story-band"
              }
            >
              {content.highlights.map((item, index) => (
                <div
                  key={item.id}
                  className="hub-page__story-beat"
                  style={{ ["--hub-stagger" as string]: String(index) }}
                >
                  {item.icon ? (
                    <span className="hub-page__story-icon" aria-hidden="true">
                      <HubStoryIcon name={item.icon} />
                    </span>
                  ) : (
                    <span className="hub-page__story-dot" aria-hidden="true" />
                  )}
                  <p className="hub-page__story-label">{item.title}</p>
                  <p className="hub-page__story-text">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {content.body && content.body.length > 0 ? (
          <div className="hub-page__body">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {content.scenes && content.scenes.length > 0 ? (
          <section
            className="hub-page__scenes"
            aria-label={ui.hub.scenes}
          >
            <ul
              className={
                hasRichScenes
                  ? "hub-page__scene-list hub-page__scene-list--rich"
                  : "hub-page__scene-list"
              }
            >
              {content.scenes.map((scene) => (
                <li key={scene.id} className="hub-page__scene">
                  <div className="hub-page__scene-media">
                    <Image
                      src={scene.image}
                      alt={scene.alt}
                      fill
                      sizes="(max-width: 720px) 100vw, 50vw"
                      className="hub-page__scene-image"
                    />
                  </div>
                  <div className="hub-page__scene-copy">
                    <h3 className="hub-page__scene-title">{scene.title}</h3>
                    <p className="hub-page__scene-caption">{scene.caption}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {content.paths && content.paths.links.length > 0 ? (
          <section
            className="hub-page__paths"
            aria-labelledby="hub-paths-heading"
          >
            <h2 id="hub-paths-heading" className="hub-page__paths-heading">
              {content.paths.heading}
            </h2>
            <ul
              className={
                hasVisualPaths
                  ? "hub-page__path-grid"
                  : "hub-page__path-list"
              }
            >
              {content.paths.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    className={
                      link.image
                        ? "hub-page__path-card"
                        : "hub-page__path-link"
                    }
                    href={localizePath(locale, link.href)}
                  >
                    {link.image ? (
                      <span className="hub-page__path-thumb">
                        <Image
                          src={link.image}
                          alt=""
                          fill
                          sizes="(max-width: 720px) 100vw, 33vw"
                          className="hub-page__path-thumb-image"
                        />
                      </span>
                    ) : null}
                    <span className="hub-page__path-copy">
                      <span className="hub-page__path-label">
                        {link.label}
                        <span aria-hidden="true"> →</span>
                      </span>
                      {link.note ? (
                        <span className="hub-page__path-note">{link.note}</span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {content.sections && content.sections.length > 0 ? (
          <div
            className={
              hasCollapsedSections
                ? "hub-page__sections hub-page__sections--depth"
                : "hub-page__sections"
            }
          >
            {hasCollapsedSections ? (
              <p className="hub-page__sections-kicker">{ui.hub.deeper}</p>
            ) : null}
            {content.sections.map((section) => {
              const body = (
                <>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={
                        section.accent === "gold" && index === 1
                          ? "hub-page__section-text hub-page__section-text--accent"
                          : "hub-page__section-text"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items && section.items.length > 0 ? (
                    <ul
                      className={
                        section.itemsLayout === "grid"
                          ? "hub-page__scope-grid"
                          : "hub-page__plain-list"
                      }
                    >
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </>
              );

              if (section.collapsed) {
                return (
                  <details key={section.id} className="hub-page__disclose">
                    <summary className="hub-page__disclose-summary">
                      <span className="hub-page__disclose-title">
                        {section.title}
                      </span>
                      <span
                        className="hub-page__disclose-chevron"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="hub-page__disclose-body">{body}</div>
                  </details>
                );
              }

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={
                    section.accent === "gold"
                      ? "hub-page__section hub-page__section--gold"
                      : "hub-page__section"
                  }
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="hub-page__section-title"
                  >
                    {section.title}
                  </h2>
                  {body}
                </section>
              );
            })}
          </div>
        ) : null}

        {content.note ? <p className="hub-page__note">{content.note}</p> : null}

        {content.related && content.related.length > 0 ? (
          <nav className="hub-page__related" aria-label={ui.hub.related}>
            <p className="hub-page__related-heading">{ui.hub.related}</p>
            {content.related.map((link) => (
              <Link
                key={link.href}
                className="hub-page__related-link"
                href={localizePath(locale, link.href)}
              >
                {link.label}
                <span aria-hidden="true"> →</span>
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </article>
  );
}
