document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".testimonial-nav.prev");
  const nextBtn = document.querySelector(".testimonial-nav.next");
  const slider = document.getElementById("testimonials-slider");

  let currentIndex = 0;
  let startX = 0;
  let endX = 0;
  let isSwiping = false;

  function showTestimonial(index, direction = "next") {
    if (index === currentIndex) return;
    const currentCard = testimonials[currentIndex];
    const nextCard = testimonials[index];

    const slideOut = direction === "next" ? "slide-out-left" : "slide-out-right";
    const slideIn = direction === "next" ? "slide-in-right" : "slide-in-left";

    testimonials.forEach(card =>
      card.classList.remove(
        "active",
        "slide-in-left",
        "slide-in-right",
        "slide-out-left",
        "slide-out-right"
      )
    );

    currentCard.classList.add(slideOut);
    nextCard.classList.add("active", slideIn);

    currentIndex = index;
  }

  function nextTestimonial() {
    showTestimonial((currentIndex + 1) % testimonials.length, "next");
  }

  function prevTestimonial() {
    showTestimonial(
      (currentIndex - 1 + testimonials.length) % testimonials.length,
      "prev"
    );
  }

  // === Navigation boutons ===
  if (nextBtn) nextBtn.addEventListener("click", nextTestimonial);
  if (prevBtn) prevBtn.addEventListener("click", prevTestimonial);

  // === Détection tactile (swipe mobile) ===
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  slider.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    if (!isSwiping) return;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) nextTestimonial(); // swipe gauche → carte suivante
      else prevTestimonial();           // swipe droite → carte précédente
    }

    isSwiping = false;
  });

  // === Auto défilement toutes les 6s ===
  setInterval(nextTestimonial, 6000);

  // === Initialisation ===
  testimonials[0].classList.add("active");
});
