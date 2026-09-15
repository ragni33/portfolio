// Skill levels:
//   'applied'    — used in professional, research or academic work
//   'developing' — currently being learned or explored in ongoing work
// Adjust a level here if it does not reflect your experience accurately.

export const skillLevels = {
  applied: {
    label: 'Applied experience',
    description: 'Used in professional, research or academic work',
  },
  developing: {
    label: 'Currently developing',
    description: 'Actively learning and exploring in ongoing work',
  },
};

export const skillCategories = [
  {
    id: 'programming-web',
    title: 'Programming & Web',
    skills: [
      { name: 'JavaScript', level: 'applied' },
      { name: 'Python', level: 'applied' },
      { name: 'SQL', level: 'developing' },
      { name: 'React', level: 'applied' },
      { name: 'Node.js', level: 'developing' },
      { name: 'Express.js', level: 'developing' },
      { name: 'HTML5', level: 'applied' },
      { name: 'CSS3', level: 'applied' },
      { name: 'REST APIs', level: 'developing' },
    ],
  },
  {
    id: 'databases-development',
    title: 'Databases & Development',
    skills: [
      { name: 'PostgreSQL', level: 'developing' },
      { name: 'node-postgres', level: 'developing' },
      { name: 'Git', level: 'applied' },
      { name: 'GitHub', level: 'applied' },
      { name: 'Vite', level: 'developing' },
      { name: 'Responsive Web Development', level: 'applied' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Generative AI', level: 'applied' },
      { name: 'Conversational AI', level: 'applied' },
      { name: 'AI Response Evaluation', level: 'applied' },
      { name: 'Prompt Engineering', level: 'applied' },
      { name: 'PyTorch', level: 'applied' },
      { name: 'Hugging Face Transformers', level: 'applied' },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    skills: [
      { name: 'Claude', level: 'applied' },
      { name: 'Claude Code', level: 'applied' },
      { name: 'ChatGPT', level: 'applied' },
      { name: 'Gemini', level: 'applied' },
      { name: 'Hugging Face', level: 'applied' },
      { name: 'Kaggle', level: 'applied' },
    ],
  },
  {
    id: 'research-analytics',
    title: 'AI Research & Analysis',
    skills: [
      { name: 'Evaluation Criteria Design', level: 'applied' },
      { name: 'Market & Competitor Intelligence', level: 'applied' },
      { name: 'GEO & AI Visibility Analysis', level: 'developing' },
      { name: 'Data Analysis', level: 'applied' },
      { name: 'Structured Research', level: 'applied' },
    ],
  },
  {
    id: 'collaboration',
    title: 'Project & Collaboration Tools',
    skills: [
      { name: 'Jira', level: 'applied' },
      { name: 'Notion', level: 'applied' },
      { name: 'Slack', level: 'applied' },
      { name: 'GitHub', level: 'applied' },
      { name: 'Bitrix24', level: 'applied' },
    ],
  },
];
