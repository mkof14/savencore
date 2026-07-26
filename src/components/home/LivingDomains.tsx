"use client";

import { useEffect, useState } from "react";

export type LivingDomainScene = {
  id: string;
  label: string;
  line: string;
  webp: string;
  jpg: string;
};

type LivingDomainsProps = {
  scenes: readonly LivingDomainScene[];
  headline: string;
  support: string;
  /** Section landmark id for the headline. */
  titleId?: string;
  /** Accessible name for the scene rail. */
  railLabel?: string;
  /** Extra class on the section (e.g. primary living theater). */
  className?: string;
};

const ADVANCE_MS = 4500;

/**
 * Living theater — full-bleed active scene + scene rail.
 * Crossfade auto-advance; prefers-reduced-motion stays on the first scene.
 */
export function LivingDomains({
  scenes,
  headline,
  support,
  titleId = "pw-living-title",
  railLabel = "Care scenes",
  className,
}: LivingDomainsProps) {
  const [allowMotion, setAllowMotion] = useState(false);
  const [active, setActive] = useState(0);
  const [transitionsOn, setTransitionsOn] = useState(false);
  /** Bump to restart the auto-advance clock after a manual pick. */
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!allowMotion || scenes.length < 2) {
      setTransitionsOn(false);
      return;
    }
    const ready = window.requestAnimationFrame(() => setTransitionsOn(true));
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % scenes.length);
    }, ADVANCE_MS);
    return () => {
      window.cancelAnimationFrame(ready);
      window.clearInterval(id);
    };
  }, [allowMotion, scenes.length, clock]);

  const select = (index: number) => {
    setActive(index);
    setClock((c) => c + 1);
  };

  const current = scenes[active] ?? scenes[0];
  if (!current) return null;

  const sectionClass = className ? `pw-domains ${className}` : "pw-domains";

  return (
    <section className={sectionClass} aria-labelledby={titleId}>
      <div className="pw-home__inner pw-domains__intro">
        <h2 id={titleId} className="pw-domains__title">
          {headline}
        </h2>
        <p className="pw-domains__support">{support}</p>
      </div>

      <div className="pw-domains__theater">
        <div
          className={
            transitionsOn ? "pw-domains__stage is-ready" : "pw-domains__stage"
          }
          aria-hidden="true"
        >
          {scenes.map((scene, i) => (
            <picture
              key={scene.id}
              className={
                i === active
                  ? "pw-domains__frame is-active"
                  : "pw-domains__frame"
              }
            >
              <source srcSet={scene.webp} type="image/webp" />
              <img
                src={scene.jpg}
                alt=""
                width={1600}
                height={900}
                decoding="async"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                draggable={false}
              />
            </picture>
          ))}
          <div className="pw-domains__veil" />
        </div>

        <div className="pw-home__inner pw-domains__caption">
          <p className="pw-domains__caption-label">{current.label}</p>
          <p className="pw-domains__caption-line">{current.line}</p>
        </div>
      </div>

      <div className="pw-home__inner">
        <ul className="pw-domains__rail" role="tablist" aria-label={railLabel}>
          {scenes.map((scene, i) => (
            <li key={scene.id}>
              <button
                type="button"
                role="tab"
                aria-selected={i === active}
                className={
                  i === active
                    ? "pw-domains__rail-btn is-active"
                    : "pw-domains__rail-btn"
                }
                onClick={() => select(i)}
              >
                <span className="pw-domains__rail-thumb" aria-hidden="true">
                  <picture>
                    <source srcSet={scene.webp} type="image/webp" />
                    <img src={scene.jpg} alt="" width={120} height={68} />
                  </picture>
                </span>
                <span className="pw-domains__rail-label">{scene.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
