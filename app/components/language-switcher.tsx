import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLocale, type Locale } from "../i18n/context";

const languages: { locale: Locale; name: string; flag: string }[] = [
  { locale: "es", name: "Español", flag: "ar" },
  { locale: "en", name: "English", flag: "gb" },
];

export function LanguageSwitcher() {
  const {
    locale,
    setLocale,
    messages: { common },
  } = useLocale();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();
  const current = languages.find((language) => language.locale === locale)!;

  useEffect(() => {
    if (!open) return;
    options.current[
      languages.findIndex((language) => language.locale === locale)
    ]?.focus();
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open, locale]);

  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <div
      className="language-switcher"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          close();
        }
        if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key))
          return;
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        const active = options.current.findIndex(
          (option) => option === document.activeElement,
        );
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? languages.length - 1
              : (active +
                  (event.key === "ArrowDown" ? 1 : -1) +
                  languages.length) %
                languages.length;
        options.current[next]?.focus();
      }}
    >
      <button
        ref={trigger}
        type="button"
        className="language-trigger"
        aria-label={`${common.language}: ${current.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => setOpen(!open)}
      >
        <img
          className="language-flag"
          src={`/assets/flags/${current.flag}.svg`}
          alt=""
          width="24"
          height="18"
        />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      {open && (
        <div
          className="language-menu"
          id={menuId}
          role="menu"
          aria-label={common.language}
        >
          {languages.map((language, index) => (
            <button
              key={language.locale}
              ref={(element) => {
                options.current[index] = element;
              }}
              type="button"
              role="menuitemradio"
              aria-checked={locale === language.locale}
              tabIndex={-1}
              lang={language.locale}
              onClick={() => {
                setLocale(language.locale);
                close();
              }}
            >
              <img
                className="language-flag"
                src={`/assets/flags/${language.flag}.svg`}
                alt=""
                width="24"
                height="18"
              />
              <span>{language.name}</span>
              <span className="language-code">
                {language.locale.toUpperCase()}
              </span>
              {locale === language.locale && (
                <Check size={14} aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
