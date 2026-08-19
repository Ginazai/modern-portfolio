import { Menu, Moon, Sun, X } from 'lucide-react';
import type { CSSProperties } from 'react';
import { navItems } from '@/data/navigation';
import type { ThemeTokens } from '@/types/portfolio';

interface NavbarProps extends ThemeTokens {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onToggleDark: () => void;
}

export const Navbar = ({ dark, muted, border, surface, accent, accentColor, menuOpen, onToggleMenu, onToggleDark }: NavbarProps) => {
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${dark ? 'border-white/10 bg-[#0A0A0A]/80' : 'border-black/10 bg-[#F8F8F8]/85'}`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className={`font-heading text-lg font-bold tracking-[0.01em] ${accent}`} aria-label="Rafael Caballero home">
          <span>R</span>
          <span className="opacity-60">/</span>
          <span>C</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link-motion group relative text-[11px] font-medium uppercase tracking-[0.04em] ${muted} transition-colors duration-300`}
              style={{ '--accent-color': accentColor } as CSSProperties}
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={onToggleDark}
            className={`rounded-full border p-2.5 ${border} ${muted} transition hover:text-[var(--accent-color)]`}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={onToggleDark} className={`rounded-full border p-2 ${border} ${muted}`} aria-label="Toggle color mode">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={onToggleMenu}
            className={`rounded-full border p-2 ${border} ${muted}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className={`border-t px-6 py-4 md:hidden ${border} ${surface}`}>
          {navItems.map(item => (
            <a key={item.id} onClick={onToggleMenu} href={`#${item.id}`} className={`block border-b py-3 text-xs font-medium uppercase tracking-[0.06em] ${border} ${muted}`}>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
