/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

"use strict"

const wrapper = document.querySelector('.wrapper')

let numberStr = ''
let viewString = ''
let operations = ['+', '-', 'X', '/']
let stack = []

const updateValue = (value) => {
    document.getElementById('display').textContent = value;
}

const evaluateStack = (arrStack) => {

    //Convertimos a Notacion Posfija
    if (arrStack.length == 0)
        return 0;

    let auxStack = []
    let lastOp = '$';
    for (let i = 0; i < arrStack.length; i++) {
        if (operations.includes(arrStack[i])) {
            lastOp = arrStack[i];
        } else {
            auxStack.push(arrStack[i])
            if (lastOp != '$') {
                auxStack.push(lastOp)
            }
        }
    }
    console.log(auxStack)
    


    let mainStack = []
    let last;
    mainStack.push(parseFloat(auxStack[0]));

    for (let i = 1; i < auxStack.length; i++) {
        let current = auxStack[i]
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
                case 'X':
                    last = mainStack.pop()
                    mainStack[mainStack.length - 1] *= parseFloat(last);
                    break;
                default:
                    break;
            }
        }
    }
    return mainStack[0]
}



wrapper.addEventListener('click', (e1) => {
    let val = e1.target.textContent
    console.log(val)
    if (operations.includes(val)) {
        stack.push(numberStr);
        stack.push(val)
        numberStr = ''
        console.log(stack)
        viewString += val
        updateValue(viewString)
    }
    else if (val === '=') {
        console.log('igual')
        stack.push(numberStr);
        numberStr = ''
        console.log(stack)
        updateValue(evaluateStack(stack));
        stack = []
        viewString = ''
    }
    else {
        numberStr += val;
        viewString += val
        updateValue(viewString)

    }


})
