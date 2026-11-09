// Original sun toggle (synthwave easter egg)
const sun = document.querySelector('#retrobg-sun');
if (sun) {
  sun.onclick = () => {
    document.querySelector('#retrobg').classList.toggle('retrobg-shutdown');
  };
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
    });
  });
}

// Header shadow on scroll
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(0,0,0,0.4)'
      : 'none';
  }, { passive: true });
}
