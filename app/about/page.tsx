import type { Metadata } from "next";
import { Building2, Check, ExternalLink, Handshake, MessageCircle, UserRoundCheck } from "lucide-react";
import { BrandAmbient } from "../brand-ambient";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { SOCIAL_IMAGE } from "../site-config";

const DESCRIPTION =
  "Learn about the experience and practical approach behind Craftsphere Talent's IT recruitment and talent consulting across EMEA, the US and LATAM.";

export const metadata: Metadata = {
  title: "About | Craftsphere Talent",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About | Craftsphere Talent",
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

// Set to the photo's path in /public (e.g. "/konrad-smuga.webp") once it's added.
const PROFILE_PHOTO: string | null = null;

const facts = ["Permanent & contract recruitment", "EMEA, US & LATAM markets", "Candidate-first process"];

const stats = [
  { value: "10", label: "years in IT recruitment" },
  { value: "160+", label: "candidates hired" },
  { value: "9", label: "hires in a single month, personal best" },
];

const careerTimeline = [
  { year: "2016", title: "Agency foundations", copy: "Started in technology recruitment, building direct-search discipline and closing more than 30 hires in the first year." },
  { year: "2019", title: "High-volume delivery", copy: "Recognised for top hiring performance and delivered a personal best of nine hires in a single month." },
  { year: "2021", title: "International technology search", copy: "Moved deeper into cloud and AWS consulting recruitment across the US, EMEA and LATAM." },
  { year: "2024–25", title: "Sole recruitment ownership", copy: "Led the end-to-end recruitment function for an international technology consultancy across technical and leadership hiring." },
  { year: "Now", title: "Craftsphere Talent", copy: "A direct, senior-led recruitment model focused on specialist technology hiring and better candidate experience." },
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

const markets = ["EMEA", "US", "LATAM"];
const technologyAreas = ["Cloud", "AI", "Frontend", "Backend", "Data", "Full Stack", "DevOps", "Web3"];

export default function AboutPage() {
  return (
    <main id="top" className="home page">
      <BrandAmbient />
      <SiteHeader page="about" />

      <section className="block about-intro" aria-labelledby="about-title">
        <div className="shell about-intro-grid">
          <div>
            <h1 id="about-title">Recruitment experience built across agencies, startups and global tech teams.</h1>
            <p className="page-lead">
              I&apos;m a senior technology recruiter and talent partner with ten years of experience in
              permanent and contract recruitment. My background combines hands-on sourcing,
              recruitment leadership, hiring-process improvement and direct partnership with
              international hiring teams.
            </p>
            <div className="intro-actions">
              <a className="button button-primary" href="/#contact" data-analytics-event="contact_click" data-contact-method="form" data-contact-placement="about_hero">
                Discuss a hiring need
              </a>
              <a className="button button-secondary" href="/#services">Explore services</a>
            </div>
          </div>

          <aside className="profile" aria-label="Konrad Smuga">
            {PROFILE_PHOTO ? (
              <img className="profile-photo" src={PROFILE_PHOTO} width="640" height="760" alt="Konrad Smuga" />
            ) : (
              <div className="profile-photo profile-placeholder" aria-hidden="true">KS</div>
            )}
            <div className="profile-body">
              <h2>Konrad Smuga</h2>
              <p>IT Recruiter &amp; Talent Consultant</p>
              <ul>
                {facts.map((fact) => (
                  <li key={fact}><Check size={16} aria-hidden="true" /> {fact}</li>
                ))}
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

      <section className="block" aria-labelledby="story-title">
        <div className="shell story">
          <div className="story-copy">
            <h2 id="story-title">Built through delivery, not layers.</h2>
            <p>
              Ten years of recruitment work across agencies, consulting businesses and international
              technology teams shaped the operating model behind Craftsphere Talent.
            </p>
          </div>
          <ol className="timeline">
            {careerTimeline.map(({ year, title, copy }) => (
              <li key={year}>
                <time>{year}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block" aria-labelledby="principles-title">
        <div className="shell">
          <header className="screen-head">
            <h2 id="principles-title">Recruitment that feels clear and personal.</h2>
            <p>
              Craftsphere Talent is built around close cooperation, practical advice and a strong
              experience for both hiring teams and candidates.
            </p>
          </header>
          <div className="offer-grid">
            {principles.map(({ title, copy, icon: Icon }) => (
              <article className="offer" key={title}>
                <h3><Icon size={22} aria-hidden="true" /> {title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" aria-labelledby="scope-title">
        <div className="shell scope">
          <div>
            <h2 id="scope-title">International reach. Technology focus.</h2>
            <p>
              I recruit across EMEA, the US and LATAM, adapting each search to the local talent
              market while keeping communication consistent.
            </p>
          </div>
          <div className="scope-lists">
            <h3>Markets</h3>
            <ul className="tag-list tag-list-strong">
              {markets.map((market) => <li key={market}>{market}</li>)}
            </ul>
            <h3>Technology areas</h3>
            <ul className="tag-list">
              {technologyAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
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

      <SiteFooter />
    </main>
  );
}
