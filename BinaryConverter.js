/**
 * @fileoverview This script is designed to convert numbers from decimal to binary.
 * 
 * @description
 * The user enters a decimal number in a text field, and upon clicking the "Convert to Binary" button,
 * this number is converted to its binary representation. The result is displayed to the user. 
 * The script is designed to run directly from a web browser.
 * 
 * The HTML and CSS files are linked to this script and collectively form the user interface 
 * for this functionality. The HTML file contains the page structure and input field, while the 
 * CSS file defines the appearance and styling of the page elements.
 * 
 * @requires No dependencies on external libraries; uses only native JavaScript for browser execution.
 */

// Assigns a click event to the button for converting the number.
document.getElementById('convertButton').onclick = function() {
    // Retrieve elements from the DOM for working with user input and output.
    var inputElement = document.getElementById('decimalInput'); // Text field element for entering a decimal number.
    var decimalInput = inputElement.value; // Get the current value from the text field.
    var resultElement = document.getElementById('result'); // Element to display the conversion result.

    // Check for empty input
    if (decimalInput === '') {
        // Sets the text content of the result element if the condition is met.
        resultElement.textContent = 'Error: Input cannot be empty!';
        return;
    }

    // Check the first character for a minus sign or zero
    if (decimalInput[0] === '-') {
        resultElement.textContent = 'Error: Number cannot be negative!';
        return;
    }

    if (decimalInput[0] === '0' && decimalInput.length === 1) {
        resultElement.textContent = 'Error: Number cannot be zero!';
        return;
    }

    var decimalNumber = 0;
    var isValidNumber = true;

    // Validate characters to ensure they are digits (numeric input check)
    for (var i = 0; i < decimalInput.length; i++) {
        var digit = decimalInput[i];
        // This condition checks each digit individually to ensure it is within 0-9 (indicating numeric input).
        if (digit < '0' || digit > '9') {
            isValidNumber = false;
            break;
        }
        // Convert the numeric string to a number.
        // Multiply by 10 to shift numbers to the left ("to add the next digit").
        // (digit - '0') = Gets the numerical value of the digit (since '0' in ASCII is 48, and the following digits proceed sequentially).
        decimalNumber = decimalNumber * 10 + (digit - '0');
    }

    // Validate the number's validity
    if (!isValidNumber) {
        resultElement.textContent = 'Error: Input must contain only digits!';
        return;
    }

    // Convert to binary
    var binaryString = '';
    while (decimalNumber > 0) {
        binaryString = (decimalNumber % 2) + binaryString;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    // Display the result
    resultElement.textContent = 'Binary: ' + binaryString;
};
