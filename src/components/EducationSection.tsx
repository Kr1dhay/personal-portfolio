const educationEntries = [
  {
    date: "2018 — 2021",
    institution: "University of Leeds",
    degree: "BEng Electrical & Electronic Engineering",
    description:
      "Focus on digital systems, signal processing, and embedded programming. Dissertation on real-time signal classification using ML models deployed on edge hardware. First class honours.",
    tags: ["Embedded C", "MATLAB", "Digital Systems", "Machine Learning"],
  },
  {
    date: "2016 — 2018",
    institution: "Sixth Form",
    degree: "A-Levels",
    description:
      "Mathematics (A*), Further Mathematics (A), Physics (A). Foundation for engineering and problem-solving that still shapes how I approach systems design.",
    tags: [],
  },
];

export default function EducationSection() {
  return (
    <section id="education">
      <div className="max-w-[820px] mx-auto px-12 py-20">
        <div className="reveal text-[15px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Education
        </div>

        <div className="flex flex-col">
          {educationEntries.map((entry, i) => (
            <div
              key={entry.institution}
              className={`grid grid-cols-[180px_1fr] gap-x-10 py-8 border-b-[0.5px] border-[var(--border)]`}
            >
              <div className="reveal-left pt-0.5">
                <div className="text-[10px] tracking-[0.1em] uppercase text-[var(--text2)] mb-1.5">
                  {entry.date}
                </div>
                <div className="text-[11px] text-[var(--text2)] tracking-[0.04em]">
                  {entry.institution}
                </div>
              </div>

              <div className="reveal">
                <div className="font-serif text-[20px] tracking-[-0.3px] leading-[1.2] mb-3 text-[var(--text)]">
                  {entry.degree}
                </div>
                <p className="text-[12px] text-[var(--text2)] leading-[1.8] mb-3.5">
                  {entry.description}
                </p>
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
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
