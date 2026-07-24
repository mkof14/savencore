import Link from "next/link";

import type { KnowledgeDomain } from "@/content/knowledge/types";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type KnowledgeIndexProps = {
  locale: Locale;
  domains: readonly KnowledgeDomain[];
  heading?: string;
};

/** Compact index of knowledge domains for engineering navigation. */
export function KnowledgeIndex({
  locale,
  domains,
  heading = "Knowledge domains",
}: KnowledgeIndexProps) {
  return (
    <section className="knowledge-index" aria-labelledby="knowledge-index-heading">
      <h2 id="knowledge-index-heading" className="knowledge-block__heading">
        {heading}
      </h2>
      <ol className="knowledge-index__list">
        {domains.map((domain, index) => (
          <li key={domain.id} className="knowledge-index__item">
            <span className="knowledge-index__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="knowledge-index__body">
              <h3 className="knowledge-index__title">
                <Link
                  href={localizePath(locale, domain.href)}
                  className="knowledge-index__link"
                >
                  {domain.title}
                </Link>
              </h3>
              <p className="knowledge-index__purpose">{domain.purpose}</p>
              <p className="knowledge-index__scope">{domain.scope}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
