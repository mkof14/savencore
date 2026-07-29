import { notFound } from "next/navigation";

import { SiteSearchClient } from "@/components/search/SiteSearchClient";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildPublishedSearchIndex } from "@/lib/search/published-search-index";

import "@/components/search/search.css";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/search/",
    title: ui.search.title,
    description: ui.search.lead.slice(0, 320),
  });
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const ui = getUi(localeParam);
  const sp = await searchParams;
  const raw = sp.q;
  const initialQuery = Array.isArray(raw) ? (raw[0] ?? "") : (raw ?? "");
  const index = buildPublishedSearchIndex(localeParam);

  return (
    <article className="site-search-page page">
      <div className="page-shell__inner">
        <div className="site-search-page__column">
          <h1 className="site-search-page__title">{ui.search.title}</h1>
          <p className="site-search-page__lead">{ui.search.lead}</p>
          <SiteSearchClient
            locale={localeParam}
            index={index}
            initialQuery={initialQuery}
            labels={{
              title: ui.search.title,
              lead: ui.search.lead,
              placeholder: ui.search.placeholder,
              submit: ui.search.submit,
              empty: ui.search.empty,
              noQuery: ui.search.noQuery,
              results: ui.search.results,
              honestNote: ui.search.honestNote,
            }}
          />
        </div>
      </div>
    </article>
  );
}
