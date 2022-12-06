import { tweetsData } from './m5_project3_twitterClone_data.js';

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');
const feed = document.getElementById('feed');

tweetBtn.addEventListener('click', function() {
    console.log(tweetInput.value);
})

document.addEventListener('click', function(e){
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    }
    else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet);
    }
})

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(tweet => tweet.uuid === tweetId)[0];
    targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++
    targetTweetObj.isLiked = !targetTweetObj.isLiked;
    render();
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(tweet => tweet.uuid === tweetId)[0];
    targetTweetObj.isRetweeted ? targetTweetObj.retweets-- : targetTweetObj.retweets++
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
    render();
}

function getFeedHtml(data){
    let feedHtml = ``;
    data.forEach(function(i){
        feedHtml += `
        <div class="tweet">
            <div class="tweet-inner">
                <img src="${i.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${i.handle}</p>
                    <p class="tweet-text">${i.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" 
                            data-reply="${i.uuid}"></i>
                            ${i.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart" 
                            data-like="${i.uuid}"></i>
                            ${i.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" 
                            data-retweet="${i.uuid}"></i>
                            ${i.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
        </div>
        `;
    })    
    return feedHtml;
}
    
function render(){
    feed.innerHTML = getFeedHtml(tweetsData);
}
    
render();