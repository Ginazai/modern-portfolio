import { profile } from '@/data/profile';
import { stats } from '@/data/experience';
import { SectionHeading } from './SectionHeading';
import type { ThemeTokens } from '@/types/portfolio';

export const AboutSection = ({ dark, muted, accent, surface }: ThemeTokens) => (
  <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10">
    <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
      <div className="flex items-start justify-center lg:justify-start" data-animate="slide-left">
        <div
          className={`font-heading flex h-44 w-44 items-center justify-center rounded-full border text-4xl font-bold tracking-[0.01em] ${dark ? 'border-white/15 bg-[#1A1A1A] text-white/25' : 'border-black/10 bg-white text-black/20'}`}
        >
          {profile.initials}
        </div>
      </div>
      <div data-animate="slide-right">
        <SectionHeading eyebrow="01 / profile" prefix=">" title="About Me" accentClassName={accent} />
        <div className={`mt-7 grid max-w-3xl gap-5 text-base leading-8 ${muted} md:grid-cols-2`}>
          {profile.aboutParagraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3">
          {stats.map(stat => (
            <div key={stat.id} className={`stats-card border-l-2 px-4 py-3 transition duration-300 ${dark ? 'border-[#00D4C8]' : 'border-[#009E96]'} ${surface}`}>
              <strong className={`block font-code text-2xl ${accent}`}>{stat.value}</strong>
              <span className={`text-[10px] font-medium uppercase tracking-[0.06em] ${muted}`}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
