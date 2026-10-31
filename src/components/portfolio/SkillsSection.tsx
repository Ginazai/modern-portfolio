import { motion } from 'motion/react';
import { useLang } from '@/context/lang-context';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { SkillGlyph } from './SkillGlyph';
import { skillIcons } from '@/lib/skillIcons';
import type { SkillGroup } from '@/types/portfolio';

/**
 * Layout is derived from the data, not from group ids: big groups alternate 5/7 columns so rows stay
 * balanced, and a short group (e.g. spoken languages) becomes one full-width strip.
 */
const SHORT_GROUP = 4;
const bigSpans = ['lg:col-span-5', 'lg:col-span-7', 'lg:col-span-7', 'lg:col-span-5'];
const cores = [
  'bg-[color-mix(in_srgb,var(--accent)_10%,var(--core))]',
  '',
  'pattern-hatch',
  'bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,var(--core)),var(--core)_72%)]'
];

const SkillTile = ({ group, index, bigIndex }: { group: SkillGroup; index: number; bigIndex: number }) => {
  const short = group.items.length <= SHORT_GROUP;
  const span = short ? 'lg:col-span-12' : bigSpans[bigIndex % bigSpans.length];
  const core = short ? '' : cores[bigIndex % cores.length];

  return (
    <motion.li
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={span}
    >
      <Bezel hover spotlight className="h-full" coreClassName={`h-full p-6 sm:p-8 ${core}`}>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{group.group}</h3>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {group.items.map(skill => (
            <li
              key={skill.id}
              className="group/skill flex items-center gap-2.5 rounded-full border border-line bg-bg/60 px-4 py-2 font-mono text-sm text-fg transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink"
            >
              {skillIcons[skill.id] && (
                <span className="-ml-1 text-accent transition-colors duration-500 group-hover/skill:text-accent-ink">
                  <SkillGlyph id={skill.id} size={18} />
                </span>
              )}
              {skill.label}
            </li>
          ))}
        </ul>
      </Bezel>
    </motion.li>
  );
};

export const SkillsSection = () => {
  const { c, t } = useLang();
  const { skills } = c;
  return (
    <section id="skills" className="band scroll-mt-20 border-y border-line px-5 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading prefix="//" title={t.skillsTitle} />
        <ul className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
          {skills.map((group, index) => (
            <SkillTile key={group.id} group={group} index={index} bigIndex={skills.slice(0, index).filter(g => g.items.length > SHORT_GROUP).length} />
          ))}
        </ul>
      </div>
    </section>
  );
};
