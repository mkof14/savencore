import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDraftPage } from "@/components/legal/LegalDraftPage";
import { isLocale } from "@/config/locales";
import {
  getLegalPage,
  getLegalSlugs,
} from "@/content/legal/get-legal-content";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

type LegalPageRouteProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getLegalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const content = getLegalPage(slug, localeParam);
  if (!content) return {};
  const ui = getUi(localeParam);
  const description = `${ui.legal.draftNote}. ${content.summary}`.slice(0, 320);
  return buildPageMetadata({
    locale: localeParam,
    path: `/legal/${slug}/`,
    title: content.title,
    description,
  });
}

export default async function LegalPageRoute({ params }: LegalPageRouteProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const content = getLegalPage(slug, localeParam);
  if (!content) {
    notFound();
  }

  return <LegalDraftPage locale={localeParam} content={content} />;
}
