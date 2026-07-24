import type { ArchitectureDiagram as ArchitectureDiagramModel } from "@/components/pages/page-types";

type ArchitectureDiagramProps = {
  diagram: ArchitectureDiagramModel;
};

/**
 * HTML/CSS architecture diagram — no images.
 * Semantic list structure with a figure caption.
 */
export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  const titleId = `${diagram.id}-title`;

  return (
    <figure
      className={`page-diagram page-diagram--${diagram.kind}`}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="page-diagram__caption">
        {diagram.title}
      </figcaption>
      <p className="visually-hidden">{diagram.description}</p>
      <ol className="page-diagram__list">
        {diagram.nodes.map((node, index) => (
          <li key={node.id} className="page-diagram__node">
            {index > 0 ? (
              <span className="page-diagram__connector" aria-hidden="true" />
            ) : null}
            <div className="page-diagram__card">
              <span className="page-diagram__label">{node.label}</span>
              {node.detail ? (
                <span className="page-diagram__detail">{node.detail}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
