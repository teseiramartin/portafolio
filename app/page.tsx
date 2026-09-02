"use client";

import { useEffect, useState } from "react";
import { Download, Moon, Sun, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectGallery from "./project-gallery";

const ticketPassShots = [
  { src: "/assets/ticketPass-home.png", label: "Web cliente", alt: "ticketPass: buscador y catálogo de eventos con fechas, ubicaciones y compra de entradas." },
  { src: "/assets/ticketPass-evento.png", label: "Entradas", alt: "Detalle de evento con selección de entradas, cantidades y resumen de compra." },
  { src: "/assets/ticketPass-pago.png", label: "Pagos", alt: "Resumen de compra y selección de pago con Mercado Pago o transferencia." },
  { src: "/assets/ticketPass-manager.png", label: "Manager", alt: "Administración de eventos con filtros, edición y acceso a planimetría." },
  { src: "/assets/ticketPass-dashboard.png", label: "Dashboard", alt: "Dashboard de productoras con gráficos de ventas, invitaciones y reembolsos." },
  { src: "/assets/ticketPass-mis-compras.png", label: "Mis compras", alt: "Historial de compras del cliente con detalle y estado de sus tickets." },
];

const gisShots = [
  { src: "/assets/ssr-miming-muestras.png", label: "Muestras", alt: "GISSO: tabla de muestras físicas con categorías, estados y acciones en el entorno de test." },
  { src: "/assets/ssr-miming-ges.png", label: "Grupos de exposición", alt: "Gestión de grupos de exposición similar con filtros, indicadores y clasificación de riesgos." },
  { src: "/assets/ssr-mining-view-ges.png", label: "Indicadores", alt: "Detalle de un grupo de exposición con indicadores estadísticos y gráficos del entorno de test." },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Angular",
  ".NET",
  "SQL Server",
  "AWS",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    const frame = window.requestAnimationFrame(() => {
      setDarkMode(initialTheme);
      setIsHydrated(true);
      document.documentElement.dataset.theme = initialTheme ? "dark" : "light";
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode, isHydrated]);

  const toggleTheme = () => {
    const nextTheme = !darkMode;
    setDarkMode(nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme ? "dark" : "light");
  };

  return (
    <main>
      <div className="availability-bar">
        <span className="status-dot" /> Disponible para roles remotos o híbridos
        <a href="mailto:teseiramartin@gmail.com">Contactar →</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">MT</span>
          <span>
            <strong>Martin Teseira</strong>
            <small>FULL STACK DEVELOPER</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a className="active" href="#inicio">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">Contacto</a>
          <a className="cv-link" href="/Martin_Teseira_CV.pdf" download>
            <Download size={16} aria-hidden="true" />
            <span>Descargar CV</span>
          </a>
          <button className="theme-button" onClick={toggleTheme} aria-label="Cambiar tema">
            {isHydrated ? (darkMode ? <Moon size={16} /> : <Sun size={16} />) : <Moon size={16} />}
          </button>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> Abierto a nuevas oportunidades</span>
          <h1>
            Full Stack Developer
            <span>con foco en Frontend</span>
          </h1>
          <p className="hero-description">
            Desarrollo productos web y móviles con React, Next.js, TypeScript y .NET.
            Más de 5 años convirtiendo necesidades de negocio en experiencias claras,
            estables y listas para producción.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#proyectos">Ver proyectos <span>→</span></a>
            <a className="button secondary" href="mailto:teseiramartin@gmail.com">Hablemos</a>
          </div>
          <div className="tech-list" aria-label="Tecnologías principales">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>

        <div className="code-window" aria-label="Ejemplo de enfoque técnico">
          <div className="window-bar">
            <span className="window-dots"><i /><i /><i /></span>
            <span>production-mindset.ts</span>
            <span className="window-tag">React · .NET</span>
          </div>
          <div className="code-content">
            <p className="comment">{"// resolver con criterio, no solo con código"}</p>
            <p><b>const</b> developer = {'{'}</p>
            <p className="indent">frontend: <em>&quot;React · Next.js&quot;</em>,</p>
            <p className="indent">backend: <em>&quot;ASP.NET Core&quot;</em>,</p>
            <p className="indent">focus: [<em>&quot;UX&quot;</em>, <em>&quot;calidad&quot;</em>, <em>&quot;producto&quot;</em>],</p>
            <p className="indent">production: <strong>true</strong>,</p>
            <p>{'}'};</p>
            <p className="terminal">$ npm run build</p>
            <p className="success">✓ Experiencia real · mejora continua</p>
          </div>
        </div>
      </section>

      <section className="impact-strip section-shell" aria-label="Resumen de experiencia">
        <article><strong>5+ años</strong><span>Experiencia profesional</span></article>
        <article><strong>Web + Mobile</strong><span>Productos en producción</span></article>
        <article><strong>Frontend first</strong><span>React · Next.js · Angular</span></article>
        <article><strong>Full cycle</strong><span>Desarrollo · deploy · soporte</span></article>
      </section>

      <section className="projects section-shell" id="proyectos">
        <div className="section-heading">
          <div><span className="kicker">Trabajo destacado</span><h2>Proyectos y experiencia profesional</h2></div>
          <p>Experiencia profesional y proyectos propios, explicados desde el problema y el impacto.</p>
        </div>

        <article className="featured-project">
          <div className="project-copy">
            <span className="project-label">EXPERIENCIA PROFESIONAL · 2020—2026</span>
            <h3>ticketPass</h3>
            <p className="project-subtitle">Plataforma de venta y gestión de entradas para eventos.</p>
            <p>
              Full Stack Developer y referente técnico Frontend durante más de 5 años. Trabajé en la web cliente y el manager, desde las interfaces hasta los flujos críticos de compra.
            </p>
            <p><strong>Mi aporte:</strong> migración de React a Next.js, integración de Mercado Pago, autenticación y APIs con ASP.NET Core y Entity Framework Core.</p>
            <div className="tags"><span>React / Next.js</span><span>.NET</span><span>SQL Server</span><span>AWS</span></div>
            <div className="project-links">
              <a href="https://www.ticketpass.com.ar/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Web cliente <ExternalLink size={12} /></a>
              <a href="https://www.ticketpass.com.ar/producers" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Landing productoras <ExternalLink size={12} /></a>
            </div>
          </div>
          <ProjectGallery project="ticketPass" shots={ticketPassShots} />
          <div className="project-case">
            <div><span className="project-label">DESAFÍO EN PRODUCCIÓN</span><h4>Fila virtual para ventas de alta demanda</h4></div>
            <p>Integré un proveedor de fila virtual, coordiné la implementación con el equipo y documenté el proceso. También participé en mejoras de sesión para evitar que se salteara la fila entre dispositivos.</p>
            <p className="project-outcome"><strong>Resultado</strong> Mayor estabilidad de la plataforma durante eventos con miles de usuarios intentando comprar al mismo tiempo.</p>
          </div>
        </article>

        <article className="current-project">
          <div className="current-project-copy">
            <div className="project-meta-row">
              <span className="project-label">EXPERIENCIA PROFESIONAL · GISSO / SSR MINING</span>
            </div>
            <h3>Panel de Higiene Ocupacional</h3>
            <p className="project-subtitle">Plataforma de gestión desarrollada para SSR Mining.</p>
            <p>
              Desarrollé funcionalidades frontend con Angular para digitalizar procesos de higiene ocupacional: muestras, laboratorio, equipos y reportes.
            </p>
            <p><strong>Mi aporte:</strong> tablas, formularios y componentes reutilizables conectados con las APIs del sistema, para centralizar la consulta y gestión de información.</p>
            <div className="tags"><span>Angular 20</span><span>TypeScript</span><span>Tailwind CSS</span><span>Docker</span></div>
            <p className="project-access">Plataforma privada · Capturas del entorno de test</p>
          </div>
          <ProjectGallery project="GISSO / SSR Mining" shots={gisShots} />
        </article>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-card-top"><span className="project-label">PROYECTO PERSONAL</span><span className="live-badge"><i /> LIVE</span></div>
            <ProjectGallery project="TicketGenerator" compact shots={[{ src: "/assets/ticketGenerator-ticketFlow.png", label: "Editor de tickets", alt: "TicketFlow: editor visual de tickets con plantilla, datos CSV, campos y código QR." }]} />
            <h3>TicketGenerator</h3>
            <p>
              Desarrollé un generador de tickets con carga de plantillas y CSV, posicionamiento visual de campos y QR, y configuración de PDF. Un flujo guiado para preparar tickets en lote.
            </p>
            <div className="tags"><span>React</span><span>TypeScript</span><span>Vercel</span></div>
            <a className="card-link" href="https://ticket-flow-blond.vercel.app/" target="_blank" rel="noreferrer">Ver proyecto <ExternalLink size={16} /></a>
          </article>

          <article className="project-card">
            <div className="project-card-top">
              <span className="project-label">
                PROYECTO PARA CLIENTE
              </span>
              <span className="live-badge">
                <i /> LIVE
              </span>
            </div>

            <ProjectGallery project="Flexxus BI" compact shots={[{ src: "/assets/flexxus.png", label: "Resumen fiscal y comercial", alt: "Flexxus BI: indicadores de IVA, evolución mensual, comprobantes y filtros por período y sucursal." }]} />

            <h3>Flexxus BI</h3>

            <p>
              Desarrollé un dashboard fiscal y comercial para una concesionaria de motos a partir de reportes de Power BI. Integré una API .NET para consultar indicadores, gráficos y filtros desde una interfaz web.
            </p>

            <div className="tags">
              <span>React 19</span>
              <span>TypeScript</span>
              <span>.NET</span>
            </div>

            <a
              className="card-link"
              href="https://flexxus-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto <ExternalLink size={16} />
            </a>
          </article>

          <article className="project-card">
            <div className="project-card-top"><span className="project-label">AGENT-AI</span><span className="live-badge"><i /> EN DESARROLLO</span></div>
            <ProjectGallery project="Agent AI" compact shots={[{ src: "/assets/agent-ai.png", label: "Bandeja de conversaciones", alt: "Agent AI: bandeja de conversaciones con mensajes, atención por IA, asignación a operadores y prioridad." }]} />
            <h3>Agent AI</h3>
            <p>
              Desarrollo una plataforma de atención conversacional con IA y operadores humanos. Backoffice para gestionar conversaciones, asignaciones y prioridades, con backend .NET y separación de datos por empresa.
            </p>
            <div className="tags"><span>Angular</span><span>.NET 10</span><span>SQL Server</span></div>
            <span className="card-note">Full Stack · IA + atención humana</span>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><span className="kicker">Trayectoria</span><h2>Más de 5 años construyendo productos.</h2></div>
            <p>Experiencia en desarrollo web y móvil, con foco en Frontend y participación en todo el ciclo de desarrollo.</p>
          </div>

          <div className="experience-grid">
            <article className="timeline-card">
              <span className="timeline-year">MAR 2020 — MAY 2026</span>
              <h3>Pinard Software e Innovación</h3>
              <p>Full Stack Developer · Referente técnico Frontend</p>
              <ul>
                <li>Migración de la web cliente desde React hacia Next.js.</li>
                <li>Web manager, web cliente y soporte de funcionalidades móviles.</li>
                <li>Pagos, autenticación, sesiones e integraciones externas.</li>
                <li>APIs REST con ASP.NET Core y Entity Framework Core.</li>
              </ul>
            </article>

            <article className="timeline-card education-card">
              <span className="timeline-year">FORMACIÓN</span>
              <h3>Analista Programador Universitario</h3>
              <p>Universidad Nacional de Jujuy · Facultad de Ingeniería</p>
              <ul>
                <li>2012–2018 · Formación universitaria.</li>
                <li>Inglés intermedio (B1), en formación continua.</li>
                <li>Trabajo en equipo con GitFlow, Jira y metodologías ágiles.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="work-method section-shell">
        <div className="section-heading">
          <div><span className="kicker">Forma de trabajo</span><h2>Criterio técnico con foco en producto.</h2></div>
          <p>No se trata de sumar herramientas: se trata de elegir bien, validar y sostener lo que llega a producción.</p>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Incidentes sin improvisación</h3><p>Aíslo el problema, reviso métricas y logs, valido el hotfix en testing y documento lo aprendido para evitar recurrencias.</p></article>
          <article><span>02</span><h3>IA como copiloto</h3><p>Uso ChatGPT, Copilot y Cursor para acelerar tareas repetitivas y explorar soluciones, siempre auditando el resultado y adaptándolo a la arquitectura.</p></article>
          <article><span>03</span><h3>Flujos resilientes</h3><p>Diseño estados de carga, manejo de errores, timeouts e idempotencia para proteger procesos críticos como pagos y emisión de tickets.</p></article>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="section-shell">
          <div className="section-heading compact-heading">
            <div><span className="kicker">Stack tecnológico</span><h2>Herramientas que uso para entregar valor.</h2></div>
          </div>
          <div className="stack-grid">
            <article><span className="stack-icon">FE</span><h3>Frontend</h3><p>React · Next.js · Angular · TypeScript · JavaScript · Tailwind CSS · Material UI · Redux</p></article>
            <article><span className="stack-icon">BE</span><h3>Backend</h3><p>C# · ASP.NET Core · .NET · Entity Framework Core · APIs REST · Node.js</p></article>
            <article><span className="stack-icon">DB</span><h3>Datos & Cloud</h3><p>SQL Server · MySQL · AWS S3 · EC2 · CloudWatch · Secrets Manager · Vercel</p></article>
            <article><span className="stack-icon">DX</span><h3>Flujo de trabajo</h3><p>Git · GitFlow · Jira · Postman · Figma · CI/CD · metodologías ágiles</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contacto">
        <div className="contact-copy">
          <span className="eyebrow"><span className="status-dot" /> Disponible para nuevos desafíos</span>
          <h2>¿Buscás un developer que entienda el código y el producto?</h2>
          <p>Estoy en San Salvador de Jujuy, Argentina, y abierto a oportunidades remotas o híbridas.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:teseiramartin@gmail.com">Escribime <span>→</span></a>
            <a className="button secondary" href="/Martin_Teseira_CV.pdf" download><Download size={16} /> <span>Descargar CV</span></a>
          </div>
        </div>
        <div className="contact-links">
          <a href="https://github.com/teseiramartin" target="_blank" rel="noreferrer"> <FaGithub size={20} /> <b>github.com/teseiramartin</b><i>↗</i></a>
          <a href="https://www.linkedin.com/in/martin-teseira" target="_blank" rel="noreferrer"> <FaLinkedin size={20} /> <b>linkedin.com/in/martin-teseira</b><i>↗</i></a>
          <a href="mailto:teseiramartin@gmail.com"> <Mail size={20} /><b>teseiramartin@gmail.com</b><i>→</i></a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-main">
          <a className="footer-brand" href="#inicio"><span className="brand-mark">MT</span><strong>Martin Teseira</strong></a>
          <div className="footer-links">
            <a href="https://github.com/teseiramartin" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/martin-teseira" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
            <a href="mailto:teseiramartin@gmail.com"><Mail size={20} /></a>
          </div>
        </div>
        <div className="section-shell footer-bottom"><span>© 2026 Martin Teseira</span><span>Full Stack Developer · San Salvador de Jujuy</span></div>
      </footer>
    </main>
  );
}
