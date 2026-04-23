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
}

const projects: Project[] = [
  {
    id: "p1",
    category: "Data pipeline",
    title: "Portfolio Analytics Engine",
    summary: "ETL pipeline on AWS Lambda processing real-time portfolio data across 10k+ positions.",
    body: "An event-driven ETL pipeline built on AWS Lambda, SQS, and S3 that ingests real-time portfolio data and computes analytics across 10,000+ positions. Designed for low-latency processing with fan-out architecture, dead-letter queues for reliability, and a Pandas-based transformation layer that normalises data from multiple custodian formats into a unified schema.\n\nUsed at Behaviourlab to power the real-time dashboard viewed by portfolio managers and analysts. Reduced data lag from ~4 minutes to under 15 seconds end-to-end.",
    stack: ["Python", "Pandas", "AWS Lambda", "SQS", "S3", "PostgreSQL"],
    highlights: [
      "10k+ positions processed per run",
      "Sub-15s end-to-end latency",
      "Multi-custodian normalisation",
    ],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: "p2",
    category: "Web app",
    title: "Watchlist Tracker",
    summary: "Personal movie & TV tracker built with Next.js App Router, RSC, and Vercel.",
    body: "A personal movie and TV show tracker built as a Next.js 14 App Router app, using React Server Components for fast initial loads and Vercel for deployment. Integrates with the TMDB API for metadata, supports custom lists, watch status, and ratings.\n\nBuilt primarily to get hands-on with RSC patterns and the new App Router model before using them at work. Ended up being something I actually use daily.",
    stack: ["Next.js 14", "TypeScript", "React Server Components", "Vercel", "TMDB API", "Postgres (Neon)"],
    highlights: [
      "App Router + RSC architecture",
      "TMDB integration",
      "Deployed on Vercel",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Live demo", href: "#" },
    ],
  },
  {
    id: "p3",
    category: "macOS utility",
    title: "ClipboardStack",
    summary: "Native clipboard history manager for macOS. Persistent history, smart deduplication.",
    body: "A native macOS menu bar app written in Swift and SwiftUI. Maintains a persistent clipboard history with smart deduplication, fuzzy search, and one-click paste. Sits in the menu bar and stays out of the way.\n\nBuilt after getting tired of losing clipboard contents when copying something new. Stores history in a local SQLite database, handles text, URLs, and images.",
    stack: ["Swift", "SwiftUI", "AppKit", "SQLite", "macOS"],
    highlights: [
      "Menu bar native app",
      "Persistent SQLite history",
      "Fuzzy search + quick paste",
    ],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    id: "p4",
    category: "CLI tool",
    title: "Demo Agent",
    summary: "Cognito-authenticated CLI agent for populating analytics demo data across environments.",
    body: "A command-line tool for spinning up realistic demo data across multiple environments in the Behaviourlab analytics platform. Authenticates via AWS Cognito, accepts environment and scenario flags, and seeds the database with configurable data profiles — useful for sales demos, QA, and staging resets.\n\nSaved the team roughly 2–3 hours per demo prep cycle.",
    stack: ["Python", "Click", "AWS Cognito", "Boto3", "PostgreSQL"],
    highlights: [
      "Cognito auth flow",
      "Configurable data profiles",
      "Multi-environment targeting",
    ],
    links: [{ label: "Private repo", href: "#" }],
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
      <section id="projects" className="border-b border-[0.5px] border-[var(--border)]">
        <div className="max-w-[820px] mx-auto px-12 py-20">
          <div className="text-[10px] tracking-[0.16em] uppercase text-[var(--text3)] mb-12">
            Projects
          </div>

          <div className="grid grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`stagger-child d-${i + 1} border border-[0.5px] border-[var(--border)] p-7 pt-7 rounded-[3px] bg-[var(--bg)] cursor-pointer transition-all duration-200 hover:bg-[var(--bg2)] hover:border-[var(--text3)] hover:-translate-y-0.5`}
                onClick={() => setActiveId(project.id)}
              >
                <div className="text-[9px] tracking-[0.12em] uppercase text-[var(--text3)] mb-2.5">
                  {project.category}
                </div>
                <div className="font-serif text-[19px] leading-[1.15] tracking-[-0.2px] mb-2.5 text-[var(--text)]">
                  {project.title}
                </div>
                <p className="text-[11.5px] text-[var(--text2)] leading-[1.7] mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="text-[9px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border border-[0.5px] border-[var(--border)] px-3 py-1.5 rounded-[2px] font-mono cursor-pointer hover:text-[var(--text)] hover:border-[var(--text2)] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(project.id);
                  }}
                >
                  Expand ↗
                </button>
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
              className="absolute top-5 right-6 text-[10px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border-0 cursor-pointer font-mono hover:text-[var(--text)] transition-colors"
              onClick={() => setActiveId(null)}
            >
              Close ×
            </button>

            <div className="text-[9px] tracking-[0.14em] uppercase text-[var(--text3)] mb-3">
              {activeProject.category}
            </div>
            <div className="font-serif text-[32px] tracking-[-0.5px] leading-[1.1] mb-5 text-[var(--text)]">
              {activeProject.title}
            </div>
            <div className="text-[13px] text-[var(--text2)] leading-[1.85] mb-7">
              {activeProject.body.split("\n\n").map((para, i) => (
                <p key={i} className={i > 0 ? "mt-3.5" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="text-[9px] tracking-[0.14em] uppercase text-[var(--text3)] mb-2.5">
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {activeProject.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.08em] uppercase bg-[var(--bg2)] text-[var(--text2)] px-2.5 py-1 rounded-[2px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-[9px] tracking-[0.14em] uppercase text-[var(--text3)] mb-2.5">
              Highlights
            </div>
            <ul className="list-none p-0">
              {activeProject.highlights.map((h) => (
                <li
                  key={h}
                  className="text-[12px] text-[var(--text2)] leading-[2] border-l-[1.5px] border-[var(--border)] pl-3 mb-1"
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
                    className="text-[10px] tracking-[0.1em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 hover:text-[var(--text)] transition-colors no-underline"
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
