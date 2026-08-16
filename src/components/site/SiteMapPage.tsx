import Link from "next/link";

import type { Locale } from "@/config/locales";
import {
  getFooterGroupTitle,
  getNavEntryLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { isFooterLinkPublished } from "@/navigation/navigation-types";
import {
  applicationsNavChildren,
  footerLinksFromDomain,
  legalNavChildren,
  published,
  systemsNavChildren,
  technologyNavChildren,
  trustNavChildren,
} from "@/navigation/site-navigation";

import "./sitemap-page.css";

type SiteMapPageProps = {
  locale: Locale;
};

/** Full published map for the HTML sitemap page (not the truncated footer chrome). */
function fullSitemapGroups() {
  return [
    {
      id: "technology",
      title: "Technology",
      links: footerLinksFromDomain("technology", technologyNavChildren),
    },
    {
      id: "architecture",
      title: "Architecture",
      links: [
        ...footerLinksFromDomain("systems", systemsNavChildren),
        published(
          "footer-systems-saven-robotics-interface",
          "Robotics Interface",
          "/systems/saven-robotics-interface/",
        ),
      ],
    },
    {
      id: "labs",
      title: "Labs",
      links: [
        published("footer-labs-overview", "Overview", "/labs/"),
        published(
          "footer-labs-saven-robotics-lab",
          "SAVEN Robotics Lab",
          "/labs/saven-robotics-lab/",
        ),
        published(
          "footer-labs-internal-future-lab",
          "Future Lab",
          "/labs/internal-future-lab/",
        ),
        published("footer-resources-lab", "Lab", "/lab/"),
      ],
    },
    {
      id: "applications",
      title: "Applications",
      links: footerLinksFromDomain("applications", applicationsNavChildren),
    },
    {
      id: "company",
      title: "Company",
      links: [
        published("footer-company-home", "Home", "/"),
        published("footer-company-about", "About", "/foundation/"),
        published(
          "footer-company-biomath-core",
          "BioMath Core",
          "/foundation/biomath-core/",
        ),
        published("footer-company-mission", "Mission", "/purpose/"),
        published("footer-company-investors", "Investors", "/investors/"),
        published(
          "footer-company-investors-contact",
          "Investor Contact",
          "/investors/contact/",
        ),
        published("footer-company-partners", "Partners", "/partners/"),
        published("footer-company-business", "Business", "/business/"),
        published(
          "footer-business-market-context",
          "Market Context",
          "/business/market-context/",
        ),
        published(
          "footer-business-human-data",
          "Human Data",
          "/business/human-data/",
        ),
        published(
          "footer-business-saven-physical-systems",
          "SAVEN & Physical Systems",
          "/business/saven-physical-systems/",
        ),
        published(
          "footer-business-where-value-is-created",
          "Where Value Is Created",
          "/business/where-value-is-created/",
        ),
        published(
          "footer-business-applications",
          "Business Applications",
          "/business/applications/",
        ),
        published(
          "footer-business-why-the-timing-matters",
          "Why the Timing Matters",
          "/business/why-the-timing-matters/",
        ),
        published(
          "footer-business-what-we-know-today",
          "What We Know Today",
          "/business/what-we-know-today/",
        ),
        published("footer-company-media", "Media", "/media/"),
        published("footer-company-contact", "Contact", "/contact/"),
        published("footer-company-roadmap", "Roadmap", "/roadmap/"),
        published("footer-resources-faq", "FAQ", "/faq/"),
      ],
    },
    {
      id: "trustLegal",
      title: "Trust · Legal",
      links: [
        ...footerLinksFromDomain("trust", trustNavChildren).flatMap((link) => {
          if (link.status !== "published" || link.href !== "/trust/security/") {
            return [link];
          }
          return [
            link,
            published(
              "footer-resources-security-issue",
              "Security Issue",
              "/resources/report-a-security-issue/",
            ),
          ];
        }),
        published("footer-legal-overview", "Legal", "/legal/"),
        ...legalNavChildren.map((item) =>
          published(`footer-${item.id}`, item.label, item.href),
        ),
      ],
    },
  ] as const;
}

/**
 * Human-readable HTML sitemap (D-0296) — not `sitemap.xml`.
 * Full published depth map (footer chrome may truncate with More…).
 */
export function SiteMapPage({ locale }: SiteMapPageProps) {
  const ui = getUi(locale);
  const groups = fullSitemapGroups()
    .map((group) => ({
      ...group,
      links: group.links.filter(isFooterLinkPublished),
    }))
    .filter((group) => group.links.length > 0);

  return (
    <main className="sitemap-page">
      <div className="sitemap-page__inner">
        <header className="sitemap-page__header">
          <p className="sitemap-page__eyebrow">{ui.sitemap.eyebrow}</p>
          <h1 className="sitemap-page__title">{ui.sitemap.title}</h1>
          <p className="sitemap-page__lede">{ui.sitemap.lede}</p>
        </header>

        <div className="sitemap-page__grid">
          {groups.map((group) => {
            const title = getFooterGroupTitle(locale, group.id, group.title);
            return (
              <section
                key={group.id}
                className="sitemap-page__group"
                aria-labelledby={`sitemap-${group.id}`}
              >
                <h2 className="sitemap-page__group-title" id={`sitemap-${group.id}`}>
                  {title}
                </h2>
                <ul className="sitemap-page__list">
                  {group.links.map((link) => {
                    if (!isFooterLinkPublished(link)) {
                      return null;
                    }
                    return (
                      <li key={link.id}>
                        <Link
                          href={localizePath(locale, link.href)}
                          className="sitemap-page__link"
                        >
                          {getNavEntryLabel(locale, link.id, link.label)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
