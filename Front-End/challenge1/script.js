// Modify this file only
const btnincrease = document.getElementById('increase');
const btndecrease = document.getElementById('decrease');

btnincrease.addEventListener('click', function () {
    let count = document.getElementById('counter');
    count.textContent=Number(count.textContent)+1;
})

btndecrease.addEventListener('click', function () {
    let count = document.getElementById('counter');
    count.textContent=Number(count.textContent)-1;
})

//document.getElementById("increase")