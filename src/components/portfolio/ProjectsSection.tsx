import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { categoryItems, projects } from '@/data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

/**
 * The layout adapts to how many projects survive the filter, so there is never an
 * orphaned or empty cell: 3 = tall feature + two stacked, 2 = 7/5 split, 1 = full width.
 */
const layoutFor = (count: number, index: number): { variant: 'feature' | 'compact'; className: string; coverClassName?: string } => {
  if (count === 3) {
    return index === 0
      ? { variant: 'feature' as const, className: 'lg:col-span-7 lg:row-span-2' }
      : { variant: 'compact' as const, className: 'lg:col-span-5' };
  }
  if (count === 2) {
    return { variant: 'feature' as const, className: index === 0 ? 'lg:col-span-7' : 'lg:col-span-5' };
  }
  return { variant: 'feature' as const, className: 'lg:col-span-12', coverClassName: 'lg:min-h-[420px]' };
};

export const ProjectsSection = () => {
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () => (category === 'all' ? projects : projects.filter(project => project.category.toLowerCase() === category)),
    [category]
  );

  return (
    <section id="projects" className="scroll-mt-20 px-5 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading prefix="//" title="Projects" />

          <Reveal delay={0.08}>
            <div role="group" aria-label="Filter projects by category" className="inline-flex rounded-full border border-line bg-fg/[0.03] p-1">
              {categoryItems.map(item => {
                const active = category === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    aria-pressed={active}
                    className={`relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-500 ${active ? 'text-accent-ink' : 'text-muted hover:text-accent'}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-12 lg:grid-rows-[auto]">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => {
                const { variant, className, coverClassName } = layoutFor(filtered.length, index);
                return <ProjectCard key={project.title} project={project} variant={variant} className={className} coverClassName={coverClassName} seed={projects.indexOf(project) * 17 + 5} />;
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && <p className="mt-12 text-muted">No projects in this category yet.</p>}
      </div>
    </section>
  );
};
