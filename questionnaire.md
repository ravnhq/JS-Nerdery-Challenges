# Questionnaire

> **Do you know how and when to use let and/or const? Provide examples.**
>
> > We use let when the variable will reasing over time and const when
> > the value will constant
> >
> > _Examples:_
> > When we want accumulate variable as a total of sum we must use let
> > because the value will change

    let total = 0;
    const numbers = [2,3,45,7,8]
    numbers.forEach(number => total += number)

> > When we want storage a value or get a respond for a method and this won't be reasing
> > we should use const and aslo when we declare an arrow function, in the most cases we use const
> > when we declare a arrow function.

    const COUNTRY_NAMES = ['Germany', 'Norway', 'Island', 'Japan', 'Israel'];
    const JOIN_COUNTRIES = COUNTRY_NAMES.join(' ');
    const arrowFunction = (a, b) => a + b;

> **How does the variables scope works? Provide examples.**
>
> > **Let** and **const** have block scope which means you only can use within the block that you declared.
> >
> > For example: If we declare inside a if block or function we only can use inside this block.

    let number = 4
    if(number < 10){
        let numberInsideIf = 7;
        number *= numberInsideIf
    }
    numberInsideIf = 8 //This will give a error

> > The above example the variable _numberInsideIf_ only can be used within if
> > block
> >
> > **Var** have a global scope which means you can use anywhere you want, this can lead to have unexpected
> > behavior because it is difficult to track where you access to the variable.

    function exampleFunction(number) {
    var numberInsideFunction = 7;
    number *= numberInsideFunction;
    }
    numberInsideFunction = 8; //This DOESN'T give us an error
    console.log(numberInsideFunction);

> > The above example the variable _numberInsideFunction_ has a global scope for this reason
> > we dont get an error when we use outside the function, this is a simple example, but when we have
> > a large project this que lead us to unexpected behaviors

> **When should I use forEach vs map? Provide examples.**
>
> > It depends on what you need because forEach run over an each item but doesn't return anything, and the other hand map run over each item, and also return a new array with the changes that you want.

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    numbers.forEach((num) => console.log(num)); //In this case is better use forEach because
                                                //I only want to show the numbers

    const powNumbers = numbers.map((num) => num * num); //In this case is better use map because
                                                        //I need a new array with changes.

> **What is the reduce use for? Provide examples.**
>
> > Reduce is a method that will loop over items in an array and every single time that you loop
> > over an item in an array, you have the option to return a value and you can use to
> > accumulate values.

    const numbers = [1, 2, 3, 4];
    const total = numbers.reduce((total, item) => total + item, 0); // total = 10

> **What is the difference between regular functions and arrow functions? Provide examples.**
>
> > The main differences between them are in how they handle the "this" keyword, the
> > "arguments" object.
> >
> > 1. "this" keyword: Arrow functions do not have their own "this" keyword.

    function greetRegular() {
    console.log('Hello, world!');
    console.log(this);
    }
    greetRegular(); // show: Object [global] {...}...


    const greetArrow = () => {
    console.log('Hello, world!');
    console.log(this); // "this" refers to the lexical scope where the function is defined
    };

    greetArrow(); // show an entity object: {}

> > 2.  "arguments" object: Arrow functions do not have their own "arguments" object,
> >     regular functions have their own "arguments" object which represents the named
> >     and unnamed arguments passed to the function.

    function sumRegular(a, b) {
    console.log(arguments); // Arguments object containing arguments
    return a + b;
    }

    const sumArrow = (a, b) => {
    console.log(arguments); // ReferenceError: arguments is not defined
    return a + b;
    };

> **What is a higher order function? Provide examples.**
>
> > High order functions are methods that pass as arguments another function (callback) or function that return another function.

    function example1(url) {
        fetch(url)
            .then((response) => {
            return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }

    function anotherHighOrderFunction() {
        let name = "Mozilla";
        return function displayName() {
            console.log(name);
        }
    }

> > The above example _example1_ we use _.then_ and _.catch_ this are methods to handle promises
> > and these are high order functions because accept a callback as an argument. Also
> > _example1_ return another function for this reason is a high order

> **What is the difference between filter and find? Provide examples.**
>
> > _find_ return the first element that meets the condition
> >
> > _filter_ return a new array with all elements that meets the condition

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const oneNumber = numbers.find((num) => num > 5); // return 6
    const biggerThanFive = numbers.filter((num) => num > 5); // return [ 6, 7, 8, 9 ]

> **What does it mean to pass variables by value? Provide examples.**
>
> > Passing variables by value means that you pass a copy of the value of the variable, and if you make a change
> > inside the function you will no change the original variable. Example:

    let firstName = 'fabio';
    function showNameUpperCase(name) {
        name = name.toUpperCase();
        console.log(name);
    }
    console.log(firstName) // fabio
    showNameUpperCase(firstName);
    console.log(firstName) // fabio

> > The example above show the variable _firstName_ before and after of execute _showNameUpperCase(firstName)_
> > and in the 2 cases the value was the same, because when pass as an argument a primitive type we pass a copy
> > of the variable.

> **What does it mean to pass variables by reference? Provide examples.**
>
> > Passing variables by refence means that you pass the original variable (exactly the value of the memory
> > where is storage), and if you make a change inside the function you will change the original variable,
> > this happens with arrays and objects Example:

    let person = { name: 'fabio', lastName: 'flores' };
    function addBirthday(person) {
        person.birthday = 'Dec 19th';
    }
    console.log(person); // { name: 'fabio', lastName: 'flores' }
    addBirthday(person);
    console.log(person); // { name: 'fabio', lastName: 'flores', birthday: 'Dec 19th' }

> > The example above show the object _person_ before executing _addBirthday_ then after executing and we can see
> > the object was modified because objects as arguments are passing by reference

> **How can you copy objects and nested objects? Provide examples.**
>
> > **Copy using** '=' (bad way to copy objects)
> >
> > This copy the object by reference (memory direction) and If we change one objects both will be update

    const nestedObject = {
        name: 'fabio',
        adress: {
            state: 'La Paz',
        },
    };
    const copyByReference = nestedObject;
    copyByReference.name = 'Melani';
    console.log({ nestedObject, copyByReference }); //both will have name = Melani

> > **Copy using Obejct.assign**
> >
> > This make a shallow copy, only work in the first level of the object, if you have a nested object will copy by reference
> > the nested part

    const nestedObject = {
        name: 'fabio',
        adress: {
            state: 'La Paz',
        },
    };
    const copyByObjectAssign = Object.assign({}, nestedObject);

    //In this case only change in copyByObjectAssign because this field is in the first level of the object
    copyByObjectAssign.lastName = 'Mendoza';

     //Change in both objects (nestedObject and copyByObjectAssign) because this field
     //is in the second level (nested)
    copyByObjectAssign.adress.municipio = 'San Juan Nonualco';

> > **Copy using JSON.stringify/parse**
> > This made a deep copy (means that works with nested object) but it doesnt work objects with
> > functions

    const nestedObject = {
        name: 'fabio',
        adress: {
            state: 'La Paz',
        },
    };
    const copyByJson = JSON.parse(JSON.stringify(nestedObject));

    //The next both changes only happeds in copyByJson object
    copyByJson.lastName = 'Mendoza';
    copyByJson.adress.country = 'Canada';

> **What does immutability mean? Provide examples.**
>
> > Immutability refers to the property of an object or a value that cannot be changed after it is
> > created. Once an object or a value is immutable, its state cannot be modified, and any attempt to
> > do so results in the creation of a new object or value with the desired changes
> >
> > **Strings and Numbers:** In JavaScript, strings and numbers are immutable. Once a string or number
> > is created, its value cannot be changed. Any operation that appears to modify a string or number
> > actually creates a new string or number.

    let str1 = "fabio";
    let str2 = str1.toUpperCase(); // Creates a new string with the value "FABIO"
    console.log(str1); // "fabio"
    console.log(str2); // "FABIO"

> > **Objects:** Objects in JavaScript are mutable, and their properties can be modified. However,
> > it is possible to create immutable objects using techniques such as _Object.freeze()_

    let obj1 = {name: "Fabio", age: 22};
    Object.freeze(obj1); // Makes obj1 immutable
    obj1.age = 35; // This assignment will be ignored
    console.log(obj1); // {name: "Fabio", age: 22}

> **What is OOP? Provide examples.**

> > OOP: Object Oriented Programming which is a programming paradigm that uses objects as
> > fundamental building blocks to represent and manipulate data and behavior. In OOP, objects are
> > instances of classes, which are a kind of templates that define the structure, properties,
> > and methods of objects. OOP provides abstraction, encapsulation, inheritance, and polymorphism
> > as key concepts for organizing and structuring code.

    class Person {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }

        sayHello() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }

    let person1 = new Person("Fabio", 22);
    person1.sayHello(); // "Hello, my name is Fabio and I'm 22 years old.
