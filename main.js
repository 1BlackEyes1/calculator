const btns = document.querySelectorAll('.button__number');
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.screen');
const screenP = document.querySelector('.screen-p');
const equal = document.querySelector('.button__equal')

let firstNum = ''
let secondNum = ''
let ope = ''
let result = ''

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(screen.textContent == 0){
            screen.textContent = ''
        };
        screen.textContent += btn.textContent
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () =>{
        screenP.textContent = `${screen.textContent} ${operator.textContent}`
        screen.textContent = ''
    });
});

equal.addEventListener('click', () =>{
     
});


function add(a, b){
    return a + b
}

function substract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}


