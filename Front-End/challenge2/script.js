/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

var resultInScreen = "";
var digitizedNumber = 0;;
var buttonsDigitizedList = new Array();
var stringOfDigitizedButtons = "";
var show = "";

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtrack").addEventListener("click", subtrack);
document.getElementById("division").addEventListener("click", division);
document.getElementById("multiplication").addEventListener("click", multiplication);

document.getElementById("zero").addEventListener("click", clickButtonZero);
document.getElementById("one").addEventListener("click", clickButtonOne);
document.getElementById("two").addEventListener("click", clickButtonTwo);
document.getElementById("three").addEventListener("click", clickButtonThree);
document.getElementById("four").addEventListener("click", clickButtonFour);
document.getElementById("five").addEventListener("click", clickButtonFive);
document.getElementById("six").addEventListener("click", clickButtonSix);
document.getElementById("seven").addEventListener("click", clickButtonSeven);
document.getElementById("eight").addEventListener("click", clickButtonEight);
document.getElementById("nine").addEventListener("click", clickButtonNine);

document.getElementById("equals").addEventListener("click", clickButtonEquals);

function clickButtonZero(){
    resultInScreen = resultInScreen + "0";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonOne(){
    resultInScreen = resultInScreen + "1";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonTwo(){
    resultInScreen = resultInScreen + "2";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonThree(){
    resultInScreen = resultInScreen + "3";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonFour(){
    resultInScreen = resultInScreen + "4";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonFive(){
    resultInScreen = resultInScreen + "5";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonSix(){
    resultInScreen = resultInScreen + "6";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonSeven(){
    resultInScreen = resultInScreen + "7";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonEight(){
    resultInScreen = resultInScreen + "8";
    document.getElementById("display").innerHTML = resultInScreen;
}

function clickButtonNine(){
    resultInScreen = resultInScreen + "9";
    document.getElementById("display").innerHTML = resultInScreen;
}

function add(){
    getNumber();
    buttonsDigitizedList.push("+");
}

function subtrack(){
    getNumber();
    buttonsDigitizedList.push("-");
}

function division(){
    getNumber();
    buttonsDigitizedList.push("/");
}

function multiplication(){
    getNumber();
    buttonsDigitizedList.push("*");
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
