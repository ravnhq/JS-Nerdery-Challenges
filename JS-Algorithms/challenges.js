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
  let hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if(hours < 10) { hours = "0" + hours;}
  if(minutes < 10) {minutes = "0" + minutes;}
  if(seconds < 10) {seconds = "0" + seconds;}

  return `${hours}:${minutes}:${seconds}`;
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
const MODIFIED_COUNTRY_NAMES = new Array();

const circularArray = (index) => {
  // YOUR CODE HERE...
  if(index >= 5) index = index % 5;

  for(let countryIndex = 0; countryIndex < COUNTRY_NAMES.length; countryIndex++){

    MODIFIED_COUNTRY_NAMES[countryIndex] = COUNTRY_NAMES[index];
    index++;

    if(index >= COUNTRY_NAMES.length){
      index = 0;
    }
  }

  return MODIFIED_COUNTRY_NAMES; 
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
  let sumPow = 0;
  let numPow = 1;

  for(let evaluatedNum = 1; evaluatedNum <= number; evaluatedNum++){

    numPow = 1;

    for(let index = 0; index < evaluatedNum; index++){
      numPow = numPow * evaluatedNum;
    }

    sumPow = sumPow + numPow;
  }

  sumPow = BigInt(sumPow);

  let sumInString = sumPow.toString();
  let finalString = "";

  for(let finalDigit = lastDigits; finalDigit > 0 ; finalDigit--){
    finalString = finalString + sumInString[sumInString.length - finalDigit];
  }

  return finalString;
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
  let factNum = 1;

  for(let index = 0; index < n; index++){
    factNum = factNum * (n - index);
  }

  factNum = BigInt(factNum);
  let numberInString = String(factNum);
  let sumDigits = 0;

  for(let index = 0; index < numberInString.length; index++){
    sumDigits = sumDigits + Number(numberInString[index]);
  }

  return sumDigits;
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
  let fibonacciList = new Array();
  let firstNum = 0;
  let secondNum = 1;
  let sumFirstAndSec = firstNum + secondNum;
  let indexFirstFib = 0;

  fibonacciList.push(firstNum);
  fibonacciList.push(secondNum);
  fibonacciList.push(sumFirstAndSec);

  while(sumFirstAndSec.toString().length < (n + 1)){
    firstNum = secondNum;
    secondNum = sumFirstAndSec;
    sumFirstAndSec = firstNum + secondNum;
    fibonacciList.push(sumFirstAndSec);

    if(sumFirstAndSec.toString().length === n){
      indexFirstFib = fibonacciList.indexOf(sumFirstAndSec);
      return indexFirstFib;
    }
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
