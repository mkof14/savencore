import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** French UI chrome — clear, natural international French. */
export const uiFr: UiMessages = {
  ...uiEn,
  language: "Langue", menu: "Menu", close: "Fermer", open: "Ouvrir", skipToContent: "Aller au contenu",
  nav: { home: "Accueil", technology: "Technologie", systems: "Systèmes", applications: "Applications", trust: "Confiance", research: "Recherche", purpose: "Raison d’être", foundation: "Fondations", labs: "Laboratoires", investors: "Investisseurs", signIn: "Connexion / Inscription" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Technologie", "technology-human-data": "Données humaines", "technology-human-data-model": "Modèle de données humaines", "technology-data-infrastructure": "Infrastructure de données", "technology-interoperability": "Interopérabilité", "technology-privacy": "Confidentialité", "technology-security": "Sécurité", "technology-artificial-intelligence": "Intelligence artificielle", "technology-automation": "Automatisation", "technology-robotics": "Robotique", "systems-overview": "Systèmes", "systems-knowledge-engine": "Moteur de connaissances", "systems-ai-decision-support": "Aide à la décision par IA", "systems-safety-layer": "Couche de sécurité", "systems-communication-layer": "Couche de communication", "systems-clinical-interfaces": "Interfaces cliniques", "systems-robotics-layer": "Couche robotique", "systems-drone-systems": "Systèmes de drones", "applications-overview": "Applications", "applications-healthcare": "Santé", "applications-home": "Domicile", "applications-hospitals": "Hôpitaux", "applications-emergency": "Urgences", "applications-industrial": "Industrie", "applications-government": "Secteur public", "applications-agriculture": "Agriculture", "applications-research-applications": "Applications de recherche", "trust-overview": "Confiance", "trust-privacy": "Confidentialité", "trust-security": "Sécurité", "trust-safety": "Protection", "trust-human-oversight": "Supervision humaine", "trust-transparency": "Transparence", "trust-ethics": "Éthique et usage responsable", "trust-limitations": "Limites", "research-overview": "Recherche", "footer-technology-overview": "Aperçu", "footer-systems-overview": "Aperçu", "footer-applications-overview": "Aperçu", "footer-trust-overview": "Aperçu", "footer-research-overview": "Aperçu", "footer-applications-research": "Recherche", "footer-trust-ethics": "Éthique", "footer-company-about": "À propos", "footer-company-mission": "Mission" , "sign-in": "Connexion / Inscription", "footer-company-investors": "Investisseurs", "footer-labs-overview": "Aperçu", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Internal Future Lab", "footer-systems-saven-robotics-interface": "SAVEN Robotics Interface", "footer-legal-privacy-policy": "Politique de confidentialité", "footer-legal-terms-of-use": "Conditions d'utilisation", "footer-legal-cookie-policy": "Politique relative aux cookies", "footer-legal-cookie-preferences": "Préférences de cookies", "footer-legal-accessibility-statement": "Déclaration d'accessibilité", "footer-legal-security": "Sécurité", "footer-legal-responsible-ai": "IA responsable", "footer-legal-medical-disclaimer": "Avertissement médical", "footer-legal-research-disclaimer": "Avertissement recherche", "footer-legal-intellectual-property": "Propriété intellectuelle", "footer-legal-trademark-notice": "Avis sur les marques", "footer-legal-copyright": "Avis de copyright", "footer-legal-data-rights": "Droits relatifs aux données", "footer-legal-regional-privacy-rights": "Droits régionaux à la vie privée", "footer-legal-do-not-sell-or-share": "Ne pas vendre ni partager", "footer-legal-legal-notices": "Mentions légales"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Passer au thème clair", themeToDark: "Passer au thème sombre", signIn: "Connexion / Inscription", technology: "Technologie", systems: "Systèmes", applications: "Applications", trust: "Confiance", research: "Recherche", about: "À propos de SAVEN Core", resources: "Ressources", company: "Entreprise", legal: "Mentions légales", contact: "Contact", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. Tous droits réservés.", copyrightShort: "© SAVEN Core", privacy: "Confidentialité", terms: "Conditions", cookies: "Cookies", theme: "Thème", themeLight: "Clair", themeDark: "Sombre", version: "Version", tagline: "Données humaines.\nSystèmes connectés.\nTechnologie responsable." },
  auth: {
    signInTitleBefore: "Connexion à ",
    signInTitleAfter: "",
    signInLead:
      "Connectez-vous avec e-mail et mot de passe, ou continuez avec Google.",
    emailLabel: "E-mail",
    emailPlaceholder: "vous@exemple.com",
    passwordLabel: "Mot de passe",
    passwordPlaceholder: "Mot de passe",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    signInSubmit: "Se connecter",
    orDivider: "ou",
    continueWithGoogle: "Continuer avec Google",
    back: "Retour",
    invalidCredentials: "E-mail ou mot de passe incorrect.",
    credentialsUnavailable:
      "La connexion par e-mail n’est pas disponible pour le moment.",
    googleUnavailable:
      "La connexion Google n’est pas disponible pour le moment.",
    signInUnavailable:
      "La connexion n’est pas disponible pour le moment.",
  },
  legal: {"lastUpdated":"Dernière mise à jour","related":"Pages juridiques","draftNote":"Brouillon — en attente de revue juridique"},
  home: { developmentStatus: "Architecture", architectureOverview: "L’idée en un regard", architectureOverviewText: "Des personnes et de l’information aux systèmes qui aident dans la vie quotidienne — dans des limites claires.", knowledgeExplorer: "Explorer", majorDomains: "Sujets principaux", publishedPages: "Pages ici", relationships: "Comment cela se relie", domainMap: "Découvrir", architectureDependencies: "Comment les sujets s’articulent", currentStatus: "Avancement", platformProgress: "Sujets", featuredConcepts: "Découvrir", startWithCore: "Quelques idées pour commencer", continueExploring: "Continuer", chooseEntrance: "Choisissez un point de départ", knowledgeId: "ID du document", complete: "Terminé", inProgress: "Actif", planned: "Réservé", understand: "Comprendre", explore: "Explorer", discover: "Découvrir", continue: "Continuer", beatWhat: "Quoi", beatWho: "Qui", beatWhy: "Pourquoi", beatHow: "Comment", hourFramesLabel: "Une heure de soin" },
  ko: { ...uiEn.ko, document: "Document", passport: "Informations sur le document", knowledgeId: "ID du document", domain: "Domaine thématique", type: "Type de document", status: "Statut", version: "Version", evidence: "Éléments probants", maturity: "Statut", readingTime: "Temps de lecture", lastReview: "Dernière révision", owner: "Responsable", engineeringObject: "Informations sur la page", currentPosition: "Vous êtes ici", nextReading: "Lecture suggérée", notYetAssigned: "Non précisé", dependencies: "Concepts associés", dependencyGraph: "Concepts associés", incoming: "Utilisé par", outgoing: "Dépend de", nonePublished: "Aucun", knowledgeGraph: "Connexions", parents: "Sujets plus généraux", children: "Sujets inclus", consumers: "Utilisé par", providers: "S’appuie sur", lifecycle: "Historique du document", created: "Créé", reviewed: "Révisé", published: "Publié", updated: "Mis à jour", nextReview: "Prochaine révision", deprecated: "Obsolète", futureRevision: "Révision", versionHistory: "Versions", previousVersion: "Version précédente", summaryOfChanges: "Ce qui a changé", date: "Date", readingPaths: "Lectures suggérées", level2Kicker: "Ensuite", level2Title: "Lectures et concepts associés", level3Kicker: "Détails", level3Title: "Informations du document pour les professionnels" },
  scope: { definition: "Définition", "current-scope": "Ce que cela couvre", "future-scope": "La suite", "human-oversight": "Supervision humaine", "safety-boundary": "Limite de sécurité", "engineering-note": "Notes", limitation: "Limite" },
  callout: { information: "Information", definition: "Définition", "engineering-note": "Notes", important: "Important", "current-scope": "Ce que cela couvre", "future-scope": "La suite", relationship: "Lien" },
  common: { openArrow: "Ouvrir", relatedDomains: "Sujets associés", referenceLinks: "Pour aller plus loin", keyPrinciples: "Principes clés", executiveSummary: "Résumé", whyItMatters: "Pourquoi c’est important", purpose: "Raison d’être", futureExpansion: "Sujets associés" },
  hub: { related: "Continuer", explore: "Explorer", areas: "Domaines", what: "De quoi il s’agit", why: "Pourquoi c’est important", next: "Où aller ensuite", deeper: "Plus de détail" },
  pwa: {
    installApp: "Installer l’app",
    iosTip:
      "Sur iPhone ou iPad : appuyez sur Partager, puis sur Sur l’écran d’accueil pour installer SAVEN Core.",
  },
};
