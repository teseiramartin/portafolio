"use client";

import { useEffect, useState } from "react";
import { Download, Moon, Sun, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <div><span className="kicker">Trabajo destacado</span><h2>Productos en los que dejé huella</h2></div>
          <p>Experiencia profesional y proyectos propios, explicados desde el problema y el impacto.</p>
        </div>

        <article className="featured-project">
          <div className="project-copy">
            <span className="project-label">EXPERIENCIA PROFESIONAL · 2020—2026</span>
            <h3>ticketPass</h3>
            <p className="project-subtitle">Plataforma de venta y gestión de entradas para eventos.</p>
            <p>
              Trabajé durante más de 5 años en la evolución del producto como Full Stack Developer, con foco en Frontend. Fui referente técnico de las aplicaciones web y participé en la migración de React a Next.js, integraciones de pagos, autenticación, APIs .NET y funcionalidades críticas en producción.
            </p>
            <div className="tags"><span>React / Next.js</span><span>.NET</span><span>SQL Server</span><span>AWS</span></div>
            <div className="project-links">
              <a href="https://www.ticketpass.com.ar/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Web cliente <ExternalLink size={12} /></a>
              <a href="https://www.ticketpass.com.ar/producers" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Landing productoras <ExternalLink size={12} /></a>
              <a href="https://manager.ticketpass.com.ar/#/events" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Web manager <ExternalLink size={12} /></a>
            </div>
          </div>
          <div className="project-visual" aria-hidden="true">
            <div className="mini-browser">
              <div className="mini-browser-bar"><i /><i /><i /><span>manager.ticketpass.com.ar</span></div>
              <div className="dashboard-shell">
                <aside><b>tp</b><span /><span /><span /><span /></aside>
                <div className="dashboard-content">
                  <div className="dashboard-top"><span>Eventos</span><button>+ Crear evento</button></div>
                  <div className="metric-row"><span /><span /><span /></div>
                  <div className="chart"><i /><i /><i /><i /><i /><i /><i /></div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="current-project">
          <div className="current-project-copy">
            <div className="project-meta-row">
              <span className="project-label">PROYECTO PROFESIONAL ACTUAL</span>
              <span className="live-badge"><i /> EN DESARROLLO</span>
            </div>
            <h3>Panel de Higiene Ocupacional</h3>
            <p className="project-subtitle">Plataforma de gestión desarrollada para SSR Mining.</p>
            <p>
              Desarrollo funcionalidades frontend con Angular para digitalizar procesos de higiene ocupacional. Trabajo en módulos de muestras, laboratorio, equipos y reportes, creando componentes reutilizables e integrando las interfaces con las APIs del sistema.
            </p>
            <div className="tags"><span>Angular 20</span><span>TypeScript</span><span>Tailwind CSS</span><span>Docker</span></div>
            <a className="inline-project-link" href="https://ssrmining.gisso.com.ar/samples?tab=chemical&site=1" target="_blank" rel="noreferrer">Visitar plataforma <ExternalLink size={16} /></a>
          </div>
          <div className="pmho-visual" aria-hidden="true">
            <div className="pmho-window">
              <div className="pmho-sidebar"><b>G</b><i /><i /><i /><i /></div>
              <div className="pmho-content">
                <div className="pmho-header"><span>Muestras</span><small>Químicos</small></div>
                <div className="pmho-tabs"><b>Químicos</b><span>Físicos</span><span>Ergonómicos</span></div>
                <div className="pmho-summary"><i /><i /><i /></div>
                <div className="pmho-table"><span /><span /><span /><span /><span /></div>
              </div>
            </div>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-card-top"><span className="project-label">PROYECTO PERSONAL</span><span className="live-badge"><i /> LIVE</span></div>
            <div className="project-monogram">TG</div>
            <h3>TicketGenerator</h3>
            <p>
              Aplicación web para crear y administrar tickets, con flujos simples, validaciones y
              una interfaz enfocada en la facilidad de uso.
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

            <div className="project-monogram warm">BI</div>

            <h3>Flexxus BI</h3>

            <p>
              Dashboard fiscal y comercial para una concesionaria de motos, desarrollado a partir de reportes de Power BI e integrado con una API .NET.
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
            <div className="project-card-top"><span className="project-label">PROYECTO PARA CLIENTE</span><span className="live-badge"><i /> EN DESARROLLO</span></div>
            <div className="project-monogram cyan">360°</div>
            <h3>Tour virtual para Salta Mining</h3>
            <p>
              Aplicación Android offline para visor VR, con panoramas 360°, hotspots informativos y
              navegación entre diferentes sectores del recorrido.
            </p>
            <div className="tags"><span>Unity</span><span>Android</span><span>Google Cardboard</span></div>
            <span className="card-note">4–5 panoramas · experiencia inmersiva</span>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><span className="kicker">Caso de experiencia</span><h2>Construir para producción también es saber responder.</h2></div>
            <p>En ticketPass trabajé sobre una plataforma donde estabilidad, seguridad y experiencia de compra tenían impacto directo en el negocio.</p>
          </div>

          <div className="experience-grid">
            <article className="timeline-card">
              <span className="timeline-year">2020—2026</span>
              <h3>Pinard Software e Innovación</h3>
              <p>Full Stack Developer · Referente técnico Frontend</p>
              <ul>
                <li>Migración de la web cliente desde React hacia Next.js.</li>
                <li>Web manager, web cliente y soporte de funcionalidades móviles.</li>
                <li>Pagos, autenticación, sesiones e integraciones externas.</li>
                <li>APIs REST con ASP.NET Core y Entity Framework Core.</li>
              </ul>
            </article>

            <article className="case-card">
              <span className="case-number">01</span>
              <div>
                <span className="project-label">DESAFÍO DESTACADO</span>
                <h3>Fila virtual para ventas de alta demanda</h3>
                <p>
                  Participé en la integración de una cola virtual para regular picos de tráfico antes
                  de que las solicitudes alcanzaran la base de datos. Además, reforcé el flujo con
                  cookies firmadas y controles de sesión para reducir el uso indebido de tokens.
                </p>
                <div className="case-result">
                  <strong>Resultado</strong>
                  <span>Ventas más estables, carga controlada y un acceso más seguro durante eventos masivos.</span>
                </div>
              </div>
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
