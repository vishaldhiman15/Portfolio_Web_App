/**
 * main.js
 * App entry point — initialises the portfolio on page load.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Fill editor inputs from data
  fillInputs();

  // Render all portfolio sections
  renderPortfolio();

  // Start scroll reveal observer
  reObs();

  // Close demo modal on backdrop click
  document.getElementById('dmodal').addEventListener('click', e => {
    if (e.target === document.getElementById('dmodal')) closeDemo();
  });

  // Close demo modal on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDemo();
  });
});
