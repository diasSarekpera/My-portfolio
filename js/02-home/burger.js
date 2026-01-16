const burger = document.querySelector('.burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const backdrop = document.querySelector('.mobile-backdrop');
const body = document.body;

function openMenu() {
  burger.classList.add('open');
  burger.setAttribute('aria-expanded', true);

  mobileMenu.hidden = false;
  requestAnimationFrame(() => {
    mobileMenu.classList.add('is-open');
    backdrop.classList.add('is-visible');
  });

  body.classList.add('menu-open');
}

function closeMenu() {
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', false);

  mobileMenu.classList.remove('is-open');
  backdrop.classList.remove('is-visible');

  setTimeout(() => {
    mobileMenu.hidden = true;
  }, 350);

  body.classList.remove('menu-open');
}

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// clic sur backdrop = fermeture
backdrop.addEventListener('click', closeMenu);

// clic sur un lien = fermeture
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
