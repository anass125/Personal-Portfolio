import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const emailOk = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, topic, message, website } = body ?? {};

  // Honeypot: bots fill this. Pretend success, send nothing.
  if (website) return Response.json({ ok: true });

  const n = String(name ?? "").trim();
  const e = String(email ?? "").trim();
  const p = String(phone ?? "").trim();
  const t = String(topic ?? "").trim();
  const m = String(message ?? "").trim();

  if (!n || !e || !m) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!emailOk(e)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (n.length > 100 || e.length > 200 || p.length > 30 || t.length > 100 || m.length > 4000) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: e,
      subject: `New message from ${n}: ${t || "Portfolio contact"}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(n)}</p>
        <p><strong>Email:</strong> ${escapeHtml(e)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(p || "Not provided")}</p>
        <p><strong>Topic:</strong> ${escapeHtml(t)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(m)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send your message. Please try again." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}