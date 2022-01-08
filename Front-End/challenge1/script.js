// Modify this file only
const counter = document.getElementById('counter');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
let count = parseInt(counter.textContent);
console.log(typeof counter);
console.log(typeof increase);
console.log(typeof decrease);

btnIncrease.addEventListener("click", function(){
    counter.innerHTML = ++count;
});

btnDecrease.addEventListener("click", function(){
    counter.innerHTML = --count;
});
