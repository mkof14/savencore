#!/usr/bin/env node
/**
 * Append D-0189 Robotics Interface copy + diagram strings into flagship dictionaries.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dictDir = path.join(root, "src/content/flagship/dictionaries");

/** @type {Record<string, Record<string, string>>} */
const byLocale = {
  es: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "La capa de interfaz compartida que conecta diversos robots y dispositivos a SAVEN — para que puedan comunicarse, coordinar tareas comunes y permanecer bajo mando humano.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface es una parte importante de la arquitectura del sistema SAVEN: una vía común de comunicación y control entre SAVEN y los muchos tipos de robots y dispositivos que pueden trabajar juntos.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "Las distintas plataformas — manipuladores, robots móviles y de carro, formas de asistencia y sensores — no deben convertirse en islas separadas de control. A través de la Robotics Interface comparten un solo sistema de control y comunicación bajo SAVEN, de modo que las tareas compartidas y comunes puedan planificarse, dirigirse y supervisarse como trabajo coordinado.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "Las personas permanecen en autoridad. La Interface mantiene visibles las misiones, los límites y el estado de las máquinas para que la IA y la robótica sigan siendo herramientas para el cuidado humano — no automatización opaca.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "Una capa de interfaz compartida para que robots y dispositivos diversos puedan comunicarse y coordinarse bajo SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "Las tareas comunes entre distintas máquinas necesitan una vía de comunicación gobernable — con las personas aún al mando.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "En desarrollo. Arquitectura para interoperabilidad y supervisión — no un producto comercial de control.",
    "Role in the SAVEN system": "Rol en el sistema SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN está en el centro del análisis, los roles, los eventos y las acciones. La Robotics Interface es la capa a través de la cual se conectan los dispositivos ejecutivos — intercambiando comandos, telemetría y contexto de tareas para que máquinas heterogéneas puedan participar en trabajo compartido.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "La interoperabilidad es el punto: una arquitectura para muchos tipos de dispositivos, de modo que la asistencia física orientada al cuidado pueda crecer sin inventar una pila separada para cada factor de forma.",
    "Device diversity (architecture concepts)":
      "Diversidad de dispositivos (conceptos de arquitectura)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "La Interface se diseña en torno a clases de dispositivos ejecutivos como conceptos de arquitectura — no SKUs de producto ni afirmaciones de despliegue:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "Manipuladores — alcance, sujeción y entrega cuidadosos bajo límites visibles",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "Robots móviles y de carro — movimiento por espacios compartidos con trayectorias gobernables",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "Formas de asistencia — formas de apoyo físico pensadas para ayudar a las personas junto a cuidadores",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "Sensores y nodos de percepción — contexto que regresa a SAVEN para la siguiente acción",
    "One control and communication system": "Un sistema de control y comunicación",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "Diversos robots y dispositivos se conectan a SAVEN a través de SAVEN Robotics Interface — compartiendo comunicación y coordinando tareas comunes bajo supervisión humana.",
    "Mobile robots": "Robots móviles",
    "Trolley robots": "Robots de carro",
    "Assistive forms": "Formas de asistencia",
    "Communicate · coordinate": "Comunicar · coordinar",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "Diagrama de arquitectura — conceptos de interoperabilidad en desarrollo, no una afirmación de flotas operativas ni productos comerciales.",
  },
  de: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "Die gemeinsame Schnittstellenschicht, die vielfältige Roboter und Geräte mit SAVEN verbindet — damit sie kommunizieren, gemeinsame Aufgaben koordinieren und unter menschlichem Befehl bleiben können.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "Das SAVEN Robotics Interface ist ein wichtiger Teil der SAVEN-Systemarchitektur: ein gemeinsamer Kommunikations- und Steuerungspfad zwischen SAVEN und den vielen Arten von Robotern und Geräten, die zusammenarbeiten können.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "Unterschiedliche Plattformen — Manipulatoren, mobile und Wagenroboter, assistive Formen und Sensoren — sollen keine getrennten Steuerungsinseln werden. Über das Robotics Interface teilen sie unter SAVEN ein Steuerungs- und Kommunikationssystem, sodass gemeinsame Aufgaben als koordinierte Arbeit geplant, geleitet und überwacht werden können.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "Menschen bleiben in der Autorität. Das Interface hält Missionen, Grenzen und Maschinenzustand sichtbar, damit KI und Robotik Werkzeuge für menschliche Fürsorge bleiben — keine undurchsichtige Automatisierung.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "Eine gemeinsame Schnittstellenschicht, damit vielfältige Roboter und Geräte unter SAVEN kommunizieren und koordinieren können.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "Gemeinsame Aufgaben über verschiedene Maschinen hinweg brauchen einen steuerbaren Kommunikationspfad — mit Menschen weiterhin am Steuer.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "In Entwicklung. Architektur für Interoperabilität und Aufsicht — kein kommerzielles Steuerungsprodukt.",
    "Role in the SAVEN system": "Rolle im SAVEN-System",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN steht im Zentrum von Analyse, Rollen, Ereignissen und Aktionen. Das Robotics Interface ist die Schicht, über die Exekutivgeräte verbunden werden — Befehle, Telemetrie und Aufgabenkontext austauschen, damit heterogene Maschinen an gemeinsamer Arbeit teilnehmen können.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "Interoperabilität ist der Punkt: eine Architektur für viele Gerätearten, damit fürsorgeorientierte physische Unterstützung wachsen kann, ohne für jeden Formfaktor einen eigenen Stack zu erfinden.",
    "Device diversity (architecture concepts)":
      "Gerätevielfalt (Architekturkonzepte)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "Das Interface ist um Klassen von Exekutivgeräten als Architekturkonzepte herum gestaltet — nicht Produkt-SKUs oder Einsatzbehauptungen:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "Manipulatoren — sorgfältiges Erreichen, Halten und Übergeben unter sichtbaren Grenzen",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "Mobile und Wagenroboter — Bewegung durch gemeinsame Räume mit steuerbaren Pfaden",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "Assistive Formen — physische Unterstützungsformen, die Menschen neben Pflegekräften helfen sollen",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "Sensoren und Wahrnehmungsknoten — Kontext, der für die nächste Aktion zu SAVEN zurückkehrt",
    "One control and communication system": "Ein Steuerungs- und Kommunikationssystem",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "Vielfältige Roboter und Geräte verbinden sich über das SAVEN Robotics Interface mit SAVEN — teilen Kommunikation und koordinieren gemeinsame Aufgaben unter menschlicher Aufsicht.",
    "Mobile robots": "Mobile Roboter",
    "Trolley robots": "Wagenroboter",
    "Assistive forms": "Assistive Formen",
    "Communicate · coordinate": "Kommunizieren · koordinieren",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "Architekturdiagramm — Interoperabilitätskonzepte in Entwicklung, keine Behauptung operativer Flotten oder kommerzieller Produkte.",
  },
  fr: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "La couche d’interface partagée qui relie divers robots et dispositifs à SAVEN — pour qu’ils puissent communiquer, coordonner des tâches communes et rester sous commandement humain.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface est une partie importante de l’architecture du système SAVEN : un chemin commun de communication et de contrôle entre SAVEN et les nombreux types de robots et dispositifs qui peuvent travailler ensemble.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "Différentes plateformes — manipulateurs, robots mobiles et à chariot, formes d’assistance et capteurs — ne doivent pas devenir des îlots de contrôle séparés. Via la Robotics Interface, elles partagent un seul système de contrôle et de communication sous SAVEN, afin que les tâches partagées et communes puissent être planifiées, dirigées et supervisées comme un travail coordonné.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "Les personnes restent en autorité. L’Interface maintient visibles les missions, les limites et l’état des machines afin que l’IA et la robotique restent des outils pour le soin humain — pas une automatisation opaque.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "Une couche d’interface partagée pour que divers robots et dispositifs puissent communiquer et se coordonner sous SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "Les tâches communes entre différentes machines ont besoin d’un chemin de communication gouvernable — avec les personnes toujours aux commandes.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "En développement. Architecture pour l’interopérabilité et la supervision — pas un produit commercial de contrôle.",
    "Role in the SAVEN system": "Rôle dans le système SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN est au centre de l’analyse, des rôles, des événements et des actions. La Robotics Interface est la couche par laquelle les dispositifs exécutifs se connectent — échangeant commandes, télémétrie et contexte de tâche pour que des machines hétérogènes puissent participer à un travail partagé.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "L’interopérabilité est l’essentiel : une architecture pour de nombreux types de dispositifs, afin que l’assistance physique orientée vers le soin puisse grandir sans inventer une pile séparée pour chaque facteur de forme.",
    "Device diversity (architecture concepts)":
      "Diversité des dispositifs (concepts d’architecture)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "L’Interface est conçue autour de classes de dispositifs exécutifs comme concepts d’architecture — pas des SKU produits ni des affirmations de déploiement :",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "Manipulateurs — atteindre, tenir et transmettre avec soin sous des limites visibles",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "Robots mobiles et à chariot — mouvement dans des espaces partagés avec des trajets gouvernables",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "Formes d’assistance — formes de soutien physique destinées à aider les personnes aux côtés des soignants",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "Capteurs et nœuds de perception — contexte qui revient dans SAVEN pour l’action suivante",
    "One control and communication system": "Un système de contrôle et de communication",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "Divers robots et dispositifs se connectent à SAVEN via SAVEN Robotics Interface — partageant la communication et coordonnant des tâches communes sous supervision humaine.",
    "Mobile robots": "Robots mobiles",
    "Trolley robots": "Robots à chariot",
    "Assistive forms": "Formes d’assistance",
    "Communicate · coordinate": "Communiquer · coordonner",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "Diagramme d’architecture — concepts d’interopérabilité en développement, pas une affirmation de flottes opérationnelles ni de produits commerciaux.",
  },
  ja: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "多様なロボットや機器を SAVEN につなぐ共有インターフェース層 — 通信し、共通タスクを協調し、人の指揮下に留まるために。",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface は SAVEN システムアーキテクチャの重要な部分です。SAVEN と、協働しうる多種のロボット・機器をつなぐ共通の通信・制御経路です。",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "マニピュレータ、移動・台車ロボット、支援形態、センサなど異なるプラットフォームが、別々の制御の島になってはなりません。Robotics Interface を通じて SAVEN の下で一つの制御・通信システムを共有し、共有・共通タスクを協調作業として計画・指示・監督できます。",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "人は権限を保ちます。Interface はミッション、限界、機械の状態を可視化し、AI とロボティクスが人間のケアのための道具であり続け、不透明な自動化にならないようにします。",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "多様なロボットや機器が SAVEN の下で通信・協調できる共有インターフェース層。",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "異なる機械にまたがる共通タスクには、人が指揮を保ったまま、一つの統治可能な通信経路が必要です。",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "開発中。相互運用性と監督のためのアーキテクチャ — 商用制御製品ではありません。",
    "Role in the SAVEN system": "SAVEN システムにおける役割",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN は分析・役割・イベント・行動の中心にあります。Robotics Interface は実行デバイスが接続する層であり、コマンド・テレメトリ・タスク文脈を交換し、異種の機械が共有作業に参加できるようにします。",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "相互運用性が要点です。多くの機器種に一つのアーキテクチャを用意し、ケア志向の物理支援が、形状ごとに別スタックを発明せずに成長できるようにします。",
    "Device diversity (architecture concepts)": "機器の多様性（アーキテクチャ概念）",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "Interface は、製品 SKU や展開主張ではなく、アーキテクチャ概念としての実行デバイスクラスを中心に設計されています：",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "マニピュレータ — 見える限界の下での慎重な到達・保持・受け渡し",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "移動・台車ロボット — 統治可能な経路で共有空間を移動",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "支援形態 — 介護者のそばで人を助けるための物理的支援のかたち",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "センサと知覚ノード — 次の行動のために SAVEN へ戻る文脈",
    "One control and communication system": "一つの制御・通信システム",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "多様なロボットや機器は SAVEN Robotics Interface を通じて SAVEN に接続し、通信を共有し、人の監督の下で共通タスクを協調します。",
    "Mobile robots": "移動ロボット",
    "Trolley robots": "台車ロボット",
    "Assistive forms": "支援形態",
    "Communicate · coordinate": "通信 · 協調",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "アーキテクチャ図 — 開発中の相互運用性の概念であり、運用艦隊や商用製品の主張ではありません。",
  },
  "zh-cn": {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "连接多种机器人与设备到 SAVEN 的共享接口层——使它们能够通信、协调共同任务，并保持在人的指挥之下。",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface 是 SAVEN 系统架构的重要组成部分：在 SAVEN 与可能协同工作的多种机器人与设备之间，提供共同的通信与控制通路。",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "不同平台——机械臂、移动与台车机器人、辅助形态与传感器——不应成为彼此隔离的控制孤岛。通过 Robotics Interface，它们在 SAVEN 下共享一套控制与通信系统，使共享与共同任务可作为协调工作加以规划、指挥与监督。",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "人保持权威。接口让任务、边界与机器状态保持可见，使 AI 与机器人技术继续作为人类照护的工具——而非不透明的自动化。",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "共享接口层，使多样的机器人与设备能在 SAVEN 下通信与协调。",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "跨不同机器的共同任务需要一条可治理的通信通路——人仍在指挥。",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "开发中。面向互操作与监督的架构——并非商业控制产品。",
    "Role in the SAVEN system": "在 SAVEN 系统中的角色",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN 处于分析、角色、事件与行动的中心。Robotics Interface 是执行设备连接的层——交换指令、遥测与任务上下文，使异构机器能参与共享工作。",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "互操作是关键：面向多种设备类型的一套架构，使以照护为导向的物理协助可以成长，而无需为每种外形另造一套堆栈。",
    "Device diversity (architecture concepts)": "设备多样性（架构概念）",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "接口围绕作为架构概念的执行设备类别设计——不是产品 SKU 或部署声明：",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "机械臂——在可见边界下谨慎地伸取、握持与交接",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "移动与台车机器人——沿可治理路径在共享空间中移动",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "辅助形态——旨在在照护者身边帮助人的物理支撑形态",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "传感器与感知节点——返回 SAVEN 以支持下一步行动的上下文",
    "One control and communication system": "一套控制与通信系统",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "多样的机器人与设备通过 SAVEN Robotics Interface 连接到 SAVEN——共享通信，并在人的监督下协调共同任务。",
    "Mobile robots": "移动机器人",
    "Trolley robots": "台车机器人",
    "Assistive forms": "辅助形态",
    "Communicate · coordinate": "通信 · 协调",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "架构图——开发中的互操作概念，并非运营机队或商业产品声明。",
  },
  ar: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "طبقة الواجهة المشتركة التي تربط روبوتات وأجهزة متنوعة بـ SAVEN — حتى تتواصل وتنسّق المهام المشتركة وتبقى تحت القيادة البشرية.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface جزء مهم من بنية نظام SAVEN: مسار مشترك للاتصال والتحكم بين SAVEN وأنواع كثيرة من الروبوتات والأجهزة التي قد تعمل معًا.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "المنصات المختلفة — المناولات والروبوتات المتنقلة وعربات النقل وأشكال المساعدة والمستشعرات — يجب ألا تصبح جزر تحكم منفصلة. عبر Robotics Interface تتشارك نظام تحكم واتصال واحدًا تحت SAVEN، فتُخطَّط المهام المشتركة وتُوجَّه وتُراقَب كعمل منسّق.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "يبقى الناس في السلطة. تحافظ الواجهة على وضوح المهام والحدود وحالة الآلة حتى تبقى الذكاء الاصطناعي والروبوتات أدوات للرعاية البشرية — لا أتمتة غامضة.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "طبقة واجهة مشتركة لتتواصل الروبوتات والأجهزة المتنوعة وتنسّق تحت SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "المهام المشتركة عبر آلات مختلفة تحتاج مسار اتصال قابل للحوكمة — مع بقاء الناس في القيادة.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "قيد التطوير. بنية للتشغيل البيني والإشراف — وليست منتج تحكم تجاريًا.",
    "Role in the SAVEN system": "الدور في نظام SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "يقع SAVEN في مركز التحليل والأدوار والأحداث والأفعال. Robotics Interface هي الطبقة التي تتصل عبرها الأجهزة التنفيذية — متبادلة الأوامر والقياس عن بُعد وسياق المهام حتى تشارك آلات متباينة في عمل مشترك.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "التشغيل البيني هو الجوهر: بنية واحدة لأنواع أجهزة كثيرة، حتى تنمو المساعدة المادية الموجهة للرعاية دون اختراع حزمة منفصلة لكل شكل.",
    "Device diversity (architecture concepts)": "تنوع الأجهزة (مفاهيم معمارية)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "صُممت الواجهة حول فئات أجهزة تنفيذية كمفاهيم معمارية — وليست وحدات تخزين للمنتجات أو ادعاءات نشر:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "المناولات — وصول وإمساك وتسليم حذر ضمن حدود ظاهرة",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "روبوتات متنقلة وعربات — حركة في فضاءات مشتركة بمسارات قابلة للحوكمة",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "أشكال مساعدة — أشكال دعم مادي لمساعدة الناس إلى جانب مقدمي الرعاية",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "المستشعرات وعقد الإدراك — سياق يعود إلى SAVEN للفعل التالي",
    "One control and communication system": "نظام واحد للتحكم والاتصال",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "تتصل روبوتات وأجهزة متنوعة بـ SAVEN عبر SAVEN Robotics Interface — تشارك الاتصال وتنسّق المهام المشتركة تحت إشراف بشري.",
    "Mobile robots": "روبوتات متنقلة",
    "Trolley robots": "روبوتات عربة",
    "Assistive forms": "أشكال مساعدة",
    "Communicate · coordinate": "تواصل · تنسيق",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "مخطط معماري — مفاهيم تشغيل بيني قيد التطوير، وليست ادعاءً لأساطيل تشغيلية أو منتجات تجارية.",
  },
  he: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "שכבת הממשק המשותפת שמחברת רובוטים ומכשירים מגוונים ל־SAVEN — כדי שיוכלו לתקשר, לתאם משימות משותפות ולהישאר תחת פיקוד אנושי.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface הוא חלק חשוב בארכיטקטורת מערכת SAVEN: נתיב תקשורת ובקרה משותף בין SAVEN לבין סוגי רובוטים ומכשירים רבים שעשויים לעבוד יחד.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "פלטפורמות שונות — מניפולטורים, רובוטים ניידים ועגלות, צורות סיוע וחיישנים — לא צריכות להפוך לאיי בקרה נפרדים. דרך Robotics Interface הן חולקות מערכת בקרה ותקשורת אחת תחת SAVEN, כך שמשימות משותפות וכלליות ניתן לתכנן, לכוון ולפקח כעבודה מתואמת.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "בני אדם נשארים בסמכות. הממשק שומר על משימות, גבולות ומצב מכונה גלויים כדי שבינה מלאכותית ורובוטיקה יישארו כלים לטיפול אנושי — לא אוטומציה אטומה.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "שכבת ממשק משותפת כדי שרובוטים ומכשירים מגוונים יוכלו לתקשר ולתאם תחת SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "משימות משותפות בין מכונות שונות דורשות נתיב תקשורת ניתן לשליטה — עם אנשים שעדיין בפיקוד.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "בפיתוח. ארכיטקטורה לבין־תאימות ופיקוח — לא מוצר בקרה מסחרי.",
    "Role in the SAVEN system": "תפקיד במערכת SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN נמצא במרכז הניתוח, התפקידים, האירועים והפעולות. Robotics Interface הוא השכבה שדרכה מתחברים מכשירים מבצעיים — מחליפים פקודות, טלמטריה והקשר משימה כדי שמכונות הטרוגניות יוכלו להשתתף בעבודה משותפת.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "בין־תאימות היא הנקודה: ארכיטקטורה אחת לסוגי מכשירים רבים, כדי שסיוע פיזי מוכוון טיפול יוכל לצמוח בלי להמציא מחסנית נפרדת לכל צורה.",
    "Device diversity (architecture concepts)": "גיוון מכשירים (מושגי ארכיטקטורה)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "הממשק מעוצב סביב מחלקות של מכשירים מבצעיים כמושגי ארכיטקטורה — לא מק\"טים של מוצר או טענות פריסה:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "מניפולטורים — הגעה, החזקה והעברה זהירה תחת גבולות גלויים",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "רובוטים ניידים ועגלות — תנועה במרחבים משותפים עם נתיבים ניתנים לשליטה",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "צורות סיוע — צורות תמיכה פיזית שנועדו לעזור לאנשים לצד מטפלים",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "חיישנים וצמתי תפיסה — הקשר שחוזר ל־SAVEN לפעולה הבאה",
    "One control and communication system": "מערכת בקרה ותקשורת אחת",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "רובוטים ומכשירים מגוונים מתחברים ל־SAVEN דרך SAVEN Robotics Interface — חולקים תקשורת ומתאמים משימות משותפות תחת פיקוח אנושי.",
    "Mobile robots": "רובוטים ניידים",
    "Trolley robots": "רובוטי עגלה",
    "Assistive forms": "צורות סיוע",
    "Communicate · coordinate": "תקשורת · תיאום",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "תרשים ארכיטקטורה — מושגי בין־תאימות בפיתוח, לא טענה על ציים תפעוליים או מוצרים מסחריים.",
  },
  ru: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "Общий слой интерфейса, который соединяет разные роботы и устройства с SAVEN — чтобы они могли обмениваться данными, координировать общие задачи и оставаться под человеческим управлением.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface — важная часть архитектуры системы SAVEN: общий путь связи и управления между SAVEN и множеством роботов и устройств, которые могут работать вместе.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "Разные платформы — манипуляторы, мобильные и тележечные роботы, вспомогательные формы и датчики — не должны становиться отдельными островами управления. Через Robotics Interface они разделяют одну систему управления и связи под SAVEN, чтобы общие задачи планировались, направлялись и контролировались как согласованная работа.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "Люди остаются в полномочиях. Интерфейс сохраняет видимыми миссии, пределы и состояние машин, чтобы ИИ и робототехника оставались инструментами человеческой заботы — а не непрозрачной автоматизацией.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "Общий слой интерфейса, чтобы разные роботы и устройства могли общаться и координироваться под SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "Общим задачам на разных машинах нужен один управляемый канал связи — при этом люди остаются у управления.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "В разработке. Архитектура для совместимости и надзора — не коммерческий продукт управления.",
    "Role in the SAVEN system": "Роль в системе SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN находится в центре анализа, ролей, событий и действий. Robotics Interface — слой, через который подключаются исполнительные устройства: обмен командами, телеметрией и контекстом задач, чтобы разнородные машины участвовали в общей работе.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "Совместимость — суть: одна архитектура для многих типов устройств, чтобы физическая помощь, ориентированная на заботу, могла расти без отдельного стека под каждую форму.",
    "Device diversity (architecture concepts)": "Разнообразие устройств (архитектурные понятия)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "Интерфейс спроектирован вокруг классов исполнительных устройств как архитектурных понятий — не SKU продуктов и не заявлений о развёртывании:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "Манипуляторы — осторожное доставание, удержание и передача в видимых пределах",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "Мобильные и тележечные роботы — движение в общих пространствах по управляемым путям",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "Вспомогательные формы — формы физической поддержки, чтобы помогать людям рядом с опекунами",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "Датчики и узлы восприятия — контекст, возвращающийся в SAVEN для следующего действия",
    "One control and communication system": "Одна система управления и связи",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "Разные роботы и устройства подключаются к SAVEN через SAVEN Robotics Interface — делятся связью и координируют общие задачи под человеческим надзором.",
    "Mobile robots": "Мобильные роботы",
    "Trolley robots": "Тележечные роботы",
    "Assistive forms": "Вспомогательные формы",
    "Communicate · coordinate": "Связь · координация",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "Архитектурная схема — концепции совместимости в разработке, не заявление об операционных флотах или коммерческих продуктах.",
  },
  uk: {
    "The shared interface layer that connects diverse robots and devices to SAVEN — so they can communicate, coordinate common tasks, and stay under human command.":
      "Спільний шар інтерфейсу, що з’єднує різні роботи й пристрої з SAVEN — щоб вони могли спілкуватися, координувати спільні завдання й залишатися під людським командуванням.",
    "SAVEN Robotics Interface is an important part of the SAVEN system architecture: a common communication and control path between SAVEN and the many kinds of robots and devices that may work together.":
      "SAVEN Robotics Interface — важлива частина архітектури системи SAVEN: спільний шлях зв’язку й керування між SAVEN і багатьма видами роботів і пристроїв, що можуть працювати разом.",
    "Different platforms — manipulators, mobile and trolley robots, assistive forms, and sensors — should not become separate islands of control. Through the Robotics Interface they share one control and communication system under SAVEN, so shared and common tasks can be planned, directed, and supervised as coordinated work.":
      "Різні платформи — маніпулятори, мобільні й візкові роботи, допоміжні форми та сенсори — не повинні ставати окремими островами керування. Через Robotics Interface вони ділять одну систему керування й зв’язку під SAVEN, тож спільні завдання можна планувати, спрямовувати й наглядати як узгоджену роботу.",
    "People remain in authority. The Interface keeps missions, limits, and machine state visible so AI and robotics stay tools for human care — not opaque automation.":
      "Люди залишаються в повноваженнях. Інтерфейс тримає видимими місії, межі та стан машин, щоб ШІ й робототехніка лишалися інструментами людської турботи — а не непрозорою автоматизацією.",
    "A shared interface layer so diverse robots and devices can communicate and coordinate under SAVEN.":
      "Спільний шар інтерфейсу, щоб різні роботи й пристрої могли спілкуватися й координуватися під SAVEN.",
    "Common tasks across different machines need one governable communication path — with people still in command.":
      "Спільним завданням на різних машинах потрібен один керований шлях зв’язку — з людьми, що досі командують.",
    "In Development. Architecture for interoperability and oversight — not a commercial control product.":
      "У розробці. Архітектура для сумісності й нагляду — не комерційний продукт керування.",
    "Role in the SAVEN system": "Роль у системі SAVEN",
    "SAVEN sits at the center of analysis, roles, events, and actions. The Robotics Interface is the layer through which executive devices connect — exchanging commands, telemetry, and task context so heterogeneous machines can participate in shared work.":
      "SAVEN у центрі аналізу, ролей, подій і дій. Robotics Interface — шар, через який підключаються виконавчі пристрої: обмін командами, телеметрією й контекстом завдань, щоб різнорідні машини брали участь у спільній роботі.",
    "Interoperability is the point: one architecture for many device kinds, so care-oriented physical assistance can grow without inventing a separate stack for every form factor.":
      "Сумісність — суть: одна архітектура для багатьох типів пристроїв, щоб фізична допомога, орієнтована на турботу, могла зростати без окремого стека під кожну форму.",
    "Device diversity (architecture concepts)": "Різноманітність пристроїв (архітектурні поняття)",
    "The Interface is designed around classes of executive devices as architecture concepts — not product SKUs or deployment claims:":
      "Інтерфейс спроєктовано навколо класів виконавчих пристроїв як архітектурних понять — не SKU продуктів і не заяв про розгортання:",
    "Manipulators — careful reach, hold, and handoff under visible limits":
      "Маніпулятори — обережне діставання, утримання й передача в видимих межах",
    "Mobile and trolley robots — movement through shared spaces with governable paths":
      "Мобільні й візкові роботи — рух у спільних просторах керованими шляхами",
    "Assistive forms — physical support shapes meant to help people beside caregivers":
      "Допоміжні форми — форми фізичної підтримки, щоб допомагати людям поруч із опікунами",
    "Sensors and perception nodes — context that returns into SAVEN for the next action":
      "Сенсори й вузли сприйняття — контекст, що повертається в SAVEN для наступної дії",
    "One control and communication system": "Одна система керування й зв’язку",
    "Diverse robots and devices connect to SAVEN through the SAVEN Robotics Interface — sharing communication and coordinating common tasks under human oversight.":
      "Різні роботи й пристрої підключаються до SAVEN через SAVEN Robotics Interface — ділять зв’язок і координують спільні завдання під людським наглядом.",
    "Mobile robots": "Мобільні роботи",
    "Trolley robots": "Візкові роботи",
    "Assistive forms": "Допоміжні форми",
    "Communicate · coordinate": "Зв’язок · координація",
    "Architecture diagram — interoperability concepts in development, not a claim of operational fleets or commercial products.":
      "Архітектурна схема — концепції сумісності в розробці, не заява про операційні флоти чи комерційні продукти.",
  },
};

function patchFile(locale) {
  const filePath = path.join(dictDir, `${locale}.ts`);
  let source = fs.readFileSync(filePath, "utf8");
  const entries = byLocale[locale];
  if (!entries) throw new Error(`Missing locale ${locale}`);

  const additions = [];
  for (const [en, tr] of Object.entries(entries)) {
    const keyLiteral = JSON.stringify(en);
    if (source.includes(keyLiteral)) continue;
    additions.push(`  ${keyLiteral}: ${JSON.stringify(tr)},`);
  }

  if (additions.length === 0) {
    console.log(`${locale}: nothing to add`);
    return;
  }

  const insertAt = source.lastIndexOf("\n};");
  if (insertAt < 0) throw new Error(`Cannot find end of dictionary in ${locale}`);
  source =
    source.slice(0, insertAt) +
    "\n" +
    additions.join("\n") +
    source.slice(insertAt);
  fs.writeFileSync(filePath, source);
  console.log(`${locale}: added ${additions.length} keys`);
}

for (const locale of Object.keys(byLocale)) {
  patchFile(locale);
}
