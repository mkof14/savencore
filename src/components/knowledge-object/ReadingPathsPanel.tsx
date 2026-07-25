import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getCatalogEntryById,
  getReadingPathsForObject,
  type KnowledgeObject,
} from "@/content/knowledge-objects";
import { localizePath } from "@/navigation/locale-path";

type ReadingPathsPanelProps = {
  locale: Locale;
  object: KnowledgeObject;
};

/**
 * Reading paths that include the current Knowledge Object.
 */
export function ReadingPathsPanel({ locale, object }: ReadingPathsPanelProps) {
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
    <section className="ko-paths" aria-label="Reading paths">
      <h3 className="ko-paths__title">Reading Paths</h3>
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
