// Modify this file only
const app = document.querySelector('body');
const counterDisplay = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
let count = parseInt(counterDisplay.innerText);

const increaseCount = () => {
  count += 1;
  counterDisplay.innerText = count;
};

const decreaseCount = () => {
  if (count > 0) {
    count -= 1;
  }
  counterDisplay.innerText = count;
};

app.addEventListener('click', (e) => {
  if (e.target === decreaseButton) {
    decreaseCount();
  } else if (e.target === increaseButton) {
    increaseCount();
  }
});
