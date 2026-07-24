import { developmentStatusContent } from "@/content/home/en";

export function DevelopmentStatus() {
  const content = developmentStatusContent;

  return (
    <section
      className="home-section home-status"
      aria-labelledby="development-status-heading"
    >
      <div className="home__inner">
        <p className="home-section__label">{content.label}</p>
        <h2 id="development-status-heading" className="home-section__heading">
          {content.heading}
        </h2>
        <p className="home-section__body">{content.introduction}</p>

        <ol className="home-status__stages">
          {content.stages.map((stage, index) => (
            <li key={stage.id} className="home-status__stage">
              <div className="home-status__stage-meta">
                <span className="home-status__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="home-status__status">
                  <span className="home-status__status-label">Status</span>
                  <span className="home-status__status-value">
                    {stage.status}
                  </span>
                </p>
              </div>
              <div className="home-status__stage-body">
                <h3 className="home-status__stage-title">{stage.title}</h3>
                <p className="home-status__stage-text">{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="home-status__note">{content.statusNote}</p>
      </div>
    </section>
  );
}
