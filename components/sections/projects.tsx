// components/sections/projects.tsx

import { ProjectCard } from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section className="px-6 py-16" id="projects">
      <div className="mx-auto max-w-5xl">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>

        <div className="mt-10">
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}