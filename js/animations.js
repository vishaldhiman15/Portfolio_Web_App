/**
 * animations.js
 * Scroll reveal (IntersectionObserver) and skill bar animations.
 */

/* ── SCROLL REVEAL ── */
function reObs() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.09 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/* ── SKILL BAR ANIMATION ── */
(function initSkillBars() {
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skfill').forEach(fill => {
          const target = fill.style.width;
          fill.style.width = '0';
          requestAnimationFrame(() => {
            setTimeout(() => { fill.style.width = target; }, 80);
          });
        });
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  /* Re-run when skills section re-renders */
  const skSection = document.getElementById('skills');
  if (skSection) {
    const mutObs = new MutationObserver(() => {
      document.querySelectorAll('.skcard').forEach(card => barObserver.observe(card));
    });
    mutObs.observe(skSection, { childList: true, subtree: true });
  }
})();

/* ── ACTIVE NAV HIGHLIGHT ── */
(function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    document.querySelectorAll('.nlinks a').forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? '#f0f0f5' : '';
    });
  }, { passive: true });
})();
