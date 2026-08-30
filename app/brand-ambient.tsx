import { BrainCircuit, Cloud, Code2, Database, Network, Workflow } from "lucide-react";

const topics = [
  { key: "cloud", label: "Cloud", detail: "Infrastructure", icon: Cloud },
  { key: "data", label: "Data", detail: "Platforms", icon: Database },
  { key: "java", label: "Java", detail: "Backend", icon: Code2 },
  { key: "engineering", label: "Engineering", detail: "Product teams", icon: Network },
  { key: "ai", label: "AI", detail: "Intelligence", icon: BrainCircuit },
  { key: "devops", label: "DevOps", detail: "Delivery", icon: Workflow },
];

export function BrandAmbient() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <span className="ambient-orb ambient-orb-a" />
      <span className="ambient-orb ambient-orb-b" />
      <span className="ambient-orb ambient-orb-c" />
      <span className="ambient-thread ambient-thread-a" />
      <span className="ambient-thread ambient-thread-b" />
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
