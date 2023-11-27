inputText = "";
let operators = new Set();
operators.add('/')
operators.add('*')
operators.add('-')
operators.add('+')

function display(value) {
    console.log(inputText)
    if (edgeCases(value)) {return}
    if (value == '=') {return evaluate()}

    inputText += value;
    console.log(inputText)
    document.getElementById("screen").value = inputText;
}

function edgeCases(value) {
    if (value == 'AC') {
        inputText = '';
        document.getElementById("screen").value = inputText;
        return true;
    }

    if (value == 'DE') {
        if (inputText != '') {
            inputText = inputText.slice(0, -1);
        }
        document.getElementById("screen").value = inputText;
        return true;
    }
    return false;
}

function evaluate() {
    for (let i=0; i<inputText.length; i++) {
        if (operators.has(inputText[i])) {
            return calculate(inputText[i], inputText.slice(0, i), inputText.slice(i+1));
        }
    }
    return;
}

function calculate(operand, left, right) {
    // console.log(left)
    // console.log(right)
    if (isRationalNumber(left) && isRationalNumber(right)) {
        if (operand == '/') {
            res = parseFloat(left) / parseFloat(right);
        }
        if (operand == '*') {
            res = parseFloat(left) * parseFloat(right);
        }
        if (operand == '-') {
            res = parseFloat(left) - parseFloat(right);
        }
        if (operand == '+') {
            res = parseFloat(left) + parseFloat(right);
        }
        inputText = String(res)
        document.getElementById("screen").value = inputText;
    }
    else {
        inputText = ''
        document.getElementById("screen").value = "SYNTAX ERROR";
    }
    return;
}

function isRationalNumber(str) {
    const rationalNumberPattern = /^[-+]?\d+(\.\d+)?$/;
    return rationalNumberPattern.test(str);
}