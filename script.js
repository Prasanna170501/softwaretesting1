document.getElementById('checkButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number) || number < 1) {
        resultElement.textContent = 'Please enter a positive integer.';
        return;
    }

    if (isPrime(number)) {
        resultElement.textContent = `${number} is a prime number.`;
    } else {
        resultElement.textContent = `${number} is not a prime number.`;
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
