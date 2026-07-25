import { notFound } from "next/navigation";

import { TechnicalPage } from "@/components/pages/TechnicalPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getFoundationPageContent } from "@/content/pages/get-localized-page";

type FoundationPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FoundationPage({ params }: FoundationPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <TechnicalPage
      locale={localeParam}
      content={getFoundationPageContent(localeParam)}
      knowledge={{
        knowledgeId: "page-foundation",
        href: "/foundation/",
        title: "Foundation",
        domain: "Foundation",
        entityId: "saven-core",
        typeOverride: "Foundation",
      }}
    />
  );
}
