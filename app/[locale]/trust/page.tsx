import { notFound } from "next/navigation";

import { TrustPage } from "@/components/pages/TrustPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { trustPageContent } from "@/content/pages/en/trust";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <TrustPage locale={localeParam} content={trustPageContent} />;
}
