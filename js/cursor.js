/**
 * cursor.js
 * Custom animated cursor with smooth ring follow effect.
 */

(function initCursor() {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cring');

  if (!cur || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = (mx - 5) + 'px';
    cur.style.top  = (my - 5) + 'px';
  });

  /* Smooth ring follow */
  function animateRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  /* Scale on interactive elements */
  const interactiveSelector = 'a, button, .pcard, .ghcard, .skcard, .badge, .fbtn, input, textarea';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelector)) {
      cur.style.transform  = 'scale(2.2)';
      ring.style.transform = 'scale(1.5)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelector)) {
      cur.style.transform  = 'scale(1)';
      ring.style.transform = 'scale(1)';
    }
  });

  /* Hide cursor when mouse leaves window */
  document.addEventListener('mouseleave', () => {
    cur.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cur.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();
