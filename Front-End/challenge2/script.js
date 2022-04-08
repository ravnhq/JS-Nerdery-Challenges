/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
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
const display = document.getElementById("display");
const add = document.getElementById('add')
const equals = document.getElementById('equals')
const subtrack = document.getElementById('subtrack')
const multiplication = document.getElementById('multiplication')
const division = document.getElementById('division')
let touch = 0;
let result = 0;
let flag = false;

function evaluate(fn) {
  return new Function('return ' + fn)();
}

function addValue(value) {
  if (touch == 0) {
    display.innerHTML = value;
    touch = 1
  } else {
    if (value == "0" && display.textContent == "0") {
      return
    } else {
      if (display.textContent == "0") {
        display.innerHTML = value
      } else {
        display.innerHTML += value;
      }

    }
  }

}

function addSymbol(value) {
  if (touch == 0 && flag == false) {
    return
  } else {
    touch = 1
    if (display.textContent[display.textContent.length - 1] == value || !parseInt(display.textContent[display.textContent.length - 1])) {

      if (display.textContent[display.textContent.length - 1] == "0") {
        display.innerHTML += value;

      }
      return
    } else {
      display.innerHTML += value;

    }

  }
}

function resolve() {
  result = display.textContent
  result = result.split('').map((element, index) => element == "X" ? result[index] = "*" : element).toString().replace(/,/g, "")
  try {
    display.innerHTML = evaluate(result)
    touch = 0
    flag = true
  } catch (error) {
    console.log(error)
  }
  return true


}


zero.addEventListener("click", () => addValue(zero.textContent));
one.addEventListener("click", () => addValue(one.textContent));
two.addEventListener("click", () => addValue(two.textContent));
three.addEventListener("click", () => addValue(three.textContent));
four.addEventListener("click", () => addValue(four.textContent));
five.addEventListener("click", () => addValue(five.textContent));
six.addEventListener("click", () => addValue(six.textContent));
seven.addEventListener("click", () => addValue(seven.textContent));
eight.addEventListener("click", () => addValue(eight.textContent));
nine.addEventListener("click", () => addValue(nine.textContent));
add.addEventListener("click", () => addSymbol(add.textContent));
multiplication.addEventListener("click", () => addSymbol(multiplication.textContent));
division.addEventListener("click", () => addSymbol(division.textContent));
subtrack.addEventListener("click", () => addSymbol(subtrack.textContent));
equals.addEventListener("click", () => resolve());