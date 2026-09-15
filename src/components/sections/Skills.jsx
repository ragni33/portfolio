import { useState } from 'react';
import { skillLevels } from '../../data/index.js';
import { getSkillCategories } from '../../services/portfolioService.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './Skills.css';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'applied', label: 'Applied' },
  { id: 'developing', label: 'Developing' },
];

export default function Skills() {
  const categories = getSkillCategories();
  const [filter, setFilter] = useState('all');

  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          titleId="skills-title"
          title="Tools and methods, grouped by area."
          intro="Solid markers show skills I have used in professional, research or academic work. Outlined amber markers show technologies I am currently learning and developing."
        />

        <Reveal className="skills__toolbar">
          <ul className="skills__legend" aria-label="Legend">
            {Object.entries(skillLevels).map(([level, info]) => (
              <li key={level}>
                <span className={`skill-marker skill-marker--${level}`} aria-hidden="true" />
                <span>
                  <strong>{info.label}</strong>
                  <span className="skills__legend-desc"> — {info.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="skills__filters" role="group" aria-label="Highlight skills by level">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className="skills__filter"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="skills__grid">
          {categories.map((category, index) => (
            <Reveal
              as="article"
              key={category.id}
              className="card card--interactive skill-card"
              delay={index * 60}
              aria-labelledby={`skills-${category.id}`}
            >
              <header className="skill-card__head">
                <span className="skill-card__index mono" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 id={`skills-${category.id}`}>{category.title}</h3>
                <span className="skill-card__count mono">
                  {category.skills.length}
                  <span className="visually-hidden"> skills</span>
                </span>
              </header>

              <ul className="skill-list">
                {category.skills.map((skill) => {
                  const highlighted = filter === skill.level;
                  return (
                    <li
                      key={skill.name}
                      className={`skill skill--${skill.level}${highlighted ? ' is-highlighted' : ''}`}
                    >
                      {skill.name}
                      {skill.level === 'developing' && (
                        <span className="visually-hidden"> (currently developing)</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
