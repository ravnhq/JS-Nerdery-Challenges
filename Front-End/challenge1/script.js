const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
let counterNumber = document.getElementById('counter');

increaseBtn.addEventListener('click', () => {
    counterNumber.innerHTML = ++counterNumber.innerHTML;
});

decreaseBtn.addEventListener('click', () => {
     counterNumber.innerHTML = --counterNumber.innerHTML;
});
