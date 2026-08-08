import { uiEn, type UiMessages } from "@/i18n/ui/en";

/** Spanish UI chrome — clear, neutral international Spanish. */
export const uiEs: UiMessages = {
  ...uiEn,
  language: "Idioma", menu: "Menú", close: "Cerrar", open: "Abrir", skipToContent: "Ir al contenido",
  nav: { home: "Inicio", technology: "Tecnología", systems: "Sistemas", applications: "Aplicaciones", trust: "Confianza", research: "Investigación", purpose: "Propósito", foundation: "Fundamentos", labs: "Laboratorios", investors: "Inversores", signIn: "Iniciar sesión / Registrarse" },
  navEntries: { ...uiEn.navEntries, "technology-overview": "Tecnología", "technology-human-data": "Datos humanos", "technology-human-data-model": "Modelo de datos humanos", "technology-data-infrastructure": "Infraestructura de datos", "technology-interoperability": "Interoperabilidad", "technology-privacy": "Privacidad", "technology-security": "Seguridad", "technology-artificial-intelligence": "Inteligencia artificial", "technology-automation": "Automatización", "technology-robotics": "Robótica", "systems-overview": "Sistemas", "systems-knowledge-engine": "Motor de conocimiento", "systems-ai-decision-support": "Apoyo a la decisión con IA", "systems-safety-layer": "Capa de seguridad", "systems-communication-layer": "Capa de comunicación", "systems-clinical-interfaces": "Interfaces clínicas", "systems-robotics-layer": "Capa de robótica", "systems-drone-systems": "Sistemas de drones", "systems-saven-robotics-interface": "Interfaz de robótica SAVEN", "applications-overview": "Aplicaciones", "applications-healthcare": "Atención sanitaria", "applications-home": "Aplicación del hogar", "applications-hospitals": "Hospitales", "applications-emergency": "Emergencias", "applications-industrial": "Industria", "applications-government": "Gobierno", "applications-agriculture": "Agricultura", "applications-research-applications": "Aplicaciones de investigación", "trust-overview": "Confianza", "trust-privacy": "Privacidad", "trust-security": "Seguridad", "trust-safety": "Protección", "trust-human-oversight": "Supervisión humana", "trust-transparency": "Transparencia", "trust-ethics": "Ética y uso responsable", "trust-limitations": "Limitaciones", "footer-technology-overview": "Resumen", "footer-systems-overview": "Resumen", "footer-applications-overview": "Resumen", "footer-trust-overview": "Resumen", "footer-applications-research": "Investigación", "footer-trust-ethics": "Ética", "footer-company-about": "Acerca de",
    "footer-company-home": "Inicio", "footer-company-biomath-core": "BioMath Core", "footer-company-mission": "Misión", "footer-company-investors-contact": "Contacto para inversores", "footer-company-roadmap": "Hoja de ruta",     "footer-resources-search": "Buscar",
    "footer-resources-lab": "Lab",
    "footer-resources-faq": "Preguntas frecuentes", "footer-resources-security-issue": "Incidente de seguridad", "sign-in": "Iniciar sesión / Registrarse", "footer-company-contact": "Contacto", "footer-company-investors": "Inversores", "footer-company-media": "Medios", "footer-labs-overview": "Resumen", "footer-labs-saven-robotics-lab": "SAVEN Robotics Lab", "footer-labs-internal-future-lab": "Future Lab", "footer-systems-saven-robotics-interface": "Interfaz de robótica", "footer-legal-privacy-policy": "Política de privacidad", "footer-legal-terms-of-use": "Términos de uso", "footer-legal-cookie-policy": "Política de cookies", "footer-legal-cookie-preferences": "Preferencias de cookies", "footer-legal-accessibility-statement": "Declaración de accesibilidad", "footer-legal-security": "Seguridad", "footer-legal-responsible-ai": "IA responsable", "footer-legal-medical-disclaimer": "Aviso médico", "footer-legal-research-disclaimer": "Aviso de investigación", "footer-legal-intellectual-property": "Propiedad intelectual", "footer-legal-trademark-notice": "Aviso de marcas", "footer-legal-copyright": "Aviso de copyright", "footer-legal-data-rights": "Derechos sobre los datos", "footer-legal-regional-privacy-rights": "Derechos regionales de privacidad", "footer-legal-do-not-sell-or-share": "No vender ni compartir", "footer-legal-legal-notices": "Avisos legales", "footer-legal-more": "Más"},
  footer: { ...uiEn.footer, copyrightLabel: "Copyright", themeToLight: "Cambiar a tema claro", themeToDark: "Cambiar a tema oscuro", signIn: "Iniciar sesión / Registrarse", admin: "Admin", technology: "Tecnología", systems: "Sistemas", architecture: "Arquitectura", applications: "Aplicaciones", trust: "Confianza", research: "Investigación", labs: "Laboratorios", about: "Acerca de SAVEN Core", resources: "Recursos", company: "Empresa", legal: "Legal", more: "Más", contact: "Contacto", plannedNote: "", comingSoon: "", copyright: "Copyright © 2026 SAVEN Core. Todos los derechos reservados.", copyrightShort: "© SAVEN Core", rightsReserved: "Todos los derechos reservados.", privacy: "Privacidad", terms: "Términos", cookies: "Cookies", theme: "Tema", themeLight: "Claro", themeDark: "Oscuro", version: "Versión", tagline: "Datos humanos.\nSistemas conectados.\nTecnología responsable." },
  social: { ...uiEn.social, navLabel: "Redes sociales", notConfigured: "enlace aún no configurado" },
  admin: { ...uiEn.admin, localStoreOnly: "Solo local / no durable en este host: invitaciones, roles, permisos, envíos y notificaciones necesitan BLOB_READ_WRITE_TOKEN (Vercel Blob) para persistir en Vercel. Sin él, los cambios pueden fallar o desaparecer tras redesplegar. El desarrollo local sigue escribiendo en storage/admin/.", brandTitle: "SAVEN Admin", navLabel: "Navegación de administración", statusInDevelopment: "En desarrollo", eyebrow: "Plataforma de administración", backToSite: "Volver al sitio", signOut: "Cerrar sesión", navDashboard: "Panel", navEmailTemplates: "Plantillas de correo", navMailings: "Envíos", navInvitations: "Invitaciones", navUsers: "Usuarios y roles", navPermissions: "Permisos", navNotifications: "Notificaciones", navMedia: "Biblioteca de medios", navMarketing: "Herramientas de marketing", navMonitoring: "Monitoreo técnico", openSection: "Abrir", dashboardTitle: "Administración del sitio", emailTitle: "Plantillas de correo", mediaTitle: "Biblioteca de medios", mediaLead: "Añada vídeo, documentos y enlaces en un solo lugar. Los activos de marca vienen con el sitio; lo público aparece en /media/.", mediaAddHeading: "Subir", mediaAddLead: "Herramientas clásicas: subir archivo, añadir URL de vídeo o guardar enlace. Luego gestione las filas de la tabla.", mediaTabFile: "Subir archivo", mediaTabVideo: "Subir vídeo", mediaTabLink: "Añadir enlace", mediaTabUploadFile: "Subir archivo", mediaTabUploadVideo: "Subir vídeo", mediaTabAddLink: "Añadir enlace", mediaChooseFile: "Elegir archivo", mediaChooseVideo: "Elegir archivo de vídeo", mediaVercelLimit: "Este host no puede guardar cambios de la biblioteca sin BLOB_READ_WRITE_TOKEN (típico en Vercel). Configure Vercel Blob para almacenamiento duradero, añada archivos y enlaces YouTube/Vimeo en desarrollo local, o use URL embed para vídeos grandes (límite de cuerpo Vercel ≈ 4,5 MB).", mediaErrorTooLarge: "Archivo demasiado grande. Máx. local 40 MB. En Vercel fallan subidas >~4,5 MB — use URL de YouTube o Vimeo.", mediaErrorInvalidType: "Tipo no admitido. Use PDF, Office, imágenes o vídeo (MP4, WebM, OGG, MOV).", mediaErrorStorage: "Almacenamiento no escribible aquí. Configure BLOB_READ_WRITE_TOKEN para Vercel Blob duradero, o use desarrollo local.", mediaVideoUrlHint: "Recomendado para vídeos grandes: pegue un enlace de YouTube o Vimeo (vista previa abajo).", mediaLibraryHeading: "Biblioteca", mediaFilterAllFiles: "Todos los archivos", mediaFilterVideos: "Vídeos", mediaFilterDocs: "Documentos", mediaDeleteConfirm: "¿Eliminar este elemento de la biblioteca? Las filas del catálogo integrado se ocultan de las listas (los archivos del sitio en /public se conservan).", mediaFilterLinks: "Enlaces", mediaSourceSeed: "Integrado", colDate: "Fecha", mediaDropTitle: "Suelte un vídeo, PDF o pegue un enlace", mediaDropHint: "o haga clic para explorar", mediaAcceptedTypes: "PDF, DOC/DOCX, PPT/PPTX, KEY, MP4/WebM, imágenes · máx. 40 MB", mediaBrowse: "Explorar archivos", mediaUploadNow: "Subir", mediaUploading: "Subiendo…", mediaUploadSuccess: "Subido.", mediaVideoUrlLabel: "URL del vídeo", mediaVideoUrlPlaceholder: "YouTube, Vimeo o URL MP4/WebM directa", mediaVideoTitlePlaceholder: "Título (opcional — desde la URL)", mediaVideoOrUpload: "O suba un archivo de vídeo", mediaVideoPreview: "Vista previa en vivo", mediaSaveVideo: "Guardar vídeo", mediaLinkHeading: "Añadir enlace", mediaLinkUrlLabel: "URL", mediaLinkNote: "Nota (opcional)", mediaLinkNotePlaceholder: "Nota breve", mediaLinkAdd: "Añadir enlace", mediaSaveLink: "Guardar enlace", mediaLinkSuccess: "Guardado.", mediaFilterAll: "Todos", mediaEmptyLibrary: "Suelte un vídeo, PDF o pegue un enlace", mediaJustAdded: "Añadido", mediaOpen: "Abrir", mediaCopyLink: "Copiar enlace", mediaCatImage: "Imagen", mediaCatVideo: "Vídeo", mediaCatDocument: "Documento", mediaCatPresentation: "Presentación", mediaCatLink: "Enlace", mediaCatOther: "Otro", actionDelete: "Eliminar", marketingTitle: "Herramientas de marketing", monitoringTitle: "Monitoreo técnico", actionPreview: "Vista previa", actionCopy: "Copiar", actionPrint: "Imprimir", actionShare: "Compartir", actionDownload: "Descargar", actionDownloading: "Descargando…", actionPdf: "PDF" },
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
  legal: {"lastUpdated":"Última actualización","related":"Páginas legales","draftNote":"Políticas del sitio y términos de uso de este sitio web — no un paquete completo de cumplimiento normativo multi-jurisdiccional. Preguntas: info@savencore.com.","indexTitle":"Información legal","indexLead":"Privacidad, términos, cookies, accesibilidad, seguridad y avisos relacionados del sitio público. Son políticas del sitio web — no un paquete certificado por abogados para cada jurisdicción. Preferencias de cookies explica que no hay CMP de consentimiento activo — use la configuración del navegador o contáctenos."},
    search: { title: "Buscar", lead: "Encuentre páginas publicadas por título. Búsqueda ligera del mapa del sitio — no un CMS de texto completo.", placeholder: "Buscar títulos de páginas…", submit: "Buscar", noQuery: "Escriba unas letras para filtrar títulos de páginas publicadas.", empty: "Ninguna página publicada coincide. Pruebe otra palabra o use el mapa del pie.", results: "{count} páginas coincidentes", honestNote: "La búsqueda cubre solo títulos de páginas publicadas y etiquetas de navegación — no cuerpos de documentos ni Admin privado.", navLabel: "Buscar" },
  lab: {
    eyebrow: "Prueba / Lab / Experimentos",
    title: "Lab",
    lead: "Un espacio seguro para probar funciones nuevas sin alterar el sitio público. Lo que hay aquí son experimentos — no afirmaciones de producto.",
    videoEffectsHeading: "Tratamiento del vídeo splash",
    videoEffectsApplied:
      "Aplicado en esta banda: vídeo ligero en doble formato (WebM + MP4, selección móvil), escala Ken Burns, viñeta suave, degradado inferior hacia la página, grano fino, ligera gradación de color, capa de profundidad difuminada opcional (escritorio) y fundido al estar listo. Esquinas rectas; sin cromo neón. Con movimiento reducido solo se muestra el póster.",
    videoEffectsIdeas:
      "Ideas futuras (no publicadas): parallax al hacer scroll, luz interactiva del cursor, cortes por capítulos / lista multi-clip, audio sutil con control de silencio, HDR/AV1 cuando el soporte sea amplio.",
    note: "Pueden enlazarse nuevos experimentos desde este hub. Esta página es noindex y no está en el menú principal. La portada pública sigue siendo el collage fotográfico.",
  },

  medicalDisclaimer: {
    short:
      "SAVEN Core no diagnostica condiciones médicas, no prescribe ni vende medicamentos, ni presta atención de emergencia a través de este sitio web. Desarrollamos sistemas pensados para apoyar a médicos, personal sanitario y personas. El contenido del sitio es informativo — no es consejo médico.",
    linkLabel: "Aviso médico",
  },
  home: { developmentStatus: "Arquitectura", architectureOverview: "La idea de un vistazo", architectureOverviewText: "De las personas y la información a sistemas que ayudan en la vida cotidiana, dentro de límites claros.", knowledgeExplorer: "Explorar", majorDomains: "Temas principales", publishedPages: "Páginas aquí", relationships: "Cómo se conecta", domainMap: "Descubrir", architectureDependencies: "Cómo encajan los temas", currentStatus: "Progreso", platformProgress: "Temas", featuredConcepts: "Descubrir", startWithCore: "Algunas ideas para empezar", continueExploring: "Continuar", chooseEntrance: "Elige por dónde empezar", knowledgeId: "ID del documento", complete: "Completo", inProgress: "Activo", planned: "Reservado", understand: "Entender", explore: "Explorar", discover: "Descubrir", continue: "Continuar", beatWhat: "Qué", beatWho: "Quién", beatWhy: "Por qué", beatHow: "Cómo", hourFramesLabel: "Una hora de cuidado", watchTitle: "Ver SAVEN Core", watchSupport: "Una breve presentación general de SAVEN Core — sistemas inteligentes creados para apoyar la vida humana.", watchEmbedTitle: "Vídeo de presentación de SAVEN Core" },
  ko: { ...uiEn.ko, document: "Documento", passport: "Información del documento", knowledgeId: "ID del documento", domain: "Área temática", type: "Tipo de documento", status: "Estado", version: "Versión", evidence: "Evidencia", maturity: "Estado", readingTime: "Tiempo de lectura", lastReview: "Última revisión", owner: "Responsable", engineeringObject: "Información de la página", currentPosition: "Estás aquí", nextReading: "Siguiente lectura sugerida", notYetAssigned: "Sin especificar", dependencies: "Conceptos relacionados", dependencyGraph: "Conceptos relacionados", incoming: "Utilizado por", outgoing: "Depende de", nonePublished: "Ninguno", knowledgeGraph: "Conexiones", parents: "Temas más amplios", children: "Temas incluidos", consumers: "Utilizado por", providers: "Basado en", lifecycle: "Historial del documento", created: "Creado", reviewed: "Revisado", published: "Publicado", updated: "Actualizado", nextReview: "Próxima revisión", deprecated: "Obsoleto", futureRevision: "Revisión", versionHistory: "Versiones", previousVersion: "Versión anterior", summaryOfChanges: "Qué cambió", date: "Fecha", readingPaths: "Lectura sugerida", level2Kicker: "Siguiente", level2Title: "Lecturas y conceptos relacionados", level3Kicker: "Detalles", level3Title: "Información del documento para profesionales" },
  scope: { definition: "Definición", "current-scope": "Qué cubre esto", "future-scope": "Qué sigue", "human-oversight": "Supervisión humana", "safety-boundary": "Límite de seguridad", "engineering-note": "Notas", limitation: "Límite" },
  callout: { information: "Información", definition: "Definición", "engineering-note": "Notas", important: "Importante", "current-scope": "Qué cubre esto", "future-scope": "Qué sigue", relationship: "Conexión" },
  common: { openArrow: "Abrir", relatedDomains: "Temas relacionados", referenceLinks: "Más para leer", keyPrinciples: "Principios clave", executiveSummary: "Resumen", whyItMatters: "Por qué importa", purpose: "Propósito", futureExpansion: "Temas relacionados" },
  hub: { related: "Continuar", explore: "Explorar", areas: "Áreas", what: "En breve", why: "Por qué ayuda", next: "Lo que sigue", deeper: "Seguir leyendo", scenes: "Escenas" },
  pwa: {
    installApp: "Instalar app",
    installed: "Instalada",
    howToInstall: "Cómo instalar",
    closeHelp: "Cerrar",
    iosTip:
      "En iPhone o iPad: toque Compartir y luego Añadir a pantalla de inicio para instalar SAVEN Core.",
    browserTip:
      "Usa el menú del navegador: Instalar app, o Añadir a pantalla de inicio, para instalar SAVEN Core.",
  },

  contact: {
    formHeading: "Mensaje",
    nameLabel: "Nombre",
    emailLabel: "Correo electrónico",
    subjectLabel: "Asunto (opcional)",
    messageLabel: "Mensaje",
    submit: "Enviar mensaje",
    submitMailto: "Abrir en la app de correo",
    success: "Mensaje enviado. Responderemos en cuanto podamos.",
    successMailto:
      "Su aplicación de correo debería abrirse con el mensaje listo para enviar.",
    error: "Complete nombre, correo y mensaje.",
    fallbackNote:
      "El envío directo no está configurado en este servidor. Su aplicación de correo se abrirá en su lugar para que el mensaje llegue igualmente a info@savencore.com.",
  },

  media: {
    galleryTitle: "Biblioteca",
    galleryLead:
      "Explore vídeos, documentos y enlaces aprobados. Ábralos para verlos o descargue archivos para uso sin conexión.",
    filterAll: "Todos",
    filterVideos: "Vídeos",
    filterDocs: "Documentos",
    filterLinks: "Enlaces",
    sectionVideos: "Vídeos",
    sectionDocuments: "Documentos y presentaciones",
    sectionLinks: "Enlaces",
    sectionBrand: "Activos de marca",
    emptyAll:
      "La biblioteca pública está vacía ahora. Los materiales aprobados aparecerán aquí al añadirse.",
    emptyVideos:
      "Aún no hay vídeos en la biblioteca pública. Las cargas aprobadas aparecerán aquí.",
    emptyDocuments:
      "Aún no hay documentos ni presentaciones. Los operadores pueden añadir PDF y materiales de diapositivas en Admin → Medios.",
    emptyLinks:
      "Los enlaces seleccionados aparecerán aquí cuando se añadan a la biblioteca compartida.",
    emptyBrand: "Los activos de marca se cargan desde la biblioteca del sitio.",
    preview: "Vista previa",
    view: "Ver",
    download: "Descargar",
    downloading: "Descargando…",
    copy: "Copiar enlace",
    share: "Compartir",
    open: "Abrir",
    copied: "Enlace copiado.",
    shared: "Hoja de compartir abierta.",
    downloadStarted: "Descarga iniciada.",
    actionFailed: "No se pudo completar la acción.",
    badgeImage: "Imagen",
    badgeVideo: "Vídeo",
    badgeDocument: "Documento",
    badgePresentation: "Presentación",
    badgeLink: "Enlace",
    badgeOther: "Archivo",
  },
};
