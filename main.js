/* ==========================================================
   MAZEN — Personal Website | main.js
   1. Mobile menu
   2. Active link highlight
   3. Footer year
   ========================================================== */


/* ---------- 1. Mobile menu ---------- */
const menuBtn = document.querySelector('.menu-btn');
const nav     = document.getElementById('nav');

// Open or close the menu and keep aria-expanded in sync
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
}

// Toggle with the button
menuBtn.addEventListener('click', () => {
  setMenu(!nav.classList.contains('open'));
});

// Close after choosing a link
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});


/* ---------- 2. Active link highlight ---------- */
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section[id]').forEach((section) => {
  observer.observe(section);
});


/* ---------- 3. Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();