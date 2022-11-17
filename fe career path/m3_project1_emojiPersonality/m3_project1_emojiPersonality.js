const myEmojis = ["❤", "☠", "☺️"]
const emojiContainer = document.getElementById("emojiContainer");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (const emoji of myEmojis) {
        const emojiSpan = document.createElement('span');
        emojiSpan.textContent = emoji;
        emojiContainer.append(emojiSpan);
    }
}
renderEmojis();

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value);
        emojiInput.value = '';
        renderEmojis();
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value);
        emojiInput.value = '';
        renderEmojis();
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop();
    renderEmojis();
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift();
    renderEmojis();
})