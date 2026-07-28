import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type MedicalDisclaimerNoticeProps = {
  locale: Locale;
  /** footer | legal — same protective copy, different chrome class. */
  placement: "footer" | "legal";
};

/**
 * Protective medical disclaimer strip (D-0211) — not clinical claims.
 * Aligns with /legal/medical-disclaimer/ draft tone + Master Spec limits.
 */
export function MedicalDisclaimerNotice({
  locale,
  placement,
}: MedicalDisclaimerNoticeProps) {
  const ui = getUi(locale);
  const className =
    placement === "footer"
      ? "site-footer__medical"
      : "legal-page__medical-notice";

  return (
    <p className={className} role="note">
      <span>{ui.medicalDisclaimer.short}</span>{" "}
      <Link
        href={localizePath(locale, "/legal/medical-disclaimer/")}
        className={
          placement === "footer"
            ? "site-footer__medical-link"
            : "legal-page__medical-link"
        }
      >
        {ui.medicalDisclaimer.linkLabel}
      </Link>
    </p>
  );
}
