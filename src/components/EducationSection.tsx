const educationEntries = [
  {
    date: "2021 — 2025",
    institution: "Imperial College London",
    degree: "MEng Electronic and Information Engineering",
    description: "I took part in the Muay Thai Society and served as Head of Corporate Relations for the Algorithmic Trading Society during my time at Imperial.  I graduated with First Class Honours",
    tags: ["C++", "Computer Architecture", "Machine Learning", "Signal Processing"],
  },
  {
    date: "2024 — 2025",
    institution: "National University of Singapore",
    degree: "MEng Electrical and Computer Engineering (Exchange)",
    description:
      "Completed my final year at NUS. Living in Singapore was a great experience and the semester breaks gave me the chance to travel across Southeast Asia.",
    tags: ["Rust", "Computer Security", "Artificial Intelligence"],
  },
];

export default function EducationSection() {
  return (
    <section id="education">
      <div className="max-w-[820px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
        <div className="reveal text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Education
        </div>

        <div className="flex flex-col">
          {educationEntries.map((entry, i) => (
            <div
              key={entry.institution}
              className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-y-3 sm:gap-x-10 sm:gap-y-0 py-8 border-b-[0.5px] border-[var(--border)]`}
            >
              <div className="reveal-left pt-0.5">
                <div className="text-[10px] sm:text-[14px] tracking-[0.1em] uppercase text-[var(--text2)] mb-1.5">
                  {entry.date}
                </div>
                <div className="text-[11px] sm:text-[14px] text-[var(--text2)] tracking-[0.04em]">
                  {entry.institution}
                </div>
              </div>

              <div className="reveal">
                <div className="font-serif text-[20px] sm:text-[22px] tracking-[-0.3px] leading-[1.2] mb-3 text-[var(--text)]">
                  {entry.degree}
                </div>
                <p className="text-[12px] sm:text-[14px] text-[var(--text2)] leading-[1.8] mb-3.5">
                  {entry.description}
                </p>
                {entry.tags.length > 0 && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
