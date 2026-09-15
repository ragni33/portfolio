import { useReveal } from '../../hooks/useReveal.js';

/**
 * Fades and lifts its content into view on scroll.
 * `as` sets the rendered element so list items and articles stay semantic.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={['reveal', isVisible && 'is-visible', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
