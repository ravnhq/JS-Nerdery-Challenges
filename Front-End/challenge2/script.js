/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

let firstNumber = ''
let secondNumber = ''
let operator = null
let currentDisplay = ''
let state = 0
const divDisplay = document.getElementById('display')
const buttonOne = document.getElementById('one')
const buttonTwo = document.getElementById('two')
const buttonThree = document.getElementById('three')
const buttonFour = document.getElementById('four')
const buttonFive = document.getElementById('five')
const buttonSix = document.getElementById('six')
const buttonSeven = document.getElementById('seven')
const buttonEight = document.getElementById('eight')
const buttonNine = document.getElementById('nine')
const buttonZero = document.getElementById('zero')
const buttonMultiplication = document.getElementById('multiplication')
const buttonSubtrack = document.getElementById('subtrack')
const buttonEquals = document.getElementById('equals')
const buttonAdd = document.getElementById('add')
const buttonDivision = document.getElementById('division')
const ERROR_MSG_INVALID = 'Invalid dividend'

const pressOperation = (type) => {
    try {
        if(state === 0){
            if(['+','-'].includes(type) && firstNumber.length === 0){
                firstNumber+=type
            }else{
                state = 1
                operator = type
            }
        }else if(state === 1){
            if(['+','-'].includes(type) && secondNumber.length === 0){
                secondNumber+=type
            }else{
                solve(false)
                operator = type
            }
        }
        currentDisplay += type
        divDisplay.innerHTML = currentDisplay
    } catch (error) {
        console.log(error)
    }
}
const pressNumber = (number) => {
    if(state === 0){
        firstNumber+=number.toString()
    }else if(state === 1){
        secondNumber+=number.toString()
    }
    currentDisplay += number.toString()
    divDisplay.innerHTML = currentDisplay
}
const resetData = () => {
    firstNumber = ''
    currentDisplay = ''
    state = 0
    operator = null
}
const solve = (equalPressed) => {
    try {
        let result = null
        switch (operator) {
            case '+':
                result = Number(firstNumber) + Number(secondNumber)
                break;
            case '-':
                result = Number(firstNumber) - Number(secondNumber)
                break;
            case '*':
                result = Number(firstNumber) * Number(secondNumber)
                break;
            case '/':
                if(Number(secondNumber) === 0){
                    throw new Error(ERROR_MSG_INVALID)
                }
                result = Number(firstNumber) / Number(secondNumber)
                break;
            default:
                break;
        }

        if(equalPressed){
            resetData()
            divDisplay.innerHTML = result.toString()
        }else{
            firstNumber = result
            currentDisplay = result
            state = 1   
            divDisplay.innerHTML = currentDisplay.toString()
        }
        secondNumber = ''
    } catch (error) {
        console.log(error)
        resetData()
        if(error.message === ERROR_MSG_INVALID){
            divDisplay.innerHTML = error.message
            throw new Error(error.message)
        }
    }
}

buttonOne.addEventListener('click', ()=>pressNumber(1))
buttonTwo.addEventListener('click', ()=>pressNumber(2))
buttonThree.addEventListener('click', ()=>pressNumber(3))
buttonFour.addEventListener('click', ()=>pressNumber(4))
buttonFive.addEventListener('click', ()=>pressNumber(5))
buttonSix.addEventListener('click', ()=>pressNumber(6))
buttonSeven.addEventListener('click', ()=>pressNumber(7))
buttonEight.addEventListener('click', ()=>pressNumber(8))
buttonNine.addEventListener('click', ()=>pressNumber(9))
buttonZero.addEventListener('click', ()=>pressNumber(0))

buttonMultiplication.addEventListener('click', ()=>pressOperation('*'))
buttonSubtrack.addEventListener('click', ()=>pressOperation('-'))
buttonEquals.addEventListener('click', ()=>{
    try {
        solve(true)
    } catch (error) {
        console.log(error)
    }
})
buttonAdd.addEventListener('click', ()=>pressOperation('+'))
buttonDivision.addEventListener('click', ()=>pressOperation('/'))


