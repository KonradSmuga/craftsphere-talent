"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactElement, ReactNode } from "react";
import { CheckCircle2, Paperclip } from "lucide-react";

const EMAIL = "konrad@craftspheretalent.com";
const MAX_CV_BYTES = 5 * 1024 * 1024;

type Status = "idle" | "sending" | "sent" | "invalid" | "unavailable" | "error";

/** Shared submit logic: posts the form, tracks status and spam-check fields. */
function useSiteForm(endpoint: string, analyticsName: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [invalid, setInvalid] = useState<string[]>([]);
  const startedAt = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  const formRef = useRef<HTMLFormElement | null>(null);

  // Move focus to the first problem so keyboard and screen-reader users land on it.
  useEffect(() => {
    if (status !== "invalid" || !invalid.length) return;
    const first = formRef.current?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`);
    first?.focus();
  }, [status, invalid]);

  async function submit(event: FormEvent<HTMLFormElement>, check?: (form: FormData) => string[]) {
    event.preventDefault();
    const element = event.currentTarget;
    const data = new FormData(element);

    const localProblems = check?.(data) ?? [];
    if (localProblems.length) {
      setInvalid(localProblems);
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    setInvalid([]);
    try {
      const response = await fetch(endpoint, { method: "POST", body: data });
      const result = (await response.json().catch(() => ({}))) as { error?: string; fields?: string[] };
      if (response.ok) {
        setStatus("sent");
        window.gtag?.("event", "generate_lead", { form_name: analyticsName });
        return;
      }
      if (result.error === "invalid_fields" || result.error === "file_too_large") {
        setInvalid(result.error === "file_too_large" ? ["cv"] : result.fields ?? []);
        setStatus("invalid");
        return;
      }
      setStatus(result.error === "not_configured" ? "unavailable" : "error");
    } catch {
      setStatus("error");
    }
  }

  const spamFields = (
    <>
      <input ref={startedAt} type="hidden" name="started_at" defaultValue="" />
      <div className="form-hp" aria-hidden="true">
        <label>Website <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
    </>
  );

  return { status, invalid, submit, spamFields, formRef };
}

const ERRORS: Record<string, string> = {
  name: "Enter your name.",
  email: "Enter a valid email address, e.g. name@company.com.",
  role: "Enter the role you're hiring for.",
  location: "Enter where you're based.",
  cv: "Attach your CV as a PDF or Word file up to 5 MB.",
  consent: "Tick the box to agree to your CV being stored.",
};

function Field({
  label,
  name,
  invalid,
  hint,
  children,
  wide,
}: {
  label: string;
  name: string;
  invalid: string[];
  hint?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  const isInvalid = invalid.includes(name);
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = isInvalid ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  // Give the control (or the file input inside its wrapper) aria-invalid and aria-describedby.
  const wire = (node: ReactNode): ReactNode =>
    Children.map(node, (child) => {
      if (!isValidElement(child)) return child;
      const element = child as ReactElement<Record<string, unknown>>;
      if (["input", "select", "textarea"].includes(element.type as string)) {
        return cloneElement(element, { "aria-invalid": isInvalid || undefined, "aria-describedby": describedBy });
      }
      if (element.props.children) return cloneElement(element, {}, wire(element.props.children as ReactNode));
      return element;
    });

  return (
    <label className={`form-field${wide ? " form-field-wide" : ""}${isInvalid ? " is-invalid" : ""}`}>
      <span>{label}</span>
      {wire(children)}
      {hint ? <small id={hintId}>{hint}</small> : null}
      {isInvalid ? <small id={errorId} className="form-error">{ERRORS[name] ?? "Check this field."}</small> : null}
    </label>
  );
}

function Sent({ title, children }: { title: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div ref={ref} className="form-sent" role="status" tabIndex={-1}>
      <CheckCircle2 size={28} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export function ContactForm() {
  const { status, invalid, submit, spamFields, formRef } = useSiteForm("/api/contact", "hiring_brief");

  if (status === "sent") {
    return (
      <Sent title="Thanks, your brief is on its way.">
        Konrad will reply by email to the address you gave. If it&apos;s urgent, call{" "}
        <a href="tel:+48662073227">+48 662 073 227</a>.
      </Sent>
    );
  }

  // Fallback while online sending isn't set up: open the visitor's email app with the brief filled in.
  const mailtoFallback = () => {
    const data = formRef.current ? new FormData(formRef.current) : new FormData();
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company")}`,
      `Role: ${get("role")}`,
      `Location / market: ${get("location")}`,
      `Timeline: ${get("timeline")}`,
      "",
      get("message"),
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(`Hiring enquiry: ${get("role")}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form ref={formRef} className="site-form" onSubmit={(event) => submit(event)} noValidate>
      {spamFields}
      <div className="form-grid">
        <Field label="Your name" name="name" invalid={invalid}>
          <input name="name" type="text" autoComplete="name" required />
        </Field>
        <Field label="Work email" name="email" invalid={invalid}>
          <input name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Company" name="company" invalid={invalid}>
          <input name="company" type="text" autoComplete="organization" />
        </Field>
        <Field label="Role you're hiring for" name="role" invalid={invalid}>
          <input name="role" type="text" placeholder="e.g. Senior Data Engineer" required />
        </Field>
        <Field label="Location or market" name="location" invalid={invalid}>
          <input name="location" type="text" placeholder="e.g. Remote, EU" />
        </Field>
        <Field label="Timeline" name="timeline" invalid={invalid}>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>As soon as possible</option>
            <option>Within a month</option>
            <option>In 1–3 months</option>
            <option>Just exploring</option>
          </select>
        </Field>
        <Field label="Anything else? (optional)" name="message" invalid={invalid} wide>
          <textarea name="message" rows={4} placeholder="Team, stack, salary range, what has or hasn't worked so far" />
        </Field>
      </div>

      <FormStatus status={status}>
        {status === "unavailable" ? (
          <>Online sending isn&apos;t switched on yet. <a href={mailtoFallback()}>Send the same brief by email</a> instead.</>
        ) : null}
      </FormStatus>

      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send hiring brief"}
        </button>
        <p>
          Details are used only to reply to you. <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </form>
  );
}

export function CvForm() {
  const { status, invalid, submit, spamFields, formRef } = useSiteForm("/api/cv", "candidate_cv");
  const [fileName, setFileName] = useState("");

  if (status === "sent") {
    return (
      <Sent title="Thanks, your CV has been sent.">
        If a current or upcoming role matches your experience, Konrad will get in touch by email.
      </Sent>
    );
  }

  const checkFile = (data: FormData) => {
    const file = data.get("cv");
    const problems: string[] = [];
    if (!(file instanceof File) || file.size === 0 || !/\.(pdf|docx?)$/i.test(file.name) || file.size > MAX_CV_BYTES) {
      problems.push("cv");
    }
    if (data.get("consent") !== "yes") problems.push("consent");
    return problems;
  };

  return (
    <form ref={formRef} className="site-form" onSubmit={(event) => submit(event, checkFile)} noValidate>
      {spamFields}
      <div className="form-grid">
        <Field label="Full name" name="name" invalid={invalid}>
          <input name="name" type="text" autoComplete="name" required />
        </Field>
        <Field label="Email" name="email" invalid={invalid}>
          <input name="email" type="email" autoComplete="email" required />
        </Field>
        <Field label="Phone (optional)" name="phone" invalid={invalid}>
          <input name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="LinkedIn profile (optional)" name="linkedin" invalid={invalid}>
          <input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" />
        </Field>
        <Field label="Main specialism" name="specialism" invalid={invalid}>
          <select name="specialism" defaultValue="">
            <option value="" disabled>Choose one</option>
            {["Cloud", "Data", "AI / ML", "Backend", "Frontend", "Full Stack", "DevOps / Platform", "Security", "Web3", "Other"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Where are you based?" name="location" invalid={invalid}>
          <input name="location" type="text" placeholder="City, country" autoComplete="country-name" required />
        </Field>
        <Field label="CV" name="cv" invalid={invalid} hint="PDF or Word, up to 5 MB" wide>
          <span className="file-input">
            <input
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              onChange={(event) => setFileName(event.currentTarget.files?.[0]?.name ?? "")}
            />
            <Paperclip size={18} aria-hidden="true" />
            <span>{fileName || "Choose a file"}</span>
          </span>
        </Field>
        <Field label="What are you looking for? (optional)" name="message" invalid={invalid} wide>
          <textarea name="message" rows={4} placeholder="Type of role, remote or on-site, notice period, salary expectations" />
        </Field>
      </div>

      <label className={`form-consent${invalid.includes("consent") ? " is-invalid" : ""}`}>
        <input
          type="checkbox"
          name="consent"
          value="yes"
          required
          aria-invalid={invalid.includes("consent") || undefined}
          aria-describedby={invalid.includes("consent") ? "consent-error" : undefined}
        />
        <span>
          I agree to Craftsphere Talent storing and processing my CV and details to contact me about
          relevant roles, as described in the <a href="/privacy">Privacy Policy</a>. I can ask for them
          to be deleted at any time.
          {invalid.includes("consent") ? <small id="consent-error" className="form-error">{ERRORS.consent}</small> : null}
        </span>
      </label>

      <FormStatus status={status}>
        {status === "unavailable" ? (
          <>Online CV upload isn&apos;t switched on yet. Please email your CV to <a href={`mailto:${EMAIL}?subject=CV`}>{EMAIL}</a>.</>
        ) : null}
      </FormStatus>

      <div className="form-actions">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send my CV"}
        </button>
      </div>
    </form>
  );
}

function FormStatus({ status, children }: { status: Status; children?: ReactNode }) {
  let message: ReactNode = null;
  if (status === "invalid") message = "Some fields need attention. Each one is explained below the field.";
  if (status === "error") {
    message = (
      <>Something went wrong while sending. Please try again, or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</>
    );
  }
  if (status === "unavailable") message = children;
  if (!message) return null;
  return <p className="form-status" role="alert">{message}</p>;
}
