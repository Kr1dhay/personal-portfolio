const workEntries = [
  {
    date: "Sep 2025 — Present",
    company: "Behaviour Lab",
    title: "Forward-Deployed Software Engineer",
    // description: "At Behaviour Lab I work across both the software engineering and advisory teams, to support clients while also shipping production code. I work end-to-end across backend services, databases and infra (with some frontend work occasionally too). I've built custom signal processing algorithms in Pandas tailored to individual fund structures, migrated a large client specific service into a modular feature based architecture, and designed an async polling system on AWS Lambda that replaced a full-day manual process entirely.  Lately I've been building LLM agents with tools to make authenticated internal API calls in order to automate workflows inside the product.",
    description: "At Behaviour Lab I work across both the software engineering and advisory teams, to support clients while also shipping production code. I work end-to-end across backend services, databases and infra (with some frontend work occasionally too).",
    tags: ["Python", "AWS", "TypeScript", "Next.js", "SQL"],
  },
  {
    date: "Apr 2024 — Aug 2024",
    company: "Behaviour Lab",
    title: "Forward-Deployed Software Engineer Intern",
    description:
      "A five-month placement at a fintech startup. I got handed real problems early and enjoyed the fast-paced nature, leading me to decide to return after I graduated.",
    tags: ["Python", "Pandas", "Pydantic", "Pandera"],
  },
  {
    date: "Oct 2023 — May 2024",
    company: "Imperial College London",
    title: "Undergraduate Teaching Assistant",
    description:
      "Worked as a UTA for Imperial's C++ Programming module, running weekly tutorial sessions for first-year undergraduates during my third year.",
    tags: ["C++"],
  },
  {
    date: "Jun 2023 — Aug 2023",
    company: "Citi",
    title: "ICG Summer Technology Analyst",
    description: "I worked in the Commodities technology team, where I built a monitoring dashboard to visualise usage and performance statistics of the Pricer application.  I received a full-time return offer at the end of the internship.",
    tags: ["TypeScript", "Grafana", "InfluxDB"],
  },
];

export default function WorkSection() {
  return (
    <section id="experience">
      <div className="max-w-[820px] mx-auto px-5 sm:px-12 pt-5 pb-12 sm:pb-20">
        <div className="reveal font-serif text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Work
        </div>

        <div className="flex flex-col">
          {workEntries.map((entry, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-y-3 sm:gap-x-10 sm:gap-y-0 py-8 border-b-[0.5px] border-[var(--border)]`}
            >
              <div className="reveal-left pt-0.5">
                <div className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[var(--text2)] mb-1.5">
                  {entry.date}
                </div>
                <div className="text-[11px] sm:text-[14px] text-[var(--text2)] tracking-[0.04em]">
                  {entry.company}
                </div>
              </div>

              <div className="reveal">
                <div className="font-serif text-[20px] sm:text-[22px] tracking-[-0.3px] leading-[1.2] mb-3 text-[var(--text)]">
                  {entry.title}
                </div>
                <p className="text-[12px] sm:text-[14px] text-[var(--text2)] leading-[1.8] mb-3.5">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8">
          <a
            href="/Kridhay_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] sm:text-[15px] tracking-[0.12em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 pl-0.5 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors no-underline"
          >
            Full CV ↗
          </a>
        </div>
      </div>
    </section>
  );
}
