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
  title: "Let’s Build What Comes Next",
  lede: "Write to SAVEN about robotics partnerships, technology collaboration, research, rehabilitation or care conversations, investor inquiry, media, or general questions.",
  body: [
    "When direct send is configured on this server, this form sends your message straight to info@savencore.com. Otherwise, it prepares the message in your own email app instead — either way, the message reaches the same public address.",
    "Please do not submit confidential medical information through this form. Do not send urgent medical, emergency, or personal health information through this channel.",
  ],
  email: "info@savencore.com",
  emailNote: "Primary public address",
  formNote:
    "Required fields help us reply. Subject is optional. This form does not post to a CRM — it either sends directly or opens your email app with the message ready to send.",
};
