import type { MouseEvent as ReactMouseEvent } from 'react';

/** Applies a pointer-driven 3D tilt to a card element, and a reset handler for mouse-leave. */
export function useTiltEffect(maxRotateY = 14, maxRotateX = 12) {
  const handleTilt = (event: ReactMouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const rotateY = (pointerX / rect.width - 0.5) * maxRotateY;
    const rotateX = (0.5 - pointerY / rect.height) * maxRotateX;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
  };

  const resetTilt = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
  };

  return { handleTilt, resetTilt };
}
