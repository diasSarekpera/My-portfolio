// === Curseur personnalisé ===
const cursor = document.querySelector(".custom-cursor");

let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.15; // vitesse du suivi

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateCursor() {
  cursorX += (targetX - cursorX) * speed;
  cursorY += (targetY - cursorY) * speed;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Effet d’expansion sur clic
document.addEventListener("click", () => {
  cursor.style.transform += " scale(1.4)";
  cursor.style.opacity = "0.6";
  setTimeout(() => {
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
    cursor.style.opacity = "1";
  }, 150);
});
