import { useScrollReveal } from '@/hooks/useScrollReveal';
import { titleCharacters } from '@/lib/text';
import type { SectionHeadingProps } from '@/types/portfolio';

export const SectionHeading = ({ eyebrow, title, prefix, accentClassName, className = '' }: SectionHeadingProps) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(0.35);
  const prefixLetters = titleCharacters(prefix);
  const titleLetters = titleCharacters(title);

  return (
    <div ref={ref} className={className}>
      <p className={`font-code text-xs uppercase tracking-[0.22em] ${accentClassName}`}>
        <span>{eyebrow}</span>
      </p>
      <h2 className="font-heading mt-3 text-4xl font-bold tracking-[0.01em] sm:text-5xl">
        <span
          className={`mr-3 inline-flex align-baseline font-code text-xs font-medium tracking-[0.04em] opacity-80 ${accentClassName}`}
          aria-hidden="true"
        >
          {prefixLetters.map((character, characterIndex) => (
            <span
              key={character.id}
              className={visible ? 'heading-type-letter is-visible' : 'heading-type-letter'}
              style={{ transitionDelay: `${characterIndex * 24}ms` }}
            >
              {character.letter === ' ' ? '\u00A0' : character.letter}
            </span>
          ))}
        </span>
        <span className="sr-only">
          <span>{prefix} </span>
        </span>
        <span aria-label={title}>
          {titleLetters.map((character, characterIndex) => (
            <span
              key={character.id}
              className={visible ? 'heading-type-letter is-visible' : 'heading-type-letter'}
              style={{ transitionDelay: `${Math.min(prefix.length * 24 + 90 + characterIndex * 14, 520)}ms` }}
            >
              {character.letter === ' ' ? '\u00A0' : character.letter}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
};
