/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const doubleDigits = (time) => time.toLocaleString('en-US', { minimumIntegerDigits: 2 });

const readableTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secondsRemaining = seconds - hours * 3600 - minutes * 60;

  const readableHours = doubleDigits(hours);
  const readableMinutes = doubleDigits(minutes);
  const readableSeconds = doubleDigits(secondsRemaining);

  return `${readableHours}:${readableMinutes}:${readableSeconds}`;
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
  let indexTemp = index;
  if (index > COUNTRY_NAMES.length) indexTemp = COUNTRY_NAMES.length - 1;
  return COUNTRY_NAMES.slice(indexTemp).concat(COUNTRY_NAMES.slice(0, indexTemp));
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

/* Real answer
Ref: https://github.com/ravnhq/JS-Nerdery-Challenges/issues/34

const partialExp = (number, lastDigits) => {
  let partialRes = 1;
  for (let i = 1; i <= number; i++) {
    partialRes = (partialRes * number) % 10 ** lastDigits;
  }
  return partialRes;
};

const ownPower = (number, lastDigits) => {
  let partialPowerSum = 0;
  for (let i = 1; i <= number; i++) {
    let curr = partialExp(i, lastDigits);
    partialPowerSum += curr;
    // console.log(`test: ${number} - ${lastDigits}: `, i, curr)
  }
  let stringPowerSum = partialPowerSum.toString();
  return stringPowerSum.slice(stringPowerSum.length - lastDigits);
};

ownPower(10, 3);  //317
ownPower(12, 7);  //7190184
ownPower(21, 12); //075684339445

*/

// Test expected answer
const ownPower = (number, lastDigits) => {
  let accum = 0;
  for (let i = 1; i <= number; i++) {
    accum += i ** i;
  }
  const stringPowerSum = BigInt(accum).toString();
  return stringPowerSum.slice(stringPowerSum.length - lastDigits);
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

/* Real answer
const digitSum = (n) => {
  let factorial = 1n;
  for (let i = 2n; i <= n; i++) {
    factorial *= i;
  }
  let bigFactorial = BigInt(factorial).toString();
  let sumAccumulator = 0;

  for (let i = 0; i < bigFactorial.length; i++) {
    sumAccumulator += parseInt(bigFactorial[i]);
  }

  return sumAccumulator;
};

digitSum(10); //27
digitSum(42); //189
digitSum(71); //423
digitSum(89); //549

*/

// Test expected answer
const digitSum = (n) => {
  let factorial = 1;
  for (let i = n; i >= 2; i--) {
    factorial *= i;
  }

  const bigFactorial = BigInt(factorial).toString();
  let sumAccumulator = 0;

  for (let i = 0; i < bigFactorial.length; i++) {
    sumAccumulator += parseInt(bigFactorial[i], 10);
  }

  return sumAccumulator;
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
  let nextNumber;
  const fibNumbers = [0, 1];
  do {
    const [n1, n2] = fibNumbers.slice(-2);
    nextNumber = n1 + n2;
    fibNumbers.push(nextNumber);
  } while (nextNumber.toString().length < n);

  return fibNumbers.length - 1;
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
