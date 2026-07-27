import { notFound } from "next/navigation";

import { MediaPage } from "@/components/media/MediaPage";
import { isLocale } from "@/config/locales";
import { getMediaPageContent } from "@/content/media/get-media-content";
import { listPublicMediaItems } from "@/lib/admin/media-store";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getMediaPageContent(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: "/media/",
    title: content.title,
    description: content.lede.slice(0, 320),
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const content = getMediaPageContent(localeParam);
  const items = await listPublicMediaItems();
  return (
    <MediaPage locale={localeParam} content={content} items={items} />
  );
}
