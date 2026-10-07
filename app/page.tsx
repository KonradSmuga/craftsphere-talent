import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Cloud,
  ExternalLink,
  Gauge,
  Handshake,
  Layers3,
  Mail,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { SiteFooter } from "./site-footer";
import { BrandAmbient } from "./brand-ambient";
import { ScreenScroller } from "./screen-scroller";
import { SiteHeader } from "./site-header";
import { ContactForm } from "./site-forms";
import { LocalTime } from "./local-time";
import { TechIcon, type TechKey } from "./tech-icons";

const EMAIL = "konrad@craftspheretalent.com";
const WHATSAPP = "https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20would%20like%20to%20discuss%20a%20hiring%20need.";

// Client-facing claims: keep these factual.
const stats = [
  { value: "10", label: "years in IT recruitment" },
  { value: "160+", label: "candidates hired" },
  { value: "3", label: "markets: EMEA, the US and LATAM" },
];

// Key selling points shown floating around the hero image.
const heroNotes = [
  { title: "Lower recruitment costs", detail: "You pay only when a candidate joins.", icon: Sparkles, position: "top-right" },
  { title: "Great candidate experience", detail: "Clear communication and respect at every stage.", icon: UserRoundCheck, position: "mid-left" },
  { title: "Individual approach", detail: "A search strategy shaped around every role.", icon: MessageCircle, position: "bottom-left" },
  { title: "Efficiency", detail: "Relevant shortlists and a clear feedback rhythm.", icon: Workflow, position: "bottom-right" },
];

const services = [
  {
    title: "Permanent IT recruitment",
    icon: Network,
    copy: "End-to-end search for specialist, senior and hard-to-find technology talent, from market mapping and outreach to offer acceptance.",
    points: ["Targeted direct search", "High-quality, relevant shortlists", "Clear communication from brief to hire"],
    cta: "Discuss a search",
    subject: "Permanent IT recruitment",
    placement: "service_permanent",
  },
  {
    title: "Recruitment consulting",
    icon: Sparkles,
    copy: "Practical guidance that helps hiring teams make better decisions, improve their process and compete more effectively for talent.",
    points: ["Hiring strategy and market insight", "Process and candidate journey design", "Interview and feedback optimisation"],
    cta: "Improve the process",
    subject: "Recruitment consulting",
    placement: "service_consulting",
  },
  {
    title: "Candidate experience",
    icon: UserRoundCheck,
    copy: "A clearer, faster and more human candidate journey that protects your employer brand and keeps strong candidates engaged.",
    points: ["Faster, structured feedback", "Transparent candidate communication", "Stronger interview experience"],
    cta: "Talk about candidate experience",
    subject: "Candidate experience improvement",
    placement: "service_candidate_experience",
  },
];

const testimonials = [
  {
    quote:
      "Craftsphere Talent combines strong IT recruitment expertise with a quick understanding of complex technical requirements. The result is a focused search and highly relevant candidates.",
    role: "Founder",
    company: "AWS consultancy",
  },
  {
    quote:
      "An exceptional recruitment partner: responsive, committed and consistently professional. The level of ownership and energy brought to every search stands out.",
    role: "HR leader",
    company: "AWS consulting company",
  },
  {
    quote:
      "Professional, dedicated and highly responsive. The candidates presented closely matched the requirements, while communication remained clear and effective throughout.",
    role: "AI & Data Architect",
    company: "Technology consulting",
  },
];

const approach = [
  {
    title: "Direct ownership",
    detail: "The person who understands the brief is the person running the search.",
    icon: Handshake,
  },
  {
    title: "Sharper shortlists",
    detail: "Research and outreach are tailored to each role, so you only meet candidates who genuinely fit.",
    icon: Target,
  },
  {
    title: "Faster decisions",
    detail: "A clear feedback rhythm and honest market input keep candidates and hiring teams moving.",
    icon: Gauge,
  },
  {
    title: "Candidate-first representation",
    detail: "Your company is represented with care at every candidate touchpoint.",
    icon: UserRoundCheck,
  },
];

const expertise: Array<{ label: string; icon: TechKey; tone: string }> = [
  { label: "Cloud", icon: "cloud", tone: "indigo" },
  { label: "AI", icon: "ai", tone: "blue" },
  { label: "Frontend", icon: "frontend", tone: "violet" },
  { label: "Backend", icon: "backend", tone: "teal" },
  { label: "Data", icon: "data", tone: "violet" },
  { label: "Full Stack", icon: "full-stack", tone: "teal" },
  { label: "DevOps", icon: "devops", tone: "indigo" },
  { label: "Web3", icon: "web3", tone: "blue" },
];

const markets = [
  { name: "EMEA", detail: "Deep experience across European and international technology markets.", city: "London", timeZone: "Europe/London" },
  { name: "US", detail: "Searches shaped around the pace, competition and nuance of US hiring.", city: "New York", timeZone: "America/New_York" },
  { name: "LATAM", detail: "Access to high-calibre talent across fast-growing technology hubs.", city: "São Paulo", timeZone: "America/Sao_Paulo" },
];

const terms = [
  { title: "No hire, no fee", detail: "You only pay when a candidate successfully joins your company.", icon: ShieldCheck },
  { title: "Three-month replacement guarantee", detail: "Additional protection after the successful placement.", icon: BadgeCheck },
  { title: "Flexible multi-role terms", detail: "Adaptable cooperation for companies recruiting several positions.", icon: Layers3 },
];

/** One 400×200 tile of a cartoon world map; drawn twice so it can scroll seamlessly. */
function WorldTile({ x }: { x: number }) {
  const land = [
    "M30 62 C45 40 95 38 118 52 C132 60 128 78 112 86 C102 92 100 104 88 110 C76 116 64 108 58 96 C50 84 30 82 30 62 Z",
    "M128 34 C138 28 152 32 150 42 C148 50 134 50 128 44 Z",
    "M96 118 C110 112 128 120 130 134 C132 150 120 170 110 184 C104 190 98 184 98 174 C98 160 88 146 90 132 C91 124 92 120 96 118 Z",
    "M184 58 C192 48 214 46 226 54 C232 60 226 70 216 72 C206 74 196 80 188 76 C180 72 178 64 184 58 Z",
    "M190 88 C204 82 230 86 240 96 C248 106 244 122 236 134 C228 150 220 166 210 168 C202 170 200 156 198 144 C196 132 184 124 184 108 C184 98 184 92 190 88 Z",
    "M230 50 C252 38 300 36 330 48 C348 56 346 72 332 80 C318 88 312 100 296 104 C282 108 270 98 258 100 C246 102 236 92 234 80 C232 70 222 60 230 50 Z",
    "M300 140 C312 132 336 134 344 144 C350 154 338 166 322 166 C308 166 296 154 300 140 Z",
  ];
  const pins = [
    { label: "US", x: 76, y: 70 },
    { label: "LATAM", x: 110, y: 146 },
    { label: "EMEA", x: 206, y: 62 },
  ];
  return (
    <g transform={`translate(${x} 0)`}>
      {land.map((d) => <path className="globe-land" key={d} d={d} />)}
      {pins.map(({ label, x: px, y }) => (
        <g className="globe-pin" key={label} transform={`translate(${px} ${y})`}>
          <path d="M0 0 C-7 -9 -9 -13 -9 -17 A9 9 0 1 1 9 -17 C9 -13 7 -9 0 0 Z" />
          <circle cx="0" cy="-17" r="3.4" />
          <text x="13" y="-12">{label}</text>
        </g>
      ))}
    </g>
  );
}

/** Cartoon globe: the world scrolls inside a circle. */
function Globe() {
  return (
    <div className="globe" aria-hidden="true">
      <div className="globe-ball">
        <svg className="globe-map" viewBox="0 0 800 200" preserveAspectRatio="none">
          <WorldTile x={0} />
          <WorldTile x={400} />
        </svg>
      </div>
      <span className="globe-shadow" />
    </div>
  );
}

function mailto(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export default function Home() {
  return (
    <main id="top" className="home">
      <BrandAmbient />
      <SiteHeader page="home" />
      <ScreenScroller />

      <section className="screen intro" aria-labelledby="intro-title">
        <div className="shell intro-grid">
          <div className="intro-copy">
            <h1 id="intro-title">Specialist IT recruitment for Cloud, Data &amp; AI teams</h1>
            <p>
              Craftsphere Talent finds hard-to-reach engineers for technology companies across
              EMEA, the US and LATAM. One senior recruiter runs every search, from brief to
              signed offer.
            </p>
            <ul className="intro-benefits" aria-label="How Craftsphere Talent helps">
              <li><Cloud size={15} aria-hidden="true" /> Hard-to-find tech talent</li>
              <li><Workflow size={15} aria-hidden="true" /> Smarter hiring processes</li>
              <li><MessageCircle size={15} aria-hidden="true" /> Candidate-first communication</li>
            </ul>
            <div className="intro-actions">
              <a className="button button-primary" href="#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement="hero">
                Discuss a hiring need
              </a>
              <a className="button button-secondary" href={WHATSAPP} target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="hero">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="intro-visual">
            <img
              className="intro-image"
              src="/craftsphere-hero-recruiter.webp"
              width="1536"
              height="1024"
              alt="Illustration of a recruiter at a laptop next to a verified candidate profile"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <ul className="intro-notes">
              {heroNotes.map(({ title, detail, icon: Icon, position }) => (
                <li className={`intro-note note-${position}`} key={title}>
                  <span><Icon size={18} aria-hidden="true" /></span>
                  <div><strong>{title}</strong><p>{detail}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="shell stats" aria-labelledby="stats-title">
          <h2 id="stats-title">Experience measured in outcomes.</h2>
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

      <section id="services" className="screen" aria-labelledby="services-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="services-title">Three ways to strengthen your hiring.</h2>
            <p>Flexible support for companies that need exceptional talent, a sharper hiring process, or both.</p>
          </header>
          <div className="offer-grid">
            {services.map(({ title, icon: Icon, copy, points, cta, subject, placement }) => (
              <article className="offer" key={title}>
                <h3><Icon size={22} aria-hidden="true" /> {title}</h3>
                <p>{copy}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}><Check size={16} aria-hidden="true" /> {point}</li>
                  ))}
                </ul>
                <a href="#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement={placement} data-service={subject}>
                  {cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="feedback" className="screen" aria-labelledby="feedback-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="feedback-title">Trusted for complex technology hiring.</h2>
          </header>
          <div className="voices">
            {testimonials.map(({ quote, role, company }) => (
              <figure className="voice" key={`${role}-${company}`}>
                <blockquote>{quote}</blockquote>
                <figcaption><strong>{role}</strong>, {company}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="screen screen-dark" aria-labelledby="approach-title">
        <div className="shell approach">
          <div className="approach-copy">
            <h2 id="approach-title">Senior recruitment attention, without agency layers.</h2>
            <p>
              One experienced recruiter owns your search from brief to signed offer. No account
              managers, no hand-offs, no junior sourcers in between.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map(({ title, detail, icon: Icon }) => (
              <article key={title}>
                <span className="approach-icon"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="screen" aria-labelledby="expertise-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="expertise-title">Across the technology landscape.</h2>
            <p>
              A decade of recruiting across established engineering disciplines and emerging
              technology, with the technical fluency to understand the brief.
            </p>
          </header>
          <ul className="stack-grid">
            {expertise.map(({ label, icon, tone }) => (
              <li className={`stack-${tone}`} key={label}>
                <TechIcon name={icon} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="markets" className="screen" aria-labelledby="markets-title">
        <div className="shell reach">
          <div className="reach-copy">
            <h2 id="markets-title">International search. Local market awareness.</h2>
            <p>
              Hiring across borders takes more than a wider LinkedIn search. It takes an
              understanding of how talent moves, communicates and makes decisions in each market.
            </p>
            <Globe />
          </div>
          <dl className="reach-list">
            {markets.map(({ name, detail, city, timeZone }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>
                  {detail}
                  <LocalTime city={city} timeZone={timeZone} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="terms" className="screen screen-indigo" aria-labelledby="terms-title">
        <div className="shell terms-panel">
          <div className="terms-copy">
            <h2 id="terms-title">Clear commitment. Less hiring risk.</h2>
            <p>Commercial terms designed to make specialist recruitment straightforward.</p>
            <a className="button button-light" href="#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement="terms">
              Ask about your terms
            </a>
            <svg className="terms-seal" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="terms-seal-path" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
              </defs>
              <g className="terms-seal-ring">
                <circle cx="100" cy="100" r="97" />
                <text>
                  <textPath href="#terms-seal-path" textLength="474" lengthAdjust="spacing">
                    No hire, no fee · Three-month guarantee ·
                  </textPath>
                </text>
              </g>
              <circle className="terms-seal-core" cx="100" cy="100" r="50" />
              <path className="terms-seal-check" d="M78 101l15 15 30-32" />
            </svg>
          </div>
          <ul className="terms-list">
            {terms.map(({ title, detail, icon: Icon }) => (
              <li key={title}>
                <span><Icon size={24} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="screen" aria-labelledby="contact-title">
        <div className="shell talk">
          <div className="talk-form">
            <h2 id="contact-title">Tell us what your team needs.</h2>
            <p>
              Share the role, market and hiring challenge. Craftsphere Talent will assess the
              search and recommend a focused way forward.
            </p>
            <ContactForm />
          </div>

          <aside className="talk-card" aria-label="Direct contact">
            <p className="talk-person">
              <strong>Konrad Smuga</strong>
              <span>IT Recruiter &amp; Talent Consultant</span>
            </p>
            <a href={`mailto:${EMAIL}`} data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="contact_card">
              <Mail size={20} aria-hidden="true" />
              <span><small>Email</small>{EMAIL}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="tel:+48662073227" data-analytics-event="contact_click" data-contact-method="phone" data-contact-placement="contact_card">
              <Phone size={20} aria-hidden="true" />
              <span><small>Phone</small>+48 662 073 227</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="contact_card">
              <MessageCircle size={20} aria-hidden="true" />
              <span><small>WhatsApp</small>Start a conversation</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/konrad-smuga-1265a3b4/" target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="linkedin" data-contact-placement="contact_card">
              <ExternalLink size={20} aria-hidden="true" />
              <span><small>LinkedIn</small>View Konrad&apos;s profile</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <blockquote>“The right recruitment partner should make the entire hiring experience better.”</blockquote>
            <a className="talk-candidates" href="/candidates">Looking for a new role? Send your CV</a>
          </aside>
        </div>
      </section>

      <nav className="mobile-quick-actions" aria-label="Quick contact">
        <a href={mailto("Hiring support for our team")} data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="mobile_sticky">
          <Mail size={17} aria-hidden="true" /> Email
        </a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="mobile_sticky">
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
      </nav>

      <SiteFooter />
    </main>
  );
}
