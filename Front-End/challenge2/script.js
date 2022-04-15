/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

"use strict"

let numberStr = '';
let viewString = '';
let stack = [];
const operations = ['+', '-', 'X', '/'];


const wrapper = document.querySelector('.wrapper')

const updateValue = (value) => {
    document.getElementById('display').textContent = value;
}

const evaluateStack = (arrStack) => {

    //Convertimos a Notacion Posfija
    if (arrStack.length === 0)
        return 0;

    let auxStack = [];
    let lastOp = '$';
    for (let index = 0; index < arrStack.length; index++) {
        if (operations.includes(arrStack[index])) {
            lastOp = arrStack[index];
        } else {
            auxStack.push(arrStack[index])
            if (lastOp != '$') {
                auxStack.push(lastOp);
            }
        }
    }


    let mainStack = [];
    let last = '';
    mainStack.push(parseFloat(auxStack[0]));

    for (let index = 1; index < auxStack.length; index++) {
        let current = auxStack[index]
        if (!operations.includes(current)) {
            mainStack.push(current)
        } else {
            switch (current) {
                case '+':
                    last = mainStack.pop()
                    mainStack[mainStack.length - 1] += parseFloat(last);
                    break;
                case '-':
                    last = mainStack.pop()
                    mainStack[mainStack.length - 1] -= parseFloat(last);
                    break;
                case '/':
                    last = mainStack.pop()
                    mainStack[mainStack.length - 1] /= parseFloat(last);
                    break;
                default:
                    last = mainStack.pop()
                    mainStack[mainStack.length - 1] *= parseFloat(last);
                    break;
                
                    
            }
        }
    }
    return mainStack[0];
}

wrapper.addEventListener('click', (e) => {
    const value = e.target.textContent;
    if (operations.includes(value)) {
        stack.push(numberStr);
        stack.push(value);
        numberStr = '';
        viewString += value;
        updateValue(viewString);
    }
    else if (value === '=') {
        stack.push(numberStr);
        numberStr = '';
        updateValue(evaluateStack(stack));
        stack = [];
        viewString = '';
    }
    else {
        numberStr += value;
        viewString += value;
        updateValue(viewString);

    }


})
