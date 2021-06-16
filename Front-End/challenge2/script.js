/* eslint linebreak-style: ["error", "windows"] */
const show = document.getElementById('display');
let valueS = show.textContent;
let result = 0;
let tmpNumL = 0;
let tmpNumR = 0;
let tmpsigno = '';
let operacionTrinaria = false;
const btn0 = document.getElementById('zero');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');

const btndivision = document.getElementById('division');
const btnmulti = document.getElementById('multiplication');
const btnsubtrack = document.getElementById('subtrack');
const btnadd = document.getElementById('add');
const btnequals = document.getElementById('equals');

function ejecutarbtn(btn, accion) {
	const valuebtn = btn.textContent;
	console.log(valuebtn);
	btn.addEventListener('click', () => {
		accion(valuebtn);
	});
}
function operacion(num1, op, num2) {
	if (op === '/' && tmpNumR === 0) {
		return false;
	}
	if (op === '+') return num1 + num2;
	if (op === '-') return num1 - num2;
	if (op === 'X') return num1 * num2;
	if (op === '/') return num1 / num2;
	// eslint-disable-next-line no-debugger
	debugger;
	return false;
}
// Action or Function for number
function accionN(valuebtn) {
	if (Number(valuebtn) != null) {
		if (valueS === '0') {
			valueS = valuebtn;
			tmpNumL = Number(valuebtn);
		} else if (tmpsigno === '') {
			// after you have finished
			// you can do others operations
			if (result !== 0) {
				valueS = valuebtn;
				result = 0;
				tmpNumL = 0;
			} else {
			// Grap the left operator
				valueS += valuebtn;
			}
			tmpNumL = tmpNumL * 10 + Number(valuebtn);
		} else {
			if (tmpNumR === -1) tmpNumR = 0;
			// Grap the right operator
			valueS += valuebtn;
			tmpNumR = tmpNumR * 10 + Number(valuebtn);
		}
		show.textContent = valueS;
	}
}
// Trinary operations are executed like 2+2+2+2/2..
// verify that the tmpNumL y tmpNumR are with data
function operacionSeguidas() {
	// In the case divid by zero
	if (tmpsigno === '/' && tmpNumR === 0) {
		valueS = '0';
		show.textContent = valueS;
		alert('Can not divide by zero');
		tmpNumL = 0;
		result = 0;
		tmpNumR = -1;
		return false;
	}
	if (tmpNumR !== 0 && tmpNumR !== -1) { // trick about tmpNumR
		result = operacion(tmpNumL, tmpsigno, tmpNumR);
		console.log('se ejecuto');
		console.log(result);
		tmpNumR = 0;
		operacionTrinaria = true;
		tmpNumL = result;
	}
	return true;
}

// Action or Function for signs
function accionSig(valuebtn) {
	console.log(valuebtn);
	let ejecuto;
	if (valuebtn === '+' && tmpNumL !== 0) {
		// debugger;
		ejecuto = operacionSeguidas();
		if (ejecuto) {
			valueS += valuebtn;
			show.textContent = valueS;
			tmpsigno = '+';
		}
	} else if (valuebtn === '-' && tmpNumL !== 0) {
		ejecuto = operacionSeguidas();
		if (ejecuto) {
			valueS += valuebtn;
			show.textContent = valueS;
			tmpsigno = '-';
		}
	} else if (valuebtn === 'X' && tmpNumL !== 0) {
		/*
        // I am trying set priority to the signs
        if(tmpsigno == "+") result=tmpNumL;
        if(tmpsigno == "-") result=tmpNumL*-1;
        if(tmpsigno == "X") operacionSeguidas();
        if(tmpsigno == "/") result=tmpNumL*-1; */
		ejecuto = operacionSeguidas();
		if (ejecuto) {
			valueS += valuebtn;
			show.textContent = valueS;
			tmpsigno = 'X';
		}
	} else if (valuebtn === '/' && tmpNumL !== 0) {
		ejecuto = operacionSeguidas();
		if (ejecuto) {
			valueS += valuebtn;
			show.textContent = valueS;
			tmpsigno = '/';
		}
	} else if (valuebtn === '=') {
		console.log(result, tmpsigno, tmpNumR);
		if (!operacionTrinaria) { // Is a simple operation like 1 + 2 = 2
			result = operacion(tmpNumL, tmpsigno, tmpNumR);
			operacionTrinaria = false;
		} else {
			// Is a operation complex like 14+11+12, calculate 14+11
			// after 25 add 12 I got 37
			result = operacion(result, tmpsigno, tmpNumR);
			operacionTrinaria = false;
		}

		// In case if it is divided by zero
		if (result === false) {
			valueS = '0';
			show.textContent = valueS;
			alert('Can not divide by zero');
			tmpsigno = '';
			result = 0;
			tmpNumL = 0;
			tmpNumR = -1;// trick
		} else {
			tmpNumL = result;
			valueS = String(result);
			show.textContent = valueS;
			tmpsigno = '';
			tmpNumR = 0;
		}
	}
}

ejecutarbtn(btn0, accionN);
ejecutarbtn(btn1, accionN);
ejecutarbtn(btn2, accionN);
ejecutarbtn(btn3, accionN);
ejecutarbtn(btn4, accionN);
ejecutarbtn(btn5, accionN);
ejecutarbtn(btn6, accionN);
ejecutarbtn(btn7, accionN);
ejecutarbtn(btn8, accionN);
ejecutarbtn(btn9, accionN);

ejecutarbtn(btndivision, accionSig);
ejecutarbtn(btnmulti, accionSig);
ejecutarbtn(btnsubtrack, accionSig);
ejecutarbtn(btnadd, accionSig);
ejecutarbtn(btnequals, accionSig);
