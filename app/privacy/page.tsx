import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";
import { BrandAmbient } from "../brand-ambient";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { SOCIAL_IMAGE } from "../site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Craftsphere Talent",
  description: "How Craftsphere Talent handles contact information, website analytics and privacy choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: "/privacy",
    title: "Privacy Policy | Craftsphere Talent",
    description: "How Craftsphere Talent handles contact information, website analytics and privacy choices.",
    images: [SOCIAL_IMAGE],
  },
};

export default function PrivacyPage() {
  return (
    <main id="top" className="privacy-page">
      <BrandAmbient />
      <SiteHeader page="privacy" />

      <section className="privacy-hero shell" aria-labelledby="privacy-title">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> Privacy</p>
          <h1 id="privacy-title">Your privacy, explained <em>clearly.</em></h1>
          <p>This page explains what information Craftsphere Talent processes when you visit the website or choose to get in touch.</p>
          <span className="privacy-updated">Last updated: 30 August 2026</span>
        </div>
        <span className="privacy-shield" aria-hidden="true"><ShieldCheck size={54} /></span>
      </section>

      <section className="privacy-content shell" aria-label="Privacy policy details">
        <article>
          <span>01</span>
          <div><h2>Who is responsible for your data?</h2><p>The data controller for this website is Craftsphere Talent, represented by Konrad Smuga. For privacy questions or requests, email <a href="mailto:konrad@craftspheretalent.com">konrad@craftspheretalent.com</a>.</p></div>
        </article>
        <article>
          <span>02</span>
          <div><h2>Information you choose to share</h2><p>If you contact Craftsphere Talent by email, phone, WhatsApp or LinkedIn, the information you provide may include your name, contact details, company, hiring requirements and message content. It is used to respond to your enquiry, discuss services and manage a potential or existing business relationship.</p></div>
        </article>
        <article>
          <span>03</span>
          <div><h2>Optional website analytics</h2><p>Google Analytics is loaded only after you select “Allow analytics”. It may process page views, interactions, approximate location, browser and device information, along with contact-button events and Core Web Vitals. Advertising storage, Google Signals and personalised advertising are disabled on this website.</p></div>
        </article>
        <article>
          <span>04</span>
          <div><h2>Cookies and your preference</h2><p>Your analytics choice is saved in your browser’s local storage. If analytics are allowed, Google Analytics may use analytics storage. You can change or withdraw your choice at any time.</p><button className="privacy-settings-button" type="button" data-analytics-settings>Open analytics settings</button></div>
        </article>
        <article>
          <span>05</span>
          <div><h2>Sharing and retention</h2><p>Information is shared only with service providers needed to operate communications, website hosting and optional analytics, or where required by law. Contact information is kept only for as long as needed for the enquiry, cooperation and applicable legal obligations. Analytics information follows the retention settings of the Google Analytics property.</p></div>
        </article>
        <article>
          <span>06</span>
          <div><h2>Your rights</h2><p>Depending on the circumstances, you may request access, correction, erasure, restriction or portability of your personal data, object to processing, or withdraw consent. You may also lodge a complaint with the <a href="https://uodo.gov.pl/en/680/1402" target="_blank" rel="noreferrer">Polish Personal Data Protection Office</a>. Start by contacting Craftsphere Talent using the email address above.</p></div>
        </article>
      </section>

      <section className="privacy-contact shell" aria-label="Privacy contact">
        <div><p className="kicker">Privacy contact</p><h2>Have a question about your data?</h2></div>
        <a className="button button-primary" href="mailto:konrad@craftspheretalent.com?subject=Privacy%20request" data-analytics-event="contact_click" data-contact-method="email" data-contact-placement="privacy_page">Email Me <Mail size={17} /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
