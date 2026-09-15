import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocale } from "../i18n/context";
import { CONTACT_EMAIL } from "../services/contact";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function Contact() {
  const {
    messages: { contact, common },
  } = useLocale();
  return (
    <section className="contact-section section-shell" id="contacto">
      <Reveal variant="fade">
        <div className="contact-copy">
          <span className="eyebrow">
            <span className="status-dot" />
            {contact.available}
          </span>
          <h2>{contact.title}</h2>
          <p>{contact.intro}</p>
          <p>{contact.invitation}</p>
          <div className="contact-links">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`${contact.direct}: ${CONTACT_EMAIL}`}
            >
              <Mail size={20} />
              <b>{CONTACT_EMAIL}</b>
              <i>↗</i>
            </a>
            <a
              href="https://github.com/teseiramartin"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
              <b>github.com/teseiramartin</b>
              <i>↗</i>
            </a>
            <a
              href="https://www.linkedin.com/in/martin-teseira"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
              <b>linkedin.com/in/martin-teseira</b>
              <i>↗</i>
            </a>
          </div>
          <a
            className="button secondary contact-cv"
            href={common.cvFile}
            download
            title={common.cvLanguage}
          >
            <Download size={16} />
            {common.download}
          </a>
        </div>
      </Reveal>
      <Reveal variant="rise" delay={100}>
        <ContactForm />
      </Reveal>
    </section>
  );
}
