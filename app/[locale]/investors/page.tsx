import { notFound } from "next/navigation";

import { InvestorsPage } from "@/components/investors/InvestorsPage";
import { isLocale } from "@/config/locales";
import { getInvestorsPremiumPageContent } from "@/content/investors/get-investors-page";
import { INVESTORS_PAGE_HREF } from "@/content/investors/page-en";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }
  const content = getInvestorsPremiumPageContent(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    path: INVESTORS_PAGE_HREF,
    title: content.metaTitle,
    description: content.metaDescription,
    image: "/domain/company/investors.webp",
    imageAlt: content.hero.title,
  });
}

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <InvestorsPage
      locale={localeParam}
      content={getInvestorsPremiumPageContent(localeParam)}
    />
  );
}
