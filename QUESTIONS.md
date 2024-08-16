# Questions

#### Do you know how and when to use let and/or const? Provide examples.

We use let and const for declaring a variable. To do so we need to use the corresponding command followed by the name that we want for the variable to be called. Let is useful when we want that the content of the variable can be changed eventually, while we use const for the opposite when we don't.

```javascript
// Declaring with let
let vehicle = "car";
vehicle = "plane";
// Declaring with const
const number = 12;
number = 5; // This will give an error
```

#### How does the variables scope works? Provide examples.

When we declare a variable outside of a function or a block like an if statement, this variable can be called globally, while if it's declare inside of a function or a block, it only can be called from there and not outside. In the case of var, it doesn't have block scope but only function scope, so if it's declared inside a block will do it globally.

```javascript
const data1 = "data1";

function check_scope() {
  console.log(data1); //This will work
  let data2 = "data2";
}

console.log(data2); //this will fail

if (true) {
  var data3 = "data3";
}
console.log(data3); //this will work
```

#### When should I use forEach vs map?

We should use map when we want to obtain an array with the output that the function returns for each element of the array, and forEach when we only want to work with each element of the array without returning.

```javascript
const animals = ['cat', 'dog', 'fish', 'frog', 'parrot'];

animals.forEach((animal) => console.log(`The animal is ${animal}`));

const animal_sentences = animals.map((animal) => return `The animal is ${animal}`);
```

#### What is the reduce use for?

Reduce is used for getting an unique result from all elements in an array according to the function that is passed as an argument.

```javascript
const numbers = [4, 1, 13, 7];
const sum_result = numbers.reduce((total, number) => total + number); // This will give 25
const mult_result = numbers.reduce((total, number) => total * number); //This will give 364
```

#### What is the difference between regular functions and arrow functions?

Arrow functions can't use this, arguments or new commands, but it has implicit return which let its syntaxis omit the return command and the curly braces when the function content only consist in one expression, and that expression will be implicity returned.

```javascript
const arrow_function_process = () => {
  process_description = "do_something " + arguments[0];
  return this.process_description;
};

const regular_function_process = function () {
  process_description = "do_something " + arguments[0];
  return this.process_description;
};

const implicit_arrow_function = (text) => text;

console.log(arrow_function_process("now")); // The result is: undefined
console.log(regular_function_process("now")); // The result is: do_something now
console.log(implicit_arrow_function("example")); // The result is: example
```

#### What is a higher order function?

Is a function that have other functions as arguments or is returning a function.

```javascript
//Function returning a function
function first() {
  return function () {
    return "text";
  };
}
//Function using an argument as a function
function second(sub_function) {
  sub_function();
}
second(() => console.log("text"));
```

#### What is the difference between filter and find?

Filter will return an array with the elements that pass the provided function conditions, and find will do the same but only will return the first coincidence as an unique element.

```javascript
const numbers = [4, 1, 13, 12, 6, 321];

const pair_numbers = numbers.filter((number) => {
  return number % 2 == 0;
}); // The result is [ 4, 12, 6 ]
const three_digits_number = numbers.find(
  (number) => number.toString().length == 3
); // The result is 321
```

#### What does it mean to pass variables by value?

Is when the data of a variable is being passed as an actual value to declare another variable, or as an argument for a function, letting that any future modification or operation which is done to the new variable or argument will not affect the original variable data.

```javascript
const x = 14;
function halfOf(x) {
  x = x / 2; // x is now 7
  return x;
}
halfOf(x);
console.log(x); // x is still 14
```

#### What does it mean to pass variables by reference?

Is when we are not passing the actual value of the variable for declaring a new variable or using it as an argument, but a reference of where the value is really located, causing that any future modifications to the new declared variable or argument will change the original variable data, even if it's inside of a function or a code block. This often happens with objects and arrays.

```javascript
const post = {
  title: "The sky",
};

function eraseTitle(post) {
  post.title = null; // The post title is null now
}

eraseTitle(post);
console.log(post); // The title remains null
```

#### How can you copy objects and nested objects?

We can use the spread operator or Object.assing() to copy an object, but if it's a nested object then we can use the JSON functions stringify and parse.

```javascript
const post = {
  title: "Travel",
  author: {
    name: "someone",
    email: "someone@hotmail.com",
  },
};
// Copying with three dots operator
const clonePost = { ...post };
post.author.name = "somebody";
console.log(clonePost);
/* The output is:
{
  title: 'Travel',
  author: { name: 'somebody', email: 'someone@hotmail.com' }
}
*/
// Copying with JSON funtions
const cloneNestedPost = JSON.parse(JSON.stringify(post));
post.author.email = "somebody@hotmail.com";
console.log(cloneNestedPost);
/* The output is still:
{
  title: 'Travel',
  author: { name: 'somebody', email: 'someone@hotmail.com' }
}
*/
```

#### What does immutability mean?

It means that the value or structure cannot be changed. This happens when we declare a variable with a primitive value, that is immutable by default, like string, number or boolean, since to change the variable data the only way is re assigning the variable with another value, which is not the same to change the value. Const is not immutable because the const declaration creates a read-only reference to a value, and that's the reason for why a const variable cannot be re assignable, but it not means that is immutable. Ojects and arrays are mutable by default since its value or estructure can be changed using operations like the build in functions or just changing it directly.

```javascript
let color = "red";
color = "blue"; // Re assigning to another value

const colors = ["red", "blue", "green"];
colors.push("yellow"); // Changing the structure
console.log(colors); // This will give [ 'red', 'blue', 'green', 'yellow' ]
```

#### What is OOP?

Is a programing paradigm based on the concept of objects which have packed data and methods inside. It use classes that are useful to represent and modeling real world data, and also to create instantiated objects, where each is completely individual from the other and only share the parent class structure.

```javascript
const House = function (owner, rooms, bathrooms) {
  this.owner = owner;
  this.rooms = rooms;
  this.bathrooms = bathrooms;
};

const small_house = new House("Miguel", 1, 1);
const great_house = new House("Diego", 4, 2);
const big_house = new House("Jorge", 6, 4);

console.log(small_house); // House { owner: 'Miguel', rooms: 1, bathrooms: 1 }
console.log(great_house); // House { owner: 'Diego', rooms: 4, bathrooms: 2 }
console.log(big_house); // House { owner: 'Jorge', rooms: 6, bathrooms: 4 }
```
