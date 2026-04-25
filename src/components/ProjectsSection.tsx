"use client";

import { useEffect, useState } from "react";

interface Project {
  id: string;
  category: string;
  title: string;
  summary: string;
  body: string;
  stack: string[];
  highlights: string[];
  links: { label: string; href: string }[];
  modal: boolean;
}

const projects: Project[] = [
  {
    id: "p1",
    category: "Research — MEng Thesis",
    title: "Interpretable Medical Models",
    summary: "Novel Symbolic Regression approaches for interpretable prognostic models in SICH patients.",
    body: "My MEng thesis at Imperial College London developed interpretable models for prognosticating outcomes in patients with spontaneous intracerebral haemorrhage (SICH) — a high-stakes clinical domain where transparency is as important as accuracy.\n\nAdapted frameworks from existing research and implemented novel Symbolic Regression approaches as an interpretable alternative to black-box ML. Benchmarked against traditional ML techniques and existing clinical scoring systems to validate that SR models are competitive in both performance and interpretability.",
    stack: ["Python", "Symbolic Regression", "Machine Learning", "scikit-learn"],
    highlights: [
      "Novel SR framework implementation",
      "Benchmarked vs traditional ML & clinical scoring systems",
      "Interpretable prognostic models for SICH",
    ],
    links: [],
    modal: true,
  },
  {
    id: "p2",
    category: "Systems",
    title: "C90 Compiler",
    summary: "C90 to RISC-V compiler in C++, with full parsing, AST construction, and assembly codegen.",
    body: "",
    stack: ["C++", "RISC-V Assembly"],
    highlights: [
      "Full C90 parsing and AST construction",
      "RISC-V assembly code generation",
      "Group project — Dec 2022–Mar 2023",
    ],
    links: [{ label: "GitHub", href: "#" }],
    modal: false,
  },
  {
    id: "p3",
    category: "Hardware",
    title: "RISC-V Processor",
    summary: "Pipelined 32-bit RISC-V processor with reduced ISA, implemented in SystemVerilog.",
    body: "",
    stack: ["SystemVerilog", "RISC-V"],
    highlights: [
      "32-bit pipelined architecture",
      "Reduced ISA implementation",
      "Group project — Dec 2022–Mar 2023",
    ],
    links: [{ label: "GitHub", href: "#" }],
    modal: false,
  },
  {
    id: "p4",
    category: "Blockchain",
    title: "Blockchain dApp",
    summary: "",
    body: "",
    stack: [],
    highlights: [],
    links: [],
    modal: true,
  },
];

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeId]);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  return (
    <>
      <section id="projects">
        <div className="max-w-[820px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
          <div className="text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
            Projects
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`stagger-child d-${i + 1} border border-[0.5px] border-[var(--border)] p-7 pt-7 rounded-[3px] bg-[var(--bg)] transition-all duration-200 hover:bg-[var(--bg2)] hover:border-[var(--text3)] hover:-translate-y-0.5`}
              >
                <div className="text-[9px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] mb-2.5">
                  {project.category}
                </div>
                <div className="font-serif text-[19px] sm:text-[21px] leading-[1.15] tracking-[-0.2px] mb-2.5 text-[var(--text)]">
                  {project.title}
                </div>
                <p className="text-[11.5px] sm:text-[14px] text-[var(--text2)] leading-[1.7] mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[11px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.modal ? (
                  <button
                    className="text-[9px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border border-[0.5px] border-[var(--border)] px-3 py-1.5 rounded-[2px] font-mono cursor-pointer hover:text-[var(--text)] hover:border-[var(--text2)] transition-colors"
                    onClick={() => setActiveId(project.id)}
                  >
                    Expand ↗
                  </button>
                ) : (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] border border-[0.5px] border-[var(--border)] px-3 py-1.5 rounded-[2px] font-mono hover:text-[var(--text)] hover:border-[var(--text2)] transition-colors no-underline"
                    onClick={() => {}}
                  >
                    {project.links[0].label} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal overlay */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(28, 25, 22, 0.6)",
            backdropFilter: "blur(4px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveId(null);
          }}
        >
          <div
            className="bg-[var(--bg)] border border-[0.5px] border-[var(--border)] rounded-[4px] w-full max-w-[640px] mx-4 max-h-[80vh] overflow-y-auto p-12 relative"
            style={{ transform: "translateY(0)", transition: "transform 0.25s" }}
          >
            <button
              className="absolute top-5 right-6 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border-0 cursor-pointer font-mono hover:text-[var(--text)] transition-colors"
              onClick={() => setActiveId(null)}
            >
              Close ×
            </button>

            <div className="text-[9px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--text3)] mb-3">
              {activeProject.category}
            </div>
            <div className="font-serif text-[32px] sm:text-[35px] tracking-[-0.5px] leading-[1.1] mb-5 text-[var(--text)]">
              {activeProject.title}
            </div>
            <div className="text-[13px] sm:text-[14px] text-[var(--text2)] leading-[1.85] mb-7">
              {activeProject.body.split("\n\n").map((para, i) => (
                <p key={i} className={i > 0 ? "mt-3.5" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="text-[9px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--text3)] mb-2.5">
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProject.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] sm:text-[11px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-[9px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--text3)] mb-2.5">
              Highlights
            </div>
            <ul className="list-none p-0">
              {activeProject.highlights.map((h) => (
                <li
                  key={h}
                  className="text-[12px] sm:text-[13px] text-[var(--text2)] leading-[2] border-l-[1.5px] border-[var(--border)] pl-3 mb-1"
                >
                  {h}
                </li>
              ))}
            </ul>

            {activeProject.links.length > 0 && (
              <div className="flex gap-3.5 mt-7 pt-6 border-t border-[0.5px] border-[var(--border)]">
                {activeProject.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 hover:text-[var(--text)] transition-colors no-underline"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
