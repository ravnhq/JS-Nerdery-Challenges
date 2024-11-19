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
  // get hours, minutes, seconds
  const hours = Math.trunc(seconds / 60 / 60) 
  const minutes = Math.trunc(seconds % 3600 / 60) 
  const secondsLeft = seconds % 3600 % 60
  
  // display values as 2 digits
  const dHours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const dMinutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const dSeconds = secondsLeft.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  return `${dHours}:${dMinutes}:${dSeconds}`
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

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (index) => {
  const pos = index % COUNTRY_NAMES.length
  return [...COUNTRY_NAMES.slice(pos), ...COUNTRY_NAMES.slice(0,pos)]
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
  let sum = 0n

  // add up the powers
  for (let index = 1n; index <= number; index++) {
    sum += index ** index
  }
  // get the last digits
  return sum.toString().slice(-lastDigits)
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
  let digitSum = 0
  let sum = 1n // 1 because we multiply this later

  // get the factorial sum by accumulating the multiplication
  for (let index = 1n; index <= n; index++) {
    sum *= index
  }
  const strSum = sum.toString()
  
  // add up the digits of the sum number 
  for (let index = 0; index < strSum.length; index++) {
    digitSum += parseInt(strSum[index])
  }

  return digitSum
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
  let index = 0
  let current = 0
  let next = 1

  while (true) {
    if(current.toString().length >= n) {
      return index;
    }
    
    // shift fibonacci numbers
    const fib = current + next
    current = next
    next = fib
    index++
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
