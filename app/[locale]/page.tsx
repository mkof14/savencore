import { notFound } from "next/navigation";

import { ApplicationDirectory } from "@/components/home/ApplicationDirectory";
import { CorporateClosing } from "@/components/home/CorporateClosing";
import { DevelopmentStatus } from "@/components/home/DevelopmentStatus";
import { HomeHero } from "@/components/home/HomeHero";
import { PurposeFoundationOverview } from "@/components/home/PurposeFoundationOverview";
import { ResearchTrustOverview } from "@/components/home/ResearchTrustOverview";
import { TechnologySystemsDirectory } from "@/components/home/TechnologySystemsDirectory";
import "@/components/home/home.css";
import { isLocale } from "@/config/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Home route — Phase 1E.1 corporate gateway (seven regions).
 * English content is the controlled fallback for all locales in this phase.
 */
export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;

  return (
    <div className="home">
      <HomeHero locale={locale} />
      <PurposeFoundationOverview locale={locale} />
      <ApplicationDirectory locale={locale} />
      <TechnologySystemsDirectory locale={locale} />
      <ResearchTrustOverview locale={locale} />
      <DevelopmentStatus />
      <CorporateClosing locale={locale} />
    </div>
  );
}
