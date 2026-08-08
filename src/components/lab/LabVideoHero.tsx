"use client";

import { useEffect, useRef, useState } from "react";

const CACHE = "d0270";
const POSTER_SRC = `/lab/video/s989898-gwr-mvp-poster.webp?v=${CACHE}`;
const MUTE_KEY = "savencore-lab-video-muted";

type SourceSet = { webm: string; mp4: string };

const DESKTOP: SourceSet = {
  webm: `/lab/video/s989898-gwr-mvp.webm?v=${CACHE}`,
  mp4: `/lab/video/s989898-gwr-mvp.mp4?v=${CACHE}`,
};

const MOBILE: SourceSet = {
  webm: `/lab/video/s989898-gwr-mvp-mobile.webm?v=${CACHE}`,
  mp4: `/lab/video/s989898-gwr-mvp-mobile.mp4?v=${CACHE}`,
};

export type LabVideoHeroCopy = {
  caption: string;
  mute: string;
  unmute: string;
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
 * Lab splash video band (D-0266–D-0270) — owner preview only; not on public home.
 * Full-bleed single video + poster; obvious cinematic CSS (Ken Burns / vignette / grain /
 * grade / parallax / cursor light); mute control; caption strip below. No editorial frame.
 */
export function LabVideoHero({ copy }: { copy: LabVideoHeroCopy }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [sources, setSources] = useState<SourceSet>(DESKTOP);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const sync = () => {
      setAllowMotion(!motion.matches);
      setFinePointer(fine.matches);
      setSources(pickSources());
    };
    sync();
    motion.addEventListener("change", sync);
    fine.addEventListener("change", sync);
    const narrow = window.matchMedia("(max-width: 768px)");
    narrow.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      fine.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(MUTE_KEY);
      if (stored === "0") setMuted(false);
      if (stored === "1") setMuted(true);
    } catch {
      /* sessionStorage unavailable */
    }
  }, []);

  useEffect(() => {
    const main = videoRef.current;
    if (main) main.muted = muted;
    try {
      sessionStorage.setItem(MUTE_KEY, muted ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [muted, ready, shouldLoad]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !allowMotion) return;
    let visible = false;
    const syncPlayback = () => {
      const main = videoRef.current;
      if (!main) return;
      if (visible) {
        void main.play().catch(() => {});
      } else {
        main.pause();
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
  }, [allowMotion, shouldLoad, sources]);

  useEffect(() => {
    if (!shouldLoad || !allowMotion) return;
    const main = videoRef.current;
    if (!main) return;
    main.load();
    void main.play().catch(() => {});
  }, [shouldLoad, allowMotion, sources]);

  useEffect(() => {
    if (!allowMotion) return;
    const root = rootRef.current;
    const layer = parallaxRef.current;
    if (!root || !layer) return;
    let raf = 0;
    const update = () => {
      const rect = root.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const mid = rect.top + rect.height / 2;
      const t = (mid - viewH / 2) / viewH;
      /* Strong Lab parallax — must read when scrolling (±~64px + slight scale). */
      const y = Math.max(-64, Math.min(64, t * -92));
      const s = 1 + Math.min(0.06, Math.abs(t) * 0.08);
      layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      layer.style.transform = "";
    };
  }, [allowMotion, ready]);

  useEffect(() => {
    if (!allowMotion || !finePointer) return;
    const root = rootRef.current;
    if (!root) return;
    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      root.style.setProperty("--lab-cx", `${x.toFixed(2)}%`);
      root.style.setProperty("--lab-cy", `${y.toFixed(2)}%`);
      root.classList.add("is-cursor-active");
    };
    const onLeave = () => {
      root.classList.remove("is-cursor-active");
    };
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.classList.remove("is-cursor-active");
    };
  }, [allowMotion, finePointer]);

  const onCanPlay = () => setReady(true);

  const onTimeUpdate = () => {
    const main = videoRef.current;
    if (!main || !Number.isFinite(main.duration) || main.duration <= 0) return;
    setProgress(main.currentTime / main.duration);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    const main = videoRef.current;
    if (main) {
      main.muted = next;
      if (!next) void main.play().catch(() => {});
    }
  };

  return (
    <div
      ref={rootRef}
      className={[
        "site-lab-video-hero",
        ready ? "is-ready" : "",
        finePointer ? "is-pointer-fine" : "",
        allowMotion ? "" : "is-reduced-motion",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="site-lab-video-hero__stage">
        <div ref={parallaxRef} className="site-lab-video-hero__parallax">
          {allowMotion ? (
            <video
              ref={videoRef}
              className="site-lab-video-hero__media"
              muted={muted}
              playsInline
              loop
              preload={shouldLoad ? "metadata" : "none"}
              poster={POSTER_SRC}
              onCanPlay={onCanPlay}
              onLoadedData={onCanPlay}
              onTimeUpdate={onTimeUpdate}
            >
              {shouldLoad ? (
                <>
                  <source src={sources.webm} type="video/webm" />
                  <source src={sources.mp4} type="video/mp4" />
                </>
              ) : null}
            </video>
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
        </div>

        <div className="site-lab-video-hero__grade" aria-hidden="true" />
        <div className="site-lab-video-hero__grain" aria-hidden="true" />
        <div className="site-lab-video-hero__vignette" aria-hidden="true" />
        {finePointer && allowMotion ? (
          <div className="site-lab-video-hero__cursor" aria-hidden="true" />
        ) : null}
        <div className="site-lab-video-hero__fade" aria-hidden="true" />

        {allowMotion ? (
          <button
            type="button"
            className="site-lab-video-hero__mute"
            onClick={toggleMute}
            aria-pressed={!muted}
            aria-label={muted ? copy.unmute : copy.mute}
          >
            {muted ? copy.unmute : copy.mute}
          </button>
        ) : null}

        {allowMotion ? (
          <div
            className="site-lab-video-hero__progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            aria-hidden="true"
          >
            <span
              className="site-lab-video-hero__progress-bar"
              style={{ transform: `scaleX(${Math.max(0, Math.min(1, progress))})` }}
            />
          </div>
        ) : null}
      </div>

      <p className="site-lab-video-hero__caption">{copy.caption}</p>
    </div>
  );
}
