let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let resultEl = document.getElementById("result-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let result = num1 + num2;
    resultEl.textContent = "The result of addition is " + result + "!";
}

function subtract() {
    let result = num1 - num2;
    resultEl.textContent = "The result of subtraction is " + result + "!";
}

function divide() {
    let result = num1 / num2;
    resultEl.textContent = "The result of division is " + result + "!";
}

function multiply() {
    let result = num1 * num2;
    resultEl.textContent = "The result of multiplication is " + result + "!";
}

function newNumbers() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    document.getElementById("num1-el").textContent = num1;
    document.getElementById("num2-el").textContent = num2;
    resultEl.textContent = "What would your result be today?";
}