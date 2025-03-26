//Selection des élément du DOM
const dotsLine1 = document.querySelectorAll(".dot_r1");
const dotsLine2 = document.querySelectorAll(".dot_r2");
const dotsLine3 = document.querySelectorAll(".dot_r3");
const dotsLine4 = document.querySelectorAll(".dot_r4");
const dotsLine5 = document.querySelectorAll(".dot_r5");

//variables
let Line1 = dotsLine1.length;
let Line2 = dotsLine2.length;
let Line3 = dotsLine3.length;
let Line4 = dotsLine4.length;
let Line5 = dotsLine5.length;
let gain = 0;
let alt1 = 0;
let alt2 = 0;
let alt3 = 0;
let alt4 = 0;
let alt5 = 0;
let ID1 = null;
let ID2 = null;
let nbrPlay = 1;
let t = 0;
let Taux = 0;

$(document).ready(function () {
  $("#replay").hide();
  $("#done").hide();
  $("#dotting").hide();

  $("#play").click(function () {
    $(this).hide();
    $("#dotting").show();
    gain = 0;
    boxLight();
    ID1 = setTimeout(rm, 100);
    ID2 = setTimeout(clickinkOnDot, 102);
  });

  $("#done").click(function () {
    $(this).hide();
    $("#replay").show();
    clearTimeout(ID1);
    clearTimeout(ID2);
    ID1 = null;
    ID2 = null;
    verify();
  });

  $("#replay").click(function () {
    $(this).hide();
    $("#dotting").show();
    nbrPlay++;
    gain = 0;
    rm();
    boxLight();
    ID1 = setTimeout(rm, 100);
    ID2 = setTimeout(clickinkOnDot, 102);
    $(".annonce").text("");
  });
});

function clc() {
  $(".level").text(`Performance: ${t}  W / ${nbrPlay}`);
}

function lost() {
  $(".annonce").text("Vous avez perdu");
  $(".annonce").css("color", "red");
  soundPlay("../sound-folder/error.mp3");
}

function won() {
  $(".annonce").text("Félicitation vous avez gagné");
  $(".annonce").css("color", "blue");
  soundPlay("../sound-folder/correct.mp3");
}

function soundPlay(path) {
  const sound = new Audio();
  sound.src = path;
  sound.play();
}

function boxLight() {
  alt1 = Math.floor(Math.random() * Line1);
  alt2 = Math.floor(Math.random() * Line2);
  alt3 = Math.floor(Math.random() * Line3);
  alt4 = Math.floor(Math.random() * Line4);
  alt5 = Math.floor(Math.random() * Line5);

  //Allumer les case
  dotsLine1[alt1].classList.add("clrAdd");
  dotsLine2[alt2].classList.add("clrAdd");
  dotsLine3[alt3].classList.add("clrAdd");
  dotsLine4[alt4].classList.add("clrAdd");
  dotsLine5[alt5].classList.add("clrAdd");
}

function rm() {
  dotsLine1.forEach((dot1) => {
    dot1.classList.remove("clrAdd");
  });

  dotsLine2.forEach((dot2) => {
    dot2.classList.remove("clrAdd");
  });

  dotsLine3.forEach((dot3) => {
    dot3.classList.remove("clrAdd");
  });

  dotsLine4.forEach((dot4) => {
    dot4.classList.remove("clrAdd");
  });

  dotsLine5.forEach((dot5) => {
    dot5.classList.remove("clrAdd");
  });
}

function clickinkOnDot() {
  dotsLine1.forEach((dot1) => {
    dot1.addEventListener("click", () => {
      dot1.classList.add("clrAdd");
    });
  });

  dotsLine2.forEach((dot2) => {
    dot2.addEventListener("click", () => {
      dot2.classList.add("clrAdd");
    });
  });

  dotsLine3.forEach((dot3) => {
    dot3.addEventListener("click", () => {
      dot3.classList.add("clrAdd");
    });
  });

  dotsLine4.forEach((dot4) => {
    dot4.addEventListener("click", () => {
      dot4.classList.add("clrAdd");
    });
  });

  dotsLine5.forEach((dot5) => {
    dot5.addEventListener("click", () => {
      dot5.classList.add("clrAdd");
    });
  });

  $("#done").show();
  $("#play").hide();
  $("#replay").hide();
  $("#dotting").hide();
}

function verify() {
  //Vérification sur la première ligne
  if (alt1 === 0) {
    if (dotsLine1[0].classList.contains("clrAdd")) {
      if (
        dotsLine1[1].classList.contains("clrAdd") ||
        dotsLine1[2].classList.contains("clrAdd") ||
        dotsLine1[3].classList.contains("clrAdd") ||
        dotsLine1[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt1 === 1) {
    if (dotsLine1[1].classList.contains("clrAdd")) {
      if (
        dotsLine1[0].classList.contains("clrAdd") ||
        dotsLine1[2].classList.contains("clrAdd") ||
        dotsLine1[3].classList.contains("clrAdd") ||
        dotsLine1[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt1 === 2) {
    if (dotsLine1[2].classList.contains("clrAdd")) {
      if (
        dotsLine1[0].classList.contains("clrAdd") ||
        dotsLine1[1].classList.contains("clrAdd") ||
        dotsLine1[3].classList.contains("clrAdd") ||
        dotsLine1[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt1 === 3) {
    if (dotsLine1[3].classList.contains("clrAdd")) {
      if (
        dotsLine1[0].classList.contains("clrAdd") ||
        dotsLine1[1].classList.contains("clrAdd") ||
        dotsLine1[2].classList.contains("clrAdd") ||
        dotsLine1[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt1 === 4) {
    if (dotsLine1[4].classList.contains("clrAdd")) {
      if (
        dotsLine1[0].classList.contains("clrAdd") ||
        dotsLine1[1].classList.contains("clrAdd") ||
        dotsLine1[2].classList.contains("clrAdd") ||
        dotsLine1[3].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  }

  //vérification sur la deuxième ligne
  if (alt2 === 0) {
    if (dotsLine2[0].classList.contains("clrAdd")) {
      if (
        dotsLine2[1].classList.contains("clrAdd") ||
        dotsLine2[2].classList.contains("clrAdd") ||
        dotsLine2[3].classList.contains("clrAdd") ||
        dotsLine2[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt2 === 1) {
    if (dotsLine2[1].classList.contains("clrAdd")) {
      if (
        dotsLine2[0].classList.contains("clrAdd") ||
        dotsLine2[2].classList.contains("clrAdd") ||
        dotsLine2[3].classList.contains("clrAdd") ||
        dotsLine2[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt2 === 2) {
    if (dotsLine2[2].classList.contains("clrAdd")) {
      if (
        dotsLine2[0].classList.contains("clrAdd") ||
        dotsLine2[1].classList.contains("clrAdd") ||
        dotsLine2[3].classList.contains("clrAdd") ||
        dotsLine2[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt2 === 3) {
    if (dotsLine2[3].classList.contains("clrAdd")) {
      if (
        dotsLine2[0].classList.contains("clrAdd") ||
        dotsLine2[1].classList.contains("clrAdd") ||
        dotsLine2[2].classList.contains("clrAdd") ||
        dotsLine2[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt2 === 4) {
    if (dotsLine2[4].classList.contains("clrAdd")) {
      if (
        dotsLine2[0].classList.contains("clrAdd") ||
        dotsLine2[1].classList.contains("clrAdd") ||
        dotsLine2[2].classList.contains("clrAdd") ||
        dotsLine2[3].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  }

  //vérification sur la troisième ligne
  if (alt3 === 0) {
    if (dotsLine3[0].classList.contains("clrAdd")) {
      if (
        dotsLine3[1].classList.contains("clrAdd") ||
        dotsLine3[2].classList.contains("clrAdd") ||
        dotsLine3[3].classList.contains("clrAdd") ||
        dotsLine3[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt3 === 1) {
    if (dotsLine1[1].classList.contains("clrAdd")) {
      if (
        dotsLine3[0].classList.contains("clrAdd") ||
        dotsLine3[2].classList.contains("clrAdd") ||
        dotsLine3[3].classList.contains("clrAdd") ||
        dotsLine3[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt3 === 2) {
    if (dotsLine3[2].classList.contains("clrAdd")) {
      if (
        dotsLine3[0].classList.contains("clrAdd") ||
        dotsLine3[1].classList.contains("clrAdd") ||
        dotsLine3[3].classList.contains("clrAdd") ||
        dotsLine3[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt3 === 3) {
    if (dotsLine3[3].classList.contains("clrAdd")) {
      if (
        dotsLine3[0].classList.contains("clrAdd") ||
        dotsLine3[1].classList.contains("clrAdd") ||
        dotsLine3[2].classList.contains("clrAdd") ||
        dotsLine3[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt3 === 4) {
    if (dotsLine3[4].classList.contains("clrAdd")) {
      if (
        dotsLine3[0].classList.contains("clrAdd") ||
        dotsLine3[1].classList.contains("clrAdd") ||
        dotsLine3[2].classList.contains("clrAdd") ||
        dotsLine3[3].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  }

  //vérifiction sur la quatrième ligne
  if (alt4 === 0) {
    if (dotsLine4[0].classList.contains("clrAdd")) {
      if (
        dotsLine4[1].classList.contains("clrAdd") ||
        dotsLine4[2].classList.contains("clrAdd") ||
        dotsLine4[3].classList.contains("clrAdd") ||
        dotsLine4[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt4 === 1) {
    if (dotsLine4[1].classList.contains("clrAdd")) {
      if (
        dotsLine4[0].classList.contains("clrAdd") ||
        dotsLine4[2].classList.contains("clrAdd") ||
        dotsLine4[3].classList.contains("clrAdd") ||
        dotsLine4[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt4 === 2) {
    if (dotsLine4[2].classList.contains("clrAdd")) {
      if (
        dotsLine4[0].classList.contains("clrAdd") ||
        dotsLine4[1].classList.contains("clrAdd") ||
        dotsLine4[3].classList.contains("clrAdd") ||
        dotsLine4[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt4 === 3) {
    if (dotsLine4[3].classList.contains("clrAdd")) {
      if (
        dotsLine4[0].classList.contains("clrAdd") ||
        dotsLine4[1].classList.contains("clrAdd") ||
        dotsLine4[2].classList.contains("clrAdd") ||
        dotsLine4[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt4 === 4) {
    if (dotsLine4[4].classList.contains("clrAdd")) {
      if (
        dotsLine4[0].classList.contains("clrAdd") ||
        dotsLine4[1].classList.contains("clrAdd") ||
        dotsLine4[2].classList.contains("clrAdd") ||
        dotsLine4[3].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  }

  //vérification sur la cinquème ligne
  if (alt5 === 0) {
    if (dotsLine5[0].classList.contains("clrAdd")) {
      if (
        dotsLine5[1].classList.contains("clrAdd") ||
        dotsLine5[2].classList.contains("clrAdd") ||
        dotsLine5[3].classList.contains("clrAdd") ||
        dotsLine5[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt5 === 1) {
    if (dotsLine5[1].classList.contains("clrAdd")) {
      if (
        dotsLine5[0].classList.contains("clrAdd") ||
        dotsLine5[2].classList.contains("clrAdd") ||
        dotsLine5[3].classList.contains("clrAdd") ||
        dotsLine5[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt5 === 2) {
    if (dotsLine5[2].classList.contains("clrAdd")) {
      if (
        dotsLine5[0].classList.contains("clrAdd") ||
        dotsLine5[1].classList.contains("clrAdd") ||
        dotsLine5[3].classList.contains("clrAdd") ||
        dotsLine5[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt5 === 3) {
    if (dotsLine5[3].classList.contains("clrAdd")) {
      if (
        dotsLine5[0].classList.contains("clrAdd") ||
        dotsLine5[1].classList.contains("clrAdd") ||
        dotsLine5[2].classList.contains("clrAdd") ||
        dotsLine5[4].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  } else if (alt5 === 4) {
    if (dotsLine5[4].classList.contains("clrAdd")) {
      if (
        dotsLine5[0].classList.contains("clrAdd") ||
        dotsLine5[1].classList.contains("clrAdd") ||
        dotsLine5[2].classList.contains("clrAdd") ||
        dotsLine5[3].classList.contains("clrAdd")
      ) {
        gain = 0;
      } else {
        gain++;
      }
    } else {
      gain = 0;
    }
  }

  if (gain === 5) {
    t++;
    clc();
    won();
  } else {
    clc();
    lost();
  }
}
