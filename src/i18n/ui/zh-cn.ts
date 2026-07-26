import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** Simplified Chinese UI chrome — clear, natural Mandarin Chinese. */
export const uiZhCn: UiMessages = {
  ...uiEn,
  language: "语言", menu: "菜单", close: "关闭", open: "打开", skipToContent: "跳至内容",
  nav: { home: "首页", technology: "技术", systems: "系统", applications: "应用领域", trust: "信任", research: "研究", purpose: "宗旨", foundation: "基础", labs: "实验室", investors: "投资者", signIn: "登录 / 注册" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "技术", "technology-human-data": "人的数据", "technology-human-data-model": "人的数据模型", "technology-data-infrastructure": "数据基础设施", "technology-interoperability": "互操作性", "technology-privacy": "隐私", "technology-security": "安全", "technology-artificial-intelligence": "人工智能", "technology-automation": "自动化", "technology-robotics": "机器人技术", "systems-overview": "系统", "systems-knowledge-engine": "知识引擎", "systems-ai-decision-support": "AI 决策支持", "systems-safety-layer": "安全层", "systems-communication-layer": "通信层", "systems-clinical-interfaces": "临床接口", "systems-robotics-layer": "机器人层", "systems-drone-systems": "无人机系统", "applications-overview": "应用领域", "applications-healthcare": "医疗健康", "applications-home": "家庭", "applications-hospitals": "医院", "applications-emergency": "紧急情况", "applications-industrial": "工业", "applications-government": "政府", "applications-agriculture": "农业", "applications-research-applications": "研究应用", "trust-overview": "信任", "trust-privacy": "隐私", "trust-security": "安全", "trust-safety": "保障", "trust-human-oversight": "人工监督", "trust-transparency": "透明度", "trust-ethics": "伦理与负责任使用", "trust-limitations": "局限", "research-overview": "研究", "footer-technology-overview": "概览", "footer-systems-overview": "概览", "footer-applications-overview": "概览", "footer-trust-overview": "概览", "footer-research-overview": "概览", "footer-applications-research": "研究", "footer-trust-ethics": "伦理", "footer-company-about": "关于", "footer-company-mission": "使命" , "sign-in": "登录 / 注册", "footer-company-contact": "联系", "footer-company-investors": "投资者", "footer-labs-overview": "概览", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Internal Future Lab", "footer-systems-saven-robotics-interface": "SAVEN Robotics Interface", "footer-legal-privacy-policy": "隐私政策", "footer-legal-terms-of-use": "使用条款", "footer-legal-cookie-policy": "Cookie 政策", "footer-legal-cookie-preferences": "Cookie 偏好", "footer-legal-accessibility-statement": "无障碍声明", "footer-legal-security": "安全", "footer-legal-responsible-ai": "负责任的人工智能", "footer-legal-medical-disclaimer": "医疗免责声明", "footer-legal-research-disclaimer": "研究免责声明", "footer-legal-intellectual-property": "知识产权", "footer-legal-trademark-notice": "商标声明", "footer-legal-copyright": "版权声明", "footer-legal-data-rights": "数据权利", "footer-legal-regional-privacy-rights": "地区隐私权", "footer-legal-do-not-sell-or-share": "请勿出售或共享", "footer-legal-legal-notices": "法律声明"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "切换到浅色主题", themeToDark: "切换到深色主题", signIn: "登录 / 注册", admin: "管理", technology: "技术", systems: "系统", applications: "应用领域", trust: "信任", research: "研究", about: "关于 SAVEN Core", resources: "资源", company: "公司", legal: "法律信息", contact: "联系我们", plannedNote: "", comingSoon: "", copyright: "© 2026 SAVEN Core. 保留所有权利。", copyrightShort: "© SAVEN Core", privacy: "隐私", terms: "条款", cookies: "Cookie", theme: "主题", themeLight: "浅色", themeDark: "深色", version: "版本", tagline: "人类数据。\n互联系统。\n负责任的技术。" },
  social: { ...uiEn.social, navLabel: "社交网络", notConfigured: "链接尚未配置" },
  admin: { ...uiEn.admin, brandTitle: "SAVEN Admin", navLabel: "管理导航", statusInDevelopment: "开发中", eyebrow: "管理平台", backToSite: "返回网站", signOut: "退出登录", navDashboard: "控制台", navEmailTemplates: "邮件模板", navMailings: "邮件发送", navInvitations: "邀请", navUsers: "用户与角色", navPermissions: "权限", navNotifications: "通知", navMedia: "媒体库", navMarketing: "营销工具", navMonitoring: "技术监控", openSection: "打开", dashboardTitle: "网站管理", emailTitle: "邮件模板", mediaTitle: "媒体库", marketingTitle: "营销工具", monitoringTitle: "技术监控", actionPreview: "预览", actionCopy: "复制", actionPrint: "打印", actionShare: "分享", actionDownload: "下载", actionPdf: "PDF" },
  auth: {
    signInTitleBefore: "登录 ",
    signInTitleAfter: "",
    signInLead: "使用电子邮件和密码登录，或继续使用 Google。",
    emailLabel: "电子邮件",
    emailPlaceholder: "you@example.com",
    passwordLabel: "密码",
    passwordPlaceholder: "密码",
    showPassword: "显示密码",
    hidePassword: "隐藏密码",
    signInSubmit: "登录",
    orDivider: "或",
    continueWithGoogle: "使用 Google 继续",
    back: "返回",
    invalidCredentials: "电子邮件或密码无效。",
    credentialsUnavailable: "目前无法使用电子邮件登录。",
    googleUnavailable: "目前无法使用 Google 登录。",
    signInUnavailable: "目前无法登录。",
  },
  legal: {"lastUpdated":"最近更新","related":"法律页面","draftNote":"草案 — 待法律审阅"},
  home: { developmentStatus: "架构", architectureOverview: "一览核心理念", architectureOverviewText: "从人和信息到支持日常生活的系统——始终遵循明确的边界。", knowledgeExplorer: "探索", majorDomains: "主要主题", publishedPages: "这里的页面", relationships: "如何关联", domainMap: "发现", architectureDependencies: "主题如何衔接", currentStatus: "进展", platformProgress: "主题", featuredConcepts: "发现", startWithCore: "从几个核心理念开始", continueExploring: "继续", chooseEntrance: "选择起点", knowledgeId: "文档 ID", complete: "完成", inProgress: "活跃", planned: "保留", understand: "了解", explore: "探索", discover: "发现", continue: "继续", beatWhat: "是什么", beatWho: "为谁", beatWhy: "为什么", beatHow: "怎么做", hourFramesLabel: "一小时的照护" },
  ko: { ...uiEn.ko, document: "文档", passport: "文档信息", knowledgeId: "文档 ID", domain: "主题领域", type: "文档类型", status: "状态", version: "版本", evidence: "依据", maturity: "状态", readingTime: "阅读时间", lastReview: "最近审核", owner: "负责人", engineeringObject: "页面信息", currentPosition: "当前位置", nextReading: "建议接着阅读", notYetAssigned: "未指定", dependencies: "相关概念", dependencyGraph: "相关概念", incoming: "被以下内容使用", outgoing: "依赖于", nonePublished: "无", knowledgeGraph: "关联", parents: "更广泛的主题", children: "包含的主题", consumers: "被以下内容使用", providers: "构建于", lifecycle: "文档历史", created: "已创建", reviewed: "已审核", published: "已发布", updated: "已更新", nextReview: "下次审核", deprecated: "已弃用", futureRevision: "修订", versionHistory: "版本", previousVersion: "上一版本", summaryOfChanges: "变更内容", date: "日期", readingPaths: "建议阅读", level2Kicker: "下一步", level2Title: "相关阅读与概念", level3Kicker: "详情", level3Title: "面向专业人士的文档信息" },
  scope: { definition: "定义", "current-scope": "涵盖内容", "future-scope": "下一步内容", "human-oversight": "人工监督", "safety-boundary": "安全边界", "engineering-note": "说明", limitation: "限制" },
  callout: { information: "信息", definition: "定义", "engineering-note": "说明", important: "重要", "current-scope": "涵盖内容", "future-scope": "下一步内容", relationship: "关联" },
  common: { openArrow: "打开", relatedDomains: "相关主题", referenceLinks: "延伸阅读", keyPrinciples: "关键原则", executiveSummary: "摘要", whyItMatters: "重要原因", purpose: "宗旨", futureExpansion: "相关主题" },
  hub: { related: "继续", explore: "探索", areas: "领域", what: "一句话", why: "为何有益", next: "接下来", deeper: "继续阅读", scenes: "场景" },
  pwa: {
    installApp: "安装应用",
    iosTip:
      "在 iPhone 或 iPad 上：点按“分享”，然后点按“添加到主屏幕”以安装 SAVEN Core。",
  },

  contact: {
    formHeading: "留言",
    nameLabel: "姓名",
    emailLabel: "电子邮件",
    subjectLabel: "主题（可选）",
    messageLabel: "留言",
    submit: "在邮件应用中打开",
    success: "您的邮件应用应会打开，并准备好待发送的消息。",
    error: "请填写姓名、电子邮件和留言。",
  },
};
