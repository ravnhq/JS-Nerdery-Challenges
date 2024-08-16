let count = document.getElementById("counter");
const increse = document.getElementById("increase")
    .onclick = e => {
        count.textContent = parseInt(count.innerText) + 1;
    };

const decrese = document.getElementById("decrease")
    .onclick = e => {
        count.textContent = (count.innerText) - 1;
    };