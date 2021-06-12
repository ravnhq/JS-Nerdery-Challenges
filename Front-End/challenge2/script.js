/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const app = {
	operations: {
		'*': (a, b) => a * b,
		'/': (a, b) => a / b,
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	},
	buttons: document.getElementsByTagName('button'),
	display: document.getElementById('display'),
	firstNumber: 0,
	secondNumber: 0,
	isOperating: false,
	operationPressed: '',
};

function buttonPressed() {
	// when an operation button is pressed
	if (this.classList.contains('operation-btn')) {
		if (!app.isOperating) {
			console.log('Operation:', this.textContent);
			// saving current number displayed
			app.firstNumber = Number(app.display.textContent);
			// wipe display
			app.display.textContent = '0';
			app.operationPressed = this.textContent === 'X' ? '*' : this.textContent;
			app.isOperating = true;
		} else {
			// operate if =
			app.secondNumber = Number(app.display.textContent);
			const result = app.operations[app.operationPressed](app.firstNumber, app.secondNumber);
			app.display.textContent = result;
			app.isOperating = false;
			// operate if +-/*
		}
	} else if (Number(app.display.textContent) === 0) { // when a number button is pressed
		app.display.textContent = this.textContent;
	} else {
		app.display.textContent += this.textContent;
	}
}

for (const button of app.buttons) {
	button.addEventListener('click', buttonPressed);
}

// app.buttons.forEach((button) => button.addEventListener('click', buttonPressed));
