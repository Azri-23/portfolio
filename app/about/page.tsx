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
            Placeholder bio — real content comes in Week 3.
          </p>

          <h2 className="mt-10 text-sm font-medium text-[var(--color-text)]">Skills</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            {["Python", "SQL", "TypeScript"].map((skill, i, arr) => (
              <span key={skill}>
                <span className="hover:text-[var(--color-accent)] hover:underline cursor-default">
                  {skill}
                </span>
                {i < arr.length - 1 && <span className="mx-2">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
}