import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { DataInfrastructurePage } from "@/components/pages/DataInfrastructurePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { dataInfrastructurePageContent } from "@/content/pages/en/data-infrastructure";

type DataInfrastructureRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function DataInfrastructureRoutePage({
  params,
}: DataInfrastructureRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <DataInfrastructurePage
      locale={localeParam}
      content={dataInfrastructurePageContent}
    />
  );
}
