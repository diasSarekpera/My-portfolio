const clock = document.querySelector(".clock > span");

function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  let minute = now.getMinutes().toString().padStart(2, 0);
  let second = now.getSeconds().toString().padStart(2, 0);
  clock.textContent = `${hours} : ${minute} : ${second}`;
}

setInterval(updateClock, 1000);

updateClock();
