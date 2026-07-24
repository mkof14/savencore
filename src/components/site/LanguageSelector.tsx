"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef } from "react";

import {
  getLocaleLabel,
  LOCALES,
  type Locale,
} from "@/config/locales";
import { swapLocaleInPathname } from "@/navigation/locale-path";

type LanguageSelectorProps = {
  locale: Locale;
  idPrefix?: string;
};

export function LanguageSelector({
  locale,
  idPrefix = "language",
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

  return (
    <details ref={detailsRef} className="language-selector">
      <summary
        id={summaryId}
        className="language-selector__summary"
        aria-controls={panelId}
      >
        Language
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
              {getLocaleLabel(code)}
              <span className="language-selector__code">{code}</span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
