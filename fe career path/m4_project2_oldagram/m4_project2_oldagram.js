import { posts } from './m4_project2_oldagram_data.js';

const postSection = document.getElementById('post-section');

posts.forEach(({ avatar, name, location, map, post, wiki, likes, username, comment, likeIcon, commentIcon, dmIcon}) => {
    postSection.innerHTML += `
        <div class='post-container'>
            <div class='user-info-container'>
                <a href='${wiki}' target='_blank' rel='noopener noreferrer'>
                    <img id='avatar' src='./images/${avatar}'>
                </a>
                <div class='name-location'>
                    <a href='${wiki}' target='_blank' rel='noopener noreferrer'>
                        <span id='name'>${name}</span>
                    </a>
                    <a href='${map}' target='_blank' rel='noopener noreferrer'>
                        <span id='location'>${location}</span>
                    </a>
                </div>
            </div>
            <div class='post-image-container'>
                <img id='post' src='./images/${post}'>
            </div>
            <div class='icon-container'>
                <img id='icon-heart' class='icon icon-heart' src='./${likeIcon.normal}' alt='icon heart'>
                <img id='icon-comment' class='icon icon-comment' src='./${commentIcon.normal}' alt='icon comment'>
                <img id='icon-dm' class='icon icon-dm' src='./${dmIcon.normal}' alt='icon dm'>
            </div>
            <div class='likes-container'>
                <span id='likes'>${likes} likes</span>
            </div>
            <div class='comment-info-container'>
                <a href='${wiki}' target='_blank' rel='noopener noreferrer'>
                    <span id='username'>${username}</span>
                </a> <span id='comment'>${comment}</span>
            </div>
        </div>
    `;
})

// sticky header onscroll

window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// // icons behavior
// const iconHeartEl = document.getElementById('icon-heart');
// const iconCommentEl = document.getElementById('icon-comment');
// const iconDmEl = document.getElementById('icon-dm');
// const likesEl = document.getElementById('likes');

// // icon heart behavior
// iconHeartEl.addEventListener("mouseover", function() {
//     iconHeartEl.src = likeIcon.hover;
// })
// iconHeartEl.addEventListener("mouseout", function() {
//     iconHeartEl.src = likeIcon.normal;
// })
// iconHeartEl.addEventListener("click", function() {
//     likes++;
//     likesEl.innerHTML = likes + " likes";
//     iconHeartEl.src = likeIcon.click;
//     iconHeartEl.addEventListener("mouseout", function() {
//         iconHeartEl.src = likeIcon.click;
//     })
// })
// iconHeartEl.addEventListener("dblclick", function() {
//     iconHeartEl.src = likeIcon.normal;
//     iconHeartEl.addEventListener("mouseout", function() {
//         iconHeartEl.src = likeIcon.normal;
//     })
// })

// // icon comment behavior
// iconCommentEl.addEventListener("mouseover", function() {
//     iconCommentEl.src = commentIcon.hover;
// })
// iconCommentEl.addEventListener("mouseout", function() {
//     iconCommentEl.src = commentIcon.normal;
// })
// iconCommentEl.addEventListener("click", function() {
//     iconCommentEl.src = commentIcon.click;
//     iconCommentEl.addEventListener("mouseout", function() {
//         iconCommentEl.src = commentIcon.click;
//     })
// })
// iconCommentEl.addEventListener("dblclick", function() {
//     iconCommentEl.src = commentIcon.normal;
//     iconCommentEl.addEventListener("mouseout", function() {
//         iconCommentEl.src = commentIcon.normal;
//     })
// })

// // icon dm behavior
// iconDmEl.addEventListener("mouseover", function() {
//     iconDmEl.src = dmIcon.hover;
// })
// iconDmEl.addEventListener("mouseout", function() {
//     iconDmEl.src = dmIcon.normal;
// })
// iconDmEl.addEventListener("click", function() {
//     iconDmEl.src = dmIcon.click;
//     iconDmEl.addEventListener("mouseout", function() {
//         iconDmEl.src = dmIcon.click;
//     })
// })
// iconDmEl.addEventListener("dblclick", function() {
//     iconDmEl.src = dmIcon.normal;
//     iconDmEl.addEventListener("mouseout", function() {
//         iconDmEl.src = dmIcon.normal;
//     })
// })

//     postEl.addEventListener('dblclick', function() {
//         likes++;
//         likesEl.innerHTML = likes + " likes";
//         iconHeartEl.src = "images/icon-heart-click.png";
//         iconHeartEl.addEventListener("mouseout", function() {
//             iconHeartEl.src = "images/icon-heart-click.png";
//         })
//     })
