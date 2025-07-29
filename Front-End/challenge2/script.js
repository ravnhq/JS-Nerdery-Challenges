const showResult = document.getElementById('display');
const numberButtons = document.querySelectorAll('button:not(.operation-btn)');
const operationButtons = document.querySelectorAll('.operation-btn');

const calculatorState = {
  input: '0',
  firstNumber: null,
  operator: null,
  shouldResetInput: true
};

const initCalculator = () => {
  setupEventListeners();
  updateResult();
}

const updateResult = () => {
  showResult.textContent = calculatorState.input;
}

const setupEventListeners = () => {
  numberButtons.forEach(btn => btn.addEventListener('click', () => handleNumberButtons(btn)));
  operationButtons.forEach(btn => btn.addEventListener('click', () => handleOperationButtons(btn)))
}

const handleNumberButtons = (btn) => {
    const { input, shouldResetInput } = calculatorState;

    const number = btn.textContent;
    
    if (shouldResetInput) {
      calculatorState.input = number;
      calculatorState.shouldResetInput = false;
    } else {
      calculatorState.input = input === '0' ? number : input + number;
    }

    updateResult();
}

const handleOperationButtons = (btn) => {
  const { input, firstNumber, operator, shouldResetInput } = calculatorState;
  const operation = btn.textContent;
  const inputValue = parseFloat(input);
  
  if (operation === '=' && firstNumber !== null && operator) {
      calculate(inputValue);
      calculatorState.operator = null;
      calculatorState.shouldResetInput = true;
      return;
  }

  //Process chained ops when new operator pressed with pending op
  if (operator && !shouldResetInput) {
    calculate(inputValue);
  }

  calculatorState.firstNumber = parseFloat(calculatorState.input); // Persists current input as first operand for operator chaining (e.g. 5 + 3 + 2)
  calculatorState.operator = operation; 
  calculatorState.shouldResetInput = true;
}


const calculate = (secondNumber) => {
  const { firstNumber, operator } = calculatorState;
  let result;
  
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber; 
      break;
    case '-': 
      result = firstNumber - secondNumber; 
      break;
    case 'X': 
      result = firstNumber * secondNumber;
      break;
    case '/': 
      if (secondNumber === 0) {
        alert("Error: Can't divide by zero");
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default: 
      return;
  }
  
  calculatorState.input = String(result);
  calculatorState.firstNumber = result;

  updateResult();
}


initCalculator();



