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
  /** Active section on a leaf; null on the Business hub. */
  activeId: BusinessSectionId | null;
};

/**
 * Business section navigation — real leaf routes (D-0291).
 * Names only — no report numbering. No in-page scroll-spy.
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
  const hubPath = localizePath(locale, "/business/");

  return (
    <>
      <div className="biz-page__mobile-nav">
        <label className="biz-page__mobile-nav-label" htmlFor={selectId}>
          {mobileNavLabel}
        </label>
        <select
          id={selectId}
          className="biz-page__mobile-nav-select"
          value={activeId ?? ""}
          onChange={(event) => {
            const next = event.target.value;
            if (!next) {
              router.push(hubPath);
              return;
            }
            router.push(
              localizePath(locale, businessSectionPath(next as BusinessSectionId)),
            );
          }}
        >
          <option value="">{navLabel}</option>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <aside className="biz-page__nav-col">
        <nav className="biz-page__side-nav" aria-label={navLabel}>
          <div className="biz-page__side-nav-atmosphere" aria-hidden="true" />
          <div className="biz-page__side-nav-head">
            <p className="biz-page__side-nav-label">{navLabel}</p>
          </div>
          <ul className="biz-page__side-nav-list">
            <li>
              <Link
                href={hubPath}
                className={
                  activeId === null
                    ? "biz-page__side-nav-link biz-page__side-nav-link--active"
                    : "biz-page__side-nav-link"
                }
                aria-current={activeId === null ? "page" : undefined}
              >
                <span className="biz-page__side-nav-dot" aria-hidden="true" />
                <span className="biz-page__side-nav-text">{navLabel}</span>
              </Link>
            </li>
            {items.map((item) => {
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
                  >
                    <span className="biz-page__side-nav-dot" aria-hidden="true" />
                    <span className="biz-page__side-nav-text">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
