import { notFound } from "next/navigation";

import { ApplicationsPage } from "@/components/pages/ApplicationsPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { applicationsPageContent } from "@/content/pages/en/applications";

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
    <ApplicationsPage locale={localeParam} content={applicationsPageContent} />
  );
}
