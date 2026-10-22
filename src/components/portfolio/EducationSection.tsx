import { GraduationCap } from '@phosphor-icons/react';
import { education } from '@/data/experience';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const EducationSection = () => (
  <section id="education" className="scroll-mt-20 px-5 py-28 lg:px-10 lg:py-40">
    <div className="mx-auto max-w-7xl">
      <SectionHeading prefix="//" title="Education" />

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20">
        {education.map((item, index) => (
          <Reveal key={item.institution} delay={index * 0.1}>
            <Bezel hover spotlight className="h-full" coreClassName="flex h-full flex-col p-7 sm:p-9">
              <span className="grid size-12 place-items-center rounded-full border border-line bg-fg/[0.04] text-accent">
                <GraduationCap size={22} />
              </span>
              <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em] text-fg sm:text-3xl">{item.degree}</h3>
              <p className="mt-3 text-muted">{item.field}</p>
              <p className="mt-auto pt-8 text-xs font-medium text-accent">
                {item.institution} · {item.years}
              </p>
            </Bezel>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
