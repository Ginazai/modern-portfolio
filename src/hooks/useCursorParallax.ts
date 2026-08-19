import { useEffect, useRef, useState } from 'react';

/** Tracks pointer position and a damped parallax shift for the hero background, throttled via rAF. */
export function useCursorParallax(shiftFactor = 14) {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [heroShift, setHeroShift] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = window.requestAnimationFrame(() => {
        const { clientX: x, clientY: y } = event;
        setCursor({ x, y });
        setHeroShift({
          x: (x / window.innerWidth - 0.5) * shiftFactor,
          y: (y / window.innerHeight - 0.5) * shiftFactor
        });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [shiftFactor]);

  return { cursor, heroShift };
}
