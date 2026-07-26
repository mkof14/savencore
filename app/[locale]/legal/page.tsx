import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalIndexPage } from "@/components/legal/LegalIndexPage";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

type LegalIndexRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  const description = `${ui.legal.draftNote}. ${ui.legal.indexLead}`.slice(
    0,
    320,
  );
  return buildPageMetadata({
    locale: localeParam,
    path: "/legal/",
    title: ui.legal.indexTitle,
    description,
  });
}

export default async function LegalIndexRoute({ params }: LegalIndexRouteProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <LegalIndexPage locale={localeParam} />;
}
