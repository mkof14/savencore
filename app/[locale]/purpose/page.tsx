import { notFound } from "next/navigation";

import { EditorialPage } from "@/components/pages/EditorialPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { purposePageContent } from "@/content/pages/en/purpose";

type PurposePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PurposePage({ params }: PurposePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <EditorialPage locale={localeParam} content={purposePageContent} />;
}
