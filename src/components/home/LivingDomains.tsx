"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/config/locales";
import { getNavEntryLabel } from "@/i18n/nav-label";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

export type LivingDomainScene = {
  id: string;
  label: string;
  line: string;
  webp: string;
  jpg: string;
  /** Published application (or related) destination under the thumb. */
  href?: PublishedRoute;
  /** navEntries key for the link label. */
  linkNavId?: string;
  linkFallbackLabel?: string;
};

type LivingDomainsProps = {
  locale: Locale;
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
 * Manual pick jumps the stage into view immediately (D-0208).
 */
export function LivingDomains({
  locale,
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
  const theaterRef = useRef<HTMLDivElement>(null);

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
    // Instant raise: skip crossfade so the chosen scene appears now.
    setTransitionsOn(false);
    setActive(index);
    setClock((c) => c + 1);
    theaterRef.current?.scrollIntoView({
      behavior: allowMotion ? "smooth" : "auto",
      block: "center",
      inline: "nearest",
    });
  };

  const current = scenes[active] ?? scenes[0];
  if (!current) return null;

  const sectionClass = className ? `pw-domains ${className}` : "pw-domains";

  const stageLinkLabel =
    current.href && current.linkNavId
      ? getNavEntryLabel(
          locale,
          current.linkNavId,
          current.linkFallbackLabel ?? current.linkNavId,
        )
      : null;

  return (
    <section className={sectionClass} aria-labelledby={titleId}>
      <div className="pw-home__inner pw-domains__intro">
        <h2 id={titleId} className="pw-domains__title">
          {headline}
        </h2>
        <p className="pw-domains__support">{support}</p>
      </div>

      <div ref={theaterRef} className="pw-domains__theater">
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
          {current.href && stageLinkLabel ? (
            <p className="pw-domains__caption-cta">
              <Link
                href={localizePath(locale, current.href)}
                className="pw-domains__stage-link"
              >
                {stageLinkLabel}
                <span aria-hidden="true"> →</span>
              </Link>
            </p>
          ) : null}
        </div>
      </div>

      <div className="pw-home__inner">
        <ul className="pw-domains__rail" role="tablist" aria-label={railLabel}>
          {scenes.map((scene, i) => {
            const linkLabel =
              scene.href && scene.linkNavId
                ? getNavEntryLabel(
                    locale,
                    scene.linkNavId,
                    scene.linkFallbackLabel ?? scene.linkNavId,
                  )
                : null;

            return (
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
                {scene.href && linkLabel ? (
                  <Link
                    href={localizePath(locale, scene.href)}
                    className="pw-domains__rail-link"
                  >
                    {linkLabel}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
