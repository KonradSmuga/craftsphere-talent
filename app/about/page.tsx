import type { Metadata } from "next";
import {
  ArrowDownRight,
  CalendarDays,
  Building2,
  Check,
  ExternalLink,
  Globe2,
  Handshake,
  Mail,
  MessageCircle,
  UserRoundCheck,
} from "lucide-react";
import { BrandAmbient } from "../brand-ambient";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "About | Craftsphere Talent",
  description:
    "Learn about the experience and practical approach behind Craftsphere Talent's IT recruitment and talent consulting across EMEA, the US and LATAM.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About | Craftsphere Talent",
    description:
      "Learn about the experience and practical approach behind Craftsphere Talent's IT recruitment and talent consulting across EMEA, the US and LATAM.",
    images: [SOCIAL_IMAGE],
  },
};

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

const careerTimeline = [
  { year: "2016", title: "Agency foundations", copy: "Started in technology recruitment, building direct-search discipline and closing more than 30 hires in the first year." },
  { year: "2019", title: "High-volume delivery", copy: "Recognised for top hiring performance and delivered a personal best of nine hires in a single month." },
  { year: "2021", title: "International technology search", copy: "Moved deeper into cloud and AWS consulting recruitment across the US, EMEA and LATAM." },
  { year: "2024–25", title: "Sole recruitment ownership", copy: "Led the end-to-end recruitment function for an international technology consultancy across technical and leadership hiring." },
  { year: "Now", title: "Craftsphere Talent", copy: "A direct, senior-led recruitment model focused on specialist technology hiring and better candidate experience." },
];

const technologyAreas = ["Cloud", "AI", "Frontend", "Backend", "Data", "Full Stack", "DevOps", "Web3"];

export default function AboutPage() {
  return (
    <main id="top" className="about-page">
      <BrandAmbient />
      <SiteHeader page="about" />

      <section className="about-hero shell" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <p className="eyebrow reveal reveal-1"><span className="eyebrow-dot" /> About me</p>
          <h1 id="about-title" className="reveal reveal-2">
            Recruitment experience built across <em>agencies, startups and global tech teams.</em>
          </h1>
          <p className="reveal reveal-3">
            I&apos;m a senior technology recruiter and talent partner with ten years of
            experience in permanent and contract recruitment. My background combines
            hands-on sourcing, recruitment leadership, hiring-process improvement and
            direct partnership with international hiring teams.
          </p>
          <div className="hero-actions reveal reveal-4">
            <a className="button button-primary" href="mailto:konrad@craftspheretalent.com?subject=20-minute%20introduction" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="about_hero">
              Book a 20-minute introduction <CalendarDays size={17} />
            </a>
            <a className="text-link" href="/#services">Explore services <ArrowDownRight size={16} /></a>
          </div>
        </div>

        <aside className="profile-summary reveal reveal-3" aria-label="About me">
          <div className="profile-monogram">KS</div>
          <div>
            <p className="kicker">IT recruitment &amp; talent consulting</p>
            <h2>Konrad Smuga</h2>
            <p>Ten years of experience in technology recruitment.</p>
          </div>
          <div className="profile-facts">
            <span><Check size={18} /><b>Permanent &amp; contract recruitment</b></span>
            <span><Check size={18} /><b>EMEA, US &amp; LATAM markets</b></span>
            <span><Check size={18} /><b>Candidate-first process</b></span>
          </div>
        </aside>
      </section>

      <section className="about-proof" aria-label="Craftsphere Talent experience">
        <div className="shell about-proof-grid">
          <div><strong>10</strong><span>years in IT recruitment</span></div>
          <div><strong className="proof-word">Hundreds</strong><span>of successful technology hires</span></div>
          <div><strong className="proof-word">Tailored</strong><span>search strategy for every role</span></div>
        </div>
      </section>

      <section className="about-story shell" aria-labelledby="about-story-title">
        <div className="about-story-heading">
          <p className="kicker">Experience / timeline</p>
          <h2 id="about-story-title">Built through delivery, not layers.</h2>
          <p>Ten years of recruitment work across agencies, consulting businesses and international technology teams shaped the operating model behind Craftsphere Talent.</p>
        </div>
        <div className="career-timeline">
          {careerTimeline.map((item, index) => (
            <article key={item.year}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <time>{item.year}</time>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="company-profile company-profile-secondary shell" aria-labelledby="company-profile-title">
        <div className="company-profile-heading">
          <span><Building2 size={22} aria-hidden="true" /></span>
          <div>
            <p className="kicker">Company information</p>
            <h2 id="company-profile-title">Craftsphere Talent Ltd</h2>
          </div>
        </div>
        <dl className="company-details">
          <div><dt>Company number</dt><dd>16965978</dd></div>
          <div><dt>Registered office</dt><dd>27 Old Gloucester Street, London, United Kingdom, WC1N 3AX</dd></div>
        </dl>
        <a className="company-registry-link" href="https://find-and-update.company-information.service.gov.uk/company/16965978" target="_blank" rel="noreferrer">
          View official Companies House record <ExternalLink size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="section shell about-principles" aria-labelledby="principles-title">
        <div className="section-heading">
          <div>
            <p className="kicker">My approach / 01</p>
            <h2 id="principles-title">Recruitment that feels clear and personal.</h2>
          </div>
          <p>
            Craftsphere Talent is built around close cooperation, practical advice and
            a strong experience for both hiring teams and candidates.
          </p>
        </div>
        <div className="principles-grid">
          {principles.map(({ title, copy, icon: Icon }, index) => (
            <article className="principle-card" key={title}>
              <div className="principle-top"><span>0{index + 1}</span><Icon size={24} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell about-scope" aria-labelledby="scope-title">
        <div className="scope-copy">
          <p className="kicker">Experience / 02</p>
          <h2 id="scope-title">International reach. Technology focus.</h2>
          <p>
            I recruit across EMEA, the United States and LATAM, adapting each search
            to the local talent market while keeping communication consistent.
          </p>
          <div className="scope-markets" aria-label="Recruitment markets">
            <span><Globe2 size={16} /> EMEA</span>
            <span><Globe2 size={16} /> United States</span>
            <span><Globe2 size={16} /> LATAM</span>
          </div>
        </div>
        <div className="scope-panel">
          <p>Technology areas</p>
          <div className="scope-labels">
            {technologyAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
          <a className="text-link" href="/#expertise">
            Explore recruitment expertise <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="closing shell" aria-label="Contact Craftsphere Talent">
        <span className="closing-shape" aria-hidden="true" />
        <p className="kicker">Start a conversation</p>
        <h2>Bring senior recruitment attention to <em>your next hire.</em></h2>
        <a className="button button-primary" href="mailto:konrad@craftspheretalent.com" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="about_closing">
          Email Me <Mail size={17} />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
