let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let leaderEl = document.getElementById("leader-el");

let homeCount = 0;
let guestCount = 0;

// home functions

function homePlusOne() {
    homeCount++;
    homeScore.innerText = homeCount;
}
function homePlusTwo() {
    homeCount+=2;
    homeScore.innerText = homeCount;
}
function homePlusThree() {
    homeCount+=3;
    homeScore.innerText = homeCount;
}

// guest functions

function guestPlusOne() {
    guestCount++;
    guestScore.innerText = guestCount;
}
function guestPlusTwo() {
    guestCount+=2;
    guestScore.innerText = guestCount;
}
function guestPlusThree() {
    guestCount+=3;
    guestScore.innerText = guestCount;
}

// new game function

function newGame() {
    homeCount = 0;
    guestCount = 0;
    homeScore.innerText = homeCount;
    guestScore.innerText = guestCount;
}

// leader function

function leader() {
    if (homeCount > guestCount) {
        leaderEl.innerText = "HOME";
    }
    else if (guestCount > homeCount) {
        leaderEl.innerText = "GUEST";
    }
    else {
        leaderEl.innerText = "TIE";
    }
}