import { GraduationCap } from 'lucide-react';
import { education } from '@/data/experience';
import { SectionHeading } from './SectionHeading';
import type { ThemeTokens } from '@/types/portfolio';

export const EducationSection = ({ dark, muted, accent, surface }: ThemeTokens) => (
  <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-10">
    <SectionHeading eyebrow="05 / foundation" prefix="//" title="Education" accentClassName={accent} />
    <div className="mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
      {education.map((item, educationIndex) => (
        <article
          key={item.institution}
          className={`border-l-2 p-6 ${dark ? 'border-[#00D4C8]' : 'border-[#009E96]'} ${surface}`}
          data-animate="card-up"
          style={{ transitionDelay: `${educationIndex * 120}ms` }}
        >
          <GraduationCap className={accent} size={21} />
          <h3 className="font-heading mt-5 text-xl font-bold tracking-[0.01em]">
            <span>{item.degree}</span>
          </h3>
          <p className={`mt-2 ${muted}`}>{item.field}</p>
          <p className={`mt-6 text-xs font-medium ${accent}`}>
            <span>{item.institution}</span>
            <span> · </span>
            <span>{item.years}</span>
          </p>
        </article>
      ))}
    </div>
  </section>
);
