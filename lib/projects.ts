export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  kind: ProjectKind;
  href?: string;
};
export type ProjectKind = "internship" | "academic";

export const PROJECTS: Project[] = [
  {
    id: "wedtect",
    title: "WEDTECT DripIn",
    description: "Smart water monitoring IoT solution.",
    tags: ["Flutter", "IoT", "AI"],
    kind: "internship",
  },
  {
    id: "healthchain",
    title: "HealthChain",
    description: "Appointments, documents, RBAC + assistant chat.",
    tags: ["NestJS", "MongoDB", "JWT"],
    kind: "academic",
  },
  {
    id: "trustify",
    title: "Trustify",
    description: "Fraud detection mobile app.",
    tags: ["Android", "iOS"],
    kind: "academic",
  },
];