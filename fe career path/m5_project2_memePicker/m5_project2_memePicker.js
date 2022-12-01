import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios');

function getEmotionsArray(cats){
    const emotionsArr = [];
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArr.push(emotion);
        } 
    }
    return emotionsArr;
}

function renderEmotionsRadios(cats){
    const emotions = getEmotionsArray(cats);
    let radioItems = '';
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`;
    }
    emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData)