import "./partner-formula.css";

export type PartnerFormulaPart = {
  label: string;
  note: string;
};

export type PartnerFormulaLabels = {
  heading: string;
  parts: readonly PartnerFormulaPart[];
  plus: string;
  equals: string;
  result: string;
};

type PartnerFormulaProps = {
  labels: PartnerFormulaLabels;
};

/**
 * Partnership model — hardware + SAVEN intelligence + application (D-0281 / D-0283).
 * Hub diagram grammar (Labs-stage surround); straight corners; readable on mobile as a stack.
 */
export function PartnerFormula({ labels }: PartnerFormulaProps) {
  const titleId = "partner-formula-title";
  return (
    <section className="partner-formula" aria-labelledby={titleId}>
      <h2 id={titleId} className="partner-formula__heading">
        {labels.heading}
      </h2>
      <div className="partner-formula__stage">
        <ol className="partner-formula__row">
          {labels.parts.map((part, index) => (
            <li key={part.label} className="partner-formula__item">
              {index > 0 ? (
                <span className="partner-formula__op" aria-hidden="true">
                  {labels.plus}
                </span>
              ) : null}
              <div className="partner-formula__card">
                <span className="partner-formula__step" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="partner-formula__label">{part.label}</p>
                <p className="partner-formula__note">{part.note}</p>
              </div>
            </li>
          ))}
          <li className="partner-formula__item partner-formula__item--result">
            <span className="partner-formula__op" aria-hidden="true">
              {labels.equals}
            </span>
            <div className="partner-formula__card partner-formula__card--result">
              <span className="partner-formula__step" aria-hidden="true">
                =
              </span>
              <p className="partner-formula__label">{labels.result}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
