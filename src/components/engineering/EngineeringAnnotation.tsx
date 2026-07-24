type EngineeringAnnotationProps = {
  coordinate?: string;
  label: string;
  text: string;
  className?: string;
};

/**
 * Compact technical annotation — monospace identifier + readable note.
 */
export function EngineeringAnnotation({
  coordinate,
  label,
  text,
  className,
}: EngineeringAnnotationProps) {
  return (
    <p
      className={["engineering-annotation", className]
        .filter(Boolean)
        .join(" ")}
    >
      {coordinate ? (
        <span className="engineering-annotation__coord" aria-hidden="true">
          {coordinate}
        </span>
      ) : null}
      <span className="engineering-annotation__label">{label}</span>
      <span className="engineering-annotation__text">{text}</span>
    </p>
  );
}
