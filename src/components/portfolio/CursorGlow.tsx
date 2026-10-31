import { motion, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { usePointer } from '@/hooks/usePointer';

/** Soft accent light that trails the cursor. Dark theme and fine pointers only (see .cursor-glow). */
export const CursorGlow = () => {
  const reduce = useReducedMotion();
  const { x, y } = usePointer();
  const gx = useSpring(useTransform(x, v => v - 200), { stiffness: 110, damping: 22, mass: 0.7 });
  const gy = useSpring(useTransform(y, v => v - 200), { stiffness: 110, damping: 22, mass: 0.7 });

  if (reduce) return null;
  return <motion.div aria-hidden="true" className="cursor-glow" style={{ x: gx, y: gy }} />;
};
