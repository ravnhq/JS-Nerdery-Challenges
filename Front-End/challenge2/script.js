/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
//declaration of html variables
let numbers = document.querySelectorAll("button:not(.operation-btn)");
let functions = document.querySelectorAll(".operation-btn");
let result = document.querySelector("#display");
let ce = document.querySelector("#equals");

//declaration of calculator variables
let firstOperand = "";
let secondOperand = "";
let savedFirstOperand = "";
let selectOperation = null;

//functions
//function clear all the data
const clear = () => {
  firstOperand = "";
  secondOperand = "";
  savedFirstOperand = "";
  selectOperation = null;
};
//function handling the numbers
const handleNumbers = (number) => {
  if (firstOperand === "error") {
    clear();
  }
  firstOperand = firstOperand.toString() + number.toString();
};
//function assign values and determine if make an operation
const operations = (operation) => {
  if (operation === null) return;
  savedFirstOperand = firstOperand;
  firstOperand = "";
  if (
    secondOperand !== "" ||
    selectOperation === "X" ||
    selectOperation === "/" ||
    operation === "="
  ) {
    compute();
  }
  if (operation !== "=") selectOperation = operation;
  secondOperand = savedFirstOperand;
};
//function compute the data
const compute = () => {
  let calculate = 0;
  let current = Number(savedFirstOperand);
  console.log("current", current);
  let previous = Number(secondOperand);
  console.log("previous", previous);
  switch (selectOperation) {
    case "+":
      calculate = previous + current;
      break;
    case "-":
      calculate = previous - current;
      break;
    case "X":
      calculate = previous * current;
      break;
    case "/":
      if (current === 0) {
        firstOperand = "error";
        return;
      }
      calculate = previous / current;
      break;
    case "=":
      compute();
    default:
      return;
  }
  firstOperand = calculate.toString();
  selectOperation = null;
  secondOperand = "";
};
//function update the value on screen
const update = () => {
  result.innerText = firstOperand;
};

//event listener for the operations
functions.forEach((myfunction) =>
  myfunction.addEventListener("click", () => {
    operations(myfunction.innerText);
    update();
  })
);

//event listener for the numbers
numbers.forEach((number) =>
  number.addEventListener("click", () => {
    handleNumbers(number.innerText);
    update();
  })
);

//event listener for the clear operation
ce.addEventListener("dblclick", clear);
