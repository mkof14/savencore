import type { LegalPageContent } from "./types";

/**
 * Structural legal page bodies derived from docs/TRUST_LEGAL_STRUCTURE.md.
 * Honest draft framing only — no invented entity details, counsel names,
 * registration numbers, or binding “effective” policy claims.
 */

const PRIVACY_ORIENTATION =
  "Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.";

export const LEGAL_PAGES: readonly LegalPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "Structural outline of how SAVEN Core intends to describe information practices for this website. This page is a draft for review — not a binding privacy policy.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This draft explains the intended structure of a future Privacy Policy for the SAVEN Core public website.",
          PRIVACY_ORIENTATION,
          "Nothing on this page asserts completed compliance, regulatory certification, or operational data processing beyond what the site currently does.",
        ],
      },
      {
        title: "Who we are",
        paragraphs: [
          "Legal entity details, registered address, and formal controller identity will be stated here after owner confirmation and legal review.",
          "Until then, treat “SAVEN Core” as the public brand name for this informational website only.",
        ],
      },
      {
        title: "Scope of this policy",
        paragraphs: [
          "Intended scope: information collected through the public website and related public communications channels that are later approved.",
          "This draft does not cover unpublished products, investor portals, clinical systems, or third-party services that are not yet configured.",
        ],
      },
      {
        title: "Information we may collect",
        paragraphs: [
          "Categories to be confirmed when actual technology is selected, for example: technical logs, language preference, theme preference stored locally, and information you voluntarily submit if contact or auth features are enabled.",
          "Do not assume analytics, advertising, or selling of personal information are active unless a later approved policy states otherwise.",
        ],
      },
      {
        title: "How we may use information",
        paragraphs: [
          "Intended uses (when features exist): operate and secure the website, remember preferences, respond to requests, and improve clarity of public information.",
          "Uses will be limited to what is necessary and disclosed in a final reviewed policy.",
        ],
      },
      {
        title: "Legal bases",
        paragraphs: [
          "Where applicable by jurisdiction, legal bases will be described after counsel review. This draft does not assert specific legal bases.",
        ],
      },
      {
        title: "Sharing and processors",
        paragraphs: [
          "No partners, vendors, or processors are invented here. Any future processors (for example authentication or hosting) will be listed only when actually used and approved for disclosure.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "Retention periods will be defined when processing activities are confirmed. Local preferences such as theme or language may remain on your device until cleared.",
        ],
      },
      {
        title: "Security practices",
        paragraphs: [
          "SAVEN Core designs around privacy, controlled access, data minimization, safety, traceability, and human oversight.",
          "No claim of complete security or zero risk is made.",
        ],
      },
      {
        title: "International transfers",
        paragraphs: [
          "Transfer mechanisms, if any, will be described after infrastructure and counsel review. Placeholder only.",
        ],
      },
      {
        title: "Your rights and choices",
        paragraphs: [
          "Regional rights pathways will be described in related draft pages. Contact channels for privacy requests will be published when approved.",
        ],
      },
      {
        title: "Children’s privacy",
        paragraphs: [
          "Children’s privacy wording is reserved for legal review. This informational site is not directed at children.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "When a final policy is approved, material changes will be reflected with an updated date. This draft remains unlabeled as effective law.",
        ],
      },
      {
        title: "Contact for privacy requests",
        paragraphs: [
          "A privacy contact channel will be published when approved. No email addresses are invented in this draft.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    summary:
      "Structural terms outline for use of the SAVEN Core website. Draft only — pending legal review.",
    sections: [
      {
        title: "Agreement to terms",
        paragraphs: [
          "A final Terms of Use will explain when browsing or using the site constitutes agreement. This page is not that agreement yet.",
        ],
      },
      {
        title: "Nature of the website",
        paragraphs: [
          "The website provides informational material about systems in development. It does not offer operational products, medical services, or investment solicitations by default.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "Site materials are intended to be protected as described in the Intellectual Property and Copyright Notice drafts.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: [
          "Visitors must not misuse the site, attempt unauthorized access, or use content in misleading ways. Detailed rules will follow legal review.",
        ],
      },
      {
        title: "No professional advice",
        paragraphs: [
          "Website content is not legal, medical, investment, or other professional advice.",
        ],
      },
      {
        title: "Disclaimers",
        paragraphs: [
          "Informational disclaimers will be finalized by counsel. Development-status reminders remain in force across the site.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "Limitation of liability language is reserved for legal draft and approval.",
        ],
      },
      {
        title: "Indemnity",
        paragraphs: [
          "Indemnity language is reserved for legal draft and approval.",
        ],
      },
      {
        title: "Governing law / venue",
        paragraphs: [
          "Governing law and venue are pending legal confirmation. No jurisdiction is asserted in this draft.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "Terms may change after review. Updated versions will replace drafts when approved.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Contact details for terms questions will be published when approved.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    summary:
      "Structural explanation of cookies and similar technologies. Draft pending selection of actual site technologies and legal review.",
    sections: [
      {
        title: "What cookies and similar technologies are",
        paragraphs: [
          "Cookies and similar technologies can store small amounts of data in a browser to remember preferences or support site operation.",
        ],
      },
      {
        title: "Types of cookies used",
        paragraphs: [
          "A concrete list will be published when technologies are selected. Local preferences such as theme may use browser storage rather than third-party cookies.",
        ],
      },
      {
        title: "Purpose of each category",
        paragraphs: [
          "Categories under consideration: essential/operational, preferences/functional, and privacy-controlled analytics if later approved. No analytics vendor is claimed here.",
        ],
      },
      {
        title: "Managing preferences",
        paragraphs: [
          "See the Cookie Preferences draft page for the intended control structure. Non-essential tools must not be pre-checked when a consent UI is introduced.",
        ],
      },
      {
        title: "Browser controls",
        paragraphs: [
          "Most browsers allow blocking or deleting cookies. Blocking essential storage may affect basic site behavior.",
        ],
      },
      {
        title: "Updates",
        paragraphs: [
          "This draft will be updated when real cookie use begins and after legal review.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Cookie-related contact details will be published when approved.",
        ],
      },
    ],
  },
  {
    slug: "cookie-preferences",
    title: "Cookie Preferences",
    summary:
      "Draft preference model only. No live consent management platform (CMP) or analytics opt-in UI is active on this site.",
    sections: [
      {
        title: "Not an active consent UI",
        paragraphs: [
          "This page does not collect, save, or enforce cookie choices. There is no live consent banner, preference center, or CMP connected to analytics or advertising.",
          "Draft structural copy below describes an intended future model only — pending legal review and an authorized vendor decision.",
        ],
      },
      {
        title: "Preference summary",
        paragraphs: [
          "When a consent system is authorized, visitors will be able to review and update non-essential preferences here.",
          "Today, no analytics or advertising cookie UI is active on this site.",
        ],
      },
      {
        title: "Essential cookies",
        paragraphs: [
          "Essential/operational storage needed for basic site function remains on when such features exist. Essential items are not optional.",
        ],
      },
      {
        title: "Preferences / functional cookies",
        paragraphs: [
          "Examples under consideration: language and theme preferences stored locally on your device.",
        ],
      },
      {
        title: "Analytics cookies",
        paragraphs: [
          "Analytics, if introduced later, will be privacy-controlled and vendor-disclosed. Vendor is TBD; none is claimed now.",
        ],
      },
      {
        title: "Save / update controls",
        paragraphs: [
          "Save and update controls will appear when a consent management design is approved. No dark patterns will be used. Controls shown in drafts are not functional.",
        ],
      },
      {
        title: "Related policy",
        paragraphs: [
          "See the Cookie Policy draft for category definitions.",
        ],
      },
    ],
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    summary:
      "Commitment structure for website accessibility. Non-absolute language; target standard WCAG 2.2 AA.",
    sections: [
      {
        title: "Commitment",
        paragraphs: [
          "SAVEN Core intends the public website to be understandable and usable by a wide range of people. This is a commitment to continuous improvement, not a claim of perfect accessibility.",
        ],
      },
      {
        title: "Target standard",
        paragraphs: [
          "Target: WCAG 2.2 Level AA, where reasonably achievable for published pages.",
        ],
      },
      {
        title: "Measures taken / in progress",
        paragraphs: [
          "Examples of ongoing work: semantic structure, keyboard access for primary controls, language and direction support, and reduced-motion respect for living media.",
        ],
      },
      {
        title: "Known limitations",
        paragraphs: [
          "Some imagery, video loops, and dense technical pages may present remaining barriers. Limitations will be updated honestly as the site evolves.",
        ],
      },
      {
        title: "Feedback and contact",
        paragraphs: [
          "An accessibility feedback channel will be published when approved. No contact address is invented here.",
        ],
      },
      {
        title: "Compatibility notes",
        paragraphs: [
          "The site is intended to work with current major browsers. Assistive technology compatibility will be assessed over time.",
        ],
      },
      {
        title: "Assessment approach",
        paragraphs: [
          "Assessment methods and dates will be recorded when formal reviews are performed.",
        ],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    summary:
      "Public security posture outline for the website and related public systems. Not a certification or guarantee of complete security.",
    sections: [
      {
        title: "Security posture overview",
        paragraphs: [
          PRIVACY_ORIENTATION,
          "This page does not claim complete security, zero risk, or regulatory certification.",
        ],
      },
      {
        title: "Design principles",
        paragraphs: [
          "Privacy, controlled access, data minimization, safety, traceability, and human oversight guide design decisions.",
        ],
      },
      {
        title: "Vulnerability reporting",
        paragraphs: [
          "A responsible reporting pathway will be published when approved. Do not invent security@ addresses in this draft.",
        ],
      },
      {
        title: "Scope and limitations",
        paragraphs: [
          "This draft covers the public website context. It does not describe unpublished operational systems as secure deployments.",
        ],
      },
      {
        title: "Updates",
        paragraphs: [
          "Security descriptions will be updated as infrastructure and review status change.",
        ],
      },
      {
        title: "Contact / report channel",
        paragraphs: [
          "Report channel pending approval.",
        ],
      },
    ],
  },
  {
    slug: "responsible-ai",
    title: "Responsible AI",
    summary:
      "How SAVEN Core frames responsible use of AI as a tool in service of human support — not as the purpose itself.",
    sections: [
      {
        title: "Purpose of AI within SAVEN Core",
        paragraphs: [
          "AI and robotics are tools. Human support and responsible physical-world assistance are primary.",
        ],
      },
      {
        title: "Human oversight",
        paragraphs: [
          "Human oversight remains a core design principle for systems described on this site.",
        ],
      },
      {
        title: "Safety and evaluation principles",
        paragraphs: [
          "Safety evaluation, limits, and honest development status are preferred over absolute performance claims.",
        ],
      },
      {
        title: "Transparency about development status",
        paragraphs: [
          "Principal systems are in development. Approved public statuses include Research, Architecture, In Development, Prototype, Validation, Pilot, and Operational.",
        ],
      },
      {
        title: "Limitations and non-claims",
        paragraphs: [
          "This page does not claim medical effectiveness, autonomous deployment, or regulatory approval.",
        ],
      },
      {
        title: "Feedback pathway",
        paragraphs: [
          "Feedback channels will be published when approved.",
        ],
      },
      {
        title: "Related policies",
        paragraphs: [
          "See Trust domain pages for governance architecture, and other Legal drafts for disclaimers.",
        ],
      },
    ],
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    summary:
      "Important limits on medical interpretation of website content. Informational only.",
    sections: [
      {
        title: "Informational nature",
        paragraphs: [
          "Website content about care, hospitals, or assistance is informational and architectural. It is not clinical documentation.",
        ],
      },
      {
        title: "Not medical advice",
        paragraphs: [
          "Nothing on this website is medical advice.",
        ],
      },
      {
        title: "Not diagnosis or treatment",
        paragraphs: [
          "SAVEN Core does not diagnose, treat, or manage medical conditions through this website.",
        ],
      },
      {
        title: "Support for care professionals and people",
        paragraphs: [
          "SAVEN Core develops intelligent systems intended to support doctors, medical workers, and people in hospitals, at home, and in everyday environments. Support means assistance architecture under human oversight — not a claim that this website delivers clinical care.",
        ],
      },
      {
        title: "No prescribing or sale of medicines",
        paragraphs: [
          "SAVEN Core does not prescribe medicines and does not sell medicines through this website.",
        ],
      },
      {
        title: "Not emergency support",
        paragraphs: [
          "If you are experiencing a medical emergency, contact local emergency services. Do not use this website for emergency care.",
        ],
      },
      {
        title: "Not a substitute for a qualified professional",
        paragraphs: [
          "Always seek the advice of a qualified health professional for personal medical questions.",
        ],
      },
      {
        title: "Development-status reminder",
        paragraphs: [
          "Systems described on this site are principally in development and must not be read as operational clinical products.",
        ],
      },
      {
        title: "Contact for non-emergency inquiries",
        paragraphs: [
          "Non-emergency questions may use the public contact channel at info@savencore.com or the Contact page. Do not send urgent medical, emergency, or personal health information through website forms.",
        ],
      },
    ],
  },
  {
    slug: "research-disclaimer",
    title: "Research Disclaimer",
    summary:
      "Limits on interpreting research and development materials published on this website.",
    sections: [
      {
        title: "Research and development context",
        paragraphs: [
          "Materials may describe research directions, architecture, and work in progress.",
        ],
      },
      {
        title: "No guarantee of outcomes",
        paragraphs: [
          "No research outcome, performance result, or timeline is guaranteed by publication on this site.",
        ],
      },
      {
        title: "Preliminary nature of materials",
        paragraphs: [
          "Public materials may be preliminary and subject to change after review.",
        ],
      },
      {
        title: "No regulatory approval claims",
        paragraphs: [
          "Nothing here claims regulatory approval, clearance, or certification unless later explicitly approved and factually true.",
        ],
      },
      {
        title: "Roadmap non-guarantee",
        paragraphs: [
          "Capability framing and roadmaps, if present, are not commitments to delivery dates.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Research contact channels will be published when approved.",
        ],
      },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Structural notice regarding ownership and permitted use of site materials. Draft pending legal review.",
    sections: [
      {
        title: "Ownership",
        paragraphs: [
          "Unless otherwise noted, website text, design, and brand materials are owned by SAVEN Core or used under permission. Exact legal owner wording awaits entity confirmation.",
        ],
      },
      {
        title: "Permitted use of site materials",
        paragraphs: [
          "Limited personal, non-commercial viewing of the public site is intended. Broader reuse requires permission.",
        ],
      },
      {
        title: "Prohibited use",
        paragraphs: [
          "Do not copy, modify, or redistribute site materials in misleading ways, or imply endorsement without authorization.",
        ],
      },
      {
        title: "Notice of infringement pathway",
        paragraphs: [
          "An infringement notice process will be defined by legal counsel. Placeholder only.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "IP contact details pending approval.",
        ],
      },
    ],
  },
  {
    slug: "trademark-notice",
    title: "Trademark Notice",
    summary:
      "Brand and trademark usage guidance structure. Only confirmed marks will be listed after approval.",
    sections: [
      {
        title: "Trademark list",
        paragraphs: [
          "Confirmed marks such as SAVEN Core and related lockups will be listed here after legal confirmation. No unconfirmed marks are invented.",
        ],
      },
      {
        title: "Correct brand usage",
        paragraphs: [
          "Use the brand name accurately. Do not alter the logo lockup or imply affiliation without permission.",
        ],
      },
      {
        title: "Third-party marks",
        paragraphs: [
          "Third-party names and marks, if mentioned, remain the property of their owners. Mention does not imply partnership unless explicitly stated.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Trademark contact details pending approval.",
        ],
      },
    ],
  },
  {
    slug: "copyright",
    title: "Copyright Notice",
    summary:
      "Copyright reservation for SAVEN Core website materials.",
    sections: [
      {
        title: "Copyright line",
        paragraphs: [
          "Copyright © 2026 SAVEN Core. All rights reserved.",
        ],
      },
      {
        title: "Reservation of rights",
        paragraphs: [
          "All rights not expressly granted are reserved.",
        ],
      },
      {
        title: "Permission requests",
        paragraphs: [
          "Permission requests will be handled through an approved contact channel when published.",
        ],
      },
      {
        title: "Related IP links",
        paragraphs: [
          "See Intellectual Property and Trademark Notice drafts for related structure.",
        ],
      },
    ],
  },
  {
    slug: "data-rights",
    title: "Data Rights",
    summary:
      "Structural overview of individual data rights concepts. Applicability depends on jurisdiction and confirmed processing.",
    sections: [
      {
        title: "Overview of rights concepts",
        paragraphs: [
          "Depending on region and activity, people may have rights related to access, correction, deletion, restriction, or portability. This draft does not assert which frameworks currently apply.",
        ],
      },
      {
        title: "Request pathways",
        paragraphs: [
          "Request pathways will be published when processing and contact channels are confirmed.",
        ],
      },
      {
        title: "Verification process",
        paragraphs: [
          "Verification steps are placeholder until legal and operational design is complete.",
        ],
      },
      {
        title: "Response timing",
        paragraphs: [
          "Response timing commitments are pending legal review.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Data-rights contact pending approval.",
        ],
      },
    ],
  },
  {
    slug: "regional-privacy-rights",
    title: "Regional Privacy Rights",
    summary:
      "Placeholder structure for regional privacy frameworks. No applicability is asserted without legal confirmation.",
    sections: [
      {
        title: "Region sections",
        paragraphs: [
          "Future versions may organize rights by region. Frameworks will be named only when counsel confirms relevance.",
        ],
      },
      {
        title: "Placeholders for regional frameworks",
        paragraphs: [
          "Do not read this draft as a claim that any specific regional law currently applies to SAVEN Core processing.",
        ],
      },
      {
        title: "Rights summaries",
        paragraphs: [
          "Region-specific summaries will be added as drafts after legal review.",
        ],
      },
      {
        title: "Request submission method",
        paragraphs: [
          "Submission methods pending approval.",
        ],
      },
      {
        title: "Related links",
        paragraphs: [
          "See Privacy Policy and Do Not Sell or Share drafts.",
        ],
      },
    ],
  },
  {
    slug: "do-not-sell-or-share",
    title: "Do Not Sell or Share My Personal Information",
    summary:
      "Structural page for sale/share opt-out concepts. Scope definitions pending legal review; no sale of personal information is claimed as a current practice.",
    sections: [
      {
        title: "Statement of purpose",
        paragraphs: [
          "This page reserves a clear place for opt-out requests where applicable by law. It does not assert that SAVEN Core sells personal information.",
        ],
      },
      {
        title: "Scope definitions",
        paragraphs: [
          "Definitions of “sell” and “share” are jurisdiction-dependent and pending legal review.",
        ],
      },
      {
        title: "Request mechanism",
        paragraphs: [
          "A request mechanism will be published when required processing and contact channels exist.",
        ],
      },
      {
        title: "Authorized agent process",
        paragraphs: [
          "Authorized-agent handling is placeholder until counsel defines the process.",
        ],
      },
      {
        title: "Related privacy links",
        paragraphs: [
          "See Privacy Policy, Data Rights, and Regional Privacy Rights drafts.",
        ],
      },
    ],
  },
  {
    slug: "legal-notices",
    title: "Legal Notices",
    summary:
      "Collection point for website legal notices and links to related draft documents.",
    sections: [
      {
        title: "Entity and contact placeholders",
        paragraphs: [
          "Formal legal entity name, address, and contact details will appear here after confirmation. “Inc.” is not added unless the legal name is confirmed.",
        ],
      },
      {
        title: "Website notice collection point",
        paragraphs: [
          "This page gathers pointers to structural legal drafts for the public website.",
        ],
      },
      {
        title: "Related documents",
        paragraphs: [
          "Privacy Policy, Terms of Use, Cookie Policy, Accessibility Statement, Security, Responsible AI, Medical Disclaimer, Research Disclaimer, Intellectual Property, Trademark Notice, Copyright Notice, Data Rights, Regional Privacy Rights, and Do Not Sell or Share.",
        ],
      },
      {
        title: "Jurisdiction notes",
        paragraphs: [
          "Jurisdiction notes are pending counsel.",
        ],
      },
    ],
  },
];

export function getLegalSlugs(): string[] {
  return LEGAL_PAGES.map((page) => page.slug);
}
