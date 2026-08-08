"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

const CACHE = "d0276";
const POSTER_SRC = `/lab/video/s989898-gwr-mvp-poster.webp?v=${CACHE}`;
const MUTE_KEY = "savencore-lab-video-muted";
/** Nominal loop length from master t=0 (D-0276 — opening dots-person restored). */
const LOOP_SECONDS = 10;

type ChapterId = "understanding" | "assistance" | "care";

/** Absolute scene times (seconds) across the ~10s Lab cut. */
const CHAPTERS: readonly { id: ChapterId; at: number }[] = [
  { id: "understanding", at: 0 },
  { id: "assistance", at: 3.8 },
  { id: "care", at: 6.5 },
] as const;

type SourceSet = { webm: string; mp4: string };

const DESKTOP: SourceSet = {
  webm: `/lab/video/s989898-gwr-mvp.webm?v=${CACHE}`,
  mp4: `/lab/video/s989898-gwr-mvp.mp4?v=${CACHE}`,
};

const MOBILE: SourceSet = {
  webm: `/lab/video/s989898-gwr-mvp-mobile.webm?v=${CACHE}`,
  mp4: `/lab/video/s989898-gwr-mvp-mobile.mp4?v=${CACHE}`,
};

export type LabVideoHeroLink = {
  href: string;
  label: string;
};

export type LabVideoHeroCopy = {
  overlayEyebrow: string;
  overlayLine: string;
  /** Fallback / reduced-motion caption. */
  caption: string;
  captions: Record<ChapterId, string>;
  chaptersLabel: string;
  chapterLabels: Record<ChapterId, string>;
  mute: string;
  unmute: string;
  linksLabel: string;
  links: LabVideoHeroLink[];
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

function chapterIndexAt(time: number): number {
  let idx = 0;
  for (let i = 0; i < CHAPTERS.length; i++) {
    const mark = CHAPTERS[i];
    if (mark && time + 0.02 >= mark.at) idx = i;
  }
  return idx;
}

const FIRST_CHAPTER = { id: "understanding" as const, at: 0 };

function chapterAt(index: number): { id: ChapterId; at: number } {
  return CHAPTERS[index] ?? FIRST_CHAPTER;
}

/**
 * Lab splash video band (D-0266–D-0276) — owner preview only; not on public home.
 * Full-bleed single video embedded into page surface (symmetric soft feathered edges; no hard box);
 * clear video (no grain / heavy vignette / heavy grade); overlay copy + explore links;
 * clickable chapter ticks, timed captions, light ambient sides, scroll-linked caption; mute / parallax / soft cursor.
 */
export function LabVideoHero({
  locale,
  copy,
}: {
  locale: Locale;
  copy: LabVideoHeroCopy;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowMotion, setAllowMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [sources, setSources] = useState<SourceSet>(DESKTOP);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [duration, setDuration] = useState(LOOP_SECONDS);

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
      /* Light parallax only — no scale (D-0274 restores original framing). */
      const y = Math.max(-18, Math.min(18, t * -28));
      layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;

      /* Scroll-linked caption opacity — fades as the band leaves the viewport. */
      const caption = captionRef.current;
      if (caption) {
        const visible =
          Math.min(1, Math.max(0, (rect.bottom - 48) / Math.max(rect.height, 1)));
        caption.style.opacity = visible.toFixed(3);
      }
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
      if (captionRef.current) captionRef.current.style.opacity = "";
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

  const onCanPlay = () => {
    const main = videoRef.current;
    if (main && Number.isFinite(main.duration) && main.duration > 0) {
      setDuration(main.duration);
    }
    setReady(true);
  };

  const onTimeUpdate = () => {
    const main = videoRef.current;
    if (!main || !Number.isFinite(main.duration) || main.duration <= 0) return;
    setDuration(main.duration);
    setProgress(main.currentTime / main.duration);
    setChapterIndex(chapterIndexAt(main.currentTime));
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

  const seekToSeconds = (seconds: number) => {
    const main = videoRef.current;
    if (!main) return;
    const dur =
      Number.isFinite(main.duration) && main.duration > 0
        ? main.duration
        : LOOP_SECONDS;
    main.currentTime = Math.max(0, Math.min(dur * 0.98, seconds));
    setProgress(main.currentTime / dur);
    setChapterIndex(chapterIndexAt(main.currentTime));
    void main.play().catch(() => {});
  };

  const activeChapter = chapterAt(chapterIndex);
  const timedCaption = allowMotion
    ? copy.captions[activeChapter.id]
    : copy.caption;
  const spanForTicks = duration > 0 ? duration : LOOP_SECONDS;

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

        <div className="site-lab-video-hero__ambient" aria-hidden="true" />
        {finePointer && allowMotion ? (
          <div className="site-lab-video-hero__cursor" aria-hidden="true" />
        ) : null}
        <div className="site-lab-video-hero__fade" aria-hidden="true" />

        <div className="site-lab-video-hero__overlay">
          <p className="site-lab-video-hero__overlay-eyebrow">
            {copy.overlayEyebrow}
          </p>
          <p className="site-lab-video-hero__overlay-line">{copy.overlayLine}</p>
        </div>

        <nav
          className="site-lab-video-hero__links"
          aria-label={copy.linksLabel}
        >
          {copy.links.map((link) => (
            <Link
              key={link.href}
              className="site-lab-video-hero__link"
              href={localizePath(locale, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
          <div className="site-lab-video-hero__progress-wrap">
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
                style={{
                  transform: `scaleX(${Math.max(0, Math.min(1, progress))})`,
                }}
              />
            </div>
            <div
              className="site-lab-video-hero__chapters"
              role="group"
              aria-label={copy.chaptersLabel}
            >
              {CHAPTERS.map((chapter) => {
                const fraction = chapter.at / spanForTicks;
                const passed = progress * spanForTicks >= chapter.at - 0.02;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    className={[
                      "site-lab-video-hero__chapter",
                      passed ? "is-passed" : "",
                      activeChapter.id === chapter.id ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{ insetInlineStart: `${fraction * 100}%` }}
                    aria-label={copy.chapterLabels[chapter.id]}
                    aria-current={
                      activeChapter.id === chapter.id ? "true" : undefined
                    }
                    onClick={() => seekToSeconds(chapter.at)}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <p
        ref={captionRef}
        className="site-lab-video-hero__caption"
        aria-live="polite"
        data-chapter={activeChapter.id}
      >
        <span key={activeChapter.id} className="site-lab-video-hero__caption-text">
          {timedCaption}
        </span>
      </p>
    </div>
  );
}
