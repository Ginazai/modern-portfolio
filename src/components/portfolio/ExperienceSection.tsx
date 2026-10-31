import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Check } from '@phosphor-icons/react';
import { useLang } from '@/context/lang-context';
import { Bezel } from './Bezel';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export const ExperienceSection = () => {
  const { c, t } = useLang();
  const { experiences } = c;
  const trackRef = useRef<HTMLDivElement>(null);
  // The spine fills as the visitor reads down the career path.
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="band scroll-mt-20 border-y border-line px-5 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading prefix=">" title={t.experienceTitle} />

        <div ref={trackRef} className="relative mt-14 pl-8 sm:pl-12 lg:mt-20">
          <span className="absolute bottom-0 left-0 top-2 w-px bg-line" aria-hidden="true" />
          <motion.span className="absolute bottom-0 left-0 top-2 w-px origin-top bg-accent" style={{ scaleY: fill }} aria-hidden="true" />

          <ol className="space-y-5">
            {experiences.map((experience, index) => (
              <li key={`${experience.company}-${experience.role}`} className="group relative">
                <span aria-hidden="true" className="absolute -left-8 top-10 -translate-x-1/2 sm:-left-12">
                  <span className="relative block size-4 rounded-full border-4 border-surface bg-accent transition duration-500 group-hover:scale-110 dark:shadow-[0_0_14px_var(--accent)]" />
                  <span className="absolute -inset-[7px] rounded-full border border-accent opacity-0 transition duration-500 ease-out-expo [transform:scale(0.5)] group-hover:opacity-70 group-hover:[transform:scale(1)]" />
                </span>

                <Reveal delay={index * 0.06}>
                  <Bezel hover coreClassName="grid gap-x-10 gap-y-6 p-6 sm:p-8 lg:grid-cols-12">
                    <p className="font-mono text-sm text-accent lg:col-span-3 lg:pt-1.5">{experience.date}</p>

                    <div className="lg:col-span-4">
                      <h3 className="text-2xl font-bold tracking-[-0.03em] text-fg sm:text-3xl">{experience.role}</h3>
                      <p className="mt-2 text-muted">{experience.company}</p>
                    </div>

                    <ul className="space-y-3.5 lg:col-span-5">
                      {experience.bullets.map(bullet => (
                        <li key={bullet.id} className="flex gap-3 text-sm leading-6 text-muted">
                          <Check size={16} weight="bold" className="mt-1 shrink-0 text-accent" />
                          <span>{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Bezel>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
