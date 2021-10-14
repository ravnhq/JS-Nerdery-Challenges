const display = document.getElementById('display');
const equals = document.getElementById('equals');

let reference = "0";
let memory = "0";
let operation = 0;

function operationSelected(character, op) {
    return document.getElementById(`${character}`).addEventListener( 'click', function() {
        selectOperation(op);
    });
}

function numberSelected(character, number) {
    return document.getElementById(`${character}`).addEventListener( 'click', function() {
        addValue(number);
    });
}

function addValue(num = '0') {

    if(eval(reference) === 0) {
        reference = num
    } else {
        reference += num
    }

    display.innerHTML = reference
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

function init() {
    // NUMBERS
    numberSelected('zero', '0');
    numberSelected('one', '1');
    numberSelected('two', '2');
    numberSelected('three', '3');
    numberSelected('four', '4');
    numberSelected('five', '5');
    numberSelected('six', '6');
    numberSelected('seven', '7');
    numberSelected('eight', '8');
    numberSelected('nine', '9');
    
    // OPERATIONS
    operationSelected('add', '+');
    operationSelected('subtrack', '-');
    operationSelected('multiplication', '*');
    operationSelected('division', '/');

    // EQUAL
    equals.addEventListener( 'click', function() {
        calculateOperation();
    });
}

init();