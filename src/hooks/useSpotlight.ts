import { useCallback, type PointerEvent as ReactPointerEvent } from 'react';

/**
 * Writes the pointer position into --mx / --my on the hovered element.
 * Pair with the `.spotlight` class. Nothing here touches React state.
 */
export function useSpotlight() {
  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return { onPointerMove };
}
