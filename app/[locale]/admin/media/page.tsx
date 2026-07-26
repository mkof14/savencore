import { notFound } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import { MediaLibraryClient } from "@/components/admin/MediaLibraryClient";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { listMediaItems } from "@/lib/admin/media-store";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminMediaPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    notFound();
  }

  const items = await listMediaItems();

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.mediaTitle}</h1>
      <p className="admin-page__lead">{ui.admin.mediaLead}</p>
      <MediaLibraryClient
        locale={locale}
        role={gate.role}
        initialItems={items}
      />
    </div>
  );
}
