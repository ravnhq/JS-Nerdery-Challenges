/* **************************************************************************************************

Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const readableTime = (seconds) => {
  if (typeof seconds !== 'number' || seconds < 0) { //positive number validation 
    return "Not a positive number .";
  }

  // YOUR CODE HERE...

  let hours = Math.floor(seconds / 3600); //to obtain the HOURS i need to divide by 3600, an hour has 3600s, so for example int he first problem (458 s) i take the 458 s and divided by 3600 wich gave me a 0.127222... so its smaller than an complete hour (1.0), so HH result it be 0 because the method of math.floor.

  let minutes = Math.floor ((seconds % 3600)/60); // to get the minutes calculated, i used the (% remainder) operator , bc its gave me the residue of the division, in this example the result remainder is 0.127222... but if the dividend (458)is smaller than the divisor (3600) the result is the divident itself. So in this case 458 is small than 3600 so the result is 458, so you take that number and divide by 60 bc you want to know the minutes, each minute has 60 s so thas why you divided by 60. resulting in 7.6333... but the floor method ignore the decimals and take only the 7. 

  let secs = seconds % 60;// to get the seconds, it works the same as the first part of the minutes calculation. takes the 458 s and use the operator (% remainder) and this got u a 7.38, 38 s is your SS bc we divided seconds by seconds so its not needed to do a conversion. 

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; //Just concatenate the hours+minutes+secs and use the metohd .padStart to add the 0 at the begin to achieve the lengh you want .
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

//RESULT :D
console.log(readableTime(458))
console.log(readableTime(3690))
console.log(readableTime(7293))
console.log(readableTime(32420))

/* **************************************************************************

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
  if (index <0) {
    return "Index is not a positive number"
  }
  let arrayLenght = COUNTRY_NAMES.length; //i used the method .leght to calculate the total leght of the array, 5 elements.[Germany, Norway, Island,Japan,Israel]

  let start = index % arrayLenght;


  let begin = COUNTRY_NAMES.slice(start); //to calculate the begin of the array i used the .slice method to determinate the begin, for example you type index=1 , this gonna return a 1%5 wich is equal to 1 .

  let end = COUNTRY_NAMES.slice(0,start); //to calculate the end of the array this .slice method bring back the 0 index until the calculated begin. 

  return begin.concat(end); 

};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/*************************************************************************************************

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

  let sum = BigInt(0); //initialize the sum on with bigint bc they need to be the same type
  for (let i = 1; i <= number; i++) { // i choose a "for loop" bc i read about the other ways to do it, instead of "while loop" or "recursion" this seems to be the best bc is most "efficient" just compare the number that the user wrhite and compares to the i value, if its lower continues adding numbers untill is higher.
  
    sum  += BigInt(i) ** BigInt(i); // used += to reasignate the sum by itself and use big int bc the exponential numbers are big 
  }
  const sumString = sum.toString(); //take the sum and convert it to a string, so i can use the method slice to take the last (n) digits 
  return sumString.slice(-lastDigits);
};

console.log(ownPower(10, 3)); 
console.log(ownPower(12, 7));
console.log(ownPower(21, 12)); 


/* **************************************************************************************************************
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
  let factorial = BigInt(1); // i used bigint bc is best for large numbers like factorial numbers.
  for (let i = 2; i <= n; i++) { //here i used a for loop bc i need to multiplicate them several times. start at the number 2 bc the multiplication of a number for 1 is the same number. so i'll start from the 2; then the loop checks the number is lower or equal to the (n) number. 
    factorial *= BigInt(i); 
  }

  return factorial
    .toString() //you obtain a number here, but to be capable of sum them you need to separate that number in individual numbers, you need to convert that number to string 
    .split('') //here you split the string for example you have the 120 number you split on [1][2][0]. Now i can sum each number individually.             
    .reduce((sum, digit) => sum + Number(digit), 0); 
};

console.log(digitSum(10)); 
console.log(digitSum(42));
console.log(digitSum(71));
console.log(digitSum(89));

/********************************************************************************************************
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */

const fibIndex = (n) => {
  let a = 1, b = 1, index = 2; // here i initialized the first two Fibonacci numbers and the index

  while (String(b).length < n) { // converted the Fibonacci number to  a string and comprobate his length.
    let calc = a + b; // calculate the next number
    a = b; // move to the next pair of numbers
    b = calc;
    index++; // Increment the index 
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
