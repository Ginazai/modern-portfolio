import { motion, useScroll, useSpring } from 'motion/react';

/** Thin reading-progress bar. Tells the visitor how far through the page they are. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, zIndex: 'var(--z-progress)' }}
      className="fixed inset-x-0 top-0 h-[2px] origin-left bg-accent"
    />
  );
};
