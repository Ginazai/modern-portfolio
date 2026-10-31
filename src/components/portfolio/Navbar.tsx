import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeId: string | null;
}

export const Navbar = ({ activeId }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the full-screen menu is open, and close it on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-3 top-3 flex justify-center sm:top-5" style={{ zIndex: 'var(--z-nav)' }}>
        <nav
          className="glass pointer-events-auto flex h-14 w-full items-center justify-between rounded-full border border-line pl-6 pr-2 lg:w-max lg:gap-10"
          aria-label="Main navigation"
        >
          <a href="#top" onClick={() => setOpen(false)} className="text-lg font-bold tracking-tight text-accent" aria-label={`${profile.name} ${profile.lastName.replace('.', '')}, back to top`}>
            <span>R</span>
            <span className="opacity-50">/</span>
            <span>C</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map(item => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`relative block rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-500 ${active ? 'text-fg' : 'text-muted hover:text-accent'}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-fg/[0.08] shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(value => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center rounded-full border border-line text-fg transition duration-500 ease-out-expo hover:border-line-strong active:scale-[0.94] lg:hidden"
            >
              <span className="relative block h-[11px] w-5" aria-hidden="true">
                <motion.span
                  className="absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-current"
                  animate={open ? { y: 4.75, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                />
                <motion.span
                  className="absolute left-0 top-[9.5px] block h-[1.5px] w-5 rounded-full bg-current"
                  animate={open ? { y: -4.75, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 flex flex-col justify-center bg-[color-mix(in_srgb,var(--bg)_84%,transparent)] px-8 backdrop-blur-3xl lg:hidden"
            style={{ zIndex: 'var(--z-overlay)' }}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={item.id} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ y: 64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0, transition: { duration: 0.22, ease: [0.32, 0.72, 0, 1] } }}
                    transition={{ duration: 0.7, delay: 0.08 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex items-baseline justify-between py-5 text-4xl font-semibold tracking-[-0.03em] ${activeId === item.id ? 'text-accent' : 'text-fg'}`}
                  >
                    {item.label}
                    <span className="font-mono text-xs font-normal tracking-normal text-faint">{String(index + 1).padStart(2, '0')}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
