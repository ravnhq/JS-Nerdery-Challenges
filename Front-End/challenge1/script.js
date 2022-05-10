// Modify this file only
let btnIncrease = document.getElementById("increase");
let btnDecrease = document.getElementById("decrease");
let counter = document.getElementById("counter");
let int = 0;

increase = () => {
   int += 1;

   counter.innerText = int;
};

decrease = () => {
   int -= 1;
   counter.innerText = int;
};

btnIncrease.addEventListener("click", increase);
btnDecrease.addEventListener("click", decrease);
