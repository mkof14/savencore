import Link from "next/link";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import type { PublishedRoute } from "@/navigation/published-routes";

type MedicalDisclaimerNoticeProps = {
  locale: Locale;
  /** footer | legal — compact development notice plus legal links. */
  placement: "footer" | "legal";
};

/**
 * Footer / legal notice (D-0211 / D-0280) — short development line,
 * not a wall of disclaimers.
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
  const linkClass =
    placement === "footer"
      ? "site-footer__medical-link"
      : "legal-page__medical-link";

  const links: { href: PublishedRoute; label: string }[] = [
    { href: "/legal/privacy-policy/", label: ui.footer.privacy },
    { href: "/legal/terms-of-use/", label: ui.footer.terms },
    { href: "/legal/disclaimer/", label: ui.footer.disclaimer },
    {
      href: "/trust/responsible-development/",
      label: ui.footer.responsibleDevelopment,
    },
    { href: "/contact/", label: ui.footer.contact },
  ];

  return (
    <div className={className} role="note">
      <p className="site-footer__development-note">{ui.footer.developmentNote}</p>
      <p className="site-footer__notice-links">
        {links.map((link, index) => (
          <span key={link.href}>
            {index > 0 ? " · " : null}
            <Link href={localizePath(locale, link.href)} className={linkClass}>
              {link.label}
            </Link>
          </span>
        ))}
      </p>
      <p>
        <span>{ui.medicalDisclaimer.short}</span>{" "}
        <Link
          href={localizePath(locale, "/legal/medical-disclaimer/")}
          className={linkClass}
        >
          {ui.medicalDisclaimer.linkLabel}
        </Link>
      </p>
    </div>
  );
}
