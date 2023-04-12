document.getElementById("increase").addEventListener("click", () => {
  let countElement = document.getElementById("counter");
  let countValue = parseInt(countElement.innerText);
  console.log(countElement, countValue);
  countElement.innerHTML = countValue + 1;
});

document.getElementById("decrease").addEventListener("click", () => {
  let countElement = document.getElementById("counter");
  let countValue = parseInt(countElement.innerText);
  console.log(countElement, countValue);
  countElement.innerHTML = countValue - 1;
});
