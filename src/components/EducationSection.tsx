"use client";

import { useEffect, useState } from "react";

const educationEntries = [
  {
    date: "2021 — 2025",
    institution: "Imperial College London",
    degree: "MEng Electronic and Information Engineering",
    description: "I took part in the Muay Thai Society and served as Head of Corporate Relations for the Algorithmic Trading Society during my time at Imperial.  I graduated with First Class Honours",
    tags: ["C++", "Computer Architecture", "Machine Learning", "Signal Processing"],
    photos: false,
  },
  {
    date: "2024 — 2025",
    institution: "National University of Singapore",
    degree: "MEng Electrical and Computer Engineering (Year Abroad)",
    description:
      "Living in Singapore was a great experience and the semester breaks gave me the chance to travel across Southeast Asia.",
    tags: [],
    photos: true,
  },
];

const photos = [
  "/travel_photo_ha_giang.jpeg",
  "/travel_photo_hanoi.jpeg",
  "/travel_photo_asia.jpeg",
  "/travel_photo_indonesia.jpeg",
  "/travel_photo_japan.jpeg",
  "/travel_photo_nimh_binh.jpeg",
];

export default function EducationSection() {
  const [photosOpen, setPhotosOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = photosOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [photosOpen]);

  return (
    <>
      <section id="education">
        <div className="max-w-[820px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
          <div className="reveal font-serif text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
            Education
          </div>

          <div className="flex flex-col">
            {educationEntries.map((entry) => (
              <div
                key={entry.institution}
                className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-y-3 sm:gap-x-10 sm:gap-y-0 py-8 border-b-[0.5px] border-[var(--border)]`}
              >
                <div className="reveal-left pt-0.5">
                  <div className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-[var(--text2)] mb-1.5">
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
                  {entry.photos && (
                    <button
                      onClick={() => setPhotosOpen(true)}
                      className="text-[9px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border border-[0.5px] border-[var(--border)] px-3 py-1.5 rounded-[2px] font-mono cursor-pointer hover:text-[var(--text)] hover:border-[var(--text2)] transition-colors mb-3.5"
                    >
                      Photos from my travels
                    </button>
                  )}
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

      {photosOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(28, 25, 22, 0.6)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setPhotosOpen(false); }}
        >
          <div className="bg-[var(--bg)] border border-[0.5px] border-[var(--border)] rounded-[4px] w-full max-w-[640px] mx-4 max-h-[80vh] overflow-y-auto p-12 relative">
            <button
              className="absolute top-5 right-6 text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] bg-transparent border-0 cursor-pointer font-mono hover:text-[var(--text)] transition-colors"
              onClick={() => setPhotosOpen(false)}
            >
              Close ×
            </button>
            <div className="font-serif text-[28px] sm:text-[32px] tracking-[-0.5px] leading-[1.1] mb-6 text-[var(--text)]">
              Selection of Photos from my Year Abroad
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {photos.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-full rounded-[2px] object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
