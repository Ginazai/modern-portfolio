export type ThemeName = 'dark' | 'light';

/** Mirrors the CSS custom properties in index.css. Used by canvas layers that cannot read Tailwind classes. */
export const palettes = {
  dark: { bg: '#0B0E0F', fg: '#ECF0EF', accent: '#3CDCCB' },
  light: { bg: '#F1F3F2', fg: '#0E1414', accent: '#00736C' }
} as const;

export type Palette = (typeof palettes)[ThemeName];
