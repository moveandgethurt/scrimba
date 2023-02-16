const seedColor = document.getElementById('seed-color');
const colorSchemeSelection = document.getElementById('color-scheme-selection');

let hexValuesArr = [];

document.getElementById('get-scheme').addEventListener('click', function() {
    let theColor = seedColor.value;
    let theScheme = colorSchemeSelection.options[colorSchemeSelection.selectedIndex].value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${theColor.slice(1)}&mode=${theScheme}`)
        .then(res => res.json())
        .then(data => {
            const dataColors = data.colors;
            dataColors.forEach(function(color){
                hexValuesArr.push(color.hex.value)
            })
            renderColors()        
    })
})

function renderColors() {
    let count = 0;
    let colorsHtml = '';
    let hexValuesHtml = '';
    hexValuesArr.forEach(function(hexValue){
        count++
        colorsHtml += `
            <div class="color" id="color-${count}" style="background-color: ${hexValue}"><p>${hexValue}</p></div>
        `;
        hexValuesHtml += `
            <div class="hex-value" id="hex-value-${count}"><p>${hexValue}</p></div>
        `;
    })
    document.getElementById('colors').innerHTML = colorsHtml; 
    document.getElementById('hex-values').innerHTML = hexValuesHtml; 

    handleInsert()

    hexValuesArr = [];
}

handleInsert()

function handleInsert() {
    let hexValueIds = [];
    let colorIds = [];
    for (let i = 1; i <= 5; i++) {
        hexValueIds.push(`hex-value-${i}`);
        colorIds.push(`color-${i}`)
    }

    handleCopying(hexValueIds);
    handleCopying(colorIds);
}

function handleCopying(valueIds) {
    valueIds.forEach(function(value){
        copyToClipboard(document.getElementById(value));
    })
}

function copyToClipboard(value) {
    value.addEventListener("click", function(){
        navigator.clipboard.writeText(value.textContent).then(() => {
            alert(`${value.textContent} is copied to clipboard!`);
        });
    });
}