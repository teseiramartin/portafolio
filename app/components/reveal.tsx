import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { useReducedMotion } from "../hooks/use-reduced-motion";

/** Progressive enhancement: visible by default, reveal once when entering the viewport. */
export function Reveal({
  children,
  className = "",
  variant = "rise",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: "rise" | "fade" | "left" | "right" | "scale";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || !("IntersectionObserver" in window)) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -32px 0px", threshold: 0 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      delete element.dataset.reveal;
    };
  }, [reduced]);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-variant={variant}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
