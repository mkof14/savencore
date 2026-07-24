import { getEntityById, getEntitiesByDomain } from "@/content/knowledge/entity-registry";

type MatrixLayer = {
  id: string;
  title: string;
  items: readonly { id: string; title: string }[];
};

function uniqueEntitiesFromIds(
  ids: readonly string[],
): readonly { id: string; title: string }[] {
  const seen = new Set<string>();
  const items: { id: string; title: string }[] = [];

  for (const id of ids) {
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const entity = getEntityById(id);
    if (!entity) {
      continue;
    }
    items.push({ id: entity.id, title: entity.title });
  }

  return items;
}

/**
 * Compact Technology → Systems → Research → Applications → Trust matrix.
 * Aggregated from Technology entity relations in the registry.
 * No graph library or SVG graph.
 */
export function TechnologyRelationshipMatrix({
  heading = "Technology Relationships",
  introduction,
}: {
  heading?: string;
  introduction?: string;
}) {
  const technologyEntities = getEntitiesByDomain("technology");

  const systemIds = technologyEntities.flatMap((entity) => entity.relatedSystemIds);
  const researchIds = technologyEntities.flatMap(
    (entity) => entity.relatedResearchIds,
  );
  const applicationIds = technologyEntities.flatMap(
    (entity) => entity.relatedApplicationIds,
  );
  const trustIds = technologyEntities.flatMap((entity) => entity.relatedTrustIds);

  const layers: readonly MatrixLayer[] = [
    {
      id: "technology",
      title: "Technology",
      items: technologyEntities.map((entity) => ({
        id: entity.id,
        title: entity.title,
      })),
    },
    {
      id: "systems",
      title: "Systems",
      items: uniqueEntitiesFromIds(systemIds),
    },
    {
      id: "research",
      title: "Research",
      items: uniqueEntitiesFromIds(researchIds),
    },
    {
      id: "applications",
      title: "Applications",
      items: uniqueEntitiesFromIds(applicationIds),
    },
    {
      id: "trust",
      title: "Trust",
      items: uniqueEntitiesFromIds(trustIds),
    },
  ];

  const headingId = "technology-relationships-heading";

  return (
    <section
      id="technology-relationships"
      className="eng-block technology-relationship-matrix"
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="eng-block__heading">
        {heading}
      </h2>
      {introduction ? (
        <p className="eng-block__body">{introduction}</p>
      ) : null}

      <ol className="eng-diagram__list technology-relationship-matrix__flow">
        {layers.map((layer, index) => (
          <li key={layer.id} className="eng-diagram__node">
            {index > 0 ? (
              <span className="eng-diagram__connector" aria-hidden="true" />
            ) : null}
            <div className="eng-diagram__card technology-relationship-matrix__card">
              <span className="eng-diagram__label">{layer.title}</span>
              {layer.items.length > 0 ? (
                <ul className="technology-relationship-matrix__items">
                  {layer.items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              ) : (
                <span className="eng-diagram__detail">No linked entities</span>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="visually-hidden">
        Relationship flow from Technology through Systems, Research,
        Applications and Trust, aggregated from the knowledge entity registry.
      </p>
    </section>
  );
}
