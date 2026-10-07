import { EMAIL_PATTERN, failure, field, json, looksLikeSpam, sendMail } from "../../_lib/mail";

/** Hiring brief from the homepage contact form. */
export async function POST(request: Request): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: "invalid_request" });
  }

  // Pretend success to bots so they don't retry.
  if (looksLikeSpam(form)) return json(200, { ok: true });

  const name = field(form, "name", 120);
  const email = field(form, "email", 200);
  const company = field(form, "company", 160);
  const role = field(form, "role", 200);
  const location = field(form, "location", 160);
  const timeline = field(form, "timeline", 60);
  const message = field(form, "message", 4000);

  const missing = [
    !name && "name",
    !EMAIL_PATTERN.test(email) && "email",
    !role && "role",
  ].filter(Boolean);
  if (missing.length) return json(422, { ok: false, error: "invalid_fields", fields: missing });

  const text = [
    "New hiring enquiry from craftspheretalent.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Role: ${role}`,
    `Location / market: ${location || "-"}`,
    `Timeline: ${timeline || "-"}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  try {
    await sendMail({
      subject: `Hiring enquiry: ${role}${company ? ` at ${company}` : ""}`,
      text,
      replyTo: email,
    });
    return json(200, { ok: true });
  } catch (error) {
    return failure(error);
  }
}
