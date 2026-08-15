import { notFound } from "next/navigation";

import { BusinessPage } from "@/components/business/BusinessPage";
import { isLocale } from "@/config/locales";
import { getBusinessPageContent } from "@/content/business/get-business-page";
import { BUSINESS_PAGE_HREF } from "@/content/business/page-en";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getBusinessPageContent(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: BUSINESS_PAGE_HREF,
    title: content.metaTitle,
    description: content.metaDescription,
    image: "/domain/company/scene-long-horizon.webp",
    imageAlt: content.hero.title,
  });
}

/** Business hub — overview + links into section leaves (D-0288). */
export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <BusinessPage
      locale={localeParam}
      content={getBusinessPageContent(localeParam)}
      sectionId={null}
    />
  );
}
