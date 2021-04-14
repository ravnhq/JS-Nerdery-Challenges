/*
TO-DO:
- Modify this file only
- The calculator should be completely functional
*/

let firstNumber = '0';
let secondNumber = '';
let operator = '';
let readyToOperate = false;
let equalsExecuted = false;

function operate(number1, number2) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result = 0;
    switch (operator) {
        case 'division': {
            result = num1 / num2;
            break;
        }
        case 'multiplication': {
            result = num1 * num2;
            break;
        }
        case 'subtrack': {
            result = num1 - num2;
            break;
        }
        case 'add': {
            result = num1 + num2;
            break;
        }
        default:
            result = num1;
    }
    return result;
}

function setDisplay(n) {
    let display = document.getElementById('display');
    display.textContent = n;
}

function getDisplay() {
    let display = document.getElementById('display');
    return display.textContent;
}

window.addEventListener('click', function (event) {
    let result = 0;
    if (event.target.type === 'submit') {
        const btn = document.getElementById(event.target.id);
        if (btn.classList.contains('operation-btn')) {
            if (btn.id === 'clear') {
                firstNumber = '0';
                secondNumber = '';
                operator = '';
                readyToOperate = false;
                equalsExecuted = false;
                setDisplay(firstNumber);
            }
            else if (btn.id === 'equals') {
                result = operate(firstNumber, secondNumber);
                setDisplay(result);
                firstNumber = result;
                secondNumber = result;
                operator = '';
                readyToOperate = false;
                equalsExecuted = true;
            }
            else {
                if (readyToOperate) {
                    result = operate(firstNumber, secondNumber);
                    setDisplay(result);
                    firstNumber = result;
                    secondNumber = '';
                }
                operator = btn.id;
            }
        }
        else if (operator === '') {
            if (equalsExecuted)
                firstNumber = btn.textContent;
            else
                firstNumber += btn.textContent;
            equalsExecuted = false;
            setDisplay(parseInt(firstNumber));
        }
        else if (operator !== 'equals') {
            if (secondNumber.length > 0)
                secondNumber += btn.textContent;
            else
                secondNumber = btn.textContent;
            readyToOperate = true;
            equalsExecuted = false;
            setDisplay(parseInt(secondNumber));
        }
    }
});