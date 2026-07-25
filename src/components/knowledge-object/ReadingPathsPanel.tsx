import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getCatalogEntryById,
  getReadingPathsForObject,
  type KnowledgeObject,
} from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type ReadingPathsPanelProps = {
  locale: Locale;
  object: KnowledgeObject;
};

/** Suggested reading journeys that include this document. */
export function ReadingPathsPanel({ locale, object }: ReadingPathsPanelProps) {
  const ui = getUi(locale);
  const paths = getReadingPathsForObject(object.knowledgeId);
  const pathsByEntity =
    object.entityId && object.entityId !== object.knowledgeId
      ? getReadingPathsForObject(object.entityId)
      : [];
  const merged = [...paths];
  for (const path of pathsByEntity) {
    if (!merged.some((item) => item.id === path.id)) {
      merged.push(path);
    }
  }

  if (merged.length === 0) {
    return null;
  }

  return (
    <section className="ko-paths" aria-label={ui.ko.readingPaths}>
      <h3 className="ko-paths__title">{ui.ko.readingPaths}</h3>
      <ul className="ko-paths__list">
        {merged.map((path) => (
          <li key={path.id} className="ko-paths__card">
            <p className="ko-paths__name">{path.title}</p>
            <p className="ko-paths__summary">{path.summary}</p>
            <ol className="ko-paths__steps">
              {path.objectIds.map((id) => {
                const entry = getCatalogEntryById(id);
                if (!entry) {
                  return null;
                }
                const isCurrent =
                  id === object.knowledgeId || id === object.entityId;
                return (
                  <li
                    key={id}
                    className={[
                      "ko-paths__step",
                      isCurrent ? "is-current" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {isCurrent ? (
                      <span aria-current="page">{entry.title}</span>
                    ) : (
                      <Link href={localizePath(locale, entry.href)}>
                        {entry.title}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}
