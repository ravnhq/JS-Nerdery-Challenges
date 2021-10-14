/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/


const display = document.getElementById('display');
const equals = document.getElementById('equals');
let reference = "0";
let memory = "0";
let operation = 0;

function addValue(num = '0') {
    if((eval(reference) === 0 && (reference.indexOf(".") === -1))) {
        reference = num
    } else {
        reference += num
    }

    display.innerHTML = reference;
}

function selectOperation(ope) {
    if(operation !== 0) {
        calculateOperation();
    }

    if(ope.indexOf("+") > -1) {
        operation = 1;
    }
    if(ope.indexOf("-") > -1) {
        operation = 2;
    }

    if(ope.indexOf("*") > -1) {
        operation = 3;
    }
    if(ope.indexOf("/") > -1) {
        operation = 4;
    }

    memory = reference;
    reference = "";
    display.innerHTML = reference;
}

function calculateOperation() {
    if(operation === 1) {
        reference = eval(memory) + eval(reference);
    }

    if(operation === 2) {
        reference = eval(memory) - eval(reference);
    }
    if(operation === 3){
        reference = eval(memory) * eval(reference);
    }

    if(operation === 4) {
        if(eval(reference) !== 0) {
            reference = eval(memory) / eval(reference);
        } else {
            reference = "Error";
        }
    }

    reference = reference + "";
    operation = 0;
    memory = "0";

    display.innerHTML = reference;
}