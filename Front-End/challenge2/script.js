/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

let resultInScreen = "";
let digitizedNumber = 0;;
const buttonsDigitizedList = new Array();
let stringOfDigitizedButtons = "";

const operationsArray = [
    {"name": "add", "value": "+"},
    {"name": "subtrack", "value": "-"},
    {"name": "division", "value": "/"},
    {"name": "multiplication", "value": "*"}
]

const numbersArray = [
    {"name": "zero", "value": "0"},
    {"name": "one", "value": "1"},
    {"name": "two", "value": "2"},
    {"name": "three", "value": "3"},
    {"name": "four", "value": "4"},
    {"name": "five", "value": "5"},
    {"name": "six", "value": "6"},
    {"name": "seven", "value": "7"},
    {"name": "eight", "value": "8"},
    {"name": "nine", "value": "9"}
]

addEventListeners();

function addEventListeners(){

    for(let number of numbersArray){
        document.getElementById(number.name).addEventListener("click", clicNumberkButton.bind(this, number.value));
    }

    for(let operation of operationsArray){
        document.getElementById(operation.name).addEventListener("click", clickOperationButton.bind(this, operation.value));
    }

    document.getElementById("equals").addEventListener("click", clickButtonEquals);
}

function clicNumberkButton(number){
    resultInScreen = resultInScreen + number;
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickOperationButton(operation){
    getNumber()
    buttonsDigitizedList.push(operation);
}

function clickButtonEquals(){
    getNumber();

    for(let index = 0; index < buttonsDigitizedList.length; index++){
        stringOfDigitizedButtons = stringOfDigitizedButtons + buttonsDigitizedList[index];
    }

    let operationResult = eval(stringOfDigitizedButtons);

    document.getElementById("display").innerHTML = operationResult;

    clearData();
}

function getNumber(){
    digitizedNumber = Number(resultInScreen);
    buttonsDigitizedList.push(digitizedNumber);
    resultInScreen = "";
}

function clearData(){
    digitizedNumber = 0;
    resultInScreen = "";
    stringOfDigitizedButtons = "";
    buttonsDigitizedList.length = 0;
}
