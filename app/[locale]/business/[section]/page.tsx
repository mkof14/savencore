import { notFound, permanentRedirect } from "next/navigation";

import { BusinessPage } from "@/components/business/BusinessPage";
import { isLocale } from "@/config/locales";
import { getBusinessPageContent } from "@/content/business/get-business-page";
import {
  BUSINESS_LEGACY_SECTION_SLUGS,
  BUSINESS_SECTION_IDS,
  businessSectionPath,
  isBusinessSectionId,
  resolveBusinessSectionSlug,
  type BusinessSectionId,
} from "@/content/business/sections";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localizePath } from "@/navigation/locale-path";

type Props = {
  params: Promise<{ locale: string; section: string }>;
};

export function generateStaticParams() {
  const legacy = Object.keys(BUSINESS_LEGACY_SECTION_SLUGS);
  return [...BUSINESS_SECTION_IDS, ...legacy].map((section) => ({ section }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam, section } = await params;
  const resolved = resolveBusinessSectionSlug(section);
  if (!isLocale(localeParam) || !resolved) {
    return {};
  }
  const content = getBusinessPageContent(localeParam);
  const nav = content.nav.find((item) => item.id === resolved);
  const title = nav ? `${nav.label} · ${content.metaTitle}` : content.metaTitle;
  return buildPageMetadata({
    locale: localeParam,
    path: businessSectionPath(resolved),
    title,
    description: content.metaDescription,
    image: "/domain/company/scene-long-horizon.webp",
    imageAlt: nav?.label ?? content.hero.title,
  });
}

/**
 * Business section leaf (D-0291).
 * Legacy D-0288 slugs permanently redirect to the canonical leaf path.
 */
export default async function Page({ params }: Props) {
  const { locale: localeParam, section } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const resolved = resolveBusinessSectionSlug(section);
  if (!resolved) {
    notFound();
  }

  if (!isBusinessSectionId(section)) {
    permanentRedirect(
      localizePath(localeParam, businessSectionPath(resolved)),
    );
  }

  const sectionId: BusinessSectionId = section;

  return (
    <BusinessPage
      locale={localeParam}
      content={getBusinessPageContent(localeParam)}
      sectionId={sectionId}
    />
  );
}
