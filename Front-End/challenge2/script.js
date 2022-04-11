const calculatorApp = document.querySelectorAll('button');
const display = document.getElementById('display');
let result = '';
let operand = '';

const appendDigitToOperand = (button) => {
    operand += button;
    display.innerText = eval(operand);
};

const clearOperand = () => {
    operand = '';
};

const clearResult = () => {
    operand = '';
    result = '';
};

const clearDisplay = () => {
    display.innerText = eval('0');
};

const updateOperation = (button) => {
    if (button === '+' || button === '-') {
        if (!operand) {
            result += `${operand}${button}`;
        } else {
            result += `${operand}${button}`;
            display.innerText = (eval(result.slice(0, result.length - 1)));
            clearOperand();
        }
    }
    if (button === 'X') {
        if (!operand) {
            result += `0${operand}*`;
            display.innerText = (eval(result.slice(0, result.length - 1)));
        } else {
            result += `${operand}*`;
            display.innerText = (eval(result.slice(0, result.length - 1)));
            clearOperand();
        }
    }
    if (button === '/') {
        if (!operand) {
            result += `0${operand}/`;
            display.innerText = (eval(result.slice(0, result.length - 1)));
        } else {
            result += `${operand}/`;
            display.innerText = (eval(result.slice(0, result.length - 1)));
            clearOperand();
        }
    }
};

const displayFinalResult = () => {
    result += operand;
    try {
        if (result) {
            if (!isFinite(eval(result))) {
                display.innerText = 'Error';
            } else {
                display.innerText = eval(result);
            }
            clearResult();
        } else {
            clearDisplay();
        }
    } catch (error) {
        if (error.toString() === 'SyntaxError: Unexpected end of input') {
            display.innerText = (eval(result.slice(0, result.length - 1)));
            clearResult();
        }
    }
};

calculatorApp.forEach((x) => x.addEventListener('click', (e) => {
    const button = e.target.innerText;
    switch (button) {
    case '=':
        displayFinalResult();
        break;
    case '+':
    case '-':
    case 'X':
    case '/':
        updateOperation(button);
        break;
    default:
        appendDigitToOperand(button);
        break;
    }
}));
