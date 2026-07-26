/** Contact page — public conversation channel (D-0173). */

export type ContactPageContent = {
  label: string;
  title: string;
  lede: string;
  body: readonly string[];
  email: string;
  emailNote: string;
  formNote: string;
};

export const contactPageEn: ContactPageContent = {
  label: "Contact",
  title: "Start a conversation",
  lede: "Write to SAVEN Core about partnerships, research dialogue, investor inquiry, or general questions. We read carefully and respond when we can.",
  body: [
    "This form prepares a message in your email app addressed to info@savencore.com. A full mail server will come later — for now, your own mail client sends the message.",
    "Please do not send urgent medical, emergency, or personal health information through this channel.",
  ],
  email: "info@savencore.com",
  emailNote: "Primary public address",
  formNote:
    "Required fields help us reply. Subject is optional. Submitting opens your email app with the message ready to send — it does not post to a CRM.",
};
