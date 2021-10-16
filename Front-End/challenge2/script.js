/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
let result = document.getElementById("display");
var resultValue, oldValue, currentValue = 0;
var action;

calculate = (oldValue, action, currentValue) => {
   if (action === "add") {resultValue = oldValue + currentValue;} 
   else if (action === "subtrack") {resultValue = oldValue - currentValue;} 
   else if (action === "multiplication") {resultValue = oldValue * currentValue;} 
   else if (action === "division") {resultValue = oldValue / currentValue;}
   return resultValue;
};

restartDisplay = () => {
   result.innerText = "0";
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
   if (button?.className === "operation-btn") {
      if (button?.id === "division") {
         button.addEventListener("click", () => {
            action = "division";
            oldValue = result.innerText;
            restartDisplay();
         });
      } else if (button?.id === "multiplication") {
         button.addEventListener("click", () => {
            action = "multiplication";
            oldValue = result.innerText;
            restartDisplay();
         });
      } else if (button?.id === "subtrack") {
         button.addEventListener("click", () => {
            action = "subtrack";
            oldValue = result.innerText;
            restartDisplay();
         });
      } else if (button?.id === "add") {
         button.addEventListener("click", () => {
            action = "add";
            oldValue = result.innerText;
            restartDisplay();
         });
      } else if (button?.id === "equals") {
         button.addEventListener("click", () => {
            if (action && oldValue) {
               let n1 = oldValue;
               let n2 = result.innerText;
               resultValue = calculate(n1, action, n2);
               if (resultValue) {result.innerText = resultValue;}
            }
         });
      }
   } else {
      button.addEventListener("click", () => {
         if (result.innerText === "0") {result.innerText = button.innerText;} 
         else {result.innerText += button.innerText;}
      });
   }
});
