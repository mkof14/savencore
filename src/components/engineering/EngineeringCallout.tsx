import type { EngineeringCallout as EngineeringCalloutModel } from "@/components/engineering/engineering-types";

type EngineeringCalloutProps = {
  callout: EngineeringCalloutModel;
};

const TYPE_LABELS: Record<EngineeringCalloutModel["type"], string> = {
  information: "Information",
  "engineering-note": "Engineering Note",
  important: "Important",
  "future-work": "Future Work",
};

export function EngineeringCallout({ callout }: EngineeringCalloutProps) {
  const titleId = `eng-callout-${callout.id}`;

  return (
    <aside
      className={`eng-callout eng-callout--${callout.type}`}
      aria-labelledby={titleId}
    >
      <p className="eng-callout__type">{TYPE_LABELS[callout.type]}</p>
      <h3 id={titleId} className="eng-callout__title">
        {callout.title}
      </h3>
      <p className="eng-callout__text">{callout.text}</p>
    </aside>
  );
}
