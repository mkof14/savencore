import Link from "next/link";

import type { Locale } from "@/config/locales";
import type {
  KnowledgeGraphView,
  KnowledgeObject,
  KnowledgeRelationEdge,
} from "@/content/knowledge-objects";
import { localizePath } from "@/navigation/locale-path";

type KnowledgeGraphPanelProps = {
  locale: Locale;
  object: KnowledgeObject;
};

const GROUP_ORDER: readonly {
  key: keyof KnowledgeGraphView;
  title: string;
}[] = [
  { key: "parents", title: "Parents" },
  { key: "children", title: "Children" },
  { key: "dependencies", title: "Dependencies" },
  { key: "consumers", title: "Consumers" },
  { key: "providers", title: "Providers" },
];

function EdgeList({
  locale,
  edges,
}: {
  locale: Locale;
  edges: readonly KnowledgeRelationEdge[];
}) {
  if (edges.length === 0) {
    return <p className="ko-deps__empty">None published</p>;
  }

  return (
    <ul className="ko-graph__list">
      {edges.map((edge) => (
        <li key={`${edge.kind}-${edge.targetId}`} className="ko-graph__item">
          <span className="ko-graph__kind">{edge.kind}</span>
          <Link
            href={localizePath(locale, edge.href)}
            className="ko-graph__link"
          >
            {edge.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Cross-domain graph exposure: parents, children, dependencies, consumers, providers.
 */
export function KnowledgeGraphPanel({
  locale,
  object,
}: KnowledgeGraphPanelProps) {
  return (
    <section className="ko-graph" aria-label={`Knowledge graph for ${object.title}`}>
      <h3 className="ko-graph__title">Knowledge Graph</h3>
      <div className="ko-graph__groups">
        {GROUP_ORDER.map((group) => (
          <div key={group.key}>
            <p className="ko-graph__group-title">{group.title}</p>
            <EdgeList locale={locale} edges={object.graph[group.key]} />
          </div>
        ))}
      </div>
    </section>
  );
}
