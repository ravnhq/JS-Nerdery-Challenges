// Modify this file only
const display_counter = document.getElementById("counter")
const btn_increase = document.getElementById("increase")
const btn_decrease = document.getElementById("decrease")

btn_increase.addEventListener( "click" , e => {
  display_counter.textContent = parseInt(display_counter.textContent) + 1 
  console.log(display_counter.textContent)
})

btn_increase.addEventListener( "click" , e => {
  display_counter.textContent = parseInt(display_counter.textContent) + 1 
  console.log(display_counter.textContent)
})