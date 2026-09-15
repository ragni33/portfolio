import { useEffect, useRef, useState } from 'react';
import { getProfile } from '../../services/portfolioService.js';
import { ClockIcon } from './Icons.jsx';
import './CvDownloadLink.css';

// Only downloads the CV after confirming it is a real PDF. Without this check a
// missing file is answered with the site's index.html, which the browser saves
// as a broken "Ragni-Chawla-CV.pdf".
async function fetchVerifiedPdf(href) {
  const response = await fetch(href, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`CV request failed with status ${response.status}`);
  const blob = await response.blob();
  const signature = await blob.slice(0, 5).text();
  if (signature !== '%PDF-') throw new Error('CV file is not a PDF');
  return blob;
}

export default function CvDownloadLink({
  className = '',
  wrapperClassName = '',
  unavailableLabel = 'CV coming soon',
  children,
}) {
  const { cv, email } = getProfile();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'error'
  const resetTimer = useRef();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleClick = async (event) => {
    // Let modified clicks (new tab, save link as…) behave natively.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    clearTimeout(resetTimer.current);

    try {
      const blob = await fetchVerifiedPdf(cv.href);
      const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = cv.fileName;
      link.hidden = true;
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      setStatus('idle');
    } catch {
      setStatus('error');
      resetTimer.current = setTimeout(() => setStatus('idle'), 8000);
    }
  };

  // No CV published yet: keep the button in place, but inactive.
  if (!cv.available) {
    return (
      <span className={['cv-link', wrapperClassName].filter(Boolean).join(' ')}>
        <button type="button" className={className} disabled title="The CV will be available soon">
          <ClockIcon />
          {unavailableLabel}
        </button>
      </span>
    );
  }

  return (
    <span className={['cv-link', wrapperClassName].filter(Boolean).join(' ')}>
      <a
        className={className}
        href={cv.href}
        download={cv.fileName}
        onClick={handleClick}
        aria-busy={status === 'loading' || undefined}
      >
        {children}
      </a>
      <span className="cv-link__message" role="status" aria-live="polite">
        {status === 'error' && (
          <>
            The CV is unavailable right now. Please email <a href={`mailto:${email}`}>{email}</a>.
          </>
        )}
      </span>
    </span>
  );
}
