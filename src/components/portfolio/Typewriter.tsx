import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface TypewriterProps {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
}

/**
 * Types the text out one character at a time. State lives in this leaf only, so the page never re-renders.
 * The full string is rendered invisibly underneath so the box never changes height while typing.
 */
export const Typewriter = ({ text, speedMs = 26, startDelayMs = 650 }: TypewriterProps) => {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    let timer: number | undefined;
    const start = window.setTimeout(() => {
      let position = 0;
      timer = window.setInterval(() => {
        position += 1;
        setCount(position);
        if (position >= text.length) window.clearInterval(timer);
      }, speedMs);
    }, startDelayMs);
    return () => {
      window.clearTimeout(start);
      if (timer) window.clearInterval(timer);
    };
  }, [text, speedMs, startDelayMs, reduce]);

  const shown = reduce ? text : text.slice(0, count);

  return (
    <span className="relative block">
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">
        {shown}
        <span className="ml-1 inline-block h-4 w-[7px] translate-y-0.5 bg-accent motion-safe:animate-pulse" />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
};
