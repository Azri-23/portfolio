import { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "task-tracker-cli",
        title: "Task Tracker CLI",
        description: "A command-line task manager built with Python and SQLite.",
        tags: ["Python", "SQLite", "CLI"],
        repoUrl: "https://github.com/Azri-23/task-tracker",
    },
    {
        slug: "productivity-tracker",
        title: "Productivity Tracker",
        description: "A desktop app for tracking focus sessions, built with Tkinter.",
        tags: ["Python", "Tkinter", "SQLite"],
        repoUrl: "https://github.com/Azri-23/productivity-tracker",
    },
    {
        slug: "this-portfolio",
        title: "This Portfolio",
        description: "The site you're looking at right now — built with Next.js and Tailwind.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        liveUrl: "https://portfolio-tau-sable-7nxa7v0z7v.vercel.app",
        repoUrl: "https://github.com/Azri-23/portfolio",
    },
];