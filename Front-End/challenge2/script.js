/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const BUTTONS = document.querySelectorAll('button');
const DISPLAY = document.getElementById('display')

let DISPLAY_INFORMARION_ARRAY = []

const BUTTON_CONVERTIONS  = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    subtrack: "-",
    multiplication: "×",
    division: "÷",
    equals: "=",
    add: "+"
};

const evaluateExpression = ({expression}) => {
    const OPERATORS = ["+", "-", "*", "/"]
    const START_OPERATORS_DENIED = ["*", "/"]

    let expressionString = expression
      .join("")     
      .replaceAll("×", "*")  
      .replaceAll("÷", "/")
      .replaceAll(" ", ""); 

    if (expressionString === '') return 0
    
    
    if (expressionString.includes("/0")) {
        return "Error";
    }
    
    if (START_OPERATORS_DENIED.includes(expressionString[0])) {
        return 0
    }

    if (OPERATORS.includes(expressionString[expressionString.length - 1])) {
        expressionString = expressionString.slice(0, -1);
    }

    return eval(expressionString);
}

const RefreshScreen = () => {
    const DISPLAY_INFORMARION_LENGTH = DISPLAY_INFORMARION_ARRAY.length
    const ContentDisplay = DISPLAY_INFORMARION_LENGTH === 0 ? '0' : DISPLAY_INFORMARION_ARRAY.join("")

    DISPLAY.innerHTML = ContentDisplay
}

const DisplayResult = () =>{
    const result = evaluateExpression({expression:DISPLAY_INFORMARION_ARRAY})
    DeleteAllElements()

    if (result !== 0 && result !== "Error") {
        DISPLAY_INFORMARION_ARRAY = [result]        
    }

    DISPLAY.innerHTML = result
}

const DeleteElement = () =>{
    DISPLAY_INFORMARION_ARRAY = DISPLAY_INFORMARION_ARRAY.slice(0,-1)
    RefreshScreen()
}

const DeleteAllElements = () =>{
    DISPLAY_INFORMARION_ARRAY = []
    RefreshScreen()
}

const AddElement = ({id}) => {
    if (id === 'equals') {
        DisplayResult()
        return;
    }
    const DISPLAY_INFORMARION_LENGTH = DISPLAY_INFORMARION_ARRAY.length
    const value = BUTTON_CONVERTIONS[id]
    const LastElement = DISPLAY_INFORMARION_ARRAY[DISPLAY_INFORMARION_LENGTH - 1]
    const OPERATORS = ["+", "-", "×", "÷"]

    if (OPERATORS.includes(value) && OPERATORS.includes(LastElement)) {
        DISPLAY_INFORMARION_ARRAY = [
            ...DISPLAY_INFORMARION_ARRAY.slice(0, DISPLAY_INFORMARION_LENGTH - 1), 
            value
        ];
        RefreshScreen();
        return;
    }
          
    DISPLAY_INFORMARION_ARRAY.push(value)                
    RefreshScreen()
}

BUTTONS.forEach(Button => {
    Button.addEventListener('click',(e)=>{
        const {id} = e.target
        AddElement({id})
    })   
});

document.addEventListener('keydown',(e) => {
    if (e.key === "Backspace") {
        DeleteElement()
        return
    }

    if (e.key === "c" || e.key === "C") {
        DeleteAllElements()
        return
    }
});
  

