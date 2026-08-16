import { notFound } from "next/navigation";

import { SiteMapPage } from "@/components/site/SiteMapPage";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const ui = getUi(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/sitemap/",
    title: ui.sitemap.title,
    description: ui.sitemap.lede.slice(0, 320),
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <SiteMapPage locale={localeParam} />;
}
