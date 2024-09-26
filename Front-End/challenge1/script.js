let reference = 0;

function boardCounter() {
    document.getElementById('counter').innerHTML = reference;
}

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.addEventListener('click', function() {
    handleClickIncrease()
    boardCounter()
});
decrease.addEventListener('click', function() {
    handleClickDecrease()
    boardCounter()
});

function handleClickIncrease() {
    reference += 1
}

function handleClickDecrease() {
    reference -= 1
}