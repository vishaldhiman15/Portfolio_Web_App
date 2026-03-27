/**
 * data.js
 * Central data store for the portfolio.
 * Edit this file to change all portfolio content,
 * or use the live editor panel in the browser.
 */

const D = {

  /* ── HERO ── */
  hero: {
    name:   'Vishal',
    aw:     'Full Stack',       // accent/highlighted word
    tl:     'Developer',      // third line of name
    role:   'Frontend & UI Developer',
    badge:  'Available for work',
    bio:    'Crafting pixel-perfect, high-performance web interfaces that blend elegant design with clean, modern code.',
    s1n: '2+',  s1l: 'Years Exp.',
    s2n: '18+', s2l: 'Projects Built',
    s3n: '100%',s3l: 'Passion',
    cta:  'View My Work',
    nl:   'V/',               // nav logo text
  },

  /* ── ABOUT ── */
  about: {
    p1: "Hey! I'm Vishal, a passionate Frontend & UI Developer who loves turning complex problems into beautiful, intuitive digital experiences.",
    p2: 'I specialise in building responsive, accessible, and performant web apps with a sharp eye for design details.',
    p3: "When I'm not coding, I'm exploring new design trends and levelling up one component at a time.",
    badges: 'React.js, Next.js, Tailwind CSS, Figma, TypeScript, Git & GitHub',
  },

  /* ── TIMELINE ── */
  tl: [
    { y: '2024', t: 'Frontend Developer — Freelance',   s: 'Building client projects & open-source' },
    { y: '2023', t: 'React & Next.js Deep Dive',        s: 'Mastered modern frontend ecosystem' },
    { y: '2022', t: 'Started Web Development',          s: 'HTML, CSS, JavaScript fundamentals' },
  ],

  /* ── SKILLS ── */
  sk: [
    { i: '⚛️', n: 'React / Next.js',   d: 'Component-driven UIs, SSR/SSG, hooks, context.', tg: 'React, Next.js, Redux',     lv: 92 },
    { i: '🎨', n: 'CSS & Styling',      d: 'Tailwind CSS, SASS, animations, responsive design.', tg: 'Tailwind, SASS, Framer', lv: 95 },
    { i: '⚡', n: 'JavaScript / TS',    d: 'ES6+, TypeScript, async/await, REST APIs.',       tg: 'TypeScript, ES6+',         lv: 88 },
    { i: '🖌️', n: 'UI / UX Design',    d: 'Figma wireframes, prototyping, design systems.',   tg: 'Figma, Design Systems',    lv: 82 },
    { i: '🛠️', n: 'Tools & DevOps',    d: 'Git, GitHub, Vite, Vercel, CI/CD pipelines.',      tg: 'Git, Vercel, Vite',        lv: 85 },
    { i: '🌐', n: 'Backend Basics',     d: 'Node.js, Express, REST APIs, MongoDB basics.',     tg: 'Node.js, Express',         lv: 65 },
  ],

  /* ── PROJECTS ── */
  pr: [
    {
      em: '🛒', bg: '#0f172a',
      tp: 'React · UI/UX',
      n:  'ShopFlow — E-commerce UI',
      d:  'A modern e-commerce storefront with cart, filters, search, and smooth animations.',
      st: 'React, Tailwind, Framer Motion',
      cat: 'react ui',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '📊', bg: '#0c1a12',
      tp: 'React · Dashboard',
      n:  'AdminPulse — Dashboard',
      d:  'Analytics dashboard with charts, dark mode, and real-time mock data.',
      st: 'React, Recharts, TypeScript',
      cat: 'react fullstack',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '💬', bg: '#1a0f1a',
      tp: 'Full Stack',
      n:  'ChatNest — Real-time Chat',
      d:  'Full-stack chat app with rooms, auth, real-time messages, and emoji support.',
      st: 'React, Node.js, Socket.io',
      cat: 'fullstack',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
    {
      em: '🎵', bg: '#0f0f1a',
      tp: 'UI/UX · CSS',
      n:  'VibePlayer — Music UI',
      d:  'A gorgeous music player concept with waveform animation and custom controls.',
      st: 'HTML, CSS, JavaScript',
      cat: 'ui',
      demo: 'https://vercel.app',
      gh:   'https://github.com/vishal',
    },
  ],

  /* ── GITHUB REPOS ── */
  gh: [
    { n: 'vishal-portfolio',       d: 'My personal portfolio built with React and Tailwind CSS.', l: 'JavaScript', lc: '#38bdf8', st: 24, fk: 8,  url: 'https://github.com/vishal' },
    { n: 'react-component-kit',    d: 'Reusable, accessible React components with Storybook docs.', l: 'TypeScript', lc: '#e8ff47', st: 41, fk: 12, url: 'https://github.com/vishal' },
    { n: 'ui-animation-snippets',  d: 'CSS & JS animation snippets for micro-interactions.',       l: 'CSS',        lc: '#f97316', st: 57, fk: 19, url: 'https://github.com/vishal' },
    { n: 'chatnest-app',           d: 'Full-stack real-time chat with Socket.io and MongoDB.',      l: 'JavaScript', lc: '#38bdf8', st: 18, fk: 5,  url: 'https://github.com/vishal' },
    { n: 'notevault-firebase',     d: 'Notes app with Firebase auth, Firestore and Markdown.',     l: 'TypeScript', lc: '#a78bfa', st: 13, fk: 4,  url: 'https://github.com/vishal' },
    { n: 'tailwind-darkmode-starter', d: 'Next.js + Tailwind starter with dark mode pre-configured.', l: 'TypeScript', lc: '#e8ff47', st: 32, fk: 11, url: 'https://github.com/vishal' },
  ],

  /* ── CONTACT ── */
  contact: {
    email: 'dhimanvishal1591@email.com',
    gh:    'https://github.com/vishaldhiman15',
    loc:   'HP, India',
    ft:    '© 2025 Vishal. Built with passion.',
  },
};
