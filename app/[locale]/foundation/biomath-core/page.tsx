import { notFound } from "next/navigation";

import { BioMathCorePage } from "@/components/foundation/BioMathCorePage";
import { isLocale } from "@/config/locales";
import { BIOMATH_CORE_PAGE_HREF } from "@/content/pages/en/biomath-core";
import { getBioMathCorePageContent } from "@/content/pages/get-localized-page";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getBioMathCorePageContent(localeParam);
  // Title must be BioMath Core (not Foundation label). Description uses approved page copy only.
  const description = [
    content.title,
    content.lede,
    content.livingModel.support,
  ]
    .filter(Boolean)
    .join(" ")
    .slice(0, 320);
  return buildPageMetadata({
    locale: localeParam,
    path: BIOMATH_CORE_PAGE_HREF,
    title: content.title,
    description,
    image: "/domain/foundation/biomath-core-sphere.png",
    imageAlt: content.hero.visualAlt,
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <BioMathCorePage
      locale={localeParam}
      content={getBioMathCorePageContent(localeParam)}
    />
  );
}
