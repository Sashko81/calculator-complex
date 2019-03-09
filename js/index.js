const display = document.querySelector('.display');
const historyDisplay = document.querySelector('.history-display');

//add event listener 'click' for all buttons
document.querySelectorAll('.simple-operators button, .digits button').forEach(button=>button.addEventListener('click', digitsopersPressed));

//if any button clicked, on display apear its value
function digitsopersPressed(e) {
    display.value += e.target.innerHTML;
    historyDisplay.style.visibility = 'hidden';
    historyDisplay.value = display.value + " = ";
}

//calculating simple equation with +, -, *, /
document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed() {
    display.value = eval(display.value);
    historyDisplay.style.visibility = 'visible';
}

// Clean button
document.querySelector('.clean').addEventListener('click', pressClean);
function pressClean() {
    historyDisplay.value = "Last result: " + display.value;
    display.value = " ";
}

// Backspace button
document.querySelector('.backspace').addEventListener('click', removeLastSymbol);
function removeLastSymbol() {
    display.value = display.value.substring(0, display.value.length - 1);
}

//PI
const PI = document.getElementById('pi');
PI.addEventListener('click', convertToPi);
function convertToPi(pi) {
    display.value += pi.innerHTML = Math.PI.toFixed(6);
}

//SQRT
document.getElementById('sqrt').addEventListener('click', findRoot);
function findRoot() {
    historyDisplay.value = `√ ${display.value} = `;
    historyDisplay.style.visibility = 'visible';
    display.value < 0 ? display.value = "Incorrect input!" : display.value = Math.sqrt(display.value);
}

//Exponentiation
document.getElementById('exp').addEventListener('click', Exponentiation);
function Exponentiation() {
    historyDisplay.value = `${display.value}² = `;
    historyDisplay.style.visibility = 'visible';
    display.value = Math.pow(display.value, 2);
}

//Persentage
document.getElementById('percent').addEventListener('click', findPercentage);
function findPercentage() {
    historyDisplay.value = `${display.value}% = `;
    historyDisplay.style.visibility = 'visible';
    display.value /= 100;
}

//sin
document.getElementById('sin').addEventListener('click', findSin);
function findSin() {
    historyDisplay.value = `sin(${display.value}) = `;
    historyDisplay.style.visibility = 'visible';
    display.value = Math.sin(display.value * Math.PI / 180).toFixed(8);
}

//cos
document.getElementById('cos').addEventListener('click', findCos);
function findCos() {
    historyDisplay.value = `cos(${display.value}) = `;
    historyDisplay.style.visibility = 'visible';
    display.value = Math.cos(display.value * Math.PI / 180).toFixed(8);
}

//tan
document.getElementById('tan').addEventListener('click', findTan);
function findTan() {
    historyDisplay.value = `tan(${display.value}) = `;
    historyDisplay.style.visibility = 'visible';
    display.value = Math.tan(display.value * Math.PI / 180).toFixed(8);
}

//change sign 
document.getElementById('change-sign').addEventListener('click', changeSign);
function changeSign() {
    if (display.value.substring(0, 1) == "-") {
        display.value = display.value.substring(1, display.value.length);
    } else {
        display.value = "-" + display.value;
    }
}
