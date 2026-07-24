import { notFound } from "next/navigation";

import { ApplicationContexts } from "@/components/home/ApplicationContexts";
import { FoundationChain } from "@/components/home/FoundationChain";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanPurpose } from "@/components/home/HumanPurpose";
import { ResearchLabs } from "@/components/home/ResearchLabs";
import { SystemLogic } from "@/components/home/SystemLogic";
import { SystemsOverview } from "@/components/home/SystemsOverview";
import { TechnologyOverview } from "@/components/home/TechnologyOverview";
import { TrustArchitecture } from "@/components/home/TrustArchitecture";
import "@/components/home/home.css";
import { isLocale } from "@/config/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Home route — Phase 1D.1–1D.3 sections only.
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
      <HumanPurpose />
      <ApplicationContexts locale={locale} />
      <FoundationChain />
      <SystemLogic />
      <TechnologyOverview locale={locale} />
      <SystemsOverview locale={locale} />
      <ResearchLabs locale={locale} />
      <TrustArchitecture />
      <div className="home__end" aria-hidden="true" />
    </div>
  );
}
