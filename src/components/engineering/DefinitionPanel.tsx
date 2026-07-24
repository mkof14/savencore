type DefinitionPanelProps = {
  term: string;
  definition: string;
  className?: string;
  /** Optional measurement / architecture coordinate */
  coordinate?: string;
};

/**
 * Large opening definition panel — label rail + measurement line.
 */
export function DefinitionPanel({
  term,
  definition,
  className,
  coordinate = "DEF",
}: DefinitionPanelProps) {
  const headingId = `definition-panel-${term.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <section
      className={["definition-panel", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <div className="definition-panel__rail" aria-hidden="true">
        <span className="definition-panel__rail-mark">{coordinate}</span>
      </div>
      <div className="definition-panel__main">
        <p className="definition-panel__eyebrow">Definition</p>
        <div className="definition-panel__measure" aria-hidden="true" />
        <h2 id={headingId} className="definition-panel__term">
          {term}
        </h2>
        <p className="definition-panel__text">{definition}</p>
      </div>
    </section>
  );
}
