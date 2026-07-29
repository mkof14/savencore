import { getUi } from "@/i18n/ui";
import type { Locale } from "@/config/locales";
import { jsonStoreIsWritableHost } from "@/lib/admin/json-store";

type AdminStoreBannerProps = {
  locale: Locale;
};

/** Honest durability notice when invitations/roles/outbox cannot persist (D-0220). */
export function AdminStoreBanner({ locale }: AdminStoreBannerProps) {
  if (jsonStoreIsWritableHost()) return null;
  const ui = getUi(locale);
  return (
    <p className="admin-media-banner" role="note">
      {ui.admin.localStoreOnly}
    </p>
  );
}
