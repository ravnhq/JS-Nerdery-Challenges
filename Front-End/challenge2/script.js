const displayElement = document.getElementById('display');

const numbersIds = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'zero',
];

let operationStack = '';

const operatorsIds = {
  add: {
    order: 1,
    symbol: '+',
  },
  subtrack: {
    order: 1,
    symbol: '-',
  },
  multiplication: {
    order: 2,
    symbol: '*',
  },
  division: {
    order: 2,
    symbol: '/',
  },
};
const operatorSymbols = ['+', '-', '*', '/'];

let clearFlag = false;

const evalFunction = (expStack = '') => {
  if (expStack.length === 0) return 0;
  let result = 0;
  let operator = '';

  const expArray = expStack
    .split(/(\+|-|\*|\/)/)
    .filter((element) => element !== '');

  for (let i = 0; i < expArray.length; i++) {
    // join negative numbers
    if (expArray[i] === '-' && i !== 0) {
      if (['*', '/'].includes(expArray[i - 1])) {
        expArray[i] += expArray[i + 1];
        expArray.splice(i + 1, 1);
      }
    }
  }

  // Map integers
  expArray.forEach((element, index) => {
    const numberParsed = parseInt(element, 10);
    if (!Number.isNaN(numberParsed)) {
      expArray[index] = parseInt(element, 10);
    }
  });
  expArray.forEach((element) => {
    if (typeof element === 'number') {
      if (operator === '') {
        result = element;
      } else if (operator === '+') {
        result += element;
      } else if (operator === '-') {
        result -= element;
      } else if (operator === '*') {
        result *= element;
      } else if (operator === '/') {
        result /= element;
      }
    } else {
      operator = element;
    }
  });
  return result;
};

const evalOperationStack = () => {
  if (operationStack === '') return;
  try {
    // eslint-disable-next-line no-eval
    const result = evalFunction(`${operationStack}`);
    if (result === Infinity) throw Error('Infinity');
    displayElement.innerHTML = result;
    operationStack = parseInt(displayElement.innerHTML, 10);
  } catch (e) {
    displayElement.innerHTML = 'Error';
    operationStack = '';
  }
};

numbersIds.forEach((id) => {
  document.getElementById(id).addEventListener('click', (event) => {
    if (displayElement.innerHTML === '0') {
      displayElement.innerHTML = '';
    }
    const numberText = event.target.innerText;

    if (
      operationStack !== ''
      && operatorSymbols.includes(operationStack.at(-1))
    ) {
      displayElement.innerHTML = numberText;
    } else {
      displayElement.innerHTML += numberText;
    }
    operationStack += numberText;
  });
});

Object.keys(operatorsIds).forEach((id) => {
  document.getElementById(id).addEventListener('click', () => {
    if (displayElement.innerHTML === '0' && operatorsIds[id].order === 2) {
      operationStack += 0;
    }

    const operatorElement = document.getElementById(id);
    let operatorDisplay = operatorElement.innerText;
    if (operatorDisplay === 'X') {
      operatorDisplay = '*';
    }

    if (operatorsIds[id].order === 1 && operationStack !== '') {
      // dont execute if theres an * and / on the last position
      if (operationStack.at(-1) !== '*' && operationStack.at(-1) !== '/') {
        evalOperationStack();
        clearFlag = false;
      }
    }
    operationStack += operatorDisplay;
  });
});

document.getElementById('equals').addEventListener('click', () => {
  if (clearFlag) {
    displayElement.innerHTML = '0';
    operationStack = '';
    clearFlag = false;
    return;
  }

  evalOperationStack();
  clearFlag = true;
});
