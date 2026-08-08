"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC = "/lab/video/s989898-gwr-mvp.mp4";
const POSTER_SRC = "/lab/video/s989898-gwr-mvp-poster.webp";

/**
 * Lab splash video band (D-0266) — owner preview only; not on public home.
 * Reduced-motion: static poster; no text overlay.
 */
export function LabVideoHero() {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div className="site-lab-video-hero" aria-hidden="true">
      <div className="site-lab-video-hero__frame">
        {allowMotion ? (
          <video
            className="site-lab-video-hero__media"
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- lab experiment poster
          <img
            className="site-lab-video-hero__media"
            src={POSTER_SRC}
            alt=""
            width={1280}
            height={720}
            decoding="async"
          />
        )}
      </div>
    </div>
  );
}
