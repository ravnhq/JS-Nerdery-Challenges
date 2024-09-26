const buttNum = [
    {name:'zero', realNumber: '0'},
    {name:'one', realNumber: '1'},
    {name:'two', realNumber: '2'},
    {name:'three', realNumber: '3'},
    {name:'four', realNumber: '4'},
    {name:'five', realNumber: '5'},
    {name:'six', realNumber: '6'},
    {name:'seven', realNumber: '7'},
    {name:'eight', realNumber: '8'},
    {name:'nine', realNumber: '9'},
];

const buttOper = [
    {name: 'add', bOper: '+'},
    {name: 'subtrack', bOper: '-'},
    {name: 'multiplication', bOper: '*'},
    {name: 'division', bOper: '/'},
];

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
    if(reference.length <= 21) {
        if((reference === 'NaN') || (reference === 'undefined') || (reference === 'Error')) {
            reference = num;
            memory = "0";
            operation = 0;
        } else {
            if(eval(reference) === 0) {
                reference = num
            } else {
                reference += num
            }
        }
    } else {
        alert('You should not exceed more than 22 digits');
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

function numbers(arr) {
    //ONLY NUMBERS
    return arr.map(({name, realNumber}) => numberSelected(`${name}`, `${realNumber}`));
}

function mainOperations(arr) {
    // ONLY OPERATIONS
    return arr.map(({name, bOper}) => operationSelected(`${name}`, `${bOper}`))
}

function equal() {
    // EQUAL
    equals.addEventListener( 'click', function() {
        calculateOperation();
    });
}

function init() {
    numbers(buttNum);
    mainOperations(buttOper);
    equal();
}

init();