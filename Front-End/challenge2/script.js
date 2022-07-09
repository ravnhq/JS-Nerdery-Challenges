// import { evaluate } from "mathjs";
let math = require("mathjs");
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
// dom selection of all buttons and display
const display = document.getElementById("display");
const divisionButton = document.getElementById("division");
const multiplicationButton = document.getElementById("multiplication");
const subtrackButton = document.getElementById("subtrack");
const addButton = document.getElementById("add");
const equalsButtons = document.getElementById("equals");
const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

// event listeners for all buttons
// divisionButton.addEventListener("click");
// multiplicationButton.addEventListener("click");
// subtrackButton.addEventListener("click");
// addButton.addEventListener("click");
// equalsButtons.addEventListener("click");

// buttons with numbers just append the number pressed to the display
zeroButton.addEventListener("click", () => {
  display.innerHTML += 0;
});
oneButton.addEventListener("click", () => {
  display.innerHTML += 1;
});
twoButton.addEventListener("click", () => {
  display.innerHTML += 2;
});
threeButton.addEventListener("click", () => {
  display.innerHTML += 3;
});
fourButton.addEventListener("click", () => {
  display.innerHTML += 4;
});
fiveButton.addEventListener("click", () => {
  display.innerHTML += 5;
});
sixButton.addEventListener("click", () => {
  display.innerHTML += 6;
});
sevenButton.addEventListener("click", () => {
  display.innerHTML += 7;
});
eightButton.addEventListener("click", () => {
  display.innerHTML += 8;
});
nineButton.addEventListener("click", () => {
  display.innerHTML += 9;
});

function addSign(sign) {
  console.log(math.evaluate("2+2+2-7"));
}
addSign();
