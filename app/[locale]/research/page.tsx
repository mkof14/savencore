import { notFound } from "next/navigation";

import { ResearchPage } from "@/components/pages/ResearchPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { researchPageContent } from "@/content/pages/en/research";

type ResearchPageRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function ResearchRoutePage({
  params,
}: ResearchPageRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <ResearchPage locale={localeParam} content={researchPageContent} />;
}
