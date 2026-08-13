import type { ContentLocale } from "@/i18n/types";

type Dict = Record<string, string>;

const ru: Dict = {
  Trust: "Доверие",
  "Responsible Development": "Ответственная разработка",
  Architecture: "Архитектура",
  "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
    "Робототехническая помощь должна поддерживать человеческую автономию, достоинство и контроль. Эти принципы направляют подход SAVEN к дизайну, безопасности, конфиденциальности и валидации — без заявления о завершённой сертификации.",
  "Ethics and responsible use atmosphere": "Атмосфера этики и ответственного использования",
  "Human-centered": "Вокруг человека",
  "Assistance should extend human support — not remove the human relationship.":
    "Помощь должна расширять человеческую поддержку, а не убирать человеческие отношения.",
  "Layered safety": "Многослойная безопасность",
  "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
    "Физическое взаимодействие требует безопасности на уровне оборудования, ПО, сенсорики, процедур и надзора.",
  "Continuous validation": "Непрерывная валидация",
  "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
    "Возможности следует оценивать относительно определённых задач и сред до более широкого развёртывания.",
  "Human-Centered Design": "Дизайн вокруг человека",
  "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
    "Робототехническая помощь должна поддерживать человеческую автономию, достоинство и контроль. Люди должны сохранять возможность понимать, прерывать и направлять помощь.",
  Safety: "Безопасность",
  "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
    "Физическое взаимодействие требует многослойной безопасности: оборудование, ПО, сенсорика, процедуры и человеческий надзор. Безопасность — часть архитектуры, а не дополнение потом.",
  Privacy: "Конфиденциальность",
  "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
    "Персональные данные следует собирать и обрабатывать только там, где это уместно, с подходящей прозрачностью и контролем. Практики данных сайта отделены от будущих практик продукта.",
  Security: "Безопасность данных",
  "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
    "Подключённые робототехнические системы требуют соответствующих технических и организационных мер. Ни одна система не может заявлять нулевой риск.",
  "Human Oversight": "Человеческий надзор",
  "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
    "Применения с повышенным риском должны сохранять уместное участие человека и возможность вмешательства.",
  Accessibility: "Доступность",
  "Interfaces should be designed for the abilities and limitations of the intended users.":
    "Интерфейсы следует проектировать с учётом способностей и ограничений предполагаемых пользователей.",
  "Continuous Validation": "Непрерывная валидация",
  "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
    "Возможности следует оценивать относительно определённых задач, сред и условий эксплуатации до более широкого развёртывания.",
  "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
    "Это принципы разработки. Это не сертификация, не юридическое заключение и не заявление, что каждая возможность уже развёрнута.",
  Disclaimer: "Отказ от ответственности",
  "Privacy Policy": "Политика конфиденциальности",
};

export const responsibleDevelopmentDictionaries: Record<
  Exclude<ContentLocale, "en">,
  Dict
> = {
  ru,
  es: {
    ...Object.fromEntries(
      Object.entries({
        Trust: "Confianza",
        "Responsible Development": "Desarrollo responsable",
        Architecture: "Arquitectura",
        Safety: "Seguridad",
        Privacy: "Privacidad",
        Security: "Seguridad de la información",
        "Human Oversight": "Supervisión humana",
        Accessibility: "Accesibilidad",
        Disclaimer: "Descargo de responsabilidad",
        "Privacy Policy": "Política de privacidad",
        "Human-centered": "Centrado en las personas",
        "Layered safety": "Seguridad por capas",
        "Continuous validation": "Validación continua",
        "Human-Centered Design": "Diseño centrado en las personas",
        "Continuous Validation": "Validación continua",
      }),
    ),
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "La asistencia robótica debe apoyar la autonomía, la dignidad y el control humanos. Estos principios guían cómo SAVEN aborda el diseño, la seguridad, la privacidad y la validación, sin afirmar una certificación completada.",
    "Ethics and responsible use atmosphere":
      "Atmósfera de ética y uso responsable",
    "Assistance should extend human support — not remove the human relationship.":
      "La asistencia debe ampliar el apoyo humano, no eliminar la relación humana.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "La interacción física requiere seguridad en hardware, software, sensores, procedimientos y supervisión.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "Las capacidades deben evaluarse frente a tareas y entornos definidos antes de un despliegue más amplio.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "La asistencia robótica debe apoyar la autonomía, la dignidad y el control humanos. Las personas deben poder comprender, interrumpir y dirigir la asistencia.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "La interacción física requiere seguridad por capas en hardware, software, sensores, procedimientos y supervisión humana. La seguridad forma parte de la arquitectura, no un añadido posterior.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "La información personal debe recogerse y tratarse solo cuando proceda y con transparencia y controles adecuados. Las prácticas de datos del sitio son distintas de las prácticas futuras del producto.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "Los sistemas robóticos conectados requieren salvaguardas técnicas y organizativas adecuadas. Ningún sistema puede afirmar riesgo cero.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "Las aplicaciones de mayor riesgo deben mantener una participación humana adecuada y capacidad de intervención.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "Las interfaces deben diseñarse para las capacidades y limitaciones de los usuarios previstos.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "Las capacidades deben evaluarse frente a tareas, entornos y condiciones de operación definidas antes de un despliegue más amplio.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "Son principios de desarrollo. No son una certificación, un dictamen jurídico ni la afirmación de que cada capacidad ya está desplegada.",
  },
  de: {
    Trust: "Vertrauen",
    "Responsible Development": "Verantwortungsvolle Entwicklung",
    Architecture: "Architektur",
    Safety: "Sicherheit",
    Privacy: "Datenschutz",
    Security: "Sicherheit",
    "Human Oversight": "Menschliche Aufsicht",
    Accessibility: "Barrierefreiheit",
    Disclaimer: "Haftungsausschluss",
    "Privacy Policy": "Datenschutzrichtlinie",
    "Human-centered": "Menschzentriert",
    "Layered safety": "Mehrschichtige Sicherheit",
    "Continuous validation": "Kontinuierliche Validierung",
    "Human-Centered Design": "Menschzentriertes Design",
    "Continuous Validation": "Kontinuierliche Validierung",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "Robotische Unterstützung soll menschliche Autonomie, Würde und Kontrolle stützen. Diese Prinzipien leiten SAVEN bei Design, Sicherheit, Datenschutz und Validierung — ohne abgeschlossene Zertifizierung zu behaupten.",
    "Ethics and responsible use atmosphere":
      "Atmosphäre von Ethik und verantwortungsvoller Nutzung",
    "Assistance should extend human support — not remove the human relationship.":
      "Unterstützung soll menschliche Hilfe erweitern — nicht die menschliche Beziehung ersetzen.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "Physische Interaktion erfordert Sicherheit in Hardware, Software, Sensorik, Verfahren und Aufsicht.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "Fähigkeiten sollten gegenüber definierten Aufgaben und Umgebungen bewertet werden, bevor sie breiter eingesetzt werden.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "Robotische Unterstützung soll menschliche Autonomie, Würde und Kontrolle stützen. Menschen müssen Unterstützung verstehen, unterbrechen und lenken können.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "Physische Interaktion erfordert mehrschichtige Sicherheit in Hardware, Software, Sensorik, Verfahren und menschlicher Aufsicht. Sicherheit ist Teil der Architektur, kein Nachgedanke.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "Personenbezogene Daten sollten nur dort erhoben und verarbeitet werden, wo es angemessen ist, mit geeigneter Transparenz und Kontrolle. Website-Datenpraktiken sind von künftigen Produktdatenpraktiken getrennt.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "Vernetzte Robotersysteme erfordern angemessene technische und organisatorische Schutzmaßnahmen. Kein System kann Nullrisiko behaupten.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "Anwendungen mit höherem Risiko sollten angemessene menschliche Beteiligung und Eingriffsmöglichkeit behalten.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "Schnittstellen sollten für die Fähigkeiten und Grenzen der vorgesehenen Nutzer gestaltet werden.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "Fähigkeiten sollten gegenüber definierten Aufgaben, Umgebungen und Betriebsbedingungen bewertet werden, bevor sie breiter eingesetzt werden.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "Das sind Entwicklungsprinzipien. Sie sind keine Zertifizierung, kein Rechtsgutachten und keine Behauptung, dass jede Fähigkeit bereits eingesetzt ist.",
  },
  fr: {
    Trust: "Confiance",
    "Responsible Development": "Développement responsable",
    Architecture: "Architecture",
    Safety: "Sécurité",
    Privacy: "Confidentialité",
    Security: "Sécurité",
    "Human Oversight": "Supervision humaine",
    Accessibility: "Accessibilité",
    Disclaimer: "Avertissement",
    "Privacy Policy": "Politique de confidentialité",
    "Human-centered": "Centré sur l’humain",
    "Layered safety": "Sécurité en couches",
    "Continuous validation": "Validation continue",
    "Human-Centered Design": "Conception centrée sur l’humain",
    "Continuous Validation": "Validation continue",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "L’assistance robotique doit soutenir l’autonomie, la dignité et le contrôle humains. Ces principes orientent l’approche de SAVEN en matière de conception, de sécurité, de confidentialité et de validation — sans revendiquer une certification achevée.",
    "Ethics and responsible use atmosphere":
      "Atmosphère d’éthique et d’usage responsable",
    "Assistance should extend human support — not remove the human relationship.":
      "L’assistance doit étendre le soutien humain — non supprimer la relation humaine.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "L’interaction physique exige de la sécurité dans le matériel, le logiciel, la détection, les procédures et la supervision.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "Les capacités doivent être évaluées par rapport à des tâches et des environnements définis avant un déploiement plus large.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "L’assistance robotique doit soutenir l’autonomie, la dignité et le contrôle humains. Les personnes doivent pouvoir comprendre, interrompre et diriger l’assistance.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "L’interaction physique exige une sécurité en couches dans le matériel, le logiciel, la détection, les procédures et la supervision humaine. La sécurité fait partie de l’architecture, ce n’est pas un ajout ultérieur.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "Les informations personnelles ne doivent être collectées et traitées que lorsque c’est approprié, avec une transparence et des contrôles adaptés. Les pratiques de données du site sont distinctes des pratiques futures du produit.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "Les systèmes robotiques connectés exigent des garanties techniques et organisationnelles appropriées. Aucun système ne peut affirmer un risque nul.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "Les applications à risque plus élevé doivent conserver une implication humaine appropriée et une capacité d’intervention.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "Les interfaces doivent être conçues pour les capacités et les limites des utilisateurs visés.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "Les capacités doivent être évaluées par rapport à des tâches, des environnements et des conditions d’exploitation définis avant un déploiement plus large.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "Ce sont des principes de développement. Ce n’est ni une certification, ni un avis juridique, ni l’affirmation que chaque capacité est déjà déployée.",
  },
  ja: {
    Trust: "信頼",
    "Responsible Development": "責任ある開発",
    Architecture: "アーキテクチャ",
    Safety: "安全",
    Privacy: "プライバシー",
    Security: "セキュリティ",
    "Human Oversight": "人の監督",
    Accessibility: "アクセシビリティ",
    Disclaimer: "免責事項",
    "Privacy Policy": "プライバシーポリシー",
    "Human-centered": "人間中心",
    "Layered safety": "多層の安全",
    "Continuous validation": "継続的な検証",
    "Human-Centered Design": "人間中心設計",
    "Continuous Validation": "継続的な検証",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "ロボットによる支援は、人の自律、尊厳、制御を支えるべきです。これらの原則が、認証完了を主張せずに、SAVENの設計・安全・プライバシー・検証への取り組みを導きます。",
    "Ethics and responsible use atmosphere": "倫理と責任ある利用の雰囲気",
    "Assistance should extend human support — not remove the human relationship.":
      "支援は人の支えを広げるべきであり、人との関係を取り除くべきではありません。",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "身体的な相互作用には、ハードウェア、ソフトウェア、センシング、手順、監督にわたる安全が必要です。",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "能力は、より広い展開の前に、定義された課題と環境に照らして評価すべきです。",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "ロボットによる支援は、人の自律、尊厳、制御を支えるべきです。人は支援を理解し、中断し、方向づけできる必要があります。",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "身体的な相互作用には、ハードウェア、ソフトウェア、センシング、手順、人の監督にわたる多層の安全が必要です。安全は後付けではなく、アーキテクチャの一部です。",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "個人情報は適切な場合にのみ、十分な透明性と管理のもとで収集・処理すべきです。ウェブサイトのデータ実務は将来の製品データ実務とは別です。",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "接続されたロボットシステムには適切な技術的・組織的保護が必要です。リスクゼロを主張できるシステムはありません。",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "リスクの高い応用は、適切な人の関与と介入能力を維持すべきです。",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "インターフェースは、想定利用者の能力と制約に合わせて設計すべきです。",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "能力は、より広い展開の前に、定義された課題、環境、運用条件に照らして評価すべきです。",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "これらは開発の原則です。認証でも法的意見でもなく、すべての能力がすでに展開されているという主張でもありません。",
  },
  "zh-cn": {
    Trust: "信任",
    "Responsible Development": "负责任的开发",
    Architecture: "架构",
    Safety: "安全",
    Privacy: "隐私",
    Security: "安全",
    "Human Oversight": "人工监督",
    Accessibility: "无障碍",
    Disclaimer: "免责声明",
    "Privacy Policy": "隐私政策",
    "Human-centered": "以人为中心",
    "Layered safety": "分层安全",
    "Continuous validation": "持续验证",
    "Human-Centered Design": "以人为中心的设计",
    "Continuous Validation": "持续验证",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "机器人协助应支持人的自主、尊严与控制。这些原则指导 SAVEN 对待设计、安全、隐私与验证的方式——并不声称已完成认证。",
    "Ethics and responsible use atmosphere": "伦理与负责任使用的氛围",
    "Assistance should extend human support — not remove the human relationship.":
      "协助应扩展人的支持，而不是移除人的关系。",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "身体交互需要覆盖硬件、软件、传感、程序与监督的安全。",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "能力应在更广泛部署之前，对照明确的任务与环境进行评估。",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "机器人协助应支持人的自主、尊严与控制。人必须仍能理解、中断并引导协助。",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "身体交互需要覆盖硬件、软件、传感、程序与人工监督的分层安全。安全是架构的一部分，而不是事后补充。",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "个人信息仅应在适当情况下、并以合适的透明度和控制加以收集与处理。网站数据做法与未来产品数据做法分开。",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "联网机器人系统需要适当的技术与组织保障。任何系统都不能声称零风险。",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "较高风险的应用应保持适当的人的参与和干预能力。",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "界面应按预期用户的能力与限制来设计。",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "能力应在更广泛部署之前，对照明确的任务、环境与运行条件进行评估。",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "这些是开发原则。它们不是认证、法律意见，也不是声称每项能力均已部署。",
  },
  ar: {
    Trust: "الثقة",
    "Responsible Development": "تطوير مسؤول",
    Architecture: "الهندسة",
    Safety: "السلامة",
    Privacy: "الخصوصية",
    Security: "الأمان",
    "Human Oversight": "الإشراف البشري",
    Accessibility: "إمكانية الوصول",
    Disclaimer: "إخلاء المسؤولية",
    "Privacy Policy": "سياسة الخصوصية",
    "Human-centered": "متمحور حول الإنسان",
    "Layered safety": "سلامة متعددة الطبقات",
    "Continuous validation": "تحقق مستمر",
    "Human-Centered Design": "تصميم متمحور حول الإنسان",
    "Continuous Validation": "تحقق مستمر",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "ينبغي أن تدعم المساعدة الروبوتية استقلالية الإنسان وكرامته وتحكمه. توجه هذه المبادئ مقاربة SAVEN للتصميم والسلامة والخصوصية والتحقق — دون ادعاء اعتماد مكتمل.",
    "Ethics and responsible use atmosphere": "أجواء الأخلاقيات والاستخدام المسؤول",
    "Assistance should extend human support — not remove the human relationship.":
      "ينبغي أن توسّع المساعدة الدعم البشري — لا أن تزيل العلاقة الإنسانية.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "يتطلب التفاعل الجسدي سلامة عبر العتاد والبرمجيات والاستشعار والإجراءات والإشراف.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "ينبغي تقييم القدرات إزاء مهام وبيئات محددة قبل نشر أوسع.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "ينبغي أن تدعم المساعدة الروبوتية استقلالية الإنسان وكرامته وتحكمه. يجب أن يبقى الناس قادرين على فهم المساعدة ومقاطعتها وتوجيهها.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "يتطلب التفاعل الجسدي سلامة متعددة الطبقات عبر العتاد والبرمجيات والاستشعار والإجراءات والإشراف البشري. السلامة جزء من العمارة وليست إضافة لاحقة.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "ينبغي جمع المعلومات الشخصية ومعالجتها فقط حيث يكون ذلك مناسبًا وبشفافية وضوابط ملائمة. ممارسات بيانات الموقع منفصلة عن ممارسات بيانات المنتج المستقبلية.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "تتطلب الأنظمة الروبوتية المتصلة ضمانات تقنية وتنظيمية مناسبة. لا يمكن لأي نظام ادعاء انعدام المخاطر.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "ينبغي أن تحافظ التطبيقات الأعلى مخاطر على مشاركة بشرية مناسبة وقدرة على التدخل.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "ينبغي تصميم الواجهات لقدرات وحدود المستخدمين المقصودين.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "ينبغي تقييم القدرات إزاء مهام وبيئات وظروف تشغيل محددة قبل نشر أوسع.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "هذه مبادئ تطوير. ليست اعتمادًا ولا رأيًا قانونيًا ولا ادعاءً بأن كل قدرة قد نُشرت فعلًا.",
  },
  he: {
    Trust: "אמון",
    "Responsible Development": "פיתוח אחראי",
    Architecture: "ארכיטקטורה",
    Safety: "בטיחות",
    Privacy: "פרטיות",
    Security: "אבטחה",
    "Human Oversight": "פיקוח אנושי",
    Accessibility: "נגישות",
    Disclaimer: "כתב ויתור",
    "Privacy Policy": "מדיניות פרטיות",
    "Human-centered": "ממוקד אדם",
    "Layered safety": "בטיחות רב-שכבתית",
    "Continuous validation": "תיקוף מתמשך",
    "Human-Centered Design": "עיצוב ממוקד אדם",
    "Continuous Validation": "תיקוף מתמשך",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "סיוע רובוטי צריך לתמוך באוטונומיה, בכבוד ובשליטה של האדם. עקרונות אלה מנחים את גישת SAVEN לעיצוב, בטיחות, פרטיות ותיקוף — בלי לטעון להסמכה שהושלמה.",
    "Ethics and responsible use atmosphere": "אווירת אתיקה ושימוש אחראי",
    "Assistance should extend human support — not remove the human relationship.":
      "סיוע צריך להרחיב תמיכה אנושית — לא להסיר את הקשר האנושי.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "אינטראקציה פיזית דורשת בטיחות בחומרה, בתוכנה, בחישה, בנוהלים ובפיקוח.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "יש להעריך יכולות מול משימות וסביבות מוגדרות לפני פריסה רחבה יותר.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "סיוע רובוטי צריך לתמוך באוטונומיה, בכבוד ובשליטה של האדם. אנשים חייבים להישאר מסוגלים להבין, להפסיק ולכוון סיוע.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "אינטראקציה פיזית דורשת בטיחות רב-שכבתית בחומרה, בתוכנה, בחישה, בנוהלים ובפיקוח אנושי. בטיחות היא חלק מהארכיטקטורה, לא מחשבה בדיעבד.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "מידע אישי צריך להיאסף ולעובד רק במקום המתאים ועם שקיפות ובקרות הולמות. נוהגי הנתונים של האתר נפרדים מנוהגי הנתונים העתידיים של המוצר.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "מערכות רובוטיות מחוברות דורשות אמצעי הגנה טכניים וארגוניים מתאימים. שום מערכת אינה יכולה לטעון לסיכון אפס.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "יישומים בסיכון גבוה יותר צריכים לשמור על מעורבות אנושית מתאימה ועל יכולת התערבות.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "ממשקים צריכים להיות מעוצבים ליכולות ולמגבלות של המשתמשים המיועדים.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "יש להעריך יכולות מול משימות, סביבות ותנאי הפעלה מוגדרים לפני פריסה רחבה יותר.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "אלה עקרונות פיתוח. הם אינם הסמכה, חוות דעת משפטית או טענה שכל יכולת כבר נפרסה.",
  },
  uk: {
    Trust: "Довіра",
    "Responsible Development": "Відповідальна розробка",
    Architecture: "Архітектура",
    Safety: "Безпека",
    Privacy: "Конфіденційність",
    Security: "Безпека",
    "Human Oversight": "Людський нагляд",
    Accessibility: "Доступність",
    Disclaimer: "Відмова від відповідальності",
    "Privacy Policy": "Політика конфіденційності",
    "Human-centered": "Орієнтовано на людину",
    "Layered safety": "Багатошарова безпека",
    "Continuous validation": "Безперервна валідація",
    "Human-Centered Design": "Дизайн, орієнтований на людину",
    "Continuous Validation": "Безперервна валідація",
    "Robotic assistance should support human autonomy, dignity, and control. These principles guide how SAVEN approaches design, safety, privacy, and validation — without claiming completed certification.":
      "Роботизована допомога має підтримувати людську автономію, гідність і контроль. Ці принципи спрямовують підхід SAVEN до дизайну, безпеки, конфіденційності та валідації — без заяви про завершену сертифікацію.",
    "Ethics and responsible use atmosphere":
      "Атмосфера етики та відповідального використання",
    "Assistance should extend human support — not remove the human relationship.":
      "Допомога має розширювати людську підтримку, а не прибирати людські стосунки.",
    "Physical interaction requires safety across hardware, software, sensing, procedures, and oversight.":
      "Фізична взаємодія потребує безпеки на рівні обладнання, ПЗ, сенсорики, процедур і нагляду.",
    "Capabilities should be evaluated against defined tasks and environments before broader deployment.":
      "Можливості слід оцінювати відносно визначених завдань і середовищ до ширшого розгортання.",
    "Robotic assistance should support human autonomy, dignity, and control. People must remain able to understand, interrupt, and direct assistance.":
      "Роботизована допомога має підтримувати людську автономію, гідність і контроль. Люди мають зберігати змогу розуміти, переривати й спрямовувати допомогу.",
    "Physical interaction requires layered safety across hardware, software, sensing, procedures, and human oversight. Safety is part of the architecture, not an afterthought.":
      "Фізична взаємодія потребує багатошарової безпеки: обладнання, ПЗ, сенсорика, процедури та людський нагляд. Безпека — частина архітектури, а не додаток згодом.",
    "Personal information should be collected and processed only where appropriate and with suitable transparency and controls. Website data practices are separate from future product data practices.":
      "Персональні дані слід збирати й обробляти лише там, де це доречно, з належною прозорістю та контролем. Практики даних сайту окремі від майбутніх практик продукту.",
    "Connected robotic systems require appropriate technical and organizational safeguards. No system can claim zero risk.":
      "Підключені робототехнічні системи потребують відповідних технічних і організаційних заходів. Жодна система не може заявляти нульовий ризик.",
    "Higher-risk applications should maintain appropriate human involvement and intervention capability.":
      "Застосування з вищим ризиком мають зберігати доречну участь людини та можливість втручання.",
    "Interfaces should be designed for the abilities and limitations of the intended users.":
      "Інтерфейси слід проєктувати з урахуванням здібностей і обмежень передбачуваних користувачів.",
    "Capabilities should be evaluated against defined tasks, environments, and operating conditions before broader deployment.":
      "Можливості слід оцінювати відносно визначених завдань, середовищ і умов експлуатації до ширшого розгортання.",
    "These are development principles. They are not a certification, legal opinion, or claim that every capability is already deployed.":
      "Це принципи розробки. Це не сертифікація, не юридичний висновок і не заява, що кожна можливість уже розгорнута.",
  },
};
