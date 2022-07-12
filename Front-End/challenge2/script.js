/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

let a;
let b;
let operation;
let total = 0;
let prev = false;
let fromEqual = false;

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

const result = () => {
  if(!display.textContent) return;
  if(fromEqual) {
    if(!a) { 
      a = display.textContent;
    }
    display.textContent = '';
    fromEqual = false;
    return;
  }
  if(!a) {
    a = display.textContent;
    clean();
    return;
  } else if (!b) {
    b = display.textContent;
  }
  switch(operation){
    case "+":
      total = Number(a) + Number(b);
      break;
    
    case "-":
      total = Number(a) - Number(b);
      break;
    
    case "*":
      total = Number(a) * Number(b);
      break;

    case "/":
      if(Number(b) == 0){
        display.textContent ="Error";
        setTimeout(() => {
          a = '';
          b = '';
          operation = '';
          total = '';
          display.textContent = '0';
        }, 2000);
        return;
      }

      total = Number(a) / Number(b);
      break;

    default:
      break;
  }
  clean();
  display.textContent = total;
  a = total;
  b = '';
  operation = '';
}

const numberFunction = e => {
  if(display.textContent === '0') clean();
  display.textContent = display.textContent + e.target.textContent;
  if(total) {
    display.textContent = display.textContent.replace(total, '');
    total = '';
  }
  if(!operation) {
    a = '';
  }
}

const prevResult = () => {
  if(operation) {
    prev = true;
    result();
  }
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

add.addEventListener("click", () => {
  prevResult();
  operation = "+";
  if(prev) {
    prev = false;
  } else {
    result();
  }
});

subtrack.addEventListener("click", () => {
  if(display.textContent === '' || display.textContent === '0'){
    display.textContent = "-";
    return;
  }
  prevResult();
  operation = "-";
  if(prev) {
    prev = false;
  } else {
    result();
  }
});


multiplication.addEventListener("click", () => {
  prevResult();
  operation = "*";
  if(prev) {
    prev = false;
  } else {
    result();
  }
})

division.addEventListener("click", () => {
  prevResult();
  operation = "/";
  if(prev) {
    prev = false;
  } else {
    result();
  }
});

equals.addEventListener("click", () => {
  if(!fromEqual) {
    result();
    fromEqual = true;
  }
});


