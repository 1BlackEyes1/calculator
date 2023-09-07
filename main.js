const btns = document.querySelectorAll('.button__number');
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.screen');
const screenP = document.querySelector('.screen-p');
const equal = document.querySelector('.button__equal')
const aC = document.querySelector('.reset')

let firstNum = ''
let secondNum = ''
let ope = ''

aC.addEventListener('click',reset)

equal.addEventListener('click', () =>{
    secondNum = parseInt(screen.textContent)
    screenP.textContent = ''
    screen.textContent = operation(firstNum, ope, secondNum)

    if(screen.textContent == ''){
    screen.textContent = 0
}
    
    btns.forEach(btn =>{
        btn.addEventListener('click', onClick)
        
});
});

function reset(){
    screen.textContent = 0
    firstNum = ''
    secondNum = ''
    ope = ''
    screenP.textContent = ''
}

function onClick(){
    reset()
    btns.forEach(btn =>{
        btn.removeEventListener('click', onClick)
        })
    } ;

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(screen.textContent == 0){
            screen.textContent = ''
        }
        screen.textContent += btn.textContent
        console.log('write')
    });
});

//disable true para el punto

operators.forEach(operator => {
    operator.addEventListener('click', () =>{
        if(firstNum !== ''){
            secondNum = parseInt(screen.textContent)
            screenP.textContent = operation(firstNum, ope, secondNum)
            firstNum = parseInt(screenP.textContent)
            ope = operator.textContent
            screenP.textContent += ` ${ope}`
            screen.textContent = 0
        }else{
        screenP.textContent = `${screen.textContent} ${operator.textContent}`
        firstNum = parseInt(screen.textContent)
        ope = operator.textContent
        screen.textContent = 0}
        
    });
});




function operation(num1, sym, num2){
    if(sym == '+'){
      return num1 + num2
    }

    else if(sym == '-'){
        return num1 - num2
    }
    
    else if(sym == '*'){
        return num1 * num2
    }

    else if(sym== '/'){
        return num1 * num2
    }
}






