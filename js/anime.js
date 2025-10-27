const sections = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add('show');

      const fadeItems = section.querySelectorAll('.fade-item');
      fadeItems.forEach((el, index) => {
        // Délai de plus en plus long selon l’ordre
        el.style.transitionDelay = `${index * 0.12 + 0.2}s`;
      });

      observer.unobserve(section);
    }
  });
}, {
  threshold: 0.25 // quand ~25% de la section est visible
});

sections.forEach(section => observer.observe(section));
