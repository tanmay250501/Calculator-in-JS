document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const display = document.querySelector('.display input');
    let currentInput = []; // Array to store the input values

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const buttonValue = e.target.value;

            if (buttonValue === 'AC') {
                currentInput = [];
                display.value = '';
            } else if (buttonValue === 'DE') {
                currentInput.pop();
                display.value = currentInput.join('');
            } else if (buttonValue === '=') {
                try {
                    const expression = currentInput.join('').replace(/X/g, '*');
                    const result = eval(expression);
                    display.value = result;
                    currentInput = [result];
                } catch {
                    display.value = 'Error';
                    currentInput = [];
                }
            } else {
                if (display.value === 'Error') {
                    display.value = '';
                }
                currentInput.push(buttonValue);
                display.value = currentInput.join('');
            }
        });
    });
});
