const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const display = document.getElementById("counter");
let counter = 0;

increaseButton.addEventListener("click", function (e) {
  counter++;
  display.innerHTML = counter;
});

decreaseButton.addEventListener("click", function (e) {
  counter--;
  display.innerHTML = counter;
});
