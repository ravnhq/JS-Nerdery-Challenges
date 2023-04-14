# Questions from JS Fundamentals Module
## Do you know how and when to use let and/or const?
Yes, `var`, `let` and `const` are keywords for declaring variables in Javascript.
- `var` is an old way of declaring variables in Javascript, `var` variables are always global unless inside a function and can have different types of values. You should avoid using it unless dealing with legacy code.
- `let` variables are block scoped and mutable so his value can change for different types. It is nice to have when doing loops and logic when a situation demands a lot of type changes over the course of the program.
- `const` variables are inmutable, it means you cannot change his initial declared type, `const` variables are block scoped and you should use them all the time because it prevents unexpected changes of his type of value over the program execution.
```js
/* var example */
if (true) {
    var something = 'hello'; // starts being a string
}

something = [1, 2]; // now is an array
console.log(something)

function var_home() {
    var home = 'home'; // inside a function
}
console.log(home) // error : home is not defined

/* const example */
if (true) {
    const arr = [1, 'two', {tree: 'tree'}]; // the contents won't matter because arr is an array
    arr = 1; // error: arr cannot be other thing than an array
}
console.log(arr) // error : arr is not defined because of the scope

/* let example */
if (true) {
    let hello = 'hello'; // hello starts being an string
    hello = 2; // now its a number
    hello = []; // and now can become an array
}
console.log(hello) // error : hello is not defined because of the scope
```
## How does the variables scope works?
Variables and even functions live betweeen scopes. Scopes are code blocks defined between two braces. The gist of an scope is that any variable or function will live only inside of it. You can create many scopes in a program and all of them will be hosted on the global scope, the main layer where the program follows executions from top to bottom in a file, line by line until finished. The global scope share some objects like `Object`, `Crypto`, `Event` and many [more](https://nodejs.org/api/globals.html).

```js
// on the global scope
let item = ['unu', 'uwu'];
if (true) {
    // inside a block scope
    hello();
    item = 'changed value';
    const item_two = 'lives here';
    console.log(item);
    console.log(item_two);
    function hello() { console.log('hello'); }
}
console.log(item); // prints 'changed value'
console.log(item_two); // error : item_two is not defined
hello() // error : hello() is not defined
```

## When should I use forEach vs map?
`forEach` and `map` are methods from the `Array` object in Javascript, they're special because they make use of iterators for looping into the array in ascending-index order and even though they are similar because both support callbacks for manipulating his elements as it goes, they are different. `forEach` returns `undefined` and is not chainable instead `map` always returns an array.
```js
const arr = [
    { name: 'a', price: 42, },
    { name: 'b', price: 32, },
    { name: 'c', price: 12, },
    { name: 'd', price: 22, },
];

// counts the ammount of prices
let cont = 0;
arr.forEach((item) => {
    cont += item.price;
});
console.log(cont);

// returns new array with the item prices incremented by one
const result = arr.map((item) => {
    return item.price + 1;
});
console.log(result);
```

## What is the reduce use for? 
The `reduce` method reduces an array of values into one. It accepts two parameters the first one is a callback and the second one is the initial value of the accumulator. Inside the callback, the first parameter is the accumulator, the second one is the current item the iterator is on, the third one is the index of the item on the array and the last one is the reference of the entire array.

```js
const products = [
    { name: 'Chips', cost: 1.12 },
    { name: 'Sweets', cost: 2.32 },
    { name: 'Soda', cost: 3.11 },
];

// lets reduce all items into a single total price
products.reduce((total, item) => {
    return total + item.price;
}, 0); // second param is the initial value of the acumulator (total)
```

## What is the difference between regular functions and arrow functions?
Regular functions can be declared or expressed depending on your needs, declared functions will move to the top of the program when parsed by function hoisting at the moment of interpretation and function expressions only execute when the program reaches to the instruction. Arrow function are a shorthand for function expressions. 

```js
// Function expression
const sorter = function (arr) {
    return arr.sort();
}

if (true) {
    // function declaration
    console.log(hello());
    function hello() {
        return 'hello';
    }
}

// arrow function
const new_sorter = arr => arr.sort();
```

## What is a higher order function?
High Order functions are methods that simplify the process of using tradicional loops. They exist to improve readability and consist on expressions that iterate an array usually in one line.

```js
const arr = [1, 2, 3, 4, 5];
/* Traditional way */
// Returns a new array with all the elements incremented by one
const incrementer = () => {
    const other = [];
    for (let i = 0; i < arr.length; i++) {
        other[i] = arr[i] + 1;
    }
    return other;
};
const result = incrementer();
console.log(result);

/* With a high order function: map */
// Returns a new array with all the elements incremented by one
const result = arr.map((item) => item + 1);
console.log(result);
```

## What is the difference between filter and find?
They are both methods that iterate an array but `filter()` returns all the elements that match the expression and `find()` just the first match.

```js
const numbers = [1, 2, 3, 4, 5];
// find only returns the first match
const withFind = numbers.find(item => item > 2);
console.log(withFind);
// filter returns all elements that match
const withFilter = numbers.filter(item => item > 2);
console.log(withFilter);
```

## What does it mean to pass variables by value? 
It means that variables will copy its value when assigned.

```js
// everything in javascript is copied by value as default
let a = 2;
let b = a;
console.log(a, b);
```

## What does it mean to pass variables by reference?
It means it will share the the variables reference to an object, not the object itself so both variables will point to the same address in memory.

```js
// To pass variables by reference we need objects
const obj = {
    name: 'Elian',
    age: 2,
};

const abj = obj; // now abj points to obj
console.log(obj === abj); // true
```

## How can you copy objects and nested objects?
You use the method `Object.assign()` for copying objects or the spread operator `{...obj}` if you want it more simple. But for nested objects you use the `structuredClone()` it makes sure that every sub object is properly copied and not referenced.

```js
/* javascript will always pass the reference of objects unless using */
const obj = {
    name: 'Elian',
    age: 2,
};

// Object.assign or
const obj_cpy = Object.assign({}, obj);
console.log(obj === obj_cpy); // false

// Spread operator
const abj_cpy = { ...obj };
console.log(obj === abj_cpy); // false

// but for nested objects we use structuredClone
const nested_obj = {
    obj1: {
        name: 'Aldo',
        age: 23,
        stash: {
            milk: 1,
            bread: 2
        }
    },
    obj2: {
        name: 'Jen',
        age: 42,
        stash: {
            milk: 10,
            bread: 3
        }
    }
};
// Object.assign will try to copy everything but when there are more objects inside it will only reference it and not copy
const nested_try = Object.assign({}, nested_obj);
// But with structuredClone 
const nested_obj_cpy = structuredClone(nested_obj); // its copied

console.log(nested_try.obj1 === nested_obj.obj1); // true
console.log(nested_obj_cpy.obj2 === nested_obj.obj2); // false
```

## What does immutability mean?
Inmutability means a variable cannot be changed after being created. In Javascript all  primitives are inmutable and only some objects can be changed depending on which type of variable are or if the data type allows changing his contents.

```js
const word = 'spaghetti';
word[0] = 'x';
console.log(word); // strings are inmutable, no changes made

const arr = [1, 2, 3];
arr[1] = 5;
console.log(arr) // since Array is an object, his values can be changed
```

## What is OOP?
Object oriented programming is a paradigm that abstracts the properties and methods from the real world into objects(only what matters most). Objects have many characteristics that define them but the more important ones are encapsulation, inheritance and polimorphism. Encapsulation means hiding the implementation details of an object, code is kept private an can only be accesed throught methods on the interface. Inheritance allows childs to aquire properties and methods from a father object, it is designed for making hierarchies and defining more details on the behavior of them. Polymorphism allows an object to be treated as an instance of its own class, or as an instance of any of its superclasses, it's useful for creating flexible and reusable code.

```js
class Person {
    // the first function that is called when creating an object
    constructor(name) {
        this.name = name; // this is an attribute
    }

    // get method is for getting a private value
    get name() {
        return this._name;
    }

    // set method is for setting a private value
    set name(value) {
        this._name = value;
    }

    // a Person can yell ¯\_(ツ)_/¯
    yell() {
        console.log(`MY NAME IS ${this._name}!`);
    }
}

// inheritance example
class Zookeeper extends Person {
    constructor() {
        super('Zookeeper');
    }

    // add new functionalities to this children
    claim() {
        console.log('I can be a superhero');
    }
}

// polymorphism example
class BusinessMan extends Person {
    constructor(name){
        super(name);
        this.company = 'Lucrative co';
    }

    // im changing the initial behaviour of yell
    yell() {
        console.log(`MY NAME IS ${this.name} I WORK ON ${this.company}!`);
    }
}

const a = new Person('maron');
const c = new Zookeeper();
const b = new BusinessMan('lacko');

a.yell(); // MY NAME IS maron!
b.yell(); // MY NAME IS lacko I WORK ON Lucrative co!
c.claim(); // I can be a superhero
```