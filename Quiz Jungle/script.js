$(document).ready(function () {
  Gestion(); //Appel de la fonction qui gère les question
  let Level = 0;
  let qL = Math.floor(Math.random() * Quiz[Level].length); //calcul d'une valeur aléatoir
  let score = 0; //initialisation du score à
  let AT = Quiz[Level].length; //stockage du nombre de question par défaut
  let count = 10;
  let sL = 0;
  
  

  function playing() {
    const sound = new Audio();
    sound.src = "sound-folder/play_sound2.mp3";
    sound.play();
  }

  function sound_play(path) {
    const df = new Audio();
    df.src = path;
    df.play();
  }

  function saveProgress(){
    localStorage.setItem("storageLevel", Level);
  }

  function loadProgress(){
    sL = localStorage.getItem("storageLevel");
    if(sL){
      sL = Number(sL);
      Level = sL;
    }else{
      Level = 0;
    }
  }
  
  //Html element hide default
  $("#gameZone").hide();
  $(".msgZone").hide();
  $("#home").hide();
  $("#description").hide();

  //Au click sur le bouton "en savoir plus" on affiche le bloc description"
  $("#plus").click(function () {
    $("#description").show();
    $("#plus").hide();
  });

  //Au click sur le bouton Play now
  $("#strt").click(function () {
    loadProgress();
    //On cache les element html dont on aura plus besoin une fois le bouton en savoir plus cliqué
    $("#plus").hide();
    $("#description").hide();
    $("#strt").hide();
    $("#home").show();
    $("#gameZone").show();
    $("#nbr-part").text(Level);

    //Au click sur le bouton home on actualise la page
    $("#home").click(function () {
      window.location.reload();
    });

    verify(); //Appel de la fonction qui traite l'afichage des question

    //Au click sur l'une des choix
    document.querySelectorAll(".choice").forEach((chx) => {
      chx.addEventListener("click", () => {
        if (Answers[Level].includes(chx.textContent)) {
          score++; //Incrémentation du score
        }
        qL = Math.floor(Math.random() * Quiz[Level].length); //Calcul d'une nouvelle valeur alétoire en fonction du nombre de question reste dans la table quiz
        verify(); //Appel de la fonction verify
      });
    });

    function verify() {
      //On vérifie les question sont finit dns la table quiz
      if (!(Quiz[Level].length !== 0 && Choice[Level].length !== 0)) {
        $("#gameZone").hide();
        $(".msgZone").show();

        score = Math.floor(score / AT)*100; //Calcul du taux de réussite

        //On vérifie si le joueur à bien répondu à toute les question en ayant les 100% de taus de réussite
        if (score !== 100) {
          sound_play("sound-folder/error.mp3");
          $(".next").hide();
          Rpl();
          $("#msg").text(
            `Niveau terminer ! Veuilez rejouer pour booster votre taux de réussite à 100% pour débloquer la prochine partie. Taux de réussite: ${score}%`
          );
        } else {
          Quiz.splice(Level, 1);
          Choice.splice(Level, 1);

          if (!(Quiz.length !== 0 && Choice.length !== 0)) {
            localStorage.clear();
            sound_play("sound-folder/correct.mp3");
            $("#gameZone").hide();
            $(".msgZone").show();
            $(".next").hide();
            $(".replay").hide();
            $("#msg").text(
              "Félicitation vous avez terminer tous les niveau. Vous êtes un GOAT en culture générale"
            );
          } else {
            sound_play("sound-folder/correct.mp3");
            $("#msg").text(
              `Niveau terminer avec succès ! vous pouvez accéder à la prochaine partie ou rejouer. Taux de réussite: ${score}%`
            );
            $(".next").show();
            Rpl(); //Appel de l fonction replay
            $(".next").click(function () {
              Gestion();
              Level++;
              saveProgress();
              AT = Quiz[Level].length;
              $("#gameZone").show();
              $(".msgZone").hide();
              $("#nbr-part").text(Level);
              score = 0;
              qL = Math.floor(Math.random() * Quiz[Level].length);
              $("#quiz").text(Quiz[Level][qL]);
              document.querySelectorAll(".choice")[0].textContent =
                Choice[Level][qL][0];
              document.querySelectorAll(".choice")[1].textContent =
                Choice[Level][qL][1];
              document.querySelectorAll(".choice")[2].textContent =
                Choice[Level][qL][2];
              Quiz[Level].splice(qL, 1);
              Choice[Level].splice(qL, 1);
            });
          }
        }

        function Rpl() {
          //Aux click sur le bouton Replay
          $(".replay").click(function () {
            Gestion();
            $("#gameZone").show();
            $(".msgZone").hide();
            $("#nbr-part").text(Level);
            score = 0;
            qL = Math.floor(Math.random() * Quiz[Level].length);
            $("#quiz").text(Quiz[Level][qL]);
            document.querySelectorAll(".choice")[0].textContent =
              Choice[Level][qL][0];
            document.querySelectorAll(".choice")[1].textContent =
              Choice[Level][qL][1];
            document.querySelectorAll(".choice")[2].textContent =
              Choice[Level][qL][2];
            Quiz[Level].splice(qL, 1);
            Choice[Level].splice(qL, 1);
          });
        }
      } else {
        //Si les question ne sont pas finit
        $("#quiz").text(Quiz[Level][qL]);
        document.querySelectorAll(".choice")[0].textContent =
          Choice[Level][qL][0];
        document.querySelectorAll(".choice")[1].textContent =
          Choice[Level][qL][1];
        document.querySelectorAll(".choice")[2].textContent =
          Choice[Level][qL][2];
        Quiz[Level].splice(qL, 1);
        Choice[Level].splice(qL, 1);
      }
    }

    setInterval(playing, 120000);
    playing();
  });
});
