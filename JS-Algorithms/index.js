/* *****
	Challenge 1

	"Readable Time"

	The function "readableTime" accepts a positive number as argument, you should be able to modify the function
	to return the time from seconds into a human readable format.

	Example:

		Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const readableTime = seconds => {
	// YOUR CODE HERE...
}

readableTime(458)
readableTime(7293)
readableTime(32420)

/* *****
	Challenge 2

	"Circular Array"

	Given the following array "COUNTRY_NAMES", modify the function "circularArray" to return an array that meets the following criteria:

		- The index number passed to the function should be the first element in the resulting array
		- The resulting array must have the same length as the initial array
		- The value of the argument "index" will always be a positive number
		

	Example:

		Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = index => {
	// YOUR CODE HERE...
};

circularArray(3)
circularArray(5)
circularArray(7)

/* *****
	Challenge 3

	"Even Fibonacci Numbers"

	The Fibonacci sequence is a sequence in which the current number is the sum of the previous two, for example,
	the first 10 digits of Fibonacci are: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

	Knowing this, create a function that meets the following criteria:

		- The function should accept any positive number
		- The function should return the sum of all the even numbers of the sequence that don't exceed "n" elements
	
	Further read: https://en.wikipedia.org/wiki/Fibonacci_number

	Example:

		Invoking "fibEvenSum(10)" should return "10" because the only even numbers in the first ten digits of Fibonacci are "2" and "8"
***** */

const fibEvenSum = n => {
	// YOUR CODE HERE...
}

fibEvenSum(10)
fibEvenSum(79)
fibEvenSum(1000)

/* *****
	Challenge 4

	"Sum of factorial digits"

	A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1. For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

	Modify the function "digitSum" to return a number that equals to the sum of the digits in the result of 10!

	Example:

		Invoking "digitSum(10)" should return "27". Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */

const digitSum = n => {
	// YOUR CODE HERE...
}

digitSum(10)
digitSum(42)
digitSum(71)
digitSum(89)

/* *****
	Challenge 5

	"N-Digit Fibonacci Number"

	Modify the function "numberLength" to return the index of the first Fibonacci number whose digits-length equals the number
	passed in to the function.

	Example:

		Invoking "numberLength(3)" should return "12". Because the 12th number in the Fibonacci is 144, and 144 has three digits
***** */

const numberLength = n => {
	// YOUR CODE HERE...
}

numberLength(3)
numberLength(5)
numberLength(12)
numberLength(15)