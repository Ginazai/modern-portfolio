import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PillButtonProps {
  children: ReactNode;
  icon: ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  download?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

/** Pill CTA with the trailing icon nested in its own circle. The circle shifts diagonally on hover. */
export const PillButton = ({ children, icon, variant = 'primary', href, download, type = 'button', onClick }: PillButtonProps) => {
  const base =
    'group inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full pl-7 pr-2 text-sm font-semibold transition duration-500 ease-out-expo active:scale-[0.98]';
  const look =
    variant === 'primary'
      ? 'bg-accent text-accent-ink hover:brightness-110'
      : 'border border-line-strong bg-fg/[0.03] text-fg hover:border-accent hover:bg-fg/[0.06]';
  const orb = cn(
    'grid size-10 place-items-center rounded-full transition duration-500 ease-out-expo group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105',
    variant === 'primary' ? 'bg-accent-ink/15' : 'bg-fg/10'
  );

  const content = (
    <>
      {children}
      <span className={orb}>{icon}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} download={download} className={cn(base, look)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(base, look)}>
      {content}
    </button>
  );
};
