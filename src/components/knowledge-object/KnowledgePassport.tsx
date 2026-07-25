import type { Locale } from "@/config/locales";
import type { KnowledgeObject } from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";

type KnowledgePassportProps = {
  locale: Locale;
  object: KnowledgeObject;
  compact?: boolean;
};

/**
 * Compact document information card — identity and metadata only.
 */
export function KnowledgePassport({
  locale,
  object,
  compact = false,
}: KnowledgePassportProps) {
  const ui = getUi(locale);
  const display = (value: string) =>
    value === "Unspecified" ? ui.ko.notYetAssigned : value;

  const fields: { key: keyof KnowledgeObject; label: string }[] = [
    { key: "knowledgeId", label: ui.ko.knowledgeId },
    { key: "domain", label: ui.ko.domain },
    { key: "type", label: ui.ko.type },
    { key: "status", label: ui.ko.status },
    { key: "version", label: ui.ko.version },
    { key: "evidenceLevel", label: ui.ko.evidence },
    { key: "maturity", label: ui.ko.maturity },
    { key: "readingTime", label: ui.ko.readingTime },
    { key: "lastReview", label: ui.ko.lastReview },
    { key: "owner", label: ui.ko.owner },
  ];

  const visible = compact
    ? fields.filter((field) =>
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
    : fields;

  return (
    <section
      className={["ko-passport", compact ? "ko-passport--compact" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-label={ui.ko.passport}
    >
      <h3 className="ko-passport__title">{ui.ko.passport}</h3>
      <dl className="ko-passport__list">
        {visible.map((field) => (
          <div key={field.key} className="ko-passport__row">
            <dt className="ko-passport__label">{field.label}</dt>
            <dd className="ko-passport__value">
              {display(String(object[field.key]))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
