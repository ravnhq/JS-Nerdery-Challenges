# JS Fundamentals Questions

**Do you know how and when o use let and/or const?**

You use _let_ for variables that are gonna change/reassign another value and const when you have a constant value in the variable

_Example with 'const'_

```
const name = "Daniela"

console.log(name)
```

_Example with 'let'_

```
for(let i = 0; i < n; i++) {
    console.log(i);
}
```

**How does the variables scope works?**

Depending how you use the variables in your code is how you have accessibility and visibility of these ones. In other words, is when you can or cannot use/access to a variable, depending if this is in a block or not

_Example using 'let':_

```
{
    let number = 4;
}

// Number can't be used here
```

_Example using 'var':_

```
{
    var number = 4
}

// Number can be used here

```

_Example with local scope:_

```
{
    for(let i = 0; i < n; i++) {
        const number = 10;
    }
}

// Number cannot be used here
```

**When should I use _for each_ vs _map_?**

Map is used to transform each element of an array or either an object, it returns a new array

_Example using 'map':_

```
const array = [1, 2, 3, 4]

array.map(function(e) {
    return e * 2
})

console.log(array)

The result will be:
[2, 4, 6, 8]

```

forEach is used to loop each element of an array or object

_Example using 'forEach':_

```
array.forEach(function(e) {
    console.log(e * 2)
})

The result will be:
2
4
6
8
```

**What is the _reduce_ use for?**

Is used to make calculations and it returns a value. The main idea of use reduce is to have a map and filter working together, you can filter the data that you have and map it in the same step

_Example using 'reduce':_

```
const array = [1, 2, 3, 4]

const initialValue = 10;

const sumWithInitial = array.reduce((aux, current); => aux + current, initialValue
);

console.log(sumWithInitial)
```

**What is the difference between regular functions and arrow functions?**

There are many difference that we can find between these type of functions, here are some difference:

|                         | Regular functions                                                                                         | Arrow functions                                                                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Difference way to write | `function sum(a, b) {    return a + b  }` <br> <br> `const sum = function sum(a, b) {    return a + b  }` | `const sum = (a, b) => {   return a + b }` <br> <br> ` const sum = (a, b) => a + b`                                                                                                        |
| Arguments object        | `function regularFun() {    return Math.max(...arg); }`                                                   | `const arrowFun = () => {   // If we try to access the arg    we're gonna get an exception }` <br> <br> // Right way to do <br> <br> `const arrowFun = (...numbers) =>  Math.max(numbers)` |
| Prototype object        | `function regularFun() {}` <br> <br> `console.log(regularFun.prototype)` <br> <br> `{ constructor: f }`   | `const arrowFun = () => {}` <br> <br> `console.log(arrowFun.prototype) ` <br> <br> `undefined`                                                                                             |

**What is a higher order functions?**
Basically, is a function that takes a function as an argument, or returns a function.

_Example using higher order function:_

```
const radius = [1, 2, 3]

const area = function(radius) {
    return (Math.PI * radius * radius)
}

const diameter = function(radius) {
    return (2 * radius)
}

const calculate = function(radius, expression) {
    const result = []

    for (let i = 0; i < radius.length; i++) {
        result.push(expression(radius[i]))
    }

    return result;
}

console.log(calculate(radius, area))
```

**What is the difference between filter and find?**

With filter we can return an array that contain the element that satisfies the condition, but find returns an element that satisfies the condition

The main different is what it return each method

_Example using 'filter':_

```
const array = [1, 2, 3, 4, 5]

const pair = array.filter(element => element % 2 == 0)

console.log(pair)
```

_Example using 'find':_

```
const people = [
    {
        id: 1,
        name: "Pablito"
    },
    {
        id: 2,
        name: "Juanito"
    },
    {
        id: 3,
        name: "Fulanito"
    }
]

const person = people.find(element => element.id === 2)

console.log(person)
```

**What does it mean to pass variables by value?**

It means that the data associated with the variable is actually copied when is passed to a function, and any modification that we made in that function is gonna exists only in that function.

```
function squareArea(side) {
    side = Math.pow(2, side)

    return side;
}

let number = 2;
let result = squareArea(number);

console.log(result);
console.log(number);
```

**What does it mean to pass variables by reference?**

Pass by reference means that the value that you're passing in a function is gonna be affected when is returned, because your'e sending its location in memory so, is not a copy, is the value that is being sending

```
function passingByReference(variable) {
    return variable.x = 10;
}

let variable = { x: 50 }

console.log(passingByReference(variable))
console.log(variable)
```

**How can you copy objets and nested objects?**

In JS there is difference posibilities to copy an object, here is an example:

```
const user = {
    name: 'Pablito',
    location: 'El Salvador',
    age: 34
}

// You can use spread
{ ...user }

// Object.assing
Object.assign({}, user)

// JSON
JSON.parse(JSON.stringify(user))

```

**What does immutability mean?**

It means that you cannot change the value wihtout creating an entirely new value

```
let user = {
    name: "Pablito",
    location: "El Salvador",
    age: 34
};

let newUser = user;

const updateAge = (data, newAge) => {
    return {
        ...data,
        age: newAge
    }
}

console.log(updateAge(newUser, 35))
```

**What is OOP?**

It means object oriented programming and is a style based on programming with objects and classes. It has properties and actions.

It has 4 principles:

-   Abstraction
-   Encapsulation
-   Inheritance
-   Polymorphism

```
class User {
    name = "Pablito",
    age = 34,
    location = "El Salvador"
}

// Actions

study() {
    ....
}

work() {
    ....
}

eat () {
    ....
}
```

**Abstraction**

An abstraction is a way of hiding the implementation details and showing only the functionality
to the users

```
class Person {
    constructor() {
        if (this.constructor === Person)
            throw new Error("Abstract class cannot be instance");
    }

    info() {
        throw new Error("Added abstract method has no implementation");
    }
}
```

**Inheritance**

Enables you to define a class that takes all the functionality from a parent class and allows
yyou to add more. Using class inheritance, a class can inherit all the methods and properties of
another class

**_following the last example_**

```
class Student extends Person {
    info() {
        console.log("I'm a student");
    }
}

const student = new Student("Daniela", "Lopez");

student.info();
```

**Encapsulation**

You can blind the data or a single unit to the methods that are performing some operations on it, also permtis you
to validate and control the data flow. Is used for hiding information

```
class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}

let student = new Student(1, "Daniela", 15);

student.getAge(); 
console.log(student);

student.setAge(18);

student.getAge(); 
console.log(student);
```
**Polymorphism**

In Polymorphism, multiple objects can have the same methods but with different implementations, 
and an object and its related method are selected based on the user preferences.

```
class Dog extends Animal {}

class Cat extends Animal {}

const dog = new Dog();
const cat = new Cat();

dog.speak("barks");
cat.speak("meows");
```