import { Github, ExternalLink } from 'lucide-react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { categoryItems, projectCardGradient } from '@/data/projects';
import { SectionHeading } from './SectionHeading';
import type { Project, ThemeTokens } from '@/types/portfolio';

interface ProjectsSectionProps extends ThemeTokens {
  category: string;
  onCategoryChange: (label: string) => void;
  filteredProjects: Project[];
  onTilt: (event: ReactMouseEvent<HTMLElement>) => void;
  onResetTilt: (event: ReactMouseEvent<HTMLElement>) => void;
}

export const ProjectsSection = ({ muted, accent, accentBg, border, surface, category, onCategoryChange, filteredProjects, onTilt, onResetTilt }: ProjectsSectionProps) => (
  <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10">
    <SectionHeading eyebrow="03 / selected work" prefix="//" title="Projects" accentClassName={accent} />
    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div aria-hidden="true" />
      <div className="flex gap-1">
        {categoryItems.map(item => (
          <button
            key={item.id}
            onClick={() => onCategoryChange(item.label)}
            className={`rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.06em] transition duration-300 ${category === item.label ? accentBg : `${muted} hover:text-[var(--accent-color)]`}`}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project, projectIndex) => (
        <article
          key={project.title}
          onMouseMove={onTilt}
          onMouseLeave={onResetTilt}
          className={`project-tilt-card group overflow-hidden border transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-[#00D4C8]/60 hover:shadow-[0_24px_70px_rgba(0,212,200,.14)] ${border} ${surface}`}
          data-animate="card-up"
          style={{ transitionDelay: `${projectIndex * 150}ms` }}
        >
          <div className={`flex h-44 items-end p-5 ${projectCardGradient[project.imageUrl] ?? projectCardGradient.signal}`}>
            <span className="font-heading text-5xl font-bold tracking-[0.01em] text-white/10">{project.imageUrl.toUpperCase()}</span>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-medium uppercase tracking-[0.06em] ${accent}`}>{project.category}</span>
              <div className="flex gap-3">
                <a href={project.githubUrl} aria-label={`${project.title} GitHub`} className={`${muted} transition hover:text-[#00D4C8]`}>
                  <Github size={17} />
                </a>
                <a href={project.liveUrl} aria-label={`${project.title} live site`} className={`${muted} transition hover:text-[#00D4C8]`}>
                  <ExternalLink size={17} />
                </a>
              </div>
            </div>
            <h3 className="font-heading mt-4 text-2xl font-bold tracking-[0.01em]">
              <span>{project.title}</span>
            </h3>
            <p className={`mt-3 min-h-[72px] text-sm leading-6 ${muted}`}>{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech.id} className={`font-code text-[10px] ${muted}`}>
                  <span>#</span>
                  <span>{tech.label}</span>
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
