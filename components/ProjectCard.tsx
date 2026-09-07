import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
}

export default function ProjectCard({ slug, title, description }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block border border-[var(--color-border)] p-6 hover:border-[var(--color-accent)] transition-colors"
    >
      <h3
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-xl font-semibold text-[var(--color-text)]"
      >
        {title}
      </h3>
      <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">{description}</p>
    </Link>
  );
}