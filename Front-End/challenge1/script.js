// Modify this file only
const BUTTONS =  document.querySelectorAll("button")

const COUNTER_LAYOUT = document.getElementById("counter")

let counter = 0

const refresh_counter = () => {
    COUNTER_LAYOUT.innerHTML = counter
}

BUTTONS.forEach((elt)=>{
    elt.addEventListener('click', (e)=>{
        const {id} = e.target
        if (id === "increase" ) {
            counter++;
            refresh_counter()
            return;
            
        }

        counter--;
        refresh_counter()
    })
})

