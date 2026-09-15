import { useLocale } from "../i18n/context";
import { CodeWindow } from "./code-window";

export function Hero() {
  const {
    messages: { hero, common },
  } = useLocale();
  return (
    <>
      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />
            {hero.available}
          </span>
          <h1>
            Full Stack Developer<span>{hero.focus}</span>
          </h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#proyectos">
              {common.viewProjects}
              <span>→</span>
            </a>
            <a className="button secondary" href="#contacto">
              {common.talk}
            </a>
          </div>
          <div className="tech-list" aria-label={hero.tech}>
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Angular",
              ".NET",
              "SQL Server",
              "AWS",
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <CodeWindow />
      </section>
      <section
        className="impact-strip section-shell"
        aria-label={hero.impactLabel}
      >
        {hero.impact.map((item) => (
          <article key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </article>
        ))}
      </section>
    </>
  );
}
