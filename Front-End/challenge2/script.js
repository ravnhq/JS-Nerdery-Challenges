/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
let result = document.getElementById("display");
var resultValue,
   oldValue,
   currentValue = 0;
var action;
var flagControl = false;

calculate = (oldValue, action, currentValue) => {
   switch (action) {
      case "add":
         {
            resultValue = Number(oldValue) + Number(currentValue);
         }
         break;
      case "subtrack":
         {
            resultValue = Number(oldValue) - Number(currentValue);
         }
         break;
      case "multiplication":
         {
            resultValue = Number(oldValue) * Number(currentValue);
         }
         break;
      case "division": {
         resultValue = Number(oldValue) / Number(currentValue);
      }
   }

   return resultValue;
};

restartDisplay = () => {
   result.innerText = "0";
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
   if (button?.className === "operation-btn") {
      switch (button?.id) {
         case "division":
            {
               button.addEventListener("click", () => {
                  action = "division";
                  oldValue = result.innerText;
                  restartDisplay();
               });
            }
            break;

         case "multiplication":
            {
               button.addEventListener("click", () => {
                  action = "multiplication";
                  oldValue = result.innerText;
                  restartDisplay();
               });
            }
            break;
         case "subtrack":
            {
               button.addEventListener("click", () => {
                  action = "subtrack";
                  oldValue = result.innerText;
                  restartDisplay();
               });
            }
            break;
         case "add":
            {
               button.addEventListener("click", () => {
                  action = "add";
                  oldValue = result.innerText;
                  restartDisplay();
               });
            }
            break;
         case "equals": {
            button.addEventListener("click", () => {
               if (action && oldValue) {
                  let n1 = oldValue;
                  let n2 = result.innerText;
                  resultValue = calculate(n1, action, n2);
                  console.log(resultValue);
                  if (resultValue) {
                     result.innerText = resultValue;
                  }
               }
            });
         }
      }
   } else {
      button.addEventListener("click", () => {
         if (result.innerText === "0") {
            result.innerText = button.innerText;
         } else {
            result.innerText += button.innerText;
            console.log(result.innerText);
         }
      });
   }
});
