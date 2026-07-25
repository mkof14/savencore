import Link from "next/link";

import type { Locale } from "@/config/locales";
import type { KnowledgeObject } from "@/content/knowledge-objects";
import { localizePath } from "@/navigation/locale-path";

type DependencyGraphProps = {
  locale: Locale;
  object: KnowledgeObject;
  compact?: boolean;
};

/**
 * Lightweight incoming/outgoing dependency view — HTML/CSS only.
 */
export function DependencyGraph({
  locale,
  object,
  compact = false,
}: DependencyGraphProps) {
  const incoming = object.incomingDependencies;
  const outgoing = object.outgoingDependencies;

  return (
    <section
      className="ko-deps"
      aria-label={`Dependency graph for ${object.title}`}
    >
      <h3 className="ko-deps__title">
        {compact ? "Dependencies" : "Dependency Graph"}
      </h3>
      <div className="ko-deps__columns">
        <div>
          <p className="ko-deps__column-title">Incoming</p>
          {incoming.length > 0 ? (
            <ul className="ko-deps__list">
              {incoming.map((edge) => (
                <li key={`in-${edge.targetId}`}>
                  <Link
                    href={localizePath(locale, edge.href)}
                    className="ko-deps__node"
                  >
                    {edge.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ko-deps__empty">None published</p>
          )}
        </div>

        <div className="ko-deps__hub" aria-hidden="true">
          <span>→</span>
          <span className="ko-deps__node ko-deps__node--current">
            {compact ? object.knowledgeId : object.title}
          </span>
          <span>→</span>
        </div>

        <div>
          <p className="ko-deps__column-title">Outgoing</p>
          {outgoing.length > 0 ? (
            <ul className="ko-deps__list">
              {outgoing.map((edge) => (
                <li key={`out-${edge.targetId}`}>
                  <Link
                    href={localizePath(locale, edge.href)}
                    className="ko-deps__node"
                  >
                    {edge.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ko-deps__empty">None published</p>
          )}
        </div>
      </div>
    </section>
  );
}
