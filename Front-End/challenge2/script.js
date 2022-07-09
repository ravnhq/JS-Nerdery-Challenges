const allButtons = document.querySelectorAll("button");
const displayOperation = document.getElementById("display");
let restart = true;
let limitOperation = 0;
let firstValueToOperation = "", secondValueToOperation = "";
let symbolOpressed = "";
const isSymbol = (symbol) => {
    switch (symbol) {
        case "/":
            return true;
        case "X":
            return true;
        case "+":
            return true;
        case "-":
            return true;
        case "=":
            return true;
        default:
            return false;
    }
}
const operation = () =>{
    const firstValue = parseFloat(firstValueToOperation);
    const secondValue = parseFloat(secondValueToOperation);
    switch (symbolOpressed) {
        case "/":
            return  firstValue / secondValue;
        case "X":
            return firstValue * secondValue;
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
    }
}

allButtons.forEach(button =>{
    button.onclick = () =>{
        if (isSymbol(button.innerText)) {
            //Add symbols
            if (restart) {
                return;
            }
            if (limitOperation === 0 || limitOperation === 3) {
                //first symbol
                if(button.innerText === "="){
                    return;
                }
                displayOperation.textContent = displayOperation.textContent + button.innerHTML;
                symbolOpressed = button.innerText;
                return limitOperation = 1;
            }
            if (limitOperation === 1) {
                //Symbol repeated
                return;
            }
            if (limitOperation === 2) {
                //calculate Operation
                console.log("Realizar Operacion", firstValueToOperation + "-" + secondValueToOperation);
                displayOperation.textContent = operation();
                firstValueToOperation =  displayOperation.innerText;
                secondValueToOperation = "";
                if(button.innerText === "="){
                    return limitOperation = 3;
                }
                symbolOpressed = button.innerText;
                displayOperation.textContent = displayOperation.innerText + button.innerText; 
                return limitOperation = 1;
            }
        }
        //Add numbers
        if (restart) {
            if (button.innerText === "0") {
                return;
            }
            displayOperation.textContent = button.innerHTML;
            firstValueToOperation = button.innerText;
            return restart = false;
        }
        if (limitOperation === 3) {
            return;
        }
        if (limitOperation === 1) {
            if (button.innerText === "0") {
                return;
            }
            limitOperation = 2;
        }
        displayOperation.textContent = displayOperation.textContent + button.innerHTML;
        firstValueToOperation = limitOperation === 0 ? firstValueToOperation + button.innerText : firstValueToOperation;
        secondValueToOperation = limitOperation === 2 ? secondValueToOperation + button.innerText: secondValueToOperation;
    }
});