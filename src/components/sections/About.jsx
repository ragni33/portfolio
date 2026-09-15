import { aboutFocus } from '../../data/index.js';
import { getProfile } from '../../services/portfolioService.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './About.css';

const facts = [
  { label: 'Location', value: 'Berlin, Germany' },
  { label: 'Studying', value: 'MSc Artificial Intelligence' },
  { label: 'Background', value: 'Computer Science' },
];

export default function About() {
  const profile = getProfile();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="About me"
          titleId="about-title"
          title="Turning complex problems into practical, user-focused solutions."
        />

        <div className="about__grid">
          <Reveal className="about__text">
            <p className="about__lead">{profile.intro}</p>
            <p>
              My path combines a Bachelor of Computer Science, frontend engineering in a remote product
              team and AI research focused on generative and conversational systems. Alongside my MSc
              at Brandenburg University of Technology Cottbus-Senftenberg, I work as a working student in
              AI, data and automation.
            </p>

            <dl className="about__facts">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="mono">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal as="ul" className="about__focus" delay={120} aria-label="Areas of focus">
            {aboutFocus.map((item, index) => (
              <li key={item.label} className="about__focus-item">
                <span className="about__focus-index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
