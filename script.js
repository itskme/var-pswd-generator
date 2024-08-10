console.clear();

const sliderProps = {
  fill: "limegreen",
  background: "rgba(255, 255, 255, 0.09)",
};

const slider = document.querySelector(".range__slider");


const sliderValue = document.querySelector(".length__title");


slider.querySelector("input").addEventListener("input", (event) => {
  sliderValue.setAttribute("data-length", event.target.value);
  applyFill(event.target);
});


applyFill(slider.querySelector("input"));


function applyFill(slider) {
  const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage + 0.1}%)`;
  slider.style.background = bg;
  sliderValue.setAttribute("data-length", slider.value);
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};


function secureMathRandom() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '~!@#%^&*()_+{}":?<>;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}




const resultEl = document.getElementById("result");

const lengthEl = document.getElementById("slider");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const generateBtn = document.getElementById("generate");

const resultContainer = document.querySelector(".result");

const copyInfo = document.querySelector(".result__info.right");

const copiedInfo = document.querySelector(".result__info.left");

let generatedPassword = false;

let resultContainerBound = {
  left: resultContainer.getBoundingClientRect().left,
  top: resultContainer.getBoundingClientRect().top,
};
