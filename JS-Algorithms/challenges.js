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
  const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const remainSecsAfterHours = seconds % 3600;

  const minutes = String(Math.floor(remainSecsAfterHours / 60))
    .padStart(2, "0");
  const remainSecsAfterMins = String(remainSecsAfterHours % 60)
    .padStart(2, "0");

  return `${hours}:${minutes}:${remainSecsAfterMins}`;
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
  const newIndex = index % COUNTRY_NAMES.length;

  const frontSlice = COUNTRY_NAMES.slice(newIndex);
  const BackSlice = COUNTRY_NAMES.slice(0, newIndex);

  return frontSlice.concat(BackSlice);
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
  let total = 0;
  const cutModule = Math.pow(10, lastDigits);

  for (let num = 1; num <= number; num++) {
    let power = Math.pow(num, num);
    total += power;
  }
  return String(total % cutModule);
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

const digitSumv2 = (n) => {
  /* I get a different result with this method,
  I think is giving good factorial results, please check */

  let factorial = "1";
  let total = 0;

  const prodDigitsNumber = (numString, mult) => {
    /* Input: - A number in string-reverse-number fashion Ex. 102 = '201'
              - A number 'mult'.
    Output: the product of a 'str-rev-number' and 'mult' as 'str-rev-number'*/

    let carry = 0;
    let coef = 0;
    let res = 0;
    let newNumString = "";

    for (let i = 0; i < numString.length; i++) {
      res = numString[i] * mult + carry;
      coef = res % 10;
      carry = Math.trunc(res / 10);
      newNumString += String(coef);
    }
    if (carry > 0) {
      newNumString += String(carry).split("").reverse().join("");
    }

    return newNumString;
  };

  for (let num = 1; num <= n; num++) {
    factorial = prodDigitsNumber(factorial, num);
  }

  for (let i = 0; i < factorial.length; i++) {
    total += Number(factorial[i]);
  }

  // console.log(factorial);
  return total;
};

const digitSum = (n) => {
  let total = 0;

  const findFactorial = (num) => {
    let factorial = 1;
    for (let i = num; i > 1; i--) {
      factorial *= i;
    }

    return factorial;
  };

  const factorialStr = String(BigInt(findFactorial(n)));
  for (let i = 0; i < factorialStr.length; i++) {
    total += Number(factorialStr[i]);
  }

  return total;
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
  let first = 0;
  let second = 1;
  let current = 0;
  let index = 1;

  while (String(current).length < n) {
    current = first + second;
    first = second;
    second = current;
    index++;
  }

  return index;
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
