import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

import "./saven-logo.css";

export type SavenLogoSize = "header" | "footer" | "compact";
export type SavenLogoTone = "light" | "dark";

type SavenLogoProps = {
  locale: Locale;
  /** Layout size of the lockup. */
  variant?: SavenLogoSize;
  /** Ink color for SAVEN — dark = white on navy, light = navy on pale. */
  tone?: SavenLogoTone;
  className?: string;
  /** When false, render a non-linking mark (rare). Default true. */
  linked?: boolean;
};

/** Cropped mark (padding removed) — WebP for fast load. */
const MARK_SRC = "/brand/saven-logo-mark.webp";
/** Native cropped asset ratio (479×647). */
const MARK_ASPECT = 479 / 647;

const MARK_HEIGHT: Record<SavenLogoSize, number> = {
  header: 136,
  footer: 208,
  compact: 56,
};

/**
 * Approved SAVEN Core brand lockup:
 * [symbol] + SAVEN / CORE with gold ruled CORE line.
 * Always LTR — the mark never mirrors in RTL locales.
 */
export function SavenLogo({
  locale,
  variant = "header",
  tone = "dark",
  className,
  linked = true,
}: SavenLogoProps) {
  const classNames = [
    "saven-logo",
    `saven-logo--${variant}`,
    `saven-logo--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const markHeight = MARK_HEIGHT[variant];
  const markWidth = Math.round(markHeight * MARK_ASPECT);

  const body = (
    <>
      <Image
        src={MARK_SRC}
        alt="SAVEN Core"
        width={markWidth}
        height={markHeight}
        className="saven-logo__mark"
        priority={variant === "header"}
        draggable={false}
      />
      <span className="saven-logo__wordmark">
        <span className="saven-logo__saven">SAVEN</span>
        <span className="saven-logo__core">
          <span className="saven-logo__core-line" aria-hidden="true" />
          <span className="saven-logo__core-text">CORE</span>
          <span className="saven-logo__core-line" aria-hidden="true" />
        </span>
      </span>
    </>
  );

  if (!linked) {
    return (
      <span className={classNames} dir="ltr" lang="en">
        {body}
      </span>
    );
  }

  return (
    <Link
      href={localizePath(locale, "/")}
      className={classNames}
      dir="ltr"
      lang="en"
      aria-label="SAVEN Core"
    >
      {body}
    </Link>
  );
}
