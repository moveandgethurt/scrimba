import dogData from './m7_project2_tindog_data.js'
import Dog from './m7_project2_tindog_Dog.js'

let dogsArray = ['rex', 'bella', 'teddy']

function getNewDog() {
    const nextDogData = dogData[dogsArray.shift()];
    return nextDogData ? new Dog(nextDogData) : endGame();
}

function renderLike() {
    document.getElementById('badge').innerHTML = `
            <img class="badge" 
                id="badge-like"
                src="./images/badge-like.png"
                alt="badge like">`;

    setTimeout(()=>{
        dog = getNewDog();
        render()
    }, 1000);
}

function renderNope() {
    document.getElementById('badge').innerHTML = `
            <img class="badge" 
                id="badge-nope"
                src="./images/badge-nope.png"
                alt="badge nope">`;
    setTimeout(()=>{
        dog = getNewDog();
        render()
    }, 1000);
}

function endGame() {
    document.querySelector('main').innerHTML = `
            <div id="end-message">
                <p>There's no one new around you :(</p>
                <p>Check back later!</p>
                <button id="try-again-btn" type="button" onClick="window.location.reload()">
                    TRY AGAIN
                </button>
            </div>
            `
}

function render() {
    document.getElementById('hero-section').innerHTML = dog.getDogHtml();
}

document.getElementById("like-btn").addEventListener('click', renderLike)
document.getElementById("nope-btn").addEventListener('click', renderNope)

let dog = getNewDog();
render();