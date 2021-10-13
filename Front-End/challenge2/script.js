/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/


const display = document.getElementById('display');
const equals = document.getElementById('equals');
let reference = "0"

const options = function(option) {
    return document.getElementById(`${option}`)
}

const numbers = function(number) {
    return document.getElementById(`${number}`)
}

function addValue(num = '0') {
    if((eval(reference) === 0 && (reference.indexOf(".") === -1))) {
        reference = num
    } else {
        reference += num
    }
    
    display.innerHTML = reference;
}


function init () {
    addValue()
}

init();