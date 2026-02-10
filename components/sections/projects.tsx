// components/sections/projects.tsx

import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/projects";

export function ProjectsSection() {
  const internships = PROJECTS.filter((p) => p.kind === "internship");
  const academics = PROJECTS.filter((p) => p.kind === "academic");

  return (
    <section className="px-6 py-16" id="projects">
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-sm text-zinc-600">Academic + internship work.</p>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900">
            Internship
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
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
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900">
            Academic
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
}