import { profile } from '../../data/index.js';
import { ArrowUpIcon } from '../ui/Icons.jsx';
import { externalLinkProps, socialLinks } from '../ui/socialLinks.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand-mark" aria-hidden="true">
            RC
          </span>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__tagline">
              {profile.headline} · {profile.location}
            </p>
          </div>
        </div>

        <nav aria-label="Social and contact links">
          <ul className="footer__links">
            {socialLinks.map(({ id, label, href, Icon, external }) => (
              <li key={id}>
                <a className="footer__link" href={href} {...(external ? externalLinkProps : {})}>
                  <Icon />
                  <span>{label}</span>
                  {external && <span className="visually-hidden"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="footer__bottom mono">
          <p>
            © {year} {profile.name}
          </p>
          <a className="footer__top" href="#top">
            Back to top
            <ArrowUpIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
