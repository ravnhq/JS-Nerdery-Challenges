/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */


/**
 * Challenge 1- Documentation
 * @param {number} seconds - Quantity of seconds to convert.
 * @returns {string} - Text chain with the format "HH:MM:SS".
 */

const readableTime = (seconds) => {
  // YOUR CODE HERE...
  if (typeof seconds !== 'number' || seconds <= 0) {
    return 'Invalid provide a positive number.';
  }

  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secondsr = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secondsr}`;
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

/**
 * Challenge 2 Documentation
 * @param {number} index - The starting index for the circular rotation.
 * @returns {str[]} - A new array of country names, rotated starting from the given index.
 */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (index) => {
  // YOUR CODE HERE...
  if (typeof index !== 'number') {
    return 'Invalid please enter a number';
  }

  const validIndex = index % COUNTRY_NAMES.length;
  return [...COUNTRY_NAMES.slice(validIndex), ...COUNTRY_NAMES.slice(0, validIndex)];
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

/**
 * Challenge 3 Documentation
 * @param {number} number - The upper limit of the own power function indicates the lat number.
 * @param {number} lastDigits - The number of digits to extract from the result.
 * @returns {string} It represents the last digits of the power result.
 */

const ownPower = (number, lastDigits) => {
      // YOUR CODE HERE...
      if (typeof number !== 'number' || typeof lastDigits !== 'number') {
        return 'Please enter a number';
      }

      let sum = BigInt(0); 
      for (let i = 1; i <= number; i++) {
        sum += BigInt(i) ** BigInt(i); 
      }

      return sum.toString().slice(-lastDigits);
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

/** 
 * Challenge 4 Documentation
 * @param {number} n - The number whose factorial's digits will be summed.
 * @returns {number} - The sum of the digits of the factorial.
*/


const digitSum = (n) => {
  // YOUR CODE HERE...
  if (typeof n !== 'number') {
    return 'Please only numbers are valid';
  }

  let factorial = BigInt(1);
  for (let i = BigInt(2); i <= BigInt(n); i++) {
    factorial *= i;
  }
  return factorial.toString().split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
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



/** 
* Challenge 5 Documentation
* @param {number} n - The minimum number of digits the Fibonacci number should have.
* @returns {number} - The index in the Fibonacci sequence with the "n" digits.
*/

const fibIndex = (n) => {
    // YOUR CODE HERE...
    if (typeof n !== 'number'|| n < 0) {
      return 'Please only positive numbers are valid';
    }
    let prev = 1, curr = 1, index = 2;
    while (curr.toString().length < n) {
      [prev, curr] = [curr, prev + curr];
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
