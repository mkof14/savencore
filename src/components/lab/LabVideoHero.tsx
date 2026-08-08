"use client";

import { useEffect, useRef, useState } from "react";

const POSTER_SRC = "/lab/video/s989898-gwr-mvp-poster.webp?v=d0267";

type SourceSet = { webm: string; mp4: string };

const DESKTOP: SourceSet = {
  webm: "/lab/video/s989898-gwr-mvp.webm?v=d0267",
  mp4: "/lab/video/s989898-gwr-mvp.mp4?v=d0267",
};

const MOBILE: SourceSet = {
  webm: "/lab/video/s989898-gwr-mvp-mobile.webm?v=d0267",
  mp4: "/lab/video/s989898-gwr-mvp-mobile.mp4?v=d0267",
};

function pickSources(): SourceSet {
  if (typeof window === "undefined") return DESKTOP;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const saveData =
    "connection" in navigator &&
    Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData,
    );
  return narrow || saveData ? MOBILE : DESKTOP;
}

/**
 * Lab splash video band (D-0266 / D-0267) — owner preview only; not on public home.
 * Light dual-format sources, viewport/connection pick, pause offscreen,
 * reduced-motion → poster; cinematic CSS stack (Ken Burns, vignette, grain, grade).
 */
export function LabVideoHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const depthRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(false);
  const [sources, setSources] = useState<SourceSet>(DESKTOP);
  const [useDepth, setUseDepth] = useState(false);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 768px)");
    const sync = () => {
      const motionOk = !motion.matches;
      setAllowMotion(motionOk);
      setSources(pickSources());
      setUseDepth(motionOk && !narrow.matches);
    };
    sync();
    motion.addEventListener("change", sync);
    narrow.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !allowMotion) return;
    let visible = false;
    const syncPlayback = () => {
      const main = videoRef.current;
      const depth = depthRef.current;
      if (!main) return;
      if (visible) {
        void main.play().catch(() => {});
        if (depth) void depth.play().catch(() => {});
      } else {
        main.pause();
        depth?.pause();
      }
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
        if (visible) setShouldLoad(true);
        syncPlayback();
      },
      { rootMargin: "120px 0px", threshold: 0.05 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [allowMotion, useDepth, shouldLoad, sources]);

  useEffect(() => {
    if (!shouldLoad || !allowMotion) return;
    const main = videoRef.current;
    if (!main) return;
    main.load();
    void main.play().catch(() => {});
    const depth = depthRef.current;
    if (depth) {
      depth.load();
      void depth.play().catch(() => {});
    }
  }, [shouldLoad, allowMotion, sources, useDepth]);

  const onCanPlay = () => setReady(true);

  return (
    <div
      ref={rootRef}
      className={`site-lab-video-hero${ready ? " is-ready" : ""}`}
      aria-hidden="true"
    >
      <div className="site-lab-video-hero__frame">
        {allowMotion ? (
          <>
            {useDepth && shouldLoad ? (
              <video
                ref={depthRef}
                className="site-lab-video-hero__depth"
                muted
                playsInline
                loop
                preload="none"
                poster={POSTER_SRC}
                onCanPlay={onCanPlay}
              >
                <source src={sources.webm} type="video/webm" />
                <source src={sources.mp4} type="video/mp4" />
              </video>
            ) : null}
            <video
              ref={videoRef}
              className="site-lab-video-hero__media"
              muted
              playsInline
              loop
              preload={shouldLoad ? "metadata" : "none"}
              poster={POSTER_SRC}
              onCanPlay={onCanPlay}
              onLoadedData={onCanPlay}
            >
              {shouldLoad ? (
                <>
                  <source src={sources.webm} type="video/webm" />
                  <source src={sources.mp4} type="video/mp4" />
                </>
              ) : null}
            </video>
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- lab experiment poster
          <img
            className="site-lab-video-hero__media site-lab-video-hero__media--static"
            src={POSTER_SRC}
            alt=""
            width={1280}
            height={720}
            decoding="async"
          />
        )}
        <div className="site-lab-video-hero__grade" />
        <div className="site-lab-video-hero__grain" />
        <div className="site-lab-video-hero__vignette" />
        <div className="site-lab-video-hero__fade" />
      </div>
    </div>
  );
}
