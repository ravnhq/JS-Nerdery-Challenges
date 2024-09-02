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
	let date = new Date(seconds * 1000);
	let hours = date.getUTCHours().toString().padStart(2, '0');
	let min = date.getUTCMinutes().toString().padStart(2, '0');
	let sec = date.getUTCSeconds().toString().padStart(2, '0');

	return `${hours}:${min}:${sec}`;
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
	if (index > COUNTRY_NAMES.length) {
		let subIndex = -((++index % COUNTRY_NAMES.length) + 1)

		return [
			...COUNTRY_NAMES.slice(subIndex),
			...COUNTRY_NAMES.slice(0, subIndex),
		];
	} else {
		return [
			...COUNTRY_NAMES.slice(index),
			...COUNTRY_NAMES.slice(0, index),
		];
	}
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
	let counter = 1;
	let accumulator = 0;

	while (counter <= number) {
		accumulator += counter ** counter;
		counter++;
	}

	return BigInt(accumulator).toString().slice(-lastDigits);
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

const digitSum = (n) => {
	let result = 0;
	let accumulator = 1;

	while (n >= 1) {
		accumulator *= n;
		n--;
	}

	BigInt(accumulator)
	.toString()
	.split('')
	.map(Number)
	.forEach (element => result += element);

	return result;
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
	let accumulator = [0, 1];

	function fibonacci(acc) {
		let sum = 0;

		acc.slice(-2).forEach((value) => {
			sum += value;
		});

		acc.push(sum);
		let number = acc.slice(-1)[0];
        let numberValidation = number.toString().split('').length == n;

		if (numberValidation) {
			return acc.indexOf(number);
		}

		return fibonacci(acc);
	}

	return fibonacci(accumulator);
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
