import type { EngineeringDiagram as EngineeringDiagramModel } from "@/components/engineering/engineering-types";

type EngineeringDiagramProps = {
  diagram: EngineeringDiagramModel;
};

/**
 * Canonical engineering diagram language.
 * HTML/CSS primary; straight geometry only.
 */
export function EngineeringDiagram({ diagram }: EngineeringDiagramProps) {
  const titleId = `eng-diagram-${diagram.id}-title`;

  return (
    <figure
      className={`eng-diagram eng-diagram--${diagram.kind}`}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="eng-diagram__caption">
        {diagram.title}
      </figcaption>
      <p className="visually-hidden">{diagram.description}</p>
      <ol className="eng-diagram__list">
        {diagram.nodes.map((node, index) => (
          <li key={node.id} className="eng-diagram__node">
            {index > 0 ? (
              <span className="eng-diagram__connector" aria-hidden="true" />
            ) : null}
            <div className="eng-diagram__card">
              <span className="eng-diagram__label">{node.label}</span>
              {node.detail ? (
                <span className="eng-diagram__detail">{node.detail}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
