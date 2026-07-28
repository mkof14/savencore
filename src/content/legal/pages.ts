import type { LegalPageContent } from "./types";

/**
 * Public site legal pages (D-0216) — owner-authorized interim policies.
 * Coherent, protective, industry-standard structure. No invented entity
 * registration, DPO names, jurisdictions, or “GDPR certified” claims.
 * Counsel review remains recommended for regulated jurisdictions.
 */

const PRIVACY_ORIENTATION =
  "Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.";

const CONTACT_LINE =
  "Questions: info@savencore.com or the Contact page at /contact/.";

export const LEGAL_PAGES: readonly LegalPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "How SAVEN Core handles information on this public website. Principal systems described elsewhere remain In Development.",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This Privacy Policy describes information practices for the SAVEN Core public website (savencore.com).",
          PRIVACY_ORIENTATION,
          "This site is primarily informational. We do not claim completed regulatory certification, and we do not sell personal information.",
        ],
      },
      {
        title: "Who we are",
        paragraphs: [
          "SAVEN Core is the public brand for this informational website. Formal legal entity name, registered address, and controller identity will be stated here when confirmed by the owner.",
          "Until then, treat “SAVEN Core” as the public brand name for this website only. Copyright © 2026 SAVEN Core. All rights reserved.",
        ],
      },
      {
        title: "Scope of this policy",
        paragraphs: [
          "This policy covers information collected through the public website and related public channels we operate (for example Contact when used, and Sign In when enabled).",
          "It does not cover unpublished products, clinical systems, investor portals beyond what this site publishes, or third-party sites we link to.",
        ],
      },
      {
        title: "Information we may collect",
        paragraphs: [
          "Depending on which features you use, we may process: technical logs needed to operate and secure the site; language and theme preferences stored on your device; information you voluntarily submit via Contact or similar forms; and account credentials or identity tokens if Sign In is enabled.",
          "We do not run marketing analytics or advertising trackers on this site unless a later update of this policy says otherwise.",
        ],
      },
      {
        title: "How we use information",
        paragraphs: [
          "We use information to operate and secure the website, remember preferences, respond to requests you send, authenticate signed-in users when Sign In is enabled, and improve clarity of public information.",
          "We use only what is needed for those purposes.",
        ],
      },
      {
        title: "Legal bases",
        paragraphs: [
          "Where a privacy law requires a legal basis, we rely on bases appropriate to the activity — for example operating the site you request, responding to your communications, and legitimate interests in securing and improving an informational website — without inventing jurisdiction-specific filings here.",
        ],
      },
      {
        title: "Sharing and processors",
        paragraphs: [
          "We do not sell personal information.",
          "Hosting, email delivery, authentication, or media storage providers may process data only to provide those services when configured. We list processors here only when actually used; we do not invent vendor names.",
        ],
      },
      {
        title: "Retention",
        paragraphs: [
          "We keep information only as long as needed for the purposes above, security, or legal obligations. Local preferences such as theme or language remain on your device until you clear them.",
        ],
      },
      {
        title: "Security practices",
        paragraphs: [
          PRIVACY_ORIENTATION,
          "No website can claim complete security or zero risk. Report suspected security issues via the public Report a Security Issue page or info@savencore.com.",
        ],
      },
      {
        title: "International transfers",
        paragraphs: [
          "Our hosting and service providers may process data in more than one country. Where transfer safeguards are required by law, we will describe them when infrastructure and counsel confirm the details.",
        ],
      },
      {
        title: "Your rights and choices",
        paragraphs: [
          "Depending on where you live, you may have rights to access, correct, delete, or restrict certain personal information, or to object to certain processing. See Data Rights and Regional Privacy Rights for more detail.",
          "To make a request, email info@savencore.com. We may need to verify your identity before responding.",
        ],
      },
      {
        title: "Children’s privacy",
        paragraphs: [
          "This informational website is not directed at children. We do not knowingly collect personal information from children through this site. If you believe a child has provided information, contact info@savencore.com so we can delete it.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "We may update this policy as the site or practices change. The “Last updated” date on this page will change when we do. Continued use of the site after an update means you should review the revised policy.",
        ],
      },
      {
        title: "Contact for privacy requests",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    summary:
      "Terms for using the SAVEN Core public website. Informational content about systems that are principally In Development.",
    sections: [
      {
        title: "Agreement to terms",
        paragraphs: [
          "By browsing or using this website, you agree to these Terms of Use. If you do not agree, do not use the site.",
        ],
      },
      {
        title: "Nature of the website",
        paragraphs: [
          "The website provides informational material about intelligent systems and related work. Principal systems are in development. The site does not offer operational products for purchase, medical services, or investment solicitations by default.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "Site materials are protected as described in the Intellectual Property, Trademark Notice, and Copyright Notice pages. Limited personal viewing is allowed; broader reuse needs permission.",
        ],
      },
      {
        title: "Acceptable use",
        paragraphs: [
          "You must not misuse the site, attempt unauthorized access, disrupt service, scrape in a way that harms availability, or use content in misleading ways that imply false endorsement, partnership, or product readiness.",
        ],
      },
      {
        title: "No professional advice",
        paragraphs: [
          "Website content is not legal, medical, investment, or other professional advice. Always consult a qualified professional for decisions that affect you.",
        ],
      },
      {
        title: "Disclaimers",
        paragraphs: [
          "Content is provided “as is” for informational purposes. Development-status reminders across the site remain in force. See also Medical Disclaimer and Research Disclaimer.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, SAVEN Core is not liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, profits, or goodwill, arising from use of this informational website.",
          "Nothing in these terms excludes liability that cannot be excluded under applicable law.",
        ],
      },
      {
        title: "Indemnity",
        paragraphs: [
          "You agree to indemnify and hold harmless SAVEN Core from claims arising out of your misuse of the site or your violation of these terms, to the extent permitted by law.",
        ],
      },
      {
        title: "Governing law / venue",
        paragraphs: [
          "Governing law and venue will be stated when the formal legal entity and counsel confirm them. Until then, mandatory consumer protections in your place of residence still apply where required by law.",
        ],
      },
      {
        title: "Changes",
        paragraphs: [
          "We may update these terms. The “Last updated” date will change when we do. Material changes should be reviewed before continued use.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    summary:
      "How this site uses cookies and similar technologies. No marketing analytics or live consent CMP is claimed.",
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
          "Today, this site primarily uses local preferences such as language and theme stored in your browser. Essential operational storage may be used when Sign In or similar features are enabled.",
          "We do not claim third-party advertising cookies or marketing analytics on this site.",
        ],
      },
      {
        title: "Purpose of each category",
        paragraphs: [
          "Essential / operational: needed for basic site function and security when those features exist.",
          "Preferences / functional: language and theme on your device.",
          "Analytics: not active on this site unless a later update discloses a vendor and purpose.",
        ],
      },
      {
        title: "Managing preferences",
        paragraphs: [
          "There is no live cookie consent management platform (CMP) on this site. Manage preferences through your browser settings, or contact us with questions.",
          "See Cookie Preferences for an honest summary of what is and is not active.",
        ],
      },
      {
        title: "Browser controls",
        paragraphs: [
          "Most browsers allow blocking or deleting cookies and site data. Blocking essential storage may affect Sign In or basic behavior.",
        ],
      },
      {
        title: "Updates",
        paragraphs: [
          "We will update this policy if cookie or similar-technology use changes.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "cookie-preferences",
    title: "Cookie Preferences",
    summary:
      "Honest preference summary. No live consent banner, preference center, or CMP is active on this site.",
    sections: [
      {
        title: "Not an active consent UI",
        paragraphs: [
          "This page does not collect, save, or enforce cookie choices. There is no live consent banner, preference center, or CMP connected to analytics or advertising.",
          "Use your browser settings to clear or block site data, or email info@savencore.com with questions.",
        ],
      },
      {
        title: "Preference summary",
        paragraphs: [
          "Today, no analytics or advertising cookie UI is active on this site.",
          "Language and theme preferences, when used, are stored locally on your device.",
        ],
      },
      {
        title: "Essential cookies",
        paragraphs: [
          "Essential or operational storage needed for basic site function remains on when such features exist. Essential items are not optional.",
        ],
      },
      {
        title: "Preferences / functional cookies",
        paragraphs: [
          "Examples in use or under consideration: language and theme preferences stored locally on your device.",
        ],
      },
      {
        title: "Analytics cookies",
        paragraphs: [
          "Analytics, if introduced later, will be disclosed with vendor and purpose. None is claimed now.",
        ],
      },
      {
        title: "How to manage today",
        paragraphs: [
          "Clear site data or block cookies in your browser. For Sign In sessions, signing out and clearing site data removes local session material where applicable.",
          CONTACT_LINE,
        ],
      },
      {
        title: "Related policy",
        paragraphs: [
          "See the Cookie Policy for category definitions.",
        ],
      },
    ],
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    summary:
      "Commitment to making the public website usable for a wide range of people. Target: WCAG 2.2 AA where reasonably achievable.",
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
          "Examples of ongoing work: semantic structure, keyboard access for primary controls, language and direction support (including RTL locales), and reduced-motion respect for living media.",
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
          "If you encounter an accessibility barrier, tell us what page and what happened. " + CONTACT_LINE,
        ],
      },
      {
        title: "Compatibility notes",
        paragraphs: [
          "The site is intended to work with current major browsers. Assistive technology compatibility is assessed over time.",
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
      "Public security posture for the website. Not a certification or guarantee of complete security.",
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
          "Please report suspected security issues responsibly via the Report a Security Issue page or info@savencore.com. Do not publicly disclose exploit details before we can assess them.",
        ],
      },
      {
        title: "Scope and limitations",
        paragraphs: [
          "This page covers the public website context. It does not describe unpublished operational systems as secure deployments.",
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
          "Report a Security Issue: /resources/report-a-security-issue/. Or email info@savencore.com.",
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
          CONTACT_LINE,
        ],
      },
      {
        title: "Related policies",
        paragraphs: [
          "See Trust domain pages for governance architecture, and Medical Disclaimer, Research Disclaimer, and related Legal pages for limits.",
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
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Ownership and permitted use of SAVEN Core website materials.",
    sections: [
      {
        title: "Ownership",
        paragraphs: [
          "Unless otherwise noted, website text, design, and brand materials are owned by SAVEN Core or used under permission. Exact legal owner wording will match the confirmed entity name when published.",
        ],
      },
      {
        title: "Permitted use of site materials",
        paragraphs: [
          "Limited personal, non-commercial viewing of the public site is allowed. Broader reuse requires written permission.",
        ],
      },
      {
        title: "Prohibited use",
        paragraphs: [
          "Do not copy, modify, or redistribute site materials in misleading ways, or imply endorsement, partnership, or product readiness without authorization.",
        ],
      },
      {
        title: "Notice of infringement pathway",
        paragraphs: [
          "To report suspected infringement of SAVEN Core materials, email info@savencore.com with enough detail to identify the material and location.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "trademark-notice",
    title: "Trademark Notice",
    summary:
      "Brand and trademark usage guidance. Only confirmed marks are claimed.",
    sections: [
      {
        title: "Trademark list",
        paragraphs: [
          "SAVEN Core and related logo lockups identify the public brand of this website. Additional marks will be listed only when confirmed.",
        ],
      },
      {
        title: "Correct brand usage",
        paragraphs: [
          "Use the brand name accurately. Do not alter the logo lockup or imply affiliation, endorsement, or partnership without permission.",
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
          CONTACT_LINE,
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
          "For permission requests, email info@savencore.com with the material you want to use and the intended purpose.",
        ],
      },
      {
        title: "Related IP links",
        paragraphs: [
          "See Intellectual Property and Trademark Notice for related terms.",
        ],
      },
    ],
  },
  {
    slug: "data-rights",
    title: "Data Rights",
    summary:
      "How to exercise individual data rights related to this website. Applicability depends on jurisdiction and confirmed processing.",
    sections: [
      {
        title: "Overview of rights concepts",
        paragraphs: [
          "Depending on region and activity, people may have rights related to access, correction, deletion, restriction, or portability of personal information.",
        ],
      },
      {
        title: "Request pathways",
        paragraphs: [
          "Email info@savencore.com with “Data rights request” in the subject line and describe what you need. Or use the Contact page.",
        ],
      },
      {
        title: "Verification process",
        paragraphs: [
          "We may ask for information reasonably needed to verify that you are the person the request concerns before fulfilling it.",
        ],
      },
      {
        title: "Response timing",
        paragraphs: [
          "We aim to respond within a reasonable time and within any period required by applicable law.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
    ],
  },
  {
    slug: "regional-privacy-rights",
    title: "Regional Privacy Rights",
    summary:
      "Regional privacy frameworks may grant additional rights. We do not invent applicability claims for specific laws here.",
    sections: [
      {
        title: "Region sections",
        paragraphs: [
          "If you believe a regional privacy law applies to your interaction with this website, describe your request and region when you contact us so we can respond appropriately.",
        ],
      },
      {
        title: "No invented certification claims",
        paragraphs: [
          "This page does not claim that any specific regional law currently applies, and it does not claim GDPR, CCPA, or similar certification.",
        ],
      },
      {
        title: "Rights summaries",
        paragraphs: [
          "Common rights concepts include access, correction, deletion, and opt-out of sale or sharing where those concepts apply. See also Do Not Sell or Share and Data Rights.",
        ],
      },
      {
        title: "Request submission method",
        paragraphs: [
          CONTACT_LINE,
        ],
      },
      {
        title: "Related links",
        paragraphs: [
          "See Privacy Policy and Do Not Sell or Share.",
        ],
      },
    ],
  },
  {
    slug: "do-not-sell-or-share",
    title: "Do Not Sell or Share My Personal Information",
    summary:
      "SAVEN Core does not sell personal information from this website. Opt-out requests can still be sent where required by law.",
    sections: [
      {
        title: "Statement of purpose",
        paragraphs: [
          "SAVEN Core does not sell personal information collected through this public website. This page provides a clear place for opt-out-style requests where a law requires one.",
        ],
      },
      {
        title: "Scope definitions",
        paragraphs: [
          "Definitions of “sell” and “share” depend on jurisdiction. We do not claim marketing data shares or advertising sale practices on this site.",
        ],
      },
      {
        title: "Request mechanism",
        paragraphs: [
          "Email info@savencore.com with “Do not sell or share” in the subject line, or use the Contact page.",
        ],
      },
      {
        title: "Authorized agent process",
        paragraphs: [
          "If an authorized agent submits a request on your behalf, we may require proof of authorization and identity verification as permitted by law.",
        ],
      },
      {
        title: "Related privacy links",
        paragraphs: [
          "See Privacy Policy, Data Rights, and Regional Privacy Rights.",
        ],
      },
    ],
  },
  {
    slug: "legal-notices",
    title: "Legal Notices",
    summary:
      "Collection point for website legal notices and links to related Legal pages.",
    sections: [
      {
        title: "Entity and contact",
        paragraphs: [
          "Public contact for legal and policy questions: info@savencore.com. Formal legal entity name and address will appear here after owner confirmation. “Inc.” is not added unless the legal name is confirmed.",
        ],
      },
      {
        title: "Website notice collection point",
        paragraphs: [
          "This page gathers pointers to Legal pages for the public website.",
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
          "Mandatory consumer or privacy protections in your place of residence may apply regardless of the entity details still pending confirmation.",
        ],
      },
    ],
  },
];

export function getLegalSlugs(): string[] {
  return LEGAL_PAGES.map((page) => page.slug);
}
