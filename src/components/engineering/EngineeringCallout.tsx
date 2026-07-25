import type { EngineeringCallout as EngineeringCalloutModel } from "@/components/engineering/engineering-types";
import type { Locale } from "@/config/locales";
import { DEFAULT_LOCALE } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type EngineeringCalloutProps = {
  callout: EngineeringCalloutModel;
  locale?: Locale;
};

export function EngineeringCallout({
  callout,
  locale = DEFAULT_LOCALE,
}: EngineeringCalloutProps) {
  const titleId = `eng-callout-${callout.id}`;
  const ui = getUi(locale);
  const typeLabel =
    callout.type === "future-work"
      ? ui.callout["future-scope"]
      : ui.callout[callout.type];

  return (
    <aside
      className={`eng-callout eng-callout--${callout.type}`}
      aria-labelledby={titleId}
    >
      <p className="eng-callout__type">{typeLabel}</p>
      <h3 id={titleId} className="eng-callout__title">
        {callout.title}
      </h3>
      <p className="eng-callout__text">{callout.text}</p>
    </aside>
  );
}
