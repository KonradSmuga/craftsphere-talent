import type { Metadata } from "next";
import { BrandAmbient } from "../brand-ambient";
import { SiteFooter } from "../site-footer";
import { CvForm } from "../site-forms";
import { SiteHeader } from "../site-header";
import { SOCIAL_IMAGE } from "../site-config";

const DESCRIPTION =
  "Send your CV to Craftsphere Talent. Specialist recruitment for Cloud, Data, AI and software engineering roles across EMEA, the US and LATAM.";

export const metadata: Metadata = {
  title: "Send your CV | Craftsphere Talent",
  description: DESCRIPTION,
  alternates: { canonical: "/candidates" },
  openGraph: {
    type: "website",
    url: "/candidates",
    title: "Send your CV | Craftsphere Talent",
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

const specialisms = ["Cloud", "Data", "AI / ML", "Backend", "Frontend", "Full Stack", "DevOps / Platform", "Security", "Web3"];

const nextSteps = [
  { title: "Your CV goes straight to Konrad", detail: "No automated screening. Your experience is read by the recruiter who runs the searches." },
  { title: "A conversation when a role fits", detail: "If a current or upcoming role matches, you'll get an email to set up a call and talk it through." },
  { title: "Nothing shared without your say", detail: "Your CV goes to a company only after you've agreed to that specific role." },
];

export default function CandidatesPage() {
  return (
    <main id="top" className="home page">
      <BrandAmbient />
      <SiteHeader page="candidates" />

      <section className="block" aria-labelledby="candidates-title">
        <div className="shell cand">
          <div className="cand-copy">
            <h1 id="candidates-title">Send your CV</h1>
            <p className="page-lead">
              Craftsphere Talent recruits engineers for technology companies across EMEA, the US
              and LATAM. Share your CV and you&apos;ll hear from Konrad when a role fits your
              experience.
            </p>

            <h2 className="cand-subhead">Specialisms</h2>
            <ul className="tag-list">
              {specialisms.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2 className="cand-subhead">What happens next</h2>
            <ol className="steps">
              {nextSteps.map(({ title, detail }) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="form-card">
            <CvForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
