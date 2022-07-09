const allButtons = document.querySelectorAll("button");
const displayOperation = document.getElementById("display");
let restart = true;
let limitOperation = 0;
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

allButtons.forEach(button =>{
    button.onclick = () =>{
        if (isSymbol(button.innerText)) {
            //Add symbols
            if (limitOperation === 0) {
                displayOperation.textContent = displayOperation.textContent + button.innerHTML;
                return limitOperation = 1;
            }
            if (limitOperation === 2) {
                return console.log("Realizar Operacion");
            }
        }

        //Add numbers
        if (restart) {
            if (button.innerText === "0") {
                return;
            }
            displayOperation.textContent = button.innerHTML;
            return restart = false;
        }
        if (limitOperation === 1) {
            if (button.innerText === "0") {
                return;
            }
            limitOperation = 2;
        }
        displayOperation.textContent = displayOperation.textContent + button.innerHTML;
             
    }
})