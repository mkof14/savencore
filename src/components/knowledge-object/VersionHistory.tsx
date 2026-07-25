import type { KnowledgeObject } from "@/content/knowledge-objects";

type VersionHistoryProps = {
  object: KnowledgeObject;
};

/**
 * Version history — never fabricates prior revisions.
 */
export function VersionHistory({ object }: VersionHistoryProps) {
  return (
    <section className="ko-versions" aria-label="Version history">
      <h3 className="ko-versions__title">Version History</h3>
      <ul className="ko-versions__list">
        {object.versionHistory.map((entry, index) => (
          <li key={`${entry.version}-${index}`} className="ko-versions__item">
            <span className="ko-versions__label">Version</span>
            <span className="ko-versions__value">{entry.version}</span>
            <span className="ko-versions__label">Previous Version</span>
            <span className="ko-versions__value">{entry.previousVersion}</span>
            <span className="ko-versions__label">Summary of Changes</span>
            <span className="ko-versions__value">{entry.summaryOfChanges}</span>
            <span className="ko-versions__label">Date</span>
            <span className="ko-versions__value">{entry.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
