import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react';
import { motion } from 'motion/react';
import { coverVariants } from '@/data/projects';
import { Bezel } from './Bezel';
import { GenerativeCover } from './GenerativeCover';
import { TiltCard } from './TiltCard';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  variant: 'feature' | 'compact';
  className?: string;
  coverClassName?: string;
  seed: number;
}

export const ProjectCard = ({ project, variant, className = '', coverClassName = '', seed }: ProjectCardProps) => {
  const feature = variant === 'feature';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className={`group flex ${className}`}
    >
      <TiltCard className="flex-1">
        <Bezel hover spotlight className="h-full" coreClassName="flex h-full flex-col">
          <div className={`relative border-b border-line ${feature ? `min-h-[260px] flex-1 lg:min-h-[320px] ${coverClassName}` : 'h-36'}`}>
            <GenerativeCover variant={coverVariants[project.imageUrl] ?? 'flow'} seed={seed} />
            <span className="pointer-events-none absolute bottom-3 left-5 select-none text-5xl font-bold tracking-[-0.03em] text-fg/[0.07]">
              {project.imageUrl.toUpperCase()}
            </span>
          </div>

          <div className={feature ? 'p-6 sm:p-8' : 'p-6'}>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-accent">{project.category}</span>
              <div className="flex items-center gap-1">
                <a href={project.githubUrl} aria-label={`${project.title} on GitHub`} className="grid size-9 place-items-center rounded-full text-muted transition duration-500 hover:bg-fg/[0.06] hover:text-accent">
                  <GithubLogo size={18} />
                </a>
                <a href={project.liveUrl} aria-label={`${project.title} live site`} className="grid size-9 place-items-center rounded-full text-muted transition duration-500 hover:bg-fg/[0.06] hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <h3 className={`mt-3 font-bold tracking-[-0.03em] text-fg ${feature ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{project.title}</h3>
            <p className={`mt-3 max-w-[52ch] leading-relaxed text-muted ${feature ? 'text-base sm:text-lg' : 'text-[0.9375rem]'}`}>{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <li key={tech.id} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  <span className="text-accent">#</span>
                  {tech.label}
                </li>
              ))}
            </ul>
          </div>
        </Bezel>
      </TiltCard>
    </motion.article>
  );
};
