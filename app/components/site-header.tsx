import { useRef, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useLocale } from "../i18n/context";
import { useTheme } from "../hooks/use-theme";
import { LanguageSwitcher } from "./language-switcher";
import { ProfilePhoto } from "./profile-photo";

export function SiteHeader() {
  const {
    messages: { common },
  } = useLocale();
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    ["inicio", common.home],
    ["experiencia", common.experience],
    ["proyectos", common.projects],
    ["stack", common.stack],
    ["contacto", common.contact],
  ];
  return (
    <>
      <div className="availability-bar">
        <span className="status-dot" />
        {common.availability}
        <a href="#contacto">{common.contactAction} →</a>
      </div>
      <header className="site-header">
        <div className="brand">
          <ProfilePhoto />
          <a href="#inicio" aria-label={common.backHome}>
            <strong>Martin Teseira</strong>
            <small>FULL STACK DEVELOPER</small>
          </a>
        </div>
        <div className="header-controls">
          <nav
            id="main-navigation"
            className={open ? "is-open" : ""}
            aria-label={common.nav}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                menuButton.current?.focus();
              }
            }}
          >
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="cv-link"
              href={common.cvFile}
              download
              title={common.cvLanguage}
            >
              <Download size={16} aria-hidden="true" />
              <span>{common.download}</span>
            </a>
          </nav>
          <LanguageSwitcher />
          <button
            className="theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={common.theme}
          >
            {dark ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button
            className="menu-toggle"
            ref={menuButton}
            type="button"
            aria-label={open ? common.close : common.menu}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
    </>
  );
}
