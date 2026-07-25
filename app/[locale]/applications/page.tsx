import { notFound } from "next/navigation";

import { ApplicationsPage } from "@/components/pages/ApplicationsPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getApplicationsPageContent } from "@/content/pages/get-localized-page";

type ApplicationsRouteProps = {
  params: Promise<{ locale: string }>;
};

export default async function ApplicationsRoute({
  params,
}: ApplicationsRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <ApplicationsPage locale={localeParam} content={getApplicationsPageContent(localeParam)} />
  );
}
