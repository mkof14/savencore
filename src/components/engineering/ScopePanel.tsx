import type { ReactNode } from "react";

import type { Locale } from "@/config/locales";
import { DEFAULT_LOCALE } from "@/config/locales";
import { getUi } from "@/i18n/ui";

export type ScopePanelVariant =
  | "definition"
  | "current-scope"
  | "future-scope"
  | "human-oversight"
  | "safety-boundary"
  | "engineering-note"
  | "limitation";

type ScopePanelProps = {
  variant: ScopePanelVariant;
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
  locale?: Locale;
};

/**
 * Distinct reusable panels for scope, oversight, safety, and notes.
 */
export function ScopePanel({
  variant,
  title,
  children,
  id,
  className,
  locale = DEFAULT_LOCALE,
}: ScopePanelProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const label = getUi(locale).scope[variant];

  return (
    <aside
      id={id}
      className={[
        "scope-panel",
        `scope-panel--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={headingId}
    >
      <div className="scope-panel__rail" aria-hidden="true">
        <span className="scope-panel__rail-label">{label}</span>
      </div>
      <div className="scope-panel__body">
        <p className="scope-panel__type">{label}</p>
        <h2 id={headingId} className="scope-panel__title">
          {title}
        </h2>
        <div className="scope-panel__content">{children}</div>
      </div>
    </aside>
  );
}
