/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

let result = document.getElementById("display");

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

let numbersButtons = [
   zeroButton,
   oneButton,
   twoButton,
   threeButton,
   fourButton,
   fiveButton,
   sixButton,
   sevenButton,
   eightButton,
   nineButton,
];

numbersButtons.forEach((numberButton) => {
   numberButton.addEventListener("click", () => {
      if (Number(result.innerText) === 0) {
         result.innerText = Number(numberButton.innerText);
      } else {
         result.innerText += Number(numberButton.innerText);
      }
   });
});

const operationBtns = document.querySelectorAll(".operation-btn");

addition = () => {};

substraction = () => {};

multiplication = () => {};

divison = () => {};
