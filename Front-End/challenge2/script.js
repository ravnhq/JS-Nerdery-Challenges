const display = document.getElementById('display')

const buttons = document.querySelectorAll('button')

buttons.forEach(btn => btn.addEventListener('click', handleCalculatorClick))

const digitregex = /\d/g

function updateDisplayValue(type, value) {
    const operators = ['+', '-', 'X', '/']
    switch (type) {
        case 'operation':
            if (operators.includes(display.textContent.charAt(display.textContent.length - 1)))
                break;
            else display.textContent += value
            break;
        case 'digit':
            if (display.textContent === '0') {
                display.textContent = value
            } else {
                display.textContent += value
            }
            break;
        default:
            getResult(display.textContent.replace(digitregex, ''))
            break;
    }
}

function handleCalculatorClick(event) {
    const btnContent = event.currentTarget.textContent
    updateDisplayValue(calculationType(btnContent), btnContent)
}

function calculationType(str) {
    if (str === '=') return 'result'

    return digitregex.test(str) ? 'digit' : 'operation'
}

function getResult(operator) {
    const operatorIndex = display.textContent.indexOf(operator)
    const a = parseInt(display.textContent.substring(0, operatorIndex))
    const b = parseInt(display.textContent.substring(operatorIndex + 1, display.textContent.length))
    let result = 0

    switch (operator) {
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b
            break;
        case '/':
            result = a / b
            break;
        default:
            result = a * b
            break;
    }

    display.textContent += `=${result}`
}
