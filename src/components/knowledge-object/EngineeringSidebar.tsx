"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { DependencyGraph } from "@/components/knowledge-object/DependencyGraph";
import { KnowledgePassport } from "@/components/knowledge-object/KnowledgePassport";
import type { Locale } from "@/config/locales";
import {
  getNextInReadingPath,
  getReadingPathsForObject,
  type KnowledgeObject,
} from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type EngineeringSidebarProps = {
  locale: Locale;
  object: KnowledgeObject;
  currentPosition: string;
  nextHref?: string | null;
  nextLabel?: string | null;
};

function resolveRecommendedNext(
  object: KnowledgeObject,
  nextHref?: string | null,
  nextLabel?: string | null,
): { href: string; label: string } | null {
  if (nextHref && nextLabel) {
    return { href: nextHref, label: nextLabel };
  }
  const paths = [
    ...getReadingPathsForObject(object.knowledgeId),
    ...(object.entityId ? getReadingPathsForObject(object.entityId) : []),
  ];
  for (const path of paths) {
    const next =
      getNextInReadingPath(path, object.knowledgeId) ??
      (object.entityId
        ? getNextInReadingPath(path, object.entityId)
        : null);
    if (next) {
      return { href: next.href, label: next.title };
    }
  }
  return null;
}

/**
 * Document details sidebar — passport, related concepts, position, next reading.
 */
export function EngineeringSidebar({
  locale,
  object,
  currentPosition,
  nextHref = null,
  nextLabel = null,
}: EngineeringSidebarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const ui = getUi(locale);
  const recommended = resolveRecommendedNext(object, nextHref, nextLabel);

  return (
    <aside
      className={["ko-sidebar", open ? "is-open" : ""].filter(Boolean).join(" ")}
      aria-label={ui.ko.engineeringObject}
    >
      <button
        type="button"
        className="ko-sidebar__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{ui.ko.engineeringObject}</span>
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      <div id={panelId} className="ko-sidebar__inner">
        <KnowledgePassport locale={locale} object={object} compact />

        <DependencyGraph locale={locale} object={object} compact />

        <section className="ko-sidebar__section">
          <h3 className="ko-sidebar__heading">{ui.ko.readingTime}</h3>
          <p className="ko-sidebar__value">
            {object.readingTime === "Not yet assigned."
              ? ui.ko.notYetAssigned
              : object.readingTime}
          </p>
        </section>

        <section className="ko-sidebar__section">
          <h3 className="ko-sidebar__heading">{ui.ko.currentPosition}</h3>
          <p className="ko-sidebar__value">{currentPosition}</p>
        </section>

        <section className="ko-sidebar__section">
          <h3 className="ko-sidebar__heading">{ui.ko.nextReading}</h3>
          {recommended ? (
            <p className="ko-sidebar__value">
              <Link
                href={localizePath(locale, recommended.href)}
                className="ko-sidebar__link"
              >
                {recommended.label}
              </Link>
            </p>
          ) : (
            <p className="ko-sidebar__value">{ui.ko.notYetAssigned}</p>
          )}
        </section>
      </div>
    </aside>
  );
}
