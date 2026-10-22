import { profile } from '@/data/profile';
import { stats } from '@/data/experience';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const AboutSection = () => (
  <section id="about" className="scroll-mt-20 px-5 py-28 lg:px-10 lg:py-40">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
      <Reveal className="flex items-start justify-center lg:justify-start">
        <div className="rounded-full border border-line bg-fg/[0.04] p-1.5">
          <div className="grid size-44 place-items-center rounded-full bg-surface text-4xl font-bold tracking-tight text-fg/30 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--fg)_9%,transparent)]">
            {profile.initials}
          </div>
        </div>
      </Reveal>

      <div>
        <SectionHeading prefix=">" title="About Me" />

        <Reveal delay={0.05} className="mt-10">
          <p className="max-w-3xl text-[clamp(1.375rem,2.3vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.02em] text-fg">{profile.aboutParagraphs[0]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-[58ch] text-lg leading-8 text-muted">{profile.aboutParagraphs[1]}</p>
        </Reveal>

        <div className="mt-14 grid max-w-3xl grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={0.12 + index * 0.07}>
              <Bezel size="sm" hover className="hover:-translate-y-1" coreClassName="py-5 pl-5 pr-3 sm:pl-6">
                <span className="absolute bottom-5 left-0 top-5 w-0.5 rounded-full bg-accent" aria-hidden="true" />
                <strong className="block font-mono text-[clamp(1.5rem,3.4vw,2.25rem)] font-medium leading-none tabular-nums text-accent">{stat.value}</strong>
                <span className="mt-2 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted">{stat.label}</span>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
