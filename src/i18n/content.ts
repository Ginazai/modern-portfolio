import { profile } from '@/data/profile';
import { navItems } from '@/data/navigation';
import { categoryItems, projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { education, experiences } from '@/data/experience';
import { es } from './es-data';
import { uis } from './ui';

export type Lang = 'en' | 'es';

const pad = (n: number) => String(n).padStart(2, '0');
const toolCount = new Set(skills.filter(g => g.id !== 'business-delivery' && g.id !== 'spoken-languages').flatMap(g => g.items.map(i => i.id))).size;

/** Builds the full portfolio content for one language by laying the Spanish overrides over the English data. */
const build = (lang: Lang) => {
  const ui = uis[lang];
  const o = lang === 'es' ? es : null;

  const localExperiences = experiences.map((e, i) => ({
    ...e,
    role: o?.experiences[i]?.role ?? e.role,
    date: o?.experiences[i]?.date ?? e.date,
    bullets: e.bullets.map(b => ({ ...b, text: o?.experiences[i]?.bullets[b.id] ?? b.text }))
  }));

  return {
    ui,
    profile: { ...profile, ...o?.profile },
    navItems: navItems.map(item => ({ ...item, label: ui.nav[item.id] ?? item.label })),
    categoryItems: categoryItems.map(item => ({ ...item, label: o?.categoryItems[item.id] ?? item.label })),
    projects: projects.map(p => ({ ...p, ...o?.projects[p.imageUrl] })),
    skills: skills.map(g => ({
      ...g,
      group: o?.skillGroups[g.id] ?? g.group,
      items: g.items.map(item => ({ ...item, label: o?.skillLabels[item.id] ?? item.label }))
    })),
    experiences: localExperiences,
    education: education.map((item, i) => ({ ...item, ...o?.education[i] })),
    stats: [
      { id: 'projects', value: pad(projects.length), label: ui.stats.projects },
      { id: 'roles', value: pad(experiences.length), label: ui.stats.roles },
      { id: 'technologies', value: `${Math.floor(toolCount / 10) * 10}+`, label: ui.stats.technologies }
    ]
  };
};

export type Content = ReturnType<typeof build>;
export const content: Record<Lang, Content> = { en: build('en'), es: build('es') };
