// Modify this file only
const dataSpan = document.getElementById('counter')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')

const operation = (type) => {
    let currentValue = Number(dataSpan.textContent)
    if(type === '+'){
        currentValue++
    }else if(type === '-'){
        currentValue--
    }
    dataSpan.innerHTML = currentValue.toString()
}

increaseBtn.addEventListener('click', ()=>operation('+'))

decreaseBtn.addEventListener('click', ()=>operation('-'))