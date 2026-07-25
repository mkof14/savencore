import type { KnowledgeObject } from "@/content/knowledge-objects";

type KnowledgeLifecycleProps = {
  object: KnowledgeObject;
};

const LIFECYCLE_FIELDS: readonly {
  key: keyof KnowledgeObject["lifecycle"];
  label: string;
}[] = [
  { key: "created", label: "Created" },
  { key: "reviewed", label: "Reviewed" },
  { key: "published", label: "Published" },
  { key: "updated", label: "Updated" },
  { key: "nextReview", label: "Next Review" },
  { key: "deprecated", label: "Deprecated" },
  { key: "futureRevision", label: "Future Revision" },
];

/**
 * Document lifecycle fields — placeholders when values are unavailable.
 */
export function KnowledgeLifecycle({ object }: KnowledgeLifecycleProps) {
  return (
    <section className="ko-lifecycle" aria-label="Document lifecycle">
      <h3 className="ko-lifecycle__title">Lifecycle</h3>
      <ul className="ko-lifecycle__list">
        {LIFECYCLE_FIELDS.map((field) => (
          <li key={field.key} className="ko-lifecycle__item">
            <span className="ko-lifecycle__label">{field.label}</span>
            <span className="ko-lifecycle__value">
              {object.lifecycle[field.key]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
