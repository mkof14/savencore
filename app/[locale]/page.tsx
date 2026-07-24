import { notFound } from "next/navigation";

import { isLocale } from "@/config/locales";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/**
 * Temporary foundation placeholder — not the production Home page.
 * Replace in a later authorized phase.
 */
export default async function LocaleFoundationPage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main className="foundation-placeholder">
      <p>SAVEN Core</p>
      <p>Foundation build</p>
      <p>{locale}</p>
    </main>
  );
}
