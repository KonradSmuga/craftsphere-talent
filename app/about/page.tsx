import type { Metadata } from "next";
import { Award, Building2, Check, ExternalLink, GraduationCap, Handshake, Languages, MapPin, MessageCircle, UserRoundCheck } from "lucide-react";
import { BrandAmbient } from "../brand-ambient";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { SITE_URL, SOCIAL_IMAGE } from "../site-config";

const TITLE = "About Konrad Smuga, Senior Tech Recruiter | Craftsphere Talent";
const DESCRIPTION =
  "Konrad Smuga: senior tech recruiter with ten years in IT recruitment, an IT degree and AWS certification. Cloud, data, AI and engineering hiring across EMEA, the US and LATAM.";
const LINKEDIN = "https://www.linkedin.com/in/konrad-smuga-1265a3b4/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title: TITLE, description: DESCRIPTION, images: [SOCIAL_IMAGE] },
};

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Konrad Smuga",
  jobTitle: "Senior Tech Recruiter",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/konrad-smuga.webp`,
  worksFor: { "@id": `${SITE_URL}/#business` },
  sameAs: [LINKEDIN],
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Łódź" },
  hasCredential: { "@type": "EducationalOccupationalCredential", name: "AWS Certified Cloud Practitioner" },
  knowsLanguage: ["Polish", "English"],
  knowsAbout: ["IT recruitment", "Executive search", "AWS", "Data engineering", "AI/ML hiring", "DevOps hiring"],
};

const stats = [
  { value: "10", label: "years in IT recruitment" },
  { value: "160+", label: "candidates hired" },
  { value: "9", label: "hires in a single month, personal best" },
];

const highlights = [
  "Built AWS cloud teams from scratch across EMEA, LATAM and the US.",
  "Ran the entire recruitment function as the sole recruiter for an AWS consulting company, covering the US and EMEA.",
  "Closed three executive hires in my first month at ClearScale.",
  "Closed 30+ hires in my first year at Link Group, one of Poland's largest recruitment agencies.",
  "Won the award for best hiring performance in a team of eight recruiters at ProData Consult.",
  "Designed a hiring process that was rolled out across every external hiring pipeline.",
  "Trained three interns, all of whom went on to become senior recruiters.",
];

const career = [
  {
    years: "2016",
    company: "Diebold Nixdorf",
    role: "IT Helpdesk Analyst",
    copy: "Network and incident support for customers in the UK and Australia: WAN/LAN, routers, firewalls and Windows Server tooling. The technical grounding behind every brief I take today.",
  },
  {
    years: "2016–2017",
    company: "Link Group",
    role: "IT Research Consultant",
    copy: "Direct search for IT talent across Poland and Europe, closing more than 30 hires in my first year.",
  },
  {
    years: "2017–2021",
    company: "ProData Consult",
    role: "Recruitment Consultant → Senior Consultant → Recruitment Manager",
    copy: "End-to-end recruitment for backend, frontend, full stack, DevOps, data and leadership roles. Market mapping, compliance checks and managing a team of consultants.",
  },
  {
    years: "2021–2023",
    company: "ClearScale",
    role: "Senior IT Technical Recruiter",
    copy: "International hiring for an AWS consultancy: building cloud teams from scratch in EMEA, LATAM and the US, and bringing in tools such as Calendly to speed up the process.",
  },
  {
    years: "2024–2025",
    company: "ClearScale",
    role: "Lead IT Technical Recruiter",
    copy: "Sole recruiter for the company, owning sourcing, screening, interviewing and onboarding for data engineers, full stack, DevOps, AI/ML, architects and executive roles.",
  },
  {
    years: "2026",
    company: "Craftsphere Talent",
    role: "Founder",
    copy: "A direct, senior-led recruitment model for specialist technology hiring with a better candidate experience.",
  },
];

const credentials = [
  { title: "BSc Information Technology", detail: "University of Łódź, specialisation: IT in business", icon: GraduationCap },
  { title: "AWS Certified Cloud Practitioner", detail: "Amazon Web Services, 2024", icon: Award },
  { title: "Junior Java Developer bootcamp", detail: "Kodilla: Java 8, Spring, JUnit, SQL and Hibernate", icon: Award },
  { title: "Polish and English", detail: "Native Polish, advanced English (C1)", icon: Languages },
];

const tools = ["LinkedIn Recruiter", "Greenhouse", "Loxo", "Recruitee", "Zoho Recruit", "Calendly", "Jira", "HeroHunt", "Hiretual", "ChatGPT, Claude, Gemini"];

const roles = [
  "Backend, frontend and full stack engineers",
  "Data engineers and analysts",
  "AI and machine learning",
  "DevOps, cloud and solutions architects",
  "Network engineering and information security",
  "Team leads, directors and C-level",
];

const principles = [
  {
    title: "Direct cooperation",
    copy: "You work directly with the recruiter handling your search, from the first brief to the accepted offer.",
    icon: Handshake,
  },
  {
    title: "Clear communication",
    copy: "Regular updates, honest market feedback and a simple process keep everyone aligned and moving.",
    icon: MessageCircle,
  },
  {
    title: "Candidate experience",
    copy: "Every candidate receives respectful communication that represents your company in the right way.",
    icon: UserRoundCheck,
  },
];

export default function AboutPage() {
  return (
    <main id="top" className="home page">
      <BrandAmbient />
      <SiteHeader page="about" />

      <section className="block about-intro" aria-labelledby="about-title">
        <div className="shell about-intro-grid">
          <div>
            <h1 id="about-title">A tech recruiter who started in IT.</h1>
            <p className="page-lead">
              I&apos;m Konrad Smuga, a senior tech recruiter and talent partner with ten years in
              permanent and contract IT recruitment, agency-side and in-house. Before recruiting I
              studied IT and worked in IT support, so I understand the briefs I take and speak the
              language of the engineers I hire, from individual contributors to C-level leaders.
            </p>
            <p className="page-lead">
              I&apos;ve hired for global financial institutions, FinTechs, AWS consultancies and
              startups across EMEA, the US and LATAM.
            </p>
            <div className="intro-actions">
              <a className="button button-primary" href="/#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement="about_hero">
                Discuss a hiring need
              </a>
              <a className="button button-secondary" href={LINKEDIN} target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="linkedin" data-contact-placement="about_hero">
                LinkedIn profile
              </a>
            </div>
          </div>

          <aside className="profile" aria-label="Konrad Smuga">
            <img className="profile-photo" src="/konrad-smuga.webp" width="800" height="915" alt="Konrad Smuga, smiling, wearing glasses" />
            <div className="profile-body">
              <h2>Konrad Smuga</h2>
              <p>Senior Tech Recruiter &amp; Talent Partner</p>
              <ul>
                <li><MapPin size={16} aria-hidden="true" /> Based in Warsaw, Poland</li>
                <li><Languages size={16} aria-hidden="true" /> Polish (native), English (C1)</li>
                <li><Check size={16} aria-hidden="true" /> Permanent, contract and executive search</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="shell stats" aria-labelledby="about-stats-title">
          <h2 id="about-stats-title">A decade in technology recruitment.</h2>
          <dl>
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="block" aria-labelledby="highlights-title">
        <div className="shell highlights">
          <h2 id="highlights-title">Track record.</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}><Check size={20} aria-hidden="true" /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="story-title">
        <div className="shell story">
          <div className="story-copy">
            <h2 id="story-title">From IT support to running the hiring function.</h2>
            <p>
              Agency recruitment taught me direct search and pace. In-house work taught me what
              hiring managers need. Both shaped how Craftsphere Talent works.
            </p>
          </div>
          <ol className="timeline">
            {career.map(({ years, company, role, copy }) => (
              <li key={`${years}-${role}`}>
                <time>{years}</time>
                <div>
                  <h3>{company}</h3>
                  <p className="timeline-role">{role}</p>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="creds-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="creds-title">Technical foundation.</h2>
            <p>An IT degree, cloud certification and hands-on programming basics: enough to read a stack, ask the right questions and assess technical fit early.</p>
          </header>
          <div className="creds">
            {credentials.map(({ title, detail, icon: Icon }) => (
              <article key={title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <h3 className="tools-title">Tools I work with</h3>
          <ul className="tag-list">
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="scope-title">
        <div className="shell scope">
          <div>
            <h2 id="scope-title">Who I hire.</h2>
            <p>
              Specialist and senior technology roles across EMEA, the US and LATAM, adapting each
              search to the local market while keeping communication consistent.
            </p>
          </div>
          <div className="scope-lists">
            <h3>Roles</h3>
            <ul className="role-list">
              {roles.map((role) => <li key={role}><Check size={18} aria-hidden="true" /> {role}</li>)}
            </ul>
            <h3>Markets</h3>
            <ul className="tag-list tag-list-strong">
              {["EMEA", "US", "LATAM"].map((market) => <li key={market}>{market}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="principles-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="principles-title">How I work.</h2>
            <p>Close cooperation, practical advice and a strong experience for hiring teams and candidates alike.</p>
          </header>
          <div className="offer-grid">
            {principles.map(({ title, copy, icon: Icon }) => (
              <article className="offer" key={title}>
                <h3><Icon size={22} aria-hidden="true" /> {title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="outside-work">Outside work: drums, board games, Eastern cultures and whatever is new in AI.</p>
        </div>
      </section>

      <section className="block" aria-labelledby="company-title">
        <div className="shell company">
          <Building2 size={26} aria-hidden="true" />
          <div>
            <h2 id="company-title">Craftsphere Talent Ltd</h2>
            <dl>
              <div><dt>Company number</dt><dd>16965978</dd></div>
              <div><dt>Registered office</dt><dd>27 Old Gloucester Street, London, United Kingdom, WC1N 3AX</dd></div>
            </dl>
          </div>
          <a href="https://find-and-update.company-information.service.gov.uk/company/16965978" target="_blank" rel="noreferrer">
            Companies House record <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="block" aria-labelledby="about-cta-title">
        <div className="shell cta-band">
          <h2 id="about-cta-title">Bring senior recruitment attention to your next hire.</h2>
          <div className="cta-band-actions">
            <a className="button button-light" href="/#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement="about_closing">
              Discuss a hiring need
            </a>
            <a href="/candidates">Looking for a role? Send your CV</a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData).replace(/</g, "\\u003c") }}
      />
      <SiteFooter />
    </main>
  );
}
