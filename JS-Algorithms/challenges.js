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
	// YOUR CODE HERE...
	let counter = seconds;
	let hours = 0;
	let mins = 0;
	let secs = 0;
	// we divide first in hours
	if (counter / 3600 > 0) {
		hours = Math.floor(counter / 3600);
		counter %= 3600;
	}
	// we divide in minutes
	if (counter / 60 > 0) {
		mins = Math.floor(counter / 60);
		counter %= 60;
	}
	// the remaining are seconds
	secs = counter;

	// we return the variables converted into string
	// we add a padStart in case the number is 1 digit
	return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
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
	// YOUR CODE HERE...
	// using modulo we make a circular iteration of the array
	const resultArray = [];
	if (index >= 0) {
		const arrayLength = COUNTRY_NAMES.length;
		for (let i = index; i < (index + arrayLength); i++) {
			resultArray.push(COUNTRY_NAMES[i % arrayLength]);
		}
	}
	return resultArray;
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
	// YOUR CODE HERE...
	// keeping in mind this power function is not precise (safe)
	// it passes the tests but it's not a correct approach for general use
	// on large numbers.
	let tmp = 0;
	// Using modulo with 10^n, returns the last n digits.
	const mod = 10 ** lastDigits;
	for (let i = 1; i <= number; i++) {
		tmp += i ** i;
	}
	return (tmp % mod).toString();
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
	// YOUR CODE HERE...
	// we multiply backwards using an array due to the max limit
	// number that can be stored. This is made in order to simulate
	// how we multiply in real life.
	const result = [1];
	let lastDigit = 0;
	let carry; let tmp;
	// loops from 1 to n
	for (let i = 1; i <= n; i++) {
		carry = 0;
		// loops the result array
		for (let j = 0; j <= lastDigit; j++) {
			tmp = (result[j] * i) + carry;
			result[j] = tmp % 10;
			carry = Math.floor(tmp / 10);
		}
		// while there is a value to carry, we add it to the result array
		// by placing the remaing into the next position.
		while (carry > 0) {
			lastDigit += 1;
			result[lastDigit] = carry % 10;
			carry = Math.floor(carry / 10);
		}

		// const toShow = [...result].reverse().join('');
		// console.log(`${i}! = ${toShow}`);
	}
	return result.reduce((a, b) => a + b, 0);
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
	// YOUR CODE HERE...

	if (n === 1) return 0;
	let initial = 1;
	// we run the fibonacci block until the length is equal to the argument
	const fiboArray = [0, 1];
	do {
		initial += 1;
		fiboArray.push(fiboArray[initial - 2] + fiboArray[initial - 1]);
	}
	while ((fiboArray[initial].toString().length !== n));
	return initial;
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
