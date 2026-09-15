export const es = {
  common: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    stack: "Stack",
    contact: "Contacto",
    download: "Descargar CV",
    cvLanguage: "CV en español",
    cvFile: "/Martin_Teseira_CV.pdf",
    contactAction: "Contactar",
    talk: "Hablemos",
    viewProjects: "Ver proyectos",
    viewProject: "Ver proyecto",
    contribution: "Mi aporte:",
    result: "Resultado",
    personal: "PROYECTO PERSONAL",
    client: "PROYECTO PARA CLIENTE",
    development: "EN DESARROLLO",
    nav: "Navegación principal",
    language: "Idioma",
    theme: "Cambiar tema",
    menu: "Abrir navegación",
    close: "Cerrar",
    backHome: "Ir al inicio",
    availability: "Disponible para roles remotos o híbridos",
    profileOpen: "Ampliar foto de Martin Teseira",
    profileAlt:
      "Martin Teseira en su graduación en la Universidad Nacional de Jujuy",
    profileCaption: "Analista Programador Universitario · UNJu",
  },
  hero: {
    available: "Abierto a nuevas oportunidades",
    focus: "con foco en Frontend",
    description:
      "Desarrollo productos web y móviles con React, Next.js, TypeScript y .NET. Más de 5 años convirtiendo necesidades de negocio en experiencias claras, estables y listas para producción.",
    tech: "Tecnologías principales",
    codeLabel: "Mi enfoque técnico",
    codeComment: "// resolver con criterio, no solo con código",
    quality: "calidad",
    product: "producto",
    success: "✓ Experiencia real · mejora continua",
    impactLabel: "Resumen de experiencia",
    impact: [
      { title: "5+ años", text: "Experiencia profesional" },
      { title: "Web + Mobile", text: "Productos en producción" },
      { title: "Frontend first", text: "React · Next.js · Angular" },
      { title: "Full cycle", text: "Desarrollo · deploy · soporte" },
    ],
  },
  projects: {
    kicker: "Trabajo destacado",
    title: "Proyectos y experiencia profesional",
    intro:
      "Experiencia profesional y proyectos propios, explicados desde el problema y el impacto.",
    ticketpass: {
      label: "EXPERIENCIA PROFESIONAL · 2020—2026",
      title: "ticketPass",
      subtitle: "Plataforma de venta y gestión de entradas para eventos.",
      description:
        "Full Stack Developer y referente técnico Frontend durante más de 5 años. Trabajé en la web cliente y el manager, desde las interfaces hasta los flujos críticos de compra.",
      contribution:
        "Migración de React a Next.js, integración de Mercado Pago, autenticación y APIs con ASP.NET Core y Entity Framework Core.",
      clientLink: "Web cliente",
      producersLink: "Landing productoras",
      challengeLabel: "DESAFÍO EN PRODUCCIÓN",
      challenge: "Fila virtual para ventas de alta demanda",
      solution:
        "Integré un proveedor de fila virtual, coordiné la implementación con el equipo y documenté el proceso. También participé en mejoras de sesión para evitar que se salteara la fila entre dispositivos.",
      outcome:
        "Mayor estabilidad de la plataforma durante eventos con miles de usuarios intentando comprar al mismo tiempo.",
      shots: [
        {
          label: "Web cliente",
          alt: "ticketPass: buscador y catálogo de eventos con fechas, ubicaciones y compra de entradas.",
        },
        {
          label: "Entradas",
          alt: "Detalle de evento con selección de entradas, cantidades y resumen de compra.",
        },
        {
          label: "Pagos",
          alt: "Resumen de compra y selección de pago con Mercado Pago o transferencia.",
        },
        {
          label: "Manager",
          alt: "Administración de eventos con filtros, edición y acceso a planimetría.",
        },
        {
          label: "Dashboard",
          alt: "Dashboard de productoras con gráficos de ventas, invitaciones y reembolsos.",
        },
        {
          label: "Mis compras",
          alt: "Historial de compras del cliente con detalle y estado de sus tickets.",
        },
      ],
    },
    gis: {
      label: "EXPERIENCIA PROFESIONAL · GISSO / SSR MINING",
      title: "Panel de Higiene Ocupacional",
      subtitle: "Plataforma de gestión desarrollada para SSR Mining.",
      description:
        "Desarrollé funcionalidades frontend con Angular para digitalizar procesos de higiene ocupacional: muestras, laboratorio, equipos y reportes.",
      contribution:
        "Tablas, formularios y componentes reutilizables conectados con las APIs del sistema, para centralizar la consulta y gestión de información.",
      access: "Plataforma privada · Capturas del entorno de test",
      shots: [
        {
          label: "Muestras",
          alt: "GISSO: tabla de muestras físicas con categorías, estados y acciones en el entorno de test.",
        },
        {
          label: "Grupos de exposición",
          alt: "Gestión de grupos de exposición similar con filtros, indicadores y clasificación de riesgos.",
        },
        {
          label: "Indicadores",
          alt: "Detalle de un grupo de exposición con indicadores estadísticos y gráficos del entorno de test.",
        },
      ],
    },
    small: [
      {
        title: "TicketGenerator",
        description:
          "Desarrollé un generador de tickets con carga de plantillas y CSV, posicionamiento visual de campos y QR, y configuración de PDF. Un flujo guiado para preparar tickets en lote.",
        shot: {
          label: "Editor de tickets",
          alt: "TicketFlow: editor visual de tickets con plantilla, datos CSV, campos y código QR.",
        },
        note: "",
      },
      {
        title: "Flexxus BI",
        description:
          "Desarrollé un dashboard fiscal y comercial para una concesionaria de motos a partir de reportes de Power BI. Integré una API .NET para consultar indicadores, gráficos y filtros desde una interfaz web.",
        shot: {
          label: "Resumen fiscal y comercial",
          alt: "Flexxus BI: indicadores de IVA, evolución mensual, comprobantes y filtros por período y sucursal.",
        },
        note: "",
      },
      {
        title: "Agent AI",
        description:
          "Desarrollo una plataforma de atención conversacional con IA y operadores humanos. Backoffice para gestionar conversaciones, asignaciones y prioridades, con backend .NET y separación de datos por empresa.",
        shot: {
          label: "Bandeja de conversaciones",
          alt: "Agent AI: bandeja de conversaciones con mensajes, atención por IA, asignación a operadores y prioridad.",
        },
        note: "Full Stack · IA + atención humana",
      },
    ],
  },
  gallery: {
    captures: "Capturas de",
    expand: "Ampliar",
    expandLabel: "Ampliar captura de",
    close: "Cerrar captura",
    image: "Imagen ampliada",
    previous: "Anterior",
    next: "Siguiente",
    previousLabel: "Captura anterior",
    nextLabel: "Captura siguiente",
    fit: "Ajustar imagen",
    detail: "Ver detalle",
  },
  experience: {
    kicker: "Trayectoria",
    title: "Más de 5 años construyendo productos.",
    intro:
      "Experiencia en desarrollo web y móvil, con foco en Frontend y participación en todo el ciclo de desarrollo.",
    period: "MAR 2020 — MAY 2026",
    role: "Full Stack Developer · Referente técnico Frontend",
    work: [
      "Migración de la web cliente desde React hacia Next.js.",
      "Web manager, web cliente y soporte de funcionalidades móviles.",
      "Pagos, autenticación, sesiones e integraciones externas.",
      "APIs REST con ASP.NET Core y Entity Framework Core.",
    ],
    education: "FORMACIÓN",
    degree: "Analista Programador Universitario",
    university: "Universidad Nacional de Jujuy · Facultad de Ingeniería",
    learning: [
      "2012–2018 · Formación universitaria.",
      "Inglés intermedio (B1), en formación continua.",
      "Trabajo en equipo con GitFlow, Jira y metodologías ágiles.",
    ],
  },
  method: {
    kicker: "Forma de trabajo",
    title: "Criterio técnico con foco en producto.",
    intro:
      "Elijo las herramientas según el problema, valido las soluciones y acompaño lo que llega a producción.",
    items: [
      {
        title: "Incidentes sin improvisación",
        text: "Aíslo el problema, reviso métricas y logs, valido el hotfix en testing y documento lo aprendido para evitar recurrencias.",
      },
      {
        title: "IA como copiloto",
        text: "Uso ChatGPT, Copilot y Cursor para acelerar tareas repetitivas y explorar soluciones, siempre auditando el resultado y adaptándolo a la arquitectura.",
      },
      {
        title: "Flujos resilientes",
        text: "Diseño estados de carga, manejo de errores, timeouts e idempotencia para proteger procesos críticos como pagos y emisión de tickets.",
      },
    ],
  },
  stack: {
    kicker: "Stack tecnológico",
    title: "Herramientas que uso para entregar valor.",
    data: "Datos & Cloud",
    workflow: "Flujo de trabajo",
    agile: "metodologías ágiles",
  },
  contact: {
    available: "Disponible para nuevos desafíos",
    title: "¿Buscás un developer que entienda el código y el producto?",
    intro:
      "Estoy en San Salvador de Jujuy, Argentina, y abierto a oportunidades remotas o híbridas.",
    invitation:
      "Contame sobre tu equipo, tu proyecto o la oportunidad que tenés en mente.",
    direct: "También podés escribirme directamente",
    formTitle: "Enviame un mensaje",
    name: "Nombre",
    namePlaceholder: "Tu nombre completo",
    email: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    subject: "Asunto",
    subjectPlaceholder: "Propuesta de proyecto / Oportunidad laboral",
    message: "Mensaje",
    messagePlaceholder: "Contame los detalles de tu consulta o proyecto…",
    send: "Enviar mensaje",
    sending: "Enviando…",
    success:
      "Tu mensaje fue recibido por el servicio de envío. ¡Gracias por contactarme!",
    error:
      "No pudimos confirmar el envío. Tu mensaje sigue aquí; podés reintentar o escribirme directamente por correo.",
    invalid: "Completá los campos con contenido válido.",
    privacy:
      "Usaré tu nombre y correo para responder a tu consulta. El envío se procesa mediante FormSubmit.",
    required: "Todos los campos son obligatorios.",
  },
};

export type Messages = typeof es;
