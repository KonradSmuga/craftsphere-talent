import { EMAIL_PATTERN, failure, field, json, looksLikeSpam, sendMail, toBase64 } from "../../_lib/mail";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

/** Candidate CV submission from /candidates. */
export async function POST(request: Request): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: "invalid_request" });
  }

  if (looksLikeSpam(form)) return json(200, { ok: true });

  const name = field(form, "name", 120);
  const email = field(form, "email", 200);
  const phone = field(form, "phone", 60);
  const linkedin = field(form, "linkedin", 300);
  const specialism = field(form, "specialism", 60);
  const location = field(form, "location", 160);
  const message = field(form, "message", 4000);
  const consent = field(form, "consent", 10) === "yes";
  const cv = form.get("cv");

  const file = cv instanceof File && cv.size > 0 ? cv : null;
  const extension = file ? file.name.slice(file.name.lastIndexOf(".")).toLowerCase() : "";

  const missing = [
    !name && "name",
    !EMAIL_PATTERN.test(email) && "email",
    !location && "location",
    !consent && "consent",
    (!file || !ALLOWED_EXTENSIONS.includes(extension)) && "cv",
  ].filter(Boolean);
  if (missing.length) return json(422, { ok: false, error: "invalid_fields", fields: missing });
  if (file!.size > MAX_CV_BYTES) return json(413, { ok: false, error: "file_too_large" });

  const safeName = name.replace(/[^\p{L}\p{N} .-]/gu, "").trim().replace(/\s+/g, "-") || "candidate";
  const attachment = {
    filename: `CV-${safeName}${extension}`,
    content: toBase64(new Uint8Array(await file!.arrayBuffer())),
  };

  const text = [
    "New CV from craftspheretalent.com/candidates",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `LinkedIn: ${linkedin || "-"}`,
    `Specialism: ${specialism || "-"}`,
    `Location: ${location}`,
    `Consent to processing: yes (${new Date().toISOString()})`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  try {
    await sendMail({
      subject: `CV: ${name}${specialism ? ` (${specialism})` : ""}`,
      text,
      replyTo: email,
      attachments: [attachment],
    });
    return json(200, { ok: true });
  } catch (error) {
    return failure(error);
  }
}
