/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const SUBTRACK = "subtrack";
const MULTIPLICATION = "multiplication";
const DIVISION = "division";
const ADD = "add";
const EQUALS = "equals";

const operatorNames = [SUBTRACK, MULTIPLICATION, DIVISION, ADD, EQUALS];

const keyboardKeysOperators = {
  "-": SUBTRACK,
  "*": MULTIPLICATION,
  "/": DIVISION,
  "+": ADD,
  Enter: EQUALS,
};

// OPERATORS
let operatorFunctions = {
  subtrack: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => {
    if (b === 0) return "Divide by zero now allowed, re-enter number";
    return a / b;
  },
  add: (a, b) => a + b,
  equals: (a, b) => a,
};

const numberNames = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

///Main functionality
let data = {
  lastValue: "",
  lastOperator: "",
  currentValue: "",
  lastKeyPressed: "",
};

function printValues() {
  // console.log(data); // Uncomment for testing purposes only
}
function resetData() {
  data = {
    lastValue: "",
    lastOperator: "",
    currentValue: "",
    lastKeyPressed: "",
  };
}

//Display results on UI
const elementDisplay = document.getElementById("display");
function updateDisplay(val) {
  elementDisplay.innerText = val;
}

// KEYBOARD ENTRIES
addEventListener("keypress", (event) => {
  if (event.key.toLowerCase() == "c") {
    //delete using c
    resetData();
    updateDisplay(data.currentValue);

    printValues();
  } else if (!isNaN(event.key)) {
    numberPressed(event.key);
  } else if (keyboardKeysOperators[event.key]) {
    operationPressed(keyboardKeysOperators[event.key]);
  }
});

function numberPressed(number) {
  if (data.lastOperator === EQUALS) {
    data.currentValue = "";
    data.lastOperator = "";
  }
  data.currentValue = data.currentValue + number;
  elementDisplay.innerText = data.currentValue;

  data.lastKeyPressed = number;
  printValues();
}

function operationPressed(currentOperatorPressed) {
  printValues();

  ///the equals operator serves as clear after returning operation 
  if (currentOperatorPressed === EQUALS && data.lastOperator === EQUALS) {
    resetData();
    updateDisplay("");
    return;
  }

  ///Handle 1st number as negative
  let isSignChange = false;
  if (currentOperatorPressed === SUBTRACK) {
    if (data.lastOperator === EQUALS) {
      data.currentValue = "-";
      isSignChange = true;
      data.lastOperator = "";
    } else if (data.currentValue === "-") {
      data.currentValue = "";
      isSignChange = true;
    } else if (data.currentValue === "") {
      data.currentValue = "-";
      isSignChange = true;
    }

    updateDisplay(data.currentValue);
  }

  if (isSignChange) {
    data.lastKeyPressed = currentOperatorPressed;
    return;
  }

  //HANDLER OPERATOR CLICKED IN A ROW: update operator only unless it
  if (
    operatorNames.includes(data.lastKeyPressed) &&
    data.lastOperator !== EQUALS
  ) {
    data.lastOperator = currentOperatorPressed;
    data.lastKeyPressed = currentOperatorPressed;
    return;
  }

  calculateResult(currentOperatorPressed);
  data.lastKeyPressed = currentOperatorPressed;
  printValues();
}

function calculateResult(nextOperator) {
  let result;
  if (data.lastOperator === EQUALS) {
    data.lastOperator = ""; //avoid execute an operation
  }

  // if (lastOperator && lastValue && currentValue) {
  if (data.lastOperator && data.currentValue) {
    result = operatorFunctions[data.lastOperator](
      Number(data.lastValue),
      Number(data.currentValue)
    );

    if (isNaN(result)) {
      alert("Can't divide by zero!"); // division by zero
      return;
    }

    updateDisplay(result ?? "");
    if (nextOperator === EQUALS) {
      updateDisplay("=\t\t\t\t " + result);
    }

    if (data.lastOperator === EQUALS) {
      data.currentValue = data.lastValue; //for chaining operations with the answer after EQUALS
    } else {
      data.currentValue = "";
    }
  }

  data.lastValue = result ?? data.currentValue;
  data.currentValue = nextOperator == EQUALS ? data.lastValue : "";
  data.lastOperator = nextOperator;
}

// LISTENNERS on UI Buttons clicked
numberNames.forEach((id, index) => {
  document.getElementById(id).addEventListener("click", () => {
    numberPressed(index);
  });
});

operatorNames.forEach((idOperator) =>
  document.getElementById(idOperator).addEventListener("click", () => {
    operationPressed(idOperator);
  })
);
