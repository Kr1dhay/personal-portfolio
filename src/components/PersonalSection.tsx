export default function PersonalSection() {
  return (
    <section id="personal">
      <div className="max-w-[820px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
        <div className="reveal text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-[var(--text)] mb-8 w-fit border-b-[0.5px] border-[var(--border)] pb-1">
          Personal
        </div>

        <div className="reveal">
          <p className="text-[13px] sm:text-[14px] text-[var(--text2)] leading-[1.9] mt-4">
            Outside of work I train Muay Thai and weightlifting.  I also recently have gotten into golf, and I (sometimes) play the guitar.
          </p>
        </div>
      </div>
    </section>
  );
}
