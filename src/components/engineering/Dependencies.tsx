import type { EngineeringDependency } from "@/components/engineering/engineering-types";

type DependenciesProps = {
  heading?: string;
  dependencies: readonly EngineeringDependency[];
};

export function Dependencies({
  heading = "Dependencies",
  dependencies,
}: DependenciesProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-dependencies-heading">
      <h2 id="eng-dependencies-heading" className="eng-block__heading">
        {heading}
      </h2>
      <ul className="eng-dependencies">
        {dependencies.map((dependency) => (
          <li key={dependency.id} className="eng-dependencies__item">
            <h3 className="eng-dependencies__title">{dependency.title}</h3>
            <p className="eng-dependencies__text">{dependency.relationship}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
