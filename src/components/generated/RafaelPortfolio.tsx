import { useActiveSection } from '@/hooks/useActiveSection';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import { Navbar } from '@/components/portfolio/Navbar';
import { ScrollProgress } from '@/components/portfolio/ScrollProgress';
import { CursorGlow } from '@/components/portfolio/CursorGlow';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export const RafaelPortfolio = () => {
  const activeId = useActiveSection();
  useDynamicTitle(activeId);

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 -translate-y-24 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform focus:translate-y-0"
        style={{ zIndex: 'var(--z-progress)' }}
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <CursorGlow />
      <ScrollProgress />
      <Navbar activeId={activeId} />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
