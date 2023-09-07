const btns = document.querySelectorAll('.button__number');
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.screen');
const screenP = document.querySelector('.screen-p');
const equal = document.querySelector('.button__equal')
const aC = document.querySelector('.reset')
const dot = document.querySelector('.button__spot')
const cE = document.querySelector('.delete')

let firstNum = ''
let secondNum = ''
let ope = ''
let result = ''
let eq = 0

function reset(){
    screen.textContent = 0
    firstNum = ''
    secondNum = ''
    ope = ''
    screenP.textContent = ''
    eq = 0
    result = ''
    dot.disabled = false
}

// function onClick(){
//     reset()
//     btns.forEach(btn =>{
//         btn.removeEventListener('click', onClick)
//         })
//     } ;

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
        return num1 / num2
    }
}

cE.addEventListener('click', del)

aC.addEventListener('click',reset)

equal.addEventListener('click', () =>{
    if(eq == 1){
    console.log(operation(firstNum, ope , secondNum));
     firstNum = parseFloat(screen.textContent);
     
    }else if(screenP !== '')
    secondNum = parseFloat(screen.textContent)
    screenP.textContent = ''
    screen.textContent = operation(firstNum, ope, secondNum)
    result = screen.textContent
    firstNum = parseFloat(screen.textContent)
     eq = 1
    console.log(secondNum)
    console.log(firstNum)
    if(screen.textContent == ''){
    screen.textContent = 0
    }
    habiliteDot()
});


btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(screen.textContent == 0){
            screen.textContent = ''
        }
         else if(screen.textContent == result){
            screen.textContent = ''
             firstNum = ''
             secondNum = ''
             ope = ''
             result = ''
             eq = 0
       }
        screen.textContent += btn.textContent
        disabledDot()
        habiliteDot()

    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () =>{
        if ((firstNum !== '') && (secondNum !== '')){
            secondNum = ''
            screenP.textContent = `${screen.textContent} ${operator.textContent}`
            screen.textContent = 0
            eq = 0
            ope = operator.textContent
        }
       
       else if(firstNum !== ''){
            secondNum = parseFloat(screen.textContent)
            screenP.textContent = operation(firstNum, ope, secondNum)
            firstNum = parseFloat(screenP.textContent)
            ope = operator.textContent
            screenP.textContent += ` ${ope}`
            screen.textContent = 0
            secondNum = ''
            eq = 0
           
        }else{
        screenP.textContent = `${screen.textContent} ${operator.textContent}`
        firstNum = parseFloat(screen.textContent)
        ope = operator.textContent
        screen.textContent = 0}
        habiliteDot()
    });
});

function disabledDot(){
    if(screen.textContent.includes('.')){
        dot.disabled = true
    }
}

function habiliteDot(){
    if(!screen.textContent.includes('.')){
        dot.disabled = false
}
}

function del(){
    screen.textContent = screen.textContent.slice(0, -1)
    console.log(screen.textContent)
}