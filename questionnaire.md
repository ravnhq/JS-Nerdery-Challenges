#Questionnaire

> **Do you know how and when to use let and/or const? Provide examples.**
>
> > We use let when the variable will change the value over time and const when >>the value will constant
> > _Examples:_
> > When we want accumulate variable as a total of sum we must use let
> > because the value will change

    let total = 0;
    let numbers = [2,3,45,7,8]
    numbers.forEach(number => total += number)

> > When we want storage a value or get a respond for a method we should use const

    const COUNTRY_NAMES = ['Germany', 'Norway', 'Island', 'Japan', 'Israel'];
    const JOIN_COUNTRIES = COUNTRY_NAMES.join(' ');

> **How does the variables scope works? Provide examples.**
>
> > **Let** and **const** have block scope which means you only can use within the block that you declared
> > For example: if we declare inside a if block or function only we can use inside this block.

    const number = 4
    if(number < 10){
        let numberInsideIf = 7;
        number *= numberInsideIf
    }

> > The example above the variable _numberInsideIf_ only can be used within if block
> > **var** have a global scope whih means you can use anywhere you want, this can lead to have unexpected
> > problems because it is difficult to track where you access to the variable.

> **When should I use forEach vs map? Provide examples.**

> **What is the reduce use for? Provide examples.**

> **What is the difference between regular functions and arrow functions? Provide examples.**

> **What is a higher order function? Provide examples.**

> **What is the difference between filter and find? Provide examples.**

> **What does it mean to pass variables by value? Provide examples.**

> **What does it mean to pass variables by reference? Provide examples.**

> **How can you copy objects and nested objects? Provide examples.**

> **What does immutability mean? Provide examples.**

> **What is OOP? Provide examples.**
