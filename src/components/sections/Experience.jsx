import { getExperience } from '../../services/portfolioService.js';
import Badge from '../ui/Badge.jsx';
import { MapPinIcon } from '../ui/Icons.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './Experience.css';

export default function Experience() {
  const experience = getExperience();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Professional experience"
          titleId="experience-title"
          title="Research, engineering and data work."
        />

        <ol className="timeline">
          {experience.map((job, index) => (
            <Reveal
              as="li"
              key={job.id}
              className={`timeline__item${job.current ? ' timeline__item--current' : ''}`}
              delay={index * 80}
            >
              <div className="timeline__meta">
                <p className="timeline__period mono">{job.period}</p>
                <p className="timeline__location">
                  <MapPinIcon />
                  {job.location}
                </p>
              </div>

              <span className="timeline__node" aria-hidden="true" />

              <article className="card card--interactive timeline__card" aria-labelledby={`job-${job.id}`}>
                <header>
                  <div className="timeline__title-row">
                    <h3 id={`job-${job.id}`}>{job.role}</h3>
                    {job.current && (
                      <Badge tone="teal" pulse>
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="timeline__org">{job.organisation}</p>
                </header>

                <ul className="bullet-list timeline__highlights">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="tag-list timeline__tags" aria-label="Focus areas">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
