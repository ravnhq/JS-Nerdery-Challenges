class Calculator {
    constructor(displayText){
        this.displayText = displayText;
        this.clear();
    }

    clear(){
        this.currentOperand ='';
        this.previousOperand ='';
        this.operation = undefined;
    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand='';

    }
    compute(){
        let result=0;
        const previous = parseInt(this.previousOperand);
        const current = parseInt(this.currentOperand);
        if(isNaN(previous) || isNaN(current)) return;
        
        switch(this.operation) {
            case '+':
                result = previous + current ;
                break;
            case '-':
                result = previous - current ;
                break;
            case 'X':
                result = previous * current ;
                break;
            case '/':
                if(current === 0) {
                    this.displayText.innerText = 'Error';
                    return;
                }
                result = previous / current ;
                break;
            default:
                return;
        }
        this.currentOperand = result;
        this.operation= undefined;
        this.previousOperand ='';


    }
    updateDisplay(){
        this.displayText.innerText = this.currentOperand;
    }
    
}

const numbersButtons = document.querySelectorAll('button');
const operationButtons = document.querySelectorAll('.operation-btn');
const display = document.getElementById('display');


const calculator = new Calculator(display);

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {

        if(!button.classList.contains('operation-btn')){
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        }
        
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        if(button.innerText === '='){
            calculator.compute();
            calculator.updateDisplay();
        }
        
        else {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        }
        
    })
})
