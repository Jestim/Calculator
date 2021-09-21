// Get the buttons to add eventlisteners
const buttonContainer = document.querySelector('.buttons');

const buttons = buttonContainer.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', checkInput)
});

function checkInput(e) {
    const input = e.target.textContent;
    if (isNaN(input)) {
        switch (input) {
            case "=":
                calculate();
                break;
            case ",":
                // comma();
                break;
            case "C":
                clearAll();
                break;
            default:
                storeOpAndDigit(input);
        }
    } else {
        storeDigit(input);
    }
}


// Record the input and store the digit until an operator is pressed
let currentDigit = "";

function storeDigit(input) {
    currentDigit += input;
    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = currentDigit;
}


// Store the operator and the previous digit for later calculation
// and reset the currentDigit and display
let previousDigit = "";
let operator = "";

function storeOpAndDigit(op) {
    operator = op;
    previousDigit = currentDigit;
    currentDigit = "";
    updateDisplay();
}


function calculate() {
    switch (operator) {
        case "+":
            currentDigit = add(Number(previousDigit), Number(currentDigit));
            operator = "";
            break;
        case "-":
            currentDigit = subtract(Number(previousDigit), Number(currentDigit));
            operator = "";
            break;
        case "*":
            currentDigit = multiply(Number(previousDigit), Number(currentDigit));
            operator = "";
            break;
        case "/":
            currentDigit = devide(Number(previousDigit), Number(currentDigit));
            if (currentDigit == "ERROR") {
                updateDisplay();
                setTimeout(clearAll, 2000);
            }
            operator = "";
            break;
    }
    updateDisplay();
}

function comma() {
    // TODO
}

function clearAll() {
    currentDigit = "";
    previousDigit = "";
    operator = "";
    updateDisplay();
}


// Operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    if (b == 0) {
        return "ERROR";
    }
    return Math.round(((a / b) + Number.EPSILON) * 100000) / 100000;
}