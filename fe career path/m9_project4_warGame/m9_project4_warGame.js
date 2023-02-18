let deckId
const newDeckBtn = document.getElementById('new-deck');
const drawCardsBtn = document.getElementById('draw-cards');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

function newDeck() {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
        })
}

function drawCards() {
    if (deckId) {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(res => res.json())
            .then(data => {
                card1.innerHTML = `<img src="${data.cards[0].image}">`;
                card2.innerHTML = `<img src="${data.cards[1].image}">`;
            })
    } else { alert(`Click 'New Deck' first to draw new cards!`) }
}

newDeckBtn.addEventListener('click', newDeck)
drawCardsBtn.addEventListener('click', drawCards)
