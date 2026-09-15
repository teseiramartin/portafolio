import { useEffect, useState, type ReactNode } from "react";
import { es } from "./es";
import { en } from "./en";

import { LocaleContext, type Locale } from "./context";
const dictionaries = { es, en };

function initialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("portfolio-locale");
    if (saved === "en" || saved === "es") return saved;
  } catch {
    /* Storage can be disabled; the selector still works. */
  }
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `Martin Teseira | Full Stack Developer · ${locale === "es" ? "Portafolio" : "Portfolio"}`;
    try {
      localStorage.setItem("portfolio-locale", locale);
    } catch {
      /* Optional persistence. */
    }
  }, [locale]);
  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, messages: dictionaries[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
