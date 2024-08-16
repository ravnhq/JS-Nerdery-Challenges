/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
let operation = '';
let currentValue = '0';
let ArrayValue = [];
let operatorA = 0;
let operatorB = 0;
let result = 0;
//buttons
const buttonZero = document.querySelector('#zero');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');
const buttonDivision = document.querySelector('#division');
const buttonMultiplication = document.querySelector('#multiplication');
const buttonSubtrack = document.querySelector('#subtrack');
const buttonEquals = document.querySelector('#equals');
const buttonAdd = document.querySelector('#add');
//Display
const display = document.querySelector('#display');

//events
buttonZero.addEventListener('click', () => {
  currentValue = '0';
  displayHandler(currentValue);
});

buttonOne.addEventListener('click', () => {
  currentValue = '1';
  displayHandler(currentValue);
});
buttonTwo.addEventListener('click', () => {
  currentValue = '2';
  displayHandler(currentValue);
});
buttonThree.addEventListener('click', () => {
  currentValue = '3';
  displayHandler(currentValue);
});
buttonFour.addEventListener('click', () => {
  currentValue = '4';
  displayHandler(currentValue);
});
buttonFive.addEventListener('click', () => {
  currentValue = '5';
  displayHandler(currentValue);
});
buttonSix.addEventListener('click', () => {
  currentValue = '6';
  displayHandler(currentValue);
});
buttonSeven.addEventListener('click', () => {
  currentValue = '7';
  displayHandler(currentValue);
});
buttonEight.addEventListener('click', () => {
  currentValue = '8';
  displayHandler(currentValue);
});
buttonNine.addEventListener('click', () => {
  currentValue = '9';
  displayHandler(currentValue);
});

buttonDivision.addEventListener('click', () => {
  if (operatorA != 0) {
    operatorB = ArrayValue.join('');
    operationHandler(operation);
    ArrayValue = [];
  } else {
    display.innerHTML = '';
    operatorA = ArrayValue.join('');
    console.log(parseFloat(operatorA));
    ArrayValue = [];
  }
  operation = '/';
});

buttonMultiplication.addEventListener('click', () => {
  if (operatorA != 0) {
    operatorB = ArrayValue.join('');
    operationHandler(operation);
    ArrayValue = [];
  } else {
    display.innerHTML = '';
    operatorA = ArrayValue.join('');
    console.log(parseFloat(operatorA));
    ArrayValue = [];
  }
  operation = '*';
});

buttonSubtrack.addEventListener('click', () => {
  if (operatorA != 0) {
    operatorB = ArrayValue.join('');
    operationHandler(operation);
    ArrayValue = [];
  } else {
    if (ArrayValue.length != 0) {
      display.innerHTML = '';
      operatorA = ArrayValue.join('');
      console.log(parseFloat(operatorA));
      ArrayValue = [];
    } else {
      currentValue = '-';
      ArrayValue.push(currentValue);
    }
  }
  operation = '-';
});
buttonAdd.addEventListener('click', () => {
  if (operatorA != 0 && operatorB == 0) {
    operatorB = ArrayValue.join('');
    operationHandler(operation);
    ArrayValue = [];
  } else {
    if (ArrayValue.length != 0) {
      display.innerHTML = '';
      operatorA = ArrayValue.join('');
      ArrayValue = [];
    } else {
      currentValue = '+';
      ArrayValue.push(currentValue);
    }
  }

  operation = '+';
});
buttonEquals.addEventListener('click', () => {
  if (operation != '') {
    if (ArrayValue.length != 0) {
      display.innerHTML = '';
      operatorB = ArrayValue.join('');
      operationHandler(operation);
      operation = '';
      console.log(parseFloat(operatorA), parseFloat(operatorB));
    } else {
      operation = '';
      operationHandler(operation);
    }
  } else {
    operatorA = 0;
    operatorB = 0;
    ArrayValue = [];
    display.innerHTML = '0';
  }
});
const clearHandler = () => {};

//functions

const displayHandler = (currentValue) => {
  display.innerHTML = '';
  ArrayValue.push(currentValue);
  ArrayValue.forEach((item) => (display.innerHTML += item));
};

const operationHandler = (operation) => {
  switch (operation) {
    case '+':
      result = parseFloat(operatorA) + parseFloat(operatorB);

      break;
    case '-':
      result = parseFloat(operatorA) - parseFloat(operatorB);
      break;
    case '*':
      result = parseFloat(operatorA) * parseFloat(operatorB);
      break;
    case '/':
      result = parseFloat(operatorA) / parseFloat(operatorB);
      break;
    default:
      result = operatorA;
      break;
  }
  display.innerHTML = result;
  operatorA = result;
  operatorB = 0;
};
