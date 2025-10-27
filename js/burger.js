// ===============================
//  MENU MOBILE TOGGLE SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.body;

  // Sécurité : vérifier que les éléments existent
  if (!burger || !mobileNav || !mobileMenu) return;

  // Toggle du menu
  burger.addEventListener("click", () => {
    const isOpen = burger.classList.toggle("open");

    // Ouvre ou ferme le menu mobile
    mobileNav.classList.toggle("open", isOpen);
    mobileMenu.hidden = !isOpen;

    // Accessibilité (ARIA)
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");

    // Empêche le scroll en arrière-plan
    body.classList.toggle("no-scroll", isOpen);
  });

  // Ferme le menu quand on clique sur un lien du menu mobile
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      mobileNav.classList.remove("open");
      mobileMenu.hidden = true;
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Ouvrir le menu");
      body.classList.remove("no-scroll");
    });
  });
});
