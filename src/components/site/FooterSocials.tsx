"use client";

import type { Locale } from "@/config/locales";
import { getSocialLinks, type SocialNetwork } from "@/config/social";
import { getUi } from "@/i18n/ui";

type FooterSocialsProps = {
  locale: Locale;
};

const LABELS: Record<SocialNetwork, keyof ReturnType<typeof getUi>["social"]> = {
  facebook: "facebook",
  youtube: "youtube",
  x: "x",
  linkedin: "linkedin",
  instagram: "instagram",
};

export function FooterSocials({ locale }: FooterSocialsProps) {
  const ui = getUi(locale);
  const links = getSocialLinks();

  return (
    <nav className="site-footer__socials" aria-label={ui.social.navLabel}>
      <ul className="site-footer__social-list">
        {links.map((link) => {
          const label = ui.social[LABELS[link.id]];
          const title = link.configured
            ? label
            : `${label} — ${ui.social.notConfigured}`;

          if (link.configured) {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`site-footer__social-link site-footer__social-link--${link.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  aria-label={label}
                >
                  <SocialIcon network={link.id} />
                  <span className="visually-hidden">{label}</span>
                </a>
              </li>
            );
          }

          return (
            <li key={link.id}>
              <span
                className={`site-footer__social-link site-footer__social-link--${link.id} site-footer__social-link--disabled`}
                role="link"
                aria-disabled="true"
                title={title}
                aria-label={title}
              >
                <SocialIcon network={link.id} />
                <span className="visually-hidden">{title}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function SocialIcon({ network }: { network: SocialNetwork }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 20,
    height: 20,
    "aria-hidden": true as const,
    focusable: false as const,
  };

  switch (network) {
    case "facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.6l.4-3H13V9c0-.6.4-1 1-1z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z"
          />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M16.7 4h2.5l-5.5 6.3L20.5 20h-5.1l-4-5.2L6.8 20H4.3l5.9-6.7L3.7 4h5.2l3.6 4.8L16.7 4zm-.9 14.4h1.4L8.3 5.5H6.8l9 12.9z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M6.4 9.2H3.7V20h2.7V9.2zM5 4.3C4 4.3 3.3 5 3.3 5.9S4 7.5 5 7.5s1.7-.7 1.7-1.6S6 4.3 5 4.3zM20.3 20h-2.7v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V9.2h2.6v1.5h.1c.4-.7 1.3-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.9-8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 4.4c-2.1 0-2.3 0-3.1.1a4.3 4.3 0 0 0-3.1 1.3 4.3 4.3 0 0 0-1.3 3.1c-.1.8-.1 1-.1 3.1s0 2.3.1 3.1a4.3 4.3 0 0 0 1.3 3.1 4.3 4.3 0 0 0 3.1 1.3c.8.1 1 .1 3.1.1s2.3 0 3.1-.1a4.3 4.3 0 0 0 3.1-1.3 4.3 4.3 0 0 0 1.3-3.1c.1-.8.1-1 .1-3.1s0-2.3-.1-3.1a4.3 4.3 0 0 0-1.3-3.1 4.3 4.3 0 0 0-3.1-1.3c-.8-.1-1-.1-3.1-.1zm0-1.7c2.1 0 2.4 0 3.2.1a6 6 0 0 1 4.3 2.5 6 6 0 0 1 1.3 2.9c.1.8.1 1.1.1 3.2s0 2.4-.1 3.2a6 6 0 0 1-1.3 2.9 6 6 0 0 1-2.9 1.3c-.8.1-1.1.1-3.2.1s-2.4 0-3.2-.1a6 6 0 0 1-2.9-1.3 6 6 0 0 1-1.3-2.9c-.1-.8-.1-1.1-.1-3.2s0-2.4.1-3.2a6 6 0 0 1 1.3-2.9 6 6 0 0 1 2.9-1.3c.8-.1 1.1-.1 3.2-.1z"
          />
        </svg>
      );
    default: {
      const _exhaustive: never = network;
      return _exhaustive;
    }
  }
}
