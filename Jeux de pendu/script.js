//Récupération des Eléments HTML
const tentativesDisplay = document.getElementById("tentatives-nbr");
const rsp = document.querySelector(".information > response");
const letterInput = document.getElementById("input-letter");
const gameZone = document.getElementById("gameZone");
const messageBox = document.getElementById("message");
const submit = document.getElementById("submit-btn");
const word = document.getElementById("word");
const replay = document.querySelector(".replay");
const cat = document.querySelector(".cat");
const p = document.querySelector(".timeDsp");
const played = document.querySelector(".game-Played");
const won = document.querySelector(".game-Won");
const lost = document.querySelector(".game-Lost");
const sucess = document.querySelector(".sucess");

//Variables
let message = "<strong>Notice:</strong> Chère joueurs notez que les caractères spéciaux et les caractère accentués ne sont pas prise en compte dans le jeux. Un mot comme \"étoile\" est  écrit sous cette forme: \"etoile\" .<strong> Nous vous souhaitons bonne chance!</strong>";
let letterGuessed = "";
let found = true;
let bool = true;
let clr = "blue";
let T = 0;
let ctg = "";
let score = "";
let coffre = 0;
let taux = 0;
let gamePlayed = 0;
let gameWon = 0;
let gameLost = 0;
let gameSecond = 0;
let wordSelected = "";

//fonction de gestion des caratères accentuées
function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//la fonction wordGestion pour le choix du mot à séléctionner à selectioner
function wordGestion() {
  alt = Math.floor(Math.random() * 6);
  if (alt === 0) {
    ctg = "Villes du monde";
    wordList = [
      "Paris",
      "Tokyo",
      "Lagos",
      "Sydney",
      "Madrid",
      "Londres",
      "Cotonou",
      "Pékin",
      "Kaboul",
      "Nairobi",
      "Dubaï",
      "Bogota",
      "Moscou",
    ];
  } else if (alt === 1) {
    ctg = "Fruits et légumes";
    wordList = [
      "Mangue",
      "Fraise",
      "Banane",
      "Orange",
      "Pomme",
      "Ananas",
      "Litchi",
      "Carotte",
      "Tomate",
      "Goyave",
      "Courgette",
      "Raisin",
      "Kiwi",
    ];
  } else if (alt === 2) {
    ctg = "Animaux";
    wordList = [
      "Chien",
      "Chat",
      "Dauphin",
      "Crocodile",
      "Girafe",
      "Éléphant",
      "Kangourou",
      "Renard",
      "Lion",
      "Hibou",
      "Tortue",
      "Cheval",
    ];
  } else if (alt === 3) {
    ctg = "Métiers";
    wordList = [
      "Médecin",
      "Infirmier",
      "Pompier",
      "Avocat",
      "Enseignant",
      "Ingénieur",
      "Architecte",
      "Pilote",
    ];
  } else if (alt === 4) {
    ctg = "Objets courants";
    wordList = [
      "Clavier",
      "Téléphone",
      "Ordinateur",
      "Lunettes",
      "Chaise",
      "Bureau",
      "Cahier",
      "Montre",
      "Sac",
      "Bouteille",
    ];
  } else if (alt === 5) {
    ctg = "Nature";
    wordList = [
      "Montagne",
      "Océan",
      "Désert",
      "Volcan",
      "Plage",
      "Étoile",
      "Fleur",
      "Soleil",
    ];
  }
}

wordGestion(); //appelle de la foncton wordGestion de mots
wordSelected = wordList[Math.floor(Math.random() * wordList.length)]; //séléction d'un mot dans le tableau de mots
wordSelected = wordSelected.toString().toLowerCase().trim();
wordSelected = normalizeText(wordSelected);

let table = new Array(wordSelected.length).fill(" - "); //renplisage du tableau des tirets
tentatives = Math.floor(wordSelected.length / 2) + 1;//Calcul du nombre de tentative qu'aura le joueur selon le mot séléctionner
coffre = tentatives;//stockage du nombre de tentative initiale dans un coffre pour une utilisation ultérieur

//Default display
for (let i = 0; i < table.length; i++) {
  word.innerText += table[i];
}
tentativesDisplay.innerText = tentatives; //affichage du nombre de tentatives qu'a le joueur
cat.innerText = cat.innerText = `Indication: ${ctg}`;
messageBox.innerHTML = message;
messageBox.classList.add(clr);
played.innerText = gamePlayed;
won.innerText = gameWon;
lost.innerText = gameLost;
sucess.innerText = `0%`;

gameSecond = wordSelected.length * 30;
//Création de la fonction qui va gérer le comptage du nombre de seconde

function timeCompteur(){
  gameSecond--;
  p.textContent = `Temps Restant: ${gameSecond}s`;
  if (gameSecond  <= 0) {
    gameZone.classList.add("hide");
    replay.classList.remove("hide");
    message = "Temps écoulé \nLa bonne réponse était: " + wordSelected;
    messageBox.innerText = message;
    gameLost = Number(gameLost) + 1;
    p.textContent = "";
    song("sound-folder/Lose.mp3");
  }
  if(gameSecond === 0 || tentatives === 0 || !found){
    clearInterval(ID);
    ID = null;
  }
}
let ID = setInterval(timeCompteur, 1000);//la fonction timeCompteur doit s'exécuter à chaque seconde
timeCompteur();//appelle de la fonction timeCompteur


letterInput.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    submit.click();
  }
})
//manipulation au click du bouton
submit.addEventListener("click", () => {
  letterInput.value = letterInput.value.replace(/[^a-zA-Z]/g, ""); // Permet uniquement les lettres
  letterGuessed = letterInput.value.trim().toString().toLowerCase(); //Traitement de la valeur entrée par le joueur
  T = letterGuessed.length; //Récupération de la longeur de  la valeur entrée
  clr = "blue";
  letterGuessed = normalizeText(letterGuessed);//normalisation de la lettre deviné 
  
  
  if (letterGuessed) {//Si une lettre à bien été deviner
    if (T === 1) {//vérifie si c'est une lettre qui est saisie par le joueur
      //affectation des valeurs par défaut si une lettre est entrée
      message = "Mauvaise lettre";//
      bool = false;
      clr = "red";
      for (let i = 0; i < wordSelected.length; i++) {
        if (letterGuessed === wordSelected[i]) {
          table[i] = `<span class = "correct">${letterGuessed}</span>`;
          message = "Bonne lettre";//
          bool = true;
          clr = "green";
          found = table.includes(" - ");
          song("sound-folder/correct.mp3");
        }
      }
    } else {
      message = "Vous devez saisir une seule lettre.";
    }
  } else {
    message = "Veuillez saisir une lettre.";
  }
  //Appel de la fonction d'affichage
  display();
});

function display() {
  word.textContent = "";
  for (let i = 0; i < table.length; i++) {
    word.innerHTML += table[i];
  }

  if (!bool) {
    song("sound-folder/error.mp3");
    tentatives--;
  }

  if (tentatives == 0) {
    gameZone.classList.add("hide");
    replay.classList.remove("hide");
    message = "Le nombre de tentatives à expirer.";
    message += "\nLa bonne réponse était: " + wordSelected;
    gameLost = Number(gameLost) + 1;
    song("sound-folder/Lose.mp3");
  }

  if (!found) {
    if (coffre && tentatives) {
      taux = (tentatives / coffre) * 100;
      score = `Taux de réussite: ${taux}%`;
      gameWon = Number(gameWon) + 1;
      song("sound-folder/Win.mp3");
    }

    gameZone.classList.add("hide");
    replay.classList.remove("hide");
    message = "Félicitation vous venez de remportez la partie.";
    message += `\nLa bonne réponse était: ${wordSelected}.\n ${score}`;
  }

  tentativesDisplay.innerText = tentatives;
  messageBox.innerHTML = message;
  messageBox.classList.remove("blue", "green", "red");
  messageBox.classList.add(clr);
}

replay.addEventListener("click", () => {
  wordGestion(); //appelle de la foncton wordGestion de mots
  wordSelected = wordList[Math.floor(Math.random() * wordList.length)]; //séléction d'un mot dans le tableau de mots
  wordSelected = wordSelected.toString().toLowerCase().trim();
  table = new Array(wordSelected.length).fill(" - "); //renplisage du tableau des tirets
  tentatives = Math.floor(wordSelected.length / 2) + 1;
  found = true;
  bool = true;
  score = "";
  coffre = tentatives;
  taux = 0;
  message = "<strong>Notice:</strong> Chère joueur notez que les caractères spéciaux et les caractère accentués ne sont pas prise en compte dans le jeux. Un mot comme \"étoile\" en  écrit sous cette forme: \"etoile\" .<strong> Nous vous souhaitons bonne chance!</strong>";
  clr = "blue";
  gameZone.classList.remove("hide");
  replay.classList.add("hide");
  letterInput.value = "";
  cat.innerText = `Indication: ${ctg}`;
  letterGuessed = "";
  T = 0;
  gameSecond = wordSelected.length * 30;//le joueur aura 20 seconde pour deviner une lettre
  gamePlayed = Number(gamePlayed) + 1;
  played.innerText = gamePlayed;
  sucess.innerText = `${Math.ceil((gameWon / gamePlayed)* 100)}%`;
  won.innerText = gameWon;
  lost.innerText = gameLost;
  ID = setInterval(timeCompteur, 1000);//la fonction timeCompteur doit s'exécuter à chaque seconde
  timeCompteur();//appelle de la fonction timeCompteur*/
  display(); // Réinitialise l'affichage
});

function song(aud) {
  const sound = new Audio();
  sound.src = aud;
  sound.play();
}