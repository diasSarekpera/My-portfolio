// === Effet Parallax sur la photo About (désactivé sur mobile) ===
document.addEventListener("scroll", () => {
  const photo = document.querySelector(".about-photo img");
  if (!photo) return;

  // Ne pas exécuter sur mobile
  if (window.innerWidth <= 900) {
    photo.style.transform = "scale(1)"; // réinitialise proprement
    return;
  }

  const rect = photo.getBoundingClientRect();
  const scrollY = window.scrollY;
  const offset = (scrollY - rect.top) * 0.1;

  photo.style.transform = `translateY(${offset}px) scale(1.03)`;
});



// Apparition au scroll
const fadeItems = document.querySelectorAll(".fade-item");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeItems.forEach((item) => appearOnScroll.observe(item));

// Parallax global sur la section
const aboutSection = document.querySelector(".about-section");
window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 100;
  const y = (window.innerHeight / 2 - e.pageY) / 100;
  aboutSection.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

