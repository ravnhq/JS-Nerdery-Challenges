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

  const fibonacci = [0, 1];
  let fibonacci_index = 1; 
  let tmp = fibonacci[0] + fibonacci[1];
  while(tmp.toString().length != n){
    tmp = fibonacci[0] + fibonacci[1];
    fibonacci[0] = fibonacci[1];
    fibonacci[1] = tmp;
    fibonacci_index++;    
  }
  
  console.log(fibonacci_index);
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);