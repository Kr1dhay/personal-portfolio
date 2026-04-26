export default function Hero() {
  return (
    <div className="max-w-[820px] mx-auto px-5 sm:px-12 pt-16 sm:pt-25 pb-10 sm:pb-15">
      <div className="reveal text-[11px] sm:text-[12px] tracking-[0.12em] uppercase text-[var(--text2)] mb-6">
        London, UK
      </div>

      <div className="mt-2">
        <div className="hero-line pb-3">
          <span className="hero-line-inner font-serif text-[clamp(36px,5.5vw,62px)] leading-none tracking-[-2px] text-[var(--text)]">
            Kridhay Mahesh
          </span>
        </div>
      </div>

      <div className="reveal d-2 text-[13px] sm:text-[14px] text-[var(--text2)] tracking-[0.04em] mb-10" style={{ marginTop: 16 }}>
        Forward-Deployed Software Engineer
      </div>

      <div className="reveal d-3 flex gap-5">
        <a
          href="https://github.com/Kr1dhay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 pl-0.5 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors no-underline"
        >
          GitHub <span style={{ fontFamily: "system-ui, sans-serif", fontStyle: "normal" }}>{"↗︎"}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kridhay/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 pl-0.5 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors no-underline"
        >
          LinkedIn <span style={{ fontFamily: "system-ui, sans-serif", fontStyle: "normal" }}>{"↗︎"}</span>
        </a>
      </div>
    </div>
  );
}
