/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
const btn_number = document.getElementsByTagName("button")
const calc_display = document.getElementById("display")
let first_val = 0
let second_val = 0
let calc_operator = ""

for( let i = 0 ; btn_number.length>i ; i++){
  btn_number[i].addEventListener("click", e => {
    switch (btn_number[i].textContent) {
      case "+":
        calc_operator = "+"
        first_val = parseFloat(calc_display.textContent)
        calc_display.textContent = "0"
        break;
      case "-":
        calc_operator = "-"
        first_val = parseFloat(calc_display.textContent)
        calc_display.textContent = "0"
        break;
      case "/":
          calc_operator = "/"
          first_val = parseFloat(calc_display.textContent)
          calc_display.textContent = "0"
          break;
      case "X":
          calc_operator = "X"
          first_val = parseFloat(calc_display.textContent)
          calc_display.textContent = "0"
          break;
      case "=":
        second_val = parseInt(calc_display.textContent)
        if(calc_operator === "+"){
          calc_display.textContent = first_val + second_val
        }else if(calc_operator === "-"){
          calc_display.textContent = first_val - second_val
        }else if(calc_operator === "/"){
          calc_display.textContent = first_val / second_val
        }else if(calc_operator === "X"){
          calc_display.textContent = first_val * second_val}
        break;
      default:
        if( calc_display.textContent === "0"){
          calc_display.textContent = btn_number[i].textContent
        }else{
          calc_display.textContent += btn_number[i].textContent
        }
    }
  })
}