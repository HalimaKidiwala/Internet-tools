// JavaScript to perform factorial calculation as described in the guidelines
// Get references to the dark and light mode buttons
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

// Event listeners for the dark and light mode buttons
darkBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
});

lightBtn.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const inputNumber = document.getElementById('inputNumber').value;
    let factorial = 1;
    for (let i = 1; i <= inputNumber; i++) {
        factorial *= i;
    }
    document.getElementById('resultScreen').innerText = inputNumber + '! = ' + factorial;
});

