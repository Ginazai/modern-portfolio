import { useEffect } from 'react';
import { useMotionValue } from 'motion/react';

/**
 * Raw clientX / clientY as motion values. Consumers derive transforms from them,
 * so pointer movement never triggers a React render.
 */
export function usePointer() {
  const x = useMotionValue(typeof window === 'undefined' ? 0 : window.innerWidth / 2);
  const y = useMotionValue(typeof window === 'undefined' ? 0 : window.innerHeight / 2);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  return { x, y };
}
