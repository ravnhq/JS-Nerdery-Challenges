// Modify this file only
var actualNumber = 0;

document.getElementById("increase").addEventListener("click", increaseNumber);
document.getElementById("decrease").addEventListener("click", decreaseNumber);

function increaseNumber(){
    actualNumber = actualNumber + 1;
    document.getElementById("counter").innerHTML = actualNumber;
}

function decreaseNumber(){
    actualNumber = actualNumber - 1;
    document.getElementById("counter").innerHTML = actualNumber;
}
