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
  if (seconds > 0) {
    let secondsT = seconds % 60;
    let hoursT = Math.floor((seconds - secondsT) / 60 / 60);
    let minutesT = (seconds - secondsT) / 60 - 60 * hoursT;

    const hoursS = hoursT > 9 ? `${hoursT}` : `0${hoursT}`;
    const minutesS = minutesT > 9 ? `${minutesT}` : `0${minutesT}`;
    const secondsS = secondsT > 9 ? `${secondsT}` : `0${secondsT}`;

    return `${hoursS}:${minutesS}:${secondsS}`;
  } else {
    return "The seconds must be greater than zero";
  }
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
  // YOUR CODE HERE...

  if (index > 0) {
    //Total
    const totalElement = COUNTRY_NAMES.length;
    let newArray = [];

    //Find start index
    let index2 = 0;
    for (x = 0; x < index; x++) {
      index2++;
      if (index2 >= totalElement) {
        index2 = 0;
      }
    }

    //Add elements from the indicated index to the end
    for (let x = 0; x < totalElement - index2; x++) {
      newArray.push(COUNTRY_NAMES[index2 + x]);
    }

    //Add elements from the beginning up to the indicated index
    for (let x = 0; x < index2; x++) {
      newArray.push(COUNTRY_NAMES[x]);
    }

    console.log(newArray);
    return newArray;
  } else {
    console.log("The indicated index is not available in the array");
    return "The indicated index is not available in the array";
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
  // YOUR CODE HERE...
  let sumPow = 0;

  //Sum of powers
  for (let x = 1; x <= number; x++) {
    sumPow = sumPow + Math.pow(x, x);
  }

  //BigInt to represent the value that is large
  sumPow = BigInt(sumPow);

  console.log(sumPow.toString().slice(sumPow.toString().length - lastDigits));
  return sumPow.toString().slice(sumPow.toString().length - lastDigits);
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

  //We find the factorial of the number
  let factorial = 1;
  for (let x = n; x > 0; x--) {
    factorial *= x;
  }

  //We add the digits of the factorial
  let sumDigit = 0;
  let stringFactorial = String(BigInt(factorial));
  for (let x = 0; x < stringFactorial.length; x++) {
    sumDigit += parseInt(stringFactorial[x]);
  }

  console.log(sumDigit);
  return sumDigit;
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
