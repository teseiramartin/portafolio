import { useLocale } from "../i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function WorkMethod() {
  const {
    messages: { method },
  } = useLocale();
  return (
    <section className="work-method section-shell">
      <Reveal variant="fade">
        <SectionHeading {...method} />
      </Reveal>
      <div className="principles-grid">
        {method.items.map((item, i) => (
          <Reveal key={i} variant="rise" delay={i * 100}>
            <article>
              <span>0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
