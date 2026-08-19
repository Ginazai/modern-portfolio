export interface SkillChip {
  id: string;
  label: string;
}

export interface SkillGroup {
  id: string;
  group: string;
  items: SkillChip[];
}

export interface ProjectTech {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  tech: ProjectTech[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface ExperienceBullet {
  id: string;
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  bullets: ExperienceBullet[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  years: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface CategoryItem {
  id: string;
  label: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  prefix: string;
  accentClassName: string;
  className?: string;
}

export interface ThemeTokens {
  dark: boolean;
  text: string;
  muted: string;
  surface: string;
  border: string;
  accent: string;
  accentBg: string;
  accentColor: string;
}
