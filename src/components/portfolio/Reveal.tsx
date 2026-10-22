import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/** Heavy fade-up with a blur that resolves as the content enters the viewport. */
export const Reveal = ({ children, className, delay = 0, y = 28 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '0px 0px -8% 0px' }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);
