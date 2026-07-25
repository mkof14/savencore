import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { ResearchPage } from "@/components/pages/ResearchPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import {
  getResearchPageContent,
  getResearchRelationsEntityId,
} from "@/content/pages/get-localized-page";

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

  return (
    <ResearchPage
      locale={localeParam}
      content={getResearchPageContent(localeParam)}
      relationsEntityId={getResearchRelationsEntityId()}
    />
  );
}
