import Link from "next/link";

import type { Locale } from "@/config/locales";
import type {
  KnowledgeGraphView,
  KnowledgeObject,
  KnowledgeRelationEdge,
} from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type KnowledgeGraphPanelProps = {
  locale: Locale;
  object: KnowledgeObject;
};

function EdgeList({
  locale,
  edges,
  emptyLabel,
}: {
  locale: Locale;
  edges: readonly KnowledgeRelationEdge[];
  emptyLabel: string;
}) {
  if (edges.length === 0) {
    return <p className="ko-deps__empty">{emptyLabel}</p>;
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

/** Cross-topic connections for a document. */
export function KnowledgeGraphPanel({
  locale,
  object,
}: KnowledgeGraphPanelProps) {
  const ui = getUi(locale);
  const groups: { key: keyof KnowledgeGraphView; title: string }[] = [
    { key: "parents", title: ui.ko.parents },
    { key: "children", title: ui.ko.children },
    { key: "dependencies", title: ui.ko.dependencies },
    { key: "consumers", title: ui.ko.consumers },
    { key: "providers", title: ui.ko.providers },
  ];

  return (
    <section className="ko-graph" aria-label={ui.ko.knowledgeGraph}>
      <h3 className="ko-graph__title">{ui.ko.knowledgeGraph}</h3>
      <div className="ko-graph__groups">
        {groups.map((group) => (
          <div key={group.key}>
            <p className="ko-graph__group-title">{group.title}</p>
            <EdgeList
              locale={locale}
              edges={object.graph[group.key]}
              emptyLabel={ui.ko.nonePublished}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
