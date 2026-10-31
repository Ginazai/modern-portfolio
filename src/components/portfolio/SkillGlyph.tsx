import { skillIcons } from '@/lib/skillIcons';

/** Brand mark for a skill, or nothing when none exists, so abstract skills don't get a misleading icon. */
export const SkillGlyph = ({ id, size = 22 }: { id: string; size?: number }) => {
  const icon = skillIcons[id];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" role="img">
      <path d={icon.path} />
    </svg>
  );
};
