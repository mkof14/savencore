import { systemLogicContent } from "@/content/home/en";

export function SystemLogic() {
  const content = systemLogicContent;

  return (
    <section
      className="home-section home-logic"
      aria-labelledby="system-logic-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="system-logic-heading" className="home-section__heading">
          {content.heading}
        </h2>

        <ol className="home-logic__steps">
          {content.steps.map((step, index) => (
            <li key={step.id} className="home-logic__step">
              <span className="home-logic__step-number" aria-hidden="true">
                {index + 1}
              </span>
              <div className="home-logic__step-body">
                <h3 className="home-logic__step-title">{step.title}</h3>
                <p className="home-logic__step-text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="home-logic__governance">{content.governanceNote}</p>
      </div>
    </section>
  );
}
