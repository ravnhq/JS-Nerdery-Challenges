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

for (let i = 0; i < numbersButtons.length; i++) {
   numbersButtons[i].addEventListener("click", () => {
      result.innerText = Number(numbersButtons[i].innerText);
   });
}

const operationBtns = document.getElementsByClassName("operation-btn");
console.log(operationBtns.length);

addition = () => {};

substraction = () => {};

multiplication = () => {};

divison = () => {};
