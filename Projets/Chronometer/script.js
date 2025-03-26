//Cibler les élément html utiles
const chronoDisplay = document.querySelector(".chono_display");
const start_chrono = document.querySelector(".start_chrono");
const stop_chrono = document.querySelector(".stop_chrono");
const reset_chrono = document.querySelector(".reset_chrono");

//variables
let chronoSecond = 0;
let h = 0;
let m = 0;
let s = 0;
let r = 0;
let ID = null;

//fonction qui permet l'incrémentation de la seconde
function chronoInc() {
  chronoSecond++;
  displayChrono();
}

//fonction qui éxécute l'incrémentaion de la seconde grâce à setInterval si le choono est à 0
function startChrono() {
  if(!ID){
    ID = setInterval(chronoInc, 1000);
    chronoInc();
    start_chrono.disabled = true;
  }
}

//fonction qui stop le chrono en mettant fin à setInterval grâce à la fonction clearInterval avec ID passer en argument
function stopChrono() {
  clearInterval(ID);
  ID = null;
  start_chrono.disabled = false;
}

//fonction de réinitilisation du chronomètre et appelle la fonction de stop et réinitialise le chronoSecond à 0 pui appell la fonction d'affichage displayChrono pour l'afficher à l'écran
function resetChrono() {
  stopChrono();
  ID = null;
  chronoSecond = 0;
  displayChrono();
  start_chrono.disabled = false;
}

//fonction d'affichage
function displayChrono() {
  h = Math.floor(chronoSecond / 3600);
  r = chronoSecond % 3600;
  m = Math.floor(r / 60);
  r = r % 60;
  s = r;

  h = h.toString().padStart(2, 0);
  m = m.toString().padStart(2, 0);
  s = s.toString().padStart(2, 0);

  chronoDisplay.innerText = `${h} : ${m} : ${s}`;
}

//On agit sur les évément click de chaque boutton
start_chrono.addEventListener("click", startChrono);
stop_chrono.addEventListener("click", stopChrono);
reset_chrono.addEventListener("click", resetChrono);

//Fin partie chronomètre

//cibler les élément HTML utile
const userMins = document.getElementById("minutes");
const userSec = document.getElementById("seconds");
const timer_diaplay = document.querySelector(".timer-display");
const start_timer = document.querySelector(".start-timer");
const reset_timer = document.querySelector(".reset-timer");

//les variable
let minutes = 0;
let secondes = 0;
let timeSec = 0;
let dspM = 0;
let dspS = 0;
let timeInterval;


//fonction de décrémentation
function timerDcr() {
  if (timeSec > 0) {
    timeSec--;
    displayTimer();
  } else {
    clearInterval(timeInterval);
    timeInterval = null;
    alert("Temps écouler");
  }
}

//fonction startTimer
function startTimer() {
  if (!timeInterval) { // Vérifie si l'intervalle est déjà actif
    minutes = parseInt(userMins.value) || 0;
    secondes = parseInt(userSec.value) || 0;
    timeSec = minutes * 60 + secondes;

    if (timeSec > 0) {
      timeInterval = setInterval(timerDcr, 1000);
      timerDcr();
    }
  }
}


//fonction reset
function resetTimer() {
  clearInterval(timeInterval);
  timeInterval = null;
  timeSec = 0;
  userMins.value = 0;
  userSec.value = 0;
  displayTimer();
}

//fontion qui gère l'affichage
function displayTimer() {
  dspM = Math.floor(timeSec / 60);
  dspS = timeSec % 60;

  dspM = dspM.toString().padStart(2, 0);
  dspS = dspS.toString().padStart(2, 0);

  timer_diaplay.textContent = `${dspM} : ${dspS}`;

}

//Aux click des bouton on appelle les fonction concerné
start_timer.addEventListener("click", startTimer);
reset_timer.addEventListener("click", resetTimer);

userMins.addEventListener("input", () => {
  userMins.value = userMins.value.replace(/[^0-9]/g, ""); // Supprime les caractères non numériques
});

userSec.addEventListener("input", () => {
  userSec.value = userSec.value.replace(/[^0-9]/g, ""); // Supprime les caractères non numériques
});
