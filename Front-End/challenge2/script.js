/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
// Keep in mind that if an operation button is spammed, it will
// operate using the number in the display
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
	// to check if the display number is a result or is a number being input
	isReceivingInput: true,
	// to check if an operation has been clicked
	isOperating: false,
	// to store the clicked operation
	operationPressed: '',

};

function buttonPressed() {
	function solve() {
		app.secondNumber 		= Number(app.display.textContent);
		const result 			= app.operations[app.operationPressed](app.firstNumber, app.secondNumber);
		app.display.textContent = result;
		app.isOperating 		= false;
		app.isReceivingInput	= false;
	}
	// if button is an operation
	if (this.classList.contains('operation-btn')) {
		if (app.isOperating) solve();
		// if +/*- is pressed, "=" is ommited
		if (this.textContent in app.operations || this.textContent === 'X') {
			console.log('Operation:', this.textContent);
			// saving current number displayed
			app.firstNumber = Number(app.display.textContent);

			app.operationPressed = this.textContent === 'X' ? '*' : this.textContent;
			app.isOperating = true;
			app.isReceivingInput = false;
		}
	} else
	// if button is a number
	if (app.isReceivingInput) {
		app.display.textContent += this.textContent;
	} else {
		app.display.textContent = this.textContent;
		app.isReceivingInput = true;
	}
}

for (const button of app.buttons) {
	button.addEventListener('click', buttonPressed);
}

// app.buttons.forEach((button) => button.addEventListener('click', buttonPressed));
