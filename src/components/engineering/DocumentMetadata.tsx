import type { PageMetadata } from "@/components/engineering/engineering-types";

type DocumentMetadataProps = {
  metadata: PageMetadata;
};

const FIELD_ORDER: readonly (keyof PageMetadata)[] = [
  "category",
  "documentType",
  "status",
  "version",
  "lastUpdated",
  "readingTime",
  "relatedDomain",
];

const FIELD_LABELS: Record<keyof PageMetadata, string> = {
  category: "Category",
  documentType: "Document Type",
  status: "Status",
  version: "Version",
  lastUpdated: "Last Updated",
  readingTime: "Reading Time",
  relatedDomain: "Related Domain",
};

/** Optional document metadata header for engineering pages. */
export function DocumentMetadata({ metadata }: DocumentMetadataProps) {
  const entries = FIELD_ORDER.filter((key) => {
    const value = metadata[key];
    return typeof value === "string" && value.length > 0;
  }).map((key) => ({
    key,
    label: FIELD_LABELS[key],
    value: metadata[key] as string,
  }));

  if (entries.length === 0) {
    return null;
  }

  return (
    <dl className="eng-metadata">
      {entries.map((entry) => (
        <div key={entry.key} className="eng-metadata__item">
          <dt className="eng-metadata__label">{entry.label}</dt>
          <dd className="eng-metadata__value">{entry.value}</dd>
        </div>
      ))}
    </dl>
  );
}
