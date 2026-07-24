import type { KnowledgeDiagram } from "@/content/knowledge/types";

type ArchitectureDiagramProps = {
  diagram: KnowledgeDiagram;
};

/**
 * Knowledge-layer HTML/CSS architecture diagram.
 * Separate from page-type diagrams; no images.
 */
export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  const titleId = `knowledge-diagram-${diagram.id}-title`;

  return (
    <figure
      className={`knowledge-diagram knowledge-diagram--${diagram.kind}`}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="knowledge-diagram__caption">
        {diagram.title}
      </figcaption>
      <p className="visually-hidden">{diagram.description}</p>
      <ol className="knowledge-diagram__list">
        {diagram.nodes.map((node, index) => (
          <li key={node.id} className="knowledge-diagram__node">
            {index > 0 ? (
              <span className="knowledge-diagram__connector" aria-hidden="true" />
            ) : null}
            <div className="knowledge-diagram__card">
              <span className="knowledge-diagram__label">{node.label}</span>
              {node.detail ? (
                <span className="knowledge-diagram__detail">{node.detail}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
