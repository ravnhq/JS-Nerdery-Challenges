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
  let remainingTime = seconds
  const finalHours = Math.floor(remainingTime / 3600)
  remainingTime -= finalHours * 3600

  const finalMinutes = Math.floor(remainingTime / 60)
  remainingTime -= finalMinutes * 60

  const finalSeconds = remainingTime

  const responseHours = finalHours.toString().padStart(2,'0')
  const responseMinutes = finalMinutes.toString().padStart(2,'0')
  const responseSeconds = finalSeconds.toString().padStart(2,'0')

  return `${responseHours}:${responseMinutes}:${responseSeconds}`
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
  if(index < 0){
    throw new Error('Index must be a positive number')
  }

  const circleIndex = (index >= COUNTRY_NAMES.length) ? index % COUNTRY_NAMES.length : index
  const firstArray = COUNTRY_NAMES.slice(circleIndex, COUNTRY_NAMES.length)
  const secondArray = COUNTRY_NAMES.slice(0, circleIndex)

  return [...firstArray, ...secondArray]
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
  let currentNumber = BigInt(number)
  let acc = BigInt(0)
  while(currentNumber > 0){
    acc += currentNumber ** currentNumber
    currentNumber--
  }

  const stringAcc = acc.toString()
  return stringAcc.slice(-1 * lastDigits)
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
  let acc = BigInt(1)
  let digitSum = 0
  while(n > 0){
    acc *= BigInt(n)
    n--
  }

  const stringAcc = acc.toString()
  for(digit of stringAcc){
    digitSum += Number(digit)
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
  if(n < 0){
    throw new Error('The parameter n should be greater than 0')
  }

  const fibonacciArray = []
  let currentIndex = 0
  while(true){
    let fibonacciElement = 0
    if(currentIndex>1){
      fibonacciElement = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
    }else{
      fibonacciElement = currentIndex
    }

    fibonacciArray.push(fibonacciElement)
    if(fibonacciElement.toString().length === n){
      break
    }

    currentIndex++
  }
  return currentIndex
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
