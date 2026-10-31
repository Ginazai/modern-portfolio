import { useLang } from '@/context/lang-context';
import type { Lang } from '@/i18n/content';

const options: { id: Lang; label: string; name: string }[] = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'es', label: 'ES', name: 'Español' }
];

export const LangToggle = () => {
  const { lang, setLang, t } = useLang();

  return (
    <div role="group" aria-label={t.language} className="flex h-10 items-center rounded-full border border-line p-0.5">
      {options.map(option => {
        const active = lang === option.id;
        return (
          <button
            key={option.id}
            type="button"
            lang={option.id}
            aria-label={option.name}
            aria-pressed={active}
            onClick={() => setLang(option.id)}
            className={`h-full rounded-full px-2.5 font-mono text-[11px] font-medium tracking-[0.06em] transition-colors duration-500 ${active ? 'bg-accent text-accent-ink' : 'text-muted hover:text-accent'}`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
