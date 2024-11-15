/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const division = document.getElementById('division');
const multiplication = document.getElementById('multiplication');
const subtraction = document.getElementById('subtrack');
const addition = document.getElementById('add');
const equal = document.getElementById('equals');

const display = document.getElementById('display');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

const updateDisplay = (value) => {
    display.innerText = value;
};

const handleNumberClick = (number) => {
    currentInput += number;
    updateDisplay(currentInput);
    console.log(currentInput);
};

const handleOperatorClick = (op) => {
    if (currentInput === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
    } else if (operator) {
        secondOperand = currentInput;
        firstOperand = calculateResult();
    }
    operator = op;
    currentInput = '';
};

const calculateResult = () => {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2;
    }
};

const handleEqualClick = () => {
    if (currentInput === '' || firstOperand === '' || operator === '') return;
    secondOperand = currentInput;
    const result = calculateResult();
    updateDisplay(result);
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
};

one.addEventListener('click', () => handleNumberClick('1'));
two.addEventListener('click', () => handleNumberClick('2'));
three.addEventListener('click', () => handleNumberClick('3'));
four.addEventListener('click', () => handleNumberClick('4'));
five.addEventListener('click', () => handleNumberClick('5'));
six.addEventListener('click', () => handleNumberClick('6'));
seven.addEventListener('click', () => handleNumberClick('7'));
eight.addEventListener('click', () => handleNumberClick('8'));
nine.addEventListener('click', () => handleNumberClick('9'));
zero.addEventListener('click', () => handleNumberClick('0'));

division.addEventListener('click', () => handleOperatorClick('/'));
multiplication.addEventListener('click', () => handleOperatorClick('*'));
subtraction.addEventListener('click', () => handleOperatorClick('-'));
addition.addEventListener('click', () => handleOperatorClick('+'));
equal.addEventListener('click', handleEqualClick);
