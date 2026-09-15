import { getProfile } from '../../services/portfolioService.js';
import ContactForm from './ContactForm.jsx';
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from '../ui/Icons.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { externalLinkProps } from '../ui/socialLinks.js';
import './Contact.css';

export default function Contact() {
  const profile = getProfile();

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div>
          <SectionHeading
            index="07"
            eyebrow="Contact"
            titleId="contact-title"
            title="Let’s start a conversation."
            intro="For questions about my work, projects or potential collaboration, feel free to get in touch by email or LinkedIn, or browse my work on GitHub."
          />

          <Reveal as="ul" className="contact__channels" delay={100}>
            <li>
              <a className="contact__channel" href={`mailto:${profile.email}`}>
                <span className="contact__channel-icon" aria-hidden="true">
                  <MailIcon />
                </span>
                <span>
                  <span className="contact__channel-label mono">Email</span>
                  <span className="contact__channel-value">{profile.email}</span>
                </span>
                <ArrowUpRightIcon className="contact__channel-arrow" />
              </a>
            </li>
            <li>
              <a className="contact__channel" href={profile.socials.linkedin} {...externalLinkProps}>
                <span className="contact__channel-icon" aria-hidden="true">
                  <LinkedInIcon />
                </span>
                <span>
                  <span className="contact__channel-label mono">LinkedIn</span>
                  <span className="contact__channel-value">
                    {profile.name}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </span>
                </span>
                <ArrowUpRightIcon className="contact__channel-arrow" />
              </a>
            </li>
            <li>
              <a className="contact__channel" href={profile.socials.github} {...externalLinkProps}>
                <span className="contact__channel-icon" aria-hidden="true">
                  <GitHubIcon />
                </span>
                <span>
                  <span className="contact__channel-label mono">GitHub</span>
                  <span className="contact__channel-value">
                    {profile.socials.github.replace('https://', '')}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </span>
                </span>
                <ArrowUpRightIcon className="contact__channel-arrow" />
              </a>
            </li>
            <li>
              <div className="contact__channel contact__channel--static">
                <span className="contact__channel-icon" aria-hidden="true">
                  <MapPinIcon />
                </span>
                <span>
                  <span className="contact__channel-label mono">Location</span>
                  <span className="contact__channel-value">{profile.location}</span>
                </span>
              </div>
            </li>
          </Reveal>
        </div>

        <Reveal className="card contact__form-card" delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
