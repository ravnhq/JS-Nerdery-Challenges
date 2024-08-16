// Modify this file only
let actualNumber = 0;

document.getElementById("increase").addEventListener("click", increaseNumber);
document.getElementById("decrease").addEventListener("click", decreaseNumber);

function increaseNumber(){
    actualNumber += 1;
    document.getElementById("counter").innerHTML = actualNumber;
}

function decreaseNumber(){
    actualNumber -= 1;
    document.getElementById("counter").innerHTML = actualNumber;
}
