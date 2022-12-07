import { tweetsData } from './m5_project3_twitterClone_data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// listen for clicks

document.addEventListener('click', function(e){
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like);
    }
    else if (e.target.dataset.retweet) {
        handleRetweetClick(e.target.dataset.retweet);
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply);
    }
    else if(e.target.id === 'tweet-btn'){
            handleTweetBtnClick();
    }
})

// handle clicks

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

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden');
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input');

    if (tweetInput.value) {
        tweetsData.unshift(
            {
                handle: `@Scrimba`,
                profilePic: `images/scrimbalogo.png`,
                likes: 0,
                retweets: 0,
                tweetText: `${tweetInput.value}`,
                replies: [],
                isLiked: false,
                isRetweeted: false,
                uuid: uuidv4()
            }
        );
    }
    render();
    tweetInput.value = '';
}

// render the feed

function getFeedHtml(data){
    let feedHtml = ``;
    data.forEach(function(i){
        let likeIconClass = '';
        let retweetIconClass = '';

        if (i.isLiked) {
            likeIconClass = 'liked';
        } else if (i.isRetweeted) {
            retweetIconClass = 'retweeted';
        }

        let repliesHtml = '';

        if (i.replies.length > 0) {
            for (let reply of i.replies) {
                repliesHtml += `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                </div>
                `;
            }
        }

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
                            <i class="fa-solid fa-heart ${likeIconClass}" 
                            data-like="${i.uuid}"></i>
                            ${i.likes}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}" 
                            data-retweet="${i.uuid}"></i>
                            ${i.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
            <div class="hidden" id="replies-${i.uuid}">
                ${repliesHtml}
            </div>  
        </div>
        `;
    })    
    return feedHtml;
}
    
function render(){
    document.getElementById('feed').innerHTML = getFeedHtml(tweetsData);
}
    
render();


// stretch goals:
// - add the ability to reply to a specific tweet
// - save tweets, likes, and retweets to localStorage
// - allow a user to delete a tweet
// - achieve the likeliness with real Twitter (usernames, ui, etc.)
// - your own idea!