import { notFound } from "next/navigation";

import { ContinueExploring } from "@/components/home/ContinueExploring";
import { DomainMap } from "@/components/home/DomainMap";
import { FeaturedConcepts } from "@/components/home/FeaturedConcepts";
import { HomeHero } from "@/components/home/HomeHero";
import { KnowledgeExplorer } from "@/components/home/KnowledgeExplorer";
import { PlatformStatus } from "@/components/home/PlatformStatus";
import "@/components/home/home.css";
import { isLocale } from "@/config/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Home — Knowledge Explorer entrance to SAVEN Core.
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
      <KnowledgeExplorer locale={locale} />
      <DomainMap locale={locale} />
      <PlatformStatus />
      <FeaturedConcepts locale={locale} />
      <ContinueExploring locale={locale} />
    </div>
  );
}
