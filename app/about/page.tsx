export default function AboutPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#2E5EAA] flex items-center justify-center shrink-0">
          <span
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-2xl text-[#16202A]"
          >
            AZ
          </span>
        </div>

        <div>
          <h1
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-3xl md:text-4xl font-semibold text-[#16202A]"
          >
            About Me
          </h1>
          <p className="mt-4 text-[#5B6672] leading-relaxed max-w-md">
            Placeholder bio — real content comes in Week 3.
          </p>

          <h2 className="mt-10 text-sm font-medium text-[#16202A]">Skills</h2>
          <p className="mt-2 text-[#5B6672]">
            {["Python", "SQL", "TypeScript"].map((skill, i, arr) => (
              <span key={skill}>
                <span className="hover:text-[#2E5EAA] hover:underline cursor-default">
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