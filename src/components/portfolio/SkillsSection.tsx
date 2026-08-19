import { skills } from '@/data/skills';
import { SectionHeading } from './SectionHeading';
import type { ThemeTokens } from '@/types/portfolio';

export const SkillsSection = ({ dark, muted, accent, border, surface }: ThemeTokens) => (
  <section id="skills" className={`scroll-mt-24 border-y px-6 py-28 lg:px-10 ${dark ? 'border-white/10 bg-[#111111]' : 'border-black/10 bg-[#eeeeee]'}`}>
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="02 / toolkit" prefix="//" title="Skills & Technologies" accentClassName={accent} />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skills.map((skillGroup, groupIndex) => (
          <div key={skillGroup.id}>
            <h3 className={`mb-4 font-heading text-xs font-semibold uppercase tracking-[0.06em] ${muted}`}>{skillGroup.group}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, skillIndex) => (
                <span
                  key={skill.id}
                  className={`skill-chip rounded-full border px-4 py-2 font-code text-xs transition duration-300 hover:scale-110 hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[#071211] hover:shadow-[0_0_24px_rgba(0,212,200,.28)] ${border} ${surface}`}
                  data-animate="chip-up"
                  style={{ transitionDelay: `${(groupIndex * 4 + skillIndex) * 50}ms` }}
                >
                  <span className={`mr-2 ${accent}`}>◆</span>
                  <span>{skill.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
