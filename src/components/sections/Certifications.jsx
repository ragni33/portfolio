import { getCertifications } from '../../services/portfolioService.js';
import { AwardIcon } from '../ui/Icons.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import './Certifications.css';

export default function Certifications() {
  const certifications = getCertifications();

  return (
    <section id="certifications" className="section section--alt" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          titleId="certifications-title"
          title="Continued learning."
        />

        <ul className="certs__list">
          {certifications.map((cert, index) => (
            <Reveal as="li" key={cert.id} className="certs__item" delay={index * 80}>
              <article className="card card--interactive cert-card" aria-labelledby={`cert-${cert.id}`}>
                <div className="cert-card__head">
                  <span className="cert-card__icon" aria-hidden="true">
                    <AwardIcon />
                  </span>
                  <span className="cert-card__index mono" aria-hidden="true">
                    C—{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 id={`cert-${cert.id}`}>{cert.title}</h3>
                <p className="cert-card__issuer">
                  <span className="mono">Issued by</span>
                  <span>{cert.issuer}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
