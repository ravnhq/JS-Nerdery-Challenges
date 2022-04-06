const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const span = document.getElementById("counter");
let i = 0;

increase.addEventListener("click", function (e) {
    i++;
    span.innerHTML = i;
});

decrease.addEventListener("click", function (e) {
    i--;
    span.innerHTML = i;
});
