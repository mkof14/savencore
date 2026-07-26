import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact/ContactForm";
import type { Locale } from "@/config/locales";
import { getContactPageContent } from "@/content/contact/get-contact-content";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

import "./contact.css";

type ContactPageProps = {
  locale: Locale;
};

export function ContactPage({ locale }: ContactPageProps) {
  const content = getContactPageContent(locale);
  const ui = getUi(locale);
  const visual = domainVisualForHref("/contact/");
  const titleId = "contact-page-title";

  return (
    <article className="contact-page" aria-labelledby={titleId}>
      <header className="contact-page__masthead">
        <div className="contact-page__masthead-media" aria-hidden="true">
          <Image
            src={visual.mastheadImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="contact-page__masthead-image"
          />
          <div className="contact-page__masthead-scrim" />
        </div>
        <div className="contact-page__masthead-copy">
          <p className="contact-page__label">{content.label}</p>
          <h1 id={titleId} className="contact-page__title">
            {content.title}
          </h1>
          <p className="contact-page__lede">{content.lede}</p>
        </div>
      </header>

      <div className="contact-page__body">
        <aside className="contact-page__channel" aria-label={ui.footer.contact}>
          <p className="contact-page__channel-kicker">{content.emailNote}</p>
          <a
            className="contact-page__email"
            href={`mailto:${content.email}`}
          >
            {content.email}
          </a>
          <div className="contact-page__channel-copy">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <nav className="contact-page__related" aria-label={ui.hub.related}>
            <Link href={localizePath(locale, "/foundation/")}>
              {ui.navEntries["footer-company-about"]}
              <span aria-hidden="true"> →</span>
            </Link>
            <Link href={localizePath(locale, "/investors/")}>
              {ui.nav.investors}
              <span aria-hidden="true"> →</span>
            </Link>
          </nav>
        </aside>

        <section
          className="contact-page__panel"
          aria-label={ui.contact.formHeading}
        >
          <h2 className="contact-page__panel-title">{ui.contact.formHeading}</h2>
          <ContactForm
            labels={ui.contact}
            emailAddress={content.email}
            formNote={content.formNote}
          />
        </section>
      </div>
    </article>
  );
}
