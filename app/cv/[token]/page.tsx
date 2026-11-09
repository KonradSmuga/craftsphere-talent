import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowUpRight, Check, Download, Mail, MapPin, Phone } from "lucide-react";
import { BrandAmbient } from "../../brand-ambient";
import { MotionToggle } from "../../motion-toggle";
import { HireIcon, SideIcon, type HireKey } from "../_components/cv-icons";
import { CvMotion } from "../_components/cv-motion";
import { isValidCvToken } from "../_lib/access";

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

const LINKEDIN = "https://www.linkedin.com/in/konrad-smuga-1265a3b4/";
const EMAIL = "Konrad.Smuga3@gmail.com";
const PHONE_DISPLAY = "+48 662 073 227";
const PHONE_LINK = "+48662073227";

const stats = [
  { value: 10, suffix: "", label: "years in tech recruitment" },
  { value: 160, suffix: "+", label: "candidates hired" },
  { value: 9, suffix: "", label: "hires in a single month, personal best" },
];

/** Stagger index for the scroll reveal (see cv-motion.tsx). */
const stagger = (i: number) => ({ "--reveal-i": i }) as CSSProperties;

const hiring: { icon: HireKey; title: string; detail: string; roles: string[] }[] = [
  {
    icon: "software",
    title: "Software, cloud & data",
    detail: "The core of my work, from individual contributors to C-level, perm and contract.",
    roles: [
      "Backend, frontend & full stack",
      "DevOps & cloud (AWS)",
      "Data engineering & analytics",
      "AI / ML engineers",
      "Solutions architects",
      "Network & information security",
      "Team leads, directors, C-level",
    ],
  },
  {
    icon: "hardware",
    title: "Hardware & deep tech",
    detail: "Engineering and research profiles where the candidate pool is small and global.",
    roles: [
      "Mechanical engineers",
      "Electronic engineers",
      "Embedded software engineers",
      "AI engineers",
      "Research scientists (incl. talent engaged from NVIDIA)",
    ],
  },
  {
    icon: "gtm",
    title: "Go-to-market",
    detail:
      "Beyond engineering, I've hired go-to-market (GTM) roles for technology companies, so I understand both the product teams and the people who take the product to market.",
    roles: [],
  },
];

const highlights = [
  "Ran the whole recruitment function as the sole recruiter for an AWS consulting company, across the US and EMEA (2024–2025).",
  "Built AWS cloud teams from scratch in EMEA, LATAM and the US.",
  "Closed three executive hires in my first month at ClearScale (2021).",
  "Optimised a hiring process that was then rolled out across every external hiring pipeline.",
  "Best hiring performance award in a team of eight recruiters at ProData Consult (2019).",
  "Mentored three interns at ProData Consult, all of whom went on to become senior recruiters (2018).",
  "Closed 30+ hires in my first year as a junior recruiter at Link Group, one of Poland's largest agencies (2016).",
];

type Role = { title: string; period: string; points: string[] };
type Job = { company: string; place: string; years: string; roles: Role[] };

const experience: Job[] = [
  {
    company: "ClearScale",
    place: "Remote, San Francisco",
    years: "2021 – present",
    roles: [
      {
        title: "Lead IT Technical Recruiter",
        period: "Jan 2024 – present",
        points: [
          "Sole recruiter, owning the full recruitment function: sourcing, screening, interviewing and onboarding across departments.",
          "Executive and specialist tech hiring: data engineers, leads, full stack, DevOps, AI/ML and architects.",
        ],
      },
      {
        title: "Senior IT Technical Recruiter",
        period: "Dec 2021 – Dec 2023",
        points: [
          "End-to-end hiring with international stakeholders, from the first call to the signed contract and beyond.",
          "Built cloud teams from scratch across EMEA, LATAM and the US, matching candidates to US and EMEA client expectations.",
          "Brought in tooling such as Calendly to streamline the workflow between tech and HR teams.",
          "Fed market insight to hiring managers at every level; handled negotiation and lead generation in an agile HR setup.",
        ],
      },
    ],
  },
  {
    company: "ProData Consult",
    place: "Warsaw",
    years: "2017 – 2021",
    roles: [
      {
        title: "Recruitment Manager",
        period: "May 2021 – Sep 2021",
        points: [
          "Managed the consultant team, ran market mapping and strict compliance checks on every candidate put forward.",
          "Improved the hiring process and the tools tech and HR teams used, while spending half my time on hands-on recruitment.",
        ],
      },
      {
        title: "Senior IT Recruitment Consultant",
        period: "Dec 2019 – Apr 2021",
        points: [],
      },
      {
        title: "Recruitment Consultant",
        period: "Aug 2017 – Nov 2019",
        points: [
          "Full-cycle recruitment for backend, frontend, full stack, DevOps, data and leadership roles in Poland and Europe.",
          "Met international clients, led negotiations and generated new business; trained the intern group.",
          "Represented the company at job fairs, conferences and meetups.",
        ],
      },
    ],
  },
  {
    company: "Link Group",
    place: "Warsaw",
    years: "2016 – 2017",
    roles: [
      {
        title: "IT Research Consultant",
        period: "Aug 2016 – Jul 2017",
        points: [
          "Direct sourcing, screening and interviewing for IT roles across Poland and Europe.",
          "Wrote job adverts and looked for new clients.",
        ],
      },
    ],
  },
  {
    company: "Diebold Nixdorf",
    place: "Warsaw",
    years: "2016",
    roles: [
      {
        title: "IT Helpdesk Analyst",
        period: "Mar 2016 – Aug 2016",
        points: [
          "Supported customers in the UK and Australia and coordinated field service engineers.",
          "Diagnosed WAN/LAN, router, firewall and switch issues; worked with SCCM/SCOM and Oracle CRM.",
        ],
      },
    ],
  },
];

const tools = [
  "LinkedIn Recruiter",
  "Loxo",
  "Greenhouse",
  "Recruitee",
  "Zoho",
  "HeroHunt",
  "Hiretual",
  "ChatGPT, Claude, Gemini",
  "Calendly",
  "Jira",
  "Java basics",
];

const strengths = [
  "Executive search",
  "Perm & contract",
  "Negotiation",
  "B2B sales",
  "Account management",
  "Cold calling",
  "Market research",
  "HR consulting",
];

export default async function CvPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!isValidCvToken(token)) notFound();

  const pdfHref = `/cv/${encodeURIComponent(token)}/pdf`;

  return (
    <main className="home page cv">
      <BrandAmbient />
      <CvMotion />

      <header className="cv-bar">
        <span className="cv-mark" aria-hidden="true">KS</span>
        <span className="cv-bar-name">Konrad Smuga <span>Senior Tech Recruiter</span></span>
        <nav className="cv-bar-actions" aria-label="CV actions">
          <a className="cv-bar-link" href={`mailto:${EMAIL}`}>
            <Mail size={16} aria-hidden="true" /> <span>Contact</span>
          </a>
          <a className="cv-bar-download" href={pdfHref} download>
            <Download size={16} aria-hidden="true" /> <span>PDF</span>
          </a>
        </nav>
      </header>

      <section className="block cv-hero" aria-labelledby="cv-title">
        <div className="shell cv-hero-grid">
          <div className="cv-hero-copy">
            <p className="eyebrow cv-enter" style={stagger(0)}>
              <span className="eyebrow-dot" aria-hidden="true" /> Senior Tech Recruiter · Talent Partner · AWS
            </p>
            <h1 id="cv-title" className="cv-enter" style={stagger(1)}>
              Konrad <em>Smuga</em>
            </h1>
            <p className="page-lead cv-enter" style={stagger(2)}>
              Senior and lead tech recruiter with ten years on both the agency and the in-house side.
              I&apos;ve hired for global financial institutions, FinTechs, AWS consultancies and startups,
              permanent and contract, from individual contributors to C-level, across EMEA, the US and
              LATAM. My background is in IT, so I speak the language of the people I hire, now including
              hardware, research and go-to-market teams.
            </p>
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

        <div className="shell stats cv-stats" aria-labelledby="cv-stats-title" data-reveal="">
          <h2 id="cv-stats-title">A decade of technology hiring.</h2>
          <dl>
            {stats.map(({ value, suffix, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd data-count={value} data-suffix={suffix}>{value}{suffix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="block" aria-labelledby="cv-hiring-title">
        <div className="shell">
          <div className="cv-section-head" data-reveal="">
            <p className="kicker">Hiring scope</p>
            <h2 id="cv-hiring-title">Who I hire.</h2>
          </div>
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

      <section className="block" aria-labelledby="cv-record-title">
        <div className="shell highlights">
          <div className="cv-section-head cv-sticky-head" data-reveal="">
            <p className="kicker">Highlights</p>
            <h2 id="cv-record-title">Track record.</h2>
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

      <section className="block" aria-labelledby="cv-experience-title">
        <div className="shell cv-columns">
          <div>
            <div className="cv-section-head" data-reveal="">
              <p className="kicker">Career</p>
              <h2 id="cv-experience-title">Experience.</h2>
            </div>
            <ol className="cv-jobs">
              {experience.map((job, jobIndex) => (
                <li className={`cv-job${jobIndex === 0 ? " cv-job-current" : ""}`} key={job.company} data-reveal="">
                  <div className="cv-job-head">
                    <h3>{job.company}</h3>
                    <span>{job.place} · {job.years}</span>
                  </div>
                  {job.roles.map((role) => (
                    <div className="cv-role cv-lift" key={role.title}>
                      <p className="cv-role-title">
                        <strong>
                          {role.title}
                          {role.period.endsWith("present") && <span className="cv-now"><i aria-hidden="true" /> Now</span>}
                        </strong>
                        <time>{role.period}</time>
                      </p>
                      {role.points.length > 0 && (
                        <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                      )}
                    </div>
                  ))}
                </li>
              ))}
            </ol>
          </div>

          <aside className="cv-side" aria-label="Skills, education and more">
            <div className="cv-card cv-lift" data-reveal="" style={stagger(0)}>
              <h3><span className="cv-ico"><SideIcon name="tools" /></span> Tools</h3>
              <ul className="tag-list">{tools.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
            <div className="cv-card cv-lift" data-reveal="" style={stagger(1)}>
              <h3><span className="cv-ico"><SideIcon name="strengths" /></span> Strengths</h3>
              <ul className="tag-list">{strengths.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="cv-card cv-lift" data-reveal="" style={stagger(0)}>
              <h3><span className="cv-ico"><SideIcon name="education" /></span> Education</h3>
              <dl className="cv-facts">
                <div>
                  <dt>2010 – 2015</dt>
                  <dd><strong>University of Łódź</strong>Bachelor&apos;s in Information Technology, IT in business</dd>
                </div>
                <div>
                  <dt>2006 – 2010</dt>
                  <dd><strong>Technical School of IT, Piotrków Trybunalski</strong>Diploma in Information Technology</dd>
                </div>
              </dl>
            </div>
            <div className="cv-card cv-lift" data-reveal="" style={stagger(1)}>
              <h3><span className="cv-ico"><SideIcon name="certificates" /></span> Certificates</h3>
              <dl className="cv-facts">
                <div>
                  <dt>2024</dt>
                  <dd><strong>AWS Certified Cloud Practitioner</strong></dd>
                </div>
                <div>
                  <dt>2017 – 2018</dt>
                  <dd><strong>Junior Java Developer bootcamp, Kodilla</strong>Java 8, Spring 5, JUnit/Mockito, SQL, Hibernate</dd>
                </div>
              </dl>
            </div>
            <div className="cv-card cv-lift" data-reveal="" style={stagger(0)}>
              <h3><span className="cv-ico"><SideIcon name="languages" /></span> Languages</h3>
              <dl className="cv-langs">
                <div>
                  <dt>Polish</dt>
                  <dd><span className="cv-meter" style={{ "--level": 1 } as CSSProperties} /> Native</dd>
                </div>
                <div>
                  <dt>English</dt>
                  <dd><span className="cv-meter" style={{ "--level": 0.84 } as CSSProperties} /> C1, advanced</dd>
                </div>
              </dl>
            </div>
            <div className="cv-card cv-lift" data-reveal="" style={stagger(1)}>
              <h3><span className="cv-ico"><SideIcon name="outside" /></span> Outside work</h3>
              <ul className="tag-list">
                {["Eastern cultures", "AI & new tech", "Playing drums", "Board games"].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          </aside>
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
