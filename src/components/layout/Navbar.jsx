import { useCallback, useEffect, useState } from 'react';
import { navLinks, profile } from '../../data/index.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { useScrolled } from '../../hooks/useScrolled.js';
import CvDownloadLink from '../ui/CvDownloadLink.jsx';
import { CloseIcon, DownloadIcon, MenuIcon } from '../ui/Icons.jsx';
import ThemeSwitcher from '../ui/ThemeSwitcher.jsx';
import './Navbar.css';

const sectionIds = navLinks.map((link) => link.id);
const DESKTOP_QUERY = '(min-width: 1180px)';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        document.getElementById('nav-toggle')?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event) => event.matches && setIsOpen(false);

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isOpen]);

  const headerClass = ['nav', (scrolled || isOpen) && 'nav--solid', isOpen && 'nav--open']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            RC
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <nav id="primary-navigation" className="nav__menu" aria-label="Primary">
          <ul className="nav__links">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  className="nav__link"
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="nav__link-index mono" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <CvDownloadLink className="btn btn--ghost nav__cta" wrapperClassName="nav__cta-wrap">
            <DownloadIcon />
            CV
            <span className="visually-hidden"> (PDF download)</span>
          </CvDownloadLink>
        </nav>

        <div className="nav__controls">
          <ThemeSwitcher />

          <button
            id="nav-toggle"
            type="button"
            className="nav__toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="visually-hidden">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
