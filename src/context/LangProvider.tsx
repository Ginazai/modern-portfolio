import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { content, type Lang } from '@/i18n/content';
import { LangContext } from './lang-context';

const STORAGE_KEY = 'rc-lang';

// A saved choice wins; otherwise follow the browser language.
const readInitialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    /* storage unavailable, fall through to the browser language */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable, language still applies for this session */
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, c: content[lang], t: content[lang].ui }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
