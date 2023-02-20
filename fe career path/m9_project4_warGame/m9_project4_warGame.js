let deckId;
let card1score = 0;
let card2score = 0;

const newDeckBtn = document.getElementById('new-deck');
const drawCardsBtn = document.getElementById('draw-cards');
const card1el = document.getElementById('card-1');
const card2el = document.getElementById('card-2');
const remainingEl = document.getElementById('remaining');
const deckIdEL = document.getElementById('deck-id');
const titleEl = document.getElementById('title');
const computerScoreEl = document.getElementById('computer-score');
const myScoreEl = document.getElementById('my-score');

newDeckBtn.addEventListener('click', newDeck);
drawCardsBtn.addEventListener('click', drawCards);

async function newDeck() {
    const res = await fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/');
    const data = await res.json();
    deckId = data.deck_id;
    remainingEl.textContent = `${data.remaining}`;
    deckIdEL.textContent = `deck id: ${deckId}`
    titleEl.textContent = 'Game of War';
    card1score = 0;
    card2score = 0;
    computerScoreEl.textContent = card1score;
    myScoreEl.textContent = card2score;
    drawCardsBtn.disabled = false;
}

async function drawCards() {
    if (deckId) {
        const res = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`);
        const data = await res.json();
        card1el.innerHTML = `<img src="${data.cards[0].image}">`;
        card2el.innerHTML = `<img src="${data.cards[1].image}">`;
        titleEl.textContent = getWinner(data.cards[0], data.cards[1]);
        remainingEl.textContent = `${data.remaining}`;
        drawCardsBtn.disabled = false;
        if (data.remaining === 0) {
            drawCardsBtn.disabled = true;
            titleEl.textContent = card1score > card2score ? 
                'Computer wins the game!' : card2score > card1score ? 
                'You win the game!' : `It's a complete war!`;
        }
    } else { alert(`Click 'New Deck' first to draw new cards!`) }
}

function getWinner(card1, card2) {
    const valueArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1index = valueArr.indexOf(card1.value);
    const card2index = valueArr.indexOf(card2.value);
    if (card1index > card2index) {
        card1score ++;
        computerScoreEl.textContent = card1score;
        return 'Computer wins!';
    } else if (card1index < card2index) {
        card2score++;
        myScoreEl.textContent = card2score;
        return 'You win!';
    } else {
        return `War!`;
    }
}

