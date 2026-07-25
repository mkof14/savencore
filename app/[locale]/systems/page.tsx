import { notFound } from "next/navigation";

import "@/components/knowledge/knowledge.css";
import { SystemsPage } from "@/components/pages/SystemsPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getSystemsPageContent } from "@/content/pages/get-localized-page";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <SystemsPage locale={localeParam} content={getSystemsPageContent(localeParam)} />;
}
