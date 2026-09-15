import { useState } from 'react';
import { getProfile } from '../../services/portfolioService.js';
import CvDownloadLink from '../ui/CvDownloadLink.jsx';
import { ArrowRightIcon, DownloadIcon } from '../ui/Icons.jsx';
import { externalLinkProps, socialLinks } from '../ui/socialLinks.js';
import './Hero.css';

function Portrait({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="portrait">
      <div className="portrait__stage">
        <div className="portrait__frame">
          {hasError ? (
            <div className="portrait__fallback" role="img" aria-label={`${alt} (image not yet available)`}>
              <span className="portrait__initials" aria-hidden="true">
                RC
              </span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              width="640"
              height="800"
              fetchPriority="high"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        <span className="portrait__corner portrait__corner--tl" aria-hidden="true" />
        <span className="portrait__corner portrait__corner--br" aria-hidden="true" />

        <div className="hero__readout">
          <p className="hero__readout-title" aria-hidden="true">
            {'// profile'}
          </p>
          <dl>
            <div>
              <dt>focus</dt>
              <dd>AI · Data · Automation</dd>
            </div>
            <div>
              <dt>study</dt>
              <dd>MSc Artificial Intelligence</dd>
            </div>
            <div>
              <dt>base</dt>
              <dd>Berlin, DE</dd>
            </div>
          </dl>
        </div>
      </div>
      <figcaption className="portrait__caption mono">
        <span>52.52° N · 13.40° E</span>
        <span>Berlin</span>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  const profile = getProfile();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow mono hero-enter" style={{ '--i': 0 }}>
            <span className="hero__pulse" aria-hidden="true" />
            Based in {profile.location}
          </p>

          <h1 id="hero-title" className="hero__title hero-enter" style={{ '--i': 1 }}>
            {profile.name}
          </h1>

          <p className="hero__headline hero-enter" style={{ '--i': 2 }}>
            <span>{profile.headline}</span>
            <span className="hero__divider" aria-hidden="true" />
            <span className="hero__qualification">{profile.qualification}</span>
          </p>

          <p className="hero__intro hero-enter" style={{ '--i': 3 }}>
            {profile.intro}
          </p>

          <div className="hero__actions hero-enter" style={{ '--i': 4 }}>
            <a className="btn btn--primary" href="#projects">
              View projects
              <ArrowRightIcon />
            </a>
            <CvDownloadLink className="btn btn--ghost">
              <DownloadIcon />
              Download CV
              <span className="visually-hidden"> (PDF)</span>
            </CvDownloadLink>
          </div>

          <ul className="hero__socials hero-enter" style={{ '--i': 5 }} aria-label="Social and contact links">
            {socialLinks.map(({ id, label, href, Icon, external }) => (
              <li key={id}>
                <a
                  className="icon-link"
                  href={href}
                  aria-label={external ? `${label} (opens in a new tab)` : `${label}: ${profile.email}`}
                  {...(external ? externalLinkProps : {})}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual hero-enter" style={{ '--i': 2 }}>
          <Portrait src={profile.portrait.src} alt={profile.portrait.alt} />
        </div>
      </div>

      <a className="hero__scroll mono" href="#about">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="visually-hidden"> to About section</span>
      </a>
    </section>
  );
}
