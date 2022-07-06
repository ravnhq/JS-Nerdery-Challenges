// Modify this file only
const buttonIncrease = document.querySelector('#increase');
const buttonDecrease = document.querySelector('#decrease');
const counterSpan = document.querySelector('#counter');
let i = 0;
buttonIncrease.addEventListener('click', (event) => {
  i++;
  counterSpan.innerHTML = i;
});
