import { BrainCircuit, Cloud, Code2, Database, Layers3, Network, ShieldCheck, Workflow } from "lucide-react";

// Role chips drifting slowly in the page margins, behind the content.
const topics = [
  { key: "cloud", label: "Cloud", detail: "Infrastructure", icon: Cloud },
  { key: "data", label: "Data", detail: "Platforms", icon: Database },
  { key: "java", label: "Java", detail: "Backend", icon: Code2 },
  { key: "engineering", label: "Engineering", detail: "Product teams", icon: Network },
  { key: "ai", label: "AI", detail: "Intelligence", icon: BrainCircuit },
  { key: "devops", label: "DevOps", detail: "Delivery", icon: Workflow },
  { key: "frontend", label: "Frontend", detail: "Web apps", icon: Layers3 },
  { key: "security", label: "Security", detail: "Cloud & AppSec", icon: ShieldCheck },
];

export function BrandAmbient() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      {topics.map(({ key, label, detail, icon: Icon }) => (
        <span className={`ambient-tech ambient-tech-${key}`} key={key}>
          <Icon size={18} />
          <b>{label}</b>
          <small>{detail}</small>
        </span>
      ))}
    </div>
  );
}
