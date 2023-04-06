const counterSpan = document.getElementById('counter')
const increaseButton = document.getElementById('increase')
const decreaseButton = document.getElementById('decrease')

let counterValue = 0


increaseButton.addEventListener('click', () => {
    counterValue++
    counterSpan.textContent = counterValue
})

decreaseButton.addEventListener('click', () => {
    counterValue--
    counterSpan.textContent = counterValue
})