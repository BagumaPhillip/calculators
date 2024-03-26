function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        var result = eval(display.value);
        if (!isNaN(result)) {
            display.value = parseFloat(result.toFixed(2));
        } else {
            display.value = 'Error';
        }
    } catch (e) {
        display.value = 'Error';
    }
}
