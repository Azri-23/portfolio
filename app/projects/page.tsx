import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "Task Tracker CLI", description: "A command-line task manager built with Python and SQLite." },
  { title: "Productivity Tracker", description: "A desktop app for tracking focus sessions, built with Tkinter." },
  { title: "This Portfolio", description: "The site you're looking at right now — built with Next.js and Tailwind." },
];

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