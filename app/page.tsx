import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Gauge,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TerminalSquare,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { BrandAmbient } from "./brand-ambient";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const expertise = [
  { label: "Cloud", icon: Cloud, tone: "mint", span: 4 },
  { label: "AI", icon: BrainCircuit, tone: "lilac", span: 3 },
  { label: "Frontend", icon: Code2, tone: "peach", span: 2 },
  { label: "Backend", icon: TerminalSquare, tone: "sky", span: 3 },
  { label: "Data", icon: Database, tone: "butter", span: 3 },
  { label: "Full Stack", icon: Layers3, tone: "rose", span: 4 },
  { label: "DevOps", icon: Workflow, tone: "mint", span: 3 },
  { label: "Web3", icon: Network, tone: "lilac", span: 2 },
];

const markets = [
  {
    name: "EMEA",
    detail: "Deep experience across European and international technology markets.",
    accent: "01",
  },
  {
    name: "United States",
    detail: "Searches shaped around the pace, competition and nuance of US hiring.",
    accent: "02",
  },
  {
    name: "LATAM",
    detail: "Access to high-calibre talent across fast-growing technology hubs.",
    accent: "03",
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
      "An exceptional recruitment partner — responsive, committed and consistently professional. The level of ownership and energy brought to every search stands out.",
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

function BrandTransition({ direction = "forward" }: { direction?: "forward" | "reverse" }) {
  return (
    <div className={`brand-transition brand-transition-${direction}`} aria-hidden="true">
      <span /><span /><span />
      <i /><i /><i />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <BrandAmbient />
      <SiteHeader page="home" />

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow reveal reveal-1">
            <span className="eyebrow-dot" /> IT recruitment · Talent consulting
          </div>
          <h1 id="hero-title" className="reveal reveal-2">
            Strategic IT Recruitment & Talent Consulting
          </h1>
          <div className="hero-expertise-line reveal reveal-3" aria-label="Experts in IT hiring">
            <span />
            <strong>Experts in IT hiring</strong>
            <span />
          </div>
          <p className="hero-intro reveal reveal-3">
            Craftsphere Talent helps technology companies hire difficult-to-find specialists,
            improve recruitment processes and deliver a candidate experience that strengthens
            employer brands across EMEA, the US and LATAM.
          </p>
          <div className="hero-benefits reveal reveal-4" aria-label="How Craftsphere Talent helps">
            <span><Cloud size={15} /> Hard-to-find tech talent</span>
            <span><Workflow size={15} /> Smarter hiring processes</span>
            <span><MessageCircle size={15} /> Candidate-first communication</span>
          </div>
          <div className="hero-actions reveal reveal-5">
            <a className="button button-primary" href="mailto:konrad@craftspheretalent.com?subject=Hiring%20support%20for%20our%20team" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="hero">
              Discuss a hiring need <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20would%20like%20to%20discuss%20a%20hiring%20need." target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="hero">
              WhatsApp <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-response reveal reveal-5"><span /> Focused recruitment support from brief to hire.</p>
        </div>

        <div className="hero-visual reveal reveal-4 hero-art-entry">
          <div className="visual-glow" />
          <figure className="visual-image visual-image-editorial">
            <picture>
              <source srcSet="/craftsphere-ai-it-talent-hero.avif" type="image/avif" />
              <source srcSet="/craftsphere-ai-it-talent-hero.webp" type="image/webp" />
              <img
                src="/craftsphere-ai-it-talent-hero.webp"
                width="1536"
                height="1024"
                alt="Editorial illustration connecting people with cloud, data, artificial intelligence and engineering systems"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <figcaption>
              <span>Cloud · Data · AI · Engineering</span>
              <span>Technology talent ecosystem</span>
            </figcaption>
          </figure>
          <div className="hiring-flow" aria-label="Recruitment process">
            {[
              ["01", "Market mapping"],
              ["02", "Outreach"],
              ["03", "Shortlist"],
              ["04", "Interview"],
              ["05", "Hire"],
            ].map(([step, label]) => (
              <div className="hiring-flow-step" key={step}>
                <span>{step}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
          <div className="hero-side-note">
            <span>Search principle</span>
            <p>Fewer profiles. Better fit. Clearer decisions.</p>
          </div>
        </div>
      </section>

      <section className="track-record" aria-labelledby="track-record-title">
        <div className="shell track-record-shell">
          <div className="record-intro">
            <div className="record-brand-logo" aria-hidden="true"><i /><i /><i /></div>
            <div>
              <p>Craftsphere track record</p>
              <h2 id="track-record-title">Experience measured in outcomes.</h2>
            </div>
          </div>

          <div className="record-grid">
            <article className="record-card">
              <div className="record-card-top"><span><BadgeCheck size={18} /></span><small>01</small></div>
              <div className="record-value"><strong>10</strong><em>years</em></div>
              <p>Hands-on IT recruitment</p>
            </article>
            <article className="record-card">
              <div className="record-card-top"><span><Gauge size={18} /></span><small>02</small></div>
              <div className="record-value record-value-word"><strong>Hundreds</strong><em>of hires</em></div>
              <p>Successful technology placements</p>
            </article>
            <article className="record-card">
              <div className="record-card-top"><span><Handshake size={18} /></span><small>03</small></div>
              <div className="record-value record-value-word"><strong>Individual</strong><em>approach</em></div>
              <p>Each search shaped around the role</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Services / 01</p>
            <h2>Three ways to strengthen your hiring.</h2>
          </div>
          <p>
            Flexible support for companies that need exceptional talent, a sharper
            hiring process, or both.
          </p>
        </div>

        <div className="service-grid service-grid-three">
          <article className="service-card service-card-featured">
            <div className="service-number">01</div>
            <div className="service-card-copy">
              <div className="service-icon"><Network size={25} aria-hidden="true" /></div>
              <h3>Permanent IT Recruitment</h3>
              <p>
                End-to-end search for specialist, senior and hard-to-find technology
                talent — from market mapping and outreach to offer acceptance.
              </p>
            </div>
            <ul>
              <li><Check size={15} /> Targeted direct search</li>
              <li><Check size={15} /> High-quality, relevant shortlists</li>
              <li><Check size={15} /> Clear communication from brief to hire</li>
            </ul>
            <a className="card-cta" href="mailto:konrad@craftspheretalent.com?subject=Permanent%20IT%20recruitment" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="service_permanent">
              Discuss a search <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>

          <article className="service-card">
            <div className="service-number">02</div>
            <div className="service-card-copy">
              <div className="service-icon"><Sparkles size={25} aria-hidden="true" /></div>
              <h3>Recruitment Consulting</h3>
              <p>
                Practical guidance that helps hiring teams make better decisions,
                improve their process and compete more effectively for talent.
              </p>
            </div>
            <ul>
              <li><Check size={15} /> Hiring strategy and market insight</li>
              <li><Check size={15} /> Process and candidate journey design</li>
              <li><Check size={15} /> Interview and feedback optimisation</li>
            </ul>
            <a className="card-cta" href="mailto:konrad@craftspheretalent.com?subject=Recruitment%20consulting" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="service_consulting">
              Improve the process <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>

          <article className="service-card service-card-candidate">
            <div className="service-number">03</div>
            <div className="service-card-copy">
              <div className="service-icon"><UserRoundCheck size={25} aria-hidden="true" /></div>
              <h3>Candidate Experience Improvement</h3>
              <p>
                A clearer, faster and more human candidate journey that protects your
                employer brand and keeps strong candidates engaged.
              </p>
            </div>
            <ul>
              <li><Check size={15} /> Faster, structured feedback</li>
              <li><Check size={15} /> Transparent candidate communication</li>
              <li><Check size={15} /> Stronger interview experience</li>
            </ul>
            <a className="card-cta" href="mailto:konrad@craftspheretalent.com?subject=Candidate%20experience%20improvement" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="service_candidate_experience">
              Talk about candidate experience <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="shell testimonials-heading">
          <div>
            <p className="kicker">Client feedback / 02</p>
            <h2 id="testimonials-title">Trusted for complex technology hiring.</h2>
          </div>
          <p>Feedback from leaders who worked directly with the recruitment expertise behind Craftsphere Talent.</p>
        </div>
        <div className="shell testimonials-editorial-grid">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-editorial testimonial-editorial-${index + 1}`} key={testimonial.role}>
              <div className="testimonial-index">0{index + 1}</div>
              <Quote size={24} aria-hidden="true" />
              <blockquote>{testimonial.quote}</blockquote>
              <footer>
                <strong>{testimonial.role}</strong>
                <span>{testimonial.company}</span>
              </footer>
            </article>
          ))}
        </div>
        <div className="shell delivery-proof delivery-proof-flat">
          <span><Handshake size={19} aria-hidden="true" /></span>
          <p><strong>Delivery-focused recruitment.</strong> Accurate shortlists, responsive communication and a process designed to keep hiring moving.</p>
          <small>What delivery teams can expect</small>
        </div>
      </section>

      <section className="senior-attention" aria-labelledby="senior-attention-title">
        <div className="shell senior-attention-layout">
          <div className="senior-attention-copy">
            <p className="kicker kicker-light">Direct senior delivery</p>
            <h2 id="senior-attention-title">Senior recruitment attention. <em>Without agency layers.</em></h2>
          </div>
          <div className="senior-attention-points">
            <article><span>01</span><h3>Direct ownership</h3><p>The person understanding the brief is the person running the search.</p></article>
            <article><span>02</span><h3>Sharper shortlists</h3><p>Search effort is concentrated on candidates who genuinely match the role and market.</p></article>
            <article><span>03</span><h3>Faster decisions</h3><p>Clear communication and market feedback keep candidates and hiring teams moving.</p></article>
          </div>
        </div>
      </section>

      <section className="conversion-band shell" aria-label="Start a hiring conversation">
        <div>
          <p className="kicker">Have an active role?</p>
          <h2>Get a clearer search strategy before you spend more on recruitment.</h2>
        </div>
        <div className="conversion-actions">
          <a className="button button-light" href="mailto:konrad@craftspheretalent.com?subject=Hiring%20support%20for%20an%20active%20role" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="mid_page">
            Email the role details <Mail size={17} aria-hidden="true" />
          </a>
          <a className="conversion-link" href="#contact">View all contact options <ArrowDownRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <BrandTransition />

      <section id="expertise" className="section expertise-section">
        <div className="shell">
          <div className="section-heading">
            <div>
            <p className="kicker">Expertise / 03</p>
              <h2>Across the technology landscape.</h2>
            </div>
            <p>
              A decade of recruiting across established engineering disciplines and
              emerging technology — with the technical fluency to understand the brief.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ label, icon: Icon, tone, span }) => (
              <article className={`expertise-card tone-${tone} span-${span}`} key={label}>
                <Icon size={23} aria-hidden="true" />
                <span>{label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell markets-section">
        <div className="markets-copy">
          <p className="kicker">Global reach / 04</p>
          <h2>International search. Local market awareness.</h2>
          <p>
            Hiring across borders takes more than a wider LinkedIn search. It takes
            an understanding of how talent moves, communicates and makes decisions
            in each market.
          </p>
          <div className="global-badge"><Globe2 size={19} /> EMEA · US · LATAM</div>
        </div>
        <div className="market-list">
          {markets.map((market) => (
            <article className="market-item" key={market.name}>
              <span className="market-number">{market.accent}</span>
              <div><h3>{market.name}</h3><p>{market.detail}</p></div>
              <ArrowUpRight size={19} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <BrandTransition direction="reverse" />

      <section className="section difference-section" aria-labelledby="difference-title">
        <div className="shell difference-layout">
          <div className="difference-copy">
            <p className="kicker">Why Craftsphere / 05</p>
            <h2 id="difference-title">Senior expertise without the agency layers.</h2>
            <p>
              Every search is built around your market, role and hiring team, with
              experienced technology recruitment support throughout the process.
            </p>
            <a className="button button-light" href="mailto:konrad@craftspheretalent.com?subject=Technology%20recruitment%20partnership" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="why_craftsphere">
              Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="difference-grid">
            <article><Handshake size={22} /><h3>Experienced partnership</h3><p>Focused recruitment support stays close to your hiring team.</p></article>
            <article><Target size={22} /><h3>Individual search strategy</h3><p>Research, outreach and messaging are tailored to each position.</p></article>
            <article><Gauge size={22} /><h3>Faster feedback rhythm</h3><p>Clear communication keeps candidates and hiring teams moving.</p></article>
            <article><BadgeCheck size={22} /><h3>Lower agency overhead</h3><p>A focused model without unnecessary account-management layers.</p></article>
            <article><UserRoundCheck size={22} /><h3>Candidate-first representation</h3><p>Your company is represented with care at every candidate touchpoint.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell terms-section" aria-labelledby="terms-title">
        <div className="terms-intro">
          <p className="kicker">Simple terms / 06</p>
          <h2 id="terms-title">Clear commitment. Less hiring risk.</h2>
          <p>Commercial terms designed to make specialist recruitment straightforward.</p>
          <a className="text-link terms-link" href="#contact">Ask about terms <ArrowDownRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="terms-grid">
          <article><span><ShieldCheck size={23} /></span><div><h3>No hire - no fee</h3><p>You only pay when a candidate successfully joins your company.</p></div></article>
          <article><span><BadgeCheck size={23} /></span><div><h3>Three-month replacement guarantee</h3><p>Additional protection after the successful placement.</p></div></article>
          <article><span><Layers3 size={23} /></span><div><h3>Flexible multi-role terms</h3><p>Adaptable cooperation for companies recruiting several positions.</p></div></article>
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div className="contact-lead">
          <p className="kicker kicker-light">Contact / 07</p>
          <h2>Tell us what your team needs.</h2>
          <p>
            Share the role, market and hiring challenge. Craftsphere Talent will assess
            the search and recommend a focused way forward.
          </p>
          <div className="contact-primary-actions">
            <a className="button button-light" href="mailto:konrad@craftspheretalent.com?subject=Hiring%20support%20for%20our%20team" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="contact_lead">
              Email role details <Mail size={17} aria-hidden="true" />
            </a>
            <a className="button button-ghost-light" href="https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20would%20like%20to%20discuss%20a%20hiring%20need." target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="contact_lead">
              WhatsApp <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
          <blockquote>“The right recruitment partner should make the entire hiring experience better.”</blockquote>
        </div>

        <div className="contact-card">
          <div className="contact-person">
            <span>Direct contact</span>
            <strong>Konrad Smuga</strong>
            <small>IT Recruiter &amp; Talent Consultant</small>
          </div>
          <div className="contact-links">
              <a href="mailto:konrad@craftspheretalent.com" aria-label="Email Konrad Smuga" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="contact_card">
                <span><Mail size={17} /></span>
                <div><small>Email</small><strong>konrad@craftspheretalent.com</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a href="tel:+48662073227" aria-label="Call Konrad Smuga" data-analytics-event="contact_click" data-contact-method="phone" data-contact-placement="contact_card">
                <span><Phone size={17} /></span>
                <div><small>Phone</small><strong>+48 662 073 227</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a
                href="https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20found%20Craftsphere%20Talent%20and%20would%20like%20to%20discuss%20a%20hiring%20need."
                target="_blank"
                rel="noreferrer"
                aria-label="Message Konrad Smuga on WhatsApp"
                data-analytics-event="contact_click"
                data-contact-method="whatsapp"
                data-contact-placement="contact_card"
              >
                <span><MessageCircle size={17} /></span>
                <div><small>WhatsApp</small><strong>Start a conversation</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/konrad-smuga-1265a3b4/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Konrad Smuga on LinkedIn"
                data-analytics-event="contact_click"
                data-contact-method="linkedin"
                data-contact-placement="contact_card"
              >
                <span><ExternalLink size={17} /></span>
                <div><small>LinkedIn</small><strong>View Konrad&apos;s profile</strong></div>
                <ArrowUpRight size={17} />
              </a>
          </div>
          <div className="candidate-promise">
            <div className="experience-icon"><Sparkles size={19} /></div>
            <div>
              <p className="kicker">Candidate experience</p>
              <h3>Respect at every step.</h3>
              <p>Clear expectations, fast feedback and human communication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing shell" aria-label="Craftsphere Talent closing statement">
        <span className="closing-shape" aria-hidden="true" />
        <p className="kicker">Craftsphere Talent</p>
        <h2>Build the team behind <em>what&apos;s next.</em></h2>
        <div className="closing-actions">
          <a className="button button-primary" href="mailto:konrad@craftspheretalent.com?subject=Hiring%20support%20for%20our%20team" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="closing">
            Discuss a hiring need <Mail size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="/about">About the approach <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <nav className="mobile-quick-actions" aria-label="Quick contact">
        <a href="mailto:konrad@craftspheretalent.com?subject=Hiring%20support%20for%20our%20team" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="mobile_sticky">
          <Mail size={17} aria-hidden="true" /> Email
        </a>
        <a href="https://wa.me/48662073227?text=Hello%20Konrad%2C%20I%20would%20like%20to%20discuss%20a%20hiring%20need." target="_blank" rel="noreferrer" data-analytics-event="contact_click" data-contact-method="whatsapp" data-contact-placement="mobile_sticky">
          <MessageCircle size={17} aria-hidden="true" /> WhatsApp
        </a>
      </nav>

      <SiteFooter />
    </main>
  );
}
