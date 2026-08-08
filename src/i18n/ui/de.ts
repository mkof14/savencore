import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** German UI chrome — clear, natural German. */
export const uiDe: UiMessages = {
  ...uiEn,
  language: "Sprache", menu: "Menü", close: "Schließen", open: "Öffnen", skipToContent: "Zum Inhalt springen",
  nav: { home: "Start", technology: "Technologie", systems: "Systeme", applications: "Anwendungen", trust: "Vertrauen", research: "Forschung", purpose: "Zweck", foundation: "Grundlagen", labs: "Labore", investors: "Investoren", signIn: "Anmelden / Registrieren" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Technologie", "technology-human-data": "Menschliche Daten", "technology-human-data-model": "Modell menschlicher Daten", "technology-data-infrastructure": "Dateninfrastruktur", "technology-interoperability": "Interoperabilität", "technology-privacy": "Datenschutz", "technology-security": "Sicherheit", "technology-artificial-intelligence": "Künstliche Intelligenz", "technology-automation": "Automatisierung", "technology-robotics": "Robotik", "systems-overview": "Systeme", "systems-knowledge-engine": "Wissenssystem", "systems-ai-decision-support": "KI-gestützte Entscheidungsunterstützung", "systems-safety-layer": "Sicherheitsschicht", "systems-communication-layer": "Kommunikationsschicht", "systems-clinical-interfaces": "Klinische Schnittstellen", "systems-robotics-layer": "Robotikschicht", "systems-drone-systems": "Drohnen-Systeme", "systems-saven-robotics-interface": "SAVEN-Robotik-Schnittstelle", "applications-overview": "Anwendungen", "applications-healthcare": "Gesundheitswesen", "applications-home": "Heimanwendung", "applications-hospitals": "Krankenhäuser", "applications-emergency": "Notfälle", "applications-industrial": "Industrie", "applications-government": "Öffentlicher Sektor", "applications-agriculture": "Landwirtschaft", "applications-research-applications": "Forschungsanwendungen", "trust-overview": "Vertrauen", "trust-privacy": "Datenschutz", "trust-security": "Sicherheit", "trust-safety": "Schutz", "trust-human-oversight": "Menschliche Aufsicht", "trust-transparency": "Transparenz", "trust-ethics": "Ethik und verantwortungsvolle Nutzung", "trust-limitations": "Grenzen", "footer-technology-overview": "Überblick", "footer-systems-overview": "Überblick", "footer-applications-overview": "Überblick", "footer-trust-overview": "Überblick", "footer-applications-research": "Forschung", "footer-trust-ethics": "Ethik", "footer-company-about": "Über uns",
    "footer-company-home": "Startseite", "footer-company-biomath-core": "BioMath Core", "footer-company-mission": "Mission", "footer-company-investors-contact": "Investorenkontakt", "footer-company-roadmap": "Fahrplan",     "footer-resources-search": "Suche",
    "footer-resources-lab": "Lab",
    "footer-resources-faq": "FAQ", "footer-resources-security-issue": "Sicherheitsvorfall", "sign-in": "Anmelden / Registrieren", "footer-company-contact": "Kontakt", "footer-company-investors": "Investoren", "footer-company-media": "Medien", "footer-labs-overview": "Überblick", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Future Lab", "footer-systems-saven-robotics-interface": "Robotics Interface", "footer-legal-privacy-policy": "Datenschutzrichtlinie", "footer-legal-terms-of-use": "Nutzungsbedingungen", "footer-legal-cookie-policy": "Cookie-Richtlinie", "footer-legal-cookie-preferences": "Cookie-Einstellungen", "footer-legal-accessibility-statement": "Barrierefreiheitserklärung", "footer-legal-security": "Sicherheit", "footer-legal-responsible-ai": "Verantwortungsvolle KI", "footer-legal-medical-disclaimer": "Medizinischer Hinweis", "footer-legal-research-disclaimer": "Forschungshinweis", "footer-legal-intellectual-property": "Geistiges Eigentum", "footer-legal-trademark-notice": "Markenhinweis", "footer-legal-copyright": "Urheberrechtshinweis", "footer-legal-data-rights": "Datenrechte", "footer-legal-regional-privacy-rights": "Regionale Datenschutzrechte", "footer-legal-do-not-sell-or-share": "Nicht verkaufen oder weitergeben", "footer-legal-legal-notices": "Rechtliche Hinweise", "footer-legal-more": "Mehr"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Zum hellen Design wechseln", themeToDark: "Zum dunklen Design wechseln", signIn: "Anmelden / Registrieren", admin: "Admin", technology: "Technologie", systems: "Systeme", architecture: "Architektur", applications: "Anwendungen", trust: "Vertrauen", research: "Forschung", labs: "Labore", about: "Über SAVEN Core", resources: "Ressourcen", company: "Unternehmen", legal: "Rechtliches", more: "Mehr", contact: "Kontakt", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. Alle Rechte vorbehalten.", copyrightShort: "© SAVEN Core", rightsReserved: "Alle Rechte vorbehalten.", privacy: "Datenschutz", terms: "Bedingungen", cookies: "Cookies", theme: "Design", themeLight: "Hell", themeDark: "Dunkel", version: "Version", tagline: "Humane Daten.\nVernetzte Systeme.\nVerantwortungsvolle Technologie." },
  social: { ...uiEn.social, navLabel: "Soziale Netzwerke", notConfigured: "Link noch nicht konfiguriert" },
  admin: { ...uiEn.admin, localStoreOnly: "Nur lokal / auf diesem Host nicht dauerhaft: Einladungen, Rollen, Berechtigungen, Mailings und Benachrichtigungen brauchen BLOB_READ_WRITE_TOKEN (Vercel Blob) für Persistenz auf Vercel. Ohne Token können Änderungen fehlschlagen oder nach Redeploy verschwinden. Lokale Entwicklung schreibt weiterhin nach storage/admin/.", brandTitle: "SAVEN Admin", navLabel: "Admin-Navigation", statusInDevelopment: "In Entwicklung", eyebrow: "Admin-Plattform", backToSite: "Zur Website", signOut: "Abmelden", navDashboard: "Übersicht", navEmailTemplates: "E-Mail-Vorlagen", navMailings: "Mailings", navInvitations: "Einladungen", navUsers: "Benutzer & Rollen", navPermissions: "Berechtigungen", navNotifications: "Benachrichtigungen", navMedia: "Medienbibliothek", navMarketing: "Marketing-Tools", navMonitoring: "Technische Überwachung", openSection: "Öffnen", dashboardTitle: "Site-Administration", emailTitle: "E-Mail-Vorlagen", mediaTitle: "Medienbibliothek", mediaLead: "Video, Dokumente und Links an einem Ort hinzufügen. Marken-Assets kommen mit der Site; öffentliche Einträge erscheinen unter /media/.", mediaAddHeading: "Hochladen", mediaAddLead: "Klassische Bibliothek: Datei hochladen, Video-URL hinzufügen oder Link speichern. Danach Zeilen in der Tabelle verwalten.", mediaTabFile: "Datei hochladen", mediaTabVideo: "Video hochladen", mediaTabLink: "Link hinzufügen", mediaTabUploadFile: "Datei hochladen", mediaTabUploadVideo: "Video hochladen", mediaTabAddLink: "Link hinzufügen", mediaChooseFile: "Datei wählen", mediaChooseVideo: "Videodatei wählen", mediaVercelLimit: "Auf diesem Host lassen sich Mediathek-Änderungen ohne BLOB_READ_WRITE_TOKEN nicht speichern (typisch bei Vercel). Vercel Blob für dauerhaften Speicher konfigurieren, Dateien und YouTube/Vimeo-Links lokal hinzufügen, oder bei großen Videos URL-Embed statt Datei-Upload nutzen (Vercel-Body ≈ 4,5 MB).", mediaErrorTooLarge: "Datei zu groß. Lokal max. 40 MB. Auf Vercel scheitern Uploads über ~4,5 MB meist — YouTube- oder Vimeo-URL nutzen.", mediaErrorInvalidType: "Nicht unterstützter Dateityp. PDF, Office, Bilder oder Video (MP4, WebM, OGG, MOV).", mediaErrorStorage: "Speicher hier nicht beschreibbar. BLOB_READ_WRITE_TOKEN für dauerhaften Vercel-Blob-Speicher konfigurieren, oder lokal entwickeln.", mediaVideoUrlHint: "Empfohlen für große Videos: YouTube- oder Vimeo-Link einfügen (Vorschau darunter).", mediaLibraryHeading: "Bibliothek", mediaFilterAllFiles: "Alle Dateien", mediaFilterVideos: "Videos", mediaFilterDocs: "Dokumente", mediaDeleteConfirm: "Diesen Eintrag aus der Bibliothek löschen? Eingebaute Katalogzeilen werden aus Listen ausgeblendet (Site-Dateien unter /public bleiben).", mediaFilterLinks: "Links", mediaSourceSeed: "Mitgeliefert", colDate: "Datum", mediaDropTitle: "Video oder PDF ablegen oder Link einfügen", mediaDropHint: "oder klicken zum Durchsuchen", mediaAcceptedTypes: "PDF, DOC/DOCX, PPT/PPTX, KEY, MP4/WebM/MOV, Bilder · max. 40 MB lokal", mediaBrowse: "Durchsuchen…", mediaUploadNow: "Hochladen", mediaUploading: "Wird hochgeladen…", mediaUploadSuccess: "Hochgeladen.", mediaVideoUrlLabel: "Video-URL", mediaVideoUrlPlaceholder: "YouTube, Vimeo oder direkte MP4/WebM-URL", mediaVideoTitlePlaceholder: "Titel (optional — aus URL)", mediaVideoOrUpload: "Oder Videodatei hochladen (lokal / kleine Dateien)", mediaVideoPreview: "Vorschau", mediaSaveVideo: "Video speichern", mediaLinkHeading: "Link hinzufügen", mediaLinkUrlLabel: "URL", mediaLinkNote: "Notiz (optional)", mediaLinkNotePlaceholder: "Kurze Notiz", mediaLinkAdd: "Link hinzufügen", mediaSaveLink: "Link speichern", mediaLinkSuccess: "Gespeichert.", mediaFilterAll: "Alle", mediaEmptyLibrary: "Noch keine Einträge. Datei hochladen oder Video-URL oben hinzufügen.", mediaJustAdded: "Hinzugefügt", mediaOpen: "Öffnen", mediaCopyLink: "Link kopieren", mediaCatImage: "Bild", mediaCatVideo: "Video", mediaCatDocument: "Dokument", mediaCatPresentation: "Präsentation", mediaCatLink: "Link", mediaCatOther: "Sonstige", actionDelete: "Löschen", marketingTitle: "Marketing-Tools", monitoringTitle: "Technische Überwachung", actionPreview: "Vorschau", actionCopy: "Kopieren", actionPrint: "Drucken", actionShare: "Teilen", actionDownload: "Download", actionDownloading: "Wird heruntergeladen…", actionPdf: "PDF" },
  auth: {
    signInTitleBefore: "Bei ",
    signInTitleAfter: " anmelden",
    signInLead:
      "Melden Sie sich mit E-Mail und Passwort an oder fahren Sie mit Google fort.",
    emailLabel: "E-Mail",
    emailPlaceholder: "sie@beispiel.com",
    passwordLabel: "Passwort",
    passwordPlaceholder: "Passwort",
    showPassword: "Passwort anzeigen",
    hidePassword: "Passwort verbergen",
    signInSubmit: "Anmelden",
    orDivider: "oder",
    continueWithGoogle: "Mit Google fortfahren",
    back: "Zurück",
    invalidCredentials: "Ungültige E-Mail oder ungültiges Passwort.",
    credentialsUnavailable:
      "Die Anmeldung per E-Mail ist derzeit nicht verfügbar.",
    googleUnavailable:
      "Die Anmeldung mit Google ist derzeit nicht verfügbar.",
    signInUnavailable: "Die Anmeldung ist derzeit nicht verfügbar.",
  },
  legal: {"lastUpdated":"Zuletzt aktualisiert","related":"Rechtliche Seiten","draftNote":"Website-Richtlinien und Nutzungsbedingungen dieser Website — kein vollständiges multi-jurisdiktionelles Regulierungspaket. Fragen: info@savencore.com.","indexTitle":"Rechtliches","indexLead":"Datenschutz, Nutzungsbedingungen, Cookies, Barrierefreiheit, Sicherheit und verwandte Hinweise für die öffentliche Website. Dies sind Website-Richtlinien — kein anwaltlich zertifiziertes Paket für jede Jurisdiktion. Cookie-Einstellungen erklären, dass kein Live-CMP aktiv ist — Browser-Einstellungen nutzen oder uns kontaktieren."},
    search: { title: "Suche", lead: "Veröffentlichte Seiten nach Titel finden. Leichte Sitemap-Suche — kein Volltext-CMS.", placeholder: "Seitentitel suchen…", submit: "Suchen", noQuery: "Geben Sie einige Buchstaben ein, um veröffentlichte Seitentitel zu filtern.", empty: "Keine veröffentlichten Seiten passen. Anderes Wort versuchen oder die Fußzeilenkarte nutzen.", results: "{count} passende Seiten", honestNote: "Die Suche deckt nur veröffentlichte Seitentitel und Navigationsbeschriftungen ab — keine Dokumentkörper oder privaten Admin-Inhalt.", navLabel: "Suche" },

  lab: {
    eyebrow: "Test / Lab / Experimente",
    title: "Lab",
    lead: "Eine Sandbox, um neue Funktionen auszuprobieren, ohne die öffentliche Website zu ändern. Hier sind Experimente — keine Produktversprechen.",
    experimentsHeading: "Experimentflächen",
    featuredBadge: "Hervorgehobenes Experiment",
    particleHeroTitle: "Mensch + Energiewellen",
    particleHeroLead:
      "WebGL-Partikel-Morph — Punktwolken-Figur mit fließenden SAVEN-Energieströmen. Nur Bilder auf der Leinwand. Die öffentliche Startseite bleibt die Foto-Collage.",
    openExperiment: "Experiment öffnen",
    backToLab: "← Zurück zum Lab",
    note: "Neue Experimente können von diesem Hub verlinkt werden. Diese Seite ist noindex und nicht im Hauptmenü.",
  },

  medicalDisclaimer: {
    short:
      "SAVEN Core stellt über diese Website keine Diagnosen, verschreibt und verkauft keine Arzneimittel und leistet keine Notfallversorgung. Wir entwickeln Systeme zur Unterstützung von Ärztinnen und Ärzten, medizinischem Personal und Menschen. Website-Inhalte sind informativ — keine medizinische Beratung.",
    linkLabel: "Medizinischer Haftungsausschluss",
  },
  home: { developmentStatus: "Architektur", architectureOverview: "Die Idee auf einen Blick", architectureOverviewText: "Von Menschen und Informationen zu Systemen, die im Alltag unterstützen — innerhalb klarer Grenzen.", knowledgeExplorer: "Entdecken", majorDomains: "Hauptthemen", publishedPages: "Seiten hier", relationships: "Wie es zusammenhängt", domainMap: "Entdecken", architectureDependencies: "Wie die Themen zusammenpassen", currentStatus: "Fortschritt", platformProgress: "Themen", featuredConcepts: "Entdecken", startWithCore: "Einige Ideen für den Einstieg", continueExploring: "Weiter", chooseEntrance: "Wählen Sie einen Ausgangspunkt", knowledgeId: "Dokument-ID", complete: "Abgeschlossen", inProgress: "Aktiv", planned: "Reserviert", understand: "Verstehen", explore: "Erkunden", discover: "Entdecken", continue: "Weiter", beatWhat: "Was", beatWho: "Wer", beatWhy: "Warum", beatHow: "Wie", hourFramesLabel: "Eine Stunde Fürsorge", watchTitle: "SAVEN Core ansehen", watchSupport: "Eine kurze Präsentationsübersicht zu SAVEN Core — intelligente Systeme, die menschliches Leben unterstützen sollen.", watchEmbedTitle: "SAVEN Core Präsentationsvideo", particleHeroLabel: "Partikel-Morph-Visualisierung", particlePreviewTitle: "Particle-Hero-Experiment", particlePreviewLead: "Interne Testseite für den WebGL-Partikel-Morph. Die öffentliche Startseite nutzt die Foto-Collage." },
  ko: { ...uiEn.ko, document: "Dokument", passport: "Dokumentinformationen", knowledgeId: "Dokument-ID", domain: "Themenbereich", type: "Dokumenttyp", status: "Status", version: "Version", evidence: "Evidenz", maturity: "Status", readingTime: "Lesezeit", lastReview: "Letzte Überprüfung", owner: "Verantwortlich", engineeringObject: "Seiteninformationen", currentPosition: "Sie sind hier", nextReading: "Nächste Leseempfehlung", notYetAssigned: "Nicht angegeben", dependencies: "Verwandte Konzepte", dependencyGraph: "Verwandte Konzepte", incoming: "Verwendet von", outgoing: "Basiert auf", nonePublished: "Keine", knowledgeGraph: "Verbindungen", parents: "Übergeordnete Themen", children: "Enthaltene Themen", consumers: "Verwendet von", providers: "Basiert auf", lifecycle: "Dokumentverlauf", created: "Erstellt", reviewed: "Überprüft", published: "Veröffentlicht", updated: "Aktualisiert", nextReview: "Nächste Überprüfung", deprecated: "Veraltet", futureRevision: "Überarbeitung", versionHistory: "Versionen", previousVersion: "Vorherige Version", summaryOfChanges: "Was sich geändert hat", date: "Datum", readingPaths: "Leseempfehlungen", level2Kicker: "Als Nächstes", level2Title: "Verwandte Lektüre und Konzepte", level3Kicker: "Details", level3Title: "Dokumentinformationen für Fachleute" },
  scope: { definition: "Definition", "current-scope": "Was dies abdeckt", "future-scope": "Was als Nächstes kommt", "human-oversight": "Menschliche Aufsicht", "safety-boundary": "Sicherheitsgrenze", "engineering-note": "Hinweise", limitation: "Grenze" },
  callout: { information: "Information", definition: "Definition", "engineering-note": "Hinweise", important: "Wichtig", "current-scope": "Was dies abdeckt", "future-scope": "Was als Nächstes kommt", relationship: "Verbindung" },
  common: { openArrow: "Öffnen", relatedDomains: "Verwandte Themen", referenceLinks: "Weiterlesen", keyPrinciples: "Kernprinzipien", executiveSummary: "Zusammenfassung", whyItMatters: "Warum es wichtig ist", purpose: "Zweck", futureExpansion: "Verwandte Themen" },
  hub: { related: "Weiter", explore: "Entdecken", areas: "Bereiche", what: "Kurz gesagt", why: "Warum es hilft", next: "Was als Nächstes kommt", deeper: "Weiterlesen", scenes: "Szenen" },
  pwa: {
    installApp: "App installieren",
    installed: "Installiert",
    howToInstall: "So installieren",
    closeHelp: "Schließen",
    iosTip:
      "Auf iPhone oder iPad: Tippen Sie auf Teilen und dann auf Zum Home-Bildschirm, um SAVEN Core zu installieren.",
    browserTip:
      "Im Browser-Menü „App installieren“ oder „Zum Home-Bildschirm“ wählen, um SAVEN Core zu installieren.",
  },

  contact: {
    formHeading: "Nachricht",
    nameLabel: "Name",
    emailLabel: "E-Mail",
    subjectLabel: "Betreff (optional)",
    messageLabel: "Nachricht",
    submit: "Nachricht senden",
    submitMailto: "In E-Mail-App öffnen",
    success: "Nachricht gesendet. Wir antworten, sobald wir können.",
    successMailto:
      "Ihre E-Mail-App sollte sich mit der fertigen Nachricht öffnen.",
    error: "Bitte Name, E-Mail und Nachricht ausfüllen.",
    fallbackNote:
      "Der direkte Versand ist auf diesem Server nicht konfiguriert. Stattdessen öffnet sich Ihre E-Mail-App, damit die Nachricht dennoch an info@savencore.com geht.",
  },

  media: {
    galleryTitle: "Bibliothek",
    galleryLead:
      "Durchsuchen Sie freigegebene Videos, Dokumente und Links. Öffnen zum Ansehen oder Dateien herunterladen.",
    filterAll: "Alle",
    filterVideos: "Videos",
    filterDocs: "Dokumente",
    filterLinks: "Links",
    sectionVideos: "Videos",
    sectionDocuments: "Dokumente & Präsentationen",
    sectionLinks: "Links",
    sectionBrand: "Markenassets",
    emptyAll:
      "Die öffentliche Bibliothek ist derzeit leer. Freigegebene Materialien erscheinen hier nach dem Hinzufügen.",
    emptyVideos:
      "Noch keine Videos in der öffentlichen Bibliothek. Freigegebene Uploads erscheinen hier.",
    emptyDocuments:
      "Noch keine Dokumente oder Präsentationen. Operatoren können PDF- und Präsentationsmaterialien unter Admin → Medien hinzufügen.",
    emptyLinks:
      "Kuratierte Links erscheinen hier, wenn sie der gemeinsamen Mediathek hinzugefügt werden.",
    emptyBrand: "Markenassets werden aus der Site-Bibliothek geladen.",
    preview: "Vorschau",
    view: "Ansehen",
    download: "Download",
    downloading: "Wird heruntergeladen…",
    copy: "Link kopieren",
    share: "Teilen",
    open: "Öffnen",
    copied: "Link kopiert.",
    shared: "Teilen-Dialog geöffnet.",
    downloadStarted: "Download gestartet.",
    actionFailed: "Aktion konnte nicht abgeschlossen werden.",
    badgeImage: "Bild",
    badgeVideo: "Video",
    badgeDocument: "Dokument",
    badgePresentation: "Präsentation",
    badgeLink: "Link",
    badgeOther: "Datei",
  },
};
