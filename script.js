// script.js
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let expression = '';

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput.length < 15) { 
        currentInput += number;
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (firstOperand === '') {
            firstOperand = currentInput;
            expression = firstOperand;
        } else if (operator !== '') {
            calculateResult(); 
        }
        operator = op;
        expression += ' ' + operator + ' ';
        currentInput = '';
        updateDisplay();
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendParentheses(paren) {
    currentInput += paren;
    updateDisplay();
}

function calculateResult() {
    if (currentInput !== '' && operator !== '' && firstOperand !== '') {
        let result;
        let expressionToEvaluate = expression + ' ' + currentInput;
        
        
        expressionToEvaluate = expressionToEvaluate.replace(/x\^y/g, '**');
        
        
        try {
            result = eval(expressionToEvaluate);
        } catch (error) {
            result = 'Error';
        }
        
        display.innerText = result;
        currentInput = result;
        expression = '';
        operator = '';
        firstOperand = '';
    }
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = '';
    firstOperand = '';
    expression = '';
}

function performFunction(func) {
    if (currentInput !== '') {
        let value = parseFloat(currentInput);
        let result;

        switch (func) {
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case '1/x':
                result = 1 / value;
                break;
            case 'exp':
                result = Math.exp(value);
                break;
            case 'x^2':
                result = Math.pow(value, 2);
                break;
            case 'x^y':
                result = Math.pow(value, 2); 
                break;
            case 'pi':
                result = Math.PI;
                break;
            case 'e':
                result = Math.E;
                break;
            case 'sinh':
                result = Math.sinh(value);
                break;
            case 'cosh':
                result = Math.cosh(value);
                break;
            case 'tanh':
                result = Math.tanh(value);
                break;
            case 'asin':
                result = Math.asin(value);
                break;
            case 'acos':
                result = Math.acos(value);
                break;
            case 'atan':
                result = Math.atan(value);
                break;
            case 'factorial':
                result = factorial(value);
                break;
            case 'abs':
                result = Math.abs(value);
                break;
            case 'nCr':
                
                result = 'Not Implemented';
                break;
            case 'nPr':
                
                result = 'Not Implemented';
                break;
        }

        display.innerText = result;
        currentInput = result;
    }
}

function toggleAdvancedFunctions() {
    let advancedFunctions = document.getElementById('advanced-functions');
    if (advancedFunctions.style.display === 'none') {
        advancedFunctions.style.display = 'grid';
    } else {
        advancedFunctions.style.display = 'none';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
