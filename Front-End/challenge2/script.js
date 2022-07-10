//creates an array from 0 to 9
const NUMBERS_FROM_0_TO_9 = [...Array(10).keys()];
// global variables
let equalClicks = 0;
let lastWasEqual = false;

const display = document.getElementById("display");
display.innerHTML = "";
const buttons = document.querySelectorAll("button");

const operationButtons = [];
const numberButtons = [];
let equalSymbol;
const operationsArray = [];

// setting $operationButtons and $numberButtons with their respective buttons
buttons.forEach((elem) => {
  if (NUMBERS_FROM_0_TO_9.includes(parseInt(elem.innerHTML)))
    numberButtons.push(elem);
  else {
    if (elem.innerHTML === "=") equalSymbol = elem;
    else {
      operationButtons.push(elem);
      operationsArray.push(elem.innerHTML);
    }
  }
});

//giving functionality to the buttons
numberButtons.forEach((elem) =>
  elem.addEventListener("click", () => {
    //if contains Error => reset display
    if (display.innerHTML.includes("Error") || lastWasEqual)
      display.innerHTML = "";
    lastWasEqual = false;
    //add to display
    display.innerHTML += elem.innerHTML;
  })
);

equalSymbol.addEventListener("click", () => {
  equalClicks++;
  // if 2nd click => delete display
  if (equalClicks > 1 && lastWasEqual) {
    display.innerHTML = "";
    equalClicks = 0;
    // if display is truthy => solve
  } else if (display.innerHTML)
    display.innerHTML = solveEcuation(display.innerHTML);
  lastWasEqual = true;
});
operationButtons.forEach((elem) =>
  elem.addEventListener("click", () => {
    //if contains Error or last was equal => reset display
    if (
      display.innerHTML.includes("Error") ||
      (lastWasEqual && elem.innerHTML === "=")
    )
      display.innerHTML = "";
    lastWasEqual = false;
    //if contains more than two numbers => resolve
    if (display.innerHTML.split(/\+|\-|\*|X|\//).filter((n) => n).length === 2)
      display.innerHTML = solveEcuation(display.innerHTML);

    //functional code not used to meet the requirements of the project
    // if (
    //   //if last index is + or - and new input same => replace
    //   isOperationSymbol(display.innerHTML.at(-1)) === 1 &&
    //   isOperationSymbol(elem.innerHTML) === 1
    // ) {
    //   //if last input was symbol => replace it with new symbol
    //   display.innerHTML = display.innerHTML.slice(0, -1);
    // }

    //if last index is symbol and new is * or / => delete
    if (
      isOperationSymbol(display.innerHTML.at(-1)) &&
      isOperationSymbol(elem.innerHTML) === 2
    ) {
      for (let i = display.innerHTML.length - 1; i >= 0; i--) {
        if (isOperationSymbol(display.innerHTML[i])) {
          display.innerHTML = display.innerHTML.slice(0, -1);
        } else break;
      }
      // display.innerHTML = display.innerHTML.slice(0, -1);
      // if new last is not operation => push elem to string
      if (!isOperationSymbol(display.innerHTML.at(-1)))
        display.innerHTML += elem.innerHTML;
      // if it is a symbol=>replace
      else {
        display.innerHTML = display.innerHTML.slice(0, -1);
        display.innerHTML += elem.innerHTML;
      }
    } else {
      display.innerHTML += elem.innerHTML;
    }
  })
);

// solves ecuation duh lol
function solveEcuation(ecuation) {
  let solved;
  let lastIsSymbol = operationsArray.some((elem) => {
    if (ecuation.at(-1) === elem) return true;
    return false;
  });
  ecuation = ecuation.replace("X", "*"); //Should I use an if statement for this?
  //- Division and multiplication with no previous operands will assume operand of zero and return zero:
  if (isOperationSymbol(ecuation[0]) === 2) {
    ecuation = "0" + ecuation;
  }
  // - Incomplete operations will ignore the last operator and display final result. Note: This is also the only possible error handled
  if (lastIsSymbol) {
    console.log("lastIsSymbol:" + lastIsSymbol);
    ecuation = ecuation.slice(0, -1);
  }
  //- Division by zero will return Error
  if (ecuation.includes("/")) {
    const ecuationArray = ecuation.split("/");
    if (parseInt(ecuationArray[1]) === 0) return "Error";
  }

  try {
    solved = math.evaluate(ecuation);
  } catch (error) {
    alert("Syntax Error: Impossible to resolve: " + ecuation);
    return null;
  }
  return solved;
}

// function that returns 1 if + or - and 2 if * or /
function isOperationSymbol(char) {
  if (char === "+" || char === "-") return 1;
  if (char === "X" || char === "*" || char === "/") return 2;
  return 0;
}
