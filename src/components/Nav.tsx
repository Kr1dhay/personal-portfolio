"use client";

import { useState } from "react";

export default function Nav() {
  const [flipped, setFlipped] = useState(false);

  return (
    <nav className="hidden sm:block border-b border-[0.5px] border-[var(--border)]">
      <div className="max-w-[820px] mx-auto px-12 py-7 flex justify-between items-center">
        <span
          onClick={() => setFlipped((f) => !f)}
          className="font-serif text-[13px] sm:text-[14px] text-[var(--text)] cursor-pointer select-none"
          style={{
            display: "inline-block",
            transform: flipped ? "rotate(180deg)" : "none",
            transition: "none",
          }}
        >
          kridhay.xyz
        </span>
        <ul className="flex gap-9 list-none">
          {[
            ["Work", "#experience"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Personal", "#personal"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="font-serif text-[12px] sm:text-[13px] tracking-[0.14em] uppercase text-[var(--text)] no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
