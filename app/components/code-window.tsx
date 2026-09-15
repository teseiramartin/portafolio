import { useEffect, useState } from "react";
import { useLocale } from "../i18n/context";
import { useReducedMotion } from "../hooks/use-reduced-motion";

type Token = { text: string; className?: string };
export function CodeWindow() {
  const {
    messages: { hero },
    locale,
  } = useLocale();
  return <TypingCode key={locale} hero={hero} />;
}

function TypingCode({
  hero,
}: {
  hero: ReturnType<typeof useLocale>["messages"]["hero"];
}) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const lines: Token[][] = [
    [{ text: hero.codeComment, className: "comment" }],
    [{ text: "const", className: "code-keyword" }, { text: " developer = {" }],
    [
      { text: "  frontend: " },
      { text: '"React · Next.js"', className: "code-string" },
      { text: "," },
    ],
    [
      { text: "  backend: " },
      { text: '"ASP.NET Core"', className: "code-string" },
      { text: "," },
    ],
    [
      { text: "  focus: [" },
      {
        text: `"UX", "${hero.quality}", "${hero.product}"`,
        className: "code-string",
      },
      { text: "]," },
    ],
    [
      { text: "  production: " },
      { text: "true", className: "success" },
      { text: "," },
    ],
    [{ text: "};" }],
    [{ text: "$ npm run build", className: "terminal" }],
    [{ text: hero.success, className: "success" }],
  ];
  const total = lines.flat().reduce((sum, token) => sum + token.text.length, 0);
  useEffect(() => {
    if (reduced) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const next = Math.min(
        total,
        Math.floor(Math.max(0, now - start - 200) / 7),
      );
      setCount(next);
      if (next < total) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [total, reduced]);
  const visible = reduced ? total : count;
  let offset = 0;
  return (
    <div className="code-window" role="region" aria-label={hero.codeLabel}>
      <div className="window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>production-mindset.ts</span>
        <span className="window-tag">React · .NET</span>
      </div>
      <pre className="sr-only">
        {lines
          .map((line) => line.map((token) => token.text).join(""))
          .join("\n")}
      </pre>
      <div className="code-content typing-code" aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <div className={`code-line code-line-${lineIndex}`} key={lineIndex}>
            {line.map((token, tokenIndex) => {
              const start = offset;
              offset += token.text.length;
              const length = Math.max(
                0,
                Math.min(token.text.length, visible - start),
              );
              return (
                <span key={tokenIndex} className={token.className}>
                  <span>{token.text.slice(0, length)}</span>
                  {visible >= start && visible < offset && (
                    <span className="typing-caret" />
                  )}
                  <span className="untyped">{token.text.slice(length)}</span>
                </span>
              );
            })}
            {lineIndex === lines.length - 1 && visible === total && (
              <span className="typing-caret typing-caret-idle" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
