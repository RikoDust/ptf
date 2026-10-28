/* ==========================================================================
   Éléments du DOM
   ========================================================================== */

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');


/* ==========================================================================
   Header : ajout de la classe "scrolled" au défilement
   ========================================================================== */

window.addEventListener(
  'scroll',
  () => header?.classList.toggle('scrolled', window.scrollY > 20),
  { passive: true }
);


/* ==========================================================================
   Menu mobile : ouverture / fermeture
   ========================================================================== */

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

nav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  })
);


/* ==========================================================================
   Animation d'apparition (.reveal)
   ========================================================================== */

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: .12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


/* ==========================================================================
   Année dynamique dans le footer
   ========================================================================== */

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
