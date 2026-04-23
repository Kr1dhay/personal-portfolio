export default function Hero() {
  return (
    <div className="max-w-[820px] mx-auto px-12 border-b border-[0.5px] border-[var(--border)]" style={{ paddingTop: 100, paddingBottom: 96 }}>
      <div className="reveal text-[11px] tracking-[0.12em] uppercase text-[var(--text3)] mb-6">
        London, UK · Open to opportunities
      </div>

      <div className="mt-2">
        <div className="hero-line">
          <span className="hero-line-inner font-serif text-[clamp(52px,8vw,88px)] leading-none tracking-[-2px] text-[var(--text)]">
            Kridhay
          </span>
        </div>
      </div>

      <div className="reveal d-2 text-[13px] text-[var(--text2)] tracking-[0.04em] mb-10" style={{ marginTop: 18 }}>
        Software Engineer — Backend &amp; Fullstack
      </div>

      <div className="reveal d-3 flex gap-5">
        <a
          href="https://github.com/kridhay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.12em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors no-underline"
        >
          GitHub ↗
        </a>
        <a
          href="https://linkedin.com/in/kridhay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.12em] uppercase text-[var(--text2)] border-b border-[0.5px] border-[var(--border)] pb-0.5 hover:text-[var(--text)] hover:border-[var(--text)] transition-colors no-underline"
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
