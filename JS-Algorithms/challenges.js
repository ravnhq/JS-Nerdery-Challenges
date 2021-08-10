/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const numberToTime = (number) => {
	let time = String(number);

	if (number < 10) {
		time = `0${number}`;
	}

	return time;
};

const parseTime = (seconds, divisor) => {
	let parsedTime = 0;

	if (seconds / divisor > 0) {
		parsedTime = Math.floor(seconds / divisor);
	}

	parsedTime = numberToTime(parsedTime);

	return parsedTime;
};

const readableTime = (seconds) => {
	const hour = parseTime(seconds, 3600);
	let newSeconds = seconds % 3600;
	const minutes = parseTime(newSeconds, 60);

	newSeconds %= 60;
	newSeconds = numberToTime(newSeconds);

	return `${hour}:${minutes}:${newSeconds}`;
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
	const arrayDouble = COUNTRY_NAMES.concat(COUNTRY_NAMES);
	const finalArray = [];
	const LENGTH = COUNTRY_NAMES.length;
	let finalIndex = index;

	while (finalIndex > LENGTH) {
		finalIndex -= LENGTH;
	}

	for (let i = finalIndex; i < LENGTH + finalIndex; i++) {
		finalArray.push(arrayDouble[i]);
	}

	return finalArray;
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

const ownPower = (number, lastDigits) => {
	let sum = 0;
	const divisor = 10 ** lastDigits;

	for (let i = 1; i <= number; i++) {
		sum += i ** i;
	}

	const finaldigits = (sum % divisor);

	return String(finaldigits);
};

ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);

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

function factorialize(n) {
	let finalNum = 1;

	for (let i = n; i >= 1; i--) {
		finalNum *= i;
	}

	return finalNum;
}

const digitSum = (n) => {
	let numberArray = factorialize(n);
	let sumOfDigits = 0;
	numberArray = String(BigInt(numberArray));

	for (let i = 0; i < numberArray.length; i++) {
		sumOfDigits += +numberArray[i]
	}

	return sumOfDigits;
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

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
	const fib = [0, 1];
	let i = 2;

	while (String(fib[i - 1]).length !== n) {
		fib[i] = fib[i - 2] + fib[i - 1];
		i += 1;
	}

	return i - 1;
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
