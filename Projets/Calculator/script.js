//Sélection des éléments du DOM
const digitTouch = document.querySelectorAll(".dg");
const result = document.getElementById("rs");

const Equal = document.getElementById("equal");
const Reset = document.getElementById("reset");
const X = document.getElementById("sup");

const Zero = document.getElementById("d0");
const One = document.getElementById("d1");
const Two = document.getElementById("d2");
const Three = document.getElementById("d3");
const Four = document.getElementById("d4");
const Five = document.getElementById("d5");
const Six = document.getElementById("d6");
const Seven = document.getElementById("d7");
const Eight = document.getElementById("d8");
const Nine = document.getElementById("d9");

const Plus = document.getElementById("dp");
const Minus = document.getElementById("dm");
const Mltp = document.getElementById("df");
const Div = document.getElementById("dd");

digitTouch.forEach((element) => {
  element.addEventListener("click", () => {
    if (result.value == 0) {
      result.value = element.textContent || 0;
    } else {
      result.value += element.textContent || 0;
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    Equal.click();
  }
  if (e.key === "0") {
    Zero.click();
  }
  if (e.key === "1") {
    One.click();
  }
  if (e.key === "2") {
    Two.click();
  }
  if (e.key === "3") {
    Three.click();
  }
  if (e.key === "4") {
    Four.click();
  }
  if (e.key === "5") {
    Five.click();
  }
  if (e.key === "6") {
    Six.click();
  }
  if (e.key === "7") {
    Seven.click();
  }
  if (e.key === "8") {
    Eight.click();
  }
  if (e.key === "9") {
    Nine.click();
  }
  if (e.key === "+") {
    Plus.click();
  }
  if (e.key === "-") {
    Minus.click();
  }
  if (e.key === "*") {
    Mltp.click();
  }
  if (e.key === "/") {
    Div.click();
  }
  if (e.key === "Backspace") {
    e.preventDefault();
    X.click();
  }
});

function evaluateExpression(expression) {
  try {
    return Function(`"use strict"; return (${expression})`)();
  } catch (e) {
    return "Error";
  }
}

Equal.addEventListener("click", () => {
    try{
        result.value = evaluateExpression(result.value);
    }catch{
        result.value = "Error";
    }
});

X.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});

Reset.addEventListener("click", () => {
  result.value = 0;
});