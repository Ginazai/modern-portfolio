import { GraduationCap } from '@phosphor-icons/react';
import { useLang } from '@/context/lang-context';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const EducationSection = () => {
  const { c, t } = useLang();
  const { education } = c;
  const single = education.length === 1;

  return (
    <section id="education" className="scroll-mt-20 px-5 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading prefix="//" title={t.educationTitle} />

        <div className={`mt-14 grid gap-4 lg:mt-20 ${single ? '' : 'md:grid-cols-2'}`}>
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.1}>
              <Bezel hover spotlight className="h-full" coreClassName={`flex h-full flex-col p-7 sm:p-9 ${single ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line bg-fg/[0.04] text-accent">
                  <GraduationCap size={22} />
                </span>
                {/* One text column, so title, field and institution stay together whatever the card's direction. */}
                <div className={`flex flex-1 flex-col ${single ? 'mt-6 md:mt-0' : 'mt-7'}`}>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-fg sm:text-3xl">{item.degree}</h3>
                  <p className="mt-3 text-muted">{item.field}</p>
                  <p className={`text-xs font-medium text-accent ${single ? 'mt-4' : 'mt-auto pt-8'}`}>
                    {item.institution} · {item.years}
                  </p>
                </div>
              </Bezel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
