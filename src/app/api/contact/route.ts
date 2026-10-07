// Sends contact form messages by email through Resend (https://resend.com).
// Set RESEND_API_KEY and CONTACT_TO_EMAIL in the environment to turn it on.
// CONTACT_FROM_EMAIL is optional and must be an address on a domain verified in Resend.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Payload;

  // Hidden "website" field: real visitors leave it empty, most bots fill it in.
  if (text(body.website, 200)) return Response.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 200);
  const subject = text(body.subject, 150);
  const message = text(body.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return Response.json(
      { ok: false, error: "Please add your name, a valid email and a message of at least 10 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio: ${subject || "New message"} (from ${name})`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    }),
  });

  if (!response.ok) {
    return Response.json({ ok: false, error: "Sending failed. Please try again in a minute." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
