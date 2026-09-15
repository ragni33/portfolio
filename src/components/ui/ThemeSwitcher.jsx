import { useTheme } from '../../hooks/useTheme.js';
import { MonitorIcon, MoonIcon, SunIcon } from './Icons.jsx';
import './ThemeSwitcher.css';

const options = [
  { id: 'light', label: 'Light theme', Icon: SunIcon },
  { id: 'dark', label: 'Dark theme', Icon: MoonIcon },
  { id: 'system', label: 'System default theme', Icon: MonitorIcon },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="theme-switch" role="group" aria-label="Colour theme">
      {options.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          className="theme-switch__btn"
          aria-pressed={theme === id}
          title={label}
          onClick={() => setTheme(id)}
        >
          <Icon />
          <span className="visually-hidden">{label}</span>
        </button>
      ))}
    </div>
  );
}
