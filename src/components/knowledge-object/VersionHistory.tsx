import type { Locale } from "@/config/locales";
import type { KnowledgeObject } from "@/content/knowledge-objects";
import { getUi } from "@/i18n/ui";

type VersionHistoryProps = {
  locale: Locale;
  object: KnowledgeObject;
};

/** Version history — never fabricates prior revisions. */
export function VersionHistory({ locale, object }: VersionHistoryProps) {
  const ui = getUi(locale);
  const display = (value: string) =>
    value === "Unspecified" ? ui.ko.notYetAssigned : value;

  return (
    <section className="ko-versions" aria-label={ui.ko.versionHistory}>
      <h3 className="ko-versions__title">{ui.ko.versionHistory}</h3>
      <ul className="ko-versions__list">
        {object.versionHistory.map((entry, index) => (
          <li key={`${entry.version}-${index}`} className="ko-versions__item">
            <span className="ko-versions__label">{ui.ko.version}</span>
            <span className="ko-versions__value">{display(entry.version)}</span>
            <span className="ko-versions__label">{ui.ko.previousVersion}</span>
            <span className="ko-versions__value">
              {display(entry.previousVersion)}
            </span>
            <span className="ko-versions__label">{ui.ko.summaryOfChanges}</span>
            <span className="ko-versions__value">
              {display(entry.summaryOfChanges)}
            </span>
            <span className="ko-versions__label">{ui.ko.date}</span>
            <span className="ko-versions__value">{display(entry.date)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
