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
  // relevant hints: padStart, remainder: maths

  //validate the input (negative numbers and strings)
  if(typeof seconds !== 'number' || seconds < 0) {
      console.error("Invalid input. Please provide a valid positive number.");
      return;
  }

  let hours =  Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds % 3600 / 60);
  seconds = seconds % 3600 % 60;

  //formating "HH:MM:SS"
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

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

const circularArray = (index) => {
  if(typeof index !== 'number' || index < 0) {
    console.error("Invalid input. Please provide a valid positive number.");
    return;
  }
  
  //medidas
  const resultCountryNames = [...COUNTRY_NAMES];

  if(index % COUNTRY_NAMES.length === 0){
    return COUNTRY_NAMES;
  }

  if(index > 5){
    index = index%5;
  }

  const firstPartial = resultCountryNames.splice(0, index);
  resultCountryNames.push(...firstPartial);

  return resultCountryNames
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
  if(typeof number !== 'number' || number < 0 || typeof lastDigits !== 'number' || lastDigits < 0) {
    console.error("Invalid input. Please provide a valid positive numbers.");
    return;
  }

  const mod = 10 ** lastDigits;
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    //modular exponentiation (calculating only the necessary digits): (base ** exponent) % mod
    let pow = 1;
    for (let j = 0; j < i; j++) {
      pow = (pow * i) % mod;
    }
    sum = (sum + pow) % mod;
  }

  return sum.toString().padStart(lastDigits, '0');
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
  if(typeof n !== 'number' || n < 0) {
    console.error("Invalid input. Please provide a valid positive number.");
    return;
  };
  //the key: using matrix exponentiation (T(n)=a⋅T(n−1)+b⋅T(n−2)), and probably BigInt 

  //factorial (probably using methods of array)
  let factorial = BigInt(1);
  for (let i = 2; i <= n; i++) {
    factorial *= BigInt(i);
  };

  //sum of digits
  nSplited = factorial.toString().split('');
  let sum = 0;
  
  nSplited.forEach((digit) => {
    sum += parseInt(digit);
  });

  return sum;
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
  if(typeof n !== 'number' || n < 0) {
    console.error("Invalid input. Please provide a valid positive number.");
    return;
  }

  let t0 = 0, t1 = 1, index = 1;

  while (true) { //calculate Fibonacci
    const tn = t0 + t1;
    t0 = t1;
    t1 = tn;
    index++;

    //check the length of the Fibonacci number
    if (t1.toString().length >= n) {
      return index;
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
