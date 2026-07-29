import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** French UI chrome — clear, natural international French. */
export const uiFr: UiMessages = {
  ...uiEn,
  language: "Langue", menu: "Menu", close: "Fermer", open: "Ouvrir", skipToContent: "Aller au contenu",
  nav: { home: "Accueil", technology: "Technologie", systems: "Systèmes", applications: "Applications", trust: "Confiance", research: "Recherche", purpose: "Raison d’être", foundation: "Fondations", labs: "Laboratoires", investors: "Investisseurs", signIn: "Connexion / Inscription" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Technologie", "technology-human-data": "Données humaines", "technology-human-data-model": "Modèle de données humaines", "technology-data-infrastructure": "Infrastructure de données", "technology-interoperability": "Interopérabilité", "technology-privacy": "Confidentialité", "technology-security": "Sécurité", "technology-artificial-intelligence": "Intelligence artificielle", "technology-automation": "Automatisation", "technology-robotics": "Robotique", "systems-overview": "Systèmes", "systems-knowledge-engine": "Moteur de connaissances", "systems-ai-decision-support": "Aide à la décision par IA", "systems-safety-layer": "Couche de sécurité", "systems-communication-layer": "Couche de communication", "systems-clinical-interfaces": "Interfaces cliniques", "systems-robotics-layer": "Couche robotique", "systems-drone-systems": "Systèmes de drones", "systems-saven-robotics-interface": "Interface robotique SAVEN", "applications-overview": "Applications", "applications-healthcare": "Santé", "applications-home": "Application domicile", "applications-hospitals": "Hôpitaux", "applications-emergency": "Urgences", "applications-industrial": "Industrie", "applications-government": "Secteur public", "applications-agriculture": "Agriculture", "applications-research-applications": "Applications de recherche", "trust-overview": "Confiance", "trust-privacy": "Confidentialité", "trust-security": "Sécurité", "trust-safety": "Protection", "trust-human-oversight": "Supervision humaine", "trust-transparency": "Transparence", "trust-ethics": "Éthique et usage responsable", "trust-limitations": "Limites", "research-overview": "Recherche", "footer-technology-overview": "Aperçu", "footer-systems-overview": "Aperçu", "footer-applications-overview": "Aperçu", "footer-trust-overview": "Aperçu", "footer-research-overview": "Aperçu", "footer-research-areas": "Domaines de recherche", "footer-research-notes": "Notes de recherche", "footer-applications-research": "Recherche", "footer-trust-ethics": "Éthique", "footer-company-about": "À propos",
    "footer-company-biomath-core": "BioMath Core", "footer-company-mission": "Mission", "footer-company-investors-contact": "Contact investisseurs", "footer-company-roadmap": "Feuille de route", "footer-resources-search": "Recherche",
    "footer-resources-faq": "FAQ", "footer-resources-security-issue": "Incident de sécurité", "sign-in": "Connexion / Inscription", "footer-company-contact": "Contact", "footer-company-investors": "Investisseurs", "footer-company-media": "Médias", "footer-labs-overview": "Aperçu", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Future Lab", "footer-systems-saven-robotics-interface": "Interface robotique", "footer-legal-privacy-policy": "Politique de confidentialité", "footer-legal-terms-of-use": "Conditions d'utilisation", "footer-legal-cookie-policy": "Politique relative aux cookies", "footer-legal-cookie-preferences": "Préférences de cookies", "footer-legal-accessibility-statement": "Déclaration d'accessibilité", "footer-legal-security": "Sécurité", "footer-legal-responsible-ai": "IA responsable", "footer-legal-medical-disclaimer": "Avertissement médical", "footer-legal-research-disclaimer": "Avertissement recherche", "footer-legal-intellectual-property": "Propriété intellectuelle", "footer-legal-trademark-notice": "Avis sur les marques", "footer-legal-copyright": "Avis de copyright", "footer-legal-data-rights": "Droits relatifs aux données", "footer-legal-regional-privacy-rights": "Droits régionaux à la vie privée", "footer-legal-do-not-sell-or-share": "Ne pas vendre ni partager", "footer-legal-legal-notices": "Mentions légales", "footer-legal-more": "Plus"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Passer au thème clair", themeToDark: "Passer au thème sombre", signIn: "Connexion / Inscription", admin: "Admin", technology: "Technologie", systems: "Systèmes", architecture: "Architecture", applications: "Applications", trust: "Confiance", research: "Recherche", labs: "Laboratoires", about: "À propos de SAVEN Core", resources: "Ressources", company: "Entreprise", legal: "Mentions légales", more: "Plus", contact: "Contact", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. Tous droits réservés.", copyrightShort: "© SAVEN Core", rightsReserved: "Tous droits réservés.", privacy: "Confidentialité", terms: "Conditions", cookies: "Cookies", theme: "Thème", themeLight: "Clair", themeDark: "Sombre", version: "Version", tagline: "Données humaines.\nSystèmes connectés.\nTechnologie responsable." },
  social: { ...uiEn.social, navLabel: "Réseaux sociaux", notConfigured: "lien pas encore configuré" },
  admin: { ...uiEn.admin, localStoreOnly: "Local uniquement / non durable sur cet hôte : invitations, rôles, permissions, envois et notifications nécessitent BLOB_READ_WRITE_TOKEN (Vercel Blob) pour persister sur Vercel. Sans lui, les changements peuvent échouer ou disparaître après redéploiement. Le développement local écrit toujours dans storage/admin/.", brandTitle: "SAVEN Admin", navLabel: "Navigation admin", statusInDevelopment: "En développement", eyebrow: "Plateforme d’administration", backToSite: "Retour au site", signOut: "Déconnexion", navDashboard: "Tableau de bord", navEmailTemplates: "Modèles d’e-mail", navMailings: "Envois", navInvitations: "Invitations", navUsers: "Utilisateurs et rôles", navPermissions: "Permissions", navNotifications: "Notifications", navMedia: "Médiathèque", navMarketing: "Outils marketing", navMonitoring: "Surveillance technique", openSection: "Ouvrir", dashboardTitle: "Administration du site", emailTitle: "Modèles d’e-mail", mediaTitle: "Médiathèque", mediaLead: "Ajoutez vidéo, documents et liens au même endroit. Les assets de marque sont livrés avec le site ; le public apparaît sur /media/.", mediaAddHeading: "Téléverser", mediaAddLead: "Outils classiques : téléverser un fichier, ajouter une URL vidéo ou enregistrer un lien. Puis gérez les lignes du tableau.", mediaTabFile: "Téléverser un fichier", mediaTabVideo: "Téléverser une vidéo", mediaTabLink: "Ajouter un lien", mediaTabUploadFile: "Téléverser un fichier", mediaTabUploadVideo: "Téléverser une vidéo", mediaTabAddLink: "Ajouter un lien", mediaChooseFile: "Choisir un fichier", mediaChooseVideo: "Choisir un fichier vidéo", mediaVercelLimit: "Cet hôte ne peut pas enregistrer les changements de médiathèque sans BLOB_READ_WRITE_TOKEN (typique sur Vercel). Configurez Vercel Blob pour un stockage durable, ajoutez fichiers et liens YouTube/Vimeo en local, ou préférez un URL embed pour les grosses vidéos (corps Vercel ≈ 4,5 Mo).", mediaErrorTooLarge: "Fichier trop volumineux. Max local 40 Mo. Sur Vercel, les envois >~4,5 Mo échouent souvent — utilisez une URL YouTube ou Vimeo.", mediaErrorInvalidType: "Type non pris en charge. PDF, Office, images ou vidéo (MP4, WebM, OGG, MOV).", mediaErrorStorage: "Stockage non accessible en écriture ici. Configurez BLOB_READ_WRITE_TOKEN pour un stockage Vercel Blob durable, ou utilisez le local.", mediaVideoUrlHint: "Recommandé pour les grandes vidéos : collez un lien YouTube ou Vimeo (aperçu ci-dessous).", mediaLibraryHeading: "Bibliothèque", mediaFilterAllFiles: "Tous les fichiers", mediaFilterVideos: "Vidéos", mediaFilterDocs: "Documents", mediaDeleteConfirm: "Supprimer cet élément de la bibliothèque ? Les lignes du catalogue intégré sont masquées des listes (les fichiers du site sous /public sont conservés).", mediaFilterLinks: "Liens", mediaSourceSeed: "Intégré", colDate: "Date", mediaDropTitle: "Déposez une vidéo, un PDF ou collez un lien", mediaDropHint: "ou cliquez pour parcourir", mediaAcceptedTypes: "PDF, DOC/DOCX, PPT/PPTX, KEY, MP4/WebM, images · max 40 Mo", mediaBrowse: "Parcourir les fichiers", mediaUploadNow: "Téléverser", mediaUploading: "Téléversement…", mediaUploadSuccess: "Téléversé.", mediaVideoUrlLabel: "URL de la vidéo", mediaVideoUrlPlaceholder: "YouTube, Vimeo ou URL MP4/WebM directe", mediaVideoTitlePlaceholder: "Titre (optionnel — depuis l’URL)", mediaVideoOrUpload: "Ou téléverser un fichier vidéo", mediaVideoPreview: "Aperçu en direct", mediaSaveVideo: "Enregistrer la vidéo", mediaLinkHeading: "Ajouter un lien", mediaLinkUrlLabel: "URL", mediaLinkNote: "Note (optionnel)", mediaLinkNotePlaceholder: "Courte note", mediaLinkAdd: "Ajouter un lien", mediaSaveLink: "Enregistrer le lien", mediaLinkSuccess: "Enregistré.", mediaFilterAll: "Tous", mediaEmptyLibrary: "Déposez une vidéo, un PDF ou collez un lien", mediaJustAdded: "Ajouté", mediaOpen: "Ouvrir", mediaCopyLink: "Copier le lien", mediaCatImage: "Image", mediaCatVideo: "Vidéo", mediaCatDocument: "Document", mediaCatPresentation: "Présentation", mediaCatLink: "Lien", mediaCatOther: "Autre", actionDelete: "Supprimer", marketingTitle: "Outils marketing", monitoringTitle: "Surveillance technique", actionPreview: "Aperçu", actionCopy: "Copier", actionPrint: "Imprimer", actionShare: "Partager", actionDownload: "Télécharger", actionDownloading: "Téléchargement…", actionPdf: "PDF" },
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
  legal: {"lastUpdated":"Dernière mise à jour","related":"Pages juridiques","draftNote":"Politiques du site et conditions d’utilisation de ce site web — pas un pack réglementaire multi-juridictionnel complet. Questions : info@savencore.com.","indexTitle":"Mentions légales","indexLead":"Confidentialité, conditions, cookies, accessibilité, sécurité et avis connexes pour le site public. Ce sont des politiques du site — pas un pack certifié par un conseil pour chaque juridiction. Les préférences cookies indiquent qu’aucun CMP de consentement n’est actif — utilisez les réglages du navigateur ou contactez-nous."},
    search: { title: "Recherche", lead: "Trouver des pages publiées par titre. Recherche légère de la carte du site — pas un CMS plein texte.", placeholder: "Rechercher des titres de pages…", submit: "Rechercher", noQuery: "Saisissez quelques lettres pour filtrer les titres de pages publiées.", empty: "Aucune page publiée ne correspond. Essayez un autre mot ou parcourez le pied de page.", results: "{count} pages correspondantes", honestNote: "La recherche couvre uniquement les titres de pages publiées et les libellés de navigation — pas les corps de documents ni l’Admin privé.", navLabel: "Recherche" },

  medicalDisclaimer: {
    short:
      "SAVEN Core ne pose pas de diagnostics médicaux, ne prescrit ni ne vend de médicaments, et ne fournit pas de soins d'urgence via ce site. Nous développons des systèmes destinés à soutenir les médecins, les professionnels de santé et les personnes. Le contenu du site est informatif — pas un avis médical.",
    linkLabel: "Avertissement médical",
  },
  home: { developmentStatus: "Architecture", architectureOverview: "L’idée en un regard", architectureOverviewText: "Des personnes et de l’information aux systèmes qui aident dans la vie quotidienne — dans des limites claires.", knowledgeExplorer: "Explorer", majorDomains: "Sujets principaux", publishedPages: "Pages ici", relationships: "Comment cela se relie", domainMap: "Découvrir", architectureDependencies: "Comment les sujets s’articulent", currentStatus: "Avancement", platformProgress: "Sujets", featuredConcepts: "Découvrir", startWithCore: "Quelques idées pour commencer", continueExploring: "Continuer", chooseEntrance: "Choisissez un point de départ", knowledgeId: "ID du document", complete: "Terminé", inProgress: "Actif", planned: "Réservé", understand: "Comprendre", explore: "Explorer", discover: "Découvrir", continue: "Continuer", beatWhat: "Quoi", beatWho: "Qui", beatWhy: "Pourquoi", beatHow: "Comment", hourFramesLabel: "Une heure de soin" },
  ko: { ...uiEn.ko, document: "Document", passport: "Informations sur le document", knowledgeId: "ID du document", domain: "Domaine thématique", type: "Type de document", status: "Statut", version: "Version", evidence: "Éléments probants", maturity: "Statut", readingTime: "Temps de lecture", lastReview: "Dernière révision", owner: "Responsable", engineeringObject: "Informations sur la page", currentPosition: "Vous êtes ici", nextReading: "Lecture suggérée", notYetAssigned: "Non précisé", dependencies: "Concepts associés", dependencyGraph: "Concepts associés", incoming: "Utilisé par", outgoing: "Dépend de", nonePublished: "Aucun", knowledgeGraph: "Connexions", parents: "Sujets plus généraux", children: "Sujets inclus", consumers: "Utilisé par", providers: "S’appuie sur", lifecycle: "Historique du document", created: "Créé", reviewed: "Révisé", published: "Publié", updated: "Mis à jour", nextReview: "Prochaine révision", deprecated: "Obsolète", futureRevision: "Révision", versionHistory: "Versions", previousVersion: "Version précédente", summaryOfChanges: "Ce qui a changé", date: "Date", readingPaths: "Lectures suggérées", level2Kicker: "Ensuite", level2Title: "Lectures et concepts associés", level3Kicker: "Détails", level3Title: "Informations du document pour les professionnels" },
  scope: { definition: "Définition", "current-scope": "Ce que cela couvre", "future-scope": "La suite", "human-oversight": "Supervision humaine", "safety-boundary": "Limite de sécurité", "engineering-note": "Notes", limitation: "Limite" },
  callout: { information: "Information", definition: "Définition", "engineering-note": "Notes", important: "Important", "current-scope": "Ce que cela couvre", "future-scope": "La suite", relationship: "Lien" },
  common: { openArrow: "Ouvrir", relatedDomains: "Sujets associés", referenceLinks: "Pour aller plus loin", keyPrinciples: "Principes clés", executiveSummary: "Résumé", whyItMatters: "Pourquoi c’est important", purpose: "Raison d’être", futureExpansion: "Sujets associés" },
  hub: { related: "Continuer", explore: "Explorer", areas: "Domaines", what: "En bref", why: "Pourquoi ça aide", next: "La suite", deeper: "Aller plus loin", scenes: "Scènes" },
  pwa: {
    installApp: "Installer l’app",
    installed: "Installée",
    howToInstall: "Comment installer",
    closeHelp: "Fermer",
    iosTip:
      "Sur iPhone ou iPad : appuyez sur Partager, puis sur Sur l’écran d’accueil pour installer SAVEN Core.",
    browserTip:
      "Dans le menu du navigateur, choisissez Installer l’app ou Sur l’écran d’accueil pour installer SAVEN Core.",
  },

  contact: {
    formHeading: "Message",
    nameLabel: "Nom",
    emailLabel: "E-mail",
    subjectLabel: "Objet (facultatif)",
    messageLabel: "Message",
    submit: "Envoyer le message",
    submitMailto: "Ouvrir dans l’application e-mail",
    success: "Message envoyé. Nous répondrons dès que possible.",
    successMailto:
      "Votre application e-mail devrait s’ouvrir avec le message prêt à envoyer.",
    error: "Veuillez renseigner le nom, l’e-mail et le message.",
    fallbackNote:
      "L’envoi direct n’est pas configuré sur ce serveur. Votre application e-mail s’ouvrira à la place afin que le message parvienne quand même à info@savencore.com.",
  },

  media: {
    galleryTitle: "Bibliothèque",
    galleryLead:
      "Parcourez les vidéos, documents et liens approuvés. Ouvrez pour visionner, ou téléchargez les fichiers.",
    filterAll: "Tous",
    filterVideos: "Vidéos",
    filterDocs: "Documents",
    filterLinks: "Liens",
    sectionVideos: "Vidéos",
    sectionDocuments: "Documents et présentations",
    sectionLinks: "Liens",
    sectionBrand: "Éléments de marque",
    emptyAll:
      "La bibliothèque publique est vide pour le moment. Les contenus approuvés apparaîtront ici une fois ajoutés.",
    emptyVideos:
      "Pas encore de vidéos dans la bibliothèque publique. Les téléversements approuvés apparaîtront ici.",
    emptyDocuments:
      "Pas encore de documents ou présentations. Les opérateurs peuvent ajouter des PDF et diapositives depuis Admin → Médias.",
    emptyLinks:
      "Les liens sélectionnés apparaîtront ici lorsqu’ils seront ajoutés à la médiathèque partagée.",
    emptyBrand: "Les éléments de marque se chargent depuis la bibliothèque du site.",
    preview: "Aperçu",
    view: "Voir",
    download: "Télécharger",
    downloading: "Téléchargement…",
    copy: "Copier le lien",
    share: "Partager",
    open: "Ouvrir",
    copied: "Lien copié.",
    shared: "Feuille de partage ouverte.",
    downloadStarted: "Téléchargement démarré.",
    actionFailed: "L’action n’a pas pu être terminée.",
    badgeImage: "Image",
    badgeVideo: "Vidéo",
    badgeDocument: "Document",
    badgePresentation: "Présentation",
    badgeLink: "Lien",
    badgeOther: "Fichier",
  },
};
