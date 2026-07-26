#!/usr/bin/env node
/**
 * Build reference-maps/*.json from hand-authored de (fr/ru/uk) and es (ja/zh-cn/ar/he) modules.
 * fr/ru/uk: translate de modules with complete phrase maps.
 * ja/zh-cn/ar/he: translate es modules with complete phrase maps.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translations as deF } from "./de-flagship.mjs";
import { translations as deL } from "./de-legal.mjs";
import { translations as esF } from "./es-flagship.mjs";
import { translations as esL } from "./es-legal.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(dir, "reference-maps");
fs.mkdirSync(outDir, { recursive: true });

const de = { ...deF, ...deL };
const es = { ...esF, ...esL };
const enKeys = Object.keys(de);

const KEEP = [
  "SAVEN Core",
  "SAVEN Robotics Lab",
  "SAVEN Robotics Interface",
  "Internal Future Lab",
  "Intelligence for the Physical World",
  "Turning Intelligence Into Human Care",
  "WCAG 2.2 AA",
  "WCAG 2.2 Level AA",
  "Layer-2",
  "HMI",
  "IRR",
  "ROI",
  "TBD",
  "security@",
  "Future Lab",
  "Robotics Interface",
  "Robotics Lab",
  "Robotics Layer",
];

function shield(text) {
  let out = text;
  const slots = [];
  for (const k of KEEP) {
    if (out.includes(k)) {
      const id = `\x00${slots.length}\x00`;
      slots.push(k);
      out = out.split(k).join(id);
    }
  }
  return { out, slots };
}

function unshield(text, slots) {
  let out = text;
  slots.forEach((k, i) => {
    out = out.split(`\x00${i}\x00`).join(k);
  });
  return out;
}

function applyRules(text, rules) {
  const { out, slots } = shield(text);
  let result = out;
  for (const [from, to] of rules) result = result.split(from).join(to);
  return unshield(result, slots);
}

// Complete DE→FR phrase rules (ordered longest-first)
const DE_FR = [
  ["ENTWURF FÜR STRUKTURELLE ZWECKE — Kein endgültiger Rechtstext. Ausstehende Rechtsprüfung.", "BROUILLON À DES FINS STRUCTURELLES — Texte juridique non définitif. En attente de revue juridique."],
  ["Ein System zur Interaktion mit Robotern und autonomen Maschinen — damit Menschen die Kontrolle über komplexe physische Arbeit behalten.", "Un système pour interagir avec des robots et des machines autonomes — afin que les personnes restent aux commandes d'un travail physique complexe."],
  ["Entwickelt, um menschliche Fürsorge in Krankenhäusern, zu Hause und überall dort zu unterstützen, wo das Leben stattfindet — ohne operative Einsätze zu behaupten.", "Conçu pour soutenir les soins humains à l'hôpital, à domicile et partout où la vie se déroule — sans prétendre à un déploiement opérationnel."],
  ["Die unten genannten Fähigkeitsbereiche sind mögliche Bestandteile der Architektur. Keiner wird als ausgeliefertes Produktmodul dargestellt.", "Les domaines de capacité ci-dessous sont des composants possibles de l'architecture. Aucun n'est présenté comme un module produit livré."],
  ["Autonome Mobilität — Bewegung durch gemeinsam genutzte menschliche Räume mit sichtbar gemachten Grenzen", "Mobilité autonome — déplacement dans des espaces humains partagés avec des limites rendues visibles"],
  ["Unternehmensausrichtung: Intelligence for the Physical World", "Direction de l'entreprise : Intelligence for the Physical World"],
  ["Interessierte Investoren können Layer-2-Tiefe — Technologie, Systeme, Labore, Vertrauen und Forschung — verfolgen, ohne die Website als Produktbroschüre oder Wertpapierangebot zu behandeln.", "Les investisseurs qui approfondissent peuvent suivre la profondeur Layer-2 — Technologie, Systèmes, Laboratoires, Confiance et Recherche — sans traiter le site comme une brochure produit ou une offre de valeurs mobilières."],
  ["Ingenieur- und Forschungslabore für Robotik und zukünftige physische Systeme.", "Laboratoires d'ingénierie et de recherche pour la robotique et les systèmes physiques futurs."],
  ["Ingenieurarbeit für robotische Systeme, Mobilität, Steuerung, Wahrnehmung und Mensch-Maschine-Interaktion.", "Ingénierie pour les systèmes robotiques, la mobilité, le contrôle, la perception et l'interaction homme-machine."],
  ["Erkenntnisse informieren Lab- und Interface-Richtungen. Forschungsstatus bedeutet Exploration und Architektur — keine Produktbehauptungen.", "Les résultats orientent les directions Lab et Interface. Le statut Recherche signifie exploration et architecture — pas d'allégations produit."],
  ["Leuchtturm-Arbeitsstränge: Robotics Lab, Robotics Interface, Future Lab", "Filières phares : Robotics Lab, Robotics Interface, Future Lab"],
  ["Für langfristige Partner, die disziplinierte Ingenieurarbeit für intelligente Systeme in der physischen Welt schätzen — mit menschlicher Fürsorge als dauerhaftem Zweck.", "Pour des partenaires à long terme qui valorisent une ingénierie disciplinée de systèmes intelligents dans le monde physique — avec les soins humains comme finalité durable."],
  ["In Entwicklung. Architektur- und Systemarbeit — keine operativen Flotten oder klinischen Produkte.", "En développement. Travail d'architecture et de systèmes — pas de flottes opérationnelles ni de produits cliniques."],
  ["Internal Future Lab blickt über kurzfristige Systemarbeit hinaus: neue Formen der Robotik, Sensorik, Modellierung und Mensch-Maschine-Zusammenarbeit.", "Internal Future Lab regarde au-delà du travail système à court terme : nouvelles formes de robotique, de détection, de modélisation et de collaboration homme-machine."],
  ["Internal Future Lab — Forschungsumgebung für fortgeschrittene Robotik und verkörperte KI", "Internal Future Lab — environnement de recherche pour la robotique avancée et l'IA incarnée"],
  ["Investorengespräche folgen Architektur, Verantwortung, gestaffelten Belegen und Multi-Domain-Optionalität — nicht erfundenen Traktionsmetriken, Bewertungen oder versprochenen Renditen.", "Les échanges avec les investisseurs suivent l'architecture, la responsabilité, des preuves par étapes et l'optionnalité multi-domaines — pas de métriques de traction, valorisations ou rendements promis inventés."],
  ["Labore sind fokussierte Ingenieur- und Forschungsumgebungen. SAVEN Robotics Lab ist die primäre Ingenieurrichtung; Internal Future Lab erkundet, was als Nächstes kommt.", "Les laboratoires sont des environnements d'ingénierie et de recherche ciblés. SAVEN Robotics Lab est la direction d'ingénierie principale ; Internal Future Lab explore la suite."],
  ["Langfristiges Kapital für dauerhafte Ingenieurarbeit — Architektur zuerst, Belege statt Hype.", "Capital à long terme pour une ingénierie durable — l'architecture d'abord, les preuves plutôt que le hype."],
  ["Meilensteine bedeuten klarere Scopes, veröffentlichte Lab- und Interface-Pfade, Vertrauensanforderungen und Ingenieurdetails für alle, die sie wählen — keine Finanzergebnisse, Kundenzahlen oder Einsatzbehauptungen.", "Les jalons signifient des périmètres plus clairs, des parcours Lab et Interface publiés, des exigences de confiance et de la profondeur d'ingénierie pour ceux qui la souhaitent — pas de résultats financiers, de nombres de clients ou d'allégations de déploiement."],
  ["Multi-Domain-Optionalität zählt, weil dieselben disziplinierten Grundlagen — Wahrnehmung, Steuerung, Schnittstellen, Vertrauen — Krankenhäuser, Zuhause und Alltagssettings unterstützen können, ohne für jedes separate Produktmythen zu erfinden.", "L'optionnalité multi-domaines compte parce que les mêmes fondations disciplinées — perception, contrôle, interfaces, confiance — peuvent soutenir hôpitaux, domiciles et cadres quotidiens sans inventer des mythes produit séparés pour chacun."],
  ["Physische Unterstützung dort, wo Fürsorge schwer ist: Krankenhäuser, Zuhause und Alltag — mit zentraler Aufsicht.", "Assistance physique là où les soins sont difficiles : hôpitaux, domicile et vie quotidienne — avec une supervision au centre."],
  ["Physische Intelligenz hilft nur, wenn Menschen sie steuern können — Labore und Interface wachsen zusammen.", "L'intelligence physique n'aide que lorsque les personnes peuvent la gouverner — laboratoires et interface progressent ensemble."],
  ["Intelligenz in der physischen Welt kann menschliche Fürsorgelasten in Krankenhäusern, Zuhause und Alltag erleichtern.", "L'intelligence dans le monde physique peut alléger les charges de soins humains à l'hôpital, à domicile et dans la vie quotidienne."],
  ["Primäre Ingenieurrichtung (In Entwicklung): robotische Systeme, autonome Mobilität, Robotersteuerung, Sensoren und maschinelle Wahrnehmung sowie Mensch-Maschine-Interaktion.", "Direction d'ingénierie principale (En développement) : systèmes robotiques, mobilité autonome, contrôle robotique, capteurs et perception machine, et interaction homme-machine."],
  ["Öffentliches Material beschreibt beabsichtigte Architektur und Forschung. Es behauptet keine operativen Flotten, Partnereinsätze oder klinischen Produkte.", "Le matériel public décrit l'architecture et la recherche envisagées. Il n'allègue pas de flottes opérationnelles, de déploiements partenaires ni de produits cliniques."],
  ["Öffentliche Übersicht hier; vertiefende Materialien, wenn Kontaktkanäle genehmigt sind. Anmelden ist für autorisierte Zugangswege verfügbar.", "Aperçu public ici ; documents approfondis lorsque les canaux de contact seront approuvés. Se connecter est disponible pour les accès autorisés."],
  ["Der öffentliche Status von SAVEN Robotics Lab ist In Entwicklung. Material auf dieser Website beschreibt beabsichtigte Architektur, Schwerpunkte und Ingenieurfortschritt — keine operativen Flotten, klinischen Zulassungen oder kommerzielle Verfügbarkeit.", "Le statut public de SAVEN Robotics Lab est En développement. Le contenu de ce site décrit l'architecture envisagée, les domaines prioritaires et l'avancement de l'ingénierie — pas de flottes opérationnelles, d'approbations cliniques ni de disponibilité commerciale."],
  ["Öffentliche Besucher sehen eine Ingenieur- und Technologiepräsentation: was wir bauen und warum menschliche Aufsicht nicht verhandelbar ist.", "Les visiteurs publics voient une vitrine d'ingénierie et de technologie : ce que nous construisons et pourquoi la supervision humaine est non négociable."],
  ["Vertiefende Inhalte finden sich unter Technologie · Robotik, Systeme · Robotikschicht und dem SAVEN Robotics Interface-Arbeitsstrang für menschlichen Befehl und Aufsicht.", "La profondeur associée se trouve dans Technologie · Robotique, Systèmes · Couche robotique et le fil SAVEN Robotics Interface pour le commandement et la supervision humains."],
  ["Forschungsumgebung (Forschungsstatus): fortgeschrittene Robotikformen, verkörperte KI, autonome Entscheidungsfindung, neue Sensorik, Modellierung physischer Umgebungen und nicht standardmäßige Ingenieurkonzepte.", "Environnement de recherche (statut Recherche) : formes avancées de robotique, IA incarnée, prise de décision autonome, nouvelle détection, modélisation d'environnements physiques et concepts d'ingénierie non standard."],
  ["Forschungsmaterial beschreibt offene Fragen und Richtungen. Es behauptet keine validierten Medizinprodukte oder eingesetzte Infrastruktursysteme.", "Le matériel de recherche décrit des questions ouvertes et des directions. Il n'allègue pas de dispositifs médicaux validés ni de systèmes d'infrastructure déployés."],
  ["Robotersteuerung — stabile, steuerbare Bewegung unter menschlichem Befehl", "Contrôle robotique — mouvement stable et gouvernable sous commande humaine"],
  ["Robotische Systeme — Plattformen und physische Architekturen für assistive Arbeit", "Systèmes robotiques — plateformes et architectures physiques pour un travail d'assistance"],
  ["Robotik ist hier ein Mittel — nicht die Markengeschichte. Intelligenz zählt, wenn sie zu zuverlässiger Unterstützung wird, die Menschen verstehen, pausieren und steuern können.", "La robotique est ici un moyen — pas le récit de marque. L'intelligence compte lorsqu'elle devient une assistance fiable que les personnes peuvent comprendre, suspendre et diriger."],
  ["SAVEN Core nutzt und weiterentwickelt KI zusammen mit Robotik, autonomen Systemen und Ingenieurtechnologien, die in realen Umgebungen arbeiten sollen.", "SAVEN Core utilise et fait progresser l'IA aux côtés de la robotique, des systèmes autonomes et des technologies d'ingénierie destinées à opérer dans des environnements réels."],
  ["SAVEN Core sucht Partner, die langfristigen Plattformaufbau verstehen: geduldiges Kapital, klare Governance und Ehrlichkeit über den Entwicklungsstatus.", "SAVEN Core recherche des partenaires qui comprennent la construction de plateformes à long terme : capital patient, gouvernance claire et honnêteté sur le statut de développement."],
  ["SAVEN Robotics Lab ist der Ort, an dem SAVEN Core die Ingenieurgrundlage für Roboter schafft, die Menschen in realen Umgebungen unterstützen sollen: Krankenhäuser, Zuhause und alltägliche Settings, in denen das Leben stattfindet.", "SAVEN Robotics Lab est l'endroit où SAVEN Core construit la base d'ingénierie pour des robots destinés à soutenir les personnes dans des environnements réels : hôpitaux, domicile et cadres quotidiens où la vie se déroule."],
  ["SAVEN Robotics Lab — primäre Ingenieurrichtung für robotische Systeme, Mobilität, Steuerung, Wahrnehmung und HMI", "SAVEN Robotics Lab — direction d'ingénierie principale pour systèmes robotiques, mobilité, contrôle, perception et HMI"],
  ["Sensoren und maschinelle Wahrnehmung — Menschen, Orte und physischen Kontext verstehen", "Capteurs et perception machine — comprendre les personnes, les lieux et le contexte physique"],
  ["Beginnen Sie mit SAVEN Robotics Lab oder erkunden Sie Future Lab und das Robotics Interface.", "Commencez par SAVEN Robotics Lab, ou explorez Future Lab et Robotics Interface."],
  ["Das ist eine aspirative These über Kategorie und Handwerk — kein Versprechen von Renditen, IRR, ROI oder Leistungsgarantien. Gute Ergebnisse für Menschen und disziplinierte Ingenieurarbeit stehen zuerst; Finanzergebnisse werden nie für Marketing erfunden.", "C'est une thèse aspirationnelle sur la catégorie et le métier — pas une promesse de rendements, IRR, ROI ou garantie de performance. Les bons résultats pour les personnes et l'ingénierie disciplinée passent d'abord ; les résultats financiers ne sont jamais inventés pour le marketing."],
  ["Das Lab entwickelt die physischen und Steuerungsgrundlagen, die intelligente Systeme in der realen Welt arbeiten lassen: Manipulations- und mobile Plattformen, Sensorik-Stacks und Software, die sie zu steuerbaren Systemen verbindet.", "Le Lab développe les fondations physiques et de contrôle qui permettent aux systèmes intelligents d'opérer dans le monde réel : plateformes de manipulation et mobiles, piles de capteurs et logiciel qui les unissent en systèmes gouvernables."],
  ["Das Lab vereint Plattformen, Mobilität, Steuerung, Wahrnehmung und Mensch-Maschine-Interaktion als eine kohärente Richtung. Öffentlicher Status ist In Entwicklung — Architektur- und Systemarbeit mit Zuversicht dargestellt, nicht als kommerzieller Einsatz.", "Le Lab unit plateformes, mobilité, contrôle, perception et interaction homme-machine comme une direction cohérente. Le statut public est En développement — travail d'architecture et de systèmes présenté avec confiance, pas comme déploiement commercial."],
  ["Das Robotics Interface ist die menschenorientierte Schicht zum Verstehen, was Maschinen tun, zum Steuern von Missionen und zum Sichtbarmachen von Grenzen.", "Robotics Interface est la couche orientée humain pour comprendre ce que font les machines, diriger les missions et rendre les limites visibles."],
  ["Das SAVEN Robotics Interface steht daneben, damit Menschen die Kontrolle über Maschinen behalten, wenn Fähigkeiten wachsen.", "SAVEN Robotics Interface est à leurs côtés pour que les personnes gardent le commandement des machines à mesure que les capacités augmentent."],
  ["Der dauerhafte Zweck ist Turning Intelligence Into Human Care: Systeme, die Menschen helfen, wo das Leben anspruchsvoll ist — Pflegeteams, Familien und Einzelpersonen in allen Lebensaltern und -phasen.", "La finalité durable est Turning Intelligence Into Human Care : des systèmes qui aident les personnes là où la vie est exigeante — équipes de soins, familles et individus à tous les âges et stades de la vie."],
  ["Die Chance ist strukturell: ein kohärenter Stack aus menschlichem Verstehen, KI, Robotik und physischer Unterstützung über mehrere Fürsorge- und Lebensdomänen.", "L'opportunité est structurelle : une pile cohérente couvrant la compréhension humaine, l'IA, la robotique et l'assistance physique dans plusieurs domaines de soins et de vie."],
  ["Die primäre Ingenieurrichtung für robotische Systeme, die in der physischen Welt wahrnehmen, sich bewegen und handeln — unter klarer menschlicher Aufsicht.", "La direction d'ingénierie principale pour des systèmes robotiques qui perçoivent, se déplacent et agissent dans le monde physique — sous supervision humaine claire."],
  ["Der Zweck ist menschliche Fürsorge: Überlastung von Pflegenden reduzieren, Selbstständigkeit zu Hause unterstützen und sorgfältige physische Hilfe dorthin tragen, wo Menschen bereits leben und arbeiten.", "La finalité est les soins humains : réduire la surcharge des aidants, soutenir l'autonomie à domicile et étendre une aide physique attentive là où les personnes vivent et tragent déjà."],
  ["Die Forschungsumgebung von SAVEN Core — Erkundung fortgeschrittener Robotik, verkörperter KI und nicht standardmäßiger Ingenieurkonzepte.", "L'environnement de recherche de SAVEN Core — exploration de la robotique avancée, de l'IA incarnée et de concepts d'ingénierie non standard."],
  ["Diese Seite ist nur strukturelle Information. Sie ist kein Angebot zum Verkauf von Wertpapieren. Kontaktkanäle werden veröffentlicht, wenn genehmigt. Anmelden / Registrieren ermöglicht autorisierten Zugang bei konfigurierten Anmeldedaten — kein vollständiges Investorenportal.", "Cette page est une information structurelle uniquement. Ce n'est pas une offre de vente de valeurs mobilières. Les canaux de contact seront publiés lorsqu'approuvés. Se connecter / S'inscrire permet un accès autorisé lorsque les identifiants sont configurés — pas un portail investisseur complet."],
  ["Vertrauen und menschliche Aufsicht als strukturelle Anforderungen", "Confiance et supervision humaine comme exigences structurelles"],
  ["Wir veröffentlichen auf dieser Website keine Finanzierungsrunden, Bewertungen, Umsatzzahlen oder Renditeprognosen. Diese Themen gehören in geeignete private Materialien, wenn autorisiert — niemals als öffentliche Leistungsbehauptungen.", "Nous ne publions pas sur ce site de tours de financement, valorisations, chiffres de revenus ni prévisions de rendement. Ces sujets relèvent de documents privés appropriés lorsqu'autorisés — jamais comme allégations de performance publique."],
  ["Was wir öffentlich benennen können, ist Architektur- und Systemfortschritt unter genehmigten Status: Forschung, Architektur und In Entwicklung über Leuchtturm-Arbeitsstränge.", "Ce que nous pouvons indiquer publiquement, c'est l'avancement architecture et systèmes sous statuts approuvés : Recherche, Architecture et En développement sur les filières phares."],
  ["Wo SAVEN Core Robotik und zukünftige Systeme für die physische Welt formt — Ingenieurlabore neben einer menschlichen Befehlsschnittstelle.", "Où SAVEN Core façonne la robotique et les systèmes futurs pour le monde physique — laboratoires d'ingénierie aux côtés d'une interface de commande humaine."],
  ["Arbeit ist als Ingenieur-Arbeitsstränge organisiert, nicht als fertige Produktlinien. Jeder Schwerpunkt schreitet gemeinsam voran, damit Roboter nützlich handeln können, ohne zu verbergen, wie Entscheidungen und Grenzen funktionieren.", "Le travail est organisé en filières d'ingénierie, pas en gammes produit finies. Chaque domaine prioritaire avance ensemble pour que les robots agissent utilement sans dissimuler le fonctionnement des décisions et des limites."],
  ["KI-gestützte Entscheidungsunterstützung", "Aide à la décision par IA"],
  ["Über uns", "À propos"],
  ["Fortgeschrittene Formen der Robotik", "Formes avancées de robotique"],
  ["Autonome Entscheidungsfindung", "Prise de décision autonome"],
  ["Entwicklungsfortschritt", "Progrès du développement"],
  ["Entwicklungsstatus", "État du développement"],
  ["Digitale Missionsumgebung", "Environnement numérique de mission"],
  ["Verkörperte KI", "IA incarnée"],
  ["Ingenieurdetails für alle verfügbar, die sie wünschen", "Profondeur d'ingénierie disponible pour ceux qui la souhaitent"],
  ["Flottenmanagement", "Gestion de flotte"],
  ["Schwerpunkte", "Domaines prioritaires"],
  ["Start", "Accueil"],
  ["Wie es Menschen hilft", "Comment cela aide les personnes"],
  ["Wie wir zusammenarbeiten", "Comment nous collaborons"],
  ["Menschlicher Nutzen", "Bénéfice humain"],
  ["Zweck menschlicher Fürsorge, der Plattformambition verankert", "Finalité de soins humains qui ancre l'ambition de plateforme"],
  ["Mensch-Maschine-Interaktion", "Interaction homme-machine"],
  ["Mensch-Maschine-Interaktion — klare Schnittstellen, damit Menschen die Kontrolle behalten", "Interaction homme-machine — interfaces claires pour que les personnes gardent le commandement"],
  ["Mensch-Roboter-Interaktion", "Interaction homme-robot"],
  ["In Entwicklung", "En développement"],
  ["Investitionshaltung", "Posture d'investissement"],
  ["Investoren", "Investisseurs"],
  ["Labore", "Laboratoires"],
  ["Langfristige Wertschöpfung", "Création de valeur à long terme"],
  ["Missionsplanung", "Planification de mission"],
  ["Modellierung physischer Umgebungen", "Modélisation d'environnements physiques"],
  ["Neue Sensorsysteme", "Nouveaux systèmes de capteurs"],
  ["Nicht standardmäßige Ingenieurkonzepte", "Concepts d'ingénierie non standard"],
  ["Perspectives", "Perspectives"],
  ["Plattformpotenzial", "Potentiel de plateforme"],
  ["Mögliche Komponenten", "Composants possibles"],
  ["Posture", "Posture"],
  ["Echtzeit-Telemetrie", "Télémétrie en temps réel"],
  ["Remote-Betrieb", "Opérations à distance"],
  ["Forschung", "Recherche"],
  ["Forschungsrichtungen", "Directions de recherche"],
  ["Robotik für Medizin", "Robotique pour la médecine"],
  ["Rollenbasierter Zugriff", "Accès basé sur les rôles"],
  ["Anmelden / Registrieren", "Se connecter / S'inscrire"],
  ["Status", "Statut"],
  ["Systemdiagnose", "Diagnostic système"],
  ["Systeme", "Systèmes"],
  ["Systeme · Robotikschicht", "Systèmes · Couche robotique"],
  ["Technologien für zukünftige Infrastruktur", "Technologies pour l'infrastructure future"],
  ["Technologie", "Technologie"],
  ["Technologie · Robotik", "Technologie · Robotique"],
  ["Visuelle Schnittstelle", "Interface visuelle"],
  ["Was das ist", "De quoi s'agit-il"],
  ["Was wir bauen", "Ce que nous construisons"],
  ["Was wir öffentlich teilen", "Ce que nous partageons publiquement"],
  ["Wohin als Nächstes", "Prochaines étapes"],
  ["Warum es wichtig ist", "Pourquoi c'est important"],
  ["Arbeitsstränge", "Filières"],
  ["Befehl und Kontrolle", "Commande et contrôle"],
  ["Barrierefreiheitserklärung", "Déclaration d'accessibilité"],
  ["Zustimmung zu den Bedingungen", "Acceptation des conditions"],
  ["Alle nicht ausdrücklich gewährten Rechte vorbehalten.", "Tous les droits non expressément accordés sont réservés."],
  ["Analyse-Cookies", "Cookies analytiques"],
  ["Bewertungsansatz", "Approche d'évaluation"],
  ["Verfahren für bevollmächtigte Vertreter", "Processus d'agent autorisé"],
  ["Browser-Steuerung", "Contrôles du navigateur"],
  ["Änderungen", "Modifications"],
  ["Änderungen dieser Richtlinie", "Modifications de cette politique"],
  ["Datenschutz von Kindern", "Confidentialité des enfants"],
  ["Verpflichtung", "Engagement"],
  ["Kompatibilitätshinweise", "Notes de compatibilité"],
  ["Kontakt", "Contact"],
  ["Kontakt / Meldekanal", "Contact / canal de signalement"],
  ["Cookie-Richtlinie", "Politique relative aux cookies"],
  ["Cookie-Einstellungen", "Préférences en matière de cookies"],
  ["Urheberrechtshinweis", "Avis de copyright"],
  ["Copyright-Zeile", "Ligne de copyright"],
  ["Datenrechte", "Droits relatifs aux données"],
  ["Datum ausstehend — Rechtsprüfung", "Date en attente de revue juridique"],
  ["Gestaltungsprinzipien", "Principes de conception"],
  ["Erinnerung an Entwicklungsstatus", "Rappel du statut de développement"],
  ["Haftungsausschlüsse", "Avertissements"],
  ["Meine personenbezogenen Daten nicht verkaufen oder teilen", "Ne pas vendre ni partager mes informations personnelles"],
  ["Essenzielle Cookies", "Cookies essentiels"],
  ["Feedback und Kontakt", "Retour et contact"],
  ["Anwendbares Recht / Gerichtsstand", "Droit applicable / juridiction"],
  ["Wie wir Informationen nutzen dürfen", "Comment nous pouvons utiliser les informations"],
  ["Menschliche Aufsicht", "Supervision humaine"],
  ["Indemnisation", "Indemnisation"],
  ["Informationen, die wir erheben können", "Informations que nous pouvons collecter"],
  ["Informativer Charakter", "Caractère informatif"],
  ["Geistiges Eigentum", "Propriété intellectuelle"],
  ["Internationale Übermittlungen", "Transferts internationaux"],
  ["Jurisdiktionshinweise", "Notes de juridiction"],
  ["Bekannte Einschränkungen", "Limitations connues"],
  ["Rechtliche Hinweise", "Mentions légales"],
  ["Rechtsgrundlagen", "Bases juridiques"],
  ["Haftungsbeschränkung", "Limitation de responsabilité"],
  ["Einschränkungen und Nicht-Behauptungen", "Limitations et non-allégations"],
  ["Einstellungen verwalten", "Gestion des préférences"],
  ["Medizinischer Haftungsausschluss", "Avertissement médical"],
  ["Art der Website", "Nature du site web"],
  ["Keine Ergebnisgarantie", "Aucune garantie de résultats"],
  ["Keine professionelle Beratung", "Pas de conseil professionnel"],
  ["Keine behördlichen Zulassungsbehauptungen", "Aucune allégation d'approbation réglementaire"],
  ["Kein Ersatz für qualifizierte Fachpersonen", "Ne remplace pas un professionnel qualifié"],
  ["Keine Diagnose oder Behandlung", "Pas de diagnostic ni de traitement"],
  ["Kein Notfall-Support", "Pas de support d'urgence"],
  ["Keine medizinische Beratung", "Pas de conseil médical"],
  ["Überblick", "Aperçu"],
  ["Eigentum", "Propriété"],
  ["Genehmigungsanfragen", "Demandes d'autorisation"],
  ["Einstellungsübersicht", "Résumé des préférences"],
  ["Präferenz- / Funktions-Cookies", "Cookies de préférences / fonctionnels"],
  ["Datenschutzerklärung", "Politique de confidentialité"],
  ["Verbotene Nutzung", "Usage interdit"],
  ["Zweck der KI bei SAVEN Core", "Finalité de l'IA au sein de SAVEN Core"],
  ["Zweck jeder Kategorie", "Finalité de chaque catégorie"],
  ["Regionsabschnitte", "Sections régionales"],
  ["Regionale Datenschutzrechte", "Droits régionaux en matière de confidentialité"],
  ["Anfragemmechanismus", "Mécanisme de demande"],
  ["Anfragewege", "Voies de demande"],
  ["Forschungshaftungsausschluss", "Avertissement de recherche"],
  ["Forschungs- und Entwicklungskontext", "Contexte de recherche et développement"],
  ["Rechtevorbehalt", "Réserve de droits"],
  ["Antwortfristen", "Délais de réponse"],
  ["Verantwortungsvolle KI", "IA responsable"],
  ["Aufbewahrung", "Conservation"],
  ["Keine Roadmap-Garantie", "Aucune garantie de feuille de route"],
  ["Umfang und Einschränkungen", "Portée et limitations"],
  ["Umfangsdefinitionen", "Définitions de portée"],
  ["Geltungsbereich dieser Richtlinie", "Portée de cette politique"],
  ["Sicherheit", "Sécurité"],
  ["Sicherheitspraktiken", "Pratiques de sécurité"],
  ["Weitergabe und Auftragsverarbeiter", "Partage et sous-traitants"],
  ["Zielstandard", "Norme cible"],
  ["Nutzungsbedingungen", "Conditions d'utilisation"],
  ["Marken Dritter", "Marques tierces"],
  ["Aktualisierungen", "Mises à jour"],
  ["Verifizierungsprozess", "Processus de vérification"],
  ["Schwachstellenmeldung", "Signalement de vulnérabilités"],
  ["Verwendete Cookie-Arten", "Types de cookies utilisés"],
  ["Wer wir sind", "Qui nous sommes"],
  ["Ihre Rechte und Wahlmöglichkeiten", "Vos droits et choix"],
  ["Freistellung", "Indemnisation"],
  [" — ", " — "],
  [": ", " : "],
];

// For locales using ES source - use es modules directly for es/de, build others from EN keys in separate complete maps
// Import complete maps from data files when available
const { FR_COMPLETE } = await import("./reference-maps-data/fr-complete.mjs").catch(() => ({ FR_COMPLETE: null }));
const { JA_COMPLETE } = await import("./reference-maps-data/ja-complete.mjs").catch(() => ({ JA_COMPLETE: null }));
const { ZH_COMPLETE } = await import("./reference-maps-data/zh-cn-complete.mjs").catch(() => ({ ZH_COMPLETE: null }));
const { AR_COMPLETE } = await import("./reference-maps-data/ar-complete.mjs").catch(() => ({ AR_COMPLETE: null }));
const { HE_COMPLETE } = await import("./reference-maps-data/he-complete.mjs").catch(() => ({ HE_COMPLETE: null }));
const { RU_COMPLETE } = await import("./reference-maps-data/ru-complete.mjs").catch(() => ({ RU_COMPLETE: null }));
const { UK_COMPLETE } = await import("./reference-maps-data/uk-complete.mjs").catch(() => ({ UK_COMPLETE: null }));

function buildFrFromDe() {
  const out = {};
  for (const key of enKeys) {
    if (FR_COMPLETE?.[key]) out[key] = FR_COMPLETE[key];
    else out[key] = applyRules(de[key], DE_FR);
  }
  return out;
}

function buildFromComplete(map, fallbackSrc, rules) {
  const out = {};
  for (const key of enKeys) {
    if (map?.[key]) out[key] = map[key];
    else out[key] = applyRules(fallbackSrc[key], rules);
  }
  return out;
}

const outputs = {
  fr: buildFrFromDe(),
  ja: buildFromComplete(JA_COMPLETE, es, []),
  "zh-cn": buildFromComplete(ZH_COMPLETE, es, []),
  ar: buildFromComplete(AR_COMPLETE, es, []),
  he: buildFromComplete(HE_COMPLETE, es, []),
  ru: buildFromComplete(RU_COMPLETE, de, DE_FR),
  uk: buildFromComplete(UK_COMPLETE, de, DE_FR),
};

for (const [locale, out] of Object.entries(outputs)) {
  const missing = enKeys.filter((k) => !out[k] || out[k] === k);
  const bad = enKeys.filter((k) => out[k] && /[äöüß]|Las áreas|herramientas|Seront publiés una/.test(out[k]));
  fs.writeFileSync(path.join(outDir, `${locale}.json`), JSON.stringify(out, null, 2) + "\n");
  console.log(`${locale}.json: identity=${missing.length} suspicious=${bad.length}`);
}
