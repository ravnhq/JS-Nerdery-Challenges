/*
TO-DO:
- Modify this file only
- The calculator should be completely functional
*/

/*
How to use:
(C) key or Clear: Since there is no clear button, the equals operator serves
as clear instead of its usual repeat last operation functionality.
*/

const calculatorApp = document.querySelectorAll('button');
const display = document.getElementById('display');
let result = '';
let operand = '';

const appendDigitToOperand = (button) => {
    operand += button;
    display.innerText = eval(operand);
};

const updateDisplay = () => {
    display.innerText = (eval(result.slice(0, result.length - 1)));
};

const updateResult = (button) => {
    result += operand + button;
};

const clearResult = () => {
    operand = '0';
    result = '';
};

const clearOperand = () => {
    operand = '';
};

const displayFinalResult = () => {
    try {
        if (!isFinite(eval(result))) {
            display.innerText = 'Error';
        } else {
            display.innerText = eval(result);
        }
    } catch (error) {
        updateDisplay();
    }
    clearResult();
};

calculatorApp.forEach((x) => x.addEventListener('click', (e) => {
    const button = e.target.innerText;
    switch (button) {
    case '=':
        result += operand;
        displayFinalResult();
        break;
    case '+':
    case '-':
    case '/':
        updateResult(button);
        updateDisplay();
        clearOperand();
        break;
    case 'X':
        result += `${operand}*`;
        updateDisplay();
        clearOperand();
        break;
    default:
        appendDigitToOperand(button);
        break;
    }
}));
