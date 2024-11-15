// Modify this file only
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');

const increment = () => {
    console.log('increment');
    counter.innerText = parseInt(counter.innerText) + 1;
}

const decrement = () => {
    counter.innerText = parseInt(counter.innerText) - 1;
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);