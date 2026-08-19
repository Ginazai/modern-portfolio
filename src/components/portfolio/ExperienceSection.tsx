import { Check } from 'lucide-react';
import { experiences } from '@/data/experience';
import { SectionHeading } from './SectionHeading';
import type { ThemeTokens } from '@/types/portfolio';

export const ExperienceSection = ({ dark, muted, accent }: ThemeTokens) => (
  <section id="experience" className={`scroll-mt-24 border-y px-6 py-28 lg:px-10 ${dark ? 'border-white/10 bg-[#111111]' : 'border-black/10 bg-[#eeeeee]'}`}>
    <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="04 / the path" prefix=">" title="Experience" accentClassName={accent} />
      <div className={`mt-12 max-w-4xl border-l pl-7 ${dark ? 'border-white/15' : 'border-black/15'}`}>
        {experiences.map((experience, experienceIndex) => (
          <article key={experience.company} className="relative mb-12 last:mb-0" data-animate="slide-left" style={{ transitionDelay: `${experienceIndex * 120}ms` }}>
            <span
              className={`timeline-dot absolute -left-[38px] top-1 h-4 w-4 rounded-full border-4 ${dark ? 'border-[#111111] bg-[#00D4C8] shadow-[0_0_14px_#00D4C8]' : 'border-[#eeeeee] bg-[#009E96]'}`}
            />
            <p className={`text-xs font-medium ${accent}`}>{experience.date}</p>
            <h3 className="font-heading mt-2 text-2xl font-bold tracking-[0.01em]">
              <span>{experience.role}</span>
            </h3>
            <p className={`mt-1 text-sm ${muted}`}>{experience.company}</p>
            <ul className={`mt-5 space-y-2 text-sm leading-6 ${muted}`}>
              {experience.bullets.map(bullet => (
                <li key={bullet.id} className="flex gap-3">
                  <Check size={16} className={`mt-1 shrink-0 ${accent}`} />
                  <span>{bullet.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
