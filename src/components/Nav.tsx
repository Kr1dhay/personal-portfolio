export default function Nav() {
  return (
    <nav className="border-b border-[0.5px] border-[var(--border)]">
      <div className="max-w-[820px] mx-auto px-12 py-7 flex justify-between items-center">
        <a
          href="#hero"
          className="font-mono text-[13px] text-[var(--text)] no-underline"
        >
          kridhay.dev
        </a>
        <ul className="flex gap-9 list-none">
          {[
            ["Experience", "#experience"],
            ["Education", "#education"],
            ["Projects", "#projects"],
            ["Personal", "#personal"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[10px] tracking-[0.14em] uppercase text-[var(--text2)] hover:text-[var(--text)] transition-colors no-underline"
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
