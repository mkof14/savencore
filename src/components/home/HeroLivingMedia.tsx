"use client";

import { useEffect, useState } from "react";

type CollagePanel = {
  id: string;
  webp: string;
  jpg: string;
  /** CSS grid area name */
  area: string;
};

/**
 * Five clear help scenes as one elegant living collage.
 * Emphasis cycles across panels; reduced-motion keeps a static collage.
 */
const PANELS: readonly CollagePanel[] = [
  {
    id: "manipulator",
    webp: "/home/hero-collage/01-manipulator.webp",
    jpg: "/home/hero-collage/01-manipulator.jpg",
    area: "a",
  },
  {
    id: "hospital",
    webp: "/home/hero-collage/02-hospital.webp",
    jpg: "/home/hero-collage/02-hospital.jpg",
    area: "b",
  },
  {
    id: "home-elder",
    webp: "/home/hero-collage/03-home-elder.webp",
    jpg: "/home/hero-collage/03-home-elder.jpg",
    area: "c",
  },
  {
    id: "family",
    webp: "/home/hero-collage/04-family.webp",
    jpg: "/home/hero-collage/04-family.jpg",
    area: "d",
  },
  {
    id: "mobile",
    webp: "/home/hero-collage/05-mobile.webp",
    jpg: "/home/hero-collage/05-mobile.jpg",
    area: "e",
  },
] as const;

/** Featured-panel dwell — clear cycle without feeling rushed */
const STEP_MS = 3200;

/**
 * Hero media column: living photoreal help collage,
 * or a static collage when reduced-motion is preferred.
 */
export function HeroLivingMedia() {
  const [allowMotion, setAllowMotion] = useState(false);
  const [active, setActive] = useState(0);
  const [transitionsOn, setTransitionsOn] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!allowMotion) {
      setTransitionsOn(false);
      return;
    }
    const ready = window.requestAnimationFrame(() => setTransitionsOn(true));
    const id = window.setInterval(() => {
      setActive((s) => (s + 1) % PANELS.length);
    }, STEP_MS);
    return () => {
      window.cancelAnimationFrame(ready);
      window.clearInterval(id);
    };
  }, [allowMotion]);

  return (
    <div className="pw-hero__media" aria-hidden="true">
      <div
        className={
          transitionsOn
            ? "pw-hero__collage is-living is-ready"
            : allowMotion
              ? "pw-hero__collage is-living"
              : "pw-hero__collage"
        }
      >
        {PANELS.map((panel, i) => (
          <picture
            key={panel.id}
            className={
              i === active
                ? `pw-hero__panel pw-hero__panel--${panel.area} is-active`
                : `pw-hero__panel pw-hero__panel--${panel.area}`
            }
          >
            <source srcSet={panel.webp} type="image/webp" />
            <img
              src={panel.jpg}
              alt=""
              width={900}
              height={600}
              decoding="async"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              draggable={false}
            />
          </picture>
        ))}
      </div>
    </div>
  );
}
