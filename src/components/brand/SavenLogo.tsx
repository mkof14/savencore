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

const MARK_PX: Record<SavenLogoSize, number> = {
  header: 88,
  footer: 128,
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

  const body = (
    <>
      <Image
        src="/brand/saven-logo.png"
        alt="SAVEN Core"
        width={MARK_PX[variant]}
        height={MARK_PX[variant]}
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
