import { getEducation } from '../../services/portfolioService.js';
import Badge from '../ui/Badge.jsx';
import { GraduationCapIcon, MapPinIcon } from '../ui/Icons.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './Education.css';

export default function Education() {
  const education = getEducation();

  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Education"
          titleId="education-title"
          title="Academic foundation."
        />

        <ul className="edu__grid">
          {education.map((item, index) => (
            <Reveal as="li" key={item.id} className="edu__item" delay={index * 80}>
              <article className="card card--interactive edu-card" aria-labelledby={`edu-${item.id}`}>
                <span className="edu-card__icon" aria-hidden="true">
                  <GraduationCapIcon />
                </span>
                <div>
                  <div className="edu-card__top">
                    <p className="edu-card__period mono">{item.period}</p>
                    {item.current && <Badge tone="teal">In progress</Badge>}
                  </div>
                  <h3 id={`edu-${item.id}`}>{item.degree}</h3>
                  <p className="edu-card__institution">{item.institution}</p>
                  <p className="edu-card__location">
                    <MapPinIcon />
                    {item.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
