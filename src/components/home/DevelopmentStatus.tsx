import { developmentStatusHomeContent } from "@/content/home/en";

export function DevelopmentStatus() {
  const content = developmentStatusHomeContent;

  return (
    <section
      className="home-region home-status"
      aria-labelledby="development-status-heading"
    >
      <div className="home__inner">
        <p className="home-region__label">{content.label}</p>
        <h2 id="development-status-heading" className="home-region__heading">
          {content.heading}
        </h2>

        <div className="home-status__table-wrap">
          <table className="home-status__table">
            <caption className="visually-hidden">
              Development status by stage
            </caption>
            <thead>
              <tr>
                <th scope="col">Stage</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {content.stages.map((stage) => (
                <tr key={stage.id}>
                  <th scope="row">{stage.title}</th>
                  <td>{stage.status}</td>
                  <td>{stage.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="home-status__note">{content.statusNote}</p>
      </div>
    </section>
  );
}
