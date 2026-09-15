import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useLocale } from "../i18n/context";
import { sendContactMessage, type ContactMessage } from "../services/contact";

export function ContactForm() {
  const {
    messages: { contact },
  } = useLocale();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "invalid"
  >("idle");
  const controller = useRef<AbortController | null>(null);
  useEffect(() => () => controller.current?.abort(), []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (controller.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(
      ["name", "email", "subject", "message", "_honey"].map((key) => [
        key,
        String(data.get(key) ?? "").trim(),
      ]),
    ) as ContactMessage;
    if (!payload.name || !payload.subject || !payload.message) {
      setStatus("invalid");
      return;
    }
    const abort = new AbortController();
    controller.current = abort;
    const timeout = window.setTimeout(() => abort.abort(), 20000);
    setStatus("sending");
    try {
      await sendContactMessage(payload, abort.signal);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      controller.current = null;
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-labelledby="contact-form-title"
      aria-busy={status === "sending"}
    >
      <div className="form-heading">
        <span className="form-icon">
          <Send size={21} aria-hidden="true" />
        </span>
        <div>
          <h3 id="contact-form-title">{contact.formTitle}</h3>
          <p>{contact.required}</p>
        </div>
      </div>
      <fieldset disabled={status === "sending"}>
        <div className="form-row">
          <label htmlFor="contact-name">
            {contact.name}
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder={contact.namePlaceholder}
              maxLength={100}
              required
            />
          </label>
          <label htmlFor="contact-email">
            {contact.email}
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={contact.emailPlaceholder}
              maxLength={254}
              required
            />
          </label>
        </div>
        <label htmlFor="contact-subject">
          {contact.subject}
          <input
            id="contact-subject"
            name="subject"
            placeholder={contact.subjectPlaceholder}
            maxLength={150}
            required
          />
        </label>
        <label htmlFor="contact-message">
          {contact.message}
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder={contact.messagePlaceholder}
            maxLength={5000}
            required
          />
        </label>
        <div className="form-honey" aria-hidden="true">
          <label>
            Website
            <input name="_honey" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button className="button primary submit-button" type="submit">
          {status === "sending" ? (
            <LoaderCircle className="spinner" size={18} aria-hidden="true" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
          {status === "sending" ? contact.sending : contact.send}
        </button>
      </fieldset>
      <div
        className={`form-status ${status}`}
        role={status === "error" || status === "invalid" ? "alert" : "status"}
        aria-live="polite"
      >
        {status === "success" && (
          <>
            <CheckCircle2 size={18} aria-hidden="true" />
            {contact.success}
          </>
        )}
        {status === "error" && contact.error}
        {status === "invalid" && contact.invalid}
      </div>
      <p className="form-privacy">{contact.privacy}</p>
    </form>
  );
}
