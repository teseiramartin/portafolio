export function SectionHeading({
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`}>
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {intro && <p>{intro}</p>}
    </div>
  );
}
