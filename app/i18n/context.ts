import { createContext, useContext } from "react";
import type { Messages } from "./es";

export type Locale = "es" | "en";
export const LocaleContext = createContext<{
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
} | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale requires LocaleProvider");
  return context;
}
