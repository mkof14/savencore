import { notFound } from "next/navigation";

import { FaqPage } from "@/components/faq/FaqPage";
import { isLocale } from "@/config/locales";
import { getFaqPageContent } from "@/content/faq/get-faq-content";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getFaqPageContent(localeParam);
  const visual = domainVisualForHref("/faq/");
  return buildPageMetadata({
    locale: localeParam,
    path: "/faq/",
    title: content.title,
    description: content.lede.slice(0, 320),
    image: visual.mastheadImage,
    imageAlt: visual.mastheadAlt,
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <FaqPage locale={localeParam} content={getFaqPageContent(localeParam)} />
  );
}
