import { useLocale } from "../i18n/context";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function TechStack() {
  const {
    messages: { stack },
  } = useLocale();
  const groups = [
    [
      "FE",
      "Frontend",
      "React · Next.js · Angular · TypeScript · JavaScript · Tailwind CSS · Material UI · Redux",
    ],
    [
      "BE",
      "Backend",
      "C# · ASP.NET Core · .NET · Entity Framework Core · APIs REST",
    ],
    [
      "DB",
      stack.data,
      "SQL Server · MySQL · AWS S3 · EC2 · CloudWatch · Secrets Manager · Vercel",
    ],
    [
      "DX",
      stack.workflow,
      `Git · GitFlow · Jira · Postman · Figma · CI/CD · ${stack.agile}`,
    ],
  ];
  return (
    <section className="stack-section" id="stack">
      <div className="section-shell">
        <Reveal variant="fade">
          <SectionHeading {...stack} className="compact-heading" />
        </Reveal>
        <div className="stack-grid">
          {groups.map(([id, title, text], i) => (
            <Reveal key={id} variant="scale" delay={(i % 2) * 90}>
              <article>
                <span className="stack-icon">{id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
