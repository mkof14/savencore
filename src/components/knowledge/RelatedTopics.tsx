import Link from "next/link";

import type { RelatedTopic } from "@/content/knowledge/types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type RelatedTopicsProps = {
  locale: Locale;
  topics: readonly RelatedTopic[];
  heading?: string;
};

export function RelatedTopics({
  locale,
  topics,
  heading = "Related topics",
}: RelatedTopicsProps) {
  if (topics.length === 0) {
    return null;
  }

  return (
    <aside
      className="knowledge-related"
      aria-labelledby="knowledge-related-heading"
    >
      <h2 id="knowledge-related-heading" className="knowledge-block__heading">
        {heading}
      </h2>
      <ul className="knowledge-related__list">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              href={localizePath(locale, topic.href)}
              className="knowledge-related__link"
            >
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
