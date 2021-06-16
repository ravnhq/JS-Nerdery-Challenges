/* eslint-disable quotes */
/* eslint linebreak-style: ["error", "windows"] */
// Modify this file only
const btnincrease = document.getElementById('increase');
const btndecrease = document.getElementById('decrease');

function ejecutarbtn(btn, funaccion) {
	const valuebtn = btn.textContent;
	btn.addEventListener('click', () => { funaccion(valuebtn); });
}
function accion(valuebtn) {
	const count = document.getElementById('counter');
	if (valuebtn === "Increase") {
		count.textContent = Number(count.textContent) + 1;
	}
	if (valuebtn === "Decrease") {
		count.textContent = Number(count.textContent) - 1;
	}
}

ejecutarbtn(btnincrease, accion);
ejecutarbtn(btndecrease, accion);
