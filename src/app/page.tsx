import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroAnimator from "@/components/HeroAnimator";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="hero">
          <Hero />
          <HeroAnimator />
        </section>
        <WorkSection />
        <ProjectsSection />
        <EducationSection />
        <PersonalSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
