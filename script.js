function calculate() {
    var real1 = parseFloat(document.getElementById('real1').value);
    var imaginary1 = parseFloat(document.getElementById('imaginary1').value);
    var real2 = parseFloat(document.getElementById('real2').value);
    var imaginary2 = parseFloat(document.getElementById('imaginary2').value);
    var operator = document.getElementById('operator').value;

    var resultReal, resultImaginary;

    switch (operator) {
        case '+':
            resultReal = real1 + real2;
            resultImaginary = imaginary1 + imaginary2;
            break;
        case '-':
            resultReal = real1 - real2;
            resultImaginary = imaginary1 - imaginary2;
            break;
        case '*':
            resultReal = (real1 * real2) - (imaginary1 * imaginary2);
            resultImaginary = (real1 * imaginary2) + (imaginary1 * real2);
            break;
        case '/':
            var denominator = (real2 * real2) + (imaginary2 * imaginary2);
            resultReal = ((real1 * real2) + (imaginary1 * imaginary2)) / denominator;
            resultImaginary = ((imaginary1 * real2) - (real1 * imaginary2)) / denominator;
            break;
        default:
            alert("Operator tidak valid!");
            return;
    }

    document.getElementById('result').value = resultReal + ' + ' + resultImaginary + 'i';
}
