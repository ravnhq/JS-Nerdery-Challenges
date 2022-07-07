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
  //Easy way
  //console.log(new Date(seconds * 1000).toISOString().slice(11, 19));

  //Hard way lol
  const MINUTE_IN_HOUR = 60;
  const HOUR_IN_SECONDS = 3600;
  // setting the values
  let resultHours = Math.floor(seconds / HOUR_IN_SECONDS);
  let resultMinutes = Math.floor(
    (seconds - resultHours * HOUR_IN_SECONDS) / MINUTE_IN_HOUR
  );
  let resultSeconds = Math.floor(
    (seconds - resultHours * HOUR_IN_SECONDS) % MINUTE_IN_HOUR
  );
  // converting to the correct format
  const stringHours = resultHours.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });
  const stringMinutes = resultMinutes.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });
  const stringSeconds = resultSeconds.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });

  return stringHours + ":" + stringMinutes + ":" + stringSeconds;
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
  const resultArray = [];
  //get a number in the range
  while (index > 4) {
    index -= 5;
  }
  //Go through array and if last index achieved, restart
  for (let i = 0; i < COUNTRY_NAMES.length; i++) {
    resultArray.push(COUNTRY_NAMES[index]);
    index++;
    if (index === COUNTRY_NAMES.length) index = 0;
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
  let totalSum = 0;
  let resultTemp;
  for (let i = 1; i <= number; i++) {
    // console.log(i + ": " + i ** i);
    totalSum += Math.pow(i, i);
  }
  // console.log(BigInt(totalSum));
  const bigIntParse = BigInt(totalSum).toString().split("");
  resultTemp = bigIntParse.slice(-lastDigits);
  const result = resultTemp.join("");
  return result;
};

ownPower(10, 3); //317
ownPower(12, 7); //7190184
ownPower(21, 12); //499809480704

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
  let factorial = 1;
  let totalSum = 0;
  for (let i = n; i > 1; i--) {
    factorial *= i;
    // console.log(i + " " + n + " " + factorial);
  }
  const bigIntParse = BigInt(factorial).toString().split("");
  for (let i = 0; i < bigIntParse.length; i++) {
    totalSum += parseInt(bigIntParse[i]);
  }
  return totalSum;
};

digitSum(10); //27
digitSum(42); //207
digitSum(71); //409
digitSum(89); //606

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
  let count = 1;
  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;
  let crnt = 1;
  while (crnt.toString().length !== n) {
    crnt = prev1 + prev2;
    prev2 = prev1;
    prev1 = crnt;
    count++;
  }
  return count;
};

fibIndex(3); //12
fibIndex(5); //21
fibIndex(12); //55
fibIndex(15); //69

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
