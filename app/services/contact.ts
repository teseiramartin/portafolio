export const CONTACT_EMAIL = "teseiramartin@gmail.com";
export const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  _honey: string;
};

/** FormSubmit confirms acceptance, not final mailbox delivery. Activation is documented in README. */
export async function sendContactMessage(
  message: ContactMessage,
  signal: AbortSignal,
  request: typeof fetch = fetch,
) {
  const response = await request(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    signal,
    body: JSON.stringify({
      ...message,
      _subject: `Portfolio · ${message.subject}`,
      _template: "table",
    }),
  });
  const result = await response.json();
  if (!response.ok || (result.success !== true && result.success !== "true"))
    throw new Error("Contact submission not accepted");
}
