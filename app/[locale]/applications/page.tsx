import { notFound } from "next/navigation";

import { DirectoryPage } from "@/components/pages/DirectoryPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { applicationsPageContent } from "@/content/pages/en/applications";

type ApplicationsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ApplicationsPage({
  params,
}: ApplicationsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <DirectoryPage locale={localeParam} content={applicationsPageContent} />
  );
}
