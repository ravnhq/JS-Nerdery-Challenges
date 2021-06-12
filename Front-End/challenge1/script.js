// Modify this file only

const app = {
	buttonIncrease: document.getElementById('increase'),
	buttonDecrease: document.getElementById('decrease'),
	span: document.getElementById('counter'),
};

function increaseButton() {
	console.log('Increase button pressed!');
	app.span.textContent = Number(app.span.textContent) + 1;
}

function decreaseButton() {
	console.log('Decrease button pressed!');
	app.span.textContent = Number(app.span.textContent) - 1;
}

app.buttonIncrease.addEventListener('click', increaseButton);
app.buttonDecrease.addEventListener('click', decreaseButton);
