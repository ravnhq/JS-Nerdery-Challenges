# Steps

1. Clone repo
2. Run `yarn` in the root of the project

## JS-Algorithms

Run `yarn test JS-Algorithms` in the root of the project
## Front-End

### Calculator App

#### How to use:

(C) key or Clear: Since there was no clear button in the UI provided, the equals
operator serves as clear after returning operation result instead of its usual
repeat-last-operation functionality. As per the rest of the cases, the app uses 
as reference (and tries to emulate behaviour from) an actual iPhone calculator 
wherever applicable. 

#### Cases covered:

-   Positive and negative integer arithmetic operations:

    -   -1 + -1 = -2
    -   -1 + 1 = 0
    -   1 + 1 = 2
    -   1 + -1 = 0
    -   -2 \* 1 = -2
    -   -2 \* -1 = 2
    -   2 \* -1 = -2
    -   2 \* 1 = 2
    -   22 - 5 = 17
    -   -22 - 5 = -27
    -   22 / 2 = 11
    -   22 / -2 = -11
    -   -22 / 2 = -11
    -   -22 / -2 = 11 

-   Division and multiplication with no previous operands will assume operand of
    zero and return zero:

    -   \* num = 0
    -   / num = 0

-   Multiple operations will be chained and display updated result upon entering
    next operator key. 

    -   3 + 5 + (8)...

-   Incomplete operations will ignore the last operator and display final result.
    Note: This is also the only possible error handled.

    -   3 + 5 + = 8

-   Division by zero will return Error
    -   num / 0 = Error
  