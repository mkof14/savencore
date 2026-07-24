type EngineeringSummaryProps = {
  heading?: string;
  paragraphs: readonly string[];
};

export function EngineeringSummary({
  heading = "Engineering Summary",
  paragraphs,
}: EngineeringSummaryProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-summary-heading">
      <h2 id="eng-summary-heading" className="eng-block__heading">
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
