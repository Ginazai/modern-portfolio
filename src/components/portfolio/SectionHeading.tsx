import { Fragment } from 'react';
import { motion, type Variants } from 'motion/react';

interface SectionHeadingProps {
  prefix: string;
  title: string;
  className?: string;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.026, delayChildren: 0.1 } }
};

const letter: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

/** Title that types in letter by letter behind its terminal-style prefix. Keyed by title so a language switch replays it: letters that mount after the parent already reached "show" would otherwise stay hidden. */
export const SectionHeading = ({ prefix, title, className = '' }: SectionHeadingProps) => {
  const words = title.split(' ');

  return (
    <motion.div key={title} className={className} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -12% 0px' }}>
      <h2 aria-label={title} className="text-[clamp(2.25rem,5.4vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.035em] text-fg">
        <motion.span variants={letter} aria-hidden="true" className="mr-3 inline-block align-[0.28em] font-mono text-[0.34em] font-medium tracking-normal text-accent">
          {prefix}
        </motion.span>
        <span aria-hidden="true">
          {words.map((word, wordIndex) => (
            <Fragment key={`${word}-${wordIndex}`}>
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((character, characterIndex) => (
                  <motion.span key={characterIndex} variants={letter} className="inline-block">
                    {character}
                  </motion.span>
                ))}
              </span>
              {wordIndex < words.length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </span>
      </h2>
    </motion.div>
  );
};
