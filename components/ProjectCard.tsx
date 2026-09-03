interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="border border-[#E5E7EB] p-6 hover:border-[#2E5EAA] transition-colors">
      <h3
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-xl font-semibold text-[var(--color-text)]"
      >
        {title}
      </h3>
      <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">{description}</p>
    </div>
  );
}