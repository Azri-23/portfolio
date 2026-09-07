import { projects } from "@/app/projects/data/project";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]"
      >
        {project.title}
      </h1>

      <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed max-w-md">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-sm text-[var(--color-text-muted)]">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-6">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-[var(--color-accent)] hover:underline"
          >
            Live site →
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="text-[var(--color-accent)] hover:underline"
          >
            View code →
          </a>
        )}
      </div>
    </main>
  );
}
