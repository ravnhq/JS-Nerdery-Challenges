# JS Fundamentals Questions

**Do you know how and when o use let and/or const?**

You use *let* for variables that are gonna change/reassign another value and const when you have a constant value in the variable

*Example with 'const'*

```
const name = "Daniela"

console.log(name)
```

*Example with 'let'*

```
for(let i = 0; i < n; i++) {
    console.log(i);
}
```

**How does the variables scope works?**

Depending how you use the variables in your code is how you have accessibility and visibility of these ones. In other words, is when you can or cannot use/access to a variable, depending if this is in a block or not

*Example using 'let':*

```
{ 
    let number = 4;
}

// Number can't be used here
```

*Example using 'var':*

```
{
    var number = 4
}

// Number can be used here

```

*Example with local scope:*

```
{
    for(let i = 0; i < n; i++) {
        const number = 10;
    }
}

// Number cannot be used here
```

**When should I use *for each* vs *map*?**

Map is used to transform each element of an array or either an object, it returns a new array 

*Example using 'map':*

```
const array = [1, 2, 3, 4]

array.map(function(e) {
    return e * 2
})

console.log(array)

El resultado será:
[2, 4, 6, 8]

```

forEach is used to loop each element of an array or object 

*Example using 'forEach':*

```
array.forEach(function(e) {
    console.log(e * 2)
})

El resultado será:
2
4
6
8
```

**What is the *reduce* use for?**

Is used to make calculations and it returns a value. The main idea of use reduce is to have a map and filter working together, you can filter the data that you have and map it in the same step

*Example using 'reduce':*

```
const array = [1, 2, 3, 4]

const initialValue = 10;

const sumWithInitial = array.reduce((aux, current); => aux + current, initialValue
);

console.log(sumWithInitial)
```

**What is the difference between regular functions and arrow functions?**

There are many difference that we can find between these type of functions, here are some difference: 

|                         | Regular functions                                                                                                         | Arrow functions                                                                                                                                                                                        |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Difference way to write | ``` function sum(a, b) {    return a + b  } ``` <br> <br> ``` const sum = function sum(a, b) {    return a + b  } ```     | ``` const sum = (a, b) => {   return a + b } ``` <br> <br> ```  const sum = (a, b) => a + b ```                                                                                                        |
| Arguments object        | ``` function regularFun() {    return Math.max(...arg); } ```                                                             | ``` const arrowFun = () => {   // If we try to access the arg    we're gonna get an exception } ``` <br> <br> // Right way to do <br> <br> ``` const arrowFun = (...numbers) =>  Math.max(numbers) ``` |
| Prototype object        | ``` function regularFun() {} ``` <br> <br> ``` console.log(regularFun.prototype) ``` <br> <br> ``` { constructor: f } ``` | ``` const arrowFun = () => {} ``` <br> <br> ``` console.log(arrowFun.prototype)  ``` <br> <br> ``` undefined ```                                                                                       |

**What is a higher order functions?**
Basically, is a function that takes a function as an argument, or returns a function. 

*Example using higher order function:*

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

*Example using 'filter':*

```
const array = [1, 2, 3, 4, 5]

const pair = array.filter(element => element % 2 == 0)

console.log(pair)
```

*Example using 'find':*

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

* Abstraction
* Encapsulation
* Inheritance
* Polymorphism

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