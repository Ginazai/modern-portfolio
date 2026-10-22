import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

/** Pointer-driven 3D tilt on spring motion values. Mouse only, off for reduced motion. */
export const TiltCard = ({ children, className = '', max = 6 }: TiltCardProps) => {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 170, damping: 20, mass: 0.6 });
  const rotateY = useSpring(ry, { stiffness: 170, damping: 20, mass: 0.6 });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    ry.set(((event.clientX - rect.left) / rect.width - 0.5) * max * 2);
    rx.set((0.5 - (event.clientY - rect.top) / rect.height) * max * 2);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className={className} style={{ perspective: 1100 }} onPointerMove={onMove} onPointerLeave={reset}>
      <motion.div className="h-full" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {children}
      </motion.div>
    </div>
  );
};
