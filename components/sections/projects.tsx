import { Container } from "@/components/layout/container";
import { getTranslations } from "next-intl/server";

const PROJECTS = [
  {
    title: "WEDTECT DripIn",
    description: "Water leak detection & monitoring (Flutter + AI).",
    tags: ["Flutter", "AI", "IoT"],
    href: "#"
  },
  {
    title: "HealthChain",
    description: "Appointments, documents, RBAC + chat assistant.",
    tags: ["NestJS", "MongoDB", "JWT"],
    href: "#"
  }
];

export async function ProjectsSection() {
  const t = await getTranslations("projects");

  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight">{t("title")}</h2>
        <p className="mt-3 text-zinc-600">{t("subtitle")}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-zinc-400 transition group-hover:text-blue-600">
                  ↗
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-600">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-600 group-hover:border-blue-300 group-hover:text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}