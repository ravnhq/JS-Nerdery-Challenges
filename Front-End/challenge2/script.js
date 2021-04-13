/* eslint-disable default-case */
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const allButtons = document.querySelectorAll('button');
const display = document.querySelector('#display');
display.textContent = '';

let operatorA; let operatorB; let operation;

function clean() {
	display.textContent = '';
}

function reset() {
	display.textContent = '';
	operatorA = 0;
	operatorB = 0;
	operation = 0;
}

function resolve() {
	let res = 0;
	switch (operation) {
	case 'add':
		res = parseFloat(operatorA) + parseFloat(operatorB);
		break;
	case 'subtrack':
		res = parseFloat(operatorA) - parseFloat(operatorB);
		break;
	case 'multiplication':
		res = parseFloat(operatorA) * parseFloat(operatorB);
		break;
	case 'division':
		res = parseFloat(operatorA) / parseFloat(operatorB);
		break;
	}
	reset();
	display.textContent = res;
}
allButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (Number.isInteger(parseInt(button.textContent, 10))) {
			display.textContent += button.textContent;
		} else if (button.id !== 'equals') {
			operatorA = display.textContent;
			operation = button.id;
			clean();
		} else {
			operatorB = display.textContent;
			resolve();
		}
	});
});
