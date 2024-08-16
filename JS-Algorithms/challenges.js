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
  //get hour minutes and seconds

  let hour = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  //add 0 when necessary

  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;
  secs < 10 ? (secs = "0" + secs) : secs;

  return `${hour}:${min}:${secs}`;
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
  if (index < 0) return;
  else {
    let result = [];
    const size = COUNTRY_NAMES.length;

    if (index < 0) return;
    else {
      if (index > size) index = index % size;
      result.push(...COUNTRY_NAMES.slice(index, size));
      result.push(...COUNTRY_NAMES.slice(0, index));
    }
    return result;
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

const ownPower = (number, lastdigits) => {
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    acc = acc + Math.pow(i, i);
  }

  acc = BigInt(acc);
  let aux = String(acc);
  //other way : let aux = ''+acc;
  aux = aux.substring(aux.length - lastdigits);

  return aux;
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
  let fact = 1;

  for (let i = n; i > 1; i--) {
    fact = fact * i;
  }

  const digSum = [...BigInt(fact).toString()].reduce(
    (x, y) => parseInt(x, 10) + parseInt(y, 10)
  );
  return digSum;
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
  let memo = {
    0: 1,
    1: 1,
  };

  // memoized algorithm to get an array of fibonacci numbers with index, saw on javascript channel, send by Fernando

  const fibonacci = (n, memo = {}) => {
    if (memo[n]) return memo[n];

    if (n <= 1) return 1;

    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  };

  //start with 2, 0 and 1 already on memo
  let i = 2;

  do {
    //calculate fibonacci until the length of a memo array element matches with n
    fibonacci(i++, memo);
  } while (String(memo[i - 1]).length != n);

  return i;
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
