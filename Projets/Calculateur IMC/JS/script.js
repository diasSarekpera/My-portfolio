const T = document.getElementById("T");
const P = document.getElementById("P");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

let imc = 0;
let p = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (P.value && T.value) {
    imc = (P.value) / (Math.pow(T.value/100, 2));
    imc = Math.ceil(imc);
    if (imc) {
      if (imc < 18.5) {
        p = "Insuffisance pondérale";
      } else if (imc <= 24.9) {
        p = "Corpulence normale";
      } else if (imc <= 29.9) {
        p = "Surpoids";
      } else if (imc <= 34.9) {
        p = "Obésité modérée";
      } else if (imc < 39.9) {
        p = "Obésité sévère";
      } else {
        p = "Obésité morbide";
      }
    }
    result.innerHTML =
      "<div><p>Votre IMC est de " +
      imc +
      "</p></div><div><p>Interprétation " +
      p +
      "</p></div>";
  } else {
    p = "Veuillez renseignez les champs";
    result.innerHTML = "<span>" + p + "</span>";
  }
});
