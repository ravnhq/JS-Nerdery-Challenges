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
  // Get the Hours
  const hours = Math.floor(seconds / 3600);
  const hoursString = timeParser(hours);

  // Get the Minutes
  const minutes = Math.floor((seconds % 3600) / 60);
  const minutesString = timeParser(minutes);

  // Get the Seconds
  const displaySeconds = seconds % 60;
  const secondsString = timeParser(displaySeconds);

  return `${hoursString}:${minutesString}:${secondsString}`;
};

function timeParser(number) {
  const hoursString = String(number);

  return hoursString.length == 1 ? `0${number}` : `${number}`;
}

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

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (times) => {
  let countries = Array.from(COUNTRY_NAMES);

  for (let index = 0; index < times; index++) {
    let shiftedPlace = countries.shift();
    countries.push(shiftedPlace);
  }

  console.log(`Shifted elements: ${times}`);
  console.log(countries);

  return countries;
};

console.log('Challenge 2 - Cirular Array\n');
console.log(`Original Array: ${COUNTRY_NAMES}`);

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
  let sumOfPowers = BigInt(0);

  for (let index = 1; index <= number; index++) {
    sumOfPowers += BigInt(index) ** BigInt(index);
  }

  return sumOfPowers.toString().slice(-lastDigits);
};

console.log('Challenge 3 - Sum of powers\n');

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
  let factorialValue = BigInt(1);

  for (let index = 1; index <= n; index++) {
    factorialValue *= BigInt(index);
  }

  const valuesToSum = Array.from(factorialValue.toString()).map(stringNumber => +stringNumber);

  return valuesToSum.reduce((sum, current) => sum + current, 0);
};

console.log('Challenge 4 - Factorials\n');

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
  let first = 0;
  let second = 1;

  let index = 3; // Starting index as the first 3 indexes are 0, 1 and 1
  let sum = first + second + 1; // Sum the 3 indexes first
  
  while(sum.toString().length < n) {
    let nextSum = first + second;
    sum += nextSum;

    first = second;
    second = nextSum;

    index++;
  }

  console.log(`The index ${index} contains ${n} characters`);

  return index;
};

console.log('Challenge 5 - Fibonacci\n');

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
