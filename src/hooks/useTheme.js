import { useEffect, useState } from 'react';

// Keep in sync with the inline script in index.html (prevents a theme flash on load).
const STORAGE_KEY = 'theme-preference';
export const THEMES = ['light', 'dark', 'system'];

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
}

/**
 * Returns [theme, setTheme] where theme is 'light', 'dark' or 'system'.
 * 'system' removes the override so the site follows the OS setting.
 */
export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);

    try {
      if (theme === 'system') localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage unavailable (e.g. private mode) — the choice lasts for this visit only.
    }
  }, [theme]);

  return [theme, setTheme];
}
