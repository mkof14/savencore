"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Locale } from "@/config/locales";
import {
  filterPublishedSearchIndex,
  type PublishedSearchHit,
} from "@/lib/search/published-search-index";
import { localizePath } from "@/navigation/locale-path";

import "./search.css";

type SiteSearchClientProps = {
  locale: Locale;
  index: readonly PublishedSearchHit[];
  labels: {
    title: string;
    lead: string;
    placeholder: string;
    submit: string;
    empty: string;
    noQuery: string;
    results: string;
    honestNote: string;
  };
  initialQuery?: string;
};

export function SiteSearchClient({
  locale,
  index,
  labels,
  initialQuery = "",
}: SiteSearchClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const hits = useMemo(
    () => filterPublishedSearchIndex(index, query),
    [index, query],
  );
  const trimmed = query.trim();

  return (
    <div className="site-search">
      <form
        className="site-search__form"
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="visually-hidden" htmlFor="site-search-q">
          {labels.title}
        </label>
        <input
          id="site-search-q"
          className="site-search__input"
          type="search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={labels.placeholder}
          autoComplete="off"
          enterKeyHint="search"
        />
        <span className="site-search__submit" aria-hidden="true">
          {labels.submit}
        </span>
      </form>

      <p className="site-search__note" role="note">
        {labels.honestNote}
      </p>

      {!trimmed ? (
        <p className="site-search__empty">{labels.noQuery}</p>
      ) : hits.length === 0 ? (
        <p className="site-search__empty">{labels.empty}</p>
      ) : (
        <div className="site-search__results">
          <p className="site-search__count">
            {labels.results.replace("{count}", String(hits.length))}
          </p>
          <ul className="site-search__list">
            {hits.map((hit) => (
              <li key={hit.href}>
                <Link
                  href={localizePath(locale, hit.href)}
                  className="site-search__link"
                >
                  <span className="site-search__link-title">{hit.title}</span>
                  <span className="site-search__link-meta">
                    {hit.group}
                    <span aria-hidden="true"> · </span>
                    {hit.href}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
