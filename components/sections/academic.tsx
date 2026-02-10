import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/projects";

export function AcademicSection() {
  const academics = PROJECTS.filter((p) => p.kind === "academic");

  return (
    <section className="px-6 py-20" id="academic">
      <div className="mx-auto max-w-5xl">
      
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {academics.map((p) => (
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
      </div>
    </section>
  );
}