/* eslint-disable prefer-const */
/* eslint linebreak-style: ["error", "windows"] */
/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const readableTime = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	let sobranSe = seconds % 3600;
	const min = Math.floor(sobranSe / 60);
	sobranSe %= 60;
	let final = '';
	final += hours <= 9 ? '0' : '';
	final += `${String(hours)}:`;
	final += (min <= 9) ? '0' : '';
	final += `${String(min)}:`;
	final += (sobranSe <= 9) ? '0' : '';
	final += String(sobranSe);
	return final;
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number

Example:

Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ['Germany', 'Norway', 'Island', 'Japan', 'Israel'];

const circularArray = (index) => {
	const indice = index % COUNTRY_NAMES.length;
	const temp = COUNTRY_NAMES.slice(indice);
	return temp.concat(COUNTRY_NAMES.slice(0, indice));
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.

Example:

Invoking "ownPower(10, 3)" should return "317"
because 1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^10 = 10405071317
The last 3 digits for the sum of powers from 1 to 10 is "317"
***** */
// For example 13: got lleva=1 and the number for the array=3
/// Multiplicate number using arrays

function splitNumber(num) {
	let firstN = Math.floor(num / 10);
	let secondN = num % 10;
	return [firstN, secondN];
}

// eslint-disable-next-line prefer-const
let matrizR = []; // result of matrix

// Creation matriz completed of 0s
// column=w // row=h
function llenarCeros(w, h) {
	for (let r = 0; r < h; r++) {
		// eslint-disable-next-line prefer-const
		let arreglo = [];
		for (let c = 0; c < w; c++) {
			arreglo.push(0);
		}
		matrizR.push(arreglo);
	}
}

// Sum the matrix
// [[],[],[]]=[r1,r2,...]
function sumaM() {
	let arrayS = [];
	let long = matrizR[0].length;// 2
	for (let i = 0; i < long; i++) {
		arrayS.push(0);
	}
	let llevando = 0;
	for (let i = long - 1; i >= 0; i--) {
		let sumatotal = 0;
		for (let j = 0; j < matrizR.length; j++) { // 1
			sumatotal += matrizR[j][i];
		}
		sumatotal += llevando;
		llevando = Math.floor(sumatotal / 10);
		const num = sumatotal % 10;
		arrayS[i] = num;
		if (i === 0) arrayS.unshift(llevando);
	}
	return arrayS;
}

// pluss in arrayA=arrayA+arrayB
function plus(A, B) {
	let lleva = 0;
	let temp = 0;
	for (let i = A.length - 1, j = B.length - 1; j >= 0; i--, j--) {
		temp = A[i] + B[j] + lleva;
		// eslint-disable-next-line no-param-reassign
		[lleva, A[i]] = splitNumber(temp);
	}
	// In case if there is lleva
	if (A.length !== B.length && lleva !== 0) {
		// The number can be 999 plus 111 then equals 1110,
		// add the number one in the start
		for (let i = A.length - B.length - 1; i >= 0; i--) {
			temp = A[i] + lleva;
			// eslint-disable-next-line no-param-reassign
			[lleva, A[i]] = splitNumber(temp);
			if (lleva === 0) break;
			if (i === 0) A.unshift(lleva);// infron of the array
		}
	}
	return A;
}

// Array A,Array B
function plusArray(A, B) {
	let longA = A.length;
	let longB = B.length;
	let suma = (longA >= longB) ? plus(A, B) : plus(B, A);
	return suma;
}

// from right to left like if we will doing multiplication to hand
// save the result in right matrix
// array A, array B
function multiplication(A, B) {
	matrizR = [];
	let longA = A.length;
	let longB = B.length;
	let indiceMf = 0;
	let indiceMc;
	let firstN;
	let secondN;
	llenarCeros(longA + longB, longB);
	let inicial = 1;
	for (let i = longB - 1; i >= 0; i--) {
		let llevando = 0;
		indiceMc = longA + longB - (inicial);

		for (let j = longA - 1; j >= 0; j--) {
			let numresul = B[i] * A[j] + llevando;
			[firstN, secondN] = splitNumber(numresul);
			matrizR[indiceMf][indiceMc] = secondN;
			llevando = firstN;
			indiceMc -= 1;

			if (j === 0) {
				matrizR[indiceMf][indiceMc] = llevando;
			}
		}
		inicial += 1;
		indiceMf += 1;
	}
	let resultS = sumaM();
	return resultS;
}

function numbertoArray(number) {
	let array = [];
	let strnumber = String(number);
	for (let i = 0; i < strnumber.length; i++) {
		array.push(Number(strnumber[i]));
	}
	return array;
}

const ownPower = (number, lastDigits) => {
	let result = numbertoArray(0);
	for (let i = 1; i <= number; i++) {
		let becomeNumber = numbertoArray(BigInt(i) ** BigInt(i));
		result = plusArray(becomeNumber, result);
	}
	let untilLastDigits = result.slice(result.length - lastDigits);
	// eslint-disable-next-line
	resultFound = String(untilLastDigits);
	// eslint-disable-next-line
	return resultFound.replace(/\,/g, '');
};

ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12); // the result is "075684339445"
// javascript overflow and give like e+
/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

Example:

Invoking "digitSum(10)" should return "27".
Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */

const digitSum = (n) => {
	// eslint-disable-next-line prefer-const
	let result = numbertoArray(1);
	for (let i = 2; i <= n; i++) {
		let becomeNumber = numbertoArray(i);
		result = multiplication(becomeNumber, result);
	}

	let suma = 0;

	for (let i = 0; i < result.length; i++) {
		suma += result[i];
	}
	return suma;
};

digitSum(10);
digitSum(42);// It is 189 using wolfram and python
digitSum(71);// It is 423 using wolfram and python
digitSum(89);// It is 549 using wolfram and python

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */

const fibIndex = (n) => {
	// eslint-disable-next-line prefer-const
	let fibo = 0;
	// eslint-disable-next-line prefer-const
	let previous = 1;
	let index = 1;
	// 0 1 2 3
	// eslint-disable-next-line
	while (true) {
		if (index < 3) fibo = 1;
		else {
			const tmpa = fibo;
			fibo += previous;
			previous = tmpa;
		}
		const conversion = String(fibo);
		if (conversion.length === n) {
			break;
		}
		index += 1;
	}
	return index;
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
