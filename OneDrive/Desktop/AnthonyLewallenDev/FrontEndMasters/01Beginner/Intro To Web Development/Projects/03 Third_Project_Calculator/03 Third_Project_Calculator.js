console.log("🚀Calculator Running!🚀")


const display = document.querySelector(".result-screen");

// This selects all of the div in the calculator class instead of just the the whole calculator class.
const buttons = document.querySelectorAll(".calculator .button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value || button.innerHTML || button.innerText;

        switch (value) {
    case "C":
        display.value = "";
        break;
    case "backspace":
    case "<-":
        display.value = display.value.slice(0,-1);
        break;
    case "=":  // This should work now
        display.value = eval(display.value);
        break;
    case "x":  // Changed from "x" to "×"
        display.value +="*";
        break;
    case "÷":  // This should already work
        display.value += "/";
        break;
    case "+":
        display.value += "+";
        break;
    case "-":  // Changed from "-" to "−" (HTML minus entity)
        display.value += "-";
        break;
    default:
        display.value += value;
}
    });
});




/*

Scaleable version

let buffer = '0';
let runningTotal = 0;
let previousOperator;
const resultScreen = document.querySelector('.result-screen);

function handleNumber(number) {
    console.log('number');
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
        }
    console.log(buffer);   
}

function handleSymbol(symbol) {
    console.log('symbol');

    // This is where we use the switch statement

    switch (symbol) {

        case: 'C':
            buffer ="0";
            break;
        case 'backspace':
            if (buffer.length === 1) {
               buffer = '0'
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case: '=';
            console.log('equals');
            break;
        case "x":  // Changed from "x" to "×"
            display.value +="*";
            break;
        case "÷":  // This should already work
            display.value += "/";
            break;
        case "+":
            display.value += "+";
            break;
        case "-":  // Changed from "-" to "−" (HTML minus entity)
            display.value += "-";
            break;
        default:
            display.value += value;
    
    }

}


function handleMath(value) {

    if (buffer === '0') {
        return;   // do nothing
    }

    const intBuffer = parseFloat(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperaton(intBuffer)
    }

    previousOperator = value;
    buffer = '0';

}


function flushOperation (intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') { 
        runningTotal -= intBuffer;
    } else if (previousOperator === 'x' {
        runningTotal *= intBuffer;
    } else if (previousOperator === 'divide' {
        runningTotal /= intBuffer;
     
    }
}

function buttonClick(value) {
    console.log(value);
    if (isNaN(parseFloat(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value);
    }
    
    reRender();  

}




function init() {
    document
        .querySelector('.buttons-container')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });


}

function reRender() {
    resultScreen.innerText = buffer;
}

init();







*/