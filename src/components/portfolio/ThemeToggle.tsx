import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from '@/context/theme-context';

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid size-10 place-items-center rounded-full border border-line text-muted transition duration-500 ease-out-expo hover:border-line-strong hover:text-accent active:scale-[0.94]"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
};
