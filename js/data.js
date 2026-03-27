/**
 * data.js
 * Central data store for the portfolio.
 */

const D = {

  /* ── HERO ── */
  hero: {
    name:   'Vishal',
    aw:     'Full Stack',
    tl:     'Developer',
    role:   'Backend-Focused Full Stack Developer',
    badge:  'Available for work',
    bio:    'Building scalable web applications using Node.js, Express, and MongoDB with focus on APIs, real-time systems, and efficient data handling.',
    s1n: '2+',  s1l: 'Years Exp.',
    s2n: '18+', s2l: 'Projects Built',
    s3n: '100%',s3l: 'Consistency',
    cta:  'View My Work',
    nl:   'V/',
  },

  /* ── ABOUT ── */
  about: {
    p1: "I'm Vishal, a Full Stack Developer focused on backend systems and scalable application design.",
    p2: 'I build REST APIs, manage databases, and develop real-time applications using Node.js, Express, and MongoDB.',
    p3: "I enjoy solving complex problems using data structures and designing efficient system flows from client to database.",
    badges: 'React.js, Next.js, Node.js, Express, MongoDB, Socket.io, TypeScript, Git & GitHub',
  },

  /* ── TIMELINE ── */
  tl: [
    { y: '2024', t: 'Full Stack Developer — Freelance', s: 'Building real-world applications with frontend and backend systems' },
    { y: '2023', t: 'Deep Dive into React & Backend',   s: 'Learned full stack development and API design' },
    { y: '2022', t: 'Started Web Development',          s: 'HTML, CSS, JavaScript fundamentals' },
  ],

  /* ── SKILLS ── */
  sk: [
    { i: '⚛️', n: 'Frontend', d: 'Building responsive UI using modern frameworks.', tg: 'React, Next.js, Tailwind', lv: null },
    { i: '⚡', n: 'JavaScript / TypeScript', d: 'Async programming, API integration, ES6+ concepts.', tg: 'TypeScript, ES6+', lv: null },
    { i: '🌐', n: 'Backend Development', d: 'Designing REST APIs, authentication, server logic.', tg: 'Node.js, Express, Socket.io', lv: null },
    { i: '🗄️', n: 'Database', d: 'Data modeling and query handling.', tg: 'MongoDB, Firebase', lv: null },
    { i: '🛠️', n: 'Tools', d: 'Version control and deployment workflows.', tg: 'Git, GitHub, Vercel, Railway, Postman', lv: null },
  ],

  /* ── PROJECTS ── */
  pr: [
    {
      em: '🛒', bg: '#0f172a',
      tp: 'Frontend System',
      n:  'ShopFlow — E-commerce Interface',
      d:  'E-commerce frontend with product listing, cart management, filtering, and optimized UI interactions.',
      st: 'React, Tailwind, Framer Motion',
      cat: 'react ui',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '📊', bg: '#0c1a12',
      tp: 'Frontend + Data Visualization',
      n:  'AdminPulse — Analytics Dashboard',
      d:  'Dashboard system with charts, state management, and dynamic data visualization for analytics.',
      st: 'React, Recharts, TypeScript',
      cat: 'react fullstack',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '💬', bg: '#1a0f1a',
      tp: 'Full Stack System',
      n:  'ChatNest — Real-time Chat Application',
      d:  'Real-time communication system using WebSockets with authentication, room-based messaging, and database persistence.',
      st: 'React, Node.js, Express, Socket.io, MongoDB',
      cat: 'fullstack',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '🎵', bg: '#0f0f1a',
      tp: 'Frontend UI System',
      n:  'VibePlayer — Music Interface',
      d:  'Interactive music player UI with custom controls, animations, and optimized user interactions.',
      st: 'HTML, CSS, JavaScript',
      cat: 'ui',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
  ],

  /* ── GITHUB REPOS ── */
  gh: [
    { n: 'vishal-portfolio', d: 'Personal portfolio built using React and Tailwind CSS.', l: 'JavaScript', lc: '#38bdf8', st: 24, fk: 8, url: 'https://github.com/vishal' },
    { n: 'react-component-kit', d: 'Reusable React components with accessibility and scalability in mind.', l: 'TypeScript', lc: '#e8ff47', st: 41, fk: 12, url: 'https://github.com/vishal' },
    { n: 'ui-animation-snippets', d: 'Collection of CSS and JS animations for modern UI interactions.', l: 'CSS', lc: '#f97316', st: 57, fk: 19, url: 'https://github.com/vishal' },
    { n: 'chatnest-app', d: 'Full-stack real-time chat system using Socket.io and MongoDB.', l: 'JavaScript', lc: '#38bdf8', st: 18, fk: 5, url: 'https://github.com/vishal' },
    { n: 'notevault-firebase', d: 'Notes application with Firebase authentication and Firestore database.', l: 'TypeScript', lc: '#a78bfa', st: 13, fk: 4, url: 'https://github.com/vishal' },
    { n: 'tailwind-darkmode-starter', d: 'Next.js starter template with Tailwind and dark mode configuration.', l: 'TypeScript', lc: '#e8ff47', st: 32, fk: 11, url: 'https://github.com/vishal' },
  ],

  /* ── CONTACT ── */
  contact: {
    email: 'dhimanvishal1591@email.com',
    gh:    'https://github.com/vishaldhiman15',
    linkedin: 'https://linkedin.com/in/vishaldhiman, // replace this
    loc:   'HP, India',
    ft:    '© 2025 Vishal. Built with scalable systems in mind.',
  },
};

export default D;
