// Modify this file only
'use strict'

let counter = 0;
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');



const increaseCounter = () => {
    updateCounter(++counter);
}
const decreaseCounter = () => {
    updateCounter(--counter);
}
const updateCounter = (value) => {
    document.getElementById('counter').textContent = value;
}

increase.addEventListener('click', increaseCounter)

decrease.addEventListener('click', decreaseCounter)


