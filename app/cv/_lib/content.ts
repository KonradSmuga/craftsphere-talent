/**
 * Everything shown on the private CV page. Edit here; the layout is in app/cv/[token]/page.tsx.
 *
 * Company logos: drop a file into public/cv-logos/ and set `logo` on the job, e.g.
 *   logo: "/cv-logos/clearscale.svg"
 * Without a logo the page shows a monogram tile instead.
 */
import type { HireKey, SideKey } from "../_components/cv-icons";

export const LINKEDIN = "https://www.linkedin.com/in/konrad-smuga-1265a3b4/";
export const EMAIL = "Konrad.Smuga3@gmail.com";
export const PHONE_DISPLAY = "+48 662 073 227";
export const PHONE_LINK = "+48662073227";

export const summary =
  "Senior and lead tech recruiter with ten years on both the agency and the in-house side, delivering talent solutions " +
  "for permanent and contract positions, primarily for well-known global financial institutions, FinTechs and startups. " +
  "I source across IT disciplines, from C-level executives to individual contributors, with particular depth in software " +
  "development, data analytics, network engineering and information security, and more recently in hardware, research " +
  "and go-to-market teams.";

export const stats = [
  { value: 10, suffix: "", label: "years in tech recruitment" },
  { value: 160, suffix: "+", label: "candidates hired" },
  { value: 9, suffix: "", label: "hires in one month" },
];

export const hiring: { icon: HireKey; title: string; detail: string; roles: string[] }[] = [
  {
    icon: "software",
    title: "Software, cloud & data",
    detail: "The core of my work, from individual contributors to C-level, perm and contract.",
    roles: [
      "Backend, frontend & full stack",
      "Forward deployed engineers (FDE)",
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

export const highlights = [
  "Managed and led the entire recruitment process as the sole recruiter for an AWS consulting company, covering the US and EMEA markets (2024–2025).",
  "Closed three executive hires in my first month at ClearScale (2021).",
  "Optimised a hiring process that was then replicated across all external hiring processes and pipelines.",
  "Built cloud-based AWS teams from scratch in the EMEA, LATAM and US regions.",
  "Personal best of nine hires in a single month at emagine (2019).",
  "Award for the best hiring performance in a team of eight recruiters at emagine (2019).",
  "Supervised a team of three interns at emagine, all of whom went on to become Senior Recruiters (2018).",
  "The first recruiter at Link Group, one of the largest recruitment agencies in Poland, to close over 30 hires in a single year as a junior recruiter (2016).",
];

export type Role = {
  title: string;
  period: string;
  /** An earlier title in the same company that these duties also cover (a promotion). */
  previously?: { title: string; period: string };
  points: string[];
};
export type Job = {
  company: string;
  note?: string;
  place: string;
  years: string;
  monogram: string;
  logo?: string;
  roles: Role[];
};

export const currentJob: Job = {
  company: "ClearScale",
  place: "Remote, San Francisco",
  years: "2021 – present",
  monogram: "CS",
  roles: [
    {
      title: "Lead IT Technical Recruiter",
      period: "Jan 2024 – present",
      points: [
        "Sole recruiter at ClearScale, independently overseeing the entire recruitment function for the company.",
        "Managing every part of the hiring process, including sourcing, screening, interviewing and onboarding, across multiple departments and executive tech roles (e.g. data engineers, leads, full stack engineers, DevOps, AI/ML, architects).",
      ],
    },
    {
      title: "Senior IT Technical Recruiter",
      period: "Dec 2021 – Dec 2023",
      points: [
        "Engaged directly with international stakeholders.",
        "Managed the end-to-end recruitment process, from the initial cold call to contract signing and staying in touch afterwards, across backend, frontend, full stack, DevOps and data roles as well as director and lead positions, ensuring the best candidate experience throughout.",
        "Selected candidates aligned with client expectations for the EMEA and US markets, and helped candidates find employers that match their skills and career goals.",
        "Built cloud-based AWS teams from scratch in the EMEA, LATAM and US regions.",
        "Optimised and enhanced the hiring process, including implementing tools to streamline the workflow (e.g. the scheduling tool Calendly) for both tech and HR teams.",
        "Liaised with colleagues, stakeholders and hiring managers at various levels of the organisation to provide market insight and gather relevant information.",
        "Handled sales activities such as negotiation and lead generation.",
        "Worked in an Agile HR environment, taking part in daily stand-ups and Scrum meetings.",
      ],
    },
  ],
};

export const emagineJob: Job = {
  company: "emagine",
  note: "formerly ProData Consult",
  place: "Warsaw",
  years: "2017 – 2021",
  monogram: "e",
  roles: [
    {
      title: "Recruitment Manager",
      period: "May 2021 – Sep 2021",
      points: [
        "Managed the team of recruitment consultants.",
        "Ran market mapping.",
        "Conducted in-depth, strict compliance checks for every candidate put forward.",
        "Built good relations with candidates.",
        "Optimised and improved the hiring process, including implementing tools to organise work between tech and HR teams.",
        "Liaised with colleagues, clients and hiring managers at different levels within the company.",
        "Spent 50% of my time on end-to-end candidate management, from the initial cold call to the signed contract and staying in touch afterwards, across backend, frontend, full stack, DevOps, data, director and lead vacancies, making sure the candidate experience was at its best.",
      ],
    },
    {
      title: "Senior IT Recruitment Consultant",
      period: "Dec 2019 – Apr 2021",
      previously: { title: "Recruitment Consultant", period: "Aug 2017 – Nov 2019" },
      points: [
        "End-to-end candidate management, from the initial cold call to the signed contract and staying in touch afterwards.",
        "Screened and interviewed candidates over Teams, Skype and Google Meet, making sure the candidate experience was at its best, including negotiation and lead generation.",
        "Met global and international clients.",
        "Searched for candidates in the IT sector with direct methods and sources for the Polish and European markets.",
        "Prepared job advertisements.",
        "Took part in job fairs, conferences and meetups.",
        "Taught a group of interns.",
      ],
    },
  ],
};

export const earlyJobs: Job[] = [
  {
    company: "Link Group",
    place: "Warsaw",
    years: "2016 – 2017",
    monogram: "LG",
    roles: [
      {
        title: "IT Research Consultant",
        period: "Aug 2016 – Jul 2017",
        points: [
          "Searched for candidates in the IT sector with direct methods and sources for the Polish and European markets.",
          "Took candidates through the recruitment process (screening and interviewing), making sure the candidate experience was at its best.",
          "Prepared job advertisements.",
          "Searched for additional clients.",
        ],
      },
    ],
  },
  {
    company: "Diebold Nixdorf",
    place: "Warsaw",
    years: "2016",
    monogram: "DN",
    roles: [
      {
        title: "IT Helpdesk Analyst",
        period: "Mar 2016 – Aug 2016",
        points: [
          "Logged and updated all key information about reported issues in the incident management system.",
          "Developed tools to improve helpdesk efficiency and productivity.",
          "Contacted field service engineers and gave them instructions.",
          "Created and updated issue information in the Oracle CRM system.",
          "Supported customers in the UK and Australia through internal VoIP software and Microsoft Outlook.",
          "Fixed and reported network issues: WAN and LAN, modems, routers (Cisco, TP-Link, Netgear), firewalls and switches.",
          "Used toolsets based on Windows Server 2008 (SCCM and SCOM).",
          "Fixed site databases and many kinds of system registry errors.",
          "Prioritised and managed many open cases at the same time.",
          "Wrote English documentation based on existing issues.",
        ],
      },
    ],
  },
];

export type SideCard =
  | { icon: SideKey; title: string; kind: "tags"; items: string[] }
  | { icon: SideKey; title: string; kind: "facts"; items: { when: string; what: string; detail?: string }[] }
  | { icon: SideKey; title: string; kind: "langs"; items: { name: string; level: number; label: string }[] };

export const skills: SideCard[] = [
  {
    icon: "tools",
    title: "Tools",
    kind: "tags",
    items: [
      "LinkedIn Recruiter",
      "Loxo",
      "Greenhouse",
      "Recruitee",
      "Zoho",
      "Hiretual",
      "HeroHunt",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Calendly",
      "Jira & PM tools",
      "Java basics",
    ],
  },
  {
    icon: "strengths",
    title: "Strengths",
    kind: "tags",
    items: [
      "Executive search",
      "Perm recruitment",
      "Contract recruitment",
      "Negotiation",
      "B2B sales",
      "Account management",
      "Cold calling",
      "Market research",
      "Marketing strategies",
      "HR consulting",
      "Tech savvy",
    ],
  },
  {
    icon: "education",
    title: "Education",
    kind: "facts",
    items: [
      { when: "2010 – 2015", what: "University of Łódź", detail: "Bachelor's degree in Information Technology, specialisation: IT in business" },
      {
        when: "2006 – 2010",
        what: "Upper Secondary Technical School of IT, Piotrków Trybunalski",
        detail: "Diploma in Information Technology",
      },
    ],
  },
  {
    icon: "certificates",
    title: "Certificates",
    kind: "facts",
    items: [
      { when: "2024", what: "AWS Certified Cloud Practitioner" },
      {
        when: "Nov 2017 – May 2018",
        what: "Junior Java Developer bootcamp, Kodilla",
        detail: "Java 8, Spring 5 (Web/MVC/Boot), JUnit 4/Mockito, SQL/JDBC/Hibernate",
      },
    ],
  },
  {
    icon: "languages",
    title: "Languages",
    kind: "langs",
    items: [
      { name: "Polish", level: 1, label: "Native" },
      { name: "English", level: 0.84, label: "C1" },
    ],
  },
  {
    icon: "outside",
    title: "Outside work",
    kind: "tags",
    items: ["Eastern cultures", "AI & new technologies", "Playing drums", "Board games"],
  },
];

export const sections = [
  { id: "profile", label: "Profile" },
  { id: "hiring", label: "Hiring" },
  { id: "record", label: "Track record" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
