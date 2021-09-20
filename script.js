// Get the buttons to add eventlisteners
const buttonContainer = document.querySelector('.buttons');

const buttons = buttonContainer.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', checkInput)
});

function checkInput(e) {
    const input = e.target.textContent;
    if (isNaN(input)) {
        if (input == "C") {
            // clearAll();
        } else if (input == "=") {
            // calculate();
        } else if (input == ",") {
            // comma();
        } else {
            storeOpAndDigit(input)
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