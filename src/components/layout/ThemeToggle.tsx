import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  /** When the header floats over the hero, icons render in white. */
  transparent?: boolean;
  className?: string;
}

const getInitialDark = () =>
  typeof document !== 'undefined' &&
  document.documentElement.classList.contains('dark');

const ThemeToggle: React.FC<ThemeToggleProps> = ({ transparent, className }) => {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      /* ignore unavailable storage */
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((d) => !d)}
      aria-label={isDark ? 'מעבר למצב בהיר' : 'מעבר למצב כהה'}
      title={isDark ? 'מצב בהיר' : 'מצב כהה'}
      className={cn(
        'w-10 h-10 flex items-center justify-center rounded-lg transition-colors',
        transparent
          ? 'text-white hover:bg-white/15'
          : 'text-primary-fourth hover:text-primary-fifth hover:bg-primary-second/30',
        className
      )}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
