import { notFound } from "next/navigation";

import { canPerform } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import { MarketingChecklist } from "@/components/admin/MarketingChecklist";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminMarketingPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("marketer");
  if (!gate.ok || !canPerform(gate.role, "marketing")) {
    notFound();
  }

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.marketingTitle}</h1>
      <p className="admin-page__lead">{ui.admin.marketingLead}</p>
      <p className="admin-note">{ui.admin.marketingNote}</p>
      <MarketingChecklist locale={locale} />
    </div>
  );
}
