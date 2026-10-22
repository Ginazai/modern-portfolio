import type { ReactNode } from 'react';
import { useSpotlight } from '@/hooks/useSpotlight';
import { cn } from '@/lib/utils';

interface BezelProps {
  children: ReactNode;
  className?: string;
  coreClassName?: string;
  size?: 'md' | 'sm';
  hover?: boolean;
  spotlight?: boolean;
  as?: 'div' | 'li' | 'article';
}

/** Double-bezel container: an outer shell holding an inner core with concentric corner radii. */
export const Bezel = ({ children, className, coreClassName, size = 'md', hover = false, spotlight = false, as: Tag = 'div' }: BezelProps) => {
  const { onPointerMove } = useSpotlight();
  return (
    <Tag className={cn('bezel', size === 'sm' && 'bezel-sm', hover && 'bezel-hover', className)}>
      <div className={cn('bezel-core', spotlight && 'spotlight', coreClassName)} onPointerMove={spotlight ? onPointerMove : undefined}>
        {children}
      </div>
    </Tag>
  );
};
