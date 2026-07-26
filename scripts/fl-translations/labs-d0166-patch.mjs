#!/usr/bin/env node
/**
 * Append D-0166 Labs visual strings into flagship dictionaries.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dictDir = path.join(root, "src/content/flagship/dictionaries");

/** @type {Record<string, Record<string, string>>} */
const byLocale = {
  es: {
    "From human understanding to physical action":
      "Del entendimiento humano a la acción física",
    "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
      "Un bucle de arquitectura en desarrollo: el contexto humano entra en SAVEN, se preparan roles y acciones, los dispositivos ejecutivos actúan y perciben, y el contexto regresa — subiendo a BioMath Core solo cuando es necesario.",
    "Executive devices": "Dispositivos ejecutivos",
    Robots: "Robots",
    Manipulators: "Manipuladores",
    Sensors: "Sensores",
    "Context in": "Entrada de contexto",
    "Analyze · roles · events · actions": "Analizar · roles · eventos · acciones",
    "Distribute & execute": "Distribuir y ejecutar",
    "Sense & return": "Percibir y devolver",
    "When needed": "Cuando es necesario",
    "Architecture and engineering direction — not a claim of operational hospital deployment.":
      "Dirección de arquitectura e ingeniería — no una afirmación de despliegue operativo en hospitales.",
    "Assistive robot supporting a person standing with a caregiver nearby":
      "Robot de asistencia apoyando a una persona al levantarse con un cuidador cerca",
    "Physical help beside people": "Ayuda física junto a las personas",
    "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
      "Los laboratorios trabajan hacia máquinas que puedan estabilizar, apoyar y asistir en lugares cotidianos — con cuidadores y familia permaneciendo en autoridad.",
    "Robot arm carefully handing a cup to a person at home":
      "Brazo robótico entregando con cuidado una taza a una persona en casa",
    "Careful action at home": "Acción cuidadosa en el hogar",
    "Manipulators and mobile platforms are engineered for calm, governable motion — reaching, handing, and supporting without hiding limits.":
      "Los manipuladores y las plataformas móviles se diseñan para un movimiento calmado y gobernable — alcanzar, entregar y apoyar sin ocultar los límites.",
    "Robotic arm assisting with a tray while a caregiver stays present":
      "Brazo robótico asistiendo con una bandeja mientras un cuidador permanece presente",
    "Assistance with oversight": "Asistencia con supervisión",
    "SAVEN Robotics Lab focuses on physical systems that can help with everyday care tasks while people stay clearly in command.":
      "SAVEN Robotics Lab se centra en sistemas físicos que pueden ayudar en tareas cotidianas de cuidado mientras las personas siguen claramente al mando.",
    "Collaborative robot arm helping a person at home":
      "Brazo robótico colaborativo ayudando a una persona en casa",
    "Reach, hold, support": "Alcanzar, sostener, apoyar",
    "Engineering workstreams cover platforms, control, and perception so assistance can be stable, visible, and pauseable.":
      "Las líneas de ingeniería cubren plataformas, control y percepción para que la asistencia sea estable, visible y pausable.",
    "Researchers studying advanced robotic systems in a calm lab":
      "Investigadores estudiando sistemas robóticos avanzados en un laboratorio sereno",
    "Exploring what comes next": "Explorar lo que viene",
    "Internal Future Lab studies advanced robotics and embodied AI so promising ideas can mature before they enter near-term engineering.":
      "El Laboratorio Interno del Futuro estudia robótica avanzada e IA encarnada para que las ideas prometedoras maduren antes de entrar en la ingeniería a corto plazo.",
    "Assistive robotics concept supporting a person with human oversight":
      "Concepto de robótica de asistencia apoyando a una persona con supervisión humana",
    "Human life as the horizon": "La vida humana como horizonte",
    "Concepts are judged by whether they could later ease care with dignity — not by invented deployments or product claims.":
      "Los conceptos se juzgan por si más adelante podrían aliviar el cuidado con dignidad — no por despliegues inventados ni afirmaciones de producto.",
    "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
      "La dirección principal de ingeniería para sistemas robóticos que perciben, se mueven y actúan junto a las personas — movilidad, manipuladores y percepción bajo clara supervisión humana.",
    "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.":
      "SAVEN Robotics Lab construye la base de ingeniería para robots y manipuladores pensados para ayudar a personas en lugares reales: apoyo al levantarse, manejo cuidadoso de objetos y asistencia calmada en hogares y entornos de cuidado — siempre con las personas en autoridad.",
    "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Public status is In Development: architecture and systems work presented honestly — not as operational hospital fleets or commercial products.":
      "Plataformas, movilidad, control, percepción e interacción humano-máquina avanzan como una sola dirección. El estado público es En desarrollo: trabajo de arquitectura y sistemas presentado con honestidad — no como flotas hospitalarias operativas ni productos comerciales.",
    "Engineering for assistive robots, manipulators, mobility, control, perception, and human–machine interaction.":
      "Ingeniería para robots de asistencia, manipuladores, movilidad, control, percepción e interacción humano-máquina.",
    "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
      "Ayuda física donde el cuidado es difícil — levantarse, alcanzar, moverse y tareas cotidianas — con la supervisión en el centro.",
    "The research environment of SAVEN Core — exploring advanced robotics, embodied AI, and new ways machines might carefully support human life.":
      "El entorno de investigación de SAVEN Core — explorando robótica avanzada, IA encarnada y nuevas formas en que las máquinas podrían apoyar con cuidado la vida humana.",
    "Internal Future Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.":
      "El Laboratorio Interno del Futuro mira más allá del trabajo de sistemas a corto plazo: nuevas formas de robótica y manipuladores, sensado más rico, modelado de entornos físicos y colaboración humano-máquina que un día podrían aliviar el cuidado en hogares, clínicas y lugares cotidianos.",
    "Findings inform Robotics Lab and Interface directions. Research status means exploration and architecture — open questions, not validated devices or deployed products.":
      "Los hallazgos orientan las direcciones del Laboratorio de Robótica y la Interfaz. El estado de investigación significa exploración y arquitectura — preguntas abiertas, no dispositivos validados ni productos desplegados.",
    "A research environment for advanced robotics, embodied AI, and non-standard engineering concepts.":
      "Un entorno de investigación para robótica avanzada, IA encarnada y conceptos de ingeniería no convencionales.",
    "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.":
      "La asistencia física del mañana necesita una exploración cuidadosa antes de poder servir a las personas con dignidad.",
    "Research. Exploration and architecture — not product or clinical claims.":
      "Investigación. Exploración y arquitectura — no afirmaciones de producto ni clínicas.",
    "Human horizon": "Horizonte humano",
    "Future concepts are judged by whether they could later help people — caregivers, families, and individuals — without replacing human judgment or inventing deployment stories.":
      "Los conceptos futuros se juzgan por si más adelante podrían ayudar a las personas — cuidadores, familias e individuos — sin reemplazar el juicio humano ni inventar historias de despliegue.",
    "Work stays upstream of SAVEN Robotics Lab so promising ideas can mature into governable engineering directions.":
      "El trabajo permanece aguas arriba de SAVEN Robotics Lab para que las ideas prometedoras maduren en direcciones de ingeniería gobernables.",
    "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
      "Donde SAVEN Core da forma a la robótica y a sistemas futuros que ayudan a las personas en el mundo físico — laboratorios de ingeniería junto a una interfaz de mando humano.",
    "Labs are focused engineering and research environments for machines that can sense, move, and assist. SAVEN Robotics Lab is the primary engineering direction; Internal Future Lab explores what comes next.":
      "Los laboratorios son entornos enfocados de ingeniería e investigación para máquinas que pueden percibir, moverse y asistir. SAVEN Robotics Lab es la dirección principal de ingeniería; el Laboratorio Interno del Futuro explora lo que sigue.",
    "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
      "El contexto humano del Modelo de Datos Humanos fluye hacia SAVEN, que prepara roles, eventos y acciones reales para dispositivos ejecutivos — robots, manipuladores, sensores — luego recoge lo que ocurre y lo procesa de nuevo. Cuando es necesario, la comprensión asciende a BioMath Core. La Interfaz de Robótica SAVEN mantiene a las personas al mando a medida que crece la capacidad.",
    "Engineering and research labs for robotics that help people — and for future physical systems.":
      "Laboratorios de ingeniería e investigación para robótica que ayuda a las personas — y para sistemas físicos futuros.",
    "BioMath Core": "BioMath Core",
    "Human Data Model": "Modelo de Datos Humanos",
    SAVEN: "SAVEN",
  },
  de: {
    "From human understanding to physical action":
      "Vom menschlichen Verstehen zur physischen Handlung",
    "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
      "Eine Architektur-Schleife in Entwicklung: menschlicher Kontext gelangt in SAVEN, Rollen und Handlungen werden vorbereitet, ausführende Geräte handeln und erfassen, und Kontext kehrt zurück — zu BioMath Core nur wenn nötig.",
    "Executive devices": "Ausführende Geräte",
    Robots: "Roboter",
    Manipulators: "Manipulatoren",
    Sensors: "Sensoren",
    "Context in": "Kontext hinein",
    "Analyze · roles · events · actions": "Analysieren · Rollen · Ereignisse · Handlungen",
    "Distribute & execute": "Verteilen & ausführen",
    "Sense & return": "Erfassen & zurückführen",
    "When needed": "Wenn nötig",
    "Architecture and engineering direction — not a claim of operational hospital deployment.":
      "Architektur- und Engineering-Richtung — kein Anspruch auf operativen Krankenhaus-Einsatz.",
    "Assistive robot supporting a person standing with a caregiver nearby":
      "Assistenzroboter stützt eine Person beim Aufstehen, Betreuungsperson in der Nähe",
    "Physical help beside people": "Physische Hilfe neben Menschen",
    "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
      "Labs arbeiten an Maschinen, die in Alltagsumgebungen stabilisieren, stützen und helfen können — Betreuungspersonen und Familie bleiben in der Autorität.",
    "Robot arm carefully handing a cup to a person at home":
      "Roboterarm reicht behutsam eine Tasse an eine Person zu Hause",
    "Careful action at home": "Behutsame Handlung zu Hause",
    "Manipulators and mobile platforms are engineered for calm, governable motion — reaching, handing, and supporting without hiding limits.":
      "Manipulatoren und mobile Plattformen sind für ruhige, steuerbare Bewegung ausgelegt — greifen, reichen und stützen, ohne Grenzen zu verbergen.",
    "Robotic arm assisting with a tray while a caregiver stays present":
      "Roboterarm assistiert mit einem Tablett, während eine Betreuungsperson anwesend bleibt",
    "Assistance with oversight": "Unterstützung mit Aufsicht",
    "SAVEN Robotics Lab focuses on physical systems that can help with everyday care tasks while people stay clearly in command.":
      "SAVEN Robotics Lab konzentriert sich auf physische Systeme, die bei alltäglichen Pflegeaufgaben helfen können, während Menschen klar die Kontrolle behalten.",
    "Collaborative robot arm helping a person at home":
      "Kollaborativer Roboterarm hilft einer Person zu Hause",
    "Reach, hold, support": "Greifen, halten, stützen",
    "Engineering workstreams cover platforms, control, and perception so assistance can be stable, visible, and pauseable.":
      "Engineering-Arbeitsstränge umfassen Plattformen, Steuerung und Wahrnehmung, damit Assistance stabil, sichtbar und pausierbar bleibt.",
    "Researchers studying advanced robotic systems in a calm lab":
      "Forschende untersuchen fortschrittliche Robotersysteme in einem ruhigen Labor",
    "Exploring what comes next": "Erkunden, was als Nächstes kommt",
    "Internal Future Lab studies advanced robotics and embodied AI so promising ideas can mature before they enter near-term engineering.":
      "Das Internal Future Lab erforscht fortschrittliche Robotik und verkörperte KI, damit vielversprechende Ideen reifen, bevor sie in die nahe Engineering-Arbeit eingehen.",
    "Assistive robotics concept supporting a person with human oversight":
      "Assistenzrobotik-Konzept stützt eine Person mit menschlicher Aufsicht",
    "Human life as the horizon": "Menschliches Leben als Horizont",
    "Concepts are judged by whether they could later ease care with dignity — not by invented deployments or product claims.":
      "Konzepte werden danach beurteilt, ob sie später Pflege mit Würde erleichtern könnten — nicht nach erfundenen Einsätzen oder Produktbehauptungen.",
    "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
      "Die primäre Engineering-Richtung für Robotersysteme, die neben Menschen wahrnehmen, sich bewegen und handeln — Mobilität, Manipulatoren und Wahrnehmung unter klarer menschlicher Aufsicht.",
    "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.":
      "SAVEN Robotics Lab schafft die Engineering-Basis für Roboter und Manipulatoren, die Menschen an realen Orten helfen sollen: Aufstehhilfe, behutsamer Objektumgang und ruhige Assistance in Wohnungen und Pflegeumgebungen — stets mit Menschen in der Autorität.",
    "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Public status is In Development: architecture and systems work presented honestly — not as operational hospital fleets or commercial products.":
      "Plattformen, Mobilität, Steuerung, Wahrnehmung und Mensch-Maschine-Interaktion schreiten als eine Richtung voran. Öffentlicher Status ist In Entwicklung: Architektur- und Systemarbeit ehrlich dargestellt — nicht als operative Krankenhausflotten oder kommerzielle Produkte.",
    "Engineering for assistive robots, manipulators, mobility, control, perception, and human–machine interaction.":
      "Engineering für Assistenzroboter, Manipulatoren, Mobilität, Steuerung, Wahrnehmung und Mensch-Maschine-Interaktion.",
    "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
      "Physische Hilfe, wo Pflege schwer ist — Aufstehen, Greifen, Bewegen und Alltag — mit Aufsicht im Zentrum.",
    "The research environment of SAVEN Core — exploring advanced robotics, embodied AI, and new ways machines might carefully support human life.":
      "Die Forschungsumgebung von SAVEN Core — Erkundung fortschrittlicher Robotik, verkörperter KI und neuer Wege, wie Maschinen menschliches Leben behutsam unterstützen könnten.",
    "Internal Future Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.":
      "Das Internal Future Lab blickt über die nahe Systemarbeit hinaus: neue Formen von Robotik und Manipulatoren, reichere Sensorik, Modellierung physischer Umgebungen und Mensch-Maschine-Zusammenarbeit, die eines Tages Pflege in Wohnungen, Kliniken und Alltag erleichtern könnte.",
    "Findings inform Robotics Lab and Interface directions. Research status means exploration and architecture — open questions, not validated devices or deployed products.":
      "Ergebnisse informieren die Richtungen von Robotics Lab und Interface. Forschungsstatus bedeutet Erkundung und Architektur — offene Fragen, keine validierten Geräte oder eingesetzten Produkte.",
    "A research environment for advanced robotics, embodied AI, and non-standard engineering concepts.":
      "Eine Forschungsumgebung für fortschrittliche Robotik, verkörperte KI und unkonventionelle Engineering-Konzepte.",
    "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.":
      "Die physische Assistance von morgen braucht sorgfältige Erkundung, bevor sie Menschen mit Würde dienen kann.",
    "Research. Exploration and architecture — not product or clinical claims.":
      "Forschung. Erkundung und Architektur — keine Produkt- oder klinischen Behauptungen.",
    "Human horizon": "Menschlicher Horizont",
    "Future concepts are judged by whether they could later help people — caregivers, families, and individuals — without replacing human judgment or inventing deployment stories.":
      "Zukünftige Konzepte werden danach beurteilt, ob sie später Menschen helfen könnten — Betreuungspersonen, Familien und Einzelne — ohne menschliches Urteil zu ersetzen oder Einsatzgeschichten zu erfinden.",
    "Work stays upstream of SAVEN Robotics Lab so promising ideas can mature into governable engineering directions.":
      "Die Arbeit bleibt stromaufwärts von SAVEN Robotics Lab, damit vielversprechende Ideen zu steuerbaren Engineering-Richtungen reifen können.",
    "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
      "Wo SAVEN Core Robotik und zukünftige Systeme formt, die Menschen in der physischen Welt helfen — Engineering-Labs neben einer menschlichen Kommando-Schnittstelle.",
    "Labs are focused engineering and research environments for machines that can sense, move, and assist. SAVEN Robotics Lab is the primary engineering direction; Internal Future Lab explores what comes next.":
      "Labs sind fokussierte Engineering- und Forschungsumgebungen für Maschinen, die wahrnehmen, sich bewegen und assistieren können. SAVEN Robotics Lab ist die primäre Engineering-Richtung; das Internal Future Lab erkundet, was als Nächstes kommt.",
    "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
      "Menschlicher Kontext aus dem Human Data Model fließt in SAVEN, das Rollen, Ereignisse und reale Handlungen für ausführende Geräte vorbereitet — Roboter, Manipulatoren, Sensoren — dann erfasst, was geschieht, und verarbeitet erneut. Wenn nötig, steigt Verständnis zu BioMath Core auf. Das SAVEN Robotics Interface hält Menschen am Kommando, während Fähigkeiten wachsen.",
    "Engineering and research labs for robotics that help people — and for future physical systems.":
      "Engineering- und Forschungslabore für Robotik, die Menschen hilft — und für zukünftige physische Systeme.",
    "BioMath Core": "BioMath Core",
    "Human Data Model": "Human Data Model",
    SAVEN: "SAVEN",
  },
};

// Derive remaining locales from ES with language-specific overlays for RU/UK/FR/JA/ZH/AR/HE
const frOverlay = {
  "From human understanding to physical action":
    "De la compréhension humaine à l’action physique",
  "Executive devices": "Dispositifs exécutifs",
  Robots: "Robots",
  Manipulators: "Manipulateurs",
  Sensors: "Capteurs",
  "Context in": "Contexte entrant",
  "Analyze · roles · events · actions": "Analyser · rôles · événements · actions",
  "Distribute & execute": "Distribuer et exécuter",
  "Sense & return": "Percevoir et renvoyer",
  "When needed": "Lorsque nécessaire",
  "Physical help beside people": "Aide physique auprès des personnes",
  "Careful action at home": "Action soigneuse à domicile",
  "Assistance with oversight": "Assistance avec supervision",
  "Reach, hold, support": "Atteindre, tenir, soutenir",
  "Exploring what comes next": "Explorer la suite",
  "Human life as the horizon": "La vie humaine comme horizon",
  "Human horizon": "Horizon humain",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "Modèle de données humaines",
  SAVEN: "SAVEN",
};

const ruOverlay = {
  "From human understanding to physical action":
    "От человеческого понимания к физическому действию",
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "Архитектурный цикл в разработке: человеческий контекст поступает в SAVEN, готовятся роли и действия, исполнительные устройства действуют и воспринимают, контекст возвращается — поднимаясь к BioMath Core только когда нужно.",
  "Executive devices": "Исполнительные устройства",
  Robots: "Роботы",
  Manipulators: "Манипуляторы",
  Sensors: "Датчики",
  "Context in": "Вход контекста",
  "Analyze · roles · events · actions": "Анализ · роли · события · действия",
  "Distribute & execute": "Распределение и исполнение",
  "Sense & return": "Восприятие и возврат",
  "When needed": "Когда нужно",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "Направление архитектуры и инженерии — не утверждение об операционном развёртывании в больницах.",
  "Assistive robot supporting a person standing with a caregiver nearby":
    "Ассистирующий робот поддерживает человека при вставании; рядом опекун",
  "Physical help beside people": "Физическая помощь рядом с людьми",
  "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
    "Лаборатории работают над машинами, которые могут стабилизировать, поддерживать и помогать в повседневных местах — опекуны и семья остаются в полномочии.",
  "Robot arm carefully handing a cup to a person at home":
    "Роботизированная рука осторожно передаёт чашку человеку дома",
  "Careful action at home": "Осторожное действие дома",
  "Manipulators and mobile platforms are engineered for calm, governable motion — reaching, handing, and supporting without hiding limits.":
    "Манипуляторы и мобильные платформы проектируются для спокойного, управляемого движения — доставать, передавать и поддерживать, не скрывая пределы.",
  "Robotic arm assisting with a tray while a caregiver stays present":
    "Роботизированная рука помогает с подносом, пока опекун остаётся рядом",
  "Assistance with oversight": "Помощь под контролем",
  "SAVEN Robotics Lab focuses on physical systems that can help with everyday care tasks while people stay clearly in command.":
    "SAVEN Robotics Lab сосредоточен на физических системах, которые могут помогать в повседневном уходе, пока люди явно остаются у управления.",
  "Collaborative robot arm helping a person at home":
    "Коллаборативная роботизированная рука помогает человеку дома",
  "Reach, hold, support": "Достать, удержать, поддержать",
  "Engineering workstreams cover platforms, control, and perception so assistance can be stable, visible, and pauseable.":
    "Инженерные направления охватывают платформы, управление и восприятие, чтобы помощь была стабильной, видимой и приостанавливаемой.",
  "Researchers studying advanced robotic systems in a calm lab":
    "Исследователи изучают продвинутые робототехнические системы в спокойной лаборатории",
  "Exploring what comes next": "Исследовать то, что дальше",
  "Internal Future Lab studies advanced robotics and embodied AI so promising ideas can mature before they enter near-term engineering.":
    "Internal Future Lab изучает продвинутую робототехнику и воплощённый ИИ, чтобы перспективные идеи созрели до ближайшей инженерии.",
  "Assistive robotics concept supporting a person with human oversight":
    "Концепция ассистирующей робототехники поддерживает человека при человеческом контроле",
  "Human life as the horizon": "Человеческая жизнь как горизонт",
  "Concepts are judged by whether they could later ease care with dignity — not by invented deployments or product claims.":
    "Концепции оцениваются по тому, смогут ли они позже облегчить уход с достоинством — не по выдуманным развёртываниям или продуктовым заявлениям.",
  "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
    "Основное инженерное направление для робототехнических систем, которые воспринимают, двигаются и действуют рядом с людьми — мобильность, манипуляторы и восприятие под ясным человеческим контролем.",
  "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.":
    "SAVEN Robotics Lab создаёт инженерную основу для роботов и манипуляторов, предназначенных помогать людям в реальных местах: поддержка при вставании, осторожная работа с предметами и спокойная помощь дома и в среде ухода — всегда с людьми в полномочии.",
  "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Public status is In Development: architecture and systems work presented honestly — not as operational hospital fleets or commercial products.":
    "Платформы, мобильность, управление, восприятие и взаимодействие человека и машины развиваются как одно направление. Публичный статус — In Development: архитектура и системная работа представлены честно — не как операционные больничные флоты или коммерческие продукты.",
  "Engineering for assistive robots, manipulators, mobility, control, perception, and human–machine interaction.":
    "Инженерия для ассистирующих роботов, манипуляторов, мобильности, управления, восприятия и взаимодействия человека и машины.",
  "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
    "Физическая помощь там, где уход труден — вставание, доставание, движение и повседневные задачи — с контролем в центре.",
  "The research environment of SAVEN Core — exploring advanced robotics, embodied AI, and new ways machines might carefully support human life.":
    "Исследовательская среда SAVEN Core — изучение продвинутой робототехники, воплощённого ИИ и новых способов, которыми машины могли бы осторожно поддерживать человеческую жизнь.",
  "Internal Future Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.":
    "Internal Future Lab смотрит дальше ближайшей системной работы: новые формы робототехники и манипуляторов, более богатое восприятие, моделирование физической среды и сотрудничество человека и машины, которое когда-нибудь может облегчить уход дома, в клиниках и в повседневных местах.",
  "Findings inform Robotics Lab and Interface directions. Research status means exploration and architecture — open questions, not validated devices or deployed products.":
    "Результаты направляют Robotics Lab и Interface. Статус Research означает исследование и архитектуру — открытые вопросы, не валидированные устройства или развёрнутые продукты.",
  "A research environment for advanced robotics, embodied AI, and non-standard engineering concepts.":
    "Исследовательская среда для продвинутой робототехники, воплощённого ИИ и нестандартных инженерных концепций.",
  "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.":
    "Физической помощи завтрашнего дня нужно осторожное исследование, прежде чем она сможет служить людям с достоинством.",
  "Research. Exploration and architecture — not product or clinical claims.":
    "Исследование. Изучение и архитектура — не продуктовые или клинические заявления.",
  "Human horizon": "Человеческий горизонт",
  "Future concepts are judged by whether they could later help people — caregivers, families, and individuals — without replacing human judgment or inventing deployment stories.":
    "Будущие концепции оцениваются по тому, смогут ли они позже помочь людям — опекунам, семьям и отдельным людям — не заменяя человеческое суждение и не изобретая истории развёртывания.",
  "Work stays upstream of SAVEN Robotics Lab so promising ideas can mature into governable engineering directions.":
    "Работа остаётся выше по течению относительно SAVEN Robotics Lab, чтобы перспективные идеи созрели в управляемые инженерные направления.",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "Где SAVEN Core формирует робототехнику и будущие системы, которые помогают людям в физическом мире — инженерные лаборатории рядом с человеческим интерфейсом управления.",
  "Labs are focused engineering and research environments for machines that can sense, move, and assist. SAVEN Robotics Lab is the primary engineering direction; Internal Future Lab explores what comes next.":
    "Лаборатории — сфокусированные инженерные и исследовательские среды для машин, которые могут воспринимать, двигаться и помогать. SAVEN Robotics Lab — основное инженерное направление; Internal Future Lab исследует то, что дальше.",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "Человеческий контекст из Human Data Model поступает в SAVEN, который готовит роли, события и реальные действия для исполнительных устройств — роботов, манипуляторов, датчиков — затем собирает происходящее и обрабатывает снова. Когда нужно, понимание поднимается к BioMath Core. SAVEN Robotics Interface удерживает людей у управления по мере роста возможностей.",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "Инженерные и исследовательские лаборатории для робототехники, которая помогает людям — и для будущих физических систем.",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "Модель человеческих данных",
  SAVEN: "SAVEN",
};

const ukOverlay = Object.fromEntries(
  Object.entries(ruOverlay).map(([k, v]) => {
    const map = {
      "От человеческого понимания к физическому действию":
        "Від людського розуміння до фізичної дії",
      "Исполнительные устройства": "Виконавчі пристрої",
      Роботы: "Роботи",
      Манипуляторы: "Маніпулятори",
      Датчики: "Датчики",
      "Вход контекста": "Вхід контексту",
      "Анализ · роли · события · действия": "Аналіз · ролі · події · дії",
      "Распределение и исполнение": "Розподіл і виконання",
      "Восприятие и возврат": "Сприйняття і повернення",
      "Когда нужно": "Коли потрібно",
      "Физическая помощь рядом с людьми": "Фізична допомога поруч із людьми",
      "Осторожное действие дома": "Обережна дія вдома",
      "Помощь под контролем": "Допомога під контролем",
      "Достать, удержать, поддержать": "Дістати, утримати, підтримати",
      "Исследовать то, что дальше": "Досліджувати те, що далі",
      "Человеческая жизнь как горизонт": "Людське життя як горизонт",
      "Человеческий горизонт": "Людський горизонт",
      "Модель человеческих данных": "Модель людських даних",
    };
    return [k, map[v] ?? v];
  }),
);

const jaOverlay = {
  "From human understanding to physical action": "人間の理解から物理的な行動へ",
  "Executive devices": "実行デバイス",
  Robots: "ロボット",
  Manipulators: "マニピュレータ",
  Sensors: "センサー",
  "Context in": "文脈の入力",
  "Analyze · roles · events · actions": "分析 · 役割 · イベント · 行動",
  "Distribute & execute": "分配と実行",
  "Sense & return": "感知と帰還",
  "When needed": "必要なとき",
  "Physical help beside people": "人のそばでの物理的な助け",
  "Careful action at home": "家庭での丁寧な動作",
  "Assistance with oversight": "監督のある支援",
  "Reach, hold, support": "届ける、持つ、支える",
  "Exploring what comes next": "次に来るものを探る",
  "Human life as the horizon": "地平としての人間の生",
  "Human horizon": "人間の地平",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "ヒューマンデータモデル",
  SAVEN: "SAVEN",
};

const zhOverlay = {
  "From human understanding to physical action": "从人类理解到物理行动",
  "Executive devices": "执行设备",
  Robots: "机器人",
  Manipulators: "机械臂",
  Sensors: "传感器",
  "Context in": "上下文输入",
  "Analyze · roles · events · actions": "分析 · 角色 · 事件 · 行动",
  "Distribute & execute": "分发与执行",
  "Sense & return": "感知并回传",
  "When needed": "必要时",
  "Physical help beside people": "在人身边的物理帮助",
  "Careful action at home": "居家中的审慎行动",
  "Assistance with oversight": "有监督的协助",
  "Reach, hold, support": "伸取、握住、支撑",
  "Exploring what comes next": "探索下一步",
  "Human life as the horizon": "以人类生活为地平线",
  "Human horizon": "人类地平线",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "人类数据模型",
  SAVEN: "SAVEN",
};

const arOverlay = {
  "From human understanding to physical action": "من الفهم البشري إلى الفعل الجسدي",
  "Executive devices": "الأجهزة التنفيذية",
  Robots: "الروبوتات",
  Manipulators: "المناولات",
  Sensors: "المستشعرات",
  "Context in": "دخول السياق",
  "Analyze · roles · events · actions": "تحليل · أدوار · أحداث · أفعال",
  "Distribute & execute": "توزيع وتنفيذ",
  "Sense & return": "استشعار وإرجاع",
  "When needed": "عند الحاجة",
  "Physical help beside people": "مساعدة جسدية إلى جانب الناس",
  "Careful action at home": "فعل حذر في المنزل",
  "Assistance with oversight": "مساعدة مع إشراف",
  "Reach, hold, support": "الوصول والإمساك والدعم",
  "Exploring what comes next": "استكشاف ما يأتي بعد ذلك",
  "Human life as the horizon": "حياة الإنسان كأفق",
  "Human horizon": "الأفق الإنساني",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "نموذج البيانات البشرية",
  SAVEN: "SAVEN",
};

const heOverlay = {
  "From human understanding to physical action": "מהבנה אנושית לפעולה פיזית",
  "Executive devices": "התקנים מבצעים",
  Robots: "רובוטים",
  Manipulators: "מניפולטורים",
  Sensors: "חיישנים",
  "Context in": "הקשר נכנס",
  "Analyze · roles · events · actions": "ניתוח · תפקידים · אירועים · פעולות",
  "Distribute & execute": "הפצה וביצוע",
  "Sense & return": "חישה והחזרה",
  "When needed": "כשצריך",
  "Physical help beside people": "עזרה פיזית לצד אנשים",
  "Careful action at home": "פעולה זהירה בבית",
  "Assistance with oversight": "סיוע עם פיקוח",
  "Reach, hold, support": "להושיט, להחזיק, לתמוך",
  "Exploring what comes next": "לחקור את מה שבא אחר כך",
  "Human life as the horizon": "חיי אדם כאופק",
  "Human horizon": "אופק אנושי",
  "BioMath Core": "BioMath Core",
  "Human Data Model": "מודל נתונים אנושי",
  SAVEN: "SAVEN",
};

function fillFromEs(overlay) {
  const es = byLocale.es;
  /** @type {Record<string, string>} */
  const out = { ...es };
  for (const [k, v] of Object.entries(overlay)) out[k] = v;
  // For long strings without overlay, keep ES as interim for FR/JA etc is bad —
  // better leave English for missing long strings in non-RU locales that only have short overlays.
  // We'll merge overlay onto English identity for missing keys instead of ES for non-latin.
  return out;
}

function mergeLocale(baseEs, overlay, useEsFallback) {
  /** @type {Record<string, string>} */
  const out = {};
  for (const key of Object.keys(baseEs)) {
    if (overlay[key]) out[key] = overlay[key];
    else if (useEsFallback) out[key] = baseEs[key];
    else out[key] = key; // leave EN until better translation — deepLocalize uses identity
  }
  for (const [k, v] of Object.entries(overlay)) {
    if (!out[k]) out[k] = v;
  }
  return out;
}

byLocale.fr = mergeLocale(byLocale.es, frOverlay, true);
// Improve FR long strings manually for key ones already in overlay; rest ES is imperfect — replace with FR-ish from ES via simple approach:
// Prefer writing Russian-quality for RU/UK and proper for FR key diagram strings already set.
byLocale.fr = {
  ...byLocale.fr,
  ...frOverlay,
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "Une boucle d’architecture en développement : le contexte humain entre dans SAVEN, les rôles et actions sont préparés, les dispositifs exécutifs agissent et perçoivent, puis le contexte revient — montant vers BioMath Core seulement lorsque nécessaire.",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "Direction d’architecture et d’ingénierie — pas une affirmation de déploiement hospitalier opérationnel.",
  "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
    "Les labs travaillent vers des machines capables de stabiliser, soutenir et assister dans les lieux du quotidien — les soignants et la famille restant en autorité.",
  "Manipulators and mobile platforms are engineered for calm, governable motion — reaching, handing, and supporting without hiding limits.":
    "Les manipulateurs et plateformes mobiles sont conçus pour un mouvement calme et gouvernable — atteindre, tendre et soutenir sans cacher les limites.",
  "SAVEN Robotics Lab focuses on physical systems that can help with everyday care tasks while people stay clearly in command.":
    "SAVEN Robotics Lab se concentre sur des systèmes physiques pouvant aider aux tâches de soin quotidiennes, tandis que les personnes restent clairement aux commandes.",
  "Engineering workstreams cover platforms, control, and perception so assistance can be stable, visible, and pauseable.":
    "Les chantiers d’ingénierie couvrent plateformes, contrôle et perception pour qu’une assistance soit stable, visible et pausable.",
  "Internal Future Lab studies advanced robotics and embodied AI so promising ideas can mature before they enter near-term engineering.":
    "Internal Future Lab étudie la robotique avancée et l’IA incarnée pour que les idées prometteuses mûrissent avant l’ingénierie de court terme.",
  "Concepts are judged by whether they could later ease care with dignity — not by invented deployments or product claims.":
    "Les concepts sont jugés selon qu’ils pourraient plus tard alléger le soin avec dignité — non selon des déploiements inventés ou des affirmations produit.",
  "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
    "La direction d’ingénierie principale pour des systèmes robotiques qui perçoivent, se déplacent et agissent auprès des personnes — mobilité, manipulateurs et perception sous supervision humaine claire.",
  "SAVEN Robotics Lab builds the engineering basis for robots and manipulators meant to help people in real places: standing support, careful object handling, and calm assistance in homes and care settings — always with people remaining in authority.":
    "SAVEN Robotics Lab construit la base d’ingénierie pour robots et manipulateurs destinés à aider les personnes dans des lieux réels : soutien pour se lever, manipulation soigneuse d’objets et assistance calme à domicile et en milieux de soin — toujours avec les personnes en autorité.",
  "Platforms, mobility, control, perception, and human–machine interaction advance as one direction. Public status is In Development: architecture and systems work presented honestly — not as operational hospital fleets or commercial products.":
    "Plateformes, mobilité, contrôle, perception et interaction humain-machine avancent comme une seule direction. Statut public : En développement — architecture et systèmes présentés honnêtement, pas comme flottes hospitalières opérationnelles ni produits commerciaux.",
  "Engineering for assistive robots, manipulators, mobility, control, perception, and human–machine interaction.":
    "Ingénierie pour robots d’assistance, manipulateurs, mobilité, contrôle, perception et interaction humain-machine.",
  "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
    "Aide physique là où le soin est difficile — se lever, atteindre, se déplacer et tâches quotidiennes — avec la supervision au centre.",
  "The research environment of SAVEN Core — exploring advanced robotics, embodied AI, and new ways machines might carefully support human life.":
    "L’environnement de recherche de SAVEN Core — explorer la robotique avancée, l’IA incarnée et de nouvelles façons dont les machines pourraient soutenir avec soin la vie humaine.",
  "Internal Future Lab looks ahead of near-term systems work: new forms of robotics and manipulators, richer sensing, physical-environment modeling, and human–machine collaboration that could one day ease care in homes, clinics, and everyday places.":
    "Internal Future Lab regarde au-delà du travail systèmes de court terme : nouvelles formes de robotique et manipulateurs, capteurs plus riches, modélisation d’environnements physiques et collaboration humain-machine qui pourrait un jour alléger le soin à domicile, en clinique et au quotidien.",
  "Findings inform Robotics Lab and Interface directions. Research status means exploration and architecture — open questions, not validated devices or deployed products.":
    "Les résultats informent les directions du Robotics Lab et de l’Interface. Statut Recherche signifie exploration et architecture — questions ouvertes, pas dispositifs validés ni produits déployés.",
  "A research environment for advanced robotics, embodied AI, and non-standard engineering concepts.":
    "Un environnement de recherche pour la robotique avancée, l’IA incarnée et des concepts d’ingénierie non standards.",
  "Tomorrow’s physical assistance needs careful exploration before it can serve people with dignity.":
    "L’assistance physique de demain exige une exploration soigneuse avant de pouvoir servir les personnes avec dignité.",
  "Research. Exploration and architecture — not product or clinical claims.":
    "Recherche. Exploration et architecture — pas d’affirmations produit ou cliniques.",
  "Future concepts are judged by whether they could later help people — caregivers, families, and individuals — without replacing human judgment or inventing deployment stories.":
    "Les concepts futurs sont jugés selon qu’ils pourraient plus tard aider les personnes — soignants, familles et individus — sans remplacer le jugement humain ni inventer des récits de déploiement.",
  "Work stays upstream of SAVEN Robotics Lab so promising ideas can mature into governable engineering directions.":
    "Le travail reste en amont de SAVEN Robotics Lab pour que les idées prometteuses mûrissent en directions d’ingénierie gouvernables.",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "Là où SAVEN Core façonne la robotique et des systèmes futurs qui aident les personnes dans le monde physique — labs d’ingénierie à côté d’une interface de commande humaine.",
  "Labs are focused engineering and research environments for machines that can sense, move, and assist. SAVEN Robotics Lab is the primary engineering direction; Internal Future Lab explores what comes next.":
    "Les labs sont des environnements d’ingénierie et de recherche concentrés pour des machines qui peuvent percevoir, se déplacer et assister. SAVEN Robotics Lab est la direction d’ingénierie principale ; Internal Future Lab explore la suite.",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "Le contexte humain du Modèle de données humaines circule vers SAVEN, qui prépare rôles, événements et actions réelles pour les dispositifs exécutifs — robots, manipulateurs, capteurs — puis collecte ce qui se passe et traite à nouveau. Lorsque nécessaire, la compréhension monte vers BioMath Core. L’interface SAVEN Robotics garde les personnes aux commandes à mesure que la capacité croît.",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "Labs d’ingénierie et de recherche pour une robotique qui aide les personnes — et pour de futurs systèmes physiques.",
  "Assistive robot supporting a person standing with a caregiver nearby":
    "Robot d’assistance soutenant une personne qui se lève, soignant à proximité",
  "Robot arm carefully handing a cup to a person at home":
    "Bras robotique tendant avec soin une tasse à une personne chez elle",
  "Robotic arm assisting with a tray while a caregiver stays present":
    "Bras robotique assistant avec un plateau tandis qu’un soignant reste présent",
  "Collaborative robot arm helping a person at home":
    "Bras robotique collaboratif aidant une personne à domicile",
  "Researchers studying advanced robotic systems in a calm lab":
    "Chercheurs étudiant des systèmes robotiques avancés dans un lab calme",
  "Assistive robotics concept supporting a person with human oversight":
    "Concept de robotique d’assistance soutenant une personne avec supervision humaine",
};

byLocale.ru = ruOverlay;
byLocale.uk = { ...ruOverlay, ...ukOverlay };
byLocale.ja = mergeLocale(byLocale.es, jaOverlay, false);
// For JA fill long strings with thoughtful JP — use ES as last resort is bad; better copy EN key for missing
for (const key of Object.keys(byLocale.es)) {
  if (!byLocale.ja[key] || byLocale.ja[key] === key) {
    // keep English for missing long JA strings — acceptable interim for deepLocalize
    byLocale.ja[key] = jaOverlay[key] ?? key;
  }
}
// Actually provide JA long strings via a compact approach: use English for missing (identity)
byLocale.ja = { ...Object.fromEntries(Object.keys(byLocale.es).map((k) => [k, k])), ...jaOverlay };
// Override with proper JA for the most visible diagram+scene short labels already in overlay;
// Add key long JA translations:
Object.assign(byLocale.ja, {
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "開発中のアーキテクチャ・ループ：人間の文脈がSAVENに入り、役割と行動が準備され、実行デバイスが動作・感知し、文脈が戻る — 必要なときだけBioMath Coreへ上がる。",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "アーキテクチャとエンジニアリングの方向 — 病院での運用展開の主張ではない。",
  "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
    "ラボは、日常の場で安定させ支え助ける機械を目指す — 介護者と家族が権限を保つ。",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "SAVEN Coreが、物理世界で人を助けるロボティクスと将来システムを形づくる場所 — 人間の指揮インターフェースのそばにあるエンジニアリング・ラボ。",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "ヒューマンデータモデルからの人間の文脈がSAVENに流れ、実行デバイス（ロボット、マニピュレータ、センサー）向けに役割・イベント・実行動作を準備し、起きたことを収集して再び処理する。必要なとき理解はBioMath Coreへ上がる。SAVEN Robotics Interfaceは能力が育つあいだ人も指揮を保つ。",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "人を助けるロボティクスと将来の物理システムのためのエンジニアリング／研究ラボ。",
  "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
    "人のそばで感知し動き行動するロボットシステムの主要なエンジニアリング方向 — 明確な人間の監督下での移動、マニピュレータ、知覚。",
  "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
    "ケアが難しい場での物理的助け — 起立、手を伸ばす、移動、日常の作業 — 監督を中心に。",
});

byLocale["zh-cn"] = {
  ...Object.fromEntries(Object.keys(byLocale.es).map((k) => [k, k])),
  ...zhOverlay,
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "开发中的架构循环：人类上下文进入 SAVEN，准备角色与行动，执行设备行动并感知，上下文返回——仅在必要时上升到 BioMath Core。",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "架构与工程方向——并非宣称医院已投入运营部署。",
  "Labs work toward machines that can steady, support, and assist in everyday places — with caregivers and family remaining in authority.":
    "实验室致力于能在日常场所稳定、支撑并协助的机器——照护者与家人仍保持权威。",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "SAVEN Core 塑造在物理世界帮助人们的机器人与未来系统之处——工程实验室与人类指挥界面并存。",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "来自人类数据模型的人类上下文流入 SAVEN；SAVEN 为执行设备（机器人、机械臂、传感器）准备角色、事件与真实行动，然后收集发生的情况并再次处理。必要时，理解上升到 BioMath Core。随着能力增长，SAVEN Robotics Interface 让人们保持指挥。",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "帮助人们的机器人工程与研究实验室——以及未来的物理系统。",
  "The primary engineering direction for robotic systems that sense, move, and act beside people — mobility, manipulators, and perception under clear human oversight.":
    "在人身边感知、移动并行动的机器人系统的主要工程方向——在明确人类监督下的移动、机械臂与感知。",
  "Physical help where care is hard — standing, reaching, moving, and everyday tasks — with oversight kept central.":
    "在照护艰难之处提供物理帮助——起立、伸取、移动与日常任务——监督始终居中。",
};

byLocale.ar = {
  ...Object.fromEntries(Object.keys(byLocale.es).map((k) => [k, k])),
  ...arOverlay,
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "حلقة معمارية قيد التطوير: يدخل السياق البشري إلى SAVEN، وتُجهَّز الأدوار والأفعال، وتعمل الأجهزة التنفيذية وتستشعر، ثم يعود السياق — صعودًا إلى BioMath Core عند الحاجة فقط.",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "اتجاه معماري وهندسي — وليس ادعاءً بنشر تشغيلي في المستشفيات.",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "حيث يشكل SAVEN Core الروبوتات والأنظمة المستقبلية التي تساعد الناس في العالم المادي — مختبرات هندسية إلى جانب واجهة قيادة بشرية.",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "يتدفق السياق البشري من نموذج البيانات البشرية إلى SAVEN، الذي يجهّز الأدوار والأحداث والأفعال الحقيقية للأجهزة التنفيذية — الروبوتات والمناولات والمستشعرات — ثم يجمع ما يحدث ويعالجه مجددًا. عند الحاجة، يرتفع الفهم إلى BioMath Core. تبقي واجهة SAVEN Robotics الناس في القيادة مع نمو القدرة.",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "مختبرات هندسية وبحثية لروبوتات تساعد الناس — وللأنظمة المادية المستقبلية.",
};

byLocale.he = {
  ...Object.fromEntries(Object.keys(byLocale.es).map((k) => [k, k])),
  ...heOverlay,
  "An architecture loop in development: human context enters SAVEN, roles and actions are prepared, executive devices act and sense, and context returns — rising to BioMath Core only when needed.":
    "לולאת ארכיטקטורה בפיתוח: הקשר אנושי נכנס ל-SAVEN, תפקידים ופעולות מוכנים, התקנים מבצעים פועלים וחשים, וההקשר חוזר — ועולה ל-BioMath Core רק כשצריך.",
  "Architecture and engineering direction — not a claim of operational hospital deployment.":
    "כיוון ארכיטקטורה והנדסה — לא טענה לפריסה תפעולית בבתי חולים.",
  "Where SAVEN Core shapes robotics and future systems that help people in the physical world — engineering labs beside a human command interface.":
    "המקום שבו SAVEN Core מעצב רובוטיקה ומערכות עתידיות שעוזרות לאנשים בעולם הפיזי — מעבדות הנדסה לצד ממשק פיקוד אנושי.",
  "Human context from the Human Data Model flows into SAVEN, which prepares roles, events, and real actions for executive devices — robots, manipulators, sensors — then collects what happens and processes it again. When needed, understanding rises to BioMath Core. The SAVEN Robotics Interface keeps people in command as capability grows.":
    "הקשר אנושי ממודל הנתונים האנושי זורם ל-SAVEN, שמכין תפקידים, אירועים ופעולות אמיתיות להתקנים מבצעים — רובוטים, מניפולטורים, חיישנים — ואז אוסף את המתרחש ומעבד שוב. כשצריך, ההבנה עולה ל-BioMath Core. ממשק SAVEN Robotics משאיר אנשים בפיקוד ככל שהיכולת גדלה.",
  "Engineering and research labs for robotics that help people — and for future physical systems.":
    "מעבדות הנדסה ומחקר לרובוטיקה שעוזרת לאנשים — ולמערכות פיזיות עתידיות.",
};

function parseDict(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  /** @type {Record<string, string>} */
  const map = {};
  const re = /"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(text))) {
    map[JSON.parse(`"${m[1]}"`)] = JSON.parse(`"${m[2]}"`);
  }
  return map;
}

function writeDict(locale, map) {
  const keys = Object.keys(map).sort((a, b) => a.localeCompare(b));
  const body = keys
    .map((k) => `  ${JSON.stringify(k)}: ${JSON.stringify(map[k])},`)
    .join("\n");
  const header =
    locale === "es"
      ? "/* Generated from the canonical English source (D-0161). */\n"
      : "/* Flagship page dictionary (D-0161 / D-0166). */\n";
  const out = `${header}export const dictionary: Record<string, string> = {\n${body}\n};\n`;
  fs.writeFileSync(path.join(dictDir, `${locale}.ts`), out);
}

for (const locale of Object.keys(byLocale)) {
  const file = path.join(dictDir, `${locale}.ts`);
  const existing = parseDict(file);
  const merged = { ...existing, ...byLocale[locale] };
  // Drop identity mappings that equal the key (except brand terms that are intentional)
  for (const [k, v] of Object.entries(merged)) {
    if (v === k && !["SAVEN", "BioMath Core", "Human Data Model", "SAVEN Core"].includes(k)) {
      // keep identity only if it was already there; for new identity keys remove to fall through EN
      if (!(k in existing)) delete merged[k];
    }
  }
  writeDict(locale, merged);
  console.log(`updated ${locale}: +${Object.keys(byLocale[locale]).length} patch keys`);
}

console.log("done");
