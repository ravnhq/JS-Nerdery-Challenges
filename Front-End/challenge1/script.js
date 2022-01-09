// Modify this file only

//references
const value = document.querySelector("#counter");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

//count is a global variable that will be modified by events
let counter = parseInt(value.innerText, 10);

increase.addEventListener("click", () => {
  value.innerHTML = counter++;
});

decrease.addEventListener("click", () => {
  value.innerHTML = counter--;
});
