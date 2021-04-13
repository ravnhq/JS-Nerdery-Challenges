// Modify this file only
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const counter = document.querySelector('#counter');

const sume = () => {
	const history = parseInt(counter.textContent, 10);
	counter.textContent = history + 1;
};

const rest = () => {
	const history = (parseInt(counter.textContent, 10));
	const result = history > 0 ? (history - 1) : 0;
	counter.textContent = result;
};

increase.addEventListener('click', sume);
decrease.addEventListener('click', rest);
