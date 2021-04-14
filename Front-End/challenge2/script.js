/* eslint-disable linebreak-style */
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const display = document.getElementById('display');

function calculate(n1, operator, n2) {
	let result = '';
	const num1 = parseInt(n1, 10);
	const num2 = parseInt(n2, 10);
	if (operator === 'add') {
		result = num1 + num2;
	} else if (operator === 'subtrack') {
		result = num1 - num2;
	} else if (operator === 'multiplication') {
		result = num1 * num2;
	} else if (operator === 'division') {
		result = num1 / num2;
	}
	return result;
}

document.body.addEventListener('click', (e) => {
	if (e.target.matches('button')) {
		const key = e.target;
		const keyContent = key.textContent;
		const displayContent = document.getElementById('display').textContent;
		const databody = document.body.dataset;
		let secondValue;

		if (key.className === 'operation-btn' && key.id === 'equals') {
			const { firstValue } = databody;
			const { operator } = databody;
			secondValue = displayContent;

			display.textContent = calculate(firstValue, operator, secondValue);
			databody.previousKeyType = 'calculate';
		} else if (key.className === 'operation-btn' && key.id === 'clear') {
			display.textContent = '0';
			databody.previousKeyType = 'number';
		} else if (key.className === 'operation-btn' && key.id !== 'equals' && key.id !== 'clear') {
			databody.previousKeyType = 'operator';
			databody.firstValue = displayContent;
			databody.operator = key.id;
		} else {
			if (displayContent === '0' || databody.previousKeyType === 'operator' || databody.previousKeyType === 'calculate') {
				display.textContent = keyContent;
			} else {
				display.textContent = `${displayContent}${keyContent}`;
			}
			databody.previousKeyType = 'number';
		}
	}
});
