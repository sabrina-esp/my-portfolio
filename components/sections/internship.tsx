import { ProjectCard } from "../ui/project-card";
import { PROJECTS } from "@/lib/projects";

export function InternshipSection() {
  const internships = PROJECTS.filter((p) => p.kind === "internship");

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
        {internships.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            tags={p.tags}
            kind={p.kind}
            href={p.href}
          />
        ))}
      </div>
    </section>
  );
}