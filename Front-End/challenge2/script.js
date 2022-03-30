/*
TO-DO:
- Modify this file only
- The calculator should be completely functional
*/

const calculatorApp = document.querySelectorAll('button');
const display = document.getElementById('display');
let result = '';
let operand = '';

const appendDigitToOperand = (button) => {
  operand += button;
  display.innerText = eval(operand);
};

const updateResult = () => {
  display.innerText = (eval(result.slice(0, result.length - 1)));
};

const displayFinalResult = () => {
  result += operand;
  if (!isFinite(eval(result))) {
    display.innerText = 'Error';
  } else {
    display.innerText = eval(result);
  }
  operand = '0';
  result = '';
};

calculatorApp.forEach((x) => x.addEventListener('click', (e) => {
  const button = e.target.innerText;
  switch (button) {
    case '=':
      displayFinalResult();
      break;
    case '+':
    case '-':
      result += operand + button;
      updateResult();
      operand = '';
      break;
    case '/':
      result += 0 + operand + button;
      operand = '';
      break;
    case 'X':
      result += `${0} ${operand}*`;
      operand = '';
      break;
    default:
      appendDigitToOperand(button);
      break;
  }
}));

// fix: equals after operator
// todo: function composition to replace switch execution statements
