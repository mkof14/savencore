type DefinitionPanelProps = {
  term: string;
  definition: string;
  className?: string;
};

/**
 * Large opening definition panel — engineering knowledge experience.
 */
export function DefinitionPanel({
  term,
  definition,
  className,
}: DefinitionPanelProps) {
  const headingId = `definition-panel-${term.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section
      className={["definition-panel", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <p className="definition-panel__eyebrow">Definition</p>
      <h2 id={headingId} className="definition-panel__term">
        {term}
      </h2>
      <p className="definition-panel__text">{definition}</p>
    </section>
  );
}
