/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
let calcButtons=document.querySelectorAll('button');
let display=document.querySelector('#display');

let formulaString='';

calcButtons.forEach(function(btn){
    btn.addEventListener('click',function(){
        processButton(this);
    })
})

const processButton = (key) =>{
    console.log(key.textContent)
    let regex = /^(?!.*[\/X+\-]{2,}).*$/;
    if(!regex.test(formulaString+key.textContent)) return
    if(key.textContent==='='){
        var tempString=formulaString.replace('X','*');
        var result=String(eval(tempString));
        display.textContent=formulaString=result;
    }else{
        formulaString+=key.textContent;
        display.textContent=formulaString;
    }
}