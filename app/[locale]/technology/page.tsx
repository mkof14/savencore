import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { TechnologyPage } from "@/components/pages/TechnologyPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getTechnologyPageContent } from "@/content/pages/get-localized-page";

type TechnologyPageRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function TechnologyRoutePage({
  params,
}: TechnologyPageRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <TechnologyPage locale={localeParam} content={getTechnologyPageContent(localeParam)} />
  );
}
