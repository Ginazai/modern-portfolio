import { useEffect } from 'react';
import { useLang } from '@/context/lang-context';

/** Sets document.title to "<Section> | <Name>", falling back to the base title at the top of the page. */
export function useDynamicTitle(activeId: string | null) {
  const { c, t } = useLang();
  useEffect(() => {
    const fullName = `${c.profile.name} ${c.profile.lastName.replace('.', '')}`;
    const activeLabel = c.navItems.find(item => item.id === activeId)?.label;
    document.title = activeLabel ? `${activeLabel} | ${fullName}` : `${fullName} | ${t.titleSuffix}`;
  }, [activeId, c, t]);
}
