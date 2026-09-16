// Status keys map to a badge label and colour tone (see components/ui/Badge.jsx).
export const projectStatuses = {
  development: { label: 'In Development', tone: 'teal', pulse: true },
  prototype: { label: 'Concept & Prototype', tone: 'amber' },
  academic: { label: 'Academic Project', tone: 'blue' },
  frontend: { label: 'Frontend Project', tone: 'blue' },
};

export const projects = [
  {
    id: 'ai-bi-dashboard',
    title: 'AI Business Intelligence Dashboard',
    status: 'development',
    summary:
      'A frontend for turning competitor intelligence into alerts, opportunities and structured business insights.',
    points: [
      'React and JavaScript frontend for competitor intelligence, alerts, opportunities and structured business insights',
      'Planned architecture includes Node.js, Express, REST APIs and PostgreSQL',
      'All company information is kept anonymous',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
  },
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    status: null,
    summary: 'A responsive React dashboard for tracking income, expenses and monthly spending patterns.',
    points: [
      'Added transaction creation, editing, deletion, category filtering and calculated balances',
      'Created visual spending summaries using reusable React components and charts',
      'Used localStorage to preserve user data between browser sessions',
    ],
    stack: ['React', 'JavaScript', 'Chart.js', 'CSS3', 'LocalStorage'],
  },
  {
    id: 'react-ecommerce-frontend',
    title: 'E-Commerce Storefront',
    status: 'frontend',
    summary:
      'A responsive shopping interface built from reusable components, with product search, category filtering and shopping-cart state management.',
    points: [
      'Built a responsive product catalogue and product-detail interface',
      'Implemented filtering, search and cart interactions with client-side state',
    ],
    stack: ['React', 'JavaScript', 'CSS3', 'Vite'],
  },
  {
    id: 'react-task-dashboard',
    title: 'Task Management Dashboard',
    status: 'frontend',
    summary: 'An interactive task-management application for organizing and tracking daily work.',
    points: [
      'Implemented task creation, editing, deletion and status filtering',
      'Used hooks-based state and localStorage so tasks persist between sessions',
    ],
    stack: ['React', 'React Hooks', 'JavaScript', 'LocalStorage'],
  },
];
