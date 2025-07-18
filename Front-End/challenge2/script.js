/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const Operations = {
  subtract: "-",
  sum: "+",
  multiply: "*",
  divide: "/",
};
const Digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

class Calculator {
  constructor() {
    this.expression = "";
    this.resetDisplay = false;
    this.display = document.getElementById("display");

    //init the state cleaning display
    this.clear();
  }

  clear() {
    this.expression = "";
    this.resetDisplay = false;
    this.updateDisplay("0");
  }

  updateDisplay(value) {
    this.display.innerText = value;
  }

  addDigit(digit) {
    if (this.resetDisplay) {
      this.expression = "";
      this.resetDisplay = false;
    }

    if (this.expression === "" || this.expression === "0") {
      this.expression = digit.toString();
    } else {
      this.expression += digit.toString();
    }

    this.updateDisplay(this.expression);
  }

  addOperation(operatorSymbol) {
    if (this.resetDisplay) { //validing if the display was calculated already and clean the expresion to start a new one
      this.expression = "";
      this.resetDisplay = false;
    }
    
    //validing start with '-' only the entire expression is empty or zero 
    if (operatorSymbol === '-' && (this.expression === "" || this.expression === "0")) {
      this.expression = "-";
      this.updateDisplay(this.expression);
      return;
    }

    const lastChar = this.expression[this.expression.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      this.expression = this.expression.slice(0, -1) + operatorSymbol;
    } else {
      this.expression += operatorSymbol;
    }

    this.updateDisplay(this.expression);
  }

  calculateResult() {
    if (this.expression === "" || this.expression === "0") return;
    const result = this.evaluateExpression(this.expression);
    this.updateDisplay(result.toString());
    this.expression = result.toString();
    this.resetDisplay = true;
  }

  evaluateExpression(expr) {
    expr = expr.split(' ').join(''); //clean blank spaces
    
    if (expr.includes('/0')) {//divison by zero check
      this.expression = "Error";
      this.updateDisplay(this.expression);
      this.resetDisplay = true;
      return;
    }

    const tokens = this.tokenizeMathSentence(expr);
    return this.calculateTokens(tokens);
  }


  tokenizeMathSentence(expr) {
    const tokens = [];
    let currentNumber = '';
    
    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];

      if ((char >= '0' && char <= '9') || char === '.') {
        currentNumber += char;
      } else if (['+', '-', '*' , '/'].includes(char)) {
        if (char === '-' && (i === 0 || ['+', '-', '*', '/'].includes(expr[i - 1]))) {
          currentNumber = '-';
        } else {
          if (currentNumber !== '') {
            tokens.push(parseFloat(currentNumber));
            currentNumber = '';
          }
          tokens.push(char);
        }
      }
    }

    if (currentNumber !== '') {
      tokens.push(parseFloat(currentNumber));
    }

    console.table(tokens);
    return tokens;
  }

  calculateTokens(tokens) {
    for (let i = 1; i < tokens.length; i += 2) { //like normal math, first multiplication and division
      if (tokens[i] === '*' || tokens[i] === '/') {
        const leftNumber = tokens[i - 1];
        const rightNumber = tokens[i + 1];
        let result;
        
        if (tokens[i] === '*') {
          result = leftNumber * rightNumber;
        } else {
          if (rightNumber === 0) throw new Error("Cannot divide by zero!");
          result = leftNumber / rightNumber;
        }
        
        //delete what we already calculated, and adjust the index
        tokens.splice(i - 1, 3, result);
        i -= 2;
      }
    }
    
    for (let i = 1; i < tokens.length; i += 2) {// add and substraction
      if (tokens[i] === '+' || tokens[i] === '-') {
        const leftNumber = tokens[i - 1];
        const rightNumber = tokens[i + 1];
        let result;
        
        if (tokens[i] === '+') {
          result = leftNumber + rightNumber;
        } else {
          result = leftNumber - rightNumber;
        }
        
        tokens.splice(i - 1, 3, result);
        i -= 2;
      }
    }
    
    return tokens[0];
  }

  deleteLastCharacter() {
    if (this.expression.length > 0) {
      this.expression = this.expression.slice(0, -1);
      this.expression.length === 0 ? this.updateDisplay("0") : this.updateDisplay(this.expression);
    }
  }
}

const calculator = new Calculator();

const onDigitButtonClick = (digit) => {
  calculator.addDigit(digit);
};
const onMathButtonClick = (mathOpSymbol) => {
  calculator.addOperation(mathOpSymbol);
};
const result = () => {
  calculator.calculateResult();
};
const clearCalculator = () => {
  calculator.clear();
};


document.getElementById("one").addEventListener("click", ()=>{onDigitButtonClick(Digits.one)});
document.getElementById("two").addEventListener("click", ()=>{onDigitButtonClick(Digits.two)});
document.getElementById("three").addEventListener("click", ()=>{onDigitButtonClick(Digits.three)});
document.getElementById("four").addEventListener("click", ()=>{onDigitButtonClick(Digits.four)});
document.getElementById("five").addEventListener("click", ()=>{onDigitButtonClick(Digits.five)});
document.getElementById("six").addEventListener("click", ()=>{onDigitButtonClick(Digits.six)});
document.getElementById("seven").addEventListener("click", ()=>{onDigitButtonClick(Digits.seven)});
document.getElementById("eight").addEventListener("click", ()=>{onDigitButtonClick(Digits.eight)});
document.getElementById("nine").addEventListener("click", ()=>{onDigitButtonClick(Digits.nine)});
document.getElementById("zero").addEventListener("click", ()=>{onDigitButtonClick(Digits.zero)});

document.getElementById("subtrack").addEventListener("click", ()=>{onMathButtonClick(Operations.subtract)});
document.getElementById("add").addEventListener("click", ()=>{onMathButtonClick(Operations.sum)});
document.getElementById("multiplication").addEventListener("click", ()=>{onMathButtonClick(Operations.multiply)});
document.getElementById("division").addEventListener("click", ()=>{onMathButtonClick(Operations.divide)});

document.getElementById("equals").addEventListener("click", result);


//adding keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    calculator.deleteLastCharacter();
  }
});