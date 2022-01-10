/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

//Numbers
let firstNumber = "";
let secondNumber = "";

//Arithmetic operator
let operator = "";
let action = true;

//Show value
let showValue = document.querySelector("#display");

//Buttons with numbers
document.querySelector("#zero").addEventListener("click", setNumber);
document.querySelector("#one").addEventListener("click", setNumber);
document.querySelector("#two").addEventListener("click", setNumber);
document.querySelector("#three").addEventListener("click", setNumber);
document.querySelector("#four").addEventListener("click", setNumber);
document.querySelector("#five").addEventListener("click", setNumber);
document.querySelector("#six").addEventListener("click", setNumber);
document.querySelector("#seven").addEventListener("click", setNumber);
document.querySelector("#eight").addEventListener("click", setNumber);
document.querySelector("#nine").addEventListener("click", setNumber);

//Buttons with arithmetic operators
document.querySelector("#add").addEventListener("click", setOperator);
document.querySelector("#subtrack").addEventListener("click", setOperator);
document
  .querySelector("#multiplication")
  .addEventListener("click", setOperator);
document.querySelector("#division").addEventListener("click", setOperator);
document.querySelector("#equals").addEventListener("click", setOperator);

function setNumber() {
  if (action) {
    operator = "";
    firstNumber += this.innerText;
    showValue.innerText = firstNumber;
  }
  if (!action) {
    secondNumber += this.innerText;
    showValue.innerText = `${firstNumber} ${operator} ${secondNumber}`;
  }
}

function setOperator() {
  if (this.innerText === "=") {
    action = true;
    executeOperation();
  }

  if (operator === "") {
    operator = this.innerText;
    action = false;
  }
}

function clearVariables() {
  firstNumber = "";
  secondNumber = "";
}

const executeOperation = () => {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
      break;
    case "-":
      result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
      break;
    case "X":
      if (parseInt(secondNumber, 10) === 0) {
        result = 0;
      } else {
        result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
      }
      break;
    case "/":
      result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
      break;
  }

  if (operator === "/") {
    if (parseInt(secondNumber, 10) === 0) {
      showValue.innerText = "Error";
    }
  } else {
    showValue.innerText = result;
  }

  clearVariables();
};
