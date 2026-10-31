import { createContext, useContext } from 'react';
import { content, type Content, type Lang } from '@/i18n/content';

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** All portfolio content in the active language. */
  c: Content;
  /** Shorthand for `c.ui`. */
  t: Content['ui'];
}

export const LangContext = createContext<LangContextValue>({ lang: 'en', setLang: () => undefined, c: content.en, t: content.en.ui });

export const useLang = () => useContext(LangContext);
