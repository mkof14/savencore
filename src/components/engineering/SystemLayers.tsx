import type { EngineeringLayer } from "@/components/engineering/engineering-types";

type SystemLayersProps = {
  heading?: string;
  layers: readonly EngineeringLayer[];
};

export function SystemLayers({
  heading = "System Layers",
  layers,
}: SystemLayersProps) {
  return (
    <section className="eng-block" aria-labelledby="eng-layers-heading">
      <h2 id="eng-layers-heading" className="eng-block__heading">
        {heading}
      </h2>
      <ol className="eng-layers">
        {layers.map((layer, index) => (
          <li key={layer.id} className="eng-layers__item">
            <span className="eng-layers__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="eng-layers__title">{layer.title}</h3>
              {layer.role ? (
                <p className="eng-layers__role">{layer.role}</p>
              ) : null}
              <p className="eng-layers__text">{layer.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
