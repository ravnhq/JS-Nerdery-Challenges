let counter = 0;

const element_counter = document.getElementById("counter");

decrease = () => {
  counter != 0 ? (counter = counter - 1) : (counter = 0);
  element_counter.innerText = counter;
};

increase = () => {
  counter = counter + 1;
  element_counter.innerText = counter;
};

document.getElementById("increase").addEventListener("click", increase);
document.getElementById("decrease").addEventListener("click", decrease);
