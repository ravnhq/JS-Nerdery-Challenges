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
  let minutes = 0;
  let hours = 0;

  minutes = Math.floor(seconds / 60); //Division always returns a float number, so I need to round it down
  seconds = seconds % 60; // The residual from dividing the seconds

  if (minutes >= 60) {
    //Applying the same logic if there are over 60 minutes,
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }

  //Manually formatting string, adding 0 if necessary
  result = `${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }:${seconds > 9 ? seconds : `0${seconds}`}`;
  console.log(result);
  return result;
};

// readableTime(458);
// readableTime(3690);
// readableTime(7293);
// readableTime(32420);

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
  while (index >= COUNTRY_NAMES.length) {
    //Check if the index is bigger than the array, if it is then it loops
    index = index - COUNTRY_NAMES.length;
  }

  //Slice the array into two parts
  const firstHalf = COUNTRY_NAMES.slice(0, index);
  const secondHalf = COUNTRY_NAMES.slice(index, COUNTRY_NAMES.length);
  //Rearrange the parts of the array
  const newArray = [...secondHalf, ...firstHalf];
  console.log(newArray);
  return newArray;
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
  let i = 1;
  let sum = 0;
  while (i <= number) {
    //For every number I add the power i ^ i
    sum += Math.pow(i, i);
    i++;
  }
  const final = BigInt(sum); //Convert to bigInt, since big numbers obove 18 turns into scientific notation
  const result = final.toString(); //Conver the result to string
  const output = result.slice(result.length - lastDigits); //Slice the last digits of the string
  console.log(output);
  return output;
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
  let sum = 0;
  let i = BigInt(1); //I need to use big int from the beginning, if I parse just the result then the digits wont be precise
  let factorial = BigInt(1);
  while (i <= n) {
    //Basic factorial function with the structure 1x2x3...xn
    factorial *= i;
    i++;
  }

  result = factorial.toString(); // Convert the BigInt to string
  const digits = result.split(""); //Make an array of digits

  //Add each element of the array
  digits.forEach((element) => {
    sum += parseInt(element);
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
  // Building fibonacci array
  let i = 1;
  let fibonacci = [0, 1]; //First 2 values
  let newDigit = 0; //Storing the new value
  //Validation to check if the length equals the number passed
  while (newDigit.toString().length != n) {
    newDigit =
      fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]; //Adding the 2 last digits
    fibonacci = [...fibonacci, newDigit]; //Adding the digit to the array
    i++;
  }
  console.log(i);
  //When the lenght equals the number, return that index
  return i;
};

fibIndex(3);
// fibIndex(5);
// fibIndex(12);
// fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
