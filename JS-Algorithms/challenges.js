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
  if (seconds < 0) throw new Error('Invalid number, only positive numbers');

  const hour = Math.trunc(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minute = Math.trunc(remainingSeconds / 60);
  const second = remainingSeconds % 60;

  //This formats the respond, if the number is less than 9, add a 0 in front of it.
  return `${hour <= 9 ? `0${hour}` : hour}:${
    minute <= 9 ? `0${minute}` : minute
  }:${second <= 9 ? `0${second}` : second}`;
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
  if (index < 0) throw new Error('Invalid number, only positive numbers');

  const copiedArray = [...COUNTRY_NAMES];

  if (index >= COUNTRY_NAMES.length) {
    return circularArray(index - COUNTRY_NAMES.length);
  }

  return [...copiedArray.splice(index), ...copiedArray];
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
  if (number < 0 || lastDigits < 0)
    throw new Error('Invalid number, only positive numbers');

  let total = 0;

  //Create an array with elements and multiply by each own powers
  const range = Array.from({ length: number }, (_item, index) =>
    Math.pow(index + 1, index + 1)
  );
  //Sum all elements
  range.forEach((item) => (total += item));
  //Convert the total a BigInt and transform an string array
  const totalArray = Array.from(String(BigInt(total)));

  //Get and return the last digits inside String
  return totalArray.splice(totalArray.length - lastDigits).join('');
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
  if (n < 0) throw new Error('Invalid number, only positive numbers');

  let digitSum = 0;

  //calculate factorial of n
  let sum = 1;
  for (let i = n; i > 0; i--) {
    sum *= i;
  }

  let nFactorial = BigInt(sum);
  //Convert array of int all the numbers
  const arrayNumber = Array.from(String(nFactorial), (item) => parseInt(item));

  //Sum all digits
  arrayNumber.forEach((number) => (digitSum += number));

  return digitSum;
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
  let fib = n;
  let n2 = 0;
  let n1 = 1;

  if (n === 1) return 1;

  for (let i = 2; i <= Number.MAX_SAFE_INTEGER; i++) {
    fib = n1 + n2;
    n2 = n1;
    n1 = fib;

    //Check if the lenght of the factorial is equal to `n`
    if (fib.toString().length === n) return i;
  }
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
