// Modify this file only
const myincrease = document.querySelector("#increase");
const mydecrease = document.querySelector("#decrease");
const counter = document.querySelector("#counter");
let count = 0;

myincrease.addEventListener("click", () => {
  count += 1;
  counter.innerText = count;
});
mydecrease.addEventListener("click", () => {
  count -= 1;
  counter.innerText = count;
});
