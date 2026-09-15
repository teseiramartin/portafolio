import { useLocale } from "../i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const {
    messages: { experience },
  } = useLocale();
  return (
    <section className="experience-section" id="experiencia">
      <div className="section-shell">
        <Reveal variant="fade">
          <SectionHeading {...experience} className="light-heading" />
        </Reveal>
        <div className="experience-grid">
          <Reveal variant="left">
            <article className="timeline-card">
              <span className="timeline-year">{experience.period}</span>
              <h3>Pinard Software e Innovación</h3>
              <p>{experience.role}</p>
              <ul>
                {experience.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <article className="timeline-card education-card">
              <span className="timeline-year">{experience.education}</span>
              <h3>{experience.degree}</h3>
              <p>{experience.university}</p>
              <ul>
                {experience.learning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
