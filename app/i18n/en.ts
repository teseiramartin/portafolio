import type { Messages } from "./es";

export const en: Messages = {
  common: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    download: "Download CV",
    cvLanguage: "CV in English",
    cvFile: "/Martin_Teseira_CV_en.pdf",
    contactAction: "Get in touch",
    talk: "Let’s talk",
    viewProjects: "View projects",
    viewProject: "View project",
    contribution: "My contribution:",
    result: "Outcome",
    personal: "PERSONAL PROJECT",
    client: "CLIENT PROJECT",
    development: "IN DEVELOPMENT",
    nav: "Main navigation",
    language: "Language",
    theme: "Toggle theme",
    menu: "Open navigation",
    close: "Close",
    backHome: "Back to home",
    availability: "Available for remote or hybrid roles",
    profileOpen: "Enlarge photo of Martin Teseira",
    profileAlt:
      "Martin Teseira at his graduation at the National University of Jujuy",
    profileCaption: "University Programmer Analyst · UNJu",
  },
  hero: {
    available: "Open to new opportunities",
    focus: "with a Frontend focus",
    description:
      "I build web and mobile products with React, Next.js, TypeScript and .NET. Over 5 years turning business needs into clear, reliable experiences ready for production.",
    tech: "Core technologies",
    codeLabel: "My technical approach",
    codeComment: "// thoughtful solutions, beyond the code",
    quality: "quality",
    product: "product",
    success: "✓ Real experience · continuous improvement",
    impactLabel: "Experience at a glance",
    impact: [
      { title: "5+ years", text: "Professional experience" },
      { title: "Web + Mobile", text: "Products in production" },
      { title: "Frontend first", text: "React · Next.js · Angular" },
      { title: "Full cycle", text: "Development · deployment · support" },
    ],
  },
  projects: {
    kicker: "Selected work",
    title: "Projects and professional experience",
    intro:
      "Professional work and personal projects, from the problem to the impact.",
    ticketpass: {
      label: "PROFESSIONAL EXPERIENCE · 2020—2026",
      title: "ticketPass",
      subtitle: "Event ticket sales and management platform.",
      description:
        "Full Stack Developer and frontend technical point of contact for over 5 years. I worked on the customer website and management app, from interfaces to critical purchase flows.",
      contribution:
        "Migration from React to Next.js, Mercado Pago integration, authentication and APIs with ASP.NET Core and Entity Framework Core.",
      clientLink: "Customer website",
      producersLink: "For event organisers",
      challengeLabel: "PRODUCTION CHALLENGE",
      challenge: "A virtual queue for high-demand sales",
      solution:
        "I integrated a virtual queue provider, coordinated implementation with the team and documented the process. I also contributed to session improvements to prevent queue bypassing across devices.",
      outcome:
        "Improved platform stability during events with thousands of users trying to buy tickets at the same time.",
      shots: [
        {
          label: "Customer website",
          alt: "ticketPass: event search and listings with dates, venues and ticket purchases.",
        },
        {
          label: "Tickets",
          alt: "Event details with ticket selection, quantities and order summary.",
        },
        {
          label: "Payments",
          alt: "Order summary and payment selection via Mercado Pago or bank transfer.",
        },
        {
          label: "Manager",
          alt: "Event management with filters, editing and seating plan access.",
        },
        {
          label: "Dashboard",
          alt: "Organiser dashboard with sales, invitations and refund charts.",
        },
        {
          label: "My purchases",
          alt: "Customer purchase history with ticket details and status.",
        },
      ],
    },
    gis: {
      label: "PROFESSIONAL EXPERIENCE · GISSO / SSR MINING",
      title: "Occupational Hygiene Dashboard",
      subtitle: "Management platform developed for SSR Mining.",
      description:
        "I built Angular frontend features to digitise occupational hygiene processes: samples, laboratory work, equipment and reporting.",
      contribution:
        "Tables, forms and reusable components connected to the system APIs, bringing information management and queries together.",
      access: "Private platform · Screenshots from the test environment",
      shots: [
        {
          label: "Samples",
          alt: "GISSO: physical samples table with categories, statuses and actions in the test environment.",
        },
        {
          label: "Exposure groups",
          alt: "Similar exposure group management with filters, indicators and risk classifications.",
        },
        {
          label: "Indicators",
          alt: "Exposure group details with statistical indicators and charts from the test environment.",
        },
      ],
    },
    small: [
      {
        title: "TicketGenerator",
        description:
          "I built a ticket generator with template and CSV uploads, visual field and QR positioning, and PDF configuration. A guided workflow for preparing tickets in batches.",
        shot: {
          label: "Ticket editor",
          alt: "TicketFlow: visual ticket editor with a template, CSV data, fields and a QR code.",
        },
        note: "",
      },
      {
        title: "Flexxus BI",
        description:
          "I built a financial and sales dashboard for a motorcycle dealership based on Power BI reports. I integrated a .NET API to explore metrics, charts and filters through a web interface.",
        shot: {
          label: "Financial and sales overview",
          alt: "Flexxus BI: VAT metrics, monthly trends, invoices and filters by period and branch.",
        },
        note: "",
      },
      {
        title: "Agent AI",
        description:
          "I am building a conversational support platform for AI and human operators. A backoffice for conversations, assignments and priorities, with a .NET backend and company-level data separation.",
        shot: {
          label: "Conversation inbox",
          alt: "Agent AI: conversation inbox with messages, AI support, operator assignment and priority.",
        },
        note: "Full Stack · AI + human support",
      },
    ],
  },
  gallery: {
    captures: "Screenshots of",
    expand: "Enlarge",
    expandLabel: "Enlarge screenshot of",
    close: "Close screenshot",
    image: "Enlarged image",
    previous: "Previous",
    next: "Next",
    previousLabel: "Previous screenshot",
    nextLabel: "Next screenshot",
    fit: "Fit image",
    detail: "View detail",
  },
  experience: {
    kicker: "Background",
    title: "Over 5 years building products.",
    intro:
      "Web and mobile development experience, focused on Frontend and contributing throughout the development lifecycle.",
    period: "MAR 2020 — MAY 2026",
    role: "Full Stack Developer · Frontend technical point of contact",
    work: [
      "Migrated the customer website from React to Next.js.",
      "Management app, customer website and support for mobile features.",
      "Payments, authentication, sessions and external integrations.",
      "REST APIs with ASP.NET Core and Entity Framework Core.",
    ],
    education: "EDUCATION",
    degree: "University Programmer Analyst",
    university: "National University of Jujuy · Faculty of Engineering",
    learning: [
      "2012–2018 · University studies.",
      "Intermediate English (B1), actively improving.",
      "Team collaboration with GitFlow, Jira and agile methodologies.",
    ],
  },
  method: {
    kicker: "How I work",
    title: "Technical judgement with a product focus.",
    intro:
      "I choose tools to suit the problem, validate solutions and support what goes into production.",
    items: [
      {
        title: "A structured response to incidents",
        text: "I isolate the problem, review metrics and logs, validate the hotfix in testing and document lessons to prevent recurrence.",
      },
      {
        title: "AI as a copilot",
        text: "I use ChatGPT, Copilot and Cursor to speed up repetitive tasks and explore solutions, always reviewing the output and adapting it to the architecture.",
      },
      {
        title: "Resilient workflows",
        text: "I design loading states, error handling, timeouts and idempotency to protect critical processes such as payments and ticket issuance.",
      },
    ],
  },
  stack: {
    kicker: "Technology stack",
    title: "Tools I use to deliver value.",
    data: "Data & Cloud",
    workflow: "Workflow",
    agile: "agile methodologies",
  },
  contact: {
    available: "Available for new challenges",
    title: "Looking for a developer who understands both code and product?",
    intro:
      "Based in San Salvador de Jujuy, Argentina, and open to remote or hybrid opportunities.",
    invitation:
      "Tell me about your team, your project or the opportunity you have in mind.",
    direct: "You can also email me directly",
    formTitle: "Send me a message",
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email address",
    emailPlaceholder: "you@email.com",
    subject: "Subject",
    subjectPlaceholder: "Project proposal / Job opportunity",
    message: "Message",
    messagePlaceholder: "Tell me about your enquiry or project…",
    send: "Send message",
    sending: "Sending…",
    success:
      "The delivery service has received your message. Thanks for getting in touch!",
    error:
      "We could not confirm delivery. Your message is still here; you can try again or email me directly.",
    invalid: "Please complete the fields with valid content.",
    privacy:
      "I will use your name and email to reply to your enquiry. Delivery is handled by FormSubmit.",
    required: "All fields are required.",
  },
};
