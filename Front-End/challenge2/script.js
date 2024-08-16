const allButtons = document.querySelectorAll("button");
const displayOperation = document.getElementById("display");
let restart = true, negativeSecondNumber = false;
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
    negativeSecondNumber = false;
    switch (symbolOpressed) {
        case "/":
            return  firstValue / secondValue === Infinity ? "ERROR": firstValue / secondValue;
        case "X":
            return firstValue * secondValue;
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
    }
}

const restartAll=()=>{
    restart = true;
    limitOperation = 0;
    firstValueToOperation = "", secondValueToOperation = "";
    symbolOpressed = "";
    negativeSecondNumber = false
}

allButtons.forEach(button =>{
    button.onclick = () =>{
        if (isSymbol(button.innerText)) {
            //Add symbols
            if (restart) {
                if (button.innerText === "\/" || button.innerText === "X") {
                    symbolOpressed = button.innerText;
                    displayOperation.textContent = button.innerText;
                    firstValueToOperation = 0;
                    limitOperation = 1;
                    restart = false;
                    return;
                }
                if (button.innerText === "-") {
                    displayOperation.textContent = button.innerText;
                    limitOperation = 1;
                    restart = false;
                    return;
                }
                return;
            }
            if (limitOperation === 0) {
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
                if (symbolOpressed !== "-" && !negativeSecondNumber) {
                    displayOperation.textContent = displayOperation.textContent + button.innerHTML;
                    secondValueToOperation = secondValueToOperation + button.innerText;
                    negativeSecondNumber = true;
                }
                return;
            }
            if (limitOperation === 2) {
                //calculate Operation
                displayOperation.textContent = operation();
                if (operation() === "ERROR") {
                    return restartAll();
                }
                firstValueToOperation =  displayOperation.innerText;
                secondValueToOperation = "";
                if(button.innerText === "="){
                    return restartAll();
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
        if (limitOperation === 1) {
            if (displayOperation.textContent === "-") {
                displayOperation.textContent = displayOperation.textContent + button.innerHTML;        
                firstValueToOperation = displayOperation.textContent; 
                return limitOperation = 0;
            }
            limitOperation = 2;
        }
        displayOperation.textContent = displayOperation.textContent + button.innerHTML;
        firstValueToOperation = limitOperation === 0 ? firstValueToOperation + button.innerText : firstValueToOperation;
        secondValueToOperation = limitOperation === 2 ? secondValueToOperation + button.innerText: secondValueToOperation;
    }
});
window.addEventListener("keydown",(e)=>{
    if(e.key === "Delete"){
        restartAll();
        displayOperation.textContent = "0";
    }
});