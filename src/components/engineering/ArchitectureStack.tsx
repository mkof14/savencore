type ArchitectureStackNode = {
  id: string;
  label: string;
  detail?: string;
  current?: boolean;
};

type ArchitectureStackProps = {
  id: string;
  title: string;
  description: string;
  nodes: readonly ArchitectureStackNode[];
  /** blueprint | architecture | usage — layout identity without color. */
  identity?: "blueprint" | "architecture" | "usage";
};

/**
 * Vertical architecture overview diagram (CSS). Structure before prose.
 */
export function ArchitectureStack({
  id,
  title,
  description,
  nodes,
  identity = "architecture",
}: ArchitectureStackProps) {
  const titleId = `architecture-stack-${id}-title`;

  return (
    <figure
      className={`architecture-stack architecture-stack--${identity}`}
      aria-labelledby={titleId}
    >
      <figcaption id={titleId} className="architecture-stack__caption">
        {title}
      </figcaption>
      <p className="visually-hidden">{description}</p>
      <ol className="architecture-stack__list">
        {nodes.map((node, index) => (
          <li
            key={node.id}
            className={`architecture-stack__node${node.current ? " is-current" : ""}`}
          >
            {index > 0 ? (
              <span className="architecture-stack__connector" aria-hidden="true">
                ↓
              </span>
            ) : null}
            <div className="architecture-stack__card">
              <span className="architecture-stack__label">{node.label}</span>
              {node.detail ? (
                <span className="architecture-stack__detail">{node.detail}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
