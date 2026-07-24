type ArchitectureOverviewProps = {
  heading?: string;
  paragraphs: readonly string[];
};

export function ArchitectureOverview({
  heading = "Architecture Overview",
  paragraphs,
}: ArchitectureOverviewProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-architecture-heading">
      <h2 id="eng-architecture-heading" className="eng-block__heading">
        {heading}
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="eng-block__body">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
