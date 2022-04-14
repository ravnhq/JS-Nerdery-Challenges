/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const arrayButton = document.querySelectorAll("button");
const arrayOperation = [];
const arrayNumbers = [];
let isTouched = false;
let result = 0;
let isResolved = false;

for (let button of arrayButton) {
  if (
    button.textContent !== "/" &&
    button.textContent !== "-" &&
    button.textContent !== "+" &&
    button.textContent !== "X" &&
    button.textContent !== "="
  ) {
    arrayNumbers.push(button);
  } else {
    arrayOperation.push(button);
  }
}

function evaluate(mathematicExpression) {
  return new Function("return " + mathematicExpression)();
}

function addValue(value) {
  if (isTouched === false) {
    display.innerHTML = value;
    isTouched = true;
  } else {
    if (value === "0" && display.textContent === "0") {
      return;
    } else {
      if (display.textContent === "0") {
        display.innerHTML = value;
      } else {
        display.innerHTML += value;
      }
    }
  }
}

function addSymbol(value) {
  const notConsecutiveOperators =
    display.textContent[display.textContent.length - 1] == value ||
    !parseInt(display.textContent[display.textContent.length - 1]);

  if (isTouched === false && isResolved === false) {
    return;
  } else {
    isTouched = true;
    if (notConsecutiveOperators) {
      if (display.textContent[display.textContent.length - 1] == "0") {
        display.innerHTML += value;
      }
      return;
    } else {
      display.innerHTML += value;
    }
  }
}

function resolve() {
  result = display.textContent;
  result = result
    .split("")
    .map((element, index) => (element == "X" ? (result[index] = "*") : element))
    .toString()
    .replace(/,/g, "");
  try {
    display.innerHTML = evaluate(result);
    isTouched = false;
    isResolved = true;
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < arrayNumbers.length; i++) {
  arrayNumbers[i].addEventListener("click", () => {
    addValue(arrayNumbers[i].textContent);
  });
}

for (let i = 0; i < arrayOperation.length; i++) {
  if (arrayOperation[i].textContent === "=") {
    arrayOperation[i].addEventListener("click", () => {
      resolve();
    });
  } else {
    arrayOperation[i].addEventListener("click", () => {
      addSymbol(arrayOperation[i].textContent);
    });
  }
}
