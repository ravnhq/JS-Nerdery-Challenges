let counter=0;
let increaseBtn=document.querySelector("#increase");
let decreaseBtn=document.querySelector("#decrease");

const updateCounter=(action) =>{
    if(action==='decrease')
        counter--;
    else
        counter++;
    updateDOM();
}

const updateDOM= () => {
    let counterSpan=document.querySelector("#counter");
    counterSpan.textContent=counter;
}

increaseBtn.addEventListener('click',function(){
    updateCounter('increase');
})

decreaseBtn.addEventListener('click',function(){
    updateCounter('decrease');
})