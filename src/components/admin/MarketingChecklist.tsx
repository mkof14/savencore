"use client";

import { useMemo, useState } from "react";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

const CHECKLIST_KEYS = [
  "promoTitleClear",
  "promoHeroHonest",
  "promoContactReady",
  "promoLocalesReady",
  "promoSocialOptional",
  "promoNoFakeMetrics",
  "seoTitleDescription",
  "seoOgImage",
  "seoCanonical",
  "seoSitemap",
  "seoRobots",
  "seoHreflang",
] as const;

type MarketingChecklistProps = {
  locale: Locale;
};

export function MarketingChecklist({ locale }: MarketingChecklistProps) {
  const ui = getUi(locale);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const items = useMemo(
    () =>
      CHECKLIST_KEYS.map((key) => ({
        key,
        label: ui.admin[key],
      })),
    [ui],
  );

  const done = items.filter((item) => checked[item.key]).length;

  return (
    <>
      <p className="admin-card__meta" style={{ marginBottom: "1rem" }}>
        {ui.admin.checklistProgress
          .replace("{done}", String(done))
          .replace("{total}", String(items.length))}
      </p>
      <ul className="admin-checklist">
        {items.map((item) => (
          <li key={item.key}>
            <input
              type="checkbox"
              checked={Boolean(checked[item.key])}
              onChange={(event) =>
                setChecked((prev) => ({
                  ...prev,
                  [item.key]: event.target.checked,
                }))
              }
              id={`mkt-${item.key}`}
            />
            <label htmlFor={`mkt-${item.key}`}>{item.label}</label>
          </li>
        ))}
      </ul>
    </>
  );
}
