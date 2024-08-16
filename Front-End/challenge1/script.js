// Modify this file only
const add = document.getElementById("increase");
const substract = document.getElementById("decrease");
const counter = document.getElementById('counter');

let number = Number(counter.textContent) || 0;

add.addEventListener("click", ()=>{
  number++;
  counter.textContent = number;
});

substract.addEventListener("click", ()=>{
  number--;
  counter.textContent = number;
});