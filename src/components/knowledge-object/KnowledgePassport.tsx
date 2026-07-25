import type { KnowledgeObject } from "@/content/knowledge-objects";

type KnowledgePassportProps = {
  object: KnowledgeObject;
  compact?: boolean;
};

const PASSPORT_FIELDS: readonly {
  key: keyof KnowledgeObject;
  label: string;
}[] = [
  { key: "knowledgeId", label: "Knowledge ID" },
  { key: "domain", label: "Domain" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status" },
  { key: "version", label: "Version" },
  { key: "evidenceLevel", label: "Evidence" },
  { key: "maturity", label: "Maturity" },
  { key: "readingTime", label: "Reading Time" },
  { key: "lastReview", label: "Last Review" },
  { key: "owner", label: "Owner" },
];

/**
 * Compact engineering Knowledge Passport — identity and metadata only.
 */
export function KnowledgePassport({
  object,
  compact = false,
}: KnowledgePassportProps) {
  const fields = compact
    ? PASSPORT_FIELDS.filter((field) =>
        [
          "knowledgeId",
          "domain",
          "type",
          "status",
          "version",
          "evidenceLevel",
          "maturity",
          "readingTime",
        ].includes(field.key),
      )
    : PASSPORT_FIELDS;

  return (
    <section
      className={["ko-passport", compact ? "ko-passport--compact" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-label="Knowledge Passport"
    >
      <h3 className="ko-passport__title">Knowledge Passport</h3>
      <dl className="ko-passport__list">
        {fields.map((field) => (
          <div key={field.key} className="ko-passport__row">
            <dt className="ko-passport__label">{field.label}</dt>
            <dd className="ko-passport__value">{String(object[field.key])}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
