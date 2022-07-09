const allButtons = document.querySelectorAll("button");
const displayOperation = document.getElementById("display");

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
            return console.log("Soy una operacion");
        }
        return console.log("Soy un numero");
    }
})