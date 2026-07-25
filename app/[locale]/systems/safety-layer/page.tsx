import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { SystemDisciplinePage } from "@/components/pages/SystemDisciplinePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getSafetyLayerPageContent } from "@/content/pages/get-localized-page";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <SystemDisciplinePage locale={localeParam} content={getSafetyLayerPageContent(localeParam)} />
  );
}
