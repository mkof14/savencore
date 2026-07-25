import type { Locale } from "@/config/locales";
import { getHomeContent } from "@/content/home/get-home-content";
import { getUi } from "@/i18n/ui";

type PlatformStatusProps = {
  locale: Locale;
};

/** Current platform progress — honest status only. */
export function PlatformStatus({ locale }: PlatformStatusProps) {
  const items = getHomeContent(locale).platformStatus;
  const ui = getUi(locale);
  const stateLabel = {
    complete: ui.home.complete,
    inProgress: ui.home.inProgress,
    planned: ui.home.planned,
  } as const;

  return (
    <section
      className="kx-status"
      aria-labelledby="platform-status-heading"
    >
      <div className="home__inner">
        <header className="kx-section-header">
          <p className="kx-section-header__kicker">{ui.home.discover}</p>
          <h2 id="platform-status-heading" className="kx-section-header__title">
            {ui.home.platformProgress}
          </h2>
        </header>

        <ul className="kx-status__list">
          {items.map((item) => (
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
              <span className="kx-status__state">
                {stateLabel[item.stateKey]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
