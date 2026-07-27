export type MediaPageContent = {
  label: string;
  title: string;
  lede: string;
  body: readonly string[];
  note: string;
};

/** Canonical English Media hub copy (D-0183) — marketing library, not press invention. */
export const mediaPageEn: MediaPageContent = {
  label: "Media",
  title: "Media library",
  lede:
    "Brand assets, documents, presentations, videos, and curated links from SAVEN Core — honest materials for orientation, not invented press claims.",
  body: [
    "This library collects approved public materials: the SAVEN falcon mark, share imagery, and resources operators add for communications.",
    "Principal systems remain in development. Nothing here invents customers, partners, traction metrics, or operational product status.",
  ],
  note:
    "For media inquiries, use Contact. Rely only on materials published here or provided in writing.",
};
