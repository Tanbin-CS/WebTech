let currentInput = '0';
let shouldResetDisplay = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function calculate() {
    try {
        // Validate: only allow numbers, operators, dots, and spaces
        if (!/^[0-9+\-*/.\s]+$/.test(currentInput)) {
            currentInput = 'Error';
            updateDisplay();
            return;
        }
        const result = Function('"use strict"; return (' + currentInput + ')')();
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            currentInput = 'Error';
        } else {
            currentInput = String(result);
        }
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}
