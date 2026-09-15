import assert from "node:assert/strict";
import test from "node:test";
import {
  sendContactMessage,
  CONTACT_ENDPOINT,
} from "../app/services/contact.ts";

const message = {
  name: "Portfolio test",
  email: "test@example.com",
  subject: "Test",
  message: "Test message",
  _honey: "",
};

test("sends the visitor reply address and message to the configured endpoint", async () => {
  const signal = new AbortController().signal;
  await sendContactMessage(message, signal, async (url, options) => {
    assert.equal(url, CONTACT_ENDPOINT);
    assert.equal(options.signal, signal);
    assert.equal(options.method, "POST");
    const body = JSON.parse(options.body);
    assert.equal(body.email, message.email);
    assert.equal(body.message, message.message);
    assert.equal(body._subject, "Portfolio · Test");
    return Response.json({ success: "true" });
  });
});

test("does not treat provider rejection or an HTTP failure as success", async () => {
  for (const response of [
    Response.json({ success: "false" }),
    Response.json({ success: true }, { status: 500 }),
    Response.json({ message: "Pending" }),
  ]) {
    await assert.rejects(
      sendContactMessage(
        message,
        new AbortController().signal,
        async () => response,
      ),
    );
  }
});

test("reports malformed responses and network failures instead of false success", async () => {
  await assert.rejects(
    sendContactMessage(
      message,
      new AbortController().signal,
      async () => new Response("<html>Error</html>"),
    ),
  );
  await assert.rejects(
    sendContactMessage(message, new AbortController().signal, async () => {
      throw new TypeError("Network error");
    }),
  );
});

test("passes cancellation to the transport", async () => {
  const abort = new AbortController();
  abort.abort();
  await assert.rejects(
    sendContactMessage(message, abort.signal, async (_url, { signal }) => {
      signal.throwIfAborted();
      return Response.json({ success: true });
    }),
    { name: "AbortError" },
  );
});
