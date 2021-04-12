/* eslint-disable linebreak-style */
// Modify this file only
const counter = document.getElementById('counter');
let count = parseInt(document.getElementById('counter').innerHTML, 10);
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let result = 0;
const more = 1;
const less = -1;

function counterHandler(modify) {
	count += modify;
	result = count;
	counter.innerHTML = result;
}

increaseBtn.addEventListener('click', () => counterHandler(more));
decreaseBtn.addEventListener('click', () => counterHandler(less));
