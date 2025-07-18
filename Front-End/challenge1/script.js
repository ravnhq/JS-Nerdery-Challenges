// Modify this file only
let counter = document.getElementById("counter").innerText;

function increaseCounter() {
  counter = parseInt(counter) + 1;
  document.getElementById("counter").innerText = counter;
}

function decreaseCounter() {
  counter = parseInt(counter) - 1;
  document.getElementById("counter").innerText = counter;
}

document.getElementById("increase").addEventListener("click", increaseCounter);
document.getElementById("decrease").addEventListener("click", decreaseCounter);