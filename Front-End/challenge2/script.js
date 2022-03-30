/*
TO-DO:
- Modify this file only
- The calculator should be completely functional
*/

const calculatorApp = document.querySelectorAll('button');
// const addButton = document.getElementById('add');
// const subtractButton = document.getElementById('subtrack');
// const multiplyButton = document.getElementById('multiplication');
// const divideButton = document.getElementById('division');
// const equalsButton = document.getElementById('equals');
const display = document.getElementById('display');
let result = '';
let operand = '';

const appendDigitToOperand = (button) => {
  operand += button;
  display.innerText = eval(operand);
};

const displayResult = () => {
  result += operand;
  if (eval(result === (Infinity || -Infinity))) {
      display.innerText = 'Error';
  }
  display.innerText = eval(result);
  operand = '0';
  result = '';
};

calculatorApp.forEach((x) => x.addEventListener('click', (e) => {
  const button = e.target.innerText;
  switch (button) {
    case '=':
      displayResult();
      break;
    case '+':
    case '-':
    case '/':
      result += operand + button;
      operand = '';
      break;
    case 'X':
      result += operand + '*';
      operand = '';
      break;
    default:
      appendDigitToOperand(button);
      break;
  }
}));
