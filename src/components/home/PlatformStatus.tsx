import { platformStatusItems } from "@/content/home/knowledge-explorer";

/**
 * Current platform progress — published domain completion only.
 */
export function PlatformStatus() {
  return (
    <section
      className="kx-status"
      aria-labelledby="platform-status-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">Current status</p>
          <h2 id="platform-status-heading" className="kx-section-header__title">
            Platform progress
          </h2>
        </header>

        <ul className="kx-status__list">
          {platformStatusItems.map((item) => (
            <li
              key={item.id}
              className={[
                "kx-status__item",
                item.complete ? "is-complete" : "is-open",
              ].join(" ")}
            >
              <span className="kx-status__mark" aria-hidden="true">
                {item.complete ? "✔" : "·"}
              </span>
              <span className="kx-status__label">{item.label}</span>
              <span className="kx-status__state">{item.state}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
