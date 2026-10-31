import { Database } from '@phosphor-icons/react';
import { skillIcons } from '@/lib/skillIcons';

/** Brand mark for a skill. Falls back to a generic glyph when no brand mark exists (e.g. SQL). */
export const SkillGlyph = ({ id, size = 22 }: { id: string; size?: number }) => {
  const icon = skillIcons[id];
  if (!icon) return <Database size={size} />;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" role="img">
      <path d={icon.path} />
    </svg>
  );
};
