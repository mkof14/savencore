import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { TechnologyDisciplinePage } from "@/components/pages/TechnologyDisciplinePage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { securityPageContent } from "@/content/pages/en/security";

type Props = { params: Promise<{ locale: string }> };

export default async function SecurityRoutePage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return (
    <TechnologyDisciplinePage
      locale={localeParam}
      content={securityPageContent}
    />
  );
}
