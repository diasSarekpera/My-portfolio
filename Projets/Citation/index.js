//Sibler les sélecteurs qux quelle on doit ajouter un évèement
const buttonNew  = document.querySelector("button");
const citationContainer = document.querySelector("p");

let alt = 0;

//Ajout de l'évènemanet au click sur la boutton
buttonNew.addEventListener("click", () => {
    // Réinitialisation du tableau
    if (citationRestante.length === 0){
        citationRestante = [""];
        citationRestante = citation;
    }
    alt = Math.floor(Math.random() * citationRestante.length);//Une valeur aléatoires
    citationContainer.innerText = citationRestante[alt];//displaying
    citationRestante.splice(alt, 1); //suppression de la cition déjà afficher

    buttonNew.classList.toggle("btnClick");
});