import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check, Download, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { BrandAmbient } from "../../brand-ambient";
import { MotionToggle } from "../../motion-toggle";
import { HireIcon, SideIcon } from "../_components/cv-icons";
import { CvMotion } from "../_components/cv-motion";
import { isValidCvToken } from "../_lib/access";
import {
  EMAIL,
  LINKEDIN,
  PHONE_DISPLAY,
  PHONE_LINK,
  background,
  currentJob,
  earlyJobs,
  emagineJob,
  hiring,
  highlights,
  sections,
  skills,
  stats,
  summary,
  type Job,
  type SideCard,
} from "../_lib/content";

// Private page: rendered per request, never listed, never indexed.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Konrad Smuga | Senior Tech Recruiter",
  description: "CV of Konrad Smuga, senior tech recruiter and talent partner.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

/** Stagger index for the reveal animations (see cv-motion.tsx). */
const stagger = (i: number) => ({ "--reveal-i": i }) as CSSProperties;

function SectionHead({ kicker, title, id, lead }: { kicker: string; title?: string; id: string; lead?: string }) {
  return (
    <div className={`cv-section-head${title ? "" : " cv-section-head-kicker"}`} data-reveal="">
      {title ? <p className="kicker">{kicker}</p> : <h2 className="kicker" id={id}>{kicker}</h2>}
      {title && <h2 id={id}>{title}</h2>}
      {lead && <p className="cv-section-lead">{lead}</p>}
    </div>
  );
}

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Dec 2021" → months since year 0; "present" → the current month. */
function monthIndex(value: string): number | null {
  const text = value.trim().toLowerCase();
  if (text === "present") {
    const now = new Date();
    return now.getUTCFullYear() * 12 + now.getUTCMonth();
  }
  const match = /^([a-z]{3})[a-z]*\s+(\d{4})$/.exec(text);
  if (!match || !MONTHS.includes(match[1])) return null;
  return Number(match[2]) * 12 + MONTHS.indexOf(match[1]);
}

/** Total time at a company, counted LinkedIn-style from the first to the last month (inclusive). */
function tenure(job: Job): string | null {
  const periods = job.roles.flatMap((role) => [role.period, ...(role.previously ? [role.previously.period] : [])]);
  let first = Infinity;
  let last = -Infinity;
  for (const period of periods) {
    const [from, to] = period.split(/\s+[–-]\s+/);
    const start = from ? monthIndex(from) : null;
    const end = to ? monthIndex(to) : null;
    if (start === null || end === null) return null;
    first = Math.min(first, start);
    last = Math.max(last, end);
  }
  const months = last - first + 1;
  if (!Number.isFinite(months) || months <= 0) return null;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

/** The small label above each company, e.g. "Experience · 2017 – 2021 · 4 yrs 2 mos in total". */
function experienceLabel(job: Job): string {
  const total = tenure(job);
  return `Experience · ${job.years}${total ? ` · ${total} in total` : ""}`;
}

function CompanyLogo({ job }: { job: Job }) {
  return (
    <span className={`cv-logo${job.logo ? " cv-logo-img" : ""}${job.logoWide ? " cv-logo-wide" : ""}`} aria-hidden="true">
      {job.logo ? <img src={job.logo} alt="" loading="lazy" /> : job.monogram}
    </span>
  );
}

function JobBlock({ job, current = false }: { job: Job; current?: boolean }) {
  return (
    <article className={`cv-job${current ? " cv-job-current" : ""}`} data-reveal="">
      <header className="cv-job-head">
        <CompanyLogo job={job} />
        <div>
          <h3>
            {job.company}
            {job.note && <span className="cv-job-note">{job.note}</span>}
          </h3>
          <p>{job.place} · {job.years}</p>
        </div>
      </header>
      <div className="cv-roles">
        {job.roles.map((role) => (
          <div className="cv-role cv-lift" key={role.title}>
            <div className="cv-role-title">
              <p>
                <strong>{role.title}</strong>
                {role.period.endsWith("present") && <span className="cv-now"><i aria-hidden="true" /> Now</span>}
              </p>
              <time>{role.period}</time>
            </div>
            {role.previously && (
              <div className="cv-role-title cv-role-previous">
                <p>
                  <span className="cv-promoted">Promoted from</span> <strong>{role.previously.title}</strong>
                </p>
                <time>{role.previously.period}</time>
              </div>
            )}
            <ul className={role.points.length > 4 ? "cv-points-split" : undefined}>
              {role.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function SkillCard({ card, index }: { card: SideCard; index: number }) {
  return (
    <div className="cv-card cv-lift" data-reveal="" style={stagger(index % 3)}>
      <h3><span className="cv-ico"><SideIcon name={card.icon} /></span> {card.title}</h3>
      {card.kind === "tags" && <ul className="tag-list">{card.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      {card.kind === "facts" && (
        <dl className="cv-facts">
          {card.items.map((item) => (
            <div key={item.what}>
              <dt>{item.when}</dt>
              <dd><strong>{item.what}</strong>{item.detail}</dd>
            </div>
          ))}
        </dl>
      )}
      {card.kind === "langs" && (
        <dl className="cv-langs">
          {card.items.map((lang) => (
            <div key={lang.name}>
              <dt>{lang.name}</dt>
              <dd><span className="cv-meter" style={{ "--level": lang.level } as CSSProperties} /> {lang.label}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export default async function CvPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isValidCvToken(token)) notFound();

  const pdfHref = `/cv/${encodeURIComponent(token)}/pdf`;

  return (
    <main className="home page cv">
      <BrandAmbient />
      <CvMotion />

      <header className="cv-bar">
        <a className="cv-bar-brand" href="#profile" aria-label="Back to top">
          <span className="cv-mark" aria-hidden="true">KS</span>
          <span className="cv-bar-name">Konrad Smuga <span>Senior Tech Recruiter</span></span>
        </a>
        <nav className="desktop-nav cv-nav" aria-label="CV sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} data-label={label}>{label}</a>
          ))}
        </nav>
        <div className="cv-bar-actions">
          <a className="cv-bar-link" href={`mailto:${EMAIL}`} aria-label="Email Konrad">
            <Mail size={16} aria-hidden="true" /> <span>Contact</span>
          </a>
          <a className="cv-bar-download" href={pdfHref} download>
            <Download size={16} aria-hidden="true" /> <span>PDF</span>
          </a>
        </div>
      </header>

      {/* 1. Profile */}
      <section id="profile" className="screen cv-hero" data-nav="profile" aria-labelledby="cv-title">
        <div className="shell cv-hero-grid">
          <div className="cv-hero-copy">
            <p className="eyebrow cv-enter" style={stagger(0)}>
              <span className="eyebrow-dot" aria-hidden="true" /> Senior Tech Recruiter · Talent Partner · AWS
            </p>
            <h1 id="cv-title" className="cv-enter" style={stagger(1)}>
              Konrad <em>Smuga</em>
            </h1>
            <p className="page-lead cv-enter" style={stagger(2)}>{summary}</p>
            <ul className="cv-contact cv-enter" style={stagger(3)}>
              <li><MapPin size={17} aria-hidden="true" /> Warsaw, Poland</li>
              <li><Phone size={17} aria-hidden="true" /> <a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a></li>
              <li><Mail size={17} aria-hidden="true" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
            <div className="intro-actions cv-enter" style={stagger(4)}>
              <a className="button button-primary" href={`mailto:${EMAIL}`}>
                <Mail size={17} aria-hidden="true" /> Get in touch
              </a>
              <a className="button button-secondary cv-btn-out" href={LINKEDIN} target="_blank" rel="noreferrer noopener">
                LinkedIn profile <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-secondary cv-btn-down" href={pdfHref} download>
                <Download size={16} aria-hidden="true" /> Download PDF
              </a>
            </div>
            <dl className="cv-stats cv-enter" style={stagger(5)} aria-label="Key numbers">
              {stats.map(({ value, suffix, label }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd data-count={value} data-suffix={suffix}>{value}{suffix}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="profile cv-profile cv-enter" style={stagger(2)} aria-label="Konrad Smuga">
            <div className="cv-photo-wrap">
              <img className="profile-photo" src="/konrad-smuga.webp" width="800" height="840" alt="Konrad Smuga" />
              <span className="cv-photo-tag"><i aria-hidden="true" /> Warsaw · hiring EMEA, US &amp; LATAM</span>
            </div>
            <div className="profile-body">
              <ul>
                <li><Check size={16} aria-hidden="true" /> Polish, native · English, C1</li>
                <li><Check size={16} aria-hidden="true" /> AWS Certified Cloud Practitioner</li>
                <li><Check size={16} aria-hidden="true" /> BSc Information Technology</li>
              </ul>
            </div>
          </aside>
        </div>
        <a className="cv-scroll-cue" href="#hiring" aria-label="Go to the next section">
          <span>Scroll</span><i aria-hidden="true" />
        </a>
      </section>

      {/* 2. Who I hire */}
      <section id="hiring" className="screen" data-nav="hiring" aria-labelledby="cv-hiring-title">
        <div className="shell">
          <SectionHead kicker="Hiring scope" title="Who I hire" id="cv-hiring-title" />
          <div className="cv-hiring">
            {hiring.map(({ icon, title, detail, roles }, i) => (
              <article className="offer cv-lift" key={title} data-reveal="" style={stagger(i)}>
                <h3><HireIcon name={icon} /> {title}</h3>
                <p>{detail}</p>
                {roles.length > 0 && (
                  <ul>
                    {roles.map((role) => <li key={role}><Check size={17} aria-hidden="true" /> {role}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <div className="cv-markets" data-reveal="">
            <span>Markets</span>
            <ul className="tag-list tag-list-strong" aria-label="Markets">
              {["EMEA", "United States", "LATAM"].map((market) => <li key={market}>{market}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Track record */}
      <section id="record" className="screen" data-nav="record" aria-labelledby="cv-record-title">
        <div className="shell highlights">
          <div className="cv-section-head" data-reveal="">
            <p className="kicker">Highlights</p>
            <h2 id="cv-record-title">Track record</h2>
          </div>
          <ul>
            {highlights.map((item, i) => (
              <li key={item} className="cv-lift" data-reveal="" style={stagger(i % 2)}>
                <svg className="cv-check" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path pathLength={100} d="M7.5 12.3l3 3 6-6.3" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Experience: one section per company */}
      <section id="experience" className="screen cv-exp" data-nav="experience" aria-labelledby="cv-experience-title">
        <div className="shell">
          <SectionHead kicker={experienceLabel(currentJob)} id="cv-experience-title" />
          <JobBlock job={currentJob} current />
        </div>
      </section>

      <section id="experience-emagine" className="screen cv-exp" data-nav="experience" aria-labelledby="cv-emagine-title">
        <div className="shell">
          <SectionHead kicker={experienceLabel(emagineJob)} id="cv-emagine-title" />
          <JobBlock job={emagineJob} />
        </div>
      </section>

      {earlyJobs.map((job) => {
        const slug = job.company.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return (
          <section key={job.company} id={`experience-${slug}`} className="screen cv-exp" data-nav="experience" aria-labelledby={`cv-${slug}-title`}>
            <div className="shell">
              <SectionHead kicker={experienceLabel(job)} id={`cv-${slug}-title`} />
              <JobBlock job={job} />
            </div>
          </section>
        );
      })}

      {/* 5. Skills */}
      <section id="skills" className="screen" data-nav="skills" aria-labelledby="cv-skills-title">
        <div className="shell">
          <SectionHead kicker="Tools, strengths & languages" title="Skills" id="cv-skills-title" />
          <div className="cv-skills">
            {skills.map((card, i) => <SkillCard key={card.title} card={card} index={i} />)}
          </div>
        </div>
      </section>

      {/* 6. Education & certificates */}
      <section id="education" className="screen" data-nav="education" aria-labelledby="cv-education-title">
        <div className="shell">
          <SectionHead kicker="Background" title="Education & certificates" id="cv-education-title" />
          <div className="cv-background">
            {background.map((card, i) => <SkillCard key={card.title} card={card} index={i} />)}
          </div>
        </div>
      </section>

      {/* 8. Contact */}
      <section id="contact" className="screen" data-nav="contact" aria-labelledby="cv-contact-title">
        <div className="shell">
          <div className="cv-cta" data-reveal="">
            <div>
              <p className="kicker">Contact</p>
              <h2 id="cv-contact-title">Let&apos;s talk</h2>
              <p>Happy to walk you through any of the above, or to talk about the team you&apos;re hiring for.</p>
            </div>
            <ul className="cv-cta-links">
              <li>
                <a href={`mailto:${EMAIL}`}><Mail size={20} aria-hidden="true" /><span><small>Email</small>{EMAIL}</span><ArrowRight size={18} aria-hidden="true" /></a>
              </li>
              <li>
                <a href={`tel:${PHONE_LINK}`}><Phone size={20} aria-hidden="true" /><span><small>Phone</small>{PHONE_DISPLAY}</span><ArrowRight size={18} aria-hidden="true" /></a>
              </li>
              <li>
                <a href={LINKEDIN} target="_blank" rel="noreferrer noopener"><UserRound size={20} aria-hidden="true" /><span><small>LinkedIn</small>Konrad Smuga</span><ArrowUpRight size={18} aria-hidden="true" /></a>
              </li>
              <li>
                <a href={pdfHref} download><Download size={20} aria-hidden="true" /><span><small>CV</small>Download PDF</span><ArrowRight size={18} aria-hidden="true" /></a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="cv-footer">
        <div className="shell cv-footer-inner">
          <div>
            <p>I consent to the processing of my personal data for the purpose of the recruitment process.</p>
            <p>Shared privately. Please don&apos;t forward this link.</p>
          </div>
          <MotionToggle />
        </div>
      </footer>
    </main>
  );
}
