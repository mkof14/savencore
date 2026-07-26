import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** Spanish UI chrome — clear, neutral international Spanish. */
export const uiEs: UiMessages = {
  ...uiEn,
  language: "Idioma", menu: "Menú", close: "Cerrar", open: "Abrir", skipToContent: "Ir al contenido",
  nav: { home: "Inicio", technology: "Tecnología", systems: "Sistemas", applications: "Aplicaciones", trust: "Confianza", research: "Investigación", purpose: "Propósito", foundation: "Fundamentos", labs: "Laboratorios", investors: "Inversores", signIn: "Iniciar sesión / Registrarse" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Tecnología", "technology-human-data": "Datos humanos", "technology-human-data-model": "Modelo de datos humanos", "technology-data-infrastructure": "Infraestructura de datos", "technology-interoperability": "Interoperabilidad", "technology-privacy": "Privacidad", "technology-security": "Seguridad", "technology-artificial-intelligence": "Inteligencia artificial", "technology-automation": "Automatización", "technology-robotics": "Robótica", "systems-overview": "Sistemas", "systems-knowledge-engine": "Motor de conocimiento", "systems-ai-decision-support": "Apoyo a la decisión con IA", "systems-safety-layer": "Capa de seguridad", "systems-communication-layer": "Capa de comunicación", "systems-clinical-interfaces": "Interfaces clínicas", "systems-robotics-layer": "Capa de robótica", "systems-drone-systems": "Sistemas de drones", "applications-overview": "Aplicaciones", "applications-healthcare": "Atención sanitaria", "applications-home": "Aplicación del hogar", "applications-hospitals": "Hospitales", "applications-emergency": "Emergencias", "applications-industrial": "Industria", "applications-government": "Gobierno", "applications-agriculture": "Agricultura", "applications-research-applications": "Aplicaciones de investigación", "trust-overview": "Confianza", "trust-privacy": "Privacidad", "trust-security": "Seguridad", "trust-safety": "Protección", "trust-human-oversight": "Supervisión humana", "trust-transparency": "Transparencia", "trust-ethics": "Ética y uso responsable", "trust-limitations": "Limitaciones", "research-overview": "Investigación", "footer-technology-overview": "Resumen", "footer-systems-overview": "Resumen", "footer-applications-overview": "Resumen", "footer-trust-overview": "Resumen", "footer-research-overview": "Resumen", "footer-applications-research": "Investigación", "footer-trust-ethics": "Ética", "footer-company-about": "Acerca de", "footer-company-mission": "Misión" , "sign-in": "Iniciar sesión / Registrarse", "footer-company-contact": "Contacto", "footer-company-investors": "Inversores", "footer-labs-overview": "Resumen", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Internal Future Lab", "footer-systems-saven-robotics-interface": "SAVEN Robotics Interface", "footer-legal-privacy-policy": "Política de privacidad", "footer-legal-terms-of-use": "Términos de uso", "footer-legal-cookie-policy": "Política de cookies", "footer-legal-cookie-preferences": "Preferencias de cookies", "footer-legal-accessibility-statement": "Declaración de accesibilidad", "footer-legal-security": "Seguridad", "footer-legal-responsible-ai": "IA responsable", "footer-legal-medical-disclaimer": "Aviso médico", "footer-legal-research-disclaimer": "Aviso de investigación", "footer-legal-intellectual-property": "Propiedad intelectual", "footer-legal-trademark-notice": "Aviso de marcas", "footer-legal-copyright": "Aviso de copyright", "footer-legal-data-rights": "Derechos sobre los datos", "footer-legal-regional-privacy-rights": "Derechos regionales de privacidad", "footer-legal-do-not-sell-or-share": "No vender ni compartir", "footer-legal-legal-notices": "Avisos legales"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Cambiar a tema claro", themeToDark: "Cambiar a tema oscuro", signIn: "Iniciar sesión / Registrarse", admin: "Admin", technology: "Tecnología", systems: "Sistemas", applications: "Aplicaciones", trust: "Confianza", research: "Investigación", about: "Acerca de SAVEN Core", resources: "Recursos", company: "Empresa", legal: "Legal", contact: "Contacto", plannedNote: "", comingSoon: "", copyright: "Copyright © 2026 SAVEN Core. Todos los derechos reservados.", copyrightShort: "© SAVEN Core", privacy: "Privacidad", terms: "Términos", cookies: "Cookies", theme: "Tema", themeLight: "Claro", themeDark: "Oscuro", version: "Versión", tagline: "Datos humanos.\nSistemas conectados.\nTecnología responsable." },
  social: { ...uiEn.social, navLabel: "Redes sociales", notConfigured: "enlace aún no configurado" },
  admin: { ...uiEn.admin, brandTitle: "SAVEN Admin", navLabel: "Navegación de administración", statusInDevelopment: "En desarrollo", eyebrow: "Plataforma de administración", backToSite: "Volver al sitio", signOut: "Cerrar sesión", navDashboard: "Panel", navEmailTemplates: "Plantillas de correo", navMailings: "Envíos", navInvitations: "Invitaciones", navUsers: "Usuarios y roles", navPermissions: "Permisos", navNotifications: "Notificaciones", navMedia: "Biblioteca de medios", navMarketing: "Herramientas de marketing", navMonitoring: "Monitoreo técnico", openSection: "Abrir", dashboardTitle: "Administración del sitio", emailTitle: "Plantillas de correo", mediaTitle: "Biblioteca de medios", marketingTitle: "Herramientas de marketing", monitoringTitle: "Monitoreo técnico", actionPreview: "Vista previa", actionCopy: "Copiar", actionPrint: "Imprimir", actionShare: "Compartir", actionDownload: "Descargar", actionPdf: "PDF" },
  auth: {
    signInTitleBefore: "Iniciar sesión en ",
    signInTitleAfter: "",
    signInLead:
      "Inicie sesión con correo y contraseña, o continúe con Google.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "usted@ejemplo.com",
    passwordLabel: "Contraseña",
    passwordPlaceholder: "Contraseña",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",
    signInSubmit: "Iniciar sesión",
    orDivider: "o",
    continueWithGoogle: "Continuar con Google",
    back: "Volver",
    invalidCredentials: "Correo o contraseña no válidos.",
    credentialsUnavailable:
      "El inicio de sesión con correo no está disponible ahora.",
    googleUnavailable:
      "El inicio de sesión con Google no está disponible ahora.",
    signInUnavailable: "El inicio de sesión no está disponible ahora.",
  },
  legal: {"lastUpdated":"Última actualización","related":"Páginas legales","draftNote":"Borrador — pendiente de revisión legal"},
  home: { developmentStatus: "Arquitectura", architectureOverview: "La idea de un vistazo", architectureOverviewText: "De las personas y la información a sistemas que ayudan en la vida cotidiana, dentro de límites claros.", knowledgeExplorer: "Explorar", majorDomains: "Temas principales", publishedPages: "Páginas aquí", relationships: "Cómo se conecta", domainMap: "Descubrir", architectureDependencies: "Cómo encajan los temas", currentStatus: "Progreso", platformProgress: "Temas", featuredConcepts: "Descubrir", startWithCore: "Algunas ideas para empezar", continueExploring: "Continuar", chooseEntrance: "Elige por dónde empezar", knowledgeId: "ID del documento", complete: "Completo", inProgress: "Activo", planned: "Reservado", understand: "Entender", explore: "Explorar", discover: "Descubrir", continue: "Continuar", beatWhat: "Qué", beatWho: "Quién", beatWhy: "Por qué", beatHow: "Cómo", hourFramesLabel: "Una hora de cuidado" },
  ko: { ...uiEn.ko, document: "Documento", passport: "Información del documento", knowledgeId: "ID del documento", domain: "Área temática", type: "Tipo de documento", status: "Estado", version: "Versión", evidence: "Evidencia", maturity: "Estado", readingTime: "Tiempo de lectura", lastReview: "Última revisión", owner: "Responsable", engineeringObject: "Información de la página", currentPosition: "Estás aquí", nextReading: "Siguiente lectura sugerida", notYetAssigned: "Sin especificar", dependencies: "Conceptos relacionados", dependencyGraph: "Conceptos relacionados", incoming: "Utilizado por", outgoing: "Depende de", nonePublished: "Ninguno", knowledgeGraph: "Conexiones", parents: "Temas más amplios", children: "Temas incluidos", consumers: "Utilizado por", providers: "Basado en", lifecycle: "Historial del documento", created: "Creado", reviewed: "Revisado", published: "Publicado", updated: "Actualizado", nextReview: "Próxima revisión", deprecated: "Obsoleto", futureRevision: "Revisión", versionHistory: "Versiones", previousVersion: "Versión anterior", summaryOfChanges: "Qué cambió", date: "Fecha", readingPaths: "Lectura sugerida", level2Kicker: "Siguiente", level2Title: "Lecturas y conceptos relacionados", level3Kicker: "Detalles", level3Title: "Información del documento para profesionales" },
  scope: { definition: "Definición", "current-scope": "Qué cubre esto", "future-scope": "Qué sigue", "human-oversight": "Supervisión humana", "safety-boundary": "Límite de seguridad", "engineering-note": "Notas", limitation: "Límite" },
  callout: { information: "Información", definition: "Definición", "engineering-note": "Notas", important: "Importante", "current-scope": "Qué cubre esto", "future-scope": "Qué sigue", relationship: "Conexión" },
  common: { openArrow: "Abrir", relatedDomains: "Temas relacionados", referenceLinks: "Más para leer", keyPrinciples: "Principios clave", executiveSummary: "Resumen", whyItMatters: "Por qué importa", purpose: "Propósito", futureExpansion: "Temas relacionados" },
  hub: { related: "Continuar", explore: "Explorar", areas: "Áreas", what: "En breve", why: "Por qué ayuda", next: "Lo que sigue", deeper: "Seguir leyendo", scenes: "Escenas" },
  pwa: {
    installApp: "Instalar app",
    iosTip:
      "En iPhone o iPad: toque Compartir y luego Añadir a pantalla de inicio para instalar SAVEN Core.",
  },

  contact: {
    formHeading: "Mensaje",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    subjectLabel: "Asunto (opcional)",
    messageLabel: "Mensaje",
    submit: "Abrir en la app de correo",
    success: "Su aplicación de correo debería abrirse con el mensaje listo para enviar.",
    error: "Complete nombre, correo y mensaje.",
  },
};
