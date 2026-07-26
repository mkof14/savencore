import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** German UI chrome — clear, natural German. */
export const uiDe: UiMessages = {
  ...uiEn,
  language: "Sprache", menu: "Menü", close: "Schließen", open: "Öffnen", skipToContent: "Zum Inhalt springen",
  nav: { home: "Start", technology: "Technologie", systems: "Systeme", applications: "Anwendungen", trust: "Vertrauen", research: "Forschung", purpose: "Zweck", foundation: "Grundlagen", labs: "Labore", investors: "Investoren", signIn: "Anmelden / Registrieren" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Technologie", "technology-human-data": "Menschliche Daten", "technology-human-data-model": "Modell menschlicher Daten", "technology-data-infrastructure": "Dateninfrastruktur", "technology-interoperability": "Interoperabilität", "technology-privacy": "Datenschutz", "technology-security": "Sicherheit", "technology-artificial-intelligence": "Künstliche Intelligenz", "technology-automation": "Automatisierung", "technology-robotics": "Robotik", "systems-overview": "Systeme", "systems-knowledge-engine": "Wissenssystem", "systems-ai-decision-support": "KI-gestützte Entscheidungsunterstützung", "systems-safety-layer": "Sicherheitsschicht", "systems-communication-layer": "Kommunikationsschicht", "systems-clinical-interfaces": "Klinische Schnittstellen", "systems-robotics-layer": "Robotikschicht", "systems-drone-systems": "Drohnen-Systeme", "applications-overview": "Anwendungen", "applications-healthcare": "Gesundheitswesen", "applications-home": "Zuhause", "applications-hospitals": "Krankenhäuser", "applications-emergency": "Notfälle", "applications-industrial": "Industrie", "applications-government": "Öffentlicher Sektor", "applications-agriculture": "Landwirtschaft", "applications-research-applications": "Forschungsanwendungen", "trust-overview": "Vertrauen", "trust-privacy": "Datenschutz", "trust-security": "Sicherheit", "trust-safety": "Schutz", "trust-human-oversight": "Menschliche Aufsicht", "trust-transparency": "Transparenz", "trust-ethics": "Ethik und verantwortungsvolle Nutzung", "trust-limitations": "Grenzen", "research-overview": "Forschung", "footer-technology-overview": "Überblick", "footer-systems-overview": "Überblick", "footer-applications-overview": "Überblick", "footer-trust-overview": "Überblick", "footer-research-overview": "Überblick", "footer-applications-research": "Forschung", "footer-trust-ethics": "Ethik", "footer-company-about": "Über uns", "footer-company-mission": "Mission" , "sign-in": "Anmelden / Registrieren", "footer-company-investors": "Investoren", "footer-labs-overview": "Überblick", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Internal Future Lab", "footer-systems-saven-robotics-interface": "SAVEN Robotics Interface", "footer-legal-privacy-policy": "Datenschutzrichtlinie", "footer-legal-terms-of-use": "Nutzungsbedingungen", "footer-legal-cookie-policy": "Cookie-Richtlinie", "footer-legal-cookie-preferences": "Cookie-Einstellungen", "footer-legal-accessibility-statement": "Barrierefreiheitserklärung", "footer-legal-security": "Sicherheit", "footer-legal-responsible-ai": "Verantwortungsvolle KI", "footer-legal-medical-disclaimer": "Medizinischer Hinweis", "footer-legal-research-disclaimer": "Forschungshinweis", "footer-legal-intellectual-property": "Geistiges Eigentum", "footer-legal-trademark-notice": "Markenhinweis", "footer-legal-copyright": "Urheberrechtshinweis", "footer-legal-data-rights": "Datenrechte", "footer-legal-regional-privacy-rights": "Regionale Datenschutzrechte", "footer-legal-do-not-sell-or-share": "Nicht verkaufen oder weitergeben", "footer-legal-legal-notices": "Rechtliche Hinweise"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Zum hellen Design wechseln", themeToDark: "Zum dunklen Design wechseln", signIn: "Anmelden / Registrieren", technology: "Technologie", systems: "Systeme", applications: "Anwendungen", trust: "Vertrauen", research: "Forschung", about: "Über SAVEN Core", resources: "Ressourcen", company: "Unternehmen", legal: "Rechtliches", contact: "Kontakt", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. Alle Rechte vorbehalten.", copyrightShort: "© SAVEN Core", privacy: "Datenschutz", terms: "Bedingungen", cookies: "Cookies", theme: "Design", themeLight: "Hell", themeDark: "Dunkel", version: "Version", tagline: "Humane Daten.\nVernetzte Systeme.\nVerantwortungsvolle Technologie." },
  auth: {
    signInTitle: "Bei SAVEN Core anmelden",
    signInLead:
      "Melden Sie sich mit E-Mail und Passwort an oder fahren Sie mit Google fort. Die Authentifizierung ist verfügbar, wenn Zugangsdaten konfiguriert sind.",
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
    configureTitle: "Einrichtung erforderlich",
    configureGoogle:
      "Google-Anmeldung ist noch nicht konfiguriert. Fügen Sie GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET und AUTH_SECRET zur Umgebung hinzu.",
    configurePassword:
      "E-Mail-/Passwort-Anmeldung ist noch nicht konfiguriert. Fügen Sie AUTH_SECRET, AUTH_DEMO_EMAIL und AUTH_DEMO_PASSWORD für ein Staging-Operatorkonto hinzu. Eine vollständige Benutzerdatenbank folgt später.",
    configureCredentials:
      "Google-Anmeldung ist noch nicht konfiguriert. Fügen Sie GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET und AUTH_SECRET zur Umgebung hinzu.",
    invalidCredentials: "Ungültige E-Mail oder ungültiges Passwort.",
    operatorNote:
      "Die Passwort-Anmeldung nutzt ein einzelnes umgebungsbasiertes Operatorkonto nur für Launch-Tests — kein öffentliches Benutzerregister.",
    notSignedIn: "Sie sind nicht angemeldet.",
  },
  legal: {"lastUpdated":"Zuletzt aktualisiert","related":"Rechtliche Seiten","draftNote":"Entwurf — ausstehende rechtliche Prüfung"},
  home: { developmentStatus: "Architektur", architectureOverview: "Die Idee auf einen Blick", architectureOverviewText: "Von Menschen und Informationen zu Systemen, die im Alltag unterstützen — innerhalb klarer Grenzen.", knowledgeExplorer: "Entdecken", majorDomains: "Hauptthemen", publishedPages: "Seiten hier", relationships: "Wie es zusammenhängt", domainMap: "Entdecken", architectureDependencies: "Wie die Themen zusammenpassen", currentStatus: "Fortschritt", platformProgress: "Themen", featuredConcepts: "Entdecken", startWithCore: "Einige Ideen für den Einstieg", continueExploring: "Weiter", chooseEntrance: "Wählen Sie einen Ausgangspunkt", knowledgeId: "Dokument-ID", complete: "Abgeschlossen", inProgress: "Aktiv", planned: "Reserviert", understand: "Verstehen", explore: "Erkunden", discover: "Entdecken", continue: "Weiter", beatWhat: "Was", beatWho: "Wer", beatWhy: "Warum", beatHow: "Wie", hourFramesLabel: "Eine Stunde Fürsorge" },
  ko: { ...uiEn.ko, document: "Dokument", passport: "Dokumentinformationen", knowledgeId: "Dokument-ID", domain: "Themenbereich", type: "Dokumenttyp", status: "Status", version: "Version", evidence: "Evidenz", maturity: "Status", readingTime: "Lesezeit", lastReview: "Letzte Überprüfung", owner: "Verantwortlich", engineeringObject: "Seiteninformationen", currentPosition: "Sie sind hier", nextReading: "Nächste Leseempfehlung", notYetAssigned: "Nicht angegeben", dependencies: "Verwandte Konzepte", dependencyGraph: "Verwandte Konzepte", incoming: "Verwendet von", outgoing: "Basiert auf", nonePublished: "Keine", knowledgeGraph: "Verbindungen", parents: "Übergeordnete Themen", children: "Enthaltene Themen", consumers: "Verwendet von", providers: "Basiert auf", lifecycle: "Dokumentverlauf", created: "Erstellt", reviewed: "Überprüft", published: "Veröffentlicht", updated: "Aktualisiert", nextReview: "Nächste Überprüfung", deprecated: "Veraltet", futureRevision: "Überarbeitung", versionHistory: "Versionen", previousVersion: "Vorherige Version", summaryOfChanges: "Was sich geändert hat", date: "Datum", readingPaths: "Leseempfehlungen", level2Kicker: "Als Nächstes", level2Title: "Verwandte Lektüre und Konzepte", level3Kicker: "Details", level3Title: "Dokumentinformationen für Fachleute" },
  scope: { definition: "Definition", "current-scope": "Was dies abdeckt", "future-scope": "Was als Nächstes kommt", "human-oversight": "Menschliche Aufsicht", "safety-boundary": "Sicherheitsgrenze", "engineering-note": "Hinweise", limitation: "Grenze" },
  callout: { information: "Information", definition: "Definition", "engineering-note": "Hinweise", important: "Wichtig", "current-scope": "Was dies abdeckt", "future-scope": "Was als Nächstes kommt", relationship: "Verbindung" },
  common: { openArrow: "Öffnen", relatedDomains: "Verwandte Themen", referenceLinks: "Weiterlesen", keyPrinciples: "Kernprinzipien", executiveSummary: "Zusammenfassung", whyItMatters: "Warum es wichtig ist", purpose: "Zweck", futureExpansion: "Verwandte Themen" },
  hub: { related: "Weiter", explore: "Entdecken", areas: "Bereiche", what: "Was das ist", why: "Warum es zählt", next: "Wohin weiter", deeper: "Mehr Details" },
  pwa: {
    installApp: "App installieren",
    iosTip:
      "Auf iPhone oder iPad: Tippen Sie auf Teilen und dann auf Zum Home-Bildschirm, um SAVEN Core zu installieren.",
  },
};
