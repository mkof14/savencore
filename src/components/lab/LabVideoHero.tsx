"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

const CACHE = "d0279";
const MUTE_KEY = "savencore-lab-video-muted";

type ChapterId = "understanding" | "assistance" | "care";
type ClipLabelKey = "site" | "gwr" | "saven";
type CaptionBeats = "site" | "saven";

type SourceSet = { webm: string; mp4: string };

type LabVideoClip = {
  id: string;
  labelKey: ClipLabelKey;
  sources: { desktop: SourceSet; mobile: SourceSet };
  poster: string;
  loopSeconds: number;
  chapters: readonly { id: ChapterId; at: number }[];
  /** When set, uses clip-specific caption strings from copy.clipCaptions. */
  captionBeats?: CaptionBeats;
};

const CLIPS: readonly LabVideoClip[] = [
  {
    id: "site",
    labelKey: "site",
    poster: `/lab/video/saven-site-1-poster.webp?v=${CACHE}`,
    loopSeconds: 60.52,
    sources: {
      desktop: {
        webm: `/lab/video/saven-site-1.webm?v=${CACHE}`,
        mp4: `/lab/video/saven-site-1.mp4?v=${CACHE}`,
      },
      mobile: {
        webm: `/lab/video/saven-site-1-mobile.webm?v=${CACHE}`,
        mp4: `/lab/video/saven-site-1-mobile.mp4?v=${CACHE}`,
      },
    },
    /* Master SAVEN_site 1: brand/people → home assistance → care settings (~60.5s; no black trim). */
    chapters: [
      { id: "understanding", at: 0 },
      { id: "assistance", at: 7 },
      { id: "care", at: 18 },
    ],
    captionBeats: "site",
  },
  {
    id: "gwr",
    labelKey: "gwr",
    poster: `/lab/video/s989898-gwr-mvp-poster.webp?v=${CACHE}`,
    loopSeconds: 10,
    sources: {
      desktop: {
        webm: `/lab/video/s989898-gwr-mvp.webm?v=${CACHE}`,
        mp4: `/lab/video/s989898-gwr-mvp.mp4?v=${CACHE}`,
      },
      mobile: {
        webm: `/lab/video/s989898-gwr-mvp-mobile.webm?v=${CACHE}`,
        mp4: `/lab/video/s989898-gwr-mvp-mobile.mp4?v=${CACHE}`,
      },
    },
    chapters: [
      { id: "understanding", at: 0 },
      { id: "assistance", at: 3.8 },
      { id: "care", at: 6.5 },
    ],
  },
  {
    id: "saven",
    labelKey: "saven",
    poster: `/lab/video/s2-gwr-mvp-poster.webp?v=${CACHE}`,
    loopSeconds: 9.85,
    sources: {
      desktop: {
        webm: `/lab/video/s2-gwr-mvp.webm?v=${CACHE}`,
        mp4: `/lab/video/s2-gwr-mvp.mp4?v=${CACHE}`,
      },
      mobile: {
        webm: `/lab/video/s2-gwr-mvp-mobile.webm?v=${CACHE}`,
        mp4: `/lab/video/s2-gwr-mvp-mobile.mp4?v=${CACHE}`,
      },
    },
    /* Encoded from master after ~0.15s pure-black skip: logo → Lab forms → closer support. */
    chapters: [
      { id: "understanding", at: 0 },
      { id: "assistance", at: 4.3 },
      { id: "care", at: 6.8 },
    ],
    captionBeats: "saven",
  },
] as const;

export type LabVideoHeroLink = {
  href: string;
  label: string;
};

export type LabVideoHeroCopy = {
  overlayEyebrow: string;
  overlayLine: string;
  conceptLabel?: string;
  /** Fallback / reduced-motion caption. */
  caption: string;
  captions: Record<ChapterId, string>;
  /** Optional per-clip caption beats (e.g. Site cut / SAVEN mark cut). */
  clipCaptions?: Partial<Record<CaptionBeats, Record<ChapterId, string>>>;
  chaptersLabel: string;
  chapterLabels: Record<ChapterId, string>;
  switcherLabel: string;
  clipLabels: Record<ClipLabelKey, string>;
  mute: string;
  unmute: string;
  linksLabel: string;
  links: LabVideoHeroLink[];
};

function pickSourceSet(clip: LabVideoClip): SourceSet {
  if (typeof window === "undefined") return clip.sources.desktop;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const saveData =
    "connection" in navigator &&
    Boolean(
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData,
    );
  return narrow || saveData ? clip.sources.mobile : clip.sources.desktop;
}

function chapterIndexAt(
  chapters: readonly { id: ChapterId; at: number }[],
  time: number,
): number {
  let idx = 0;
  for (let i = 0; i < chapters.length; i++) {
    const mark = chapters[i];
    if (mark && time + 0.02 >= mark.at) idx = i;
  }
  return idx;
}

/**
 * Lab splash video band (D-0266–D-0279) — owner preview only; not on public home.
 * Multi-clip playlist switcher; full-bleed video soft-embedded into page surface;
 * clear picture; overlay + explore links; chapter scrub + timed captions per active clip.
 * Mobile: interactive chrome below the stage (D-0279); desktop keeps on-stage overlay.
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
  const [clipIndex, setClipIndex] = useState(0);
  const [allowMotion, setAllowMotion] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [sources, setSources] = useState<SourceSet>(CLIPS[0]!.sources.desktop);
  const [ready, setReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(0);
  const [duration, setDuration] = useState(CLIPS[0]!.loopSeconds);

  const activeClip = CLIPS[clipIndex] ?? CLIPS[0]!;
  const chapters = activeClip.chapters;
  const firstChapter = chapters[0] ?? { id: "understanding" as const, at: 0 };

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const sync = () => {
      setAllowMotion(!motion.matches);
      setFinePointer(fine.matches);
      setSources(pickSourceSet(activeClip));
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
  }, [activeClip]);

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
  }, [allowMotion, shouldLoad, sources, clipIndex]);

  useEffect(() => {
    if (!shouldLoad || !allowMotion) return;
    const main = videoRef.current;
    if (!main) return;
    setReady(false);
    setProgress(0);
    setChapterIndex(0);
    setDuration(activeClip.loopSeconds);
    main.load();
    main.currentTime = 0;
    void main.play().catch(() => {});
  }, [shouldLoad, allowMotion, sources, clipIndex, activeClip.loopSeconds]);

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

      const caption = captionRef.current;
      if (caption) {
        const visible = Math.min(
          1,
          Math.max(0, (rect.bottom - 48) / Math.max(rect.height, 1)),
        );
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
    setChapterIndex(chapterIndexAt(chapters, main.currentTime));
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

  const selectClip = (index: number) => {
    if (index === clipIndex || index < 0 || index >= CLIPS.length) return;
    setClipIndex(index);
    const next = CLIPS[index]!;
    setSources(pickSourceSet(next));
    setReady(false);
    setProgress(0);
    setChapterIndex(0);
    setDuration(next.loopSeconds);
    setShouldLoad(true);
  };

  const seekToSeconds = (seconds: number) => {
    const main = videoRef.current;
    if (!main) return;
    const dur =
      Number.isFinite(main.duration) && main.duration > 0
        ? main.duration
        : activeClip.loopSeconds;
    main.currentTime = Math.max(0, Math.min(dur * 0.98, seconds));
    setProgress(main.currentTime / dur);
    setChapterIndex(chapterIndexAt(chapters, main.currentTime));
    void main.play().catch(() => {});
  };

  const activeChapter = chapters[chapterIndex] ?? firstChapter;
  const clipCaptionSet = activeClip.captionBeats
    ? copy.clipCaptions?.[activeClip.captionBeats]
    : undefined;
  const timedCaption = allowMotion
    ? (clipCaptionSet?.[activeChapter.id] ?? copy.captions[activeChapter.id])
    : copy.caption;
  const spanForTicks = duration > 0 ? duration : activeClip.loopSeconds;
  const posterSrc = activeClip.poster;

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
              key={activeClip.id}
              className="site-lab-video-hero__media"
              muted={muted}
              playsInline
              loop
              preload={shouldLoad ? "metadata" : "none"}
              poster={posterSrc}
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
              src={posterSrc}
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
          {copy.conceptLabel ? (
            <p className="site-lab-video-hero__concept">{copy.conceptLabel}</p>
          ) : null}
          <p className="site-lab-video-hero__overlay-eyebrow">
            {copy.overlayEyebrow}
          </p>
          <p className="site-lab-video-hero__overlay-line">{copy.overlayLine}</p>
        </div>
      </div>

      {/* Interactive chrome: overlaid on desktop; below stage on mobile (D-0279). */}
      <div className="site-lab-video-hero__controls">
        <div
          className="site-lab-video-hero__switcher"
          role="group"
          aria-label={copy.switcherLabel}
        >
          {CLIPS.map((clip, index) => {
            const selected = index === clipIndex;
            return (
              <button
                key={clip.id}
                type="button"
                className={[
                  "site-lab-video-hero__switcher-btn",
                  selected ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-pressed={selected}
                aria-current={selected ? "true" : undefined}
                onClick={() => selectClip(index)}
              >
                {copy.clipLabels[clip.labelKey]}
              </button>
            );
          })}
        </div>

        <div className="site-lab-video-hero__toolbar">
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
        </div>

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
              {chapters.map((chapter) => {
                const fraction = chapter.at / spanForTicks;
                const passed = progress * spanForTicks >= chapter.at - 0.02;
                return (
                  <button
                    key={`${activeClip.id}-${chapter.id}`}
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
        data-clip={activeClip.id}
      >
        <span
          key={`${activeClip.id}-${activeChapter.id}`}
          className="site-lab-video-hero__caption-text"
        >
          {timedCaption}
        </span>
      </p>
    </div>
  );
}
