import { profile } from '../../data/index.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.socials.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profile.socials.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
];

export const externalLinkProps = { target: '_blank', rel: 'noopener noreferrer' };
