import { useEffect, useState } from 'react';
import type { ThemeTokens } from '@/types/portfolio';

/** Manages dark/light state, syncs it to <html>/<body>, and derives themed class tokens. */
export function useThemeTokens(initialDark = true) {
  const [dark, setDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.body.style.backgroundColor = dark ? '#0A0A0A' : '#F8F8F8';
  }, [dark]);

  const tokens: ThemeTokens = {
    dark,
    text: dark ? 'text-[#F0F0F0]' : 'text-[#111111]',
    muted: dark ? 'text-[#A0A0A0]' : 'text-[#555555]',
    surface: dark ? 'bg-[#151515]' : 'bg-white',
    border: dark ? 'border-white/10' : 'border-black/10',
    accent: dark ? 'text-[#00D4C8]' : 'text-[#009E96]',
    accentBg: dark ? 'bg-[#00D4C8] text-[#071211]' : 'bg-[#009E96] text-white',
    accentColor: dark ? '#00D4C8' : '#009E96'
  };

  return { ...tokens, setDark, toggleDark: () => setDark(prev => !prev) };
}
