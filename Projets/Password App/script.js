//Selection des élément du DOM
const passLength = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");
const passwordOutput = document.getElementById("password");

// Définir les caractères possibles
let UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
let NUMBERS = "0123456789";
let SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>? ";

//variables
let passL = 0;
let iclUpper = false;
let iclLower = false;
let iclNumber = false;
let iclSymb = false;
let availPass = "";
let password = "";
let nextChar ="";
let alt = 0;
let strength = 0;
let strengthLevel = ["Très faible", "Faible", "Moyenne", "Forte", "Très forte"];

document.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    generate.click();
  }
})



//fonction de gestion des mots de passe
function passwordGenerate() {

  if(passLength){
    if(passLength.value < 4){
      passLength.value = 4;
    }else if(passLength.value > 32){
      passLength.value = 32;
    }
  }
  
  passL = parseInt(passLength.value) || 0;
  iclUpper = uppercase.checked;
  iclLower = lowercase.checked;
  iclNumber = numbers.checked;
  iclSymb = symbols.checked;

  availPass = "";

  if (iclLower) {
    availPass += LOWERCASE_CHARS;
  }

  if (iclUpper) {
    availPass += UPPERCASE_CHARS;
  }

  if (iclNumber) {
    availPass += NUMBERS;
  }

  if (iclSymb) {
    availPass += SYMBOLS;
  }

  password = "";

  if (availPass === "") {
    alert("Sélectionner au moin un type de caractère");
  }else{
    for (let i = 1; i <= passL; i++) {
      do{
        nextChar = availPass[ Math.floor(Math.random() * availPass.length)];
      }while(nextChar === password[password.length-1]);
      password += nextChar;
    }
  }
  
  return password;
}


function checkPasswordStrength(){
  strength = 0;
  if(/[A-Z]/.test(password)){//Majuscule
    strength++;
  }

  if(/[a-z]/.test(password)){//Miniscule
    strength++;
  }

  if(/[0-9]/.test(password)){//chiffre
    strength++;
  }

  if(/[^a-zA-Z0-9]/.test(password)){//Carctère spéciaux
    strength++;
  }

  if(password.length >= 12){
    strength++;
  }

  if(strength > 4){
    strength = 4;
  }

  strengthLevel = ["Très faible", "Faible", "Moyenne", "Forte", "Très forte"];

  return strengthLevel[strength] || "Très faible";

}

generate.addEventListener("click", () => {
  const password = passwordGenerate();
  passwordOutput.value = password;
  const strength = checkPasswordStrength();
  alert("Mot de passe: " + strength);
});


copy.addEventListener("click", () => {
   passwordOutput.select();
   document.execCommand("copy");
   alert("Mot de passe copié");
});

