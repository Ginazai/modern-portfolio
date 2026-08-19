import { useEffect, useState } from 'react';
import { navItems } from '@/data/navigation';
import { profile } from '@/data/profile';

/** Observes each nav section and sets document.title to "<Section> | <Name>", falling back to the base title at the top of the page. */
export function useDynamicTitle() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: 0.5, rootMargin: '-72px 0px -40% 0px' }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLabel = navItems.find(item => item.id === activeId)?.label;
    document.title = activeLabel ? `${activeLabel} | ${profile.name} ${profile.lastName.replace('.', '')}` : `${profile.name} ${profile.lastName.replace('.', '')} | Portfolio`;
  }, [activeId]);
}
