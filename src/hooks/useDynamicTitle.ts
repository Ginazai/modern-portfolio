import { useEffect } from 'react';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';

/** Sets document.title to "<Section> | <Name>", falling back to the base title at the top of the page. */
export function useDynamicTitle(activeId: string | null) {
  useEffect(() => {
    const fullName = `${profile.name} ${profile.lastName.replace('.', '')}`;
    const activeLabel = navItems.find(item => item.id === activeId)?.label;
    document.title = activeLabel ? `${activeLabel} | ${fullName}` : `${fullName} | Portfolio`;
  }, [activeId]);
}
