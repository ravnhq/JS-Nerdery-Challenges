// Modify this file only
'use strict'

let counter = 0;
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');



const Increase = () => {
    updateCounter(++counter);
}
const Decrease = () => {
    updateCounter(--counter);
}
const updateCounter = (value) => {
    document.getElementById('counter').textContent = value;
}

increase.addEventListener('click', () => {
    Increase()
})

decrease.addEventListener('click', () => {
    Decrease()
})


