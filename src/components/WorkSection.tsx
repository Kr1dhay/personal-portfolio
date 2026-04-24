const workEntries = [
  {
    date: "2023 — Present",
    company: "Behaviourlab",
    title: "Software Engineer",
    description:
      "Building data pipelines and analytics infrastructure for behavioural finance products. Own the full backend stack — AWS Lambda, SQS, RDS — and contributed features across the TypeScript frontend. Shipping to a growing base of fund managers and portfolio analysts.",
    tags: ["Python", "TypeScript", "AWS", "PostgreSQL", "Next.js"],
  },
  {
    date: "2022 — 2023",
    company: "Freelance",
    title: "Backend Developer",
    description:
      "Contract work across early-stage startups. Built REST APIs, serverless event-driven services, and internal tooling. Worked closely with founding teams to scope and ship fast.",
    tags: ["Node.js", "Python", "Serverless", "AWS"],
  },
  {
    date: "2021 — 2022",
    company: "Accenture",
    title: "Technology Analyst",
    description:
      "Graduate programme. Rotated across cloud migration projects and data engineering workstreams for enterprise clients. Gained hands-on experience with large-scale ETL and infrastructure-as-code.",
    tags: ["Azure", "SQL", "Terraform", "Python"],
  },
];

export default function WorkSection() {
  return (
    <section id="experience">
      <div className="max-w-[820px] mx-auto px-5 sm:px-12 pt-5 pb-12 sm:pb-20">
        <div className="reveal text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Work
        </div>

        <div className="flex flex-col">
          {workEntries.map((entry, i) => (
            <div
              key={entry.company}
              className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-y-3 sm:gap-x-10 sm:gap-y-0 py-8 border-b-[0.5px] border-[var(--border)]`}
            >
              <div className="reveal-left pt-0.5">
                <div className="text-[10px] sm:text-[14px] tracking-[0.1em] uppercase text-[var(--text2)] mb-1.5">
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
      </div>
    </section>
  );
}
