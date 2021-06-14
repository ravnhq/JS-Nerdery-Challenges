const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const count = document.getElementById('counter')

decrease.addEventListener('click', ()=>{
    count.textContent--;
})

increase.addEventListener('click', () =>{
    count.textContent++;
})