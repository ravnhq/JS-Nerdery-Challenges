// Modify this file only

// assign elements from the dom
const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

// functions
const increaseCounter = () => {
  counterValue++;
  counterDisplay.innerHTML = counterValue;
};

const decreaseCounter = () => {
  counterValue--;
  counterDisplay.innerHTML = counterValue;
};
// assign counter to inner value of span
let counterValue = counterDisplay.innerHTML;
// event listeners
increaseButton.addEventListener("click", increaseCounter);
decreaseButton.addEventListener("click", decreaseCounter);
