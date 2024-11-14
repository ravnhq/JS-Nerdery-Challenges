// Modify this file only

const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const spanCounter = document.getElementById("counter");

function getCurrentCount() {
  return Number(spanCounter.innerText);
}

btnIncrease.addEventListener("click", () => {
  spanCounter.innerText = getCurrentCount() + 1;
});


btnDecrease.addEventListener("click", () => {
    spanCounter.innerText = getCurrentCount() - 1;
  });