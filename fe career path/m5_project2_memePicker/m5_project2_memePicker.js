import { catsData } from './data.js';

const emotionRadios = document.getElementById('emotion-radios');

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio');
    for (let radio of radios) {
        radio.classList.remove('highlight');
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight');
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

