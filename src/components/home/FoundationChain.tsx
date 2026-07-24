import { foundationChainContent } from "@/content/home/en";

export function FoundationChain() {
  const content = foundationChainContent;

  return (
    <section
      className="home-section home-foundation"
      aria-labelledby="foundation-chain-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="foundation-chain-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ol className="home-foundation__stages">
          {content.stages.map((stage, index) => (
            <li key={stage.id} className="home-foundation__stage">
              <div className="home-foundation__stage-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="home-foundation__stage-body">
                <h3 className="home-foundation__stage-title">{stage.title}</h3>
                <p className="home-foundation__stage-role">{stage.role}</p>
                <p className="home-foundation__stage-text">{stage.description}</p>
              </div>
              {index < content.stages.length - 1 ? (
                <div
                  className="home-foundation__connector"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
