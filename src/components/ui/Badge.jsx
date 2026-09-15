import './Badge.css';

export default function Badge({ tone = 'neutral', pulse = false, children }) {
  return (
    <span className={`badge badge--${tone}${pulse ? ' badge--pulse' : ''}`}>
      <span className="badge__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
