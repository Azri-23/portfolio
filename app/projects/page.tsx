import ProjectCard from "@/components/ProjectCard";
import { projects } from "./data/project";


export default function ProjectsPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <h1
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]"
      >
        Projects
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}