import { notFound } from "next/navigation";

import { BusinessPage } from "@/components/business/BusinessPage";
import { isLocale } from "@/config/locales";
import { getBusinessPageContent } from "@/content/business/get-business-page";
import {
  BUSINESS_SECTION_IDS,
  businessSectionPath,
  isBusinessSectionId,
} from "@/content/business/sections";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ locale: string; section: string }>;
};

export function generateStaticParams() {
  return BUSINESS_SECTION_IDS.map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam, section } = await params;
  if (!isLocale(localeParam) || !isBusinessSectionId(section)) {
    return {};
  }
  const content = getBusinessPageContent(localeParam);
  const nav = content.nav.find((item) => item.id === section);
  const title = nav ? `${nav.label} · ${content.metaTitle}` : content.metaTitle;
  return buildPageMetadata({
    locale: localeParam,
    path: businessSectionPath(section),
    title,
    description: content.metaDescription,
    image: "/domain/company/scene-long-horizon.webp",
    imageAlt: nav?.label ?? content.hero.title,
  });
}

/** Business section leaf under /business/[section]/ (D-0288). */
export default async function Page({ params }: Props) {
  const { locale: localeParam, section } = await params;
  if (!isLocale(localeParam) || !isBusinessSectionId(section)) {
    notFound();
  }
  return (
    <BusinessPage
      locale={localeParam}
      content={getBusinessPageContent(localeParam)}
      sectionId={section}
    />
  );
}
