import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
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
  TerminalSquare,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { SiteFooter } from "./site-footer";
import { BrandAmbient } from "./brand-ambient";
import { ScreenScroller } from "./screen-scroller";
import { SiteHeader } from "./site-header";

const EMAIL = "konrad@craftspheretalent.com";
const WHATSAPP = "https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20would%20like%20to%20discuss%20a%20hiring%20need.";

// Client-facing claims: keep these factual.
const stats = [
  { value: "10", label: "years in IT recruitment" },
  { value: "160+", label: "technology hires" },
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

const expertise = [
  { label: "Cloud", icon: Cloud, tone: "indigo" },
  { label: "AI", icon: BrainCircuit, tone: "blue" },
  { label: "Frontend", icon: Code2, tone: "violet" },
  { label: "Backend", icon: TerminalSquare, tone: "teal" },
  { label: "Data", icon: Database, tone: "violet" },
  { label: "Full Stack", icon: Layers3, tone: "teal" },
  { label: "DevOps", icon: Workflow, tone: "indigo" },
  { label: "Web3", icon: Network, tone: "blue" },
];

const markets = [
  { name: "EMEA", detail: "Deep experience across European and international technology markets." },
  { name: "US", detail: "Searches shaped around the pace, competition and nuance of US hiring." },
  { name: "LATAM", detail: "Access to high-calibre talent across fast-growing technology hubs." },
];

const terms = [
  { title: "No hire, no fee", detail: "You only pay when a candidate successfully joins your company.", icon: ShieldCheck },
  { title: "Three-month replacement guarantee", detail: "Additional protection after the successful placement.", icon: BadgeCheck },
  { title: "Flexible multi-role terms", detail: "Adaptable cooperation for companies recruiting several positions.", icon: Layers3 },
];

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
              <a className="button button-primary" href={mailto("Hiring support for our team")} data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="hero">
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
                <a href={mailto(subject)} data-analytics-event="contact_click" data-contact-method="email" data-contact-placement={placement}>
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
                <Icon size={24} aria-hidden="true" />
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
            {expertise.map(({ label, icon: Icon, tone }) => (
              <li className={`stack-${tone}`} key={label}>
                <Icon size={26} aria-hidden="true" />
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
          </div>
          <dl className="reach-list">
            {markets.map(({ name, detail }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="terms" className="screen" aria-labelledby="terms-title">
        <div className="shell terms-panel">
          <div className="terms-copy">
            <h2 id="terms-title">Clear commitment. Less hiring risk.</h2>
            <p>Commercial terms designed to make specialist recruitment straightforward.</p>
          </div>
          <div className="terms-list">
            {terms.map(({ title, detail, icon: Icon }) => (
              <article key={title}>
                <Icon size={24} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="screen" aria-labelledby="contact-title">
        <div className="shell talk">
          <div className="talk-lead">
            <h2 id="contact-title">Tell us what your team needs.</h2>
            <p>
              Share the role, market and hiring challenge. Craftsphere Talent will assess the
              search and recommend a focused way forward.
            </p>
            <blockquote>“The right recruitment partner should make the entire hiring experience better.”</blockquote>
          </div>

          <div className="talk-card">
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
          </div>
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
