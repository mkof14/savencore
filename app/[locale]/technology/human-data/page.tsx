import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { HumanDataPage } from "@/components/pages/HumanDataPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { humanDataPageContent } from "@/content/pages/en/human-data";

type HumanDataRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function HumanDataRoutePage({
  params,
}: HumanDataRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <HumanDataPage locale={localeParam} content={humanDataPageContent} />;
}
