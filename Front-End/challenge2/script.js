/*
TO-DO:

- Modify this file only
- The calculator should be completely functional
*/
let firstNum = 0;
let secondNum = 0;
let operator = "";

const buttons = Array.from(document.getElementsByTagName("button"));
const display = document.getElementById("display");

buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        switch (e.target.innerText) {
            case "+":
                operator = "+"
                firstNum = parseFloat(display.textContent)
                display.textContent = "0"
                break;
            case "-":
                operator = "-"
                firstNum = parseFloat(display.textContent)
                display.textContent = "0"
                break;
            case "X":
                operator = "X"
                firstNum = parseFloat(display.textContent)
                display.textContent = "0"
                break;
            case "/":
                operator = "/"
                firstNum = parseFloat(display.textContent)
                display.textContent = "0"
                break;
            case "=":
                secondNum = parseInt(display.textContent)

                operator === "+" ? display.textContent = firstNum + secondNum : 
                operator === "-" ? display.textContent = firstNum - secondNum : 
                operator === "X" ? display.textContent = firstNum * secondNum : 
                operator === "/" ? display.textContent = firstNum / secondNum : null
                break;

            default:
                display.textContent === "0" ? display.textContent = e.target.textContent : 
                display.textContent += e.target.textContent
        }
    });
});
