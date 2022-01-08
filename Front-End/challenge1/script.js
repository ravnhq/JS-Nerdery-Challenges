// Modify this file only
const counter = document.getElementById('counter');
let counterValue = parseInt(document.getElementById('counter').innerText, 10);
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});

decrease.addEventListener('click', () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
