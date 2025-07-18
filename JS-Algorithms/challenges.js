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
  const hours = String(Math.floor(seconds / 3600)).padStart(2, '0'); //Here explain more about padStart that is a method of JS that give us the chance to add strings in the begining of the string filling until our condition will be completed or solved
  const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  const result = `${hours}:${minutes}:${secs}`;
  return result;
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
  const length = COUNTRY_NAMES.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(COUNTRY_NAMES[(index + i) % length]); //Here is the main logic in this case this line do the next one, push the country name into the new array, the key here ir the (% value) because if the parametter exced the length in this case, this simbol (% value) give us the circular behavior.  
  }
  return result;
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
  let sum = 0
  for(let i = 1; i<= number; i++){
    sum += i ** i;
  }// Here I use a loop (for) to calculate with them exponential number, and sum the values in the same line
  const result = BigInt(sum).toString().slice(-lastDigits) //Here I pase the primitve BigInt to have more efficient to huge number, then I pass to a string to manipulate the number as an array and finally I pass the last method with a slice, (when you add a "-" you are saying to use the last 3 indexs of your array)
  return result;

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
  let result = 0
  const factorial = (n) => {
    if (n <= 1) return 1n; //if the parameter is 1 return 1 
    return BigInt(n) * factorial(n - 1); // here call the function in a recursive way until that one return 1 
  };

  const sum = factorial(n).toString(); // Here I pass the total value and convert into a string 
  const numberArray = [...sum].map(Number); // Here I create the new array and map to number each value of the array
  for (const digit of numberArray) {
    result += digit;
  } // Finally ones I have the array with number I pass into a loop (for of) to sum each number of the array.

  return result;
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
  if(n <= 0){
    return "Invalid Number, please make sure to add a valid number"
  }

  if (n === 1) {
      return 1; 
    }

  let a = 1; //first digit of fibonacci
  let b = 1; //last digit of fibomnacci
  let index = 2; 

  while (String(b).length < n) {
    let temp = b; //this variable contain the last digit in the fibonacci 
    b = a + b; // here creates (sum) the number to receive the las digit of fibonacci
    a = temp; // asign the digit that will pass as a first digit of fibonacci sum 
    index++; // here is the sum of the index number
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
