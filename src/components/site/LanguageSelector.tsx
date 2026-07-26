"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef } from "react";

import {
  getLocaleFlag,
  getLocaleLabel,
  LOCALES,
  type Locale,
} from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { swapLocaleInPathname } from "@/navigation/locale-path";

type LanguageSelectorProps = {
  locale: Locale;
  idPrefix?: string;
  /** Header opens downward; footer opens upward (D-0155). */
  direction?: "down" | "up";
};

export function LanguageSelector({
  locale,
  idPrefix = "language",
  direction = "down",
}: LanguageSelectorProps) {
  const pathname = usePathname() ?? `/${locale}/`;
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const panelId = useId();
  const summaryId = `${idPrefix}-summary`;

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    };

    details.addEventListener("keydown", onKeyDown);
    return () => details.removeEventListener("keydown", onKeyDown);
  }, []);

  const ui = getUi(locale);

  return (
    <details
      ref={detailsRef}
      className={`language-selector language-selector--${direction}`}
    >
      <summary
        id={summaryId}
        className="language-selector__summary"
        aria-controls={panelId}
      >
        <span className="language-selector__flag" aria-hidden="true">
          {getLocaleFlag(locale)}
        </span>
        {ui.language}
        <span className="language-selector__code" aria-hidden="true">
          {locale}
        </span>
      </summary>
      <div
        id={panelId}
        className="language-selector__panel"
        role="group"
        aria-labelledby={summaryId}
      >
        {LOCALES.map((code) => {
          const href = swapLocaleInPathname(pathname, code);
          const isCurrent = code === locale;

          return (
            <Link
              key={code}
              href={href}
              className="language-selector__option"
              aria-current={isCurrent ? "true" : undefined}
              hrefLang={code === "zh-cn" ? "zh-CN" : code}
              onClick={() => {
                if (detailsRef.current) {
                  detailsRef.current.open = false;
                }
              }}
            >
              <span className="language-selector__option-main">
                <span className="language-selector__flag" aria-hidden="true">
                  {getLocaleFlag(code)}
                </span>
                {getLocaleLabel(code)}
              </span>
              <span className="language-selector__code">{code}</span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
