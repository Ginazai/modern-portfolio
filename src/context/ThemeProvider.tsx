import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { palettes, type ThemeName } from '@/lib/palette';
import { ThemeContext } from './theme-context';

const STORAGE_KEY = 'rc-theme';

const readInitialTheme = (): ThemeName => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', palettes[theme].bg);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable, theme still applies for this session */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme(current => (current === 'dark' ? 'light' : 'dark')), []);
  const value = useMemo(() => ({ theme, palette: palettes[theme], toggle }), [theme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
