export default function PersonalSection() {
  return (
    <section id="personal">
      <div className="max-w-[820px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
        <div className="reveal text-[15px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Personal
        </div>

        <div className="reveal">
          <p className="text-[13px] text-[var(--text2)] leading-[1.9]">
            I build backend systems and data pipelines. Before software, electrical engineering gave me a taste for making real systems work under real constraints — tight loops, edge cases, things that break in the field.
          </p>
          <p className="text-[13px] text-[var(--text2)] leading-[1.9] mt-4">
            Outside of work: I follow Formula 1 more closely than is probably healthy, enjoy a good espresso, and occasionally disappear into a Swift project I&apos;ll never ship.
          </p>
          <p className="text-[13px] text-[var(--text2)] leading-[1.9] mt-4">
            Working toward a founding engineer role — the kind where you own the full stack, make real product decisions, and feel the stakes.
          </p>
        </div>
      </div>
    </section>
  );
}
