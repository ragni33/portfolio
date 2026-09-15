import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in the upper part of the viewport.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');
  const key = sectionIds.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length || !('IntersectionObserver' in window)) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        });

        if (!visible.size) {
          // Above the first observed section (e.g. in the hero)
          if (window.scrollY < elements[0].offsetTop) setActiveId('');
          return;
        }

        const [topMost] = [...visible.entries()].sort((a, b) => a[1] - b[1]);
        setActiveId(topMost[0]);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
