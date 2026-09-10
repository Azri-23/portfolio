export default function AboutPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#2E5EAA] flex items-center justify-center shrink-0">
          <span
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-2xl text-[var(--color-text)]"
          >
            AZ
          </span>
        </div>

        <div>
          <h1
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]"
          >
            About Me
          </h1>
          <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed max-w-md">
            I&apos;m a Software Engineering student building my skills across
            Python, SQL, and modern web development — including the stack this
            site is built with. I enjoy figuring out how things work under the
            hood, and I&apos;m currently focused on strengthening my
            fundamentals in data structures, databases, and full-stack
            development.
          </p>

          <h2 className="mt-10 text-sm font-medium text-[var(--color-text)]">
            Skills
          </h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            {[
              "Python",
              "SQL",
              "MySQL",
              "MongoDB",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Git",
            ].map((skill, i, arr) => (
              <span key={skill}>
                <span className="hover:text-[var(--color-accent)] hover:underline cursor-default">
                  {skill}
                </span>
                {i < arr.length - 1 && <span className="mx-2">·</span>}
              </span>
            ))}
          </p>

          <a
            href="/resume/azri-resume.pdf"
            target="_blank"
            className="mt-8 inline-block text-[var(--color-accent)] hover:underline"
          >
            Download Resume →
          </a>
        </div>
      </div>
    </main>
  );
}
