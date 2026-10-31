import { createContext, useContext } from 'react';
import { palettes, type Palette, type ThemeName } from '@/lib/palette';

export interface ThemeContextValue {
  theme: ThemeName;
  palette: Palette;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  palette: palettes.dark,
  toggle: () => undefined
});

export const useTheme = () => useContext(ThemeContext);
