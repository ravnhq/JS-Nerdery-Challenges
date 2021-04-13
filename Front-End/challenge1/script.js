function modifyCount(event) {
    const span = document.querySelector('span');
    if (event.target.action == 'increase') {
        span.textContent = parseInt(span.textContent) + 1;
    }
    if (event.target.action == 'decrease')
        span.textContent = parseInt(span.textContent) - 1;
}

const btnIncrease = document.getElementById('increase');
btnIncrease.action = 'increase';
btnIncrease.addEventListener('click', modifyCount);


const btnDecrease = document.getElementById('decrease');
btnDecrease.action = 'decrease';
btnDecrease.addEventListener('click', modifyCount);
