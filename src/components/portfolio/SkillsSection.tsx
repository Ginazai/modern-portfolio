import { motion } from 'motion/react';
import { skills } from '@/data/skills';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { SkillGlyph } from './SkillGlyph';
import type { SkillGroup } from '@/types/portfolio';

/**
 * Four groups, four tiles, no empty cells. Cores get real surface variation
 * (accent tint, hatch pattern, gradient, plain) and the skills stay as chips.
 */
const tiles: Record<string, { span: string; core: string }> = {
  languages: { span: 'lg:col-span-7', core: 'bg-[color-mix(in_srgb,var(--accent)_10%,var(--core))]' },
  frameworks: { span: 'lg:col-span-5', core: '' },
  tools: { span: 'lg:col-span-5', core: 'pattern-hatch' },
  databases: { span: 'lg:col-span-7', core: 'bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_14%,var(--core)),var(--core)_72%)]' }
};

const SkillTile = ({ group, index }: { group: SkillGroup; index: number }) => {
  const tile = tiles[group.id] ?? tiles.frameworks;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={tile.span}
    >
      <Bezel hover spotlight className="h-full" coreClassName={`h-full p-6 sm:p-8 ${tile.core}`}>
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{group.group}</h3>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {group.items.map(skill => (
            <li
              key={skill.id}
              className="group/skill flex items-center gap-2.5 rounded-full border border-line bg-bg/60 py-2 pl-3.5 pr-4 font-mono text-sm text-fg transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink"
            >
              <span className="text-accent transition-colors duration-500 group-hover/skill:text-accent-ink">
                <SkillGlyph id={skill.id} size={18} />
              </span>
              {skill.label}
            </li>
          ))}
        </ul>
      </Bezel>
    </motion.li>
  );
};

export const SkillsSection = () => (
  <section id="skills" className="band scroll-mt-20 border-y border-line px-5 py-28 lg:px-10 lg:py-40">
    <div className="mx-auto max-w-7xl">
      <SectionHeading prefix="//" title="Skills & Technologies" />
      <ul className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-12">
        {skills.map((group, index) => (
          <SkillTile key={group.id} group={group} index={index} />
        ))}
      </ul>
    </div>
  </section>
);
