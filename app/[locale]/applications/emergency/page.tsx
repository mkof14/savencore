import { notFound } from "next/navigation";

import { ApplicationDisciplinePage } from "@/components/pages/ApplicationDisciplinePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getEmergencyPageContent } from "@/content/pages/get-localized-page";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <ApplicationDisciplinePage locale={localeParam} content={getEmergencyPageContent(localeParam)} />;
}
