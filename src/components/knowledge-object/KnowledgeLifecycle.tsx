import type { Locale } from "@/config/locales";
import type { KnowledgeObject } from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";

type KnowledgeLifecycleProps = {
  locale: Locale;
  object: KnowledgeObject;
};

/** Document history fields — placeholders when values are unavailable. */
export function KnowledgeLifecycle({ locale, object }: KnowledgeLifecycleProps) {
  const ui = getUi(locale);
  const display = (value: string) =>
    value === "Not yet assigned." ? ui.ko.notYetAssigned : value;

  const fields: { key: keyof KnowledgeObject["lifecycle"]; label: string }[] = [
    { key: "created", label: ui.ko.created },
    { key: "reviewed", label: ui.ko.reviewed },
    { key: "published", label: ui.ko.published },
    { key: "updated", label: ui.ko.updated },
    { key: "nextReview", label: ui.ko.nextReview },
    { key: "deprecated", label: ui.ko.deprecated },
    { key: "futureRevision", label: ui.ko.futureRevision },
  ];

  return (
    <section className="ko-lifecycle" aria-label={ui.ko.lifecycle}>
      <h3 className="ko-lifecycle__title">{ui.ko.lifecycle}</h3>
      <ul className="ko-lifecycle__list">
        {fields.map((field) => (
          <li key={field.key} className="ko-lifecycle__item">
            <span className="ko-lifecycle__label">{field.label}</span>
            <span className="ko-lifecycle__value">
              {display(object.lifecycle[field.key])}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
