/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
let a;
let b;
let operation;
let total = 0;

const display = document.getElementById("display");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const add = document.getElementById("add");
const subtrack = document.getElementById("subtrack");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equals = document.getElementById("equals");

const clean = () => {
  display.textContent = '';
}

const numberFunction = e => {
  if(display.textContent === '0') clean();
  display.textContent = display.textContent + e.target.textContent;
}

zero.addEventListener("click", numberFunction);
one.addEventListener("click", numberFunction);
two.addEventListener("click", numberFunction);
three.addEventListener("click", numberFunction);
four.addEventListener("click", numberFunction);
five.addEventListener("click", numberFunction);
six.addEventListener("click", numberFunction);
seven.addEventListener("click", numberFunction);
eight.addEventListener("click", numberFunction);
nine.addEventListener("click", numberFunction);
