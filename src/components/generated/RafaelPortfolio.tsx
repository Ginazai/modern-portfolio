import { useState, type CSSProperties } from 'react';
import { useThemeTokens } from '@/hooks/useThemeTokens';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useCursorParallax } from '@/hooks/useCursorParallax';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { useDataAnimateReveal } from '@/hooks/useScrollReveal';
import { useDynamicTitle } from '@/hooks/useDynamicTitle';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { Navbar } from '@/components/portfolio/Navbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { EducationSection } from '@/components/portfolio/EducationSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { Footer } from '@/components/portfolio/Footer';

export const RafaelPortfolio = () => {
  const theme = useThemeTokens(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('All');
  const typedText = useTypewriter(profile.tagline);
  const { cursor, heroShift } = useCursorParallax();
  const { handleTilt, resetTilt } = useTiltEffect();

  useDataAnimateReveal(category);
  useDynamicTitle();

  const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return (
    <main
      className={`relative min-h-screen overflow-hidden font-body transition-colors duration-500 ${theme.dark ? 'bg-[#0A0A0A]' : 'bg-[#F8F8F8]'} ${theme.text}`}
      style={{ '--cursor-x': `${cursor.x}px`, '--cursor-y': `${cursor.y}px`, '--accent-color': theme.accentColor } as CSSProperties}
    >
      <div className={theme.dark ? 'cursor-glow' : 'hidden'} aria-hidden="true" />

      <Navbar {...theme} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onToggleDark={theme.toggleDark} />
      <HeroSection {...theme} typedText={typedText} heroShift={heroShift} />
      <AboutSection {...theme} />
      <SkillsSection {...theme} />
      <ProjectsSection
        {...theme}
        category={category}
        onCategoryChange={setCategory}
        filteredProjects={filteredProjects}
        onTilt={handleTilt}
        onResetTilt={resetTilt}
      />
      <ExperienceSection {...theme} />
      <EducationSection {...theme} />
      <ContactSection {...theme} />
      <Footer {...theme} />
    </main>
  );
};
