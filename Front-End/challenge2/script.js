/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

window.onload = () => {
  //Display Listener

  let displayField = document.getElementById("display");
  let operator = "";
  let num1 = 0;
	let settedNum1 = false;
  let num2 = 0;

  //Number Listeners
  document.getElementById("zero").addEventListener("click", displayNumber);
  document.getElementById("one").addEventListener("click", displayNumber);
  document.getElementById("two").addEventListener("click", displayNumber);
  document.getElementById("three").addEventListener("click", displayNumber);
  document.getElementById("four").addEventListener("click", displayNumber);
  document.getElementById("five").addEventListener("click", displayNumber);
  document.getElementById("six").addEventListener("click", displayNumber);
  document.getElementById("seven").addEventListener("click", displayNumber);
  document.getElementById("eight").addEventListener("click", displayNumber);
  document.getElementById("nine").addEventListener("click", displayNumber);

  //Operation Listeners

  document.getElementById("division").addEventListener("click", setOperator);
  document.getElementById("multiplication").addEventListener("click", setOperator);
  document.getElementById("subtrack").addEventListener("click", setOperator);
  document.getElementById("add").addEventListener("click", setOperator);
  document.getElementById("equals").addEventListener("click", execute);

  function displayNumber() {
    if (displayField.innerText != "0") {
      displayField.innerText += this.innerText;
    } else {
      displayField.innerText = this.innerText;
    }
  }

  function setOperator() {

    if (operator != "") {
      execute();
    }

    settedNum1 ? setNum1(displayField.innerText) : setNum2(displayField.innerText);
    operator = this.innerText;
  }

  function setNum1( number ){
    num1 = number;
    settedNum1 = true;
  }

  function setNum2( number ){
    num2 = number;
    settedNum1 = false;
  }

  function execute() {
    let result = 0;

    switch (operator) {
      case "/":
        if (num2 == 0) {
          displayField.innerText = "Cannot divide by zero";
          return;
        }
        result = num1 / num2;
        break;

      case "+":
        result = num1 + num2;
        break;

      case "-":
        if (displayField.innerText == 0) {
          displayField.innerText = "-";
          return;
        }
        result = num1 - num2;
        break;
      case "+":
        result = num1 + num2;
        break;
    }
    displayField.innerText = result;
    clear();
  }

  function clear() {
    operator = "";
    num1 = 0;
    num2 = 0;
  }
};
