// components/ui/project-card.tsx
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  kind?: "internship" | "academic";
  href?: string;
};

function CardInner({
  title,
  description,
  tags = [],
  kind,
  href,
}: ProjectCardProps) {
  return (
    <div className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-lg font-semibold">{title}</h3>

            {kind && (
              <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600">
                {kind === "internship" ? "Internship" : "Academic"}
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
            {description}
          </p>
        </div>

        {href && (
          <span className="text-zinc-400 transition group-hover:text-blue-600">
            ↗
          </span>
        )}
      </div>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  if (props.href) {
    return (
      <Link href={props.href} className="block">
        <CardInner {...props} />
      </Link>
    );
  }

  return <CardInner {...props} />;
}