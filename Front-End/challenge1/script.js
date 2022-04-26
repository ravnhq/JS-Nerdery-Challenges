// Modify this file only
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const counter = document.getElementById('counter');

function counting(nro) {
  let current = +(counter.innerText);
  current += nro;
  counter.innerText = current;
}
decrease.addEventListener('click', () => {
  counting(-1);
});
increase.addEventListener('click', () => {
  counting(1);
});
