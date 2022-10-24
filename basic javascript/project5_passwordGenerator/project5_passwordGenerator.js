let passwordEl = document.querySelector("#password")
let charactersLength = 0;

function getValue(radio) {
    charactersLength = radio.value;
}

function generatePassword() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    let password = "";

    for (let i = 0; i < charactersLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    
    passwordEl.textContent = password;
}

document.getElementById("password").addEventListener("click", copyToClipboard);

function copyToClipboard() {
    navigator.clipboard.writeText(passwordEl.textContent).then(() => {
        passwordEl.textContent = "copied to clipboard";
    });
}