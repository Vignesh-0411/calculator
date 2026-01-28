let display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearAll() {
    currentInput = '0';
    display.textContent = '0';
    shouldResetDisplay = false;
}

function backspace() {
    currentInput = currentInput.slice(0, -1) || '0';
    display.textContent = currentInput;
}

function calculate() {
    try {
        let expression = currentInput.replace(/×/g, '*');
        let result = eval(expression);
        if (!isFinite(result)) throw new Error();
        display.textContent = result;
        currentInput = result.toString();
        shouldResetDisplay = true;
    } catch {
        display.textContent = 'Error';
        currentInput = '0';
        shouldResetDisplay = true;
    }
}