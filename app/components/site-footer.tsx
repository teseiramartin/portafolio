import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocale } from "../i18n/context";

export function SiteFooter() {
  const {
    messages: { common },
  } = useLocale();
  return (
    <footer>
      <div className="section-shell footer-main">
        <a className="footer-brand" href="#inicio" aria-label={common.backHome}>
          <img
            className="footer-avatar"
            src="/assets/perfil.png"
            alt=""
            width="34"
            height="34"
          />
          <strong>Martin Teseira</strong>
        </a>
        <div className="footer-links">
          <a
            href="https://github.com/teseiramartin"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-teseira"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="#contacto" aria-label={common.contact}>
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© {new Date().getFullYear()} Martin Teseira</span>
        <span>Full Stack Developer · San Salvador de Jujuy</span>
      </div>
    </footer>
  );
}
