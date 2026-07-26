#!/usr/bin/env node
/** Write complete fr-legal.mjs (D-0161). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const legalKeys = JSON.parse(
  fs.readFileSync(path.join(root, "tmp/flagship-legal-keys/legal.json"), "utf8"),
);
const { translations: deL } = await import("./de-legal.mjs");

// Professional French legal translations (from canonical EN, aligned with es/de drafts).
const FR = {
  "A concrete list will be published when technologies are selected. Local preferences such as theme may use browser storage rather than third-party cookies.":
    "Une liste concrète sera publiée lorsque les technologies seront sélectionnées. Les préférences locales telles que le thème peuvent utiliser le stockage du navigateur plutôt que des cookies tiers.",
  "A final Terms of Use will explain when browsing or using the site constitutes agreement. This page is not that agreement yet.":
    "Des conditions d'utilisation finales expliqueront quand la navigation ou l'utilisation du site constitue un accord. Cette page n'est pas encore cet accord.",
  "A privacy contact channel will be published when approved. No email addresses are invented in this draft.":
    "Un canal de contact confidentialité sera publié lorsqu'il sera approuvé. Aucune adresse e-mail n'est inventée dans ce brouillon.",
  "A request mechanism will be published when required processing and contact channels exist.":
    "Un mécanisme de demande sera publié lorsque le traitement requis et les canaux de contact existeront.",
  "A responsible reporting pathway will be published when approved. Do not invent security@ addresses in this draft.":
    "Une voie de signalement responsable sera publiée lorsqu'elle sera approuvée. N'inventez pas d'adresses security@ dans ce brouillon.",
  "AI and robotics are tools. Human support and responsible physical-world assistance are primary.":
    "L'IA et la robotique sont des outils. Le soutien humain et l'assistance responsable dans le monde physique sont primordiaux.",
  "Acceptable use": "Utilisation acceptable",
  "Accessibility Statement": "Déclaration d'accessibilité",
  "Agreement to terms": "Acceptation des conditions",
  "All rights not expressly granted are reserved.":
    "Tous les droits non expressément accordés sont réservés.",
  "Always seek the advice of a qualified health professional for personal medical questions.":
    "Consultez toujours un professionnel de santé qualifié pour les questions médicales personnelles.",
  "An accessibility feedback channel will be published when approved. No contact address is invented here.":
    "Un canal de retour sur l'accessibilité sera publié lorsqu'il sera approuvé. Aucune adresse de contact n'est inventée ici.",
  "An infringement notice process will be defined by legal counsel. Placeholder only.":
    "Un processus d'avis de contrefaçon sera défini par les conseils juridiques. Placeholder uniquement.",
  "Analytics cookies": "Cookies analytiques",
  "Analytics, if introduced later, will be privacy-controlled and vendor-disclosed. Vendor is TBD; none is claimed now.":
    "Les analyses, si elles sont introduites ultérieurement, seront contrôlées en matière de confidentialité et divulguées avec le fournisseur. Fournisseur à déterminer ; aucun n'est revendiqué pour l'instant.",
  "Assessment approach": "Approche d'évaluation",
  "Assessment methods and dates will be recorded when formal reviews are performed.":
    "Les méthodes et dates d'évaluation seront consignées lorsque des examens formels seront effectués.",
  "Authorized agent process": "Processus d'agent autorisé",
  "Authorized-agent handling is placeholder until counsel defines the process.":
    "Le traitement des agents autorisés est un placeholder jusqu'à ce que les conseils définissent le processus.",
  "Brand and trademark usage guidance structure. Only confirmed marks will be listed after approval.":
    "Structure d'orientation sur l'utilisation de la marque et des marques déposées. Seules les marques confirmées seront listées après approbation.",
  "Browser controls": "Contrôles du navigateur",
  "Capability framing and roadmaps, if present, are not commitments to delivery dates.":
    "Le cadrage des capacités et les feuilles de route, s'ils existent, ne constituent pas des engagements de dates de livraison.",
  "Categories to be confirmed when actual technology is selected, for example: technical logs, language preference, theme preference stored locally, and information you voluntarily submit if contact or auth features are enabled.":
    "Catégories à confirmer lorsque la technologie réelle sera sélectionnée, par exemple : journaux techniques, préférence de langue, préférence de thème stockée localement, et informations que vous soumettez volontairement si les fonctions de contact ou d'authentification sont activées.",
  "Categories under consideration: essential/operational, preferences/functional, and privacy-controlled analytics if later approved. No analytics vendor is claimed here.":
    "Catégories envisagées : essentielles/opérationnelles, préférences/fonctionnelles, et analyses contrôlées en confidentialité si approuvées ultérieurement. Aucun fournisseur analytique n'est revendiqué ici.",
  "Changes": "Modifications",
  "Changes to this policy": "Modifications de cette politique",
  "Children’s privacy": "Confidentialité des enfants",
  "Children’s privacy wording is reserved for legal review. This informational site is not directed at children.":
    "La formulation sur la confidentialité des enfants est réservée à l'examen juridique. Ce site informatif ne s'adresse pas aux enfants.",
  "Collection point for website legal notices and links to related draft documents.":
    "Point de regroupement des avis juridiques du site web et liens vers les brouillons connexes.",
  "Commitment": "Engagement",
  "Commitment structure for website accessibility. Non-absolute language; target standard WCAG 2.2 AA.":
    "Structure d'engagement pour l'accessibilité du site web. Formulation non absolue ; norme cible WCAG 2.2 AA.",
  "Compatibility notes": "Notes de compatibilité",
  "Confirmed marks such as SAVEN Core and related lockups will be listed here after legal confirmation. No unconfirmed marks are invented.":
    "Les marques confirmées telles que SAVEN Core et les compositions associées seront listées ici après confirmation juridique. Aucune marque non confirmée n'est inventée.",
  "Contact": "Contact",
  "Contact / report channel": "Contact / canal de signalement",
  "Contact details for terms questions will be published when approved.":
    "Les coordonnées pour les questions relatives aux conditions seront publiées lorsqu'elles seront approuvées.",
  "Contact for non-emergency inquiries": "Contact pour les demandes non urgentes",
  "Contact for privacy requests": "Contact pour les demandes de confidentialité",
  "Cookie Policy": "Politique de cookies",
  "Cookie Preferences": "Préférences de cookies",
  "Cookie-related contact details will be published when approved.":
    "Les coordonnées liées aux cookies seront publiées lorsqu'elles seront approuvées.",
  "Cookies and similar technologies can store small amounts of data in a browser to remember preferences or support site operation.":
    "Les cookies et technologies similaires peuvent stocker de petites quantités de données dans un navigateur pour mémoriser des préférences ou soutenir le fonctionnement du site.",
  "Copyright Notice": "Avis de copyright",
  "Copyright line": "Ligne de copyright",
  "Copyright reservation for SAVEN Core website materials.":
    "Réserve de copyright pour les matériaux du site web SAVEN Core.",
  "Copyright © 2026 SAVEN Core. All rights reserved.":
    "Copyright © 2026 SAVEN Core. Tous droits réservés.",
  "Correct brand usage": "Utilisation correcte de la marque",
  "DRAFT FOR STRUCTURAL PURPOSES — Not final legal text. Pending legal review.":
    "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente d'examen juridique.",
  "Data Rights": "Droits sur les données",
  "Data-rights contact pending approval.": "Contact droits sur les données en attente d'approbation.",
  "Date pending legal review": "Date en attente d'examen juridique",
  "Definitions of “sell” and “share” are jurisdiction-dependent and pending legal review.":
    "Les définitions de « vendre » et « partager » dépendent de la juridiction et sont en attente d'examen juridique.",
  "Depending on region and activity, people may have rights related to access, correction, deletion, restriction, or portability. This draft does not assert which frameworks currently apply.":
    "Selon la région et l'activité, les personnes peuvent disposer de droits d'accès, de rectification, de suppression, de limitation ou de portabilité. Ce brouillon n'affirme pas quels cadres s'appliquent actuellement.",
  "Design principles": "Principes de conception",
  "Designed around privacy, controlled access, data minimization, safety, traceability, and human oversight.":
    "Conçu autour de la confidentialité, de l'accès contrôlé, de la minimisation des données, de la sécurité, de la traçabilité et de la supervision humaine.",
  "Development-status reminder": "Rappel du statut de développement",
  "Disclaimers": "Avertissements",
  "Do Not Sell or Share My Personal Information":
    "Ne pas vendre ni partager mes informations personnelles",
  "Do not assume analytics, advertising, or selling of personal information are active unless a later approved policy states otherwise.":
    "Ne supposez pas que les analyses, la publicité ou la vente d'informations personnelles sont actives, sauf si une politique approuvée ultérieurement indique le contraire.",
  "Do not copy, modify, or redistribute site materials in misleading ways, or imply endorsement without authorization.":
    "Ne copiez, ne modifiez ni ne redistribuez les matériaux du site de manière trompeuse, et n'impliquez pas un aval sans autorisation.",
  "Do not read this draft as a claim that any specific regional law currently applies to SAVEN Core processing.":
    "Ne lisez pas ce brouillon comme une affirmation qu'une loi régionale spécifique s'applique actuellement au traitement par SAVEN Core.",
  "Entity and contact placeholders": "Placeholders d'entité et de contact",
  "Essential cookies": "Cookies essentiels",
  "Essential/operational storage needed for basic site function remains on when such features exist. Essential items are not optional.":
    "Le stockage essentiel/opérationnel nécessaire au fonctionnement de base du site reste activé lorsque ces fonctions existent. Les éléments essentiels ne sont pas optionnels.",
  "Examples of ongoing work: semantic structure, keyboard access for primary controls, language and direction support, and reduced-motion respect for living media.":
    "Exemples de travail en cours : structure sémantique, accès clavier aux contrôles principaux, prise en charge de la langue et de la direction, et respect du mouvement réduit pour les médias vivants.",
  "Examples under consideration: language and theme preferences stored locally on your device.":
    "Exemples envisagés : préférences de langue et de thème stockées localement sur votre appareil.",
  "Feedback and contact": "Retour et contact",
  "Feedback channels will be published when approved.":
    "Les canaux de retour seront publiés lorsqu'ils seront approuvés.",
  "Feedback pathway": "Voie de retour",
  "Formal legal entity name, address, and contact details will appear here after confirmation. “Inc.” is not added unless the legal name is confirmed.":
    "Le nom de l'entité juridique, l'adresse et les coordonnées apparaîtront ici après confirmation. « Inc. » n'est pas ajouté sauf si le nom juridique est confirmé.",
  "Future versions may organize rights by region. Frameworks will be named only when counsel confirms relevance.":
    "Les versions futures pourront organiser les droits par région. Les cadres ne seront nommés que lorsque les conseils confirmeront leur pertinence.",
  "Governing law / venue": "Droit applicable / juridiction",
  "Governing law and venue are pending legal confirmation. No jurisdiction is asserted in this draft.":
    "Le droit applicable et la juridiction sont en attente de confirmation juridique. Aucune juridiction n'est affirmée dans ce brouillon.",
  "How SAVEN Core frames responsible use of AI as a tool in service of human support — not as the purpose itself.":
    "Comment SAVEN Core cadre l'utilisation responsable de l'IA comme outil au service du soutien humain — et non comme fin en soi.",
  "How we may use information": "Comment nous pouvons utiliser les informations",
  "Human oversight": "Supervision humaine",
  "Human oversight remains a core design principle for systems described on this site.":
    "La supervision humaine reste un principe de conception central pour les systèmes décrits sur ce site.",
  "IP contact details pending approval.": "Coordonnées PI en attente d'approbation.",
  "If you are experiencing a medical emergency, contact local emergency services. Do not use this website for emergency care.":
    "En cas d'urgence médicale, contactez les services d'urgence locaux. N'utilisez pas ce site web pour des soins d'urgence.",
  "Important limits on medical interpretation of website content. Informational only.":
    "Limites importantes sur l'interprétation médicale du contenu du site. À titre informatif uniquement.",
  "Indemnity": "Indemnisation",
  "Indemnity language is reserved for legal draft and approval.":
    "La formulation d'indemnisation est réservée au brouillon juridique et à l'approbation.",
  "Information we may collect": "Informations que nous pouvons collecter",
  "Informational disclaimers will be finalized by counsel. Development-status reminders remain in force across the site.":
    "Les avertissements informatifs seront finalisés par les conseils. Les rappels de statut de développement restent en vigueur sur l'ensemble du site.",
  "Informational nature": "Caractère informatif",
  "Intellectual Property": "Propriété intellectuelle",
  "Intellectual property": "Propriété intellectuelle",
  "Intended scope: information collected through the public website and related public communications channels that are later approved.":
    "Portée envisagée : informations collectées via le site web public et les canaux de communication publics connexes approuvés ultérieurement.",
  "Intended uses (when features exist): operate and secure the website, remember preferences, respond to requests, and improve clarity of public information.":
    "Utilisations envisagées (lorsque les fonctions existent) : exploiter et sécuriser le site, mémoriser les préférences, répondre aux demandes et améliorer la clarté de l'information publique.",
  "International transfers": "Transferts internationaux",
  "Jurisdiction notes": "Notes de juridiction",
  "Jurisdiction notes are pending counsel.": "Notes de juridiction en attente des conseils.",
  "Known limitations": "Limitations connues",
  "Legal Notices": "Avis juridiques",
  "Legal bases": "Bases juridiques",
  "Legal entity details, registered address, and formal controller identity will be stated here after owner confirmation and legal review.":
    "Les détails de l'entité juridique, l'adresse enregistrée et l'identité formelle du responsable seront indiqués ici après confirmation du propriétaire et examen juridique.",
  "Limitation of liability": "Limitation de responsabilité",
  "Limitation of liability language is reserved for legal draft and approval.":
    "La formulation de limitation de responsabilité est réservée au brouillon juridique et à l'approbation.",
  "Limitations and non-claims": "Limitations et non-allégations",
  "Limited personal, non-commercial viewing of the public site is intended. Broader reuse requires permission.":
    "La consultation personnelle et non commerciale du site public est prévue. Une réutilisation plus large nécessite une autorisation.",
  "Limits on interpreting research and development materials published on this website.":
    "Limites d'interprétation des documents de recherche et développement publiés sur ce site web.",
  "Managing preferences": "Gestion des préférences",
  "Materials may describe research directions, architecture, and work in progress.":
    "Les documents peuvent décrire des orientations de recherche, l'architecture et des travaux en cours.",
  "Measures taken / in progress": "Mesures prises / en cours",
  "Medical Disclaimer": "Avertissement médical",
  "Most browsers allow blocking or deleting cookies. Blocking essential storage may affect basic site behavior.":
    "La plupart des navigateurs permettent de bloquer ou supprimer les cookies. Bloquer le stockage essentiel peut affecter le comportement de base du site.",
  "Nature of the website": "Nature du site web",
  "No claim of complete security or zero risk is made.":
    "Aucune allégation de sécurité complète ou de risque nul n'est faite.",
  "No guarantee of outcomes": "Aucune garantie de résultats",
  "No partners, vendors, or processors are invented here. Any future processors (for example authentication or hosting) will be listed only when actually used and approved for disclosure.":
    "Aucun partenaire, fournisseur ou sous-traitant n'est inventé ici. Les futurs sous-traitants (par exemple authentification ou hébergement) ne seront listés que lorsqu'ils seront réellement utilisés et approuvés pour divulgation.",
  "No professional advice": "Aucun conseil professionnel",
  "No regulatory approval claims": "Aucune allégation d'approbation réglementaire",
  "No research outcome, performance result, or timeline is guaranteed by publication on this site.":
    "Aucun résultat de recherche, performance ou calendrier n'est garanti par la publication sur ce site.",
  "Non-emergency contact channels will be published when approved.":
    "Les canaux de contact non urgents seront publiés lorsqu'ils seront approuvés.",
  "Not a substitute for a qualified professional":
    "Ne remplace pas un professionnel qualifié",
  "Not diagnosis or treatment": "Pas un diagnostic ni un traitement",
  "Not emergency support": "Pas un support d'urgence",
  "Not medical advice": "Pas un conseil médical",
  "Nothing here claims regulatory approval, clearance, or certification unless later explicitly approved and factually true.":
    "Rien ici n'allègue une approbation, une autorisation ou une certification réglementaire, sauf approbation explicite ultérieure et conformité factuelle.",
  "Nothing on this page asserts completed compliance, regulatory certification, or operational data processing beyond what the site currently does.":
    "Rien sur cette page n'affirme une conformité achevée, une certification réglementaire ou un traitement opérationnel des données au-delà de ce que fait actuellement le site.",
  "Nothing on this website is medical advice.": "Rien sur ce site web ne constitue un conseil médical.",
  "Notice of infringement pathway": "Voie d'avis de contrefaçon",
  "Overview": "Aperçu",
  "Overview of rights concepts": "Aperçu des concepts de droits",
  "Ownership": "Propriété",
  "Permission requests": "Demandes d'autorisation",
  "Permission requests will be handled through an approved contact channel when published.":
    "Les demandes d'autorisation seront traitées via un canal de contact approuvé lorsqu'il sera publié.",
  "Permitted use of site materials": "Utilisation autorisée des matériaux du site",
  "Placeholder structure for regional privacy frameworks. No applicability is asserted without legal confirmation.":
    "Structure placeholder pour les cadres régionaux de confidentialité. Aucune applicabilité n'est affirmée sans confirmation juridique.",
  "Placeholders for regional frameworks": "Placeholders pour les cadres régionaux",
  "Preference summary": "Résumé des préférences",
  "Preferences / functional cookies": "Cookies de préférences / fonctionnels",
  "Preliminary nature of materials": "Caractère préliminaire des documents",
  "Principal systems are in development. Approved public statuses include Research, Architecture, In Development, Prototype, Validation, Pilot, and Operational.":
    "Les systèmes principaux sont en développement. Les statuts publics approuvés incluent Recherche, Architecture, En développement, Prototype, Validation, Pilote et Opérationnel.",
  "Privacy Policy": "Politique de confidentialité",
  "Privacy Policy, Terms of Use, Cookie Policy, Accessibility Statement, Security, Responsible AI, Medical Disclaimer, Research Disclaimer, Intellectual Property, Trademark Notice, Copyright Notice, Data Rights, Regional Privacy Rights, and Do Not Sell or Share.":
    "Politique de confidentialité, Conditions d'utilisation, Politique de cookies, Déclaration d'accessibilité, Sécurité, IA responsable, Avertissement médical, Avertissement recherche, Propriété intellectuelle, Avis de marque, Avis de copyright, Droits sur les données, Droits régionaux de confidentialité, et Ne pas vendre ni partager.",
  "Privacy, controlled access, data minimization, safety, traceability, and human oversight guide design decisions.":
    "La confidentialité, l'accès contrôlé, la minimisation des données, la sécurité, la traçabilité et la supervision humaine guident les décisions de conception.",
  "Prohibited use": "Utilisation interdite",
  "Public materials may be preliminary and subject to change after review.":
    "Les documents publics peuvent être préliminaires et sujets à modification après examen.",
  "Public security posture outline for the website and related public systems. Not a certification or guarantee of complete security.":
    "Aperçu public de la posture de sécurité pour le site web et les systèmes publics connexes. Pas une certification ni une garantie de sécurité complète.",
  "Purpose of AI within SAVEN Core": "Finalité de l'IA au sein de SAVEN Core",
  "Purpose of each category": "Finalité de chaque catégorie",
  "Region sections": "Sections régionales",
  "Region-specific summaries will be added as drafts after legal review.":
    "Des résumés spécifiques par région seront ajoutés en brouillon après examen juridique.",
  "Regional Privacy Rights": "Droits régionaux de confidentialité",
  "Regional rights pathways will be described in related draft pages. Contact channels for privacy requests will be published when approved.":
    "Les voies de droits régionaux seront décrites dans les pages brouillon connexes. Les canaux de contact pour les demandes de confidentialité seront publiés lorsqu'ils seront approuvés.",
  "Related IP links": "Liens PI connexes",
  "Related documents": "Documents connexes",
  "Related links": "Liens connexes",
  "Related policies": "Politiques connexes",
  "Related policy": "Politique connexe",
  "Related privacy links": "Liens confidentialité connexes",
  "Report channel pending approval.": "Canal de signalement en attente d'approbation.",
  "Request mechanism": "Mécanisme de demande",
  "Request pathways": "Voies de demande",
  "Request pathways will be published when processing and contact channels are confirmed.":
    "Les voies de demande seront publiées lorsque le traitement et les canaux de contact seront confirmés.",
  "Request submission method": "Méthode de soumission des demandes",
  "Research Disclaimer": "Avertissement recherche",
  "Research and development context": "Contexte recherche et développement",
  "Research contact channels will be published when approved.":
    "Les canaux de contact recherche seront publiés lorsqu'ils seront approuvés.",
  "Reservation of rights": "Réserve de droits",
  "Response timing": "Délais de réponse",
  "Response timing commitments are pending legal review.":
    "Les engagements de délais de réponse sont en attente d'examen juridique.",
  "Responsible AI": "IA responsable",
  "Retention": "Conservation",
  "Retention periods will be defined when processing activities are confirmed. Local preferences such as theme or language may remain on your device until cleared.":
    "Les périodes de conservation seront définies lorsque les activités de traitement seront confirmées. Les préférences locales telles que le thème ou la langue peuvent rester sur votre appareil jusqu'à suppression.",
  "Rights summaries": "Résumés des droits",
  "Roadmap non-guarantee": "Absence de garantie sur la feuille de route",
  "SAVEN Core designs around privacy, controlled access, data minimization, safety, traceability, and human oversight.":
    "SAVEN Core conçoit autour de la confidentialité, de l'accès contrôlé, de la minimisation des données, de la sécurité, de la traçabilité et de la supervision humaine.",
  "SAVEN Core does not diagnose, treat, or manage medical conditions through this website.":
    "SAVEN Core ne diagnostique, ne traite ni ne gère de conditions médicales via ce site web.",
  "SAVEN Core intends the public website to be understandable and usable by a wide range of people. This is a commitment to continuous improvement, not a claim of perfect accessibility.":
    "SAVEN Core entend que le site web public soit compréhensible et utilisable par un large public. Il s'agit d'un engagement d'amélioration continue, et non d'une allégation d'accessibilité parfaite.",
  "Safety and evaluation principles": "Principes de sécurité et d'évaluation",
  "Safety evaluation, limits, and honest development status are preferred over absolute performance claims.":
    "L'évaluation de sécurité, les limites et un statut de développement honnête sont privilégiés aux allégations de performance absolues.",
  "Save / update controls": "Contrôles enregistrer / mettre à jour",
  "Save and update controls will appear when a consent management design is approved. No dark patterns will be used.":
    "Les contrôles d'enregistrement et de mise à jour apparaîtront lorsqu'une conception de gestion du consentement sera approuvée. Aucun dark pattern ne sera utilisé.",
  "Scope and limitations": "Portée et limitations",
  "Scope definitions": "Définitions de portée",
  "Scope of this policy": "Portée de cette politique",
  "Security": "Sécurité",
  "Security descriptions will be updated as infrastructure and review status change.":
    "Les descriptions de sécurité seront mises à jour lorsque l'infrastructure et le statut d'examen évolueront.",
  "Security posture overview": "Aperçu de la posture de sécurité",
  "Security practices": "Pratiques de sécurité",
  "See Intellectual Property and Trademark Notice drafts for related structure.":
    "Voir les brouillons Propriété intellectuelle et Avis de marque pour la structure connexe.",
  "See Privacy Policy and Do Not Sell or Share drafts.":
    "Voir les brouillons Politique de confidentialité et Ne pas vendre ni partager.",
  "See Privacy Policy, Data Rights, and Regional Privacy Rights drafts.":
    "Voir les brouillons Politique de confidentialité, Droits sur les données et Droits régionaux de confidentialité.",
  "See Trust domain pages for governance architecture, and other Legal drafts for disclaimers.":
    "Voir les pages domaine Confiance pour l'architecture de gouvernance, et les autres brouillons juridiques pour les avertissements.",
  "See the Cookie Policy draft for category definitions.":
    "Voir le brouillon Politique de cookies pour les définitions de catégories.",
  "See the Cookie Preferences draft page for the intended control structure. Non-essential tools must not be pre-checked when a consent UI is introduced.":
    "Voir la page brouillon Préférences de cookies pour la structure de contrôle envisagée. Les outils non essentiels ne doivent pas être précochés lorsqu'une interface de consentement est introduite.",
  "Sharing and processors": "Partage et sous-traitants",
  "Site materials are intended to be protected as described in the Intellectual Property and Copyright Notice drafts.":
    "Les matériaux du site sont destinés à être protégés comme décrit dans les brouillons Propriété intellectuelle et Avis de copyright.",
  "Some imagery, video loops, and dense technical pages may present remaining barriers. Limitations will be updated honestly as the site evolves.":
    "Certaines images, boucles vidéo et pages techniques denses peuvent présenter des barrières restantes. Les limitations seront mises à jour honnêtement au fil de l'évolution du site.",
  "Statement of purpose": "Énoncé de finalité",
  "Structural explanation of cookies and similar technologies. Draft pending selection of actual site technologies and legal review.":
    "Explication structurelle des cookies et technologies similaires. Brouillon en attente de sélection des technologies réelles du site et d'examen juridique.",
  "Structural notice regarding ownership and permitted use of site materials. Draft pending legal review.":
    "Avis structurel concernant la propriété et l'utilisation autorisée des matériaux du site. Brouillon en attente d'examen juridique.",
  "Structural outline of how SAVEN Core intends to describe information practices for this website. This page is a draft for review — not a binding privacy policy.":
    "Aperçu structurel de la manière dont SAVEN Core entend décrire les pratiques d'information pour ce site web. Cette page est un brouillon pour examen — pas une politique de confidentialité contraignante.",
  "Structural overview of individual data rights concepts. Applicability depends on jurisdiction and confirmed processing.":
    "Aperçu structurel des concepts de droits individuels sur les données. L'applicabilité dépend de la juridiction et du traitement confirmé.",
  "Structural page for sale/share opt-out concepts. Scope definitions pending legal review; no sale of personal information is claimed as a current practice.":
    "Page structurelle pour les concepts de désinscription vente/partage. Définitions de portée en attente d'examen juridique ; aucune vente d'informations personnelles n'est revendiquée comme pratique actuelle.",
  "Structural preference controls for cookies. Functional consent UI is not yet active; this page explains the intended model.":
    "Contrôles structurels de préférences pour les cookies. L'interface de consentement fonctionnelle n'est pas encore active ; cette page explique le modèle envisagé.",
  "Structural terms outline for use of the SAVEN Core website. Draft only — pending legal review.":
    "Aperçu structurel des conditions d'utilisation du site web SAVEN Core. Brouillon uniquement — en attente d'examen juridique.",
  "Submission methods pending approval.": "Méthodes de soumission en attente d'approbation.",
  "Systems described on this site are principally in development and must not be read as operational clinical products.":
    "Les systèmes décrits sur ce site sont principalement en développement et ne doivent pas être lus comme des produits cliniques opérationnels.",
  "Target standard": "Norme cible",
  "Target: WCAG 2.2 Level AA, where reasonably achievable for published pages.":
    "Cible : WCAG 2.2 Level AA, lorsque raisonnablement atteignable pour les pages publiées.",
  "Terms may change after review. Updated versions will replace drafts when approved.":
    "Les conditions peuvent changer après examen. Les versions mises à jour remplaceront les brouillons lorsqu'elles seront approuvées.",
  "Terms of Use": "Conditions d'utilisation",
  "The site is intended to work with current major browsers. Assistive technology compatibility will be assessed over time.":
    "Le site est conçu pour fonctionner avec les principaux navigateurs actuels. La compatibilité avec les technologies d'assistance sera évaluée au fil du temps.",
  "The website provides informational material about systems in development. It does not offer operational products, medical services, or investment solicitations by default.":
    "Le site web fournit du matériel informatif sur des systèmes en développement. Il n'offre pas par défaut de produits opérationnels, de services médicaux ni de sollicitations d'investissement.",
  "Third-party marks": "Marques tierces",
  "Third-party names and marks, if mentioned, remain the property of their owners. Mention does not imply partnership unless explicitly stated.":
    "Les noms et marques tierces, s'ils sont mentionnés, restent la propriété de leurs titulaires. La mention n'implique pas de partenariat sauf indication explicite.",
  "This draft covers the public website context. It does not describe unpublished operational systems as secure deployments.":
    "Ce brouillon couvre le contexte du site web public. Il ne décrit pas les systèmes opérationnels non publiés comme des déploiements sécurisés.",
  "This draft does not cover unpublished products, investor portals, clinical systems, or third-party services that are not yet configured.":
    "Ce brouillon ne couvre pas les produits non publiés, portails investisseurs, systèmes cliniques ou services tiers non encore configurés.",
  "This draft explains the intended structure of a future Privacy Policy for the SAVEN Core public website.":
    "Ce brouillon explique la structure envisagée d'une future politique de confidentialité pour le site web public SAVEN Core.",
  "This draft will be updated when real cookie use begins and after legal review.":
    "Ce brouillon sera mis à jour lorsque l'utilisation réelle de cookies commencera et après examen juridique.",
  "This page does not claim complete security, zero risk, or regulatory certification.":
    "Cette page n'allègue pas une sécurité complète, un risque nul ou une certification réglementaire.",
  "This page does not claim medical effectiveness, autonomous deployment, or regulatory approval.":
    "Cette page n'allègue pas d'efficacité médicale, de déploiement autonome ou d'approbation réglementaire.",
  "This page gathers pointers to structural legal drafts for the public website.":
    "Cette page regroupe des pointeurs vers les brouillons juridiques structurels pour le site web public.",
  "This page reserves a clear place for opt-out requests where applicable by law. It does not assert that SAVEN Core sells personal information.":
    "Cette page réserve une place claire pour les demandes de désinscription lorsque la loi l'exige. Elle n'affirme pas que SAVEN Core vend des informations personnelles.",
  "Today, no analytics or advertising cookie UI is active on this site.":
    "Aujourd'hui, aucune interface de cookies analytiques ou publicitaires n'est active sur ce site.",
  "Trademark Notice": "Avis de marque",
  "Trademark contact details pending approval.": "Coordonnées marque en attente d'approbation.",
  "Trademark list": "Liste des marques",
  "Transfer mechanisms, if any, will be described after infrastructure and counsel review. Placeholder only.":
    "Les mécanismes de transfert, le cas échéant, seront décrits après examen de l'infrastructure et des conseils. Placeholder uniquement.",
  "Transparency about development status": "Transparence sur le statut de développement",
  "Types of cookies used": "Types de cookies utilisés",
  "Unless otherwise noted, website text, design, and brand materials are owned by SAVEN Core or used under permission. Exact legal owner wording awaits entity confirmation.":
    "Sauf mention contraire, les textes, le design et les matériaux de marque du site appartiennent à SAVEN Core ou sont utilisés avec autorisation. La formulation exacte du titulaire juridique attend la confirmation de l'entité.",
  "Until then, treat “SAVEN Core” as the public brand name for this informational website only.":
    "Jusque-là, considérez « SAVEN Core » uniquement comme le nom de marque public de ce site informatif.",
  "Updates": "Mises à jour",
  "Use the brand name accurately. Do not alter the logo lockup or imply affiliation without permission.":
    "Utilisez le nom de marque avec exactitude. Ne modifiez pas la composition du logo et n'impliquez pas d'affiliation sans autorisation.",
  "Uses will be limited to what is necessary and disclosed in a final reviewed policy.":
    "Les utilisations seront limitées au nécessaire et divulguées dans une politique finale examinée.",
  "Verification process": "Processus de vérification",
  "Verification steps are placeholder until legal and operational design is complete.":
    "Les étapes de vérification sont un placeholder jusqu'à l'achèvement de la conception juridique et opérationnelle.",
  "Visitors must not misuse the site, attempt unauthorized access, or use content in misleading ways. Detailed rules will follow legal review.":
    "Les visiteurs ne doivent pas utiliser le site de manière abusive, tenter un accès non autorisé ou utiliser le contenu de manière trompeuse. Des règles détaillées suivront l'examen juridique.",
  "Vulnerability reporting": "Signalement de vulnérabilités",
  "Website content about care, hospitals, or assistance is informational and architectural. It is not clinical documentation.":
    "Le contenu du site sur les soins, les hôpitaux ou l'assistance est informatif et architectural. Ce n'est pas une documentation clinique.",
  "Website content is not legal, medical, investment, or other professional advice.":
    "Le contenu du site n'est pas un conseil juridique, médical, d'investissement ou autre conseil professionnel.",
  "Website notice collection point": "Point de regroupement des avis du site",
  "What cookies and similar technologies are": "Ce que sont les cookies et technologies similaires",
  "When a consent system is authorized, visitors will be able to review and update non-essential preferences here.":
    "Lorsqu'un système de consentement sera autorisé, les visiteurs pourront consulter et mettre à jour ici les préférences non essentielles.",
  "When a final policy is approved, material changes will be reflected with an updated date. This draft remains unlabeled as effective law.":
    "Lorsqu'une politique finale sera approuvée, les modifications importantes seront reflétées avec une date mise à jour. Ce brouillon reste non étiqueté comme loi en vigueur.",
  "Where applicable by jurisdiction, legal bases will be described after counsel review. This draft does not assert specific legal bases.":
    "Lorsque applicable selon la juridiction, les bases juridiques seront décrites après examen des conseils. Ce brouillon n'affirme pas de bases juridiques spécifiques.",
  "Who we are": "Qui nous sommes",
  "Your rights and choices": "Vos droits et choix",
};

const missing = legalKeys.filter((k) => !FR[k]);
if (missing.length) {
  console.error("Missing FR legal keys:", missing.length);
  missing.slice(0, 5).forEach((k) => console.error(k.slice(0, 80)));
  process.exit(1);
}

const lines = legalKeys.map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(FR[k])},`);
fs.writeFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "fr-legal.mjs"),
  `/** Legal/flagship translations (D-0161). */\nexport const translations = {\n${lines.join("\n")}\n};\n`,
);
console.log(`Wrote fr-legal.mjs (${legalKeys.length} keys)`);
