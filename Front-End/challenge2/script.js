const buttons = document.querySelectorAll('button')
let input = ''
let currentOperation = ''

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', function (event) {
        const clickedId = event.target.id

        switch (clickedId) {
            case 'add':
                currentOperation += " + ";
                input = '';
                break;
            case 'subtrack':
                currentOperation += " - ";
                input = '';
                break;
            case 'multiplication':
                currentOperation += " * ";
                input = '';
                break;
            case 'division':
                currentOperation += " / ";
                input = '';
                break;
            case 'equals':
                input = eval(currentOperation) === Infinity ? 'Error' : eval(currentOperation)

                break;
            default:
                input += event.target.innerHTML
                currentOperation += event.target.innerHTML
                break;
        }

        document.getElementById('display').innerHTML = input
    })
}

