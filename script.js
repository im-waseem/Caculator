// Get the display element
const display = document.querySelector('.display');

// Add event listener to the buttons container
document.querySelector('.buttons').addEventListener('click', function(event) {
    const button = event.target;

    // Check if the clicked element is a button
    if (!button.matches('button')) return;

    const buttonValue = button.textContent;

    // Handle button clicks
    if (buttonValue === '=') {
        try {
            // Evaluate the expression
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    } else if (buttonValue === 'C') {
        // Clear the display
        display.textContent = '0';
    } else {
        // Append the clicked button value to the display
        if (display.textContent === '0') {
            display.textContent = buttonValue;
        } else {
            display.textContent += buttonValue;
        }
    }
});

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the pressed key is a number or an operator
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/') {
        event.preventDefault();

        // Append the pressed key value to the display
        if (display.textContent === '0') {
            display.textContent = key;
        } else {
            display.textContent += key;
        }
    } else if (key === 'Enter') {
        event.preventDefault();
        
        try {
            // Evaluate the expression
            display.textContent = eval(display.textContent);
        } catch (error) {
            display.textContent = 'Error';
        }
    } else if (key === 'Backspace') {
        // Clear the display
        display.textContent = '0';
    }
});
