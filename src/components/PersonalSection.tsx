export default function PersonalSection() {
  return (
    <section id="personal" className="border-b border-[0.5px] border-[var(--border)]">
      <div className="max-w-[820px] mx-auto px-12 py-20">
        <div className="reveal text-[10px] tracking-[0.16em] uppercase text-[var(--text3)] mb-12">
          Personal
        </div>

        <div className="grid grid-cols-[1fr_1.5fr] gap-[60px] items-start">
          <div className="reveal-left">
            <div className="w-[88px] h-[88px] bg-[var(--bg2)] border border-[0.5px] border-[var(--border)] rounded-[3px] flex items-center justify-center mb-5">
              <span className="font-serif text-[32px] text-[var(--text2)]">K</span>
            </div>
            <div className="text-[12px] text-[var(--text2)] leading-[2.2]">
              London, UK
              <br />
              EE background
              <br />
              Python · TS · Swift · Go
              <br />
              Aiming for founding engineer
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
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
      </div>
    </section>
  );
}
