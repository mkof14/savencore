import { notFound } from "next/navigation";

import { ApplicationContexts } from "@/components/home/ApplicationContexts";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanPurpose } from "@/components/home/HumanPurpose";
import "@/components/home/home.css";
import { isLocale } from "@/config/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Home route — Phase 1D.1 sections only (Hero, Human Purpose, Application strip).
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
      <div className="home__end" aria-hidden="true" />
    </div>
  );
}
