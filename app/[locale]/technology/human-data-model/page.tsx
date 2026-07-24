import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { HumanDataModelPage } from "@/components/pages/HumanDataModelPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { humanDataModelPageContent } from "@/content/pages/en/human-data-model";

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
      content={humanDataModelPageContent}
    />
  );
}
