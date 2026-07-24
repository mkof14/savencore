import type { ReactNode } from "react";

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
};

const LABELS: Record<ScopePanelVariant, string> = {
  definition: "Definition",
  "current-scope": "Current Scope",
  "future-scope": "Future Scope",
  "human-oversight": "Human Oversight",
  "safety-boundary": "Safety Boundary",
  "engineering-note": "Engineering Note",
  limitation: "Limitation",
};

/**
 * Distinct reusable panels for scope, oversight, safety, and notes.
 * Structural differences — not identical bordered boxes.
 */
export function ScopePanel({
  variant,
  title,
  children,
  id,
  className,
}: ScopePanelProps) {
  const headingId = id ? `${id}-heading` : undefined;

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
        <span className="scope-panel__rail-label">{LABELS[variant]}</span>
      </div>
      <div className="scope-panel__body">
        <p className="scope-panel__type">{LABELS[variant]}</p>
        <h2 id={headingId} className="scope-panel__title">
          {title}
        </h2>
        <div className="scope-panel__content">{children}</div>
      </div>
    </aside>
  );
}
