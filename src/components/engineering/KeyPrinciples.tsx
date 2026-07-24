import type { EngineeringPrinciple } from "@/components/engineering/engineering-types";

type KeyPrinciplesProps = {
  heading?: string;
  principles: readonly EngineeringPrinciple[];
};

export function KeyPrinciples({
  heading = "Key Principles",
  principles,
}: KeyPrinciplesProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-principles-heading">
      <h2 id="eng-principles-heading" className="eng-block__heading">
        {heading}
      </h2>
      <ul className="eng-principles">
        {principles.map((principle) => (
          <li key={principle.id} className="eng-principles__item">
            <h3 className="eng-principles__title">{principle.title}</h3>
            <p className="eng-principles__text">{principle.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
