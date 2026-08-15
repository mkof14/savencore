"use client";

import { useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Locale } from "@/config/locales";
import type { BusinessNavItem } from "@/content/business/page-en";
import {
  businessSectionPath,
  type BusinessSectionId,
} from "@/content/business/sections";
import { localizePath } from "@/navigation/locale-path";

type BusinessSectionNavProps = {
  locale: Locale;
  navLabel: string;
  mobileNavLabel: string;
  items: readonly BusinessNavItem[];
  /** Active section id, or null on the Business hub. */
  activeId: BusinessSectionId | null;
};

/**
 * Business side navigation — real sub-routes under /business/ (D-0288).
 * No in-page scroll jumping; Link navigation keeps layout calm.
 */
export function BusinessSectionNav({
  locale,
  navLabel,
  mobileNavLabel,
  items,
  activeId,
}: BusinessSectionNavProps) {
  const selectId = useId();
  const router = useRouter();

  return (
    <>
      <nav className="biz-page__side-nav" aria-label={navLabel}>
        <p className="biz-page__side-nav-label">{navLabel}</p>
        <ul className="biz-page__side-nav-list">
          {items.map((item, index) => {
            const href = localizePath(locale, businessSectionPath(item.id));
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "biz-page__side-nav-link biz-page__side-nav-link--active"
                      : "biz-page__side-nav-link"
                  }
                  aria-current={isActive ? "page" : undefined}
                  scroll
                >
                  <span className="biz-page__side-nav-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="biz-page__side-nav-text">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="biz-page__mobile-nav">
        <label className="biz-page__mobile-nav-label" htmlFor={selectId}>
          {mobileNavLabel}
        </label>
        <select
          id={selectId}
          className="biz-page__mobile-nav-select"
          value={activeId ?? ""}
          onChange={(event) => {
            const next = event.target.value as BusinessSectionId;
            if (!next) {
              router.push(localizePath(locale, "/business/"));
              return;
            }
            router.push(localizePath(locale, businessSectionPath(next)));
          }}
        >
          <option value="">
            {navLabel}
          </option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
