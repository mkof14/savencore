import type { EditorialPageContent } from "@/components/pages/page-types";
import type { Locale } from "@/config/locales";
import type {
  FlagshipBrochureContent,
  FlagshipPageContent,
} from "@/content/flagship/en";
import {
  getFutureLabPageContent,
  getInvestorsContactPageContent,
  getInvestorsPageContent,
  getLabsHubPageContent,
  getRoadmapPageContent,
  getRoboticsInterfacePageContent,
  getRoboticsLabPageContent,
  getSecurityIssuePageContent,
} from "@/content/flagship/get-flagship-content";
import { domainVisualForHref } from "@/content/domain/domain-visuals";
import { HUB_MASTHEAD, pathImageForHref } from "@/content/hub/hub-visuals";
import type {
  HubHighlight,
  HubPageContent,
  HubPathLink,
  HubSection,
} from "@/content/hub/types";
import { investorsScenesEn } from "@/content/investors/scenes";
import {
  getFutureLabScenes,
  getLabsDataLoopLabels,
  getLabsOverviewScenes,
  getRoboticsLabScenes,
} from "@/content/labs/get-labs-visual-content";
import { getRoboticsInterfaceDiagramLabels } from "@/content/systems/get-robotics-interface-diagram";
import { deepLocalize } from "@/content/pages/localize-content";
import { resolveContentLocale } from "@/i18n/types";
import { dictionary as dictionaryAr } from "@/content/flagship/dictionaries/ar";
import { dictionary as dictionaryDe } from "@/content/flagship/dictionaries/de";
import { dictionary as dictionaryEs } from "@/content/flagship/dictionaries/es";
import { dictionary as dictionaryFr } from "@/content/flagship/dictionaries/fr";
import { dictionary as dictionaryHe } from "@/content/flagship/dictionaries/he";
import { dictionary as dictionaryJa } from "@/content/flagship/dictionaries/ja";
import { dictionary as dictionaryRu } from "@/content/flagship/dictionaries/ru";
import { dictionary as dictionaryUk } from "@/content/flagship/dictionaries/uk";
import { dictionary as dictionaryZhCn } from "@/content/flagship/dictionaries/zh-cn";
import { getEntityById } from "@/content/knowledge/entity-registry";
import type { ApplicationsPageContent } from "@/content/pages/en/applications";
import type { TechnologyPageContent } from "@/content/pages/en/technology";
import type { TrustPageContent } from "@/content/pages/en/trust";
import {
  getApplicationsPageContent,
  getPurposePageContent,
  getTechnologyPageContent,
  getTrustPageContent,
} from "@/content/pages/get-localized-page";
import { getUi } from "@/i18n/ui";
import { technologyNavChildren } from "@/navigation/site-navigation";

export type FlagshipHubVariant =
  | "labs-hub"
  | "investors"
  | "robotics-lab"
  | "default";

function firstSentence(text: string, max = 140): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^[^.!?]+[.!?]/);
  const sentence = (match?.[0] ?? trimmed).trim();
  if (sentence.length <= max) return sentence;
  const cut = sentence.slice(0, max - 1);
  const boundary = cut.lastIndexOf(" ");
  return `${(boundary > 40 ? cut.slice(0, boundary) : cut).trimEnd()}…`;
}

function sectionFromEditorial(
  section: EditorialPageContent["sections"][number],
  collapsed?: boolean,
): HubSection {
  const items = section.subsections?.map(
    (sub) => `${sub.title} — ${sub.paragraphs[0] ?? ""}`.trim(),
  );
  return {
    id: section.id,
    title: section.title,
    ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
    ...(items && items.length > 0 ? { items } : {}),
    ...(collapsed ? { collapsed: true } : {}),
  };
}

function withPathImages(links: readonly HubPathLink[]): HubPathLink[] {
  return links.map((link, index) => ({
    ...link,
    image: link.image ?? pathImageForHref(link.href, index),
    imageAlt: link.imageAlt ?? link.label,
  }));
}

function brochureSections(
  content: FlagshipBrochureContent,
): HubSection[] | undefined {
  if (content.sections && content.sections.length > 0) {
    return content.sections.map((section) => ({
      id: section.id,
      title: section.title,
      ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
      ...(section.items ? { items: section.items } : {}),
      ...(section.collapsed ? { collapsed: true } : {}),
    }));
  }
  return undefined;
}

/** Labs / Investors / flagship leaves share FlagshipPageContent. */
export function buildFlagshipHub(
  content: FlagshipPageContent | FlagshipBrochureContent,
  variant: FlagshipHubVariant = "default",
): HubPageContent {
  const brochure = content as FlagshipBrochureContent;

  if (variant === "labs-hub") {
    const sections = brochureSections(brochure);
    return {
      label: content.title,
      title: content.title,
      status: content.status,
      lede: content.lede,
      visual: HUB_MASTHEAD.labs,
      body: content.body,
      ...(brochure.highlights ? { highlights: brochure.highlights } : {}),
      paths: {
        heading: content.listHeading,
        links: withPathImages([
          {
            label: "SAVEN Robotics Lab",
            href: "/labs/saven-robotics-lab/",
            note: "Primary engineering direction for robotic systems.",
          },
          {
            label: "Internal Future Lab",
            href: "/labs/internal-future-lab/",
            note: "Research environment for advanced concepts.",
          },
          {
            label: "SAVEN Robotics Interface",
            href: "/systems/saven-robotics-interface/",
            note: "Human command and oversight for machines.",
          },
        ]),
      },
      ...(sections ? { sections } : {}),
      note: content.note,
      related: [
        { label: "Technology", href: "/technology/" },
        { label: "Research Applications", href: "/applications/research-applications/" },
      ],
    };
  }

  if (variant === "investors") {
    return {
      label: content.title,
      title: content.title,
      status: content.status,
      lede: content.lede,
      visual: HUB_MASTHEAD.investors,
      body: content.body,
      ...(brochure.highlights ? { highlights: brochure.highlights } : {}),
      sections:
        brochureSections(brochure) ??
        [
          {
            id: "share",
            title: content.listHeading,
            items: content.items,
          },
        ],
      note: content.note,
      related: content.related,
    };
  }

  if (variant === "robotics-lab") {
    const visual = domainVisualForHref("/labs/saven-robotics-lab/");
    return {
      label: content.kicker,
      title: content.title,
      status: content.status,
      lede: content.lede,
      visual: {
        theme: "labs",
        mastheadImage: visual.mastheadImage,
        mastheadAlt: visual.mastheadAlt,
      },
      body: content.body,
      ...(brochure.highlights ? { highlights: brochure.highlights } : {}),
      sections:
        brochureSections(brochure) ??
        [
          {
            id: "focus",
            title: content.listHeading,
            items: content.items,
          },
        ],
      note: content.note,
      related: content.related,
    };
  }

  return {
    label: content.kicker,
    title: content.title,
    status: content.status,
    lede: content.lede,
    body: content.body,
    sections: [
      {
        id: "focus",
        title: content.listHeading,
        items: content.items,
      },
    ],
    note: content.note,
    related: content.related,
  };
}

export function buildPurposeHub(
  content: EditorialPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  const byId = (id: string) =>
    content.sections.find((section) => section.id === id);

  const purpose = byId("purpose");
  const mission = byId("mission");
  const forWhom = byId("who-we-build-for");

  const highlights: HubHighlight[] = [
    {
      id: "what",
      title: ui.hub.what,
      text: firstSentence(purpose?.paragraphs?.[0] ?? content.introduction),
    },
    {
      id: "why",
      title: ui.hub.why,
      text: firstSentence(mission?.paragraphs?.[0] ?? content.introduction),
    },
    {
      id: "next",
      title: ui.hub.next,
      text: firstSentence(forWhom?.paragraphs?.[0] ?? content.introduction),
    },
  ];

  return {
    label: content.label,
    title: content.title,
    ...(content.status ? { status: content.status } : {}),
    lede: content.introduction,
    visual: HUB_MASTHEAD.purpose,
    highlights,
    sections: content.sections.map((section) =>
      sectionFromEditorial(section, true),
    ),
    ...(content.relatedLinks ? { related: content.relatedLinks } : {}),
  };
}

export function buildApplicationsHub(
  content: ApplicationsPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  return {
    label: ui.nav.applications,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    visual: HUB_MASTHEAD.applications,
    highlights: [
      {
        id: "what",
        title: ui.hub.what,
        text: firstSentence(content.definition),
      },
      {
        id: "why",
        title: ui.hub.why,
        text: firstSentence(
          content.principles[0]
            ? `${content.principles[0].title}: ${content.principles[0].text}`
            : content.introduction,
        ),
      },
      {
        id: "next",
        title: ui.hub.next,
        text: firstSentence(content.developmentNote),
      },
    ],
    sections: [
      {
        id: "principles",
        title: content.principlesHeading,
        items: content.principles.map((p) => `${p.title} — ${p.text}`),
        collapsed: true,
      },
      {
        id: "scope",
        title: content.scopeHeading,
        paragraphs: content.scope,
        collapsed: true,
      },
    ],
    paths: {
      heading: content.cardsHeading,
      links: withPathImages(
        content.cards.map((card) => ({
          label: card.title,
          href: card.href,
          note: card.responsibility,
        })),
      ),
    },
    note: content.developmentNote,
    related: [
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.systems, href: "/systems/" },
      { label: ui.nav.trust, href: "/trust/" },
    ],
  };
}

export function buildTechnologyHub(
  content: TechnologyPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  const navEntries = ui.navEntries;
  const disciplineLinks: HubPathLink[] = technologyNavChildren
    .filter((item) => item.href !== "/technology/")
    .map((item, index) => {
      const entityId = item.id.replace(/^technology-/, "");
      const entity = getEntityById(entityId);
      const localizedLabel =
        navEntries[item.id as keyof typeof navEntries] ?? item.label;
      return {
        label: localizedLabel,
        href: item.href,
        ...(entity?.summary ? { note: firstSentence(entity.summary, 110) } : {}),
        image: pathImageForHref(item.href, index),
        imageAlt: localizedLabel,
      };
    });

  return {
    label: content.label,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    visual: HUB_MASTHEAD.technology,
    highlights: [
      {
        id: "what",
        title: ui.hub.what,
        text: firstSentence(content.overview[0] ?? content.introduction),
      },
      {
        id: "why",
        title: ui.hub.why,
        text: firstSentence(
          content.principles[0]
            ? `${content.principles[0].title}: ${content.principles[0].text}`
            : content.introduction,
        ),
      },
      {
        id: "next",
        title: ui.hub.next,
        text: firstSentence(
          content.overview[1] ??
            "Choose a discipline below, or continue into Systems when ready.",
        ),
      },
    ],
    sections: [
      {
        id: "principles",
        title: content.principlesHeading,
        items: content.principles.map((p) => `${p.title} — ${p.text}`),
        collapsed: true,
      },
      {
        id: "scope",
        title: content.scopeHeading,
        paragraphs: content.scope,
        collapsed: true,
      },
    ],
    paths: {
      heading: content.categoriesHeading,
      links: disciplineLinks,
    },
    note: content.developmentNote,
    related: content.relatedDomainLinks.map((link) => ({
      label: link.label,
      href: link.href,
    })),
  };
}


export function buildTrustHub(
  content: TrustPageContent,
  locale: Locale,
): HubPageContent {
  const ui = getUi(locale);
  return {
    label: ui.nav.trust,
    title: content.title,
    ...(content.metadata.status ? { status: content.metadata.status } : {}),
    lede: content.introduction,
    visual: HUB_MASTHEAD.trust,
    highlights: [
      {
        id: "what",
        title: ui.hub.what,
        text: firstSentence(content.definition),
      },
      {
        id: "why",
        title: ui.hub.why,
        text: firstSentence(content.boundaryNote),
      },
      {
        id: "next",
        title: ui.hub.next,
        text: firstSentence(content.developmentNote),
      },
    ],
    sections: [
      {
        id: "principles",
        title: content.principlesHeading,
        items: content.principles.map((p) => `${p.title} — ${p.text}`),
        collapsed: true,
      },
      {
        id: "scope",
        title: content.scopeHeading,
        paragraphs: content.scope,
        collapsed: true,
      },
    ],
    paths: {
      heading: content.cardsHeading,
      links: withPathImages(
        content.cards.map((card) => ({
          label: card.title,
          href: card.href,
          note: card.responsibility,
        })),
      ),
    },
    note: content.developmentNote,
    related: [
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.applications, href: "/applications/" },
      { label: ui.nav.purpose, href: "/purpose/" },
    ],
  };
}

export function getPurposeHubContent(locale: Locale): HubPageContent {
  return buildPurposeHub(getPurposePageContent(locale), locale);
}

export function getApplicationsHubContent(locale: Locale): HubPageContent {
  return buildApplicationsHub(getApplicationsPageContent(locale), locale);
}

export function getTechnologyHubContent(locale: Locale): HubPageContent {
  return buildTechnologyHub(getTechnologyPageContent(locale), locale);
}


export function getTrustHubContent(locale: Locale): HubPageContent {
  return buildTrustHub(getTrustPageContent(locale), locale);
}

export function getLabsHubContent(locale: Locale): HubPageContent {
  const page = getLabsHubPageContent(locale);
  const hub = buildFlagshipHub(page, "labs-hub");
  const ui = getUi(locale);
  const labNote = page.items[0]
    ?.replace(/^SAVEN Robotics Lab — /, "")
    .replace(/^SAVEN Robotics Lab – /, "");
  const futureNote = page.items[1]
    ?.replace(/^Internal Future Lab — /, "")
    .replace(/^Internal Future Lab – /, "");

  return {
    ...hub,
    label: ui.nav.labs,
    title: ui.nav.labs,
    visual: HUB_MASTHEAD.labs,
    diagram: {
      kind: "labs-data-loop",
      labels: getLabsDataLoopLabels(locale),
    },
    scenes: getLabsOverviewScenes(locale),
    paths: {
      heading: ui.hub.explore,
      links: withPathImages([
        {
          label: ui.navEntries["footer-labs-saven-robotics-lab"],
          href: "/labs/saven-robotics-lab/",
          ...(labNote ? { note: labNote } : {}),
        },
        {
          label: ui.navEntries["footer-labs-internal-future-lab"],
          href: "/labs/internal-future-lab/",
          ...(futureNote ? { note: futureNote } : {}),
        },
        {
          label: ui.navEntries["footer-systems-saven-robotics-interface"],
          href: "/systems/saven-robotics-interface/",
        },
      ]),
    },
    related: [
      { label: ui.nav.technology, href: "/technology/" },
      { label: ui.nav.applications, href: "/applications/" },
    ],
  };
}

const flagshipDictionaries = {
  es: dictionaryEs,
  de: dictionaryDe,
  fr: dictionaryFr,
  ja: dictionaryJa,
  "zh-cn": dictionaryZhCn,
  ar: dictionaryAr,
  he: dictionaryHe,
  ru: dictionaryRu,
  uk: dictionaryUk,
} as const;

function localizeInvestorsScenes(locale: Locale) {
  const contentLocale = resolveContentLocale(locale);
  if (contentLocale === "en") return investorsScenesEn;
  return deepLocalize(investorsScenesEn, flagshipDictionaries[contentLocale]);
}

export function getInvestorsHubContent(locale: Locale): HubPageContent {
  const hub = buildFlagshipHub(getInvestorsPageContent(locale), "investors");
  const ui = getUi(locale);
  const related = (hub.related ?? []).map((link) => {
    if (link.href === "/") return { ...link, label: ui.nav.home };
    if (link.href === "/labs/saven-robotics-lab/") {
      return {
        ...link,
        label: ui.navEntries["footer-labs-saven-robotics-lab"],
      };
    }
    if (link.href === "/foundation/") {
      return { ...link, label: ui.nav.foundation };
    }
    if (link.href === "/contact/") {
      return { ...link, label: ui.footer.contact };
    }
    if (link.href === "/investors/contact/") {
      return {
        ...link,
        label: ui.navEntries["footer-company-investors-contact"],
      };
    }
    return link;
  });

  const pathLinks: HubPathLink[] = [
    {
      label: ui.nav.labs,
      href: "/labs/",
      note: ui.hub.explore,
      image: pathImageForHref("/labs/", 0),
    },
    {
      label: ui.navEntries["footer-company-about"],
      href: "/foundation/",
      note: ui.nav.foundation,
      image: pathImageForHref("/foundation/", 1),
    },
    {
      label: ui.nav.trust,
      href: "/trust/",
      note: ui.hub.deeper,
      image: pathImageForHref("/trust/", 2),
    },
    {
      label: ui.footer.contact,
      href: "/contact/",
      note: "info@savencore.com",
      image: "/domain/company/scene-long-horizon.webp",
    },
    {
      label: ui.navEntries["footer-company-investors-contact"],
      href: "/investors/contact/",
      note: ui.hub.explore,
      image: pathImageForHref("/investors/contact/", 3),
    },
  ];

  return {
    ...hub,
    label: ui.nav.investors,
    title: ui.nav.investors,
    visual: HUB_MASTHEAD.investors,
    scenes: localizeInvestorsScenes(locale),
    paths: {
      heading: ui.hub.explore,
      links: pathLinks,
    },
    related,
  };
}

export function getInvestorsContactHubContent(
  locale: Locale = "en",
): HubPageContent {
  const content = getInvestorsContactPageContent(locale);
  const hub = buildFlagshipHub(content, "default");
  const visual = domainVisualForHref("/investors/contact/");
  const ui = getUi(locale);
  return {
    ...hub,
    label: ui.navEntries["footer-company-investors-contact"] ?? content.kicker,
    visual: {
      theme: "investors",
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
    },
    paths: {
      heading: content.listHeading,
      links: content.related.map((link) => ({
        label: link.label,
        href: link.href,
      })),
    },
  };
}

export function getSecurityIssueHubContent(
  locale: Locale = "en",
): HubPageContent {
  const content = getSecurityIssuePageContent(locale);
  const hub = buildFlagshipHub(content, "default");
  const visual = domainVisualForHref("/resources/report-a-security-issue/");
  const ui = getUi(locale);
  return {
    ...hub,
    label:
      ui.navEntries["footer-resources-security-issue"] ?? content.kicker,
    visual: {
      theme: "trust",
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
    },
    paths: {
      heading: content.listHeading,
      links: content.related.map((link) => ({
        label: link.label,
        href: link.href,
      })),
    },
  };
}

/** Roadmap Direction page — three honest horizons, no dates or guarantees (D-0194). */
export function getRoadmapHubContent(locale: Locale = "en"): HubPageContent {
  const content = getRoadmapPageContent(locale);
  const hub = buildFlagshipHub(content, "default");
  const visual = domainVisualForHref("/roadmap/");
  const ui = getUi(locale);
  return {
    ...hub,
    label: ui.navEntries["footer-company-roadmap"] ?? content.title,
    visual: {
      theme: "foundation",
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
    },
    ...(content.sections
      ? {
          sections: content.sections.map((section) => ({
            id: section.id,
            title: section.title,
            ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
            ...(section.items ? { items: section.items } : {}),
            ...(section.collapsed ? { collapsed: true } : {}),
          })),
        }
      : {}),
    paths: {
      heading: content.listHeading,
      links: withPathImages(
        content.related.map((link) => ({
          label: link.label,
          href: link.href,
        })),
      ),
    },
  };
}

export function getRoboticsLabHubContent(locale: Locale = "en"): HubPageContent {
  const hub = buildFlagshipHub(getRoboticsLabPageContent(locale), "robotics-lab");
  const ui = getUi(locale);
  return {
    ...hub,
    label: ui.navEntries["footer-labs-saven-robotics-lab"],
    scenes: getRoboticsLabScenes(locale),
  };
}

export function getRoboticsInterfaceHubContent(
  locale: Locale = "en",
): HubPageContent {
  const visual = domainVisualForHref("/systems/saven-robotics-interface/");
  const page = getRoboticsInterfacePageContent(locale);
  const hub = buildFlagshipHub(page);
  return {
    ...hub,
    ...(page.highlights ? { highlights: page.highlights } : {}),
    ...(page.sections
      ? {
          sections: page.sections.map((section) => ({
            id: section.id,
            title: section.title,
            ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
            ...(section.items ? { items: section.items } : {}),
            ...(section.collapsed ? { collapsed: true } : {}),
          })),
        }
      : {}),
    diagram: {
      kind: "robotics-interface",
      labels: getRoboticsInterfaceDiagramLabels(locale),
    },
    visual: {
      theme: "systems",
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
    },
  };
}

export function getFutureLabHubContent(locale: Locale = "en"): HubPageContent {
  const visual = domainVisualForHref("/labs/internal-future-lab/");
  const page = getFutureLabPageContent(locale);
  const hub = buildFlagshipHub(page, "default");
  return {
    ...hub,
    ...(page.highlights ? { highlights: page.highlights } : {}),
    ...(page.sections
      ? {
          sections: page.sections.map((section) => ({
            id: section.id,
            title: section.title,
            ...(section.paragraphs ? { paragraphs: section.paragraphs } : {}),
            ...(section.items ? { items: section.items } : {}),
            ...(section.collapsed ? { collapsed: true } : {}),
          })),
        }
      : {}),
    visual: {
      theme: "labs",
      mastheadImage: visual.mastheadImage,
      mastheadAlt: visual.mastheadAlt,
      /* Lab-spirit collage — approved domain / technology / research assets (D-0215) */
      mastheadCollage: [
        "/domain/labs/internal-future-lab.webp",
        "/domain/labs/scene-future-research.webp",
        "/domain/technology/artificial-intelligence.webp",
        "/domain/technology/robotics.webp",
      ],
    },
    scenes: getFutureLabScenes(locale),
  };
}
