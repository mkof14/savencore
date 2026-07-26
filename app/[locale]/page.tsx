import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PhysicalWorldHome } from "@/components/home/PhysicalWorldHome";
import { isLocale } from "@/config/locales";
import { getPhysicalWorldHomeContent } from "@/content/home/physical-world/get-physical-world-content";
import {
  buildPageMetadata,
  SITE_DEFAULT_TITLE,
} from "@/lib/seo/metadata";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const content = getPhysicalWorldHomeContent(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/",
    title: SITE_DEFAULT_TITLE,
    description: content.oneBreath,
    absoluteTitle: true,
  });
}

/**
 * Home — Layer 1: Intelligence for the Physical World (SITE_ASSIGNMENT Phase 1 / D-0133).
 */
export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <PhysicalWorldHome locale={localeParam} />;
}
