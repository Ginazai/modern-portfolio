import { profile } from '@/data/profile';
import type { ThemeTokens } from '@/types/portfolio';

export const Footer = ({ border, muted }: ThemeTokens) => (
  <footer className={`border-t px-6 py-8 text-center text-[10px] font-medium tracking-[0.06em] ${border} ${muted}`}>
    <span>{profile.footerNote}</span>
  </footer>
);
