import Reveal from './Reveal.jsx';
import './SectionHeading.css';

export default function SectionHeading({ index, eyebrow, title, titleId, intro }) {
  return (
    <Reveal as="header" className="section-heading">
      <p className="section-heading__eyebrow mono">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={titleId}>{title}</h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </Reveal>
  );
}
