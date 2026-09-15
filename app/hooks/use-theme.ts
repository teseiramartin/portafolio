import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved === "dark";
    } catch {
      /* Use system preference when storage is blocked. */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      /* Optional persistence. */
    }
  }, [dark]);
  return { dark, toggleTheme: () => setDark((current) => !current) };
}
