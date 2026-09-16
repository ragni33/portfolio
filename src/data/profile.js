// Personal and site-wide details.

export const profile = {
  name: 'Ragni Chawala',
  headline: 'AI, Data & Automation',
  qualification: 'MSc Artificial Intelligence',
  location: 'Berlin, Germany',
  email: 'ragnichawla3@gmail.com',
  intro:
    'I am an MSc student in Artificial Intelligence based in Germany, with experience in AI research, frontend engineering, data analysis, and workflow automation. I enjoy transforming complex problems into practical, structured, and user-focused digital solutions.',
  portrait: {
    // BASE_URL keeps these working both locally ("/") and on GitHub Pages ("/portfolio/").
    src: `${import.meta.env.BASE_URL}ragni-profile.png`,
    alt: 'Professional portrait of Ragni Chawala',
  },
  cv: {
    // Set to false to show "CV coming soon" instead of downloading, e.g. while
    // public/Ragni-Chawla-CV.pdf is missing or being replaced.
    available: true,
    href: `${import.meta.env.BASE_URL}Ragni-Chawla-CV.pdf`,
    fileName: 'Ragni-Chawla-CV.pdf',
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/ragni-chawla-385245198/',
    github: 'https://github.com/ragni33',
  },
};

export const aboutFocus = [
  {
    label: 'AI Research',
    text: 'Generative and conversational AI experimentation, prototyping and structured evaluation of model responses.',
  },
  {
    label: 'Frontend Engineering',
    text: 'Building and maintaining web application features in collaborative, remote development teams.',
  },
  {
    label: 'Data & Automation',
    text: 'Structuring and analysing data, supporting automation and documenting technical workflows clearly.',
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
