import { projectStatuses } from '../../data/index.js';
import { getProjects } from '../../services/portfolioService.js';
import Badge from '../ui/Badge.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './Projects.css';

export default function Projects() {
  const projects = getProjects();

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Featured projects"
          titleId="projects-title"
          title="Selected work across AI, data and the web."
          intro="A mix of current builds, early-stage concepts and academic research. Each card shows the project’s current status."
        />

        <ul className="projects__grid">
          {projects.map((project, index) => {
            const status = project.status ? projectStatuses[project.status] : null;

            return (
              <Reveal as="li" key={project.id} className="projects__item" delay={index * 80}>
                <article className="card card--interactive project-card" aria-labelledby={`project-${project.id}`}>
                  <header className="project-card__head">
                    <span className="project-card__index mono" aria-hidden="true">
                      P—{String(index + 1).padStart(2, '0')}
                    </span>
                    {status && (
                      <Badge tone={status.tone} pulse={status.pulse}>
                        <span className="visually-hidden">Status: </span>
                        {status.label}
                      </Badge>
                    )}
                  </header>

                  <h3 id={`project-${project.id}`}>{project.title}</h3>
                  <p className="project-card__summary">{project.summary}</p>

                  <ul className="bullet-list project-card__points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="project-card__footer">
                    <ul className="tag-list" aria-label="Technologies and methods">
                      {project.stack.map((item) => (
                        <li key={item} className="tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
