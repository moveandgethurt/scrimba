/*
1 meter = 3.281 feet
1 foot = 0.305 meters
1 liter = 0.264 gallon
1 gallon = 3.785 liters
1 kilogram = 2.204 pound
1 pound = 0.454 kilograms
*/

const lengthConvert = document.getElementById("length-convert");
const volumeConvert = document.getElementById("volume-convert");
const massConvert = document.getElementById("mass-convert");
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

let inputValue = 0;
let inputs = [];

function getValue(number) {
    inputValue = number.value;
}

convertBtn.addEventListener("click", function() {
    inputs.push(inputValue);
    localStorage.setItem("inputValue", inputValue);
    localStorage.setItem("inputs", inputs);
    if (inputValue < 0) {
        lengthConvert.innerHTML = `cannot convert a value that is less than zero`;
        volumeConvert.innerHTML = `cannot convert a value that is less than zero`;
        massConvert.innerHTML = `cannot convert a value that is less than zero`;
    } else if (inputValue == 0) {
        lengthConvert.innerHTML = `cannot convert a value that is equal to zero`;
        volumeConvert.innerHTML = `cannot convert a value that is equal to zero`;
        massConvert.innerHTML = `cannot convert a value that is equal to zero`;
    }  else if (inputValue == 1) {
        lengthConvert.innerHTML = `${inputValue} meter = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} foot = ${(inputValue*0.305).toFixed(3)} meters`;
        volumeConvert.innerHTML = `${inputValue} liter = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallon = ${(inputValue*3.785).toFixed(3)} liters`;
        massConvert.innerHTML = `${inputValue} kilo = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pound = ${(inputValue*0.454).toFixed(3)} kilos`;
    } else {
        lengthConvert.innerHTML = `${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue*0.305).toFixed(3)} meters`;
        volumeConvert.innerHTML = `${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue*3.785).toFixed(3)} liters`;
        massConvert.innerHTML = `${inputValue} kilos = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue*0.454).toFixed(3)} kilos`;
    };
})

