import { ExternalLink } from "lucide-react";
import { useLocale } from "../i18n/context";
import { ticketPassImages, gisImages, smallProjects } from "../data/projects";
import ProjectGallery from "../project-gallery";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="tags">
      {items.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export function Projects() {
  const {
    messages: { projects, common },
  } = useLocale();
  const { ticketpass, gis } = projects;
  return (
    <section className="projects section-shell" id="proyectos">
      <Reveal variant="fade">
        <SectionHeading {...projects} />
      </Reveal>
      <Reveal variant="left">
        <article className="featured-project">
          <div className="project-copy">
            <span className="project-label">{ticketpass.label}</span>
            <h3>{ticketpass.title}</h3>
            <p className="project-subtitle">{ticketpass.subtitle}</p>
            <p>{ticketpass.description}</p>
            <p>
              <strong>{common.contribution}</strong> {ticketpass.contribution}
            </p>
            <Tags items={["React / Next.js", ".NET", "SQL Server", "AWS"]} />
            <div className="project-links">
              <a
                href="https://www.ticketpass.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                {ticketpass.clientLink}
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.ticketpass.com.ar/producers"
                target="_blank"
                rel="noreferrer"
              >
                {ticketpass.producersLink}
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
          <ProjectGallery
            project="ticketPass"
            shots={ticketpass.shots.map((shot, i) => ({
              ...shot,
              src: `/assets/${ticketPassImages[i]}`,
            }))}
          />
          <div className="project-case">
            <div>
              <span className="project-label">{ticketpass.challengeLabel}</span>
              <h4>{ticketpass.challenge}</h4>
            </div>
            <p>{ticketpass.solution}</p>
            <p className="project-outcome">
              <strong>{common.result}</strong>
              {ticketpass.outcome}
            </p>
          </div>
        </article>
      </Reveal>
      <Reveal variant="right">
        <article className="current-project">
          <div className="current-project-copy">
            <span className="project-label">{gis.label}</span>
            <h3>{gis.title}</h3>
            <p className="project-subtitle">{gis.subtitle}</p>
            <p>{gis.description}</p>
            <p>
              <strong>{common.contribution}</strong> {gis.contribution}
            </p>
            <Tags
              items={["Angular 20", "TypeScript", "Tailwind CSS", "Docker"]}
            />
            <p className="project-access">{gis.access}</p>
          </div>
          <ProjectGallery
            project="GISSO / SSR Mining"
            shots={gis.shots.map((shot, i) => ({
              ...shot,
              src: `/assets/${gisImages[i]}`,
            }))}
          />
        </article>
      </Reveal>
      <div className="project-grid">
        {smallProjects.map((project, i) => {
          const copy = projects.small[i];
          return (
            <Reveal key={project.id} variant="scale" delay={i * 90}>
              <article className="project-card">
                <div className="project-card-top">
                  <span className="project-label">
                    {project.kind === "development"
                      ? "AGENT-AI"
                      : common[project.kind]}
                  </span>
                  <span className="live-badge">
                    <i />
                    {project.kind === "development"
                      ? common.development
                      : "LIVE"}
                  </span>
                </div>
                <ProjectGallery
                  project={copy.title}
                  compact
                  shots={[{ ...copy.shot, src: `/assets/${project.image}` }]}
                />
                <h3>{copy.title}</h3>
                <p>{copy.description}</p>
                <Tags items={project.tags} />
                {project.url ? (
                  <a
                    className="card-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {common.viewProject}
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="card-note">{copy.note}</span>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
