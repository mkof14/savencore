import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { HumanDataModelPage } from "@/components/pages/HumanDataModelPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getHumanDataModelPageContent } from "@/content/pages/get-localized-page";

type HumanDataModelRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function HumanDataModelRoutePage({
  params,
}: HumanDataModelRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <HumanDataModelPage
      locale={localeParam}
      content={getHumanDataModelPageContent(localeParam)}
    />
  );
}
