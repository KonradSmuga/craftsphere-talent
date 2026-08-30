import type { Metadata } from "next";
import { SiteAnalytics } from "./site-analytics";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, SOCIAL_IMAGE } from "./site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Craftsphere Talent",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE.url],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${SITE_URL}/#business`,
  name: "Craftsphere Talent",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "konrad@craftspheretalent.com",
  telephone: "+48662073227",
  areaServed: ["EMEA", "United States", "Latin America"],
  sameAs: ["https://www.linkedin.com/in/konrad-smuga-1265a3b4/"],
  knowsAbout: [
    "IT recruitment",
    "Cloud recruitment",
    "Artificial intelligence recruitment",
    "Data engineering recruitment",
    "Software engineering recruitment",
    "DevOps recruitment",
    "Candidate experience",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteAnalytics measurementId="G-KDDDE0YGTF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
