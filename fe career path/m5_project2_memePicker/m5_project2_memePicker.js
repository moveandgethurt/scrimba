import { catsData } from './data.js';

const emotionRadios = document.getElementById('emotion-radios');
const getImageBtn = document.getElementById('get-image-btn');
const gifsOnlyOption = document.getElementById('gifs-only-option');
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn');

emotionRadios.addEventListener('change', highlightCheckedOption);
getImageBtn.addEventListener('click', renderCat);
memeModalCloseBtn.addEventListener('click', function() {
    memeModal.style.display = 'none';
})

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio');
    for (let radio of radios) {
        radio.classList.remove('highlight');
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

function getMatchingCatsArray() {
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const isGif = gifsOnlyOption.checked;
        // const matchingCatsArray = catsData.filter(cat => cat.emotionTags.includes(selectedEmotion) && cat.isGif === isGif);
        const matchingCatsArray = catsData.filter(function(cat){
            return (isGif
            ? cat.emotionTags.includes(selectedEmotion) && cat.isGif
            : cat.emotionTags.includes(selectedEmotion));
        })
        return matchingCatsArray
    } 
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray();
    return (catsArray.length === 1 
    ? catsArray[0]
    : catsArray[Math.floor(Math.random() * catsArray.length)]);
}

function renderCat(){
    const catObject = getSingleCatObject();
    memeModalInner.innerHTML = `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
    `;
    memeModal.style.display = 'flex';
}

function getEmotionsArray(cats){
    const emotionsArr = [];
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArr.includes(emotion)) {
                emotionsArr.push(emotion)
            }
        } 
    }
    return emotionsArr;
}

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats);
    let radioItems = '';
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input 
                type="radio" 
                id="${emotion}"
                value="${emotion}"
                name="emotion-radios"
                >
        </div>
        `;
    }
    emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData)

