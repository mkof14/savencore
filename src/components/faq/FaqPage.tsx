"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale } from "@/config/locales";
import type {
  FaqPageContent,
  FaqSection,
  FaqSectionId,
} from "@/content/faq/en";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { localizePath } from "@/navigation/locale-path";

import "./faq.css";

type FaqPageProps = {
  locale: Locale;
  content: FaqPageContent;
};

type OpenMap = Record<string, boolean>;

function collectItemIds(content: FaqPageContent): string[] {
  return content.sections.flatMap((section) =>
    section.items.map((item) => item.id),
  );
}

function sectionAccentClass(id: FaqSectionId): string {
  return `faq-page__section faq-page__section--${id}`;
}

export function FaqPage({ locale, content }: FaqPageProps) {
  const visual = domainVisualForHref("/faq/");
  const allIds = collectItemIds(content);
  const [openMap, setOpenMap] = useState<OpenMap>({});

  const setAll = (open: boolean) => {
    const next: OpenMap = {};
    for (const id of allIds) {
      next[id] = open;
    }
    setOpenMap(next);
  };

  const toggle = (id: string) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className="faq-page" aria-labelledby="faq-page-title">
      <header className="faq-page__masthead">
        <div className="faq-page__masthead-media" aria-hidden="true">
          <Image
            src={visual.mastheadImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="faq-page__masthead-image"
          />
          <div className="faq-page__masthead-scrim" />
        </div>
        <div className="faq-page__masthead-copy">
          <p className="faq-page__label">{content.label}</p>
          <h1 id="faq-page-title" className="faq-page__title">
            {content.title}
          </h1>
          <p className="faq-page__lede">{content.lede}</p>
          <p className="faq-page__note">{content.note}</p>
        </div>
      </header>

      <div className="faq-page__body">
        <aside className="faq-page__toc" aria-labelledby="faq-toc-title">
          <h2 id="faq-toc-title" className="faq-page__toc-title">
            {content.tocLabel}
          </h2>
          <ol className="faq-page__toc-list">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a
                  className={`faq-page__toc-link faq-page__toc-link--${section.id}`}
                  href={`#faq-section-${section.id}`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
          <div className="faq-page__controls">
            <button
              type="button"
              className="faq-page__control"
              onClick={() => setAll(true)}
            >
              {content.expandAll}
            </button>
            <button
              type="button"
              className="faq-page__control"
              onClick={() => setAll(false)}
            >
              {content.collapseAll}
            </button>
          </div>
        </aside>

        <div className="faq-page__panels">
          {content.sections.map((section) => (
            <FaqSectionBlock
              key={section.id}
              locale={locale}
              section={section}
              relatedLabel={content.relatedLabel}
              openMap={openMap}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

type FaqSectionBlockProps = {
  locale: Locale;
  section: FaqSection;
  relatedLabel: string;
  openMap: OpenMap;
  onToggle: (id: string) => void;
};

function FaqSectionBlock({
  locale,
  section,
  relatedLabel,
  openMap,
  onToggle,
}: FaqSectionBlockProps) {
  const headingId = `faq-section-${section.id}`;

  return (
    <section
      id={headingId}
      className={sectionAccentClass(section.id)}
      aria-labelledby={`${headingId}-title`}
    >
      <header className="faq-page__section-head">
        <h2 id={`${headingId}-title`} className="faq-page__section-title">
          {section.title}
        </h2>
        <p className="faq-page__section-intro">{section.intro}</p>
      </header>

      <div className="faq-page__accordion">
        {section.items.map((item) => {
          const isOpen = Boolean(openMap[item.id]);
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;

          return (
            <div
              key={item.id}
              className={`faq-page__item${isOpen ? " is-open" : ""}`}
            >
              <h3 className="faq-page__item-heading">
                <button
                  id={buttonId}
                  type="button"
                  className="faq-page__item-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => onToggle(item.id)}
                >
                  <span className="faq-page__item-q">{item.question}</span>
                  <span className="faq-page__item-icon" aria-hidden="true" />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="faq-page__item-panel"
                hidden={!isOpen}
              >
                <div className="faq-page__item-answer">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {item.links && item.links.length > 0 ? (
                    <nav
                      className="faq-page__item-links"
                      aria-label={relatedLabel}
                    >
                      {item.links.map((link) => (
                        <Link
                          key={`${link.href}-${link.label}`}
                          href={localizePath(locale, link.href)}
                          className="faq-page__item-link"
                        >
                          {link.label}
                          <span aria-hidden="true"> →</span>
                        </Link>
                      ))}
                    </nav>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
