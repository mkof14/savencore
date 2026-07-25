import { notFound } from "next/navigation";

import { TrustPage } from "@/components/pages/TrustPage";
import "@/components/pages/pages.css";
import { isLocale } from "@/config/locales";
import { getTrustPageContent } from "@/content/pages/get-localized-page";

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  return <TrustPage locale={localeParam} content={getTrustPageContent(localeParam)} />;
}
