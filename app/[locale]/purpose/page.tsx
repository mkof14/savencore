import { notFound } from "next/navigation";

import { EditorialPage } from "@/components/pages/EditorialPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getPurposePageContent } from "@/content/pages/get-localized-page";

type PurposePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PurposePage({ params }: PurposePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <EditorialPage
      locale={localeParam}
      content={getPurposePageContent(localeParam)}
      knowledge={{
        knowledgeId: "page-purpose",
        href: "/purpose/",
        title: "Purpose",
        domain: "Purpose",
        typeOverride: "Foundation",
      }}
    />
  );
}
