import { getProjects } from '../../services/portfolioService.js';
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
          title="Featured projects across AI, data and modern web development."
          intro="A selection of practical projects combining intelligent systems, structured data and responsive websites."
        />

        <ul className="projects__grid">
          {projects.map((project, index) => {
            return (
              <Reveal as="li" key={project.id} className="projects__item" delay={index * 80}>
                <article className="card card--interactive project-card" aria-labelledby={`project-${project.id}`}>
                  <header className="project-card__head">
                    <span className="project-card__index mono" aria-hidden="true">
                      P—{String(index + 1).padStart(2, '0')}
                    </span>
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
